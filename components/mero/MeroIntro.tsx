"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const MeroIntro = () => {
  return (
    <section
      id="intro"
      className="relative w-full overflow-hidden border-b border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-[1600px] px-6 py-28 lg:px-10 lg:py-40">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-16 flex items-center gap-3"
        >
          <span className="h-2 w-2 rounded-full bg-[#2563EB]" />

          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-slate-500">
            Local Compute
          </span>
        </motion.div>

        {/* Main composition */}
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          {/* Product image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, x: -24 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-50">
              <Image
                src="/mero/m1.png"
                alt="Mero edge computing appliance"
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
                Mero Edge Appliance
              </span>

              <span className="text-xs text-slate-400">
                Local compute / active cooling
              </span>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-xl lg:pb-8"
          >
            <div className="mb-6 font-mono text-sm tracking-[0.18em] text-slate-400">
              01 / THE IDEA
            </div>

            <h2 className="text-5xl font-semibold leading-[0.97] tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-7xl">
              Built to run
              <br />
              <span className="text-slate-300">
                where the work happens.
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600 sm:text-xl">
              Mero brings computing, supported AI workloads, automation, and
              connected-system processing into a dedicated local appliance.
            </p>

            <div className="mt-10 border-l border-[#2563EB] pl-6">
              <p className="text-base leading-7 text-slate-700 sm:text-lg">
                Keep processing close to your data, your devices, and the
                environment where your operations actually happen.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 border-t border-slate-200">
              <div className="border-b border-slate-200 py-5 pr-6 sm:border-b-0 sm:border-r">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
                  Deployment
                </div>
                <div className="mt-2 text-sm font-medium text-slate-900 sm:text-base">
                  Local / self-hosted
                </div>
              </div>

              <div className="border-b border-slate-200 py-5 pl-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
                  Runtime
                </div>
                <div className="mt-2 text-sm font-medium text-slate-900 sm:text-base">
                  Edge workloads
                </div>
              </div>

              <div className="py-5 pr-6 sm:border-r">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
                  Thermal
                </div>
                <div className="mt-2 text-sm font-medium text-slate-900 sm:text-base">
                  Active cooling
                </div>
              </div>

              <div className="py-5 pl-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
                  Connectivity
                </div>
                <div className="mt-2 text-sm font-medium text-slate-900 sm:text-base">
                  LAN / connected systems
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-20 border-t border-slate-200 pt-8"
        >
          <div className="grid gap-4 md:grid-cols-[0.3fr_0.7fr]">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
              The principle
            </span>

            <p className="max-w-4xl text-2xl font-medium leading-tight tracking-[-0.03em] text-slate-900 sm:text-3xl">
              When the work needs to stay close, the compute should too.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};