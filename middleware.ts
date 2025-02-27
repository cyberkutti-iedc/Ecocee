import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const confirmed = request.cookies.get("userConfirmed")?.value; // Check if user confirmed

  // If user tries to access restricted routes without confirmation, redirect to /ideas
  if (
    (url.pathname === "/ideas/hardware" || url.pathname === "/ideas/software") &&
    confirmed !== "true"
  ) {
    return NextResponse.redirect(new URL("/ideas", request.url));
  }

  return NextResponse.next();
}

// Apply middleware to the specific paths
export const config = {
  matcher: ["/ideas/hardware", "/ideas/software"],
};
