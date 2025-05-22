"use client";

import { Suspense } from "react";
import LoginPage from "./LoginPage"; // Move actual logic to a separate component

export default function LoginPageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginPage />
    </Suspense>
  );
}
