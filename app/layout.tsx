import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Toaster } from "react-hot-toast";
import { NavbarWrapper } from "@/components/layout/NavbarWrapper";

const inter = Inter({ 
  subsets: ["latin"], 
  display: "swap", 
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Ecocee | Custom AI Agents & Edge Computing",
  description:
    "Custom AI agents, private AI infrastructure, and embedded systems. Built in Kerala for businesses across India.",
  manifest: '/site.webmanifest',
  keywords: [
    "custom AI agents",
    "private AI infrastructure",
    "edge computing",
    "embedded systems Kerala",
    "IoT solutions India",
    "AI automation business",
    "computer vision",
    "on-premise AI",
    "Ecocee",
  ],
  openGraph: {
    title: "Ecocee | Custom AI Agents & Edge Computing",
    description:
      "Custom AI agents, private AI infrastructure, and embedded systems. Built in Kerala.",
    url: "https://ecocee.in",
    type: "website",
    siteName: "Ecocee",
    locale: "en_IN",
    countryName: "India",
    images: [
      {
        url: "https://ecocee.in/og-banner.webp",
        width: 1200,
        height: 630,
        alt: "Ecocee AI Agents & Edge Computing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@Ecocee",
    title: "Ecocee | Custom AI Agents & Edge Computing",
    description:
      "Custom AI agents, private AI infrastructure, and embedded systems. Built in Kerala.",
    site: "@Ecocee",
    images: ["https://ecocee.in/og-banner.webp"],
  },
  alternates: {
    canonical: "https://ecocee.in",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [
    { name: "Sreeraj V Rajesh", url: "https://ecocee.in/about#team" },
    { name: "Ecocee Team", url: "https://ecocee.in/about" },
  ],
  publisher: "Ecocee Technologies",
  applicationName: "Ecocee",
  appleWebApp: {
    title: "Ecocee",
    statusBarStyle: "default",
  },
  metadataBase: new URL("https://ecocee.in"),
  other: {
    "geo.region": "IN-KL",
    "geo.placename": "Kodungallur, Thrissur, Kochi, Ernakulam, Kerala",
    "geo.position": "10.2326;76.1951",
    ICBM: "10.2326, 76.1951",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className="dark" suppressHydrationWarning>
      <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="theme-color" content="#0a0f1a" />
          <meta name="msapplication-TileColor" content="#0a0f1a" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <link rel="manifest" href="/site.webmanifest" />
          {/* llms.txt — LLM-friendly site overview for AI agents */}
          <link rel="describedby" href="/llms.txt" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/inter.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </head>

        <body className={cn(
            "min-h-screen w-full flex flex-col overflow-x-hidden bg-background text-foreground selection:bg-primary/30 antialiased",
            inter.variable,
            inter.className
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
            {/* Navbar */}
            <React.Suspense fallback={null}>
              <NavbarWrapper />
            </React.Suspense>

            {/* Main content */}
            <main className="flex-1 w-full overflow-x-hidden" id="main-content">{children}</main>

            <Toaster
              position="top-right"
              toastOptions={{
                style: {
                  fontSize: "14px",
                  maxWidth: "85vw",
                  wordBreak: "break-word",
                },
              }}
            />
          </ThemeProvider>
        </body>
    </html>
  );
}
