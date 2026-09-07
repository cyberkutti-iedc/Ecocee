"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GOOGLE_FORM_URL } from "@/lib/config";

export const CTASection = () => {
  return (
    <section id="contact" className="py-40 md:py-56 relative overflow-hidden" aria-label="Contact">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[0.9] tracking-tight mb-8"
        >
          Have an idea
          <br />
          worth building?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl mx-auto"
        >
          Let's turn it into something real.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => window.open(GOOGLE_FORM_URL, "_blank")}
            className="inline-flex items-center gap-3 h-14 px-8 bg-foreground text-background hover:opacity-90 font-semibold text-base rounded-full transition-all duration-200 group hover-lift"
          >
            Start a project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <Link
            href="mailto:info@ecocee.in"
            className="inline-flex items-center gap-3 h-14 px-8 border border-border text-foreground hover:bg-secondary font-semibold text-base rounded-full transition-all duration-200 border-glow"
          >
            Talk to Ecocee
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
