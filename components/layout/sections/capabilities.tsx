"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const capabilities = [
  { id: "ai", title: "AI", description: "Intelligent systems designed to understand, automate and scale." },
  { id: "software", title: "Software", description: "Reliable digital products engineered for real-world use." },
  { id: "embedded", title: "Embedded", description: "Hardware and firmware engineered from the ground up." },
  { id: "cloud", title: "Cloud", description: "Scalable infrastructure connecting products, people and data." },
  { id: "iot", title: "IoT", description: "Connected devices and sensors bridging the physical and digital." },
  { id: "products", title: "Products", description: "End-to-end product engineering from concept to deployment." },
];

export const CapabilitiesSection = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="capabilities" className="py-32 md:py-40" aria-label="Capabilities">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            We build what
            <br />
            comes next.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onMouseEnter={() => setHoveredId(cap.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`bg-background p-8 md:p-10 transition-all duration-400 cursor-default group ${
                hoveredId === cap.id ? "bg-secondary/50" : ""
              }`}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 transition-colors duration-300 group-hover:opacity-80">
                {cap.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-xs transition-colors duration-300 group-hover:text-foreground/70">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
