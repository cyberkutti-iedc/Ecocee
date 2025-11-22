import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Toaster } from "react-hot-toast";
import { NavbarWrapper } from "@/components/layout/NavbarWrapper";
import { ClerkProvider } from "@clerk/nextjs";
import Seo from "@/components/seo/Seo";
import { organizationSchema } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Ecocee | Embedded Systems, IoT & AI Solutions | Kerala Startup",
  description:
    "Ecocee, a Kerala-based MSME startup, offers innovative embedded systems, IoT, AI development, and custom hardware & software solutions. Patentable projects and technical training.",
     manifest: '/site.webmanifest',
  keywords: [
    // Kerala statewide & city-specific
    "Software development company in Kerala",
    "Software development company in Kochi",
    "Software development company in Ernakulam",
    "1 software development company in thrissur",
    "Embedded systems company in Thrissur",
    "IoT solutions in Thrissur",
    "Custom software solutions Thrissur",
    "AI solutions in Thrissur",
    "Firmware developers in Thrissur",
    "Embedded systems services Thrissur",
    "AI and machine learning services Thrissur",
    "IoT firmware developers in Thrissur",
    // Kochi & Ernakulam variants
    "Embedded systems company in Kochi",
    "IoT solutions in Kochi",
    "Custom software solutions Kochi",
    "AI solutions in Kochi",
    "Firmware developers in Kochi",
    "Embedded systems services Kochi",
    "AI and machine learning services Kochi",
    "IoT firmware developers in Kochi",
    "Embedded systems company in Ernakulam",
    "IoT solutions in Ernakulam",
    "Custom software solutions Ernakulam",
    "AI solutions in Ernakulam",
    "Firmware developers in Ernakulam",
    "Embedded systems services Ernakulam",
    "AI and machine learning services Ernakulam",
    "IoT firmware developers in Ernakulam",
    "Embedded Systems Kerala",
    "IoT Solutions Kerala",
    "Industrial Automation Kerala",
    "PCB Prototyping Kerala",
    "Hardware Prototyping Kerala",
    "Embedded Training Kerala",
    "Smart Industry Kerala",
    "Custom Electronics Kerala",
    "MSME Embedded Systems Kerala",
    "IoT Company Kerala",
    "Embedded Systems India",
    "IoT Solutions India",
    "Industrial Automation India",
    "PCB Design Services India",
    "Firmware Development India",
    "Custom Embedded Hardware India",
    "AI Embedded Solutions India",
    "Product Development Startup India",
    "Electronics Prototyping India",
    "Affordable embedded systems for startups Kerala",
    "IoT product development Kerala startups",
    "Embedded system training for students in Kerala",
    "Industrial machine automation for small factories Kerala",
    "Embedded systems for MSMEs in India",
    "Embedded systems outsourcing India",
    "IoT prototyping help for engineers Kerala",
    "PCB prototyping services for startups in India",
    "Ecocee embedded systems",
    "Ecocee IoT solutions Kerala",
    "Ecocee startup India",
    "Ecocee hardware prototyping",
    "Ecocee technical training",
    "Ecocee automation services",
    "Best IoT company in Kerala",
    "Top embedded systems startup India",
    "Affordable PCB design services",
    "Industrial IoT solutions Kerala",
    "Smart home automation Kerala",
    "Embedded systems training center",
    "Custom firmware development",
    "Electronics product development",
    "IoT consulting services",
    "Embedded Linux development",
    "ARM microcontroller programming",
    "RTOS development services",
    "Wireless IoT solutions",
  ],
  openGraph: {
    title: "Ecocee | Embedded Systems, IoT & AI Solutions",
    description:
      "Kerala-based startup Ecocee provides embedded systems, IoT, and AI project solutions along with technical training and patentable innovations.",
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
        alt: "Ecocee - Kerala's Premier Embedded Systems & IoT Solutions Provider",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@Ecocee",
    title: "Ecocee | Embedded Systems, IoT & AI Solutions",
    description:
      "Discover Ecocee's Kerala-based embedded systems, IoT, and AI development services with custom solutions and patentable projects.",
    site: "@Ecocee",
    images:
      "https://opengraph.b-cdn.net/production/images/e6c0215e-ba2e-44eb-a7e9-c9c547f5c1c3.jpg?token=x6p4DMXdp7hH9v3r8lbop1ngGln1iE8A-fJmqFp8QJI&height=591&width=1200&expires=33291464882",
  },
  alternates: {
    canonical: "https://ecocee.in",
    languages: {
      "en-IN": "https://ecocee.in/en",
    },
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
    { name: "Sreeraj V Rajesh", url: "https://ecocee.in/team" },
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
    <ClerkProvider>
      <html lang="en-IN" suppressHydrationWarning>
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="theme-color" content="#3B82F6" />
          <meta name="msapplication-TileColor" content="#3B82F6" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <link rel="manifest" href="/site.webmanifest" />
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
        <Seo
          title="Ecocee | Embedded Systems, IoT & AI Solutions | Kerala Startup"
          description="Ecocee, a Kerala-based MSME startup, offers innovative embedded systems, IoT, AI development, and custom hardware & software solutions. Patentable projects and technical training."
          canonical="https://ecocee.in"
          image="https://opengraph.b-cdn.net/production/images/e6c0215e-ba2e-44eb-a7e9-c9c547f5c1c3.jpg?token=x6p4DMXdp7hH9v3r8lbop1ngGln1iE8A-fJmqFp8QJI&height=591&width=1200&expires=33291464882"
          twitterHandle="@Ecocee"
          siteName="Ecocee"
          structuredData={[
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ecocee",
              url: "https://ecocee.in",
              logo: "https://ecocee.in/logo.webp",
              sameAs: [
                "https://www.linkedin.com/company/ecocee",
                "https://twitter.com/Ecocee",
                "https://facebook.com/Ecocee",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9446715884",
                contactType: "Customer Support",
                areaServed: ["Thrissur", "Kochi", "Ernakulam", "Kerala", "IN"],
                availableLanguage: ["English", "Malayalam"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Your Street Address",
                addressLocality: "Kodungallur",
                addressRegion: "Kerala",
                postalCode: "680664",
                addressCountry: "IN",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Ecocee",
              image:
                "https://opengraph.b-cdn.net/production/images/e6c0215e-ba2e-44eb-a7e9-c9c547f5c1c3.jpg?token=x6p4DMXdp7hH9v3r8lbop1ngGln1iE8A-fJmqFp8QJI&height=591&width=1200&expires=33291464882",
              "@id": "https://ecocee.in",
              url: "https://ecocee.in",
              telephone: "+919446715884",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Your Street Address",
                addressLocality: "Kodungallur",
                addressRegion: "Kerala",
                postalCode: "680664",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "10.2326",
                longitude: "76.1951",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
              sameAs: [
                "https://www.linkedin.com/company/ecocee",
                "https://twitter.com/Ecocee",
              ],
            },
          ]}
        />
        <body
          className={cn(
            "min-h-screen w-full flex flex-col overflow-x-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 text-slate-800 dark:text-slate-100 selection:bg-blue-200 dark:selection:bg-blue-800 antialiased",
            inter.className
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {/* Background */}
            <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br from-blue-400/15 to-purple-600/15 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-gradient-to-tr from-indigo-400/15 to-cyan-600/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>

            {/* Navbar */}
            <NavbarWrapper />

            {/* Main content */}
            <main className="flex-1 w-full overflow-x-hidden">{children}</main>

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
    </ClerkProvider>
  );
}
