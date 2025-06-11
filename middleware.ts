import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Public routes accessible without auth
const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/sso-callback(.*)',
  '/',
]);

// Role-based route matchers
const isAdminRoute = createRouteMatcher(['/admin(.*)']);
const isModeratorRoute = createRouteMatcher(['/dashboard/moderator(.*)']);
const isInternRoute = createRouteMatcher(['/dashboard/intern(.*)']);

export default clerkMiddleware(async (auth, req: NextRequest) => {
  // Protect all routes except public ones
  if (!isPublicRoute(req)) {
    await auth.protect();
  }

  const session = await auth();
  const role = session?.sessionClaims?.metadata?.status; // or .role depending on your metadata

  console.log("Route:", req.url);
  console.log("User role from session metadata:", role);

  // Admin access control
  if (isAdminRoute(req) && role !== "admin") {
    console.log("Redirecting non-admin user from admin route");
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Moderator access control
  if (isModeratorRoute(req) && role !== "moderator") {
    console.log("Redirecting non-moderator user from moderator route");
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Intern access control
  if (isInternRoute(req) && role !== "intern") {
    console.log("Redirecting non-intern user from intern route");
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Subdomain routing (your existing logic)
  const url = req.nextUrl.clone();
  const pathname = url.pathname;
  const hostname = req.headers.get("host") || "";

  console.log("Hostname:", hostname);
  console.log("Pathname before rewrite:", pathname);

  if (hostname.startsWith("niti.")) {
    url.pathname = `/niti${pathname === "/" ? "" : pathname}`;
    console.log("Rewriting to Niti subdomain:", url.pathname);
    return NextResponse.rewrite(url);
  }

  if (hostname.startsWith("kode.")) {
    url.pathname = `/kode${pathname === "/" ? "" : pathname}`;
    console.log("Rewriting to Kode subdomain:", url.pathname);
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
