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

// Metadata must be in a Server Component
export const metadata: Metadata = {
  title: "Ecocee | Embedded Systems & IoT Solutions Company in Kerala | India",
  description: "Kerala-based IoT & embedded systems company specializing in custom hardware, firmware development, industrial automation, and AI solutions. MSME registered startup serving clients across India.",
  keywords: [
    "Embedded Systems Kerala", "IoT Solutions Kerala", "Industrial Automation Kerala", 
    "PCB Prototyping Kerala", "Hardware Prototyping Kerala", "Embedded Training Kerala",
    "Smart Industry Kerala", "Custom Electronics Kerala", "MSME Embedded Systems Kerala",
    "IoT Company Kerala", "Software development company in thrissur",
    "Embedded systems company in thrissur", "IoT solutions in thrissur",
    "Custom software solutions thrissur", "AI solutions in thrissur",
    "Firmware developers in thrissur", "Embedded systems services thrissur",
    "AI and machine learning services thrissur", "IoT firmware developers in thrissur",
    "Software development company in kochi", "Software development company in ernakulam",
    "Embedded systems company in kochi", "Embedded systems company in ernakulam",
    "IoT solutions in kochi", "IoT solutions in ernakulam",
    "Custom software solutions kochi", "Custom software solutions ernakulam",
    "AI solutions in kochi", "AI solutions in ernakulam", "Firmware developers in kochi",
    "Firmware developers in ernakulam", "Embedded systems services kochi",
    "Embedded systems services ernakulam", "AI and machine learning services kochi",
    "AI and machine learning services ernakulam", "IoT firmware developers in kochi",
    "IoT firmware developers in ernakulam", "Embedded Systems India",
    "IoT Solutions India", "Industrial Automation India", "PCB Design Services India",
    "Firmware Development India", "Custom Embedded Hardware India",
    "AI Embedded Solutions India", "Product Development Startup India",
    "Electronics Prototyping India", "Ecocee embedded systems", "Ecocee IoT solutions Kerala",
    "Ecocee startup India", "Ecocee hardware prototyping", "Ecocee technical training",
    "Ecocee automation services", "Ecocee"
  ],
  openGraph: {
    type: "website",
    url: "https://ecocee.in",
    title: "Ecocee | Premier Embedded Systems & IoT Development Company in Kerala",
    description: "Kerala's trusted partner for custom embedded systems, IoT solutions, and industrial automation.",
    locale: "en_IN",
    siteName: "Ecocee",
  },
  alternates: {
    canonical: "https://ecocee.in",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

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
        structuredData={[]}
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
