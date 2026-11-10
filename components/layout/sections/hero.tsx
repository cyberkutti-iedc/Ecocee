
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GOOGLE_FORM_URL } from "@/lib/config";

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1] as const;

  const reveal = {
    initial: prefersReducedMotion
      ? false
      : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: prefersReducedMotion ? 0 : 0.8,
      ease,
    },
  };

  return (
    <section
      className="relative overflow-hidden bg-[#faf9f6] text-[#171717]"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-[1600px] px-6 pb-8 pt-32 sm:px-10 sm:pt-36 lg:px-16 lg:pt-40 xl:px-24">

        {/* Intro */}
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12 lg:gap-8">

          {/* Main headline */}
          <div className="lg:col-span-8">
            <motion.div
              {...reveal}
              className="mb-9 flex items-center gap-3"
            >
              <span className="h-px w-7 bg-black/70" />

              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-black/50">
                ECOCEE
                <span className="mx-2 text-black/20">/</span>
                Engineering & Technology
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, y: 28 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 1,
                delay: 0.08,
                ease,
              }}
              className="max-w-[1050px] text-[clamp(3.8rem,8.8vw,9.2rem)] font-medium leading-[0.91] tracking-[-0.078em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Engineering
              <br />

              <span className="text-black/35">
                the next
              </span>

              <br />

              reality.
            </motion.h1>
          </div>

          {/* Supporting content */}
          <motion.div
            initial={
              prefersReducedMotion
                ? false
                : { opacity: 0, y: 20 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.8,
              delay: 0.22,
              ease,
            }}
            className="max-w-[390px] pb-2 lg:col-span-4 lg:justify-self-end"
          >
            <p className="text-[15px] leading-[1.9] text-black/60 sm:text-base">
              We build intelligent software, connected hardware
              and engineered systems that turn ambitious ideas
              into real-world solutions.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a
                href="#work"
                className="group inline-flex items-center gap-3 border-b border-black pb-2.5 text-sm font-medium text-black transition-colors hover:border-black/40 hover:text-black/60"
              >
                Explore our work

                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-black/50 transition-colors hover:text-black"
              >
                Start a project

                <ArrowUpRight
                  aria-hidden="true"
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </motion.div>hero
        </div>

        {/* Video canvas */}
        <motion.div
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 24 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 1,
            delay: 0.32,
            ease,
          }}
          className="mt-16 sm:mt-20 lg:mt-24"
        >
          <div className="relative aspect-video w-full overflow-hidden bg-[#f1eee7]">

            {prefersReducedMotion ? (
              <Image
                src="/poster.png"
                alt="Abstract visual representing Ecocee's engineering work"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 90vw"
                className="object-cover"
              />
            ) : (
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/poster.png"
                aria-hidden="true"
                tabIndex={-1}
              >
                <source
                  src="/video.mp4"
                  type="video/mp4"
                />
              </video>
            )}
          </div>

          {/* Video caption */}
          <div className="flex flex-col justify-between gap-4 border-b border-black/15 py-5 sm:flex-row sm:items-center">
            <p className="text-xs font-medium text-black/65">
              Ideas, engineered into reality.
            </p>

            <p className="text-[10px] uppercase tracking-[0.17em] text-black/40">
              Intelligence · Software · Hardware
            </p>
          </div>
        </motion.div>

        {/* Bottom information */}
        <div className="mt-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-[10px] uppercase tracking-[0.17em] text-black/40">
            Built in Kerala. Engineering for the world.
          </p>

          <a
            href="#work"
            className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.17em] text-black/45 transition-colors hover:text-black"
          >
            Discover Ecocee

            <ArrowUpRight
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
