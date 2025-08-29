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


export default function KuttaiPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
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
  );
}