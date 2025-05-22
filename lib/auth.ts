'use client';

import { redirect } from 'next/navigation';
import { getCurrentUser, Role } from './appwrite';

interface AuthError extends Error {
  code?: number;
  response?: {
    message: string;
  };
}

/**
 * Require authentication to access a page
 * Redirects to login if user is not authenticated
 * @returns The current user if authenticated
 */
export async function requireAuth() {
  try {
    const user = await getCurrentUser();
    
    if (!user) {
      redirect('/login');
    }
    
    return user;
  } catch (error) {
    console.error('Authentication check failed:', error);
    redirect('/login');
  }
}

/**
 * Require specific role(s) to access a page
 * Redirects to dashboard if user doesn't have required role
 * @param allowedRoles Array of roles that are allowed to access the page
 * @returns The current user if authenticated and authorized
 */
export async function requireRole(allowedRoles: Role[]) {
  try {
    const user = await requireAuth();
    
    if (!allowedRoles.includes(user.role)) {
      console.warn(`User ${user.email} with role ${user.role} attempted to access restricted area`);
      redirect('/dashboard');
    }
    
    return user;
  } catch (error) {
    console.error('Authorization check failed:', error);
    redirect('/dashboard');
  }
}

/**
 * Check if a user has a specific role
 * @param user The user object
 * @param roles Array of roles to check against
 * @returns Boolean indicating if the user has one of the specified roles
 */
export function hasRole(user: { role: Role } | null, roles: Role[]): boolean {
  if (!user) return false;
  return roles.includes(user.role);
}

/**
 * Server-side authentication check
 * To be used in Server Components or Route Handlers
 */
export async function getServerSideUser() {
  try {
    const user = await getCurrentUser();
    return { user, error: null };
  } catch (error: unknown) {
    const authError = error as AuthError;
    return { 
      user: null, 
      error: {
        message: authError.response?.message || 'Authentication failed',
        code: authError.code || 500
      }
    };
  }
}