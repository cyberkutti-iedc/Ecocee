import { Metadata } from "next";
import Seo from "@/components/seo/Seo";
import { websiteSchema } from "@/lib/seo/schemas";
import { FooterSection } from "@/components/layout/sections/footer";

import { MeroHero } from "@/components/mero/MeroHero";
import { MeroIntro } from "@/components/mero/MeroIntro";
import { MeroProblem } from "@/components/mero/MeroProblem";
import { MeroIdea } from "@/components/mero/MeroIdea";
import { MeroHardware } from "@/components/mero/MeroHardware";
import { MeroHardwareFeatures } from "@/components/mero/MeroHardwareFeatures";
import { MeroConnectivity } from "@/components/mero/MeroConnectivity";
import { MeroFlows } from "@/components/mero/MeroFlows";
import { MeroData } from "@/components/mero/MeroData";
import { MeroUseCases } from "@/components/mero/MeroUseCases";
import { MeroSpecs } from "@/components/mero/MeroSpecs";
import { MeroWaitlist } from "@/components/mero/MeroWaitlist";
import { MeroClosing } from "@/components/mero/MeroClosing";

export const metadata: Metadata = {
  title: "Mero — Edge Computing Appliance for Local AI & Automation",
  description:
    "A complete edge computing appliance for local AI, automation, data processing, and connected systems. Compute locally. Keep control.",
  keywords: [
    "Mero",
    "Edge Computing Appliance",
    "Local AI Appliance",
    "Local Data Processing",
    "Self-Hosted Compute",
    "ARM Edge Appliance",
    "Workflow Engine",
    "Ecocee",
  ],
  alternates: {
    canonical: "https://ecocee.in/mero",
  },
  openGraph: {
    title: "Mero — Edge Computing Appliance for Local AI & Automation",
    description:
      "A complete edge computing appliance for local AI, automation, data processing, and connected systems. Compute locally. Keep control.",
    url: "https://ecocee.in/mero",
    siteName: "Ecocee",
    images: [{ url: "https://ecocee.in/og-banner.webp", width: 1200, height: 630, alt: "Mero Edge Computing Appliance" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mero — Edge Computing Appliance",
    description:
      "A complete edge computing appliance for local AI, automation, data processing, and connected systems.",
    images: ["https://ecocee.in/og-banner.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};

const meroProductSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  name: "Mero Edge Computing Appliance",
  image: ["https://ecocee.in/og-banner.webp"],
  description:
    "A complete edge computing appliance for local AI, automation, data processing, and connected systems.",
  brand: {
    "@type": "Brand",
    name: "Ecocee",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "INR",
    availability: "https://schema.org/PreOrder",
  },
};

export default function MeroPage() {
  const structuredData = [websiteSchema, meroProductSchema];

  return (
    <>
      <Seo
        title="Mero — Edge Computing Appliance for Local AI & Automation"
        description="A complete edge computing appliance for local AI, automation, data processing, and connected systems."
        canonical="https://ecocee.in/mero"
        image="https://ecocee.in/og-banner.webp"
        twitterHandle="@Ecocee"
        siteName="Ecocee"
        structuredData={structuredData}
      />
      <main className="bg-white min-h-screen text-slate-900 pt-16 lg:pt-20 font-sans selection:bg-[#2563EB] selection:text-white">
        <MeroHero />
        <MeroIntro />
        <MeroProblem />
        <MeroIdea />
        <MeroHardware />
        <MeroHardwareFeatures />
        <MeroConnectivity />
        <MeroFlows />
        <MeroData />
        <MeroUseCases />
        <MeroSpecs />
        <MeroWaitlist />
        <MeroClosing />
      </main>

      <FooterSection />
    </>
  );
}
