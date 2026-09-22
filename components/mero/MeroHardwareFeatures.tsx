"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    num: "01",
    title: "Local AI",
    description: "Run supported AI workloads close to your data.",
  },
  {
    num: "02",
    title: "Compute",
    description: "A dedicated runtime for continuous edge workloads.",
  },
  {
    num: "03",
    title: "Active Cooling",
    description: "Engineered for sustained operation under load.",
  },
  {
    num: "04",
    title: "Connectivity",
    description: "Connect through LAN, HTTP, MQTT, and internal services.",
  },
  {
    num: "05",
    title: "Data",
    description: "Process information close to where it is generated.",
  },
  {
    num: "06",
    title: "Automation",
    description: "Execute real workflows directly on the appliance.",
  },
];

export const MeroHardwareFeatures = () => {
  return (
    <section
      id="capabilities"
      className="relative w-full overflow-hidden border-b border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-40">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.35fr_0.65fr] lg:gap-24">
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
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#2563EB]" />

              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-slate-500">
                Capabilities
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="mb-6 font-mono text-sm tracking-[0.18em] text-slate-400">
              04 / WHAT&apos;S INSIDE
            </div>

            <h2 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-8xl">
              One appliance.
              <br />
              <span className="text-slate-300">
                Many things happen here.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Mero brings the core building blocks of local computing into a
              single system built for real-world workloads.
            </p>
          </motion.div>
        </div>

        {/* Capability list */}
        <div className="mt-24 border-t border-slate-200">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative border-b border-slate-200"
            >
              <div className="grid items-center gap-6 py-8 md:grid-cols-[72px_0.9fr_1.1fr] md:gap-10 md:py-10">
                {/* Number */}
                <div className="font-mono text-xs tracking-[0.18em] text-slate-400">
                  {item.num}
                </div>

                {/* Title */}
                <div className="relative overflow-hidden">
                  <motion.div
                    className="text-3xl font-medium tracking-[-0.03em] text-slate-950 transition-colors duration-300 group-hover:text-[#2563EB] sm:text-4xl lg:text-5xl"
                  >
                    {item.title}
                  </motion.div>

                  <div className="mt-3 h-px w-0 bg-[#2563EB] transition-all duration-500 ease-out group-hover:w-16" />
                </div>

                {/* Description */}
                <div className="max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
                  {item.description}
                </div>
              </div>

              {/* Subtle hover indicator */}
              <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 items-center gap-3 opacity-0 transition-all duration-500 group-hover:flex group-hover:opacity-100">
                <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-slate-400">
                  Mero
                </span>
                <span className="h-px w-8 bg-[#2563EB]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-14 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
            Designed as one system
          </span>

          <span className="max-w-md text-sm leading-6 text-slate-500 sm:text-right">
            Compute, connectivity, data, AI, and automation working together
            at the edge.
          </span>
        </motion.div>
      </div>
    </section>
  );
};