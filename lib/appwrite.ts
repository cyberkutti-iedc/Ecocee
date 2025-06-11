import {
  Account,
  Client,
  Databases,
  ID,
  Query,
  AppwriteException,
  OAuthProvider,
} from 'appwrite';

// ✅ Initialize Appwrite Client
const client = new Client();

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string);

// ✅ Export Services
export const account = new Account(client);
export const databases = new Databases(client);
export { OAuthProvider }; // ✅ Exported to be used in other files

// ✅ Environment IDs
export const DB_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string;
export const INTERN_COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_INTERN_COLLECTION_ID as string;

// // ✅ Role Type
// export type Role = 'ceo' | 'manager' | 'cto' | 'intern';

// ✅ User Interface
export interface User {
  $id: string;
  email: string;
  // role: Role;
  name: string;
  createdAt?: string;
  companyId?: string;
}

// ✅ Auth Response Interface
export interface AuthResponse {
  success: boolean;
  user?: User | null;
  error?: Error | AppwriteException;
}

// ✅ Login with Google OAuth
export async function loginWithGoogle(): Promise<AuthResponse> {
  try {
    // 1. Start OAuth2 session
    await account.createOAuth2Session(
      OAuthProvider.Google,
      `${process.env.NEXT_PUBLIC_APP_URL}`, // Redirect on success
      `${process.env.NEXT_PUBLIC_APP_URL}/fail` // Redirect on failure
    );

    // 2. This line won't be reached due to redirect — fallback for testing
    return { success: true };
  } catch (error) {
    let errorMessage = 'Unknown error occurred';
    if (error instanceof AppwriteException) {
      errorMessage = error.message || `Appwrite Error: ${error.code}`;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    }

    console.error('❌ Google OAuth login failed:', errorMessage);

    return {
      success: false,
      error: new Error(errorMessage),
    };
  }
}

// ✅ Logout User
export async function logout(): Promise<{ success: boolean }> {
  try {
    await account.deleteSession('current');
    return { success: true };
  } catch (error) {
    console.error('❌ Logout failed:', error);
    return { success: true }; // Treat as success for UX
  }
}

// ✅ Get Currently Logged-in User
export async function getCurrentUser(): Promise<User | null> {
  try {
    const currentAccount = await account.get();

    const { documents } = await databases.listDocuments(
      DB_ID,
      INTERN_COLLECTION_ID,
      [Query.equal('email', currentAccount.email)]
    );

    if (!documents.length) return null;

    const userData = documents[0];

    return {
      $id: currentAccount.$id,
      email: userData.email,
      // role: userData.role,
      name: userData.fullName,
      createdAt: userData.$createdAt,
      companyId: userData.companyId,
    };
  } catch (error) {
    console.error('❌ Failed to get current user:', error);
    return null;
  }
}
