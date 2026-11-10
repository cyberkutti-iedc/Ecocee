
"use client";

import { motion, useReducedMotion } from "framer-motion";

const stages = [
  {
    number: "01",
    name: "Idea",
    description: "Understand the problem, define the opportunity and establish a clear direction.",
  },
  {
    number: "02",
    name: "Research",
    description: "Explore technical possibilities, validate assumptions and assess constraints.",
  },
  {
    number: "03",
    name: "Design",
    description: "Shape the product architecture, system behaviour and engineering approach.",
  },
  {
    number: "04",
    name: "Engineering",
    description: "Develop the core technology, infrastructure and essential components.",
  },
  {
    number: "05",
    name: "Build",
    description: "Integrate components, test real-world scenarios and refine the product.",
  },
  {
    number: "06",
    name: "Deploy",
    description: "Prepare production environments, release the system and validate its operation.",
  },
  {
    number: "07",
    name: "Scale",
    description: "Improve performance, expand capabilities and evolve with changing needs.",
  },
];

export const ProcessSection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="process"
      className="bg-white py-24 text-black md:py-32 lg:py-40"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 gap-8 border-b border-black/15 pb-12 md:grid-cols-12 md:pb-16"
        >
          <div className="md:col-span-7">
            <p className="mb-7 text-[11px] font-medium uppercase tracking-[0.2em] text-black/45">
              How we work
            </p>

            <h2
              id="process-heading"
              className="max-w-3xl text-[clamp(3rem,7vw,6.5rem)] font-medium leading-[0.94] tracking-[-0.065em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              From first thought
              <br />
              to <span className="text-black/30">what's next.</span>
            </h2>
          </div>

          <div className="flex items-end md:col-span-4 md:col-start-9">
            <p className="max-w-md text-base leading-7 text-black/55 md:text-lg md:leading-8">
              Every product begins with a question. We bring research,
              engineering and execution together to turn that question into
              something real.
            </p>
          </div>
        </motion.div>

        {/* Process sequence */}
        <div className="pt-8 md:pt-12">
          {stages.map((stage, index) => (
            <motion.article
              key={stage.number}
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, y: 16 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: prefersReducedMotion ? 0 : (index % 3) * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group grid grid-cols-1 gap-4 border-b border-black/15 py-7 md:grid-cols-12 md:items-start md:gap-6 md:py-9"
            >
              {/* Number */}
              <div className="md:col-span-1">
                <span className="font-mono text-xs tabular-nums text-black/35">
                  {stage.number}
                </span>
              </div>

              {/* Stage */}
              <div className="md:col-span-5">
                <h3
                  className="text-3xl font-medium tracking-[-0.045em] text-black transition-transform duration-300 ease-out group-hover:translate-x-1 md:text-4xl lg:text-5xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stage.name}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-5 md:col-start-8">
                <p className="max-w-lg text-sm leading-7 text-black/55 md:text-base md:leading-8">
                  {stage.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-3 pt-10 md:flex-row md:items-center md:justify-between md:pt-14"
        >
          <p className="text-sm text-black/45">
            A continuous cycle of learning, building and improving.
          </p>

          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-black/35">
            Think · Engineer · Evolve
          </span>
        </motion.div>
      </div>
    </section>
  );
};
