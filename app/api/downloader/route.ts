// import { NextResponse } from "next/server";
// import { Client, Storage } from "appwrite";

// const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
// const project = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;
// const storageBucketId = process.env.NEXT_PUBLIC_APPWRITE_STORAGE_ID;
// const fileId = process.env.NEXT_PUBLIC_APPWRITE_HDK_FILE_ID;

// // Prevent undefined env vars from causing .replace error
// if (!endpoint || !project || !storageBucketId || !fileId) {
//   throw new Error("Appwrite environment variables are not set properly.");
// }

// const client = new Client()
//   .setEndpoint(endpoint)
//   .setProject(project);

// const storage = new Storage(client);

// export async function GET() {
//   try {
//     // getFileDownload returns a Promise, so await it
//     const fileUrl = await storage.getFileDownload(storageBucketId as string, fileId as string);

//     return NextResponse.json({ fileUrl }, { status: 200 });
//   } catch (error) {
//     console.error("Download API Error:", error);
//     return NextResponse.json({ message: "Failed to generate download link" }, { status: 500 });
//   }
// }
