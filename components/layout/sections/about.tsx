
"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const facts = [
  { label: "Founded", value: "2023" },
  { label: "Based in", value: "Kerala, India" },
  { label: "Focus", value: "AI, Software & Hardware" },
  { label: "Approach", value: "Research to production" },
];

export const AboutSection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about-ecocee"
      className="bg-white py-24 text-black md:py-32 lg:py-40"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Main introduction */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <p className="mb-8 text-[11px] font-medium uppercase tracking-[0.2em] text-black/45">
              About Ecocee
            </p>

            <h2
              id="about-heading"
              className="mb-9 text-[clamp(3.2rem,7vw,6.8rem)] font-medium leading-[0.93] tracking-[-0.07em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Built in Kerala.
              <br />
              <span className="text-black/30">
                Engineering for the world.
              </span>
            </h2>

            <p className="mb-9 max-w-xl text-base leading-8 text-black/55 md:text-lg">
              Ecocee is an engineering and technology company building
              intelligent products across AI, software and connected systems.
              We bring ideas from concept to production through research,
              design and engineering.
            </p>

            <Link
              href="/about"
              className="group inline-flex items-center gap-3 border-b border-black/25 pb-2 text-sm font-medium text-black transition-colors hover:border-black"
            >
              Discover Ecocee
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>

          {/* Company information */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col justify-end lg:col-span-4 lg:col-start-9"
          >
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.18em] text-black/40">
              Company profile
            </p>

            <dl>
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid grid-cols-2 gap-4 border-t border-black/15 py-5"
                >
                  <dt className="text-sm text-black/45">
                    {fact.label}
                  </dt>

                  <dd className="text-right text-sm font-medium text-black">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
