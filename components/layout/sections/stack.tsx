
"use client";

import { motion, useReducedMotion } from "framer-motion";

const stacks = [
  {
    number: "01",
    category: "Frontend",
    description: "Interfaces and digital experiences",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "02",
    category: "Backend",
    description: "Application logic and data systems",
    items: ["Node.js", "Python", "FastAPI", "PostgreSQL"],
  },
  {
    number: "03",
    category: "AI & Machine Learning",
    description: "Intelligent systems and model integration",
    items: ["LLMs", "Open-source models", "RAG", "Computer vision"],
  },
  {
    number: "04",
    category: "Cloud & Infrastructure",
    description: "Deployment and scalable infrastructure",
    items: ["AWS", "Microsoft Azure", "Docker", "Kubernetes"],
  },
  {
    number: "05",
    category: "Embedded Systems",
    description: "Firmware and hardware platforms",
    items: ["ESP32", "STM32", "ARM Cortex", "FreeRTOS"],
  },
  {
    number: "06",
    category: "Connected Systems",
    description: "Communication and edge technologies",
    items: ["MQTT", "LoRaWAN", "Edge computing", "BLE"],
  },
];

export const StackSection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="technology"
      className="bg-white py-24 text-black md:py-32 lg:py-40"
      aria-labelledby="technology-heading"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 gap-10 border-b border-black/15 pb-14 md:grid-cols-12 md:pb-20">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7"
          >
            <p className="mb-7 text-[11px] font-medium uppercase tracking-[0.2em] text-black/45">
              Our technology stack
            </p>

            <h2
              id="technology-heading"
              className="text-[clamp(3.2rem,8vw,7.5rem)] font-medium leading-[0.91] tracking-[-0.07em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The tools
              <br />
              <span className="text-black/30">behind the build.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-end md:col-span-4 md:col-start-9"
          >
            <p className="max-w-md text-base leading-8 text-black/55 md:text-lg">
              We choose technologies based on the problem, not the trend.
              Our engineering toolkit spans intelligent software, cloud
              infrastructure and connected hardware.
            </p>
          </motion.div>
        </div>

        {/* Technology index */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {stacks.map((stack, index) => (
            <motion.article
              key={stack.number}
              initial={
                prefersReducedMotion ? false : { opacity: 0, y: 18 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: prefersReducedMotion ? 0 : (index % 3) * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={[
                "border-b border-black/15 py-9 md:py-11",
                index % 3 !== 0
                  ? "lg:border-l lg:border-black/15 lg:pl-9 xl:pl-12"
                  : "",
                index % 2 !== 0
                  ? "sm:border-l sm:border-black/15 sm:pl-8 lg:border-l-0"
                  : "sm:pr-8",
                "lg:pr-8",
              ].join(" ")}
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="font-mono text-xs tabular-nums text-black/35">
                  {stack.number}
                </span>

                <span className="text-[10px] uppercase tracking-[0.15em] text-black/35">
                  Engineering / {stack.number}
                </span>
              </div>

              <h3
                className="mb-2 text-2xl font-medium tracking-[-0.045em] md:text-3xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stack.category}
              </h3>

              <p className="mb-7 text-xs leading-6 text-black/45">
                {stack.description}
              </p>

              <ul className="space-y-3 border-t border-black/10 pt-5">
                {stack.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-black/65"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 shrink-0 rounded-full bg-black/35"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-8"
        >
          <p className="text-xs leading-6 text-black/40">
            Technology choices are project-specific and evolve with
            engineering requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
