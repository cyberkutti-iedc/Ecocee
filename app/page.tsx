import type { Metadata } from "next";
import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { ServicesSection } from "@/components/layout/sections/services";
import Seo from "@/components/seo/Seo";
import { PrototypesSection } from "@/components/layout/sections/Prototype";

export const metadata: Metadata = {
  title: "Ecocee | Embedded Systems & IoT Solutions Company in Kerala | India",
  description: "Kerala-based IoT & embedded systems company specializing in custom hardware, firmware development, industrial automation, and AI solutions. MSME registered startup serving clients across India.",
  keywords: [
    // Kerala-wide
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
  // High-intent local keywords
  "1 software development company in thrissur",
  "embedded systems company in thrissur",
  "iot solutions in thrissur",
  "custom software solutions thrissur",
  "ai solutions in thrissur",
  "firmware developers in thrissur",
  "embedded systems services thrissur",
  "ai and machine learning services thrissur",
  "iot firmware developers in thrissur",
  // Kochi & Ernakulam coverage
  "software development company in kochi",
  "software development company in ernakulam",
  "embedded systems company in kochi",
  "embedded systems company in ernakulam",
  "iot solutions in kochi",
  "iot solutions in ernakulam",
  "custom software solutions kochi",
  "custom software solutions ernakulam",
  "ai solutions in kochi",
  "ai solutions in ernakulam",
  "firmware developers in kochi",
  "firmware developers in ernakulam",
  "embedded systems services kochi",
  "embedded systems services ernakulam",
  "ai and machine learning services kochi",
  "ai and machine learning services ernakulam",
  "iot firmware developers in kochi",
  "iot firmware developers in ernakulam",

  // India-wide
  "Embedded Systems India",
  "IoT Solutions India",
  "Industrial Automation India",
  "PCB Design Services India",
  "Firmware Development India",
  "Custom Embedded Hardware India",
  "AI Embedded Solutions India",
  "Product Development Startup India",
  "Electronics Prototyping India",

  // Kerala districts – Thrissur
  "Embedded Systems Thrissur",
  "IoT Solutions Thrissur",
  "Industrial Automation Thrissur",
  "PCB Prototyping Thrissur",
  "Ecocee Thrissur",

  // Ernakulam
  "Embedded Systems Ernakulam",
  "IoT Solutions Ernakulam",
  "Industrial Automation Ernakulam",
  "PCB Prototyping Ernakulam",
  "Ecocee Ernakulam",

  // Alappuzha
  "Embedded Systems Alappuzha",
  "IoT Solutions Alappuzha",
  "Industrial Automation Alappuzha",
  "PCB Prototyping Alappuzha",
  "Ecocee Alappuzha",

  // Long-tail & niche
  "Affordable embedded systems for startups Kerala",
  "IoT product development Kerala startups",
  "Embedded system training for students in Kerala",
  "Industrial machine automation for small factories Kerala",
  "Embedded systems for MSMEs in India",
  "Embedded systems outsourcing India",
  "IoT prototyping help for engineers Kerala",
  "PCB prototyping services for startups in India",

  // Branding & trust
  "Ecocee embedded systems",
  "Ecocee IoT solutions Kerala",
  "Ecocee startup India",
  "Ecocee hardware prototyping",
  "Ecocee technical training",
  "Ecocee automation services",
  "Ecocee"
  ],
  openGraph: {
    type: "website",
    url: "https://ecocee.in",
    title: "Ecocee | Premier Embedded Systems & IoT Development Company in Kerala",
    description: "Kerala's trusted partner for custom embedded systems, IoT solutions, and industrial automation. From concept to production, we deliver innovative technology solutions.",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/e6c0215e-ba2e-44eb-a7e9-c9c547f5c1c3.jpg?token=x6p4DMXdp7hH9v3r8lbop1ngGln1iE8A-fJmqFp8QJI&height=591&width=1200&expires=33291464882",
        width: 1200,
        height: 630,
        alt: "Ecocee - Kerala's Leading Embedded Systems and IoT Development Company",
      },
      {
        url: "https://opengraph.b-cdn.net/production/images/e6c0215e-ba2e-44eb-a7e9-c9c547f5c1c3.jpg?token=x6p4DMXdp7hH9v3r8lbop1ngGln1iE8A-fJmqFp8QJI&height=591&width=1200&expires=33291464882",
        width: 800,
        height: 600,
        alt: "Custom IoT Products Developed by Ecocee",
      }
    ],
    locale: "en_IN",
    siteName: "Ecocee",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@EcoceeTech",
    site: "@EcoceeTech",
    title: "Ecocee | Embedded & IoT Solutions for Smart Industries",
    description: "Transform your ideas into market-ready embedded products with Kerala's top IoT development team.",
    images: "https://opengraph.b-cdn.net/production/images/e6c0215e-ba2e-44eb-a7e9-c9c547f5c1c3.jpg?token=x6p4DMXdp7hH9v3r8lbop1ngGln1iE8A-fJmqFp8QJI&height=591&width=1200&expires=33291464882"
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
    { name: "Sreeraj V Rajesh", url: "https://ecocee.in/team/" },
    { name: "Ecocee Technologies", url: "https://ecocee.in" }
  ],
  publisher: "Ecocee Technologies",
  metadataBase: new URL("https://ecocee.in"),
  
};

// Enhanced Structured Data
const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ecocee",
    "url": "https://ecocee.in",
    "logo": "https://opengraph.b-cdn.net/production/images/e6c0215e-ba2e-44eb-a7e9-c9c547f5c1c3.jpg?token=x6p4DMXdp7hH9v3r8lbop1ngGln1iE8A-fJmqFp8QJI&height=591&width=1200&expires=33291464882",
    "foundingDate": "2025",
    "founders": [
      {
        "@type": "Person",
        "name": "Sreeraj V Rajesh"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Kodungallur",
      "addressRegion": "Kerala",
      "postalCode": "680664",
      "addressCountry": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9446715884",
      "contactType": "customer service",
      "areaServed": "India",
      "availableLanguage": ["English", "Malayalam"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/ecocee",
      "https://twitter.com/EcoceeTech",
      "https://facebook.com/EcoceeTech"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ecocee",
    "url": "https://ecocee.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ecocee.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ecocee Technologies",
    "image": "https://ecocee.in/images/office.webp",
    "@id": "https://ecocee.in",
    "url": "https://ecocee.in",
    "telephone": "+91-9446715884",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Kodungallur",
      "addressRegion": "Kerala",
      "postalCode": "680664",
      "addressCountry": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "10.2326",
      "longitude": "76.1951"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.linkedin.com/company/ecocee"
    ]
  }
];

export default function Home() {
  return (
    <>
      <Seo
        title="Ecocee | Embedded Systems & IoT Solutions Company in Kerala | India"
        description="Kerala-based IoT & embedded systems company specializing in custom hardware, firmware development, industrial automation, and AI solutions. MSME registered startup serving clients across India."
        canonical="https://ecocee.in"
        image="https://ecocee.in/images/og-embedded-solutions.webp"
        twitterHandle="@EcoceeTech"
        siteName="Ecocee"
        structuredData={structuredData}
      />
      
      <main itemScope itemType="https://schema.org/WebPage">
        <section 
          aria-label="Hero Section" 
          itemScope 
          itemProp="mainContentOfPage"
          itemType="https://schema.org/WPHeader"
        >
          <HeroSection />
        </section>

        <section 
          aria-label="Benefits of Choosing Ecocee" 
          itemScope 
          itemProp="mainEntity" 
          itemType="https://schema.org/ItemList"
        >
          <BenefitsSection />
        </section>

        <section 
          aria-label="Our Technical Features" 
          itemScope 
          itemProp="mainEntity" 
          itemType="https://schema.org/ItemList"
        >
          <FeaturesSection />
        </section>

        <section 
          aria-label="Our Prototypes and Case Studies" 
          itemScope 
          itemProp="mainEntity" 
          itemType="https://schema.org/ItemList"
        >
          <PrototypesSection/>
        </section>

        <section 
          aria-label="Our Services" 
          itemScope 
          itemProp="makesOffer" 
          itemType="https://schema.org/OfferCatalog"
        >
          <ServicesSection />
        </section>

        <section 
          aria-label="Our Community and Partnerships" 
          itemScope 
          itemProp="mentions" 
          itemType="https://schema.org/Organization"
        >
          <CommunitySection />
        </section>

       
          <FAQSection />
       

        <section 
          aria-label="Contact Ecocee" 
          itemScope 
          itemProp="mainEntity" 
          itemType="https://schema.org/ContactPage"
        >
          <ContactSection />
        </section>

        
      </main>

      <FooterSection />
    </>
  );
}