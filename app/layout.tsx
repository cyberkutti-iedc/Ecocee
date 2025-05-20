import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Toaster } from "react-hot-toast";
import { NavbarWrapper } from "@/components/layout/NavbarWrapper";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Ecocee | Embedded & IoT Solutions",
  description: "Ecocee provides cutting-edge embedded systems and IoT development, offering tailored hardware and software solutions for a smarter future.",
  keywords: [
    "Ecocee",
    "IoT solutions",
    "embedded systems",
    "hardware design",
    "custom electronics",
    "technology consulting",
    "smart devices"
  ],
  openGraph: {
    title: "Ecocee | Embedded & IoT Solutions",
    description: "Ecocee specializes in advanced embedded and IoT solutions, delivering bespoke technology for modern challenges.",
    url: "https://ecocee.in",
    type: "website",
    images: [
      {
        url: "https://ecocee.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ecocee IoT Solutions"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    creator: "@Ecocee",
    title: "Ecocee | IoT and Embedded Solutions",
    description: "Discover Ecocee’s custom IoT and embedded system design services."
  },
  metadataBase: new URL("https://ecocee.in"),
  applicationName: "Ecocee",
  appleWebApp: {
    title: "Ecocee",
    statusBarStyle: "default"
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NavbarWrapper />
          {children}
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
