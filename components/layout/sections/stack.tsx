"use client";

import { motion } from "framer-motion";

const stacks = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "FastAPI", "PostgreSQL"],
  },
  {
    category: "AI/ML",
    items: ["LLMs", "Open Source Models", "RAG", "Computer Vision"],
  },
  {
    category: "Cloud",
    items: ["AWS", "Azure", "Docker", "Kubernetes"],
  },
  {
    category: "Embedded",
    items: ["ESP32", "STM32", "ARM Cortex", "FreeRTOS"],
  },
  {
    category: "IoT",
    items: ["MQTT", "LoRaWAN", "Edge Computing", "BLE"],
  },
];

export const StackSection = () => {
  return (
    <section id="insights" className="py-32 md:py-40 bg-[#0a0a0a]" aria-label="Technology Stack">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs font-medium text-gray-500 uppercase tracking-[0.2em] mb-4 block">
            Technology
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Built with the
            <br />
            right tools.
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5">
          {stacks.map((stack, i) => (
            <motion.div
              key={stack.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-[#0a0a0a] p-6"
            >
              <h3 className="text-xs text-gray-500 uppercase tracking-wider mb-4 font-medium">
                {stack.category}
              </h3>
              <ul className="space-y-2">
                {stack.items.map((item) => (
                  <li key={item} className="text-sm text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
