import { NextRequest, NextResponse } from "next/server";
import { Client, Databases, Query } from "appwrite";

// Initialize Appwrite Client with API Key
const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string)


const databases = new Databases(client);
const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string;
const collectionId = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_NITI_ID as string;

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, licenseKey } = await req.json();

    if (!fullName || !email || !licenseKey) {
      return NextResponse.json({ message: "Full Name, Email, and License Key are required." }, { status: 400 });
    }

    // ✅ Query Appwrite to check if the email & license key exist
    const response = await databases.listDocuments(databaseId, collectionId, [
      Query.equal("Product_Key", licenseKey),
      Query.equal("Email", email),
    ]);

    if (response.documents.length === 0) {
      return NextResponse.json({ message: "Invalid Product Key or Email." }, { status: 400 });
    }

    const license = response.documents[0];

    // ✅ If the license is already used, return an error
    if (license.Used) {
      return NextResponse.json({ message: `License already used on ${license.Used_Timestamp}.` }, { status: 400 });
    }

    // ✅ License is valid & unused → Update `Used`, `Used_Timestamp`, and `fullName`
    await databases.updateDocument(databaseId, collectionId, license.$id, {
      fullName: fullName, // ✅ Store fullName in the database
      Used: true,
      Used_Timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ message: "License verified and full name saved successfully!" }, { status: 200 });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ message: `Error verifying license: ${(error as Error).message}` }, { status: 500 });
  }
}

// ✅ Allow GET requests for debugging
export async function GET() {
  return NextResponse.json({ message: "This API only supports POST requests." }, { status: 200 });
}
