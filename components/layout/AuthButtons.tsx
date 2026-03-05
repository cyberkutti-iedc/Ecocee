"use client";

import { SignedIn, SignedOut, UserButton, SignInButton, SignOutButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

export function AuthButtons() {
  return (
    <>
      <SignedOut>
        <SignInButton mode="modal">
          <Button size="sm" variant="outline" className="rounded-xl">
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </>
  );
}