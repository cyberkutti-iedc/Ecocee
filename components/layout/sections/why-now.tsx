"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "AI is mature enough for production",
    description: "Open-source models, edge inference and private deployment make AI practical for real business operations — not just demos.",
  },
  {
    number: "02",
    title: "Hardware costs have dropped",
    description: "Powerful microcontrollers, sensors and edge devices are now affordable enough for mass deployment across industries.",
  },
  {
    number: "03",
    title: "Competitors are already automating",
    description: "Companies that integrate AI and automation now will have a structural advantage over those that wait.",
  },
  {
    number: "04",
    title: "Data is your biggest asset",
    description: "The companies that learn to process, understand and act on their data first will define their markets.",
  },
];

export const WhyNowSection = () => {
  return (
    <section className="py-32 md:py-40 bg-[#0a0a0a]" aria-label="Why Now">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-xs font-medium text-gray-500 uppercase tracking-[0.2em] mb-4 block">
            Timing
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Why now?
          </h2>
          <p className="text-lg text-gray-400 mt-6 max-w-xl">
            The technology, economics and market timing have never been better for intelligent systems.
          </p>
        </motion.div>

        {/* Reasons */}
        <div className="grid md:grid-cols-2 gap-px bg-white/5">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#0a0a0a] p-8 md:p-10 group"
            >
              <span className="text-xs text-gray-600 font-mono block mb-4">{reason.number}</span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {reason.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
