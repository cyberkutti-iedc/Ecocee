import type { Metadata } from "next";
import { HeroSection } from "@/components/layout/sections/hero";
import { OverviewSection } from "@/components/layout/sections/overview";
import { ProductsSection } from "@/components/layout/sections/products";
import { TeamSection } from "@/components/layout/sections/team";
import { NewsletterSection } from "@/components/layout/sections/newsletter";
import { ContactSection } from "@/components/layout/sections/contact";
import { FooterSection } from "@/components/layout/sections/footer";
import Seo from "@/components/seo/Seo";

export const metadata: Metadata = {
  title: "Ecocee | AI & Edge Computing Research Startup | Kerala, India",
  description: "Ecocee is an AI and edge computing research startup in Kerala developing intelligent edge devices and researching next-generation AI solutions.",
};

export default function Home() {
  return (
    <>
      <Seo
        title="Ecocee | AI & Edge Computing Research Startup | Kerala, India"
        description="AI and edge computing research startup based in Kerala. Building edge AI devices, IoT solutions, and intelligent systems for the future."
        canonical="https://ecocee.in"
        image="https://ecocee.in/images/og-ecocee.webp"
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
          aria-label="What We Do"
        >
          <OverviewSection />
        </section>

        <section aria-label="Products & Solutions">
          <ProductsSection />
        </section>

        <section aria-label="Team">
          <TeamSection />
        </section>

        <section aria-label="Newsletter">
          <NewsletterSection />
        </section>

        <section 
          aria-label="Contact"
        >
          <ContactSection />
        </section>

      </main>

      <FooterSection />
    </>
  );
}