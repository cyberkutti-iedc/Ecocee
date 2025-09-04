'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import HeroSection from '@/components/kuttai/Hero';
import FeatureSection from '@/components/kuttai/Features';
import HowItWorks from '@/components/kuttai/HowItWorks';
// import BenefitsSection from '@/components/kuttai/BenefitsSection';
import DemoSection from '@/components/kuttai/DemoShowcase';
import StatsSection from '@/components/kuttai/StatsSection';
import CTA from '@/components/kuttai/CTA';
import AnimatedComparison from '@/components/kuttai/AnimatedComparison';
import ModelCustomizer from '@/components/kuttai/ModelCustomizer';
import NeuralNetworkDivider from '@/components/kuttai/NeuralNetworkDivider';
import ServerRackIllustration from '@/components/kuttai/ServerRackIllustration';
import LoadingAnimation from '@/components/kuttai/LoadingAnimation';

// SEO Data
const kuttaiSEO = {
  title: "KuttAI - Offline CLI AI Chatbot | 100% Private & Free Forever",
  description: "KuttAI is a completely offline AI chatbot that runs on your device. No internet required, 100% private, free forever. Experience true AI freedom with no subscriptions or data collection.",
  keywords: [
    "offline AI chatbot",
    "private AI assistant",
    "free AI chatbot",
    "CLI AI tool",
    "local AI processing",
    "open source AI",
    "no internet AI",
    "data privacy AI",
    "terminal chatbot",
    "developer AI tools",
    "Gemma AI model",
    "KTU AI assistant",
    "EcoCee products",
    "offline ChatGPT alternative",
    "local LLM",
    "self-hosted AI",
    "privacy-focused AI",
    "command line AI"
  ].join(', '),
  image: "https://ecocee.in/images/og-kuttai.webp",
  canonical: "https://ecocee.in/kuttai",
  twitterHandle: "@EcoceeTech"
};

// Structured Data
const kuttaiStructuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "KuttAI",
  "description": "A completely offline AI chatbot that runs locally on your device with no internet connection required",
  "url": "https://ecocee.in/kuttai",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Windows, macOS, Linux",
  "permissions": "CLI, Local File Access",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR"
  },
  "publisher": {
    "@type": "Organization",
    "name": "EcoCee",
    "logo": {
      "@type": "ImageObject",
      "url": "https://ecocee.in/logo.webp"
    }
  }
};

export default function KuttaiPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingAnimation />;

  return (
    <>
      <Head>
        <title>{kuttaiSEO.title}</title>
        <meta name="description" content={kuttaiSEO.description} />
        <meta name="keywords" content={kuttaiSEO.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={kuttaiSEO.canonical} />
        
        {/* Open Graph */}
        <meta property="og:title" content={kuttaiSEO.title} />
        <meta property="og:description" content={kuttaiSEO.description} />
        <meta property="og:image" content={kuttaiSEO.image} />
        <meta property="og:url" content={kuttaiSEO.canonical} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={kuttaiSEO.twitterHandle} />
        <meta name="twitter:title" content={kuttaiSEO.title} />
        <meta name="twitter:description" content={kuttaiSEO.description} />
        <meta name="twitter:image" content={kuttaiSEO.image} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(kuttaiStructuredData) }}
        />
      </Head>

     <div className="min-h-screen bg-black text-white overflow-hidden">
  {/* Hero Section */}
  <HeroSection />
  
  {/* Divider */}
  {/* <NeuralNetworkDivider /> */}
  {/* How It Works */}
  <HowItWorks />
  {/* Features */}
  <FeatureSection />

  {/* Value Proposition */}
  {/* <BenefitsSection /> */}

  {/* Comparison Section */}
  <AnimatedComparison />

  {/* Divider */}
  <NeuralNetworkDivider />

  {/* Model Customization */}
  <ModelCustomizer />

  {/* Server Visualization */}
  <ServerRackIllustration />

  {/* Divider */}
  <NeuralNetworkDivider />

  {/* Demo */}
  <DemoSection />

  {/* Stats */}
  <StatsSection />

  {/* Final CTA */}
  <CTA />
</div>

    </>
  );
}