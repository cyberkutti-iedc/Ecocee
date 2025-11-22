import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Frontend routes accessible without auth
const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/sso-callback(.*)',
  '/',
  '/careers',
  '/ideas',
  '/kode(.*)',
  '/niti(.*)',
  '/privacy-policy(.*)',
  '/terms-and-conditions(.*)',
  '/Team(.*)',
  '/internship-certificate(.*)',
  '/products(.*)',
  '/kuttai(.*)',
]);

// API routes accessible without auth
const isPublicApiRoute = createRouteMatcher([

  '/api/internship(.*)',
  '/api/careers(.*)',
  '/api/kuttai(.*)'
]);

// Role-based protected routes
const isAdminRoute = createRouteMatcher(['/admin(.*)']);
const isModeratorRoute = createRouteMatcher(['/dashboard/moderator(.*)']);
const isInternRoute = createRouteMatcher(['/dashboard/intern(.*)']);

export default clerkMiddleware(async (auth, req: NextRequest) => {
  // Protect all routes except public frontend and public APIs
  if (!isPublicRoute(req) && !isPublicApiRoute(req)) {
    await auth.protect();
  }

  const session = await auth();
  const role = session?.sessionClaims?.metadata?.status; // Or adjust to .role if required

  // console.log("Route:", req.url);
  // console.log("User role from session metadata:", role);

  // Role-based access control
  if (isAdminRoute(req) && role !== "admin") {
    // console.log("Redirecting non-admin user from admin route");
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (isModeratorRoute(req) && role !== "moderator") {
    // console.log("Redirecting non-moderator user from moderator route");
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (isInternRoute(req) && role !== "intern") {
    // console.log("Redirecting non-intern user from intern route");
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Subdomain routing
  const url = req.nextUrl.clone();
  const pathname = url.pathname;
  const hostname = req.headers.get("host") || "";

  // console.log("Hostname:", hostname);
  // console.log("Pathname before rewrite:", pathname);

  if (hostname.startsWith("niti.")) {
    url.pathname = `/niti${pathname === "/" ? "" : pathname}`;
    // console.log("Rewriting to Niti subdomain:", url.pathname);
    return NextResponse.rewrite(url);
  }

  if (hostname.startsWith("kode.")) {
    url.pathname = `/kode${pathname === "/" ? "" : pathname}`;
    // console.log("Rewriting to Kode subdomain:", url.pathname);
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
});

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // ✅ Security Headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  // ✅ CORS Headers (adjust origins as needed)
  const allowedOrigins = [
    'https://ecocee.in',
    'https://www.ecocee.in',
    'http://localhost:3000',
  ];

  const origin = request.headers.get('origin');
  if (origin && allowedOrigins.includes(origin)) {
    response.headers.set('Access-Control-Allow-Origin', origin);
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    response.headers.set('Access-Control-Max-Age', '86400');
  }

  // ✅ Cache Control for auth routes
  if (request.nextUrl.pathname.startsWith('/api/auth')) {
    response.headers.set('Cache-Control', 'no-store, must-revalidate');
  }

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    response.headers.set('Cache-Control', 'no-store, must-revalidate');
  }

  // ✅ Rate limiting headers (check via backend)
  response.headers.set('X-RateLimit-Limit', '100');
  response.headers.set('X-RateLimit-Remaining', '99');
  response.headers.set('X-RateLimit-Reset', new Date(Date.now() + 60000).toISOString());

  return response;
}

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};