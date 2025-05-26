import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Toaster } from "react-hot-toast";
import { NavbarWrapper } from "@/components/layout/NavbarWrapper";
import Head from "next/head";

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
        url: "https://ecocee.in/icon.png",
        width: 1200,
        height: 630,
        alt: "Ecocee Embedded & IoT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@Ecocee",
    title: "Ecocee | Embedded Systems, IoT & AI Solutions",
    description:
      "Discover Ecocee’s Kerala-based embedded systems, IoT, and AI development services with custom solutions and patentable projects.",
  },
  metadataBase: new URL("https://ecocee.in"),
  applicationName: "Ecocee",
  appleWebApp: {
    title: "Ecocee",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>
          Ecocee | Embedded Systems, IoT & AI Solutions | Kerala Startup
        </title>
        <meta name="description" content="Ecocee, a Kerala-based MSME startup, offers innovative embedded systems, IoT, AI development, and custom hardware & software solutions. Patentable projects and technical training." />
        <meta property="og:site_name" content="Ecocee" />
        <meta property="og:title" content="Ecocee | Embedded Systems, IoT & AI Solutions" />
        <meta property="og:description" content="Kerala-based startup Ecocee provides embedded systems, IoT, and AI project solutions along with technical training and patentable innovations." />
        <meta property="og:url" content="https://ecocee.in" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ecocee.in/icon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ecocee | Embedded Systems, IoT & AI Solutions" />
        <meta name="twitter:description" content="Discover Ecocee’s Kerala-based embedded systems, IoT, and AI development services with custom solutions and patentable projects." />
        <meta name="twitter:creator" content="@Ecocee" />
      </Head>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavbarWrapper />
          {children}
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
