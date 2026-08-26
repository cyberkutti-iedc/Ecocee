"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const capabilities = [
  "AI automation",
  "Private AI",
  "Edge AI",
  "Computer vision",
  "IoT",
  "Embedded systems",
  "Custom hardware + software",
  "Business system integration"
];

export const TargetAudienceSection = () => {
  return (
    <section className="py-24 bg-background border-t border-border/50" aria-label="Who We Work With">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-primary text-sm font-bold uppercase tracking-widest mb-3 block">Target Audience</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                Built For Complex Technology Problems
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-primary pl-4">
                If you need more than a generic chatbot or off-the-shelf software, Ecocee engineers the system around your problem.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2 }}
            className="bg-card border border-border/60 rounded-3xl p-8 md:p-10 shadow-sm"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {capabilities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <CheckCircle2 className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-foreground font-medium text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
