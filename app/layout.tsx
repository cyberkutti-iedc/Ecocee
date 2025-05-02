import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Toaster } from "react-hot-toast";
import { NavbarWrapper } from "@/components/layout/NavbarWrapper"; // Import new component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecocee",
  description: "Innovative solutions for a brighter future.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="ecocee" />
        <meta name="google-site-verification" content="oWkt6WIzNsBUQOAuNbzwS6sNhvbp6JZOP62rmpugNoE" />
        <meta name="description" content="Ecocee specializes in cutting-edge embedded and IoT solutions, designing customized hardware systems tailored to our clients' unique needs." />
        <meta name="keywords" content="embedded systems, IoT, hardware design, custom solutions" />
        <meta property="og:title" content="Ecocee | Innovative IoT Solutions" />
        <meta property="og:description" content="Ecocee specializes in cutting-edge embedded and IoT solutions, designing customized hardware systems tailored to our clients' unique needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ecocee.vercel.app" />
        <meta property="og:image" content="https://ecocee.vercel.app/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@Ecocee" />
      </head>

      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NavbarWrapper /> {/* Use the new NavbarWrapper component */}
          {children}
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
