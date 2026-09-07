"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stages = [
  { name: "Idea", description: "The initial vision and problem definition." },
  { name: "Research", description: "Deep technical and market analysis." },
  { name: "Design", description: "Architecture, systems and product design." },
  { name: "Engineering", description: "Building the core technology stack." },
  { name: "Build", description: "Integration, testing and validation." },
  { name: "Deploy", description: "Production deployment and go-live." },
  { name: "Scale", description: "Growth, optimization and evolution." },
];

export const ProcessSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-32 md:py-40 bg-[#050505]" aria-label="Process">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            From idea
            <br />
            to reality.
          </h2>
          <p className="text-lg text-gray-400 mt-6 max-w-xl">
            We work across the complete product lifecycle — from the first conversation to production and beyond.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div ref={containerRef} className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-1">
            {stages.map((stage, i) => (
              <motion.div
                key={stage.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12 md:pl-20 py-6 group"
              >
                {/* Dot */}
                <div className="absolute left-2 md:left-6 top-8 w-5 h-5 rounded-full bg-[#050505] border-2 border-white/20 group-hover:border-primary group-hover:bg-primary/20 transition-all duration-300" />

                <div className="flex flex-col md:flex-row md:items-baseline md:gap-8">
                  <span className="text-xs text-gray-600 font-mono mb-1 md:mb-0 md:w-16 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors duration-300"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stage.name}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base mt-2 md:mt-0">
                    {stage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
