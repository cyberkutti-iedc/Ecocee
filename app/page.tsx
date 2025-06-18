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
      <Seo
        title="Ecocee | Custom Embedded & IoT Solutions"
        description="Ecocee offers cutting-edge embedded systems and IoT development, delivering customized technology solutions for businesses seeking innovation."
        keywords={[
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
        ]}
        canonical="https://ecocee.in"
        image="https://ecocee.in/icon.png"
        twitterHandle="@sreeraj_vr"
        siteName="Ecocee"
        structuredData={jsonLd}
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
