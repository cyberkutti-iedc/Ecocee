"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { GOOGLE_FORM_URL } from "@/lib/config";
import { FlipWords } from "@/components/ui/flip-words";

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-background" aria-label="Hero">
      {/* Dark background */}
      <div className="absolute inset-0 z-0 bg-[#050505]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 md:py-40 w-full flex flex-col justify-center">
        <div className="max-w-4xl lg:max-w-3xl xl:max-w-4xl">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              mb-8
              text-[3rem]
              leading-[1.05]
              tracking-[-0.04em]
              font-bold
              text-white
              sm:text-6xl
              sm:leading-[1]
              md:text-7xl
              lg:text-[6rem]
              xl:text-[7rem]
            "
          >
            Technology
            <br />
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.12,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block text-white"
            >
              That Moves
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.24,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block text-white"
            >
              <FlipWords words={["Ideas", "Products", "Startups", "Visions"]} className="text-white dark:text-white px-0" /> Forward.
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-12 font-light"
          >
            AI, software and product engineering for ideas that need to become real.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <Button
              size="lg"
              onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
              className="h-14 px-8 bg-white text-black hover:bg-gray-200 font-semibold text-base transition-all duration-200 group rounded-none"
            >
              Explore our work
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open(GOOGLE_FORM_URL, "_blank")}
              className="h-14 px-8 border-white/20 text-white hover:bg-white/10 font-semibold text-base transition-all duration-200 rounded-none"
            >
              Start a project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="hidden lg:block absolute right-24 top-0 bottom-0 w-px bg-white/5"
      />
    </section>
  );
};
