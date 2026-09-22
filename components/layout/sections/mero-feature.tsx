"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const MeroFeatureSection = () => {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#020408] border-t border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50">
                Products · 01
              </span>
              <span className="px-3 py-1 rounded-full border border-[#3b82f6]/30 bg-[#3b82f6]/10 text-[#3b82f6] text-xs font-medium tracking-wide">
                Launching Soon
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
              Mero
            </h2>
            
            <p className="text-xl sm:text-2xl text-gray-400 font-light leading-relaxed mb-12 max-w-xl">
              Your organization's software, <br className="hidden sm:block" />
              running on your own system.
            </p>

            <Link
              href="/mero"
              className="inline-flex items-center text-white font-medium group text-lg"
            >
              <span className="underline-smooth">Explore Mero</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Mero Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-square lg:aspect-[4/5] rounded-lg overflow-hidden border border-white/5 shadow-2xl"
          >
            <Image
              src="/mero/m4.png"
              alt="Mero Platform"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
