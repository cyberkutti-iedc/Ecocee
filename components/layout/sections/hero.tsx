"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { GOOGLE_FORM_URL } from "@/lib/config";

const SpeedWord = ({ children }: { children: React.ReactNode }) => (
  <span className="relative inline-block overflow-hidden">
    {/* Speed trail lines */}
    <motion.span
      className="absolute top-1/2 -translate-y-1/2 -left-8 h-[3px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: 60, opacity: [0, 0.8, 0] }}
      transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
    />
    <motion.span
      className="absolute top-[30%] -left-6 h-[2px] bg-gradient-to-r from-transparent via-blue-400/60 to-transparent rounded-full"
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: 40, opacity: [0, 0.6, 0] }}
      transition={{ duration: 0.6, delay: 1.15, ease: "easeOut" }}
    />
    <motion.span
      className="absolute top-[70%] -left-4 h-[2px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent rounded-full"
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: 30, opacity: [0, 0.5, 0] }}
      transition={{ duration: 0.5, delay: 1.25, ease: "easeOut" }}
    />
    {/* Main word with speed blur entry */}
    <motion.span
      className="inline-block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
      initial={{ opacity: 0, x: -80, filter: "blur(12px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.span>
  </span>
);
export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden" aria-label="Hero">
      {/* Dark gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-gray-950 to-black" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 md:py-40 w-full">
        <div className="max-w-4xl lg:max-w-3xl xl:max-w-4xl">
          {/* Overline */}
          

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
    text-[2.8rem]
    leading-[0.98]
    tracking-[-0.04em]
    font-bold
    text-white
    sm:text-5xl
    sm:leading-[1]
    md:text-7xl
    lg:text-8xl
    xl:text-[6.5rem]
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

  <span className="text-white">
    Ideas{" "}
  </span>

  <motion.span initial={{ opacity: 0, x: -80, scale: 0.88, filter: "blur(12px)", }} animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)", }} transition={{ delay: 0.45, duration: 1.1, ease: [0.16, 1, 0.3, 1], }} whileHover={{ x: 45, scale: 1.06, filter: "blur(0px)", transition: { duration: 0.18, ease: [0.7, 0, 0.84, 0], }, }} className="inline-block cursor-pointer text-white will-change-transform" > Forward. </motion.span>
</motion.h1>




          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed mb-12"
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
              className="h-14 px-8 bg-white text-black hover:bg-gray-200 font-semibold text-base transition-all duration-200 group rounded-full hover-lift shadow-lg shadow-white/10"
            >
              Explore our work
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open(GOOGLE_FORM_URL, "_blank")}
              className="h-14 px-8 border-white/30 text-white hover:bg-white/10 font-semibold text-base transition-all duration-200 rounded-full border-glow hover:border-white/50"
            >
              Start a project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-transparent to-white/50"
        />
      </motion.div>
    </section>
  );
};
