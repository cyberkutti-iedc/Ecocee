"use client";

import { Navbar } from "@/components/layout/navbar";
import { usePathname } from "next/navigation";

export function NavbarWrapper() {
  const pathname = usePathname();

  // Hide Navbar if the path starts with "/dashboard"
  const hideNavbar = pathname.startsWith("/dashboard") || pathname.startsWith("/niti") || pathname.startsWith("/kode/");

  return !hideNavbar ? <Navbar /> : null;
}
