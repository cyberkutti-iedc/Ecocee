"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { usePathname } from "next/navigation";

import { MeroNavbar } from "@/components/mero/MeroNavbar";

export function NavbarWrapper() {
  const pathname = usePathname();
  const [shouldHide, setShouldHide] = useState(false);
  const [isMero, setIsMero] = useState(false);

  useEffect(() => {
    const hostname = typeof window !== "undefined" ? window.location.hostname : "";
    const subdomain = hostname.split(".")[0];

    const hideForSubdomains = ["kode", "niti"];
    const hideForPaths = ["/niti", "/kode/", "/products", "/kuttai", "/docs"];

    const shouldHideSubdomain = hideForSubdomains.includes(subdomain);
    const shouldHidePath = hideForPaths.some((prefix) => pathname.startsWith(prefix));

    setIsMero(pathname.startsWith("/mero"));
    setShouldHide(shouldHideSubdomain || shouldHidePath);
  }, [pathname]);

  if (isMero) {
    return <MeroNavbar />;
  }

  return !shouldHide ? <Navbar /> : null;
}
