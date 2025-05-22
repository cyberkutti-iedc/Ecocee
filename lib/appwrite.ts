

import { Account, Client, Databases, ID, Query, AppwriteException} from 'appwrite';

// Initialize client (browser-side)
const client = new Client();
client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string);
  

// Server actions will be handled separately in /app/actions/appwrite-server.ts

// Initialize services (client-side only)
export const account = new Account(client);
export const databases = new Databases(client);

// Types
export type Role = 'ceo' | 'manager' | 'cto' | 'intern';

export interface User {
  $id: string;
  email: string;
  role: Role;
  name: string;
  createdAt?: string;
  companyId?: string;
}

export interface AuthResponse {
  success: boolean;
  user?: User | null;
  error?: Error | AppwriteException;
}

// Create new account
export async function createAccount(
  email: string, 
  password: string, 
  name: string, 
  role: Role
): Promise<AuthResponse> {
  try {
    // Create account
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      name
    );

    // Create user document (should ideally be moved to a server action)
    // For now maintaining in client code for compatibility
    await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID as string,
      ID.unique(),
      {
        email,
        fullName: name,
        role,
        companyId: '',
        createdAt: new Date().toISOString(),
        userId: newAccount.$id
      }
    );

    // Log in the user
    return login(email, password);
  } catch (error) {
    console.error('Account creation failed:', error);
    return { 
      success: false, 
      error: error as AppwriteException 
    };
  }
}

// Get current user
export async function getCurrentUser(): Promise<User | null> {
  try {
    // Get account details directly from Appwrite
    const currentAccount = await account.get();
    
    // Fetch user document from database
    const { documents } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID as string,
      [Query.equal("email", currentAccount.email)]
    );

    if (!documents.length) return null;
    
    const userData = documents[0];

    return {
      $id: currentAccount.$id,
      email: userData.email,
      role: userData.role,
      name: userData.fullName,
      createdAt: userData.createdAt,
      companyId: userData.companyId
    };
  } catch (error) {
    console.error("Failed to get current user:", error);
    return null;
  }
}



export async function login(email: string, password: string): Promise<AuthResponse> {
  try {
    const currentUser = await getCurrentUser().catch(() => null);

    if (currentUser) {
      console.log("✅ User already logged in, skipping session creation.");
      return { success: true, user: currentUser };
    }

    await account.createEmailPasswordSession(email, password);
    const user = await getCurrentUser();

    if (!user) {
      throw new Error("Failed to fetch user data after login");
    }

    // 🔥 Force reload after login
    if (typeof window !== "undefined") {
      window.location.href = "/dashboard";
    }

    return { success: true, user };
  } catch (error) {
    console.error("❌ Login failed:", error);
    return { success: false, error: error as AppwriteException };
  }
}




// ...existing code...
// Logout
export async function logout(): Promise<{ success: boolean }> {
  try {
    await account.deleteSession('current');
    return { success: true };
  } catch (error) {
    console.error('Logout failed:', error);
    return { success: true }; // Consider logout successful even if session deletion fails
  }
}

