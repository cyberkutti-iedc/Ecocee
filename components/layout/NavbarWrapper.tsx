"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { usePathname } from "next/navigation";

export function NavbarWrapper() {
  const pathname = usePathname();
  const [shouldHide, setShouldHide] = useState(false);

  useEffect(() => {
    const hostname = typeof window !== "undefined" ? window.location.hostname : "";
    const subdomain = hostname.split(".")[0];

    const hideForSubdomains = ["kode", "niti"];
    const hideForPaths = ["/niti", "/kode/"];

    const shouldHideSubdomain = hideForSubdomains.includes(subdomain);
    const shouldHidePath = hideForPaths.some((prefix) => pathname.startsWith(prefix));

    setShouldHide(shouldHideSubdomain || shouldHidePath);
  }, [pathname]);

  return !shouldHide ? <Navbar /> : null;
}
