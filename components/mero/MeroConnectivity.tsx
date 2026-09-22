"use client";

import { motion } from "framer-motion";

const connections = [
  "HTTP",
  "APIs",
  "Webhooks",
  "MQTT",
  "LAN",
];

export const MeroConnectivity = () => {
  return (
    <section
      id="connectivity"
      className="relative w-full overflow-hidden border-b border-slate-200 bg-slate-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-[0.35fr_0.65fr] lg:gap-24">
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
                Edge Connectivity
              </span>
            </div>
          </motion.div>

          {/* Main */}
          <div>
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
                05 / CONNECTIONS
              </div>

              <h2 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-8xl">
                Everything around it
                <br />
                <span className="text-slate-300">
                  can become part of the system.
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                Mero is designed to connect with the services, devices, and
                systems already around your organization — from local networks
                to external APIs and MQTT-based infrastructure.
              </p>
            </motion.div>

            {/* Connection rail */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-20 border-y border-slate-200"
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-5">
                {connections.map((item, index) => (
                  <div
                    key={item}
                    className={`group relative flex min-h-[150px] items-end p-6 transition-colors duration-300 hover:bg-white ${
                      index !== connections.length - 1
                        ? "border-b border-slate-200 lg:border-b-0 lg:border-r"
                        : ""
                    }`}
                  >
                    <div className="absolute left-6 top-6 font-mono text-[10px] tracking-[0.18em] text-slate-400">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <div className="mb-3 h-1 w-8 bg-[#2563EB] transition-all duration-500 group-hover:w-14" />

                      <div className="text-2xl font-medium tracking-[-0.03em] text-slate-950 sm:text-3xl">
                        {item}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Bottom line */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.25 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                Connect locally or outward
              </span>

              <span className="max-w-md text-sm leading-6 text-slate-500 sm:text-right">
                Bring existing systems into a single local computing
                environment without forcing everything into one stack.
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};