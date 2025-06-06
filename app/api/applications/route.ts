// /app/api/applications/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Client, Databases, ID, Storage } from 'appwrite';
import formidable from 'formidable';
import { readFile } from 'fs/promises';
import path from 'path';

// Disable default body parsing
export const config = {
  api: {
    bodyParser: false,
  },
};

// Init Appwrite
const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

const databases = new Databases(client);
const storage = new Storage(client);

// Utility to parse multipart form
const parseForm = async (req: NextRequest): Promise<{
  fields: Record<string, any>;
  files: Record<string, formidable.File>;
}> => {
  return new Promise((resolve, reject) => {
    const form = formidable({ multiples: false, uploadDir: '/tmp', keepExtensions: true });

    // @ts-ignore
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      // Convert formidable.Files to Record<string, formidable.File>
      const singleFiles: Record<string, formidable.File> = {};
      for (const key in files) {
        const file = files[key];
        if (Array.isArray(file)) {
          if (file[0]) singleFiles[key] = file[0];
        } else if (file) {
          singleFiles[key] = file;
        }
      }
      resolve({ fields, files: singleFiles });
    });
  });
};

// Main POST handler
export async function POST(req: NextRequest) {
  try {
    const { fields, files } = await parseForm(req);

    // Upload files to Appwrite bucket
    const approvalLetter = files.approvalLetter;
    const resume = files.resume;

    // Read files from disk and create Blob objects
    const approvalLetterBuffer = await readFile(approvalLetter.filepath);
    const approvalLetterFile = new File(
      [approvalLetterBuffer],
      approvalLetter.originalFilename || 'approvalLetter',
      {
        type: approvalLetter.mimetype ?? undefined,
        lastModified: approvalLetter.mtime ? new Date(approvalLetter.mtime).getTime() : Date.now(),
      }
    );

    const resumeBuffer = await readFile(resume.filepath);
    const resumeFile = new File(
      [resumeBuffer],
      resume.originalFilename || 'resume',
      {
        type: resume.mimetype ?? undefined,
        lastModified: resume.mtime ? new Date(resume.mtime).getTime() : Date.now(),
      }
    );

    const approvalLetterUpload = await storage.createFile(
      process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID!,
      ID.unique(),
      approvalLetterFile
    );

    const resumeUpload = await storage.createFile(
      process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID!,
      ID.unique(),
      resumeFile
    );

    // Create document in Appwrite
    const document = await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
      process.env.NEXT_PUBLIC_APPWRITE_INTERN_COLLECTION_ID!,
      ID.unique(),
      {
        ...fields,
        approvalLetter: approvalLetterUpload.$id,
        resume: resumeUpload.$id,
        agreement: fields.agreement === 'true', // Convert checkbox string to boolean
      }
    );

    return NextResponse.json({ success: true, document });
  } catch (error: any) {
    console.error('Form submit error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
