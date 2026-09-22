"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const capabilities = [
  "Triggers",
  "HTTP",
  "Scraping",
  "MQTT",
  "Logic",
  "Data",
];

export const MeroFlows = () => {
  return (
    <section
      id="flows"
      className="relative w-full overflow-hidden border-b border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-[1600px] px-6 py-28 lg:px-10 lg:py-40">
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
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#2563EB]" />

              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-slate-500">
                Workflow Engine
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
              06 / FLOWS
            </div>

            <h2 className="max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-8xl">
              Define the logic.
              <br />
              <span className="text-slate-300">Let Mero execute it.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Build real workflows that connect triggers, APIs, data, logic,
              and actions — then run them directly on the Mero system.
            </p>
          </motion.div>
        </div>

        {/* Flow image */}
        <motion.div
          initial={{ opacity: 0, y: 48, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 1.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative mt-20"
        >
          <div className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-slate-50 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <Image
              src="/mero/m2.png"
              alt="Mero workflow builder"
              width={2400}
              height={1350}
              className="h-auto w-full object-cover"
              sizes="100vw"
            />
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
              Mero Flow Runtime
            </span>

            <span className="text-sm text-slate-500">
              Real inputs. Real execution. Real output.
            </span>
          </div>
        </motion.div>

        {/* Capability rail */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-16 border-y border-slate-200"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-6">
            {capabilities.map((item, index) => (
              <div
                key={item}
                className={`group flex min-h-[120px] items-end p-6 transition-colors duration-300 hover:bg-slate-50 ${
                  index !== capabilities.length - 1
                    ? "border-b border-slate-200 lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >
                <div>
                  <div className="mb-3 font-mono text-[10px] tracking-[0.18em] text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="text-lg font-medium tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-[#2563EB] sm:text-xl">
                    {item}
                  </div>

                  <div className="mt-3 h-px w-0 bg-[#2563EB] transition-all duration-500 group-hover:w-10" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.25 }}
          className="mt-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
              Built for execution
            </div>

            <div className="mt-3 text-2xl font-medium tracking-[-0.03em] text-slate-950 sm:text-3xl">
              The canvas is the interface.
              <br />
              The system does the work.
            </div>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-500 md:text-right">
            Connect systems, define logic, and let the appliance execute the
            workflow close to where the work happens.
          </p>
        </motion.div>
      </div>
    </section>
  );
};