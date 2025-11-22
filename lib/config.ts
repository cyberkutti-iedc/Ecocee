/**
 * Environment Variables Configuration
 * 
 * IMPORTANT: Never expose sensitive keys in NEXT_PUBLIC_* variables
 * 
 * Public variables (safe to expose):
 * - NEXT_PUBLIC_* variables are embedded in client-side code
 * - Use only for publishable API keys, endpoint URLs, etc.
 * 
 * Secret variables (MUST be protected):
 * - Never prefix with NEXT_PUBLIC_
 * - Keep in .env.local (development) or .env.production.local (production)
 * - Access only from server-side code (API routes, server components, etc.)
 */

// ✅ Safe to use in browser
export const PUBLIC_CONFIG = {
  // Appwrite - Public Configuration
  APPWRITE_ENDPOINT: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || '',
  APPWRITE_PROJECT_ID: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '',
  APPWRITE_DATABASE_ID: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || '',
  APPWRITE_COLLECTION_ID: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID || '',

  // Clerk - Publishable Key
  CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || '',

  // Supabase - Public Configuration
  SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',

  // reCAPTCHA - Site Key (public)
  RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '',

  // App URLs
  APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'https://ecocee.in',
  API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://ecocee.in/api',
};

// ⚠️ Server-side only - DO NOT expose these to browser
// These functions will throw errors if called on client-side
export function getServerConfig() {
  if (typeof window !== 'undefined') {
    throw new Error('Cannot access server config from client');
  }

  return {
    // Clerk - Secret Key
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY || '',

    // Appwrite - Server API Key
    APPWRITE_API_KEY: process.env.APPWRITE_API_KEY || '',

    // Supabase - Service Role Key
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY || '',

    // reCAPTCHA - Secret Key
    RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY || '',

    // Database URLs
    DATABASE_URL: process.env.DATABASE_URL || '',

    // JWT Secrets
    JWT_SECRET: process.env.JWT_SECRET || '',
    JWT_EXPIRY: process.env.JWT_EXPIRY || '24h',

    // Email Configuration
    EMAIL_SERVICE: process.env.EMAIL_SERVICE || 'gmail',
    EMAIL_FROM: process.env.EMAIL_FROM || 'noreply@ecocee.in',
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD || '',

    // File Upload
    MAX_FILE_SIZE_MB: parseInt(process.env.MAX_FILE_SIZE_MB || '10'),
    ALLOWED_UPLOAD_TYPES: (process.env.ALLOWED_UPLOAD_TYPES || 'image/jpeg,image/png,application/pdf').split(','),

    // Security
    CORS_ORIGIN: process.env.CORS_ORIGIN || 'https://ecocee.in',
    SESSION_TIMEOUT_MS: parseInt(process.env.SESSION_TIMEOUT_MS || '86400000'), // 24 hours

    // Node Environment
    NODE_ENV: process.env.NODE_ENV || 'development',
    DEBUG: process.env.DEBUG === 'true',
  };
}

/**
 * Validate environment variables on startup
 */
export function validateEnvironment(): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  // Check public variables
  if (!process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT) {
    errors.push('NEXT_PUBLIC_APPWRITE_ENDPOINT is not set');
  }
  if (!process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID) {
    errors.push('NEXT_PUBLIC_APPWRITE_PROJECT_ID is not set');
  }

  // Check server variables (only if not in browser)
  if (typeof window === 'undefined') {
    if (!process.env.APPWRITE_API_KEY) {
      errors.push('APPWRITE_API_KEY is not set');
    }
    if (!process.env.JWT_SECRET) {
      errors.push('JWT_SECRET is not set');
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Safe way to access environment variables
 */
export function getEnv(key: string, defaultValue?: string): string {
  const value = process.env[key];
  
  if (!value) {
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    throw new Error(`Environment variable ${key} is not set`);
  }

  return value;
}

/**
 * Type-safe environment variables
 */
export const env = {
  // Public
  appwriteEndpoint: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || '',
  appwriteProjectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '',
  appwriteDatabaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || '',
  appwriteCollectionId: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID || '',

  clerkPublishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || '',

  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',

  recaptchaSiteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '',

  // Server-side only
  ...(typeof window === 'undefined' && {
    clerkSecretKey: process.env.CLERK_SECRET_KEY || '',
    appwriteApiKey: process.env.APPWRITE_API_KEY || '',
    supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY || '',
    recaptchaSecretKey: process.env.RECAPTCHA_SECRET_KEY || '',
    jwtSecret: process.env.JWT_SECRET || '',
  }),
};
