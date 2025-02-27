import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { softwareIdeas } from "@/data/softwareList"; // Import the valid software ideas list

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const confirmed = request.cookies.get("userConfirmed")?.value; // Check if user confirmed

  // Extract the ID from the URL (for /ideas/software/[id] routes)
  const idMatch = url.pathname.match(/^\/ideas\/software\/(\d+)$/);
  const id = idMatch ? idMatch[1] : null;

  // If the user hasn't confirmed, redirect to the ideas homepage
  if (
    (url.pathname.startsWith("/ideas/software") || url.pathname.startsWith("/ideas/hardware")) &&
    confirmed !== "true"
  ) {
    return NextResponse.redirect(new URL("/ideas", request.url));
  }

  // If the ID is not in the valid softwareIdeas list, redirect to /ideas
  if (id && !softwareIdeas.some((idea) => idea.id === id)) {
    return NextResponse.redirect(new URL("/ideas", request.url));
  }

  return NextResponse.next();
}

// Apply middleware to software idea pages
export const config = {
  matcher: ["/ideas/software/:id*"],
};
