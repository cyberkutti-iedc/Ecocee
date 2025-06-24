import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Toaster } from "react-hot-toast";
import { NavbarWrapper } from "@/components/layout/NavbarWrapper";

import {
  ClerkProvider,

} from '@clerk/nextjs'
import Seo from "@/components/seo/Seo";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Ecocee | Embedded Systems, IoT & AI Solutions | Kerala Startup",
  description:
    "Ecocee, a Kerala-based MSME startup, offers innovative embedded systems, IoT, AI development, and custom hardware & software solutions. Patentable projects and technical training.",
  keywords: [
    "Ecocee",
    "Embedded systems Kerala",
    "IoT solutions India",
    "AI project development",
    "custom embedded hardware",
    "technical learning hub",
    "MSME startup Kerala",
    "Kodungallur technology startup",
    "IoT company India",
    "PCB design",
    "firmware development",
    "hardware prototyping",
    "AI solutions",
    "machine learning",
    "startup Kerala",
    "IoT consulting",
    "smart home",
    "smart industry",
    "electronics engineering",
    "product development"
  ],
  openGraph: {
    title: "Ecocee | Embedded Systems, IoT & AI Solutions",
    description:
      "Kerala-based startup Ecocee provides embedded systems, IoT, and AI project solutions along with technical training and patentable innovations.",
    url: "https://ecocee.in",
    type: "website",
    siteName: "Ecocee",
    images: [
      {
        url: "https://ecocee.in/icon.jpg",
        width: 1200,
        height: 630,
        alt: "Ecocee Embedded & IoT Solutions",
      },
      {
        url: "https://ecocee.in/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Ecocee - Kerala IoT & Embedded Startup",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@Ecocee",
    title: "Ecocee | Embedded Systems, IoT & AI Solutions",
    description:
      "Discover Ecocee’s Kerala-based embedded systems, IoT, and AI development services with custom solutions and patentable projects.",
    site: "@Ecocee",
    images: [
      "https://ecocee.in/icon.jpg",
      "https://ecocee.in/og-banner.jpg"
    ]
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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [
    { name: "Sreeraj V Rajesh", url: "https://ecocee.in/team" }
  ],
  applicationName: "Ecocee",
  appleWebApp: {
    title: "Ecocee",
    statusBarStyle: "default",
  },
  metadataBase: new URL("https://ecocee.in"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        {/* SEO component for global layout */}
        <Seo
          title="Ecocee | Embedded Systems, IoT & AI Solutions | Kerala Startup"
          description="Ecocee, a Kerala-based MSME startup, offers innovative embedded systems, IoT, AI development, and custom hardware & software solutions. Patentable projects and technical training."
          keywords={[
            "Ecocee",
            "Embedded systems Kerala",
            "IoT solutions India",
            "AI project development",
            "custom embedded hardware",
            "technical learning hub",
            "MSME startup Kerala",
            "Kodungallur technology startup",
            "IoT company India",
            "PCB design",
            "firmware development",
            "hardware prototyping",
            "AI solutions",
            "machine learning",
            "startup Kerala",
            "IoT consulting",
            "smart home",
            "smart industry",
            "electronics engineering",
            "product development"
          ]}
          canonical="https://ecocee.in"
          image="https://ecocee.in/icon.jpg"
          twitterHandle="@Ecocee"
          siteName="Ecocee"
          structuredData={{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Ecocee",
            "url": "https://ecocee.in",
            "logo": "https://ecocee.in/icon.jpg",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9446715884",
              "contactType": "Customer Support"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Kodungallur",
              "addressRegion": "Kerala",
              "addressCountry": "IN"
            },
            "description": "Kerala-based startup Ecocee specializes in embedded systems, IoT, AI, and custom technology solutions for innovative product development."
          }}
        />
        {/* ...existing code... */}
        <body
          className={cn(
            "min-h-screen w-full max-w-full overflow-x-clip bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 text-slate-800 dark:text-slate-100 selection:bg-blue-200 dark:selection:bg-blue-800",
            inter.className
          )}
          style={{
            fontFamily: "Inter, Montserrat, sans-serif",
            backgroundAttachment: "fixed",
            overflowX: "clip",
            width: "100%",
          }}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavbarWrapper />
            {/* Stylish animated background */}
            <div className="fixed inset-0 -z-10 pointer-events-none w-full h-full overflow-x-clip overscroll-none">
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-400/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
            {/* Prevent scroll bounce on top/bottom */}
            <div className="fixed top-0 left-0 w-full h-1 bg-transparent pointer-events-none z-50" style={{ overscrollBehavior: "none" }} />
            <div className="fixed bottom-0 left-0 w-full h-1 bg-transparent pointer-events-none z-50" style={{ overscrollBehavior: "none" }} />
            {children}
            <Toaster position="top-right" />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

