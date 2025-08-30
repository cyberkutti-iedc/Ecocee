'use client';

import { useState, useEffect } from 'react';
import HeroSection from '@/components/kuttai/Hero';
import FeatureSection from '@/components/kuttai/Features';
import HowItWorks from '@/components/kuttai/HowItWorks';
import DemoSection from '@/components/kuttai/DemoShowcase';
import StatsSection from '@/components/kuttai/StatsSection';
import CTA from '@/components/kuttai/CTA';
import LoadingAnimation from '@/components/kuttai/LoadingAnimation';
import AnimatedComparison from '@/components/kuttai/AnimatedComparison';
import ModelCustomizer from '@/components/kuttai/ModelCustomizer';
import NeuralNetworkDivider from '@/components/kuttai/NeuralNetworkDivider';
import ServerRackIllustration from '@/components/kuttai/ServerRackIllustration';

import Head from 'next/head';

// SEO Data
const kuttaiSEO = {
  title: "KuttAI CLI Chatbot | AI Assistant for KTU Students | Ecocee",
  description: "KuttAI is a beautiful, modern command-line interface AI chatbot designed specifically for KTU students. With stunning gradient-colored interface and powerful AI capabilities.",
  keywords: [
    "KTU chatbot",
    "AI assistant for students",
    "command line interface",
    "ai chatbot api free",
    "ai chatbot builder",
    "ai chatbot business",
    "KTU exam helper",
    "student AI tool",
    "Ecocee AI products",
    "educational chatbot",
    "terminal AI assistant",
    "KTU study aid",
    "intelligent student companion",
    "academic AI helper",
    "KTU syllabus assistance",
    "exam preparation AI",
    "college chatbot India",
    "KTU ecosystem tool",
    "KuttAi",
    "KuttAI CLI"
  ],
  image: "https://ecocee.in/images/og-kuttai.webp",
  canonical: "https://ecocee.in/kuttai",
  twitterHandle: "@EcoceeTech"
};

// Structured Data
const kuttaiStructuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "KuttAI",
  "description": "A beautiful, modern command-line interface AI chatbot for KTU students",
  "url": "https://ecocee.in/kuttai",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Cross-Platform",
  "permissions": "CLI",
  "publisher": {
    "@type": "Organization",
    "name": "Ecocee",
    "logo": {
      "@type": "ImageObject",
      "url": "https://ecocee.in/logo.webp"
    }
  }
};

export default function KuttaiPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingAnimation />;

  return (
    <>
      <Head>
        <title>{kuttaiSEO.title}</title>
        <meta name="description" content={kuttaiSEO.description} />
        <meta name="keywords" content={kuttaiSEO.keywords.join(', ')} />
        <link rel="canonical" href={kuttaiSEO.canonical} />
        <meta property="og:title" content={kuttaiSEO.title} />
        <meta property="og:description" content={kuttaiSEO.description} />
        <meta property="og:image" content={kuttaiSEO.image} />
        <meta property="og:url" content={kuttaiSEO.canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={kuttaiSEO.twitterHandle} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(kuttaiStructuredData) }}
        />
      </Head>

      <div className="min-h-screen bg-black text-white">
        <HeroSection />
        <NeuralNetworkDivider />
        <FeatureSection />
        <AnimatedComparison />
        <NeuralNetworkDivider />
        <ModelCustomizer />
        <NeuralNetworkDivider />
        <HowItWorks />
        <ServerRackIllustration />
        <NeuralNetworkDivider />
        <DemoSection />
        <StatsSection />
        <CTA />
      </div>
    </>
  );
}
