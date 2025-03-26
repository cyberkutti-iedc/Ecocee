import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  try {
    // Get the current path and URL
    const url = request.nextUrl;
    const pathname = url.pathname;
    
    // Check for Appwrite session cookie
    const sessionCookieName = '_appwrite_session';
    const authCookie = request.cookies.get(sessionCookieName);
    
    // If no cookie exists, the user is not authenticated
    const isAuthenticated = !!authCookie?.value;

    // Check if user is already logged in and trying to access login or register pages
    if (isAuthenticated && (pathname === '/login' || pathname === '/register')) {
      console.log("👤 User already logged in, redirecting to /dashboard...");
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // Protected routes that require authentication
    const protectedRoutes = [
      '/dashboard',
      
      '/profile',
      '/settings'
    ];

    // Check if the current request is already for the login page with a redirect parameter
    const isRedirectToLogin = pathname === '/login' && url.searchParams.has('redirect');
    
    // Only redirect if not already on a login page with redirect parameter
    if (!isAuthenticated && 
        !isRedirectToLogin && 
        protectedRoutes.some(route => pathname.startsWith(route))) {
      
      console.log(`🚫 No session found, redirecting to /login... (attempted: ${pathname})`);
      return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, request.url));
    }

    // For all other cases, proceed normally
    return NextResponse.next();
  } catch (error) {
    console.error("🔴 Middleware error:", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    "/register",
    "/dashboard/",
 
    "/profile/:path*",
    "/settings/:path*",
  ],
};