"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-32 md:py-40 bg-[#050505]" aria-label="About Ecocee">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-medium text-gray-500 uppercase tracking-[0.2em] mb-4 block">
              About
            </span>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Built in Kerala.
              <br />
              Engineering for the world.
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-lg">
              Ecocee is a technology company building intelligent products across AI, software and connected systems. We take ideas from concept to production.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-white font-medium hover:text-primary transition-colors group"
            >
              More about Ecocee
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: "Founded", value: "2023" },
              { label: "Location", value: "Kerala, India" },
              { label: "Focus", value: "AI + Hardware" },
              { label: "Approach", value: "Full-Stack" },
            ].map((item) => (
              <div key={item.label} className="bg-white/[0.02] border border-white/5 p-6 rounded-xl">
                <span className="text-xs text-gray-500 uppercase tracking-wider block mb-2">
                  {item.label}
                </span>
                <span className="text-lg font-semibold text-white">
                  {item.value}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
