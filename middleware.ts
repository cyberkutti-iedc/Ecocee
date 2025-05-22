import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  try {
    const url = request.nextUrl;
    const pathname = url.pathname;
    const sessionCookie = request.cookies.get("_appwrite_session");
    const isAuthenticated = !!sessionCookie?.value;

    console.log(`🔍 Middleware Check: Authenticated = ${isAuthenticated}, Path = ${pathname}`);

    if (isAuthenticated && pathname === "/login") {
      console.log("🔄 Redirecting to /dashboard...");
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    const protectedRoutes = ["/dashboard", "/profile", "/settings"];
    if (!isAuthenticated && protectedRoutes.some(route => pathname.startsWith(route))) {
      console.log(`🚫 No session found, redirecting to login`);
      return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error("🔴 Middleware error:", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}


export const config = {
  matcher: [
    "/login",
    "/register",
    "/dashboard/:path*", // Protect all dashboard routes
    "/profile/:path*",
    "/settings/:path*",
  ],
};
