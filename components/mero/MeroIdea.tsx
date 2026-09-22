"use client";

import { motion } from "framer-motion";

const capabilities = ["Compute", "AI", "Automation", "Connectivity"];

export const MeroIdea = () => {
  return (
    <section className="relative w-full overflow-hidden border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-40">
        <div className="grid items-end gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="mb-8 flex items-center gap-3">
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-[#2563EB]">
                The Mero Solution
              </span>

              <span className="h-px w-10 bg-[#2563EB]/30" />
            </div>

            <div className="mb-6 font-mono text-sm tracking-[0.18em] text-slate-400">
              03 / LOCAL COMPUTE
            </div>

            <h2 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-8xl">
              The compute stays
              <br />
              <span className="text-slate-300">where the work happens.</span>
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-md lg:justify-self-end"
          >
            <p className="text-lg leading-8 text-slate-600 sm:text-xl">
              Mero brings computing, AI, automation, and connectivity into one
              dedicated edge appliance — built to operate close to your
              organization, your data, and your systems.
            </p>

            <div className="mt-10 flex items-center gap-3 text-sm font-medium text-slate-900">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2563EB]/40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2563EB]" />
              </span>

              Designed for local operation
            </div>
          </motion.div>
        </div>

        {/* Capability rail */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-24 border-t border-slate-200"
        >
          <div className="flex flex-col lg:flex-row lg:items-center">
            <div className="py-6 pr-8 lg:w-[28%] lg:border-r lg:border-slate-200">
              <div className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400">
                Core Architecture
              </div>
            </div>

            <div className="grid flex-1 grid-cols-2 md:grid-cols-4">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.28 + index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`group flex items-center px-5 py-7 ${
                    index > 0 ? "border-l border-slate-200" : ""
                  }`}
                >
                  <div className="mr-4 font-mono text-[10px] text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <div className="text-lg font-medium tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-[#2563EB] sm:text-xl">
                      {capability}
                    </div>

                    <div className="mt-1 h-px w-0 bg-[#2563EB] transition-all duration-500 group-hover:w-full" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Closing hook */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.35 }}
          className="mt-16 flex items-center justify-between gap-8"
        >
          <div className="h-px flex-1 bg-slate-200" />

          <p className="max-w-sm text-center text-sm leading-6 text-slate-500">
            One appliance. One local environment. A system designed around
            where your work actually happens.
          </p>

          <div className="h-px flex-1 bg-slate-200" />
        </motion.div>
      </div>
    </section>
  );
};