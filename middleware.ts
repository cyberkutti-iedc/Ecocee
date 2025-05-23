import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  try {
    const url = request.nextUrl;
    const pathname = url.pathname;
    const host = request.headers.get("host") || "";
    const sessionCookie = request.cookies.get("_appwrite_session");
    const isAuthenticated = !!sessionCookie?.value;

    console.log(`🌐 Host: ${host}`);
    console.log(`🔍 Authenticated: ${isAuthenticated}, Path: ${pathname}`);

    // ➤ Subdomain-based routing
    if (host.startsWith("niti.")) {
      url.pathname = "/niti";
      return NextResponse.rewrite(url);
    } else if (host.startsWith("kode.")) {
      url.pathname = "/kode";
      return NextResponse.rewrite(url);
    }

    // ➤ Auth-based redirection
    if (isAuthenticated && pathname === "/login") {
      console.log("🔄 Redirecting to /dashboard...");
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    const protectedRoutes = ["/dashboard", "/profile", "/settings"];
    if (!isAuthenticated && protectedRoutes.some(route => pathname.startsWith(route))) {
      console.log("🚫 No session, redirecting to login");
      return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error("🔴 Middleware error:", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// 👇 Ensure all routes are checked (not just auth ones)
export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
// This will match all routes except for _next and favicon.ico