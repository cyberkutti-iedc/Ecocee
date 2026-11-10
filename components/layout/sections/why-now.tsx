
"use client";

import { motion, useReducedMotion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "AI is moving into production",
    description:
      "Models, inference infrastructure and deployment tools have matured. Businesses can now build practical AI systems for real workflows, including private and domain-specific applications.",
  },
  {
    number: "02",
    title: "Hardware is more accessible",
    description:
      "Affordable microcontrollers, sensors and edge computing platforms make connected products and intelligent devices increasingly practical to develop and deploy.",
  },
  {
    number: "03",
    title: "Automation is changing operations",
    description:
      "AI-assisted workflows and connected systems are changing how businesses operate. Organisations that identify the right opportunities can improve efficiency and responsiveness.",
  },
  {
    number: "04",
    title: "Data creates new possibilities",
    description:
      "Businesses generate valuable data across their operations. The ability to organise, interpret and act on that information is becoming an important engineering advantage.",
  },
];

export const WhyNowSection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="why-now"
      className="bg-white py-24 text-black md:py-32 lg:py-40"
      aria-labelledby="why-now-heading"
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
              The technology landscape
            </p>

            <h2
              id="why-now-heading"
              className="text-[clamp(3.5rem,9vw,8rem)] font-medium leading-[0.9] tracking-[-0.075em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Why
              <br />
              <span className="text-black/30">now?</span>
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
              Technology is reaching a point where intelligent software,
              connected hardware and scalable infrastructure can work
              together in practical, meaningful ways.
            </p>
          </motion.div>
        </div>

        {/* Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <motion.article
              key={reason.number}
              initial={
                prefersReducedMotion ? false : { opacity: 0, y: 18 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: prefersReducedMotion ? 0 : (index % 2) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={[
                "group flex min-h-[270px] flex-col border-b border-black/15 py-9 md:min-h-[310px] md:py-12",
                index % 2 === 1 ? "md:border-l md:border-black/15 md:pl-10 lg:pl-16" : "md:pr-10 lg:pr-16",
              ].join(" ")}
            >
              <div className="mb-12 flex items-center justify-between md:mb-16">
                <span className="font-mono text-xs tabular-nums text-black/35">
                  {reason.number}
                </span>

                <span
                  aria-hidden="true"
                  className="h-px w-8 origin-right scale-x-50 bg-black/30 transition-transform duration-500 group-hover:scale-x-100"
                />
              </div>

              <h3
                className="mb-4 max-w-lg text-2xl font-medium leading-tight tracking-[-0.045em] md:text-3xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {reason.title}
              </h3>

              <p className="max-w-lg text-sm leading-7 text-black/55 md:text-[15px] md:leading-8">
                {reason.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Closing line */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-black/15 pt-7"
        >
          <p className="text-xs uppercase tracking-[0.16em] text-black/40">
            The opportunity is in what we build with it.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
