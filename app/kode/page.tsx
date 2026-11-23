import type { Metadata } from "next";
import "./kode.css";
import { Hero } from "../_components/hero";
import { Why, Code, Speed, Compiler, Inside, Agents, Roadmap, Start, KodeFAQ, Footer } from "../_components/sections";

const URL = "https://ecocee.in/kode";
const TITLE = "Kode — Compiled Language for Cloud & AI";
const DESC = "An open source compiled programming language with clean syntax, native performance, and small binaries. Built for cloud backends and AI agents.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  keywords: ["Kode", "programming language", "compiled language", "native binaries", "Cranelift", "Rust compiler", "backend language", "AI agents", "Ecocee"],
  authors: [{ name: "Ecocee", url: "https://ecocee.in" }],
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    url: URL,
    siteName: "Kode",
    title: TITLE,
    description: DESC,
    images: [{ url: "https://ecocee.in/og-banner.webp", width: 1200, height: 630, alt: "Kode programming language by Ecocee" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    images: ["https://ecocee.in/og-banner.webp"],
  },
  robots: { index: true, follow: true },
};

const softwareSourceCodeSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: "Kode",
  description: DESC,
  codeRepository: "https://github.com/ecocee/Kode",
  programmingLanguage: "Kode",
  runtimePlatform: "Linux, macOS, Windows (preview)",
  requirements: "Rust 1.91+ and a C compiler",
  license: "https://www.apache.org/licenses/LICENSE-2.0",
  author: {
    "@type": "Organization",
    name: "Ecocee",
    url: "https://ecocee.in",
  },
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Kode?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kode is an open source compiled programming language with clean syntax, native performance, and small binaries, built for cloud software, backends, and AI-assisted development.",
      },
    },
    {
      "@type": "Question",
      name: "What license is Kode released under?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kode is released under the Apache-2.0 license.",
      },
    },
    {
      "@type": "Question",
      name: "How do I build Kode from source?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Clone https://github.com/ecocee/Kode, then run cargo build --workspace to compile, and cargo test --workspace to run tests.",
      },
    },
    {
      "@type": "Question",
      name: "What are the requirements to build Kode?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Building Kode requires Rust 1.91 or newer and a C compiler. On macOS, run xcode-select --install first.",
      },
    },
    {
      "@type": "Question",
      name: "Which operating systems are supported, and is Windows supported?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kode supports Linux and macOS. Windows support is currently available as a preview.",
      },
    },
    {
      "@type": "Question",
      name: "How can I contribute to Kode?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contributions are welcome on GitHub at https://github.com/ecocee/Kode through bug reports, feature discussions, and pull requests following CONTRIBUTING.md.",
      },
    },
  ],
};

export default function Page() {
  return (
    <main className="kode min-h-screen antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSourceCodeSchema, faqPageSchema]),
        }}
      />
      <Hero />
      <Why />
      <Code />
      <Speed />
      <Compiler />
      <Inside />
      <Agents />
      <Roadmap />
      <KodeFAQ />
      <Start />
      <Footer />
    </main>
  );
}