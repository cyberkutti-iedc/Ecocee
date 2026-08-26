"use client";

import { motion } from "framer-motion";
import { FlaskConical } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const tags = [
  "Edge AI",
  "Computer Vision",
  "AI Agents",
  "Embedded Intelligence",
  "IoT",
  "Private AI",
  "Automation"
];

export const EcoceeLabsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background border-t border-border/50" aria-label="Ecocee Labs">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
            <FlaskConical className="w-8 h-8 text-primary animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Ecocee Labs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            We continuously experiment with AI, edge computing, embedded intelligence and automation to turn emerging technology into practical systems.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {tags.map((tag, i) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Badge variant="outline" className="px-4 py-2 text-sm font-medium bg-card text-foreground hover:bg-primary/5 hover:text-primary transition-colors border-border/60">
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
