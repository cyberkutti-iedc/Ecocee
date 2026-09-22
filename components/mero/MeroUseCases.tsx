"use client";

import { motion } from "framer-motion";

const environments = [
  {
    num: "01",
    title: "Business",
    description: "Run internal workflows, AI tasks, and data processing close to your operations.",
  },
  {
    num: "02",
    title: "Industry",
    description: "Process machine, sensor, and operational data at the edge.",
  },
  {
    num: "03",
    title: "Retail",
    description: "Bring local automation and processing into stores and distributed locations.",
  },
  {
    num: "04",
    title: "Institutions",
    description: "Operate local software and data workflows within controlled environments.",
  },
  {
    num: "05",
    title: "Remote Sites",
    description: "Keep essential processing local where connectivity may be limited.",
  },
  {
    num: "06",
    title: "Connected Systems",
    description: "Connect APIs, networks, MQTT devices, and local infrastructure.",
  },
];

export const MeroUseCases = () => {
  return (
    <section
      id="use-cases"
      className="relative w-full overflow-hidden border-b border-slate-200 bg-slate-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-40">
        {/* Header */}
        <div className="grid gap-14 lg:grid-cols-[0.35fr_0.65fr] lg:gap-24">
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
                Deployment
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
              07 / WHERE IT FITS
            </div>

            <h2 className="max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-8xl">
              Wherever compute
              <br />
              <span className="text-slate-300">
                needs to stay close.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Mero is designed for environments where local processing,
              controlled infrastructure, or dependable connectivity matter.
            </p>
          </motion.div>
        </div>

        {/* Environments */}
        <div className="mt-24 border-t border-slate-200">
          {environments.map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group border-b border-slate-200"
            >
              <div className="grid gap-6 py-9 md:grid-cols-[72px_0.8fr_1.2fr] md:items-center md:gap-10 md:py-10">
                <span className="font-mono text-xs tracking-[0.18em] text-slate-400">
                  {item.num}
                </span>

                <div>
                  <h3 className="text-3xl font-medium tracking-[-0.03em] text-slate-950 transition-colors duration-300 group-hover:text-[#2563EB] sm:text-4xl lg:text-5xl">
                    {item.title}
                  </h3>

                  <div className="mt-3 h-px w-0 bg-[#2563EB] transition-all duration-500 group-hover:w-14" />
                </div>

                <p className="max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing hook */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-16 grid gap-6 border-t border-slate-200 pt-10 md:grid-cols-[0.7fr_1.3fr] md:items-end"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
            One appliance
          </div>

          <p className="max-w-3xl text-2xl font-medium leading-tight tracking-[-0.03em] text-slate-900 sm:text-3xl lg:text-4xl">
            From a single office to a distributed edge environment, Mero is
            built to run where your operations happen.
          </p>
        </motion.div>
      </div>
    </section>
  );
};