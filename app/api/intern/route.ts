import { NextRequest, NextResponse } from 'next/server';
import { ID } from 'appwrite';
import { databases } from '@/lib/appwrite'; // adjust based on your path

const DB_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_INTERN_COLLECTION_ID!;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    const newDocument = await databases.createDocument(
      DB_ID,
      COLLECTION_ID,
      ID.unique(),
      formData
    );

    return NextResponse.json({ success: true, document: newDocument });
  } catch (error: any) {
    console.error('Error saving intern data:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
