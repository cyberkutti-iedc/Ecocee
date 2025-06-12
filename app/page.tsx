import type { Metadata } from "next";
import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { ServicesSection } from "@/components/layout/sections/services";

export const metadata: Metadata = {
  title: "Ecocee | Custom Embedded & IoT Solutions",
  description: "Ecocee offers cutting-edge embedded systems and IoT development, delivering customized technology solutions for businesses seeking innovation.",
  keywords: [
    "Ecocee",
    "IoT solutions",
    "embedded systems",
    "custom hardware",
    "technology innovation",
    "smart devices",
    "electronics engineering",
    "AI solutions",
    "machine learning",
    "industrial automation",
    "PCB design",
    "firmware development",
    "startup Kerala",
    "IoT company India",
    "embedded software",
    "product development",
    "hardware prototyping",
    "IoT consulting",
    "smart home",
    "smart industry"
  ],
  openGraph: {
    type: "website",
    url: "https://ecocee.in",
    title: "Ecocee | Custom Embedded & IoT Solutions",
    description: "Explore Ecocee’s tailored embedded and IoT solutions that bring innovation, performance, and reliability to your tech infrastructure.",
    images: [
      {
        url: "https://ecocee.in/icon.png",
        width: 1200,
        height: 630,
        alt: "Ecocee - IoT and Embedded Systems",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    creator: "@sreeraj_vr",
    title: "Ecocee | Innovative IoT and Embedded Solutions",
    description: "Ecocee engineers powerful, customized embedded systems and IoT technology for the future.",
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
  ]
};

// JSON-LD Structured Data for Local Business + Tech Startup
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ecocee",
  "url": "https://ecocee.in",
  "logo": "https://ecocee.in/icon.jpg",
  "sameAs": [
    // add social profiles if any
  ],
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
};

export default function Home() {
  return (
    <>
      {/* SEO meta tags for social, business, and local */}
      <head>
        <meta name="author" content="Sreeraj V Rajesh, Ecocee Team" />
        <meta name="publisher" content="Ecocee" />
        <meta name="copyright" content="Ecocee" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="google-site-verification" content="YOUR_GOOGLE_SITE_VERIFICATION_CODE" />
        <link rel="canonical" href="https://ecocee.in" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Ecocee" />
        <meta property="business:contact_data:street_address" content="Kodungallur, Kerala, India" />
        <meta property="business:contact_data:email" content="info@ecocee.com" />
        <meta property="business:contact_data:phone_number" content="+91-9446715884" />
        <meta property="business:contact_data:country_name" content="India" />
      </head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <section aria-label="Hero Section">
          <HeroSection />
        </section>

        <section aria-label="Benefits Section">
          <BenefitsSection />
        </section>

        <section aria-label="Features Section">
          <FeaturesSection />
        </section>

        <section aria-label="Services Section">
          <ServicesSection />
        </section>

        <section aria-label="Community Section">
          <CommunitySection />
        </section>

        <section aria-label="Contact Section">
          <ContactSection />
        </section>

        <section aria-label="Frequently Asked Questions Section">
          <FAQSection />
        </section>
      </main>

      <FooterSection />
    </>
  );
}
