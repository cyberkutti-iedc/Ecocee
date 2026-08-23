/**
 * Centralized Schema.org structured data for Ecocee.
 * Used across pages for SEO, AEO (Answer Engine Optimization),
 * and GEO (Generative Engine Optimization).
 */

const SITE_URL = "https://ecocee.in";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ecocee",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.webp`,
  description:
    "Ecocee builds custom AI agents, private AI infrastructure, and embedded IoT systems for businesses in Kerala and across India.",
  foundingDate: "2023",
  foundingLocation: {
    "@type": "Place",
    name: "Kodungallur, Thrissur, Kerala, India",
  },
  sameAs: ["https://www.linkedin.com/company/ecocee"],
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@ecocee.in",
    contactType: "customer service",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kodungallur",
    addressLocality: "Thrissur",
    addressRegion: "Kerala",
    postalCode: "680664",
    addressCountry: "IN",
  },
};


export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ecocee",
  image: `${SITE_URL}/og-banner.webp`,
  "@id": SITE_URL,
  url: SITE_URL,
  telephone: "+919446715884",
  priceRange: "$$",
  description:
    "Ecocee builds custom AI agents and edge computing solutions for businesses in Kerala. AI for offices, warehouses, and customer support.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kodungallur",
    addressLocality: "Thrissur",
    addressRegion: "Kerala",
    postalCode: "680664",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "10.2326",
    longitude: "76.1951",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [
    "https://www.linkedin.com/company/ecocee",
    "https://twitter.com/Ecocee",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Ecocee",
  url: SITE_URL,
  description:
    "Ecocee builds AI agents and edge computing devices for businesses in Kerala, India.",
  publisher: {
    "@type": "Organization",
    name: "Ecocee",
    logo: `${SITE_URL}/logo.webp`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const aiAgentSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Ecocee Business AI Agent",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Cloud-based, WhatsApp, Web",
    description:
      "Custom AI agent for automating customer inquiries, lead qualification, and CRM management. Handles WhatsApp, email, and website chat for SMEs and retail businesses.",
    url: `${SITE_URL}/ai-agents#business`,
    provider: { "@type": "Organization", name: "Ecocee" },
    offers: {
      "@type": "Offer",
      price: "9999",
      priceCurrency: "INR",
      description: "Monthly subscription, setup included",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Ecocee Office AI Agent",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Cloud-based, Web, Slack",
    description:
      "AI assistant for meeting summaries, document analysis, scheduling, and internal knowledge base. Built for startups, corporate offices, and co-working spaces.",
    url: `${SITE_URL}/ai-agents#office`,
    provider: { "@type": "Organization", name: "Ecocee" },
    offers: {
      "@type": "Offer",
      price: "14999",
      priceCurrency: "INR",
      description: "Monthly subscription, setup included",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Ecocee Warehouse AI Agent",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Cloud-based, Edge Device",
    description:
      "AI agent for inventory tracking, reorder automation, supplier coordination, anomaly detection, and demand forecasting. Designed for manufacturers, distributors, and logistics companies.",
    url: `${SITE_URL}/ai-agents#warehouse`,
    provider: { "@type": "Organization", name: "Ecocee" },
    offers: {
      "@type": "Offer",
      price: "19999",
      priceCurrency: "INR",
      description: "Monthly subscription, edge device included",
    },
  },
];

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI and Embedded Systems Solutions",
  provider: {
    "@type": "Organization",
    name: "Ecocee",
  },
  areaServed: {
    "@type": "Place",
    name: "Kerala, India",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Ecocee AI & Electronics Solutions",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom AI Agent Development",
          description: "Business, office, and warehouse AI agents built to your specifications",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Edge Computing Devices",
          description: "Custom embedded hardware with AI capabilities for real-time processing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "IoT Solutions",
          description: "Connected device systems with cloud integration and remote monitoring",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "PCB Prototyping",
          description: "Rapid electronic board design and prototyping services",
        },
      },
    ],
  },
};

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq, index) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
    position: index + 1,
  })),
});

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Ecocee — AI Agents & Edge Computing Kerala",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".speakable-hero", ".speakable-summary"],
  },
};
