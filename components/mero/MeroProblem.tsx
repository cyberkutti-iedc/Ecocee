"use client";

import { motion } from "framer-motion";

export const MeroProblem = () => {
  return (
    <section
      id="problem"
      className="relative w-full overflow-hidden border-b border-slate-200 bg-slate-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-[0.3fr_0.7fr] lg:gap-24">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex items-start"
          >
            <div className="flex items-center gap-3 pt-2">
              <span className="h-2 w-2 rounded-full bg-[#2563EB]" />

              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-slate-500">
                The Challenge
              </span>
            </div>
          </motion.div>

          {/* Content */}
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="mb-6 font-mono text-sm tracking-[0.18em] text-slate-400">
                02 / WHY LOCAL
              </div>

              <h2 className="text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-8xl">
                Not every decision
                <br />
                belongs in the cloud.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-12 max-w-2xl"
            >
              <p className="text-lg leading-8 text-slate-600 sm:text-xl">
                When every signal, document, request, and AI task has to travel
                to a remote service, the system becomes dependent on distance,
                connectivity, and external infrastructure.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
                For workloads that need to stay close to the source, local
                compute can mean simpler operations, faster response, and more
                control over where processing happens.
              </p>
            </motion.div>

            {/* Bottom visual statement */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.25 }}
              className="mt-20 border-t border-slate-200"
            >
              <div className="grid md:grid-cols-3">
                <div className="border-b border-slate-200 py-6 md:border-b-0 md:border-r md:pr-8">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    Distance
                  </div>
                  <div className="mt-2 text-lg font-medium tracking-tight text-slate-900">
                    Compute closer to the source.
                  </div>
                </div>

                <div className="border-b border-slate-200 py-6 md:border-b-0 md:border-r md:px-8">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    Dependency
                  </div>
                  <div className="mt-2 text-lg font-medium tracking-tight text-slate-900">
                    Reduce reliance on remote services.
                  </div>
                </div>

                <div className="py-6 md:pl-8">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    Control
                  </div>
                  <div className="mt-2 text-lg font-medium tracking-tight text-slate-900">
                    Keep processing closer to your environment.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};