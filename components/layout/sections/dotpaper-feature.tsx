"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, Database, Monitor } from "lucide-react";

export const DotpaperFeatureSection = () => {
  return (
    <section id="products" className="relative w-full overflow-hidden border-t border-white/[0.08] bg-[#020408]">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="grid min-h-[680px] items-center gap-12 py-20 lg:grid-cols-[1.18fr_0.82fr] lg:gap-8 lg:py-24">
          
          {/* Product visual - abstract UI elements */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 1.1,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative min-h-[460px] lg:min-h-[640px] hidden lg:block"
          >
            {/* Soft atmospheric background */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#10b981]/[0.08] blur-3xl"
            />

            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-[85%] h-[75%] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-2xl relative">
                  <div className="flex items-center gap-2 mb-8 border-b border-white/5 pb-4">
                     <div className="w-3 h-3 rounded-full bg-white/20"></div>
                     <div className="w-3 h-3 rounded-full bg-white/20"></div>
                     <div className="w-3 h-3 rounded-full bg-white/20"></div>
                     <div className="ml-4 h-3 w-24 bg-white/10 rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                     <div className="h-20 rounded-xl bg-white/5 border border-white/5"></div>
                     <div className="h-20 rounded-xl bg-white/5 border border-white/5"></div>
                     <div className="h-20 rounded-xl bg-white/5 border border-white/5"></div>
                  </div>
                  <div className="h-48 rounded-xl bg-white/5 border border-white/5 mb-4"></div>
                  <div className="h-8 w-1/3 rounded-md bg-white/10"></div>
               </div>
            </div>

            {/* Minimal technical marker */}
            <div className="absolute bottom-4 left-0 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" />
              Dotpaper · v1.0
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative z-20 max-w-xl lg:pl-12"
          >
            <div className="mb-7 flex items-center gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">
                Product · 02
              </span>
              <span className="h-px w-8 bg-white/15" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#10b981]">
                Unified Platform
              </span>
            </div>

            <h2 className="text-6xl font-semibold tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">
              Dotpaper<span className="text-[#10b981]">.</span>
            </h2>

            <p className="mt-7 max-w-lg text-2xl font-medium leading-tight tracking-[-0.03em] text-white/90 sm:text-3xl">
              One platform.
              <br />
              <span className="text-white/40">
                Many business applications.
              </span>
            </p>

            <p className="mt-7 max-w-md text-base leading-7 text-white/45 sm:text-lg">
              Run your Service Desk, Financials, and custom internal tools all from the exact same place, built entirely around your business needs.
            </p>

            <Link
              href="/dotpaper"
              className="group mt-9 inline-flex items-center gap-3 text-base font-medium text-white"
            >
              <span className="relative">
                Explore Dotpaper
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-white/30 transition-transform duration-300 group-hover:scale-x-0" />
              </span>

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>

            <div className="mt-16 grid max-w-md grid-cols-3 border-t border-white/10">
              <div className="py-5 pr-4">
                <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/30 mb-2">
                  Logic
                </div>
                <Code className="w-4 h-4 text-white/50 mb-2" />
                <div className="text-sm font-medium text-white/75">
                  Python
                </div>
              </div>

              <div className="border-l border-white/10 px-4 py-5">
                <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/30 mb-2">
                  Core
                </div>
                <Database className="w-4 h-4 text-white/50 mb-2" />
                <div className="text-sm font-medium text-white/75">
                  Rust
                </div>
              </div>

              <div className="border-l border-white/10 pl-4 py-5">
                <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/30 mb-2">
                  Interface
                </div>
                <Monitor className="w-4 h-4 text-white/50 mb-2" />
                <div className="text-sm font-medium text-white/75">
                  React
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
