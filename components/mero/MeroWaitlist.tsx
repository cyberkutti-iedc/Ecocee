"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export const MeroWaitlist = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const trimmed = email.trim();

    if (!trimmed || !trimmed.includes("@")) return;

    // Replace this with your real waitlist API when available.
    window.location.href =
      `mailto:info@ecocee.in` +
      `?subject=${encodeURIComponent("Mero Early Access")}` +
      `&body=${encodeURIComponent(
        `Hello Ecocee team,\n\nI would like to register my interest in Mero early access.\n\nEmail: ${trimmed}`
      )}`;

    setSubmitted(true);
  };

  return (
    <section
      id="waitlist"
      className="relative w-full overflow-hidden border-b border-slate-200 bg-slate-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-48">
        <div className="grid gap-16 lg:grid-cols-[0.3fr_0.7fr] lg:gap-24">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="flex items-center gap-3 pt-2">
              <span className="h-2 w-2 rounded-full bg-[#2563EB]" />

              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-slate-500">
                Launch
              </span>
            </div>
          </motion.div>

          {/* Main */}
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="mb-6 font-mono text-sm tracking-[0.18em] text-slate-400">
                10 / MERO
              </div>

              <h2 className="text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-8xl">
                Built for the edge.
                <br />
                <span className="text-slate-300">Coming soon.</span>
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                Be among the first to hear about Mero hardware availability,
                deployment details, and early access.
              </p>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-14 max-w-2xl"
            >
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <label className="sr-only" htmlFor="mero-email">
                      Email address
                    </label>

                    <input
                      id="mero-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="h-14 flex-1 border border-slate-300 bg-white px-5 text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-[#2563EB]"
                    />

                    <button
                      type="submit"
                      className="inline-flex h-14 items-center justify-center gap-3 bg-slate-950 px-7 text-sm font-medium text-white transition-colors hover:bg-[#2563EB]"
                    >
                      Get Early Access
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>

                  <p className="mt-4 text-xs text-slate-400">
                    Early access updates only. No unnecessary email.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-4 border-t border-b border-slate-200 py-6"
                >
                  <div className="flex h-9 w-9 items-center justify-center bg-[#2563EB] text-white">
                    <Check className="h-4 w-4" />
                  </div>

                  <div>
                    <div className="text-base font-medium text-slate-950">
                      Interest registered.
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                      We&apos;ll contact you when Mero becomes available.
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-16 border-t border-slate-200 pt-8"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  Custom deployments
                </span>

                <a
                  href="mailto:info@ecocee.in"
                  className="text-sm font-medium text-slate-900 transition-colors hover:text-[#2563EB]"
                >
                  info@ecocee.in →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};