"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const MeroFeatureSection = () => {
  return (
    <section className="relative w-full overflow-hidden border-y border-white/[0.08] bg-[#020408]">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="grid min-h-[680px] items-center gap-12 py-20 lg:grid-cols-[0.82fr_1.18fr] lg:gap-8 lg:py-24">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative z-20 max-w-xl"
          >
            <div className="mb-7 flex items-center gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">
                Product · 01
              </span>

              <span className="h-px w-8 bg-white/15" />

              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#60A5FA]">
                Launching Soon
              </span>
            </div>

            <h2 className="text-6xl font-semibold tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">
              Mero<span className="text-[#60A5FA]">.</span>
            </h2>

            <p className="mt-7 max-w-lg text-2xl font-medium leading-tight tracking-[-0.03em] text-white/90 sm:text-3xl">
              Computing for the edge.
              <br />
              <span className="text-white/40">
                Built to run where the work happens.
              </span>
            </p>

            <p className="mt-7 max-w-md text-base leading-7 text-white/45 sm:text-lg">
              A dedicated edge computing appliance for local AI, automation,
              data processing, and connected systems.
            </p>

            <Link
              href="/mero"
              className="group mt-9 inline-flex items-center gap-3 text-base font-medium text-white"
            >
              <span className="relative">
                Explore Mero
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-white/30 transition-transform duration-300 group-hover:scale-x-0" />
              </span>

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>

            <div className="mt-16 grid max-w-md grid-cols-3 border-t border-white/10">
              <div className="py-5 pr-4">
                <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/30">
                  Compute
                </div>
                <div className="mt-2 text-sm font-medium text-white/75">
                  Local
                </div>
              </div>

              <div className="border-l border-white/10 px-4 py-5">
                <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/30">
                  Thermal
                </div>
                <div className="mt-2 text-sm font-medium text-white/75">
                  Active
                </div>
              </div>

              <div className="border-l border-white/10 pl-4 py-5">
                <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/30">
                  Deploy
                </div>
                <div className="mt-2 text-sm font-medium text-white/75">
                  Local
                </div>
              </div>
            </div>
          </motion.div>

          {/* Product visual */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 1.1,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative min-h-[460px] lg:min-h-[640px]"
          >
            {/* Large soft atmospheric background */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/[0.08] blur-3xl"
            />

            {/* Product */}
            <div className="absolute inset-0">
              <Image
                src="/mero/m3.png"
                alt="Mero edge computing appliance"
                fill
                priority={false}
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>

            {/* Minimal technical marker */}
            <div className="absolute bottom-4 right-0 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
              <span className="h-1.5 w-1.5 rounded-full bg-[#60A5FA]" />
              Mero · M-01
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};