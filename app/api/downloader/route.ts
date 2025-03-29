import {  NextResponse } from "next/server";
import { Client, Storage } from "appwrite";

// Initialize Appwrite Client
const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string)


const storage = new Storage(client);
const storageBucketId = process.env.NEXT_PUBLIC_APPWRITE_STORAGE_ID as string;
const fileId = process.env.NEXT_PUBLIC_APPWRITE_HDK_FILE_ID as string; 

export async function GET() {
  try {
    // ✅ Generate file download URL
    const fileUrl = storage.getFileDownload(storageBucketId, fileId);

    return NextResponse.json({ fileUrl }, { status: 200 });
  } catch (error) {
    console.error("Download API Error:", error);
    return NextResponse.json({ message: "Failed to generate download link" }, { status: 500 });
  }
}
