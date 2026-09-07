import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FooterSection } from "@/components/layout/sections/footer";

export const metadata: Metadata = {
  title: "Technology — Ecocee | AI, Software & Product Engineering",
  description: "Explore Ecocee's technology stack and engineering approach. AI, software, embedded systems, cloud infrastructure and IoT.",
};

const stacks = [
  {
    category: "AI & Intelligence",
    items: [
      { name: "LLMs", description: "Large language models for natural language understanding and generation" },
      { name: "RAG Systems", description: "Retrieval-augmented generation for accurate, grounded AI responses" },
      { name: "Computer Vision", description: "Image and video analysis for real-world applications" },
      { name: "MLOps", description: "Model deployment, monitoring and lifecycle management" },
    ],
  },
  {
    category: "Software Engineering",
    items: [
      { name: "React / Next.js", description: "Modern web applications with server-side rendering" },
      { name: "Node.js / Python", description: "Backend APIs and services" },
      { name: "PostgreSQL", description: "Relational database management" },
      { name: "Docker", description: "Containerized deployment and orchestration" },
    ],
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      { name: "AWS", description: "Amazon Web Services for scalable cloud infrastructure" },
      { name: "Azure", description: "Microsoft cloud for enterprise deployments" },
      { name: "Kubernetes", description: "Container orchestration at scale" },
      { name: "Terraform", description: "Infrastructure as code" },
    ],
  },
  {
    category: "Embedded Systems",
    items: [
      { name: "ESP32", description: "WiFi/BLE microcontrollers for IoT devices" },
      { name: "STM32", description: "ARM Cortex-M microcontrollers for industrial applications" },
      { name: "FreeRTOS", description: "Real-time operating system for embedded devices" },
      { name: "C/C++", description: "Firmware and low-level system programming" },
    ],
  },
  {
    category: "IoT & Connectivity",
    items: [
      { name: "MQTT", description: "Lightweight messaging protocol for IoT" },
      { name: "LoRaWAN", description: "Long-range, low-power wireless for sensor networks" },
      { name: "BLE", description: "Bluetooth Low Energy for short-range communication" },
      { name: "Edge Computing", description: "Local processing for real-time decisions" },
    ],
  },
];

export default function TechnologyPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      {/* Hero */}
      <section className="py-32 md:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-[0.2em] mb-4 block">
            Technology
          </span>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.9] tracking-tight mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The systems
            <br />
            we build with.
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            We choose technologies based on the problem, not brand preference. Every stack decision is driven by reliability, performance and maintainability.
          </p>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            How it all connects.
          </h2>
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 md:p-12">
            <div className="font-mono text-sm text-gray-400 space-y-4 text-center">
              <div className="text-white font-bold text-lg">REAL WORLD</div>
              <div>Sensors / Devices / Users</div>
              <div className="text-primary text-xl">↓</div>
              <div className="text-white font-bold text-lg">EDGE</div>
              <div>Local Intelligence / Processing</div>
              <div className="text-primary text-xl">↓</div>
              <div className="text-white font-bold text-lg">AI LAYER</div>
              <div>Models / Agents / Decision Making</div>
              <div className="text-primary text-xl">↓</div>
              <div className="text-white font-bold text-lg">INFRASTRUCTURE</div>
              <div>Cloud / Private / Hybrid</div>
              <div className="text-primary text-xl">↓</div>
              <div className="text-white font-bold text-lg">BUSINESS SYSTEMS</div>
              <div>ERP / CRM / Custom Software</div>
              <div className="text-primary text-xl">↓</div>
              <div className="text-white font-bold text-lg">OUTCOME</div>
              <div>Automation / Decisions / Intelligence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-16"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Full technology stack.
          </h2>

          <div className="space-y-16">
            {stacks.map((stack) => (
              <div key={stack.category}>
                <h3 className="text-xs text-gray-500 uppercase tracking-wider mb-6 font-medium border-b border-white/5 pb-4">
                  {stack.category}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stack.items.map((item) => (
                    <div key={item.name} className="group">
                      <h4 className="text-white font-semibold mb-1 group-hover:text-primary transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Want to discuss your technology needs?
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            We'll help you choose the right stack for your specific problem.
          </p>
          <Link
            href="mailto:info@ecocee.in"
            className="inline-flex items-center gap-2 h-12 px-8 bg-white text-black hover:bg-gray-100 font-semibold rounded-full transition-all group"
          >
            Start a conversation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
