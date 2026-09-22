"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const MeroHardware = () => {
  return (
    <section
      id="hardware"
      className="relative w-full overflow-hidden border-b border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-[1600px] px-6 py-28 lg:px-10 lg:py-40">
        {/* Intro */}
        <div className="grid items-end gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#2563EB]" />

              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-slate-500">
                The Hardware
              </span>
            </div>

            <div className="font-mono text-sm tracking-[0.18em] text-slate-400">
              04 / THE APPLIANCE
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.9,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <h2 className="max-w-6xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-8xl">
              Built for the work
              <br />
              <span className="text-slate-300">that stays local.</span>
            </h2>
          </motion.div>
        </div>

        {/* Product image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative mt-20 overflow-hidden"
        >
          <div className="relative aspect-[16/8.5] w-full">
            <Image
              src="/mero/m4.png"
              alt="Mero edge computing appliance"
              fill
              priority={false}
              className="object-contain object-center"
              sizes="100vw"
            />
          </div>
        </motion.div>

        {/* Description + specs */}
        <div className="mt-16 grid gap-12 border-t border-slate-200 pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="max-w-xl text-xl leading-8 tracking-[-0.02em] text-slate-700 sm:text-2xl">
              Mero is a dedicated edge appliance designed to bring compute,
              local AI, automation, and connected-system processing closer to
              where your data and operations actually happen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="grid border-t border-slate-200 sm:grid-cols-2 lg:border-t-0"
          >
            <div className="border-b border-slate-200 py-5 sm:border-r sm:pr-8 sm:border-b-0">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                Compute
              </div>
              <div className="mt-2 text-base font-medium text-slate-900">
                Local processing
              </div>
            </div>

            <div className="border-b border-slate-200 py-5 sm:pl-8 sm:border-b-0">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                Thermal
              </div>
              <div className="mt-2 text-base font-medium text-slate-900">
                Active cooling
              </div>
            </div>

            <div className="py-5 sm:border-r sm:pr-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                Network
              </div>
              <div className="mt-2 text-base font-medium text-slate-900">
                LAN connectivity
              </div>
            </div>

            <div className="py-5 sm:pl-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                Runtime
              </div>
              <div className="mt-2 text-base font-medium text-slate-900">
                Edge workloads
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};