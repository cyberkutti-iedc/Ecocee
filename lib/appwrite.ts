import {
  Account,
  Client,
  Databases,
  ID,
  Query,
  AppwriteException,
} from 'appwrite';

// ✅ Initialize Appwrite Client
const client = new Client();

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string);

// ✅ Export Services
export const account = new Account(client);
export const databases = new Databases(client);

// ✅ Environment IDs
export const DB_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string;
export const INTERN_COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_INTERN_COLLECTION_ID as string;

// ✅ Role Type
export type Role = 'ceo' | 'manager' | 'cto' | 'intern';

// ✅ User Interface
export interface User {
  $id: string;
  email: string;
  role: Role;
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

// ✅ Login User
export async function login(email: string, password: string): Promise<AuthResponse> {
  try {
    // Avoid duplicate sessions
    const currentUser = await getCurrentUser().catch(() => null);

    if (currentUser) {
      console.log('✅ User already logged in.');
      return { success: true, user: currentUser };
    }

    await account.createEmailPasswordSession(email, password);
    const user = await getCurrentUser();

    if (!user) throw new Error('Failed to fetch user data after login');

    return { success: true, user };
  } catch (error) {
    console.error('❌ Login failed:', error);
    return {
      success: false,
      error: error as AppwriteException,
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
      role: userData.role,
      name: userData.fullName,
      createdAt: userData.$createdAt,
      companyId: userData.companyId,
    };
  } catch (error) {
    console.error('❌ Failed to get current user:', error);
    return null;
  }
}
