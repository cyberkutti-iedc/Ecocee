// app/api/login/route.ts
import { NextResponse } from 'next/server';
import { OAuthProvider, Account, Client } from 'appwrite';

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

const account = new Account(client);

export async function POST() {
  try {
    await account.createOAuth2Session(
      OAuthProvider.Google,
      // `${process.env.NEXT_PUBLIC_APP_URL}/user`, // Redirect after login
      // `${process.env.NEXT_PUBLIC_APP_URL}/fail` // Redirect if user cancels
    );

    return NextResponse.json({ message: 'OAuth login initiated' }, { status: 200 });


    

  
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'OAuth login failed' }, { status: 500 });
  }
}
