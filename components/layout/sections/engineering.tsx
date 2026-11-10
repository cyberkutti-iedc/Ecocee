
"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";

const domains = [
  {
    id: "ai",
    number: "01",
    title: "AI & Intelligence",
    description:
      "We engineer intelligent systems that understand information, automate complex workflows and turn data into useful decisions.",
    details: [
      "Large Language Models",
      "AI Agents",
      "Retrieval-Augmented Generation",
      "Computer Vision",
      "Natural Language Processing",
      "Model Integration & Deployment",
    ],
    technologies: "Python · PyTorch · OpenAI · Gemini",
  },
  {
    id: "software",
    number: "02",
    title: "Software Engineering",
    description:
      "From digital products to complex enterprise platforms, we build reliable software designed around real operational requirements.",
    details: [
      "Web Applications",
      "Mobile Applications",
      "Backend Systems & APIs",
      "Enterprise Software",
      "Microservices Architecture",
      "Database Engineering",
    ],
    technologies: "TypeScript · React · Next.js · Node.js · Python",
  },
  {
    id: "cloud",
    number: "03",
    title: "Cloud & Infrastructure",
    description:
      "We design and operate secure infrastructure that supports demanding applications, distributed systems and growing workloads.",
    details: [
      "Cloud Architecture",
      "Containerised Applications",
      "Distributed Systems",
      "CI/CD & Automation",
      "Infrastructure Monitoring",
      "Security & Performance",
    ],
    technologies: "Azure · AWS · GCP · Docker · Kubernetes",
  },
  {
    id: "embedded",
    number: "04",
    title: "Embedded Systems",
    description:
      "We bring hardware to life through firmware, electronics engineering and low-level software built for dependable operation.",
    details: [
      "Microcontroller Programming",
      "Custom Firmware",
      "PCB Design & Prototyping",
      "Real-Time Operating Systems",
      "Hardware Integration",
      "Device-Level Optimisation",
    ],
    technologies: "C · C++ · STM32 · ESP32 · ARM",
  },
  {
    id: "iot",
    number: "05",
    title: "IoT & Connected Devices",
    description:
      "We connect physical devices, edge computing and cloud platforms to create complete connected systems.",
    details: [
      "Sensor Networks",
      "Industrial IoT",
      "Edge Computing",
      "Device Communication",
      "Remote Device Management",
      "Real-Time Monitoring",
    ],
    technologies: "MQTT · CoAP · ESP32 · Cloud Platforms",
  },
  {
    id: "design",
    number: "06",
    title: "Product Design",
    description:
      "We shape digital experiences through research-led design, clear interfaces and thoughtful interaction systems.",
    details: [
      "User Experience Research",
      "Interface Design",
      "Interaction Design",
      "Design Systems",
      "Rapid Prototyping",
      "Usability Testing",
    ],
    technologies: "Figma · Prototyping · Design Systems",
  },
];

export const EngineeringSection = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="engineering"
      aria-label="Engineering capabilities"
      className="relative overflow-hidden bg-white py-28 text-black md:py-36 lg:py-44"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-24">

        {/* Section introduction */}
        <div className="mb-20 grid gap-10 lg:mb-28 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-8 bg-black" />
              <span className="text-[10px] font-medium uppercase tracking-[.25em] text-black/45">
                What we engineer
              </span>
            </div>

            <h2 className="max-w-[850px] text-[clamp(3rem,6.5vw,6.5rem)] font-medium leading-[.94] tracking-[-.07em]">
              Deep expertise.
              <br />
              <span className="text-black/35">
                Connected thinking.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[430px] lg:justify-self-end lg:pb-2"
          >
            <p className="text-base leading-[1.9] text-black/55 md:text-lg">
              Technology rarely exists in isolation. We bring software,
              intelligence, infrastructure and hardware together to engineer
              complete solutions.
            </p>
          </motion.div>
        </div>

        {/* Capabilities list */}
        <div className="border-t border-black/20">
          {domains.map((domain, index) => {
            const isExpanded = expandedId === domain.id;

            return (
              <motion.article
                key={domain.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: prefersReducedMotion ? 0 : index * 0.045,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border-b border-black/15"
              >
                <button
                  type="button"
                  aria-expanded={isExpanded}
                  aria-controls={`engineering-panel-${domain.id}`}
                  onClick={() =>
                    setExpandedId(isExpanded ? null : domain.id)
                  }
                  className="group grid w-full grid-cols-[42px_1fr_30px] items-center gap-4 py-7 text-left sm:grid-cols-[65px_1fr_40px] sm:py-9 lg:grid-cols-[90px_1fr_50px] lg:py-10"
                >
                  <span className="self-start pt-2 text-[11px] font-medium tracking-[.12em] text-black/35">
                    {domain.number}
                  </span>

                  <span className="block">
                    <span className="block text-[clamp(1.65rem,3.5vw,3.5rem)] font-medium leading-[1.1] tracking-[-.055em] text-black transition-colors duration-300 group-hover:text-black/55">
                      {domain.title}
                    </span>

                    <span className="mt-2 block text-xs text-black/40 sm:text-sm">
                      {domain.details.length} engineering disciplines
                    </span>
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/15 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white sm:h-11 sm:w-11">
                    <motion.span
                      animate={{ rotate: isExpanded ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex items-center justify-center"
                    >
                      <Plus size={19} strokeWidth={1.4} />
                    </motion.span>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      id={`engineering-panel-${domain.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: prefersReducedMotion ? 0 : 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-8 pb-9 pl-[58px] sm:grid-cols-[1fr_1fr] sm:pb-12 sm:pl-[81px] lg:grid-cols-[1fr_1fr] lg:gap-20 lg:pb-14 lg:pl-[114px]">
                        <div>
                          <p className="max-w-[550px] text-sm leading-[1.9] text-black/60 sm:text-base">
                            {domain.description}
                          </p>

                          <p className="mt-7 text-[10px] font-medium uppercase tracking-[.18em] text-black/40">
                            Technologies & tools
                          </p>

                          <p className="mt-3 text-xs leading-7 text-black/65 sm:text-sm">
                            {domain.technologies}
                          </p>
                        </div>

                        <div>
                          <p className="mb-5 text-[10px] font-medium uppercase tracking-[.18em] text-black/40">
                            Areas of engineering
                          </p>

                          <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
                            {domain.details.map((detail, detailIndex) => (
                              <div
                                key={detail}
                                className="flex items-center gap-3 border-b border-black/[0.08] py-3"
                              >
                                <span className="text-[10px] text-black/30">
                                  {String(detailIndex + 1).padStart(2, "0")}
                                </span>

                                <span className="text-xs text-black/70 sm:text-sm">
                                  {detail}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>

        {/* Section footer */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-center"
        >
          <p className="max-w-md text-xs leading-6 text-black/45">
            Different disciplines. One engineering mindset. Built around
            the problem, not the technology trend.
          </p>

          <a
            href="/#work"
            className="group inline-flex items-center gap-3 text-xs font-medium text-black transition-colors hover:text-black/50"
          >
            Explore selected work

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
