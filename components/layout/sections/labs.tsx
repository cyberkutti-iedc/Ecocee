"use client";

import { motion } from "framer-motion";
import { FlaskConical, ArrowRight } from "lucide-react";

const experiments = [
  {
    title: "Edge AI Prototyping",
    description: "Building and testing AI models that run directly on embedded hardware for real-time inference.",
    tags: ["ESP32", "TensorFlow Lite", "Computer Vision"],
  },
  {
    title: "Private LLM Deployment",
    description: "Experimenting with open-source language models running entirely on-premise for enterprise use cases.",
    tags: ["Llama", "Mistral", "RAG"],
  },
  {
    title: "IoT Sensor Networks",
    description: "Developing low-power sensor networks for environmental monitoring and industrial automation.",
    tags: ["LoRaWAN", "BLE", "Edge Computing"],
  },
];

export const LabsSection = () => {
  return (
    <section className="py-32 md:py-40 bg-[#050505] relative overflow-hidden" aria-label="Ecocee Labs">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <FlaskConical className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xs font-medium text-gray-500 uppercase tracking-[0.2em]">
                Ecocee Labs
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              We experiment
              <br />
              so you don't have to.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-end"
          >
            <p className="text-lg text-gray-400 leading-relaxed">
              We continuously explore emerging technologies to turn experimental concepts into practical systems for our clients.
            </p>
          </motion.div>
        </div>

        {/* Experiments */}
        <div className="grid md:grid-cols-3 gap-px bg-white/5">
          {experiments.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#050505] p-8 md:p-10 group hover:bg-white/[0.02] transition-colors duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {exp.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 text-[11px] text-gray-400 bg-white/5 rounded-full border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
