import {
  Account,
  Client,
  Databases,
  ID,
  Query,
  AppwriteException,
} from 'appwrite';
import { useState } from 'react';

// ✅ Initialize Appwrite Client
const client = new Client();
client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string);

// ✅ Services
export const account = new Account(client);
export const databases = new Databases(client);

type FormData = {
  fullName: string;
  age: string;
  dob: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  district: string;
  address: string;
  gender: string;
  institutionName: string;
  degree: string;
  department: string;
  areaOfInterest: string;
  instituteId: string;
  approvalLetter: string;
  resume: string;
  linkedinProfile: string;
  githubProfile: string;
  portfolio: string;
  agreement: boolean;
};

const [formData] = useState<FormData>({
  fullName: "",
  age: "",
  dob: "",
  email: "",
  phone: "",
  country: "",
  state: "",
  district: "",
  address: "",
  gender: "",
  institutionName: "",
  degree: "",
  department: "",
  areaOfInterest: "",
  instituteId: "",
  approvalLetter: "",
  resume: "",
  linkedinProfile: "",
  githubProfile: "",
  portfolio: "",
  agreement: false,
});

// ✅ Environment IDs
const DB_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string;
const INTERN_COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_INTERN_COLLECTION_ID as string;

// ✅ Role type for user
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

// ✅ Auth Response
export interface AuthResponse {
  success: boolean;
  user?: User | null;
  error?: Error | AppwriteException;
}

// ✅ Create a new account + intern document
export async function createAccount(
  email: string,
  password: string,
  name: string,
  role: Role
): Promise<AuthResponse> {
  try {
    // Create Appwrite account
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      name
    );

    // Create intern document in collection
   await databases.createDocument(
  process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
  process.env.NEXT_PUBLIC_APPWRITE_INTERN_COLLECTION_ID!,
  ID.unique(),
  {
    email: formData.email,
    fullName: formData.fullName,
    gender: formData.gender,
    age: formData.age,
    dob: formData.dob,
    phone: formData.phone,
    country: formData.country,
    state: formData.state,
    district: formData.district,
    address: formData.address,
    institutionName: formData.institutionName,
    degree: formData.degree,
    department: formData.department,
    areaOfInterest: formData.areaOfInterest,
    instituteId: formData.instituteId,
    approvalLetter: formData.approvalLetter,
    resume: formData.resume,
    githubProfile: formData.githubProfile,
    linkedinProfile: formData.linkedinProfile,
    portfolio: formData.portfolio,
    agreement: formData.agreement
  }
);


    // Log in after registration
    return login(email, password);
  } catch (error) {
    console.error('❌ Account creation failed:', error);
    return {
      success: false,
      error: error as AppwriteException,
    };
  }
}

// ✅ Get the currently logged-in user
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
      createdAt: userData.createdAt,
      companyId: userData.companyId,
    };
  } catch (error) {
    console.error('❌ Failed to get current user:', error);
    return null;
  }
}

// ✅ Login user
export async function login(
  email: string,
  password: string
): Promise<AuthResponse> {
  try {
    const currentUser = await getCurrentUser().catch(() => null);

    if (currentUser) {
      console.log('✅ User already logged in.');
      return { success: true, user: currentUser };
    }

    await account.createEmailPasswordSession(email, password);
    const user = await getCurrentUser();

    if (!user) throw new Error('Failed to fetch user data after login');

    // Optionally redirect to dashboard
    if (typeof window !== 'undefined') {
      window.location.href = '/dashboard';
    }

    return { success: true, user };
  } catch (error) {
    console.error('❌ Login failed:', error);
    return {
      success: false,
      error: error as AppwriteException,
    };
  }
}

// ✅ Logout user
export async function logout(): Promise<{ success: boolean }> {
  try {
    await account.deleteSession('current');
    return { success: true };
  } catch (error) {
    console.error('❌ Logout failed:', error);
    return { success: true }; // treat logout as successful
  }
}
