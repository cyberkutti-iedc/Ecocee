import type { Metadata } from "next";
import { HeroSection } from "@/components/layout/sections/hero";
import { EcoceeStackSection } from "@/components/layout/sections/ecocee-stack";
import { DeploymentFlowSection } from "@/components/layout/sections/deployment-flow";
import { FAQSection } from "@/components/layout/sections/faq";
import { ContactSection } from "@/components/layout/sections/contact";
import { FooterSection } from "@/components/layout/sections/footer";
import { SolutionsSection } from "@/components/layout/sections/solutions";
import { TargetAudienceSection } from "@/components/layout/sections/target-audience";
import { EcoceeLabsSection } from "@/components/layout/sections/ecocee-labs";
import { ProcessNextSection } from "@/components/layout/sections/process-next";
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
  title: 'Ecocee — Custom AI Agents & On-Premise AI Infrastructure | Kerala, India',
  description: 'Ecocee builds custom AI agents, private AI infrastructure, and embedded IoT systems for businesses in Kerala and across India. On-premise, secure, no vendor lock-in. Free consultation.',
  keywords: [
    'custom AI agents Kerala',
    'on-premise AI infrastructure India',
    'AI automation for business Kerala',
    'private AI server India',
    'embedded systems Thrissur',
    'IoT solutions Kerala',
    'AI consulting Kerala',
    'Ecocee AI',
    'business automation AI Kerala',
    'warehouse AI agent India',
    'AI startup Kerala',
    'edge computing India',
  ],
  alternates: {
    canonical: 'https://ecocee.in',
  },
  openGraph: {
    title: 'Ecocee — Custom AI Agents & On-Premise AI Infrastructure',
    description: 'Ecocee builds custom AI agents, private AI infrastructure, and embedded IoT systems for businesses in Kerala and across India.',
    url: 'https://ecocee.in',
    siteName: 'Ecocee',
    images: [{ url: 'https://ecocee.in/og-banner.webp', width: 1200, height: 630, alt: 'Ecocee AI Agents & Edge Computing' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecocee — Custom AI Agents & Edge Computing | Kerala',
    description: 'Custom AI agents, private AI infrastructure, embedded systems. Built in Kerala for businesses across India.',
    images: ['https://ecocee.in/og-banner.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
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
    faqSchema(FAQList),
  ];

  return (
    <>
      <Seo
        title="Custom AI Agents & IoT Solutions in Kerala | Ecocee | AI Automation, Embedded Systems"
        description="Ecocee builds custom AI agents, private AI infrastructure, IoT solutions, and embedded systems for businesses in Kerala. On-premise AI deployment, edge computing, business automation. Free consultation."
        canonical="https://ecocee.in"
        image="https://ecocee.in/og-banner.webp"
        twitterHandle="@Ecocee"
        siteName="Ecocee"
        structuredData={structuredData}
      />
        <main itemScope itemType="https://schema.org/WebPage">
          {/* Hero — the thesis: AI that lives where you work */}
          <section aria-label="Hero Section" itemScope itemProp="mainContentOfPage">
            <HeroSection />
          </section>

        {/* Solutions - What Can Ecocee Solve? */}
        <AnimatedSection variant="fade-up" delay={0.1}>
          <SolutionsSection />
        </AnimatedSection>

        {/* The Ecocee Stack — Software + Compute + Edge */}
        <AnimatedSection variant="fade-up" delay={0.1}>
          <EcoceeStackSection />
        </AnimatedSection>

        {/* How we work / Deployment Flow */}
        <AnimatedSection variant="fade-up" delay={0.05}>
          <section aria-label="How We Work">
            <DeploymentFlowSection />
          </section>
        </AnimatedSection>

        {/* Target Audience / Who We Work With */}
        <AnimatedSection variant="fade-up" delay={0.1}>
          <TargetAudienceSection />
        </AnimatedSection>

        {/* Ecocee Labs */}
        <AnimatedSection variant="fade-up" delay={0.1}>
          <EcoceeLabsSection />
        </AnimatedSection>

        {/* FAQ */}
        <AnimatedSection variant="fade-up" delay={0.05}>
          <section aria-label="Frequently Asked Questions">
            <FAQSection />
          </section>
        </AnimatedSection>

        {/* What Happens Next? */}
        <AnimatedSection variant="fade-up" delay={0.1}>
          <ProcessNextSection />
        </AnimatedSection>

        {/* Contact — lead capture */}
        <AnimatedSection variant="fade-up" delay={0.1}>
          <section aria-label="Contact">
            <ContactSection />
          </section>
        </AnimatedSection>
      </main>

      <FooterSection />
    </>
  );
}
