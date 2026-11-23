"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const consent = localStorage.getItem("ecocee_analytics_consent");
      if (consent === "granted") {
        if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
          (window as any).gtag("consent", "update", {
            analytics_storage: "granted",
          });
        }
      } else if (consent === null) {
        // No decision made yet, show banner
        setVisible(true);
      }
    } catch {
      // localStorage may fail in restricted contexts
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("ecocee_analytics_consent", "granted");
    } catch {}
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
    setVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem("ecocee_analytics_consent", "denied");
    } catch {}
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
    setVisible(false);
  };

  if (!mounted || !visible) return null;

  return (
    <aside
      aria-label="Cookie and privacy preferences"
      className="fixed bottom-4 right-4 left-4 sm:left-auto sm:max-w-md z-50 p-4 bg-background border border-border rounded-xl shadow-lg text-foreground text-sm flex flex-col gap-3"
    >
      <div className="text-xs text-muted-foreground leading-relaxed">
        We use privacy-friendly Google Analytics (GA4) to understand visitor interest. No advertising trackers are used. Learn more in our{" "}
        <Link href="/privacy" className="underline hover:text-foreground">
          Privacy Policy
        </Link>
        .
      </div>
      <div className="flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={handleDecline}
          className="px-3 py-1.5 text-xs font-medium rounded-lg border border-border text-foreground hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Decline
        </button>
        <button
          type="button"
          onClick={handleAccept}
          className="px-3 py-1.5 text-xs font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Accept
        </button>
      </div>
    </aside>
  );
}

