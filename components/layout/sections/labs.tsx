
"use client";

import { motion, useReducedMotion } from "framer-motion";

const experiments = [
  {
    number: "01",
    category: "Embedded intelligence",
    title: "Edge AI Prototyping",
    description:
      "Exploring how machine learning models can run directly on embedded hardware, enabling low-latency inference and intelligent decisions at the edge.",
    technologies: ["ESP32", "TensorFlow Lite", "Computer Vision"],
  },
  {
    number: "02",
    category: "Private AI infrastructure",
    title: "Private LLM Deployment",
    description:
      "Investigating self-hosted language models, retrieval systems and private AI infrastructure for applications that require greater control over data.",
    technologies: ["Open Models", "LLMs", "RAG"],
  },
  {
    number: "03",
    category: "Connected systems",
    title: "IoT Sensor Networks",
    description:
      "Developing low-power sensor networks and connected devices for environmental monitoring, data collection and industrial automation.",
    technologies: ["LoRaWAN", "BLE", "Edge Computing"],
  },
];

export const LabsSection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="labs"
      className="overflow-hidden bg-white py-24 text-black md:py-32 lg:py-40"
      aria-labelledby="labs-heading"
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
              Research & experimentation
            </p>

            <h2
              id="labs-heading"
              className="text-[clamp(3.2rem,8vw,7.5rem)] font-medium leading-[0.91] tracking-[-0.07em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Inside
              <br />
              <span className="text-black/30">Ecocee Labs.</span>
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
              We explore emerging technologies, test engineering approaches
              and investigate what is possible before turning promising ideas
              into practical systems.
            </p>
          </motion.div>
        </div>

        {/* Research areas */}
        <div>
          {experiments.map((experiment, index) => (
            <motion.article
              key={experiment.number}
              initial={
                prefersReducedMotion ? false : { opacity: 0, y: 18 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: prefersReducedMotion ? 0 : index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group grid grid-cols-1 gap-6 border-b border-black/15 py-9 md:grid-cols-12 md:gap-8 md:py-12"
            >
              {/* Number */}
              <div className="md:col-span-1">
                <span className="font-mono text-xs tabular-nums text-black/35">
                  {experiment.number}
                </span>
              </div>

              {/* Main content */}
              <div className="md:col-span-5">
                <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.17em] text-black/40">
                  {experiment.category}
                </p>

                <h3
                  className="text-2xl font-medium tracking-[-0.045em] transition-transform duration-300 ease-out group-hover:translate-x-1 md:text-3xl lg:text-4xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {experiment.title}
                </h3>
              </div>

              {/* Description and technologies */}
              <div className="md:col-span-5 md:col-start-8">
                <p className="max-w-lg text-sm leading-7 text-black/55 md:text-[15px] md:leading-8">
                  {experiment.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
                  {experiment.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="text-[11px] text-black/45"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-3 pt-8 md:flex-row md:items-center md:justify-between"
        >
          <p className="text-xs text-black/45">
            Curiosity drives the research. Engineering makes it useful.
          </p>

          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-black/35">
            Explore · Experiment · Engineer
          </span>
        </motion.div>
      </div>
    </section>
  );
};
