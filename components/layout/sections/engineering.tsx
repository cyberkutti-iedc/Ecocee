"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const domains = [
  {
    id: "ai",
    title: "AI & Intelligence",
    description: "Custom AI agents, machine learning systems, natural language processing, computer vision and intelligent automation.",
    details: ["LLM Integration", "RAG Systems", "Computer Vision", "NLP", "MLOps"],
  },
  {
    id: "software",
    title: "Software Engineering",
    description: "Full-stack web applications, APIs, mobile apps and enterprise systems built with modern frameworks.",
    details: ["React / Next.js", "Node.js / Python", "APIs & Microservices", "Databases", "DevOps"],
  },
  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    description: "Private, public and hybrid cloud architectures designed for security, performance and scalability.",
    details: ["AWS / Azure / GCP", "Docker / Kubernetes", "CI/CD Pipelines", "Monitoring", "Security"],
  },
  {
    id: "embedded",
    title: "Embedded Systems",
    description: "Custom firmware, PCB design, microcontroller programming and hardware prototyping.",
    details: ["STM32 / ESP32 / ARM", "Firmware (C/C++)", "RTOS", "PCB Design", "Prototyping"],
  },
  {
    id: "iot",
    title: "IoT & Connected Devices",
    description: "End-to-end IoT systems from sensors and edge devices to cloud dashboards and analytics.",
    details: ["Sensor Networks", "Edge Computing", "MQTT / CoAP", "Device Management", "Analytics"],
  },
  {
    id: "design",
    title: "Product Design",
    description: "User experience design, interface design and design systems for digital products.",
    details: ["UX Research", "UI Design", "Design Systems", "Prototyping", "User Testing"],
  },
];

export const EngineeringSection = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="py-32 md:py-40 bg-[#050505]" aria-label="Engineering Capabilities">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs font-medium text-gray-500 uppercase tracking-[0.2em] mb-4 block">
            Engineering
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Deep expertise.
            <br />
            Full-stack delivery.
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="border-t border-white/10">
          {domains.map((domain, i) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border-b border-white/10"
            >
              <button
                onClick={() => setExpandedId(expandedId === domain.id ? null : domain.id)}
                className="w-full flex items-center justify-between py-6 md:py-8 text-left group"
              >
                <h3
                  className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors duration-300"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {domain.title}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    expandedId === domain.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {expandedId === domain.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 md:pb-10">
                      <p className="text-gray-400 text-sm md:text-base max-w-2xl mb-6 leading-relaxed">
                        {domain.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {domain.details.map((detail) => (
                          <span
                            key={detail}
                            className="px-3 py-1.5 text-xs text-gray-400 bg-white/5 rounded-full border border-white/5"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
