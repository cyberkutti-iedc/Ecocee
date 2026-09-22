"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const MeroClosing = () => {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="closing"
      className="relative w-full overflow-hidden border-t border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-[1600px] px-6 py-32 lg:px-10 lg:py-48">
        {/* Final statement */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mx-auto max-w-6xl text-center"
        >
          <div className="mb-8 font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-slate-400">
            Mero
          </div>

          <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-8xl">
            Computing,
            <br />
            <span className="text-slate-300">where it matters.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            A dedicated edge computing appliance for organizations that want
            more control over where their software and data run.
          </p>

          <div className="mt-10">
            <button
              type="button"
              onClick={scrollToWaitlist}
              className="inline-flex h-12 items-center justify-center bg-slate-950 px-7 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#2563EB]"
            >
              Launching Soon
              <span className="ml-3 text-slate-400">→</span>
            </button>
          </div>
        </motion.div>

        {/* Final product image */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 1.2,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative mt-24 lg:mt-32"
        >
          <div className="relative mx-auto aspect-[16/8] w-full max-w-[1400px]">
            <Image
              src="/mero/m1.png"
              alt="Mero edge computing appliance"
              fill
              className="object-contain object-center"
              sizes="(max-width: 768px) 100vw, 1400px"
            />
          </div>
        </motion.div>

        {/* Bottom brand line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.35,
          }}
          className="mt-20 border-t border-slate-200 pt-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
              Edge Computing Appliance
            </span>

            <span className="text-sm text-slate-500">
              Built by Ecocee · Mero
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};