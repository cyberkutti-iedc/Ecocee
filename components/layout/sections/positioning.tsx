"use client";

import { motion } from "framer-motion";

const points = [
  {
    title: "Product Thinking",
    description: "We don't just build features. We think about the entire product — from user experience to technical architecture to long-term scalability.",
  },
  {
    title: "Engineering Depth",
    description: "Our team works across AI, software, embedded systems and cloud infrastructure. We bring the full engineering stack to every project.",
  },
  {
    title: "AI Integration",
    description: "We don't bolt AI onto existing systems. We engineer intelligent systems where AI is a core architectural decision, not an afterthought.",
  },
  {
    title: "Hardware + Software",
    description: "Most companies build one or the other. We build both. This means we can engineer complete systems from sensors to intelligence.",
  },
  {
    title: "Real Deployment",
    description: "We don't hand off code and disappear. We deploy, monitor, support and evolve the systems we build.",
  },
  {
    title: "Scalable Architecture",
    description: "Every system we build is designed to grow with your business — from initial prototype to enterprise scale.",
  },
];

export const PositioningSection = () => {
  return (
    <section className="py-32 md:py-40 bg-[#0a0a0a]" aria-label="Why Ecocee">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              We don't just
              <br />
              deliver software.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-end"
          >
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              We engineer
              <br />
              products.
            </h2>
          </motion.div>
        </div>

        {/* Points */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#0a0a0a] p-8 md:p-10"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                {point.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
