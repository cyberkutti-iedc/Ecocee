import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecocee",
  description: "Innovative solutions for a brighter future.",
  // You can add more metadata here if needed
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        {/* Google Site Verification Meta Tag */}
        <meta name="google-site-verification" content="oWkt6WIzNsBUQOAuNbzwS6sNhvbp6JZOP62rmpugNoE" />
        
        {/* Meta Tags for SEO */}
        <meta name="description" content="Ecocee specializes in cutting-edge embedded and IoT solutions, designing customized hardware systems tailored to our clients' unique needs." />
        <meta name="keywords" content="embedded systems, IoT, hardware design, custom solutions" />
        
        {/* Open Graph Tags for Social Media Sharing */}
        <meta property="og:title" content="Ecocee | Innovative IoT Solutions" />
        <meta property="og:description" content="Ecocee specializes in cutting-edge embedded and IoT solutions, designing customized hardware systems tailored to our clients' unique needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ecocee.vercel.app" />
        <meta property="og:image" content="https://ecocee.vercel.app/og-image.jpg" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@Ecocee" />
      </head>

      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
