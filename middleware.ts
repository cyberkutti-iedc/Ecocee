import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Subdomain routing
  const url = req.nextUrl.clone();
  const pathname = url.pathname;
  const hostname = req.headers.get("host") || "";

  if (hostname.startsWith("niti.")) {
    url.pathname = `/niti${pathname === "/" ? "" : pathname}`;
    return NextResponse.rewrite(url);
  }

  if (hostname.startsWith("kode.")) {
    url.pathname = `/kode${pathname === "/" ? "" : pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};