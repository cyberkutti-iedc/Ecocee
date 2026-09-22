"use client";

import { motion } from "framer-motion";

const specs = [
  { key: "Form Factor", value: "Edge computing appliance" },
  { key: "Compute Architecture", value: "ARM-based architecture" },
  { key: "Thermal Management", value: "Active cooling" },
  { key: "Network", value: "Ethernet / LAN" },
  { key: "Connectivity", value: "USB / supported interfaces" },
  { key: "Software", value: "Mero platform" },
  { key: "Deployment", value: "Local / self-hosted" },
];

export const MeroSpecs = () => {
  return (
    <section
      id="specs"
      className="relative w-full overflow-hidden border-b border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-40">
        {/* Header */}
        <div className="grid gap-12 lg:grid-cols-[0.35fr_0.65fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#2563EB]" />
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-slate-500">
                Specifications
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
              09 / THE DETAILS
            </div>

            <h2 className="max-w-5xl text-5xl font-semibold leading-[0.97] tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-8xl">
              Designed as one
              <br />
              <span className="text-slate-300">complete system.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              The essential hardware and deployment characteristics of the
              Mero edge appliance.
            </p>
          </motion.div>
        </div>

        {/* Specs */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-20"
        >
          <div className="border-t border-slate-300">
            {/* Table header */}
            <div className="grid grid-cols-[0.8fr_1.2fr] border-b border-slate-200 py-4 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 sm:grid-cols-[0.9fr_1.1fr]">
              <span>Specification</span>
              <span>Details</span>
            </div>

            {specs.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.12 + index * 0.04,
                }}
                className="group grid grid-cols-[0.8fr_1.2fr] border-b border-slate-200 py-6 transition-colors duration-300 hover:bg-slate-50 sm:grid-cols-[0.9fr_1.1fr] sm:py-7"
              >
                <span className="text-sm text-slate-500 sm:text-base">
                  {item.key}
                </span>

                <span className="text-sm font-medium tracking-tight text-slate-950 sm:text-base">
                  {item.value}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
            Mero hardware
          </span>

          <span className="text-xs text-slate-400">
            Specifications may change before launch.
          </span>
        </motion.div>
      </div>
    </section>
  );
};