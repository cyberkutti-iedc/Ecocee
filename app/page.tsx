import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "ECOCEE",
  description: "Innovative solutions for a brighter future.",
  openGraph: {
    type: "website",
    url: "https://github.com/cyberkutti-iedc/ecocee-web",
    title: "ECOCEE",
    description: "Innovative solutions for a brighter future.",
    
  },
  
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
      
      <FooterSection /> {/** */}
    </>
  );
}
