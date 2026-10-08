import type { Metadata } from "next";
import { Inter } from "next/font/google";

import DotpaperLanding from "./dotpaper-landing";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dotpaper: Business software, built for you | ECOCEE",
  description:
    "Dotpaper is ECOCEE's platform for running Service Desk, Accounting, CRM, Inventory and custom business applications through one unified interface.",
};

export default function DotpaperPage() {
  return (
    <div className={inter.className}>
      <DotpaperLanding />
    </div>
  );
}