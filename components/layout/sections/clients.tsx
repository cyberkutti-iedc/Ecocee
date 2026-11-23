"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "ORDATO", tagline: "AI Hospitality Systems" },
  { name: "ADARA SCREENS", tagline: "Digital Signage Architectures" },
  { name: "NAVICENTRA", tagline: "Fleet Intelligence Systems" },
  { name: "G-POWER", tagline: "Energy & Power Systems" },
  { name: "RALLYBOX", tagline: "Rally Management Hardware" },
  { name: "RALLY FLASHER", tagline: "Telemetry & Signal Hardware" },
];

export const ClientsSection = () => {
  return (
    <section className="py-32 md:py-40 bg-background" aria-label="Clients and Completed Projects">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground"
          >
            Completed Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-muted-foreground max-w-md"
          >
            Delivered software, embedded hardware, and AI systems across client engagements.
          </motion.p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background p-12 md:p-16 flex flex-col items-center justify-center text-center group hover:bg-secondary/50 transition-colors duration-300 min-h-[180px]"
            >
              <span className="text-3xl md:text-4xl font-bold text-foreground tracking-tight opacity-80 group-hover:opacity-100 transition-opacity">
                {client.name}
              </span>
              <span className="text-sm text-muted-foreground mt-3 uppercase tracking-wider">
                {client.tagline}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
