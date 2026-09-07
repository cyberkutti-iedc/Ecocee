import type { Metadata } from "next";
import { HeroSection } from "@/components/layout/sections/hero";
import { CapabilitiesSection } from "@/components/layout/sections/capabilities";
import { WorkSection } from "@/components/layout/sections/work";
import { ProcessSection } from "@/components/layout/sections/process";
import { PositioningSection } from "@/components/layout/sections/positioning";
import { EngineeringSection } from "@/components/layout/sections/engineering";
import { StackSection } from "@/components/layout/sections/stack";
import { WhyNowSection } from "@/components/layout/sections/why-now";
import { LabsSection } from "@/components/layout/sections/labs";
import { AboutSection } from "@/components/layout/sections/about";
import { ClientsSection } from "@/components/layout/sections/clients";
import { CTASection } from "@/components/layout/sections/cta";
import { FooterSection } from "@/components/layout/sections/footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import Seo from "@/components/seo/Seo";
import {
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
  serviceSchema,
  aiAgentSchemas,
  speakableSchema,
  faqSchema,
} from "@/lib/seo/schemas";
import { FAQList } from "@/components/layout/sections/faq";

export const metadata: Metadata = {
  title: "Ecocee — AI, Software & Product Engineering",
  description:
    "AI, software and product engineering for ideas that need to become real. Custom AI agents, private infrastructure, embedded systems. Built in Kerala.",
  keywords: [
    "AI engineering",
    "product engineering",
    "custom AI agents",
    "embedded systems",
    "software development",
    "Kerala",
  ],
  alternates: {
    canonical: "https://ecocee.in",
  },
  openGraph: {
    title: "Ecocee — AI, Software & Product Engineering",
    description: "AI, software and product engineering for ideas that need to become real.",
    url: "https://ecocee.in",
    siteName: "Ecocee",
    images: [{ url: "https://ecocee.in/og-banner.webp", width: 1200, height: 630, alt: "Ecocee" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecocee — AI, Software & Product Engineering",
    description: "AI, software and product engineering for ideas that need to become real.",
    images: ["https://ecocee.in/og-banner.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};

export default function Home() {
  const structuredData = [
    organizationSchema,
    localBusinessSchema,
    websiteSchema,
    serviceSchema,
    ...aiAgentSchemas,
    speakableSchema,
  ];

  return (
    <>
      <Seo
        title="Ecocee — AI, Software & Product Engineering"
        description="AI, software and product engineering for ideas that need to become real. Custom AI agents, private infrastructure, embedded systems. Built in Kerala."
        canonical="https://ecocee.in"
        image="https://ecocee.in/og-banner.webp"
        twitterHandle="@Ecocee"
        siteName="Ecocee"
        structuredData={structuredData}
      />
      <main className="bg-background min-h-screen">
        {/* 01 — Hero */}
        <section aria-label="Hero">
          <HeroSection />
        </section>

        {/* 02 — Capabilities */}
        <AnimatedSection variant="fade-up" delay={0.1}>
          <CapabilitiesSection />
        </AnimatedSection>

        {/* 03 — Clients */}
        <AnimatedSection variant="fade-up" delay={0.1}>
          <ClientsSection />
        </AnimatedSection>

        {/* 04 — From Idea to Reality */}
        <AnimatedSection variant="fade-up" delay={0.05}>
          <ProcessSection />
        </AnimatedSection>

        {/* 05 — Why Ecocee */}
        <AnimatedSection variant="fade-up" delay={0.1}>
          <PositioningSection />
        </AnimatedSection>

        {/* 06 — Why Now */}
        <AnimatedSection variant="fade-up" delay={0.1}>
          <WhyNowSection />
        </AnimatedSection>

        {/* 07 — Engineering Capabilities */}
        <AnimatedSection variant="fade-up" delay={0.1}>
          <EngineeringSection />
        </AnimatedSection>

        {/* 08 — Ecocee Labs */}
        <AnimatedSection variant="fade-up" delay={0.1}>
          <LabsSection />
        </AnimatedSection>

        {/* 09 — Technology Stack */}
        <AnimatedSection variant="fade-up" delay={0.1}>
          <StackSection />
        </AnimatedSection>

        {/* 10 — About */}
        <AnimatedSection variant="fade-up" delay={0.1}>
          <AboutSection />
        </AnimatedSection>

        {/* 11 — Final CTA */}
        <CTASection />
      </main>

      <FooterSection />
    </>
  );
}
