import type { Metadata } from "next";
import "./kode.css";
import { Hero } from "../_components/hero";
import { Why, Code, Speed, Compiler, Inside, Agents, Roadmap, Start, Footer } from "../_components/sections";

const URL = "https://kode.ecocee.in";
const TITLE = "Kode: a compiled language that is easy to write and cheap to run";
const DESC = "Kode is an open source compiled programming language. Python-readable, JavaScript-familiar, compiled to small native binaries with Cranelift. Built for cloud backends and AI agents.";

export const metadata: Metadata = {
  
  title: { absolute: TITLE },
  description: DESC,
  keywords: ["Kode", "programming language", "compiled language", "native binaries", "Cranelift", "Rust compiler", "backend language", "AI agents", "Ecocee"],
  authors: [{ name: "Ecocee", url: "https://ecocee.in" }],
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: URL, siteName: "Kode", title: TITLE, description: DESC, images: [{ url: "/kode/logo.png", width: 1024, height: 1024, alt: "Kode owl logo" }] },
  twitter: { card: "summary", title: TITLE, description: DESC, images: ["/kode/logo.png"] },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Kode",
  description: DESC,
  url: URL,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Linux, macOS",
  softwareVersion: "0.3",
  license: "https://www.apache.org/licenses/LICENSE-2.0",
  codeRepository: "https://github.com/ecocee/Kode",
  author: { "@type": "Organization", name: "Ecocee", url: "https://ecocee.in" },
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function Page() {
  return (
    <main className="kode min-h-screen antialiased">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <Why />
      <Code />
      <Speed />
      <Compiler />
      <Inside />
      <Agents />
      <Roadmap />
      <Start />
      <Footer />
    </main>
  );
}