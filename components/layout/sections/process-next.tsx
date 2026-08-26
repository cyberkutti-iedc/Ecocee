"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Initial Discussion",
    description: "Tell us what you are trying to solve.",
  },
  {
    number: "02",
    title: "Discovery",
    description: "We understand your workflow, constraints and existing systems.",
  },
  {
    number: "03",
    title: "Technical Assessment",
    description: "We determine whether AI, edge computing, embedded systems or automation are appropriate.",
  },
  {
    number: "04",
    title: "Solution Proposal",
    description: "We prepare the proposed architecture, scope and commercial proposal.",
  },
  {
    number: "05",
    title: "Engineering",
    description: "Development begins after approval.",
  },
];

export const ProcessNextSection = () => {
  return (
    <section className="py-24 bg-secondary/10 border-t border-border/50" aria-label="Next Steps">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-4xl font-extrabold text-foreground tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              What Happens After You Contact Ecocee?
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-border -z-10" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative text-center flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-full bg-card border-2 border-primary text-primary font-bold flex items-center justify-center mb-6 shadow-sm z-10">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
