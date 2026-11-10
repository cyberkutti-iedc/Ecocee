
"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GOOGLE_FORM_URL } from "@/lib/config";

export const CTASection = () => {
  const prefersReducedMotion = useReducedMotion();

  const reveal = (y: number) => ({
    initial: prefersReducedMotion ? false : { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-28 text-black md:py-40 lg:py-48"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <motion.div
            {...reveal(24)}
            className="md:col-span-9"
          >
            <p className="mb-8 text-[11px] font-medium uppercase tracking-[0.2em] text-black/45">
              Start a conversation
            </p>

            <h2
              id="contact-heading"
              className="text-[clamp(3.5rem,9vw,8.5rem)] font-medium leading-[0.88] tracking-[-0.075em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Have an idea
              <br />
              worth building?
            </h2>
          </motion.div>

          <motion.div
            {...reveal(18)}
            transition={{
              duration: 0.7,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col justify-end md:col-span-4 md:col-start-9"
          >
            <p className="max-w-sm text-base leading-8 text-black/55 md:text-lg">
              From an early concept to a complex engineering challenge,
              let's explore what we can build together.
            </p>
          </motion.div>
        </div>

        <motion.div
          {...reveal(16)}
          transition={{
            duration: 0.65,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-12 flex flex-col items-start gap-5 border-t border-black/15 pt-8 sm:flex-row sm:items-center"
        >
          <Link
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-14 items-center gap-8 bg-black px-7 text-sm font-semibold text-white transition-colors hover:bg-black/80"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

          <Link
            href="mailto:info@ecocee.in"
            className="group inline-flex h-14 items-center gap-3 border border-black/25 px-7 text-sm font-medium text-black transition-colors hover:border-black hover:bg-black/[0.03]"
          >
            Talk to Ecocee
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>

        <div className="mt-24 flex flex-col gap-3 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-black/45">
            Every meaningful product starts somewhere.
          </p>

          <p className="text-[10px] uppercase tracking-[0.18em] text-black/40">
            Let's build what comes next.
          </p>
        </div>
      </div>
    </section>
  );
};
