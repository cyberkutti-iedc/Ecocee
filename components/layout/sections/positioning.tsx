
"use client";

import { motion, useReducedMotion } from "framer-motion";

const points = [
  {
    number: "01",
    title: "Product thinking",
    description:
      "We look beyond individual features. Every decision considers the complete product — its users, architecture, performance and future.",
  },
  {
    number: "02",
    title: "Engineering depth",
    description:
      "AI, software, embedded systems and infrastructure are connected disciplines. We bring them together to solve complex engineering problems.",
  },
  {
    number: "03",
    title: "AI by design",
    description:
      "Intelligence should be part of the architecture, not an afterthought. We integrate AI where it creates meaningful capabilities and measurable value.",
  },
  {
    number: "04",
    title: "Hardware meets software",
    description:
      "We work across physical and digital systems — connecting electronics, firmware, applications and intelligence into complete solutions.",
  },
  {
    number: "05",
    title: "Built for the real world",
    description:
      "Engineering does not end when the code works. We consider deployment, reliability, monitoring and the realities of production environments.",
  },
  {
    number: "06",
    title: "Designed to scale",
    description:
      "We build with the next stage in mind. Systems should be able to evolve in capability, capacity and complexity as requirements grow.",
  },
];

export const PositioningSection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="why-ecocee"
      className="bg-white py-24 text-black md:py-32 lg:py-40"
      aria-labelledby="positioning-heading"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Editorial heading */}
        <div className="grid grid-cols-1 gap-10 border-b border-black/15 pb-14 md:grid-cols-12 md:gap-8 md:pb-20">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-8"
          >
            <p className="mb-7 text-[11px] font-medium uppercase tracking-[0.2em] text-black/45">
              The Ecocee approach
            </p>

            <h2
              id="positioning-heading"
              className="text-[clamp(3.2rem,8vw,7.5rem)] font-medium leading-[0.91] tracking-[-0.07em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              We don't just
              <br />
              deliver software.
              <br />
              <span className="text-black/30">We engineer products.</span>
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
            className="flex items-end md:col-span-4"
          >
            <p className="max-w-sm text-base leading-8 text-black/55 md:text-lg">
              Good engineering connects the entire picture. From the first
              technical decision to the final deployment, we think in systems
              and build for what comes next.
            </p>
          </motion.div>
        </div>

        {/* Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {points.map((point, index) => (
            <motion.article
              key={point.number}
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
                "group flex min-h-[250px] flex-col border-b border-black/15 py-8 md:min-h-[290px] md:px-7 md:py-10",
                index % 3 !== 0 ? "lg:border-l lg:border-black/15" : "",
                index % 2 !== 0 ? "md:border-l md:border-black/15 lg:border-l-0" : "",
                index < 3 ? "lg:border-b" : "",
              ].join(" ")}
            >
              <div className="mb-12 flex items-center justify-between md:mb-16">
                <span className="font-mono text-xs tabular-nums text-black/35">
                  {point.number}
                </span>

                <span
                  aria-hidden="true"
                  className="h-px w-8 origin-right scale-x-50 bg-black/30 transition-transform duration-500 group-hover:scale-x-100"
                />
              </div>

              <h3
                className="mb-4 text-2xl font-medium tracking-[-0.045em] md:text-[1.75rem]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {point.title}
              </h3>

              <p className="max-w-sm text-sm leading-7 text-black/55 md:text-[15px]">
                {point.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
