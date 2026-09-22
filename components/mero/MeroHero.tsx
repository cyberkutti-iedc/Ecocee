"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FlipWords } from "@/components/ui/flip-words";

export const MeroHero = () => {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToHardware = () => {
    document.getElementById("hardware")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      aria-label="Mero"
      className="relative min-h-screen overflow-hidden bg-white"
    >
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        {/* Top bar */}
        
        {/* Hero */}
        <div className="grid min-h-[calc(100vh-69px)] items-center gap-12 py-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-6 lg:py-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative z-10 max-w-2xl"
          >
           

            <h1 className="text-[clamp(4.5rem,10vw,9rem)] font-semibold leading-[0.8] tracking-[-0.07em] text-slate-950">
              Mero<span className="text-[#2563EB]">.</span>
            </h1>

            {/* Flip text */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.18,
              }}
              className="mt-10"
            >
              <h2 className="flex flex-wrap items-center gap-x-2 text-3xl font-medium leading-tight tracking-[-0.04em] text-slate-900 sm:text-4xl lg:text-5xl">
                Your edge.
                <FlipWords
                  words={["data.", "privacy.", "models.", "systems."]}
                  className="text-[#2563EB] dark:text-[#2563EB] px-0"
                />
              </h2>

              <p className="mt-2 text-3xl font-medium leading-tight tracking-[-0.04em] text-slate-900 sm:text-4xl lg:text-5xl">
                Built to stay close.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="mt-7 max-w-lg text-base leading-7 text-slate-500 sm:text-lg"
            >
              A dedicated edge appliance for local AI, automation, data
              processing, and connected systems.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              className="mt-9 flex flex-wrap items-center gap-5"
            >
              <button
                type="button"
                onClick={scrollToWaitlist}
                className="group inline-flex h-12 items-center gap-3 bg-[#2563EB] px-7 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#1D4ED8]"
              >
                Launching Soon
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={scrollToHardware}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
              >
                Explore the hardware ↓
              </button>
            </motion.div>

            {/* Bottom metadata */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.55,
              }}
              className="mt-14 grid max-w-lg grid-cols-3 border-t border-slate-200"
            >
              <div className="py-5 pr-4">
                <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400">
                  Compute
                </div>
                <div className="mt-2 text-sm font-medium text-slate-900">
                  Local
                </div>
              </div>

              <div className="border-l border-slate-200 px-4 py-5">
                <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400">
                  Thermal
                </div>
                <div className="mt-2 text-sm font-medium text-slate-900">
                  Active
                </div>
              </div>

              <div className="border-l border-slate-200 pl-4 py-5">
                <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400">
                  Deployment
                </div>
                <div className="mt-2 text-sm font-medium text-slate-900">
                  Self-hosted
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Product */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1.1,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative flex h-[52vh] min-h-[430px] items-center justify-center lg:h-[72vh]"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[28px]">
              <Image
                src="/mero/m1.png"
                alt="Mero edge computing appliance"
                fill
                priority
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>

            {/* Minimal corner marker */}
            <div className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-500">
                Mero / 01
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};