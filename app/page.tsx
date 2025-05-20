import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { ServicesSection } from "@/components/layout/sections/services";

export const metadata = {
  title: "Ecocee | Custom Embedded & IoT Solutions",
  description: "Ecocee offers cutting-edge embedded systems and IoT development, delivering customized technology solutions for businesses seeking innovation.",
  keywords: [
    "Ecocee",
    "IoT solutions",
    "embedded systems",
    "custom hardware",
    "technology innovation",
    "smart devices",
    "electronics engineering"
  ],
  openGraph: {
    type: "website",
    url: "https://ecocee.in",
    title: "Ecocee | Custom Embedded & IoT Solutions",
    description: "Explore Ecocee’s tailored embedded and IoT solutions that bring innovation, performance, and reliability to your tech infrastructure.",
    images: [
      {
        url: "https://ecocee.in/og-image.jpg",
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
  }
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <CommunitySection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
