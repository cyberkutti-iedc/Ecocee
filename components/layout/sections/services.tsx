"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Brain,
  Code,
  Wifi,
  Zap,
  Target,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

type Service = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  features: string[];
  details: string;
  gradient: string;
};

const services: Service[] = [
  {
    icon: Cpu,
    title: "Embedded Systems",
    description:
      "Custom embedded solutions tailored to your hardware requirements.",
    features: [
      "Microcontroller Programming",
      "Real-time Systems",
      "Hardware Integration",
      "Performance Optimization",
    ],
    details:
      "We specialize in embedded systems development with experience in a wide range of microcontrollers and real-time operating systems. From concept to production, our solutions ensure your hardware runs efficiently and reliably.",
    gradient: "from-[#D247BF] to-primary",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description:
      "Intelligent automation and machine learning solutions for your business.",
    features: [
      "Machine Learning Models",
      "Computer Vision",
      "Natural Language Processing",
      "Predictive Analytics",
    ],
    details:
      "Harness the power of AI to automate complex tasks and gain insights. Our AI services cover data preparation, model building, deployment, and monitoring, tailored to your industry needs.",
    gradient: "from-green-500 to-blue-500",
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Full-stack web and mobile app development.",
    features: [
      "Web Applications",
      "Mobile Apps",
      "Desktop Software",
      "API Development",
    ],
    details:
      "We deliver scalable, performant, and secure software solutions, specializing in modern frameworks and cloud architectures to ensure seamless user experience across platforms.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Wifi,
    title: "IoT Solutions",
    description:
      "Smart device connectivity and cloud integration for IoT projects.",
    features: [
      "Device Connectivity",
      "Cloud Integration",
      "Data Analytics",
      "Remote Monitoring",
    ],
    details:
      "Our IoT services help you build interconnected devices with real-time data collection and actionable analytics, enhancing automation and operational efficiency.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Zap,
    title: "Firmware Development",
    description:
      "Secure and efficient low-level programming for embedded devices.",
    features: [
      "Bootloader Development",
      "Driver Programming",
      "RTOS Implementation",
      "Security Protocols",
    ],
    details:
      "We provide reliable firmware solutions ensuring your embedded devices function with precision, security, and optimized performance tailored to your specifications.",
    gradient: "from-yellow-400 to-yellow-600",
  },
  {
    icon: Target,
    title: "Custom Solutions",
    description:
      "Tailored technology solutions designed specifically for your business.",
    features: [
      "Requirement Analysis",
      "Prototyping",
      "MVP Development",
      "Scalable Architecture",
    ],
    details:
      "Our team collaborates closely with you to develop customized solutions that solve unique challenges and support your business growth, leveraging cutting-edge tech stacks.",
    gradient: "from-pink-500 to-red-500",
  },
];

export const ServicesSection = () => {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedServiceIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedServiceIndex(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="services" className="relative container mx-auto px-4 py-32 max-w-7xl overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-violet-400/40 via-fuchsia-300/40 to-indigo-300/40 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-300/40 via-fuchsia-300/40 to-violet-400/40 rounded-full blur-3xl -z-10" />
      <motion.div
        className="text-center mb-24"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-2xl tracking-tight">
          Our Services
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-violet-700 dark:text-violet-200 text-2xl font-medium">
          From embedded systems to AI, our solutions are crafted to spark innovation and elevate your business.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.10 } },
        }}
      >
        {services.map(({ icon: Icon, title, description, features, gradient }, i) => (
          <motion.div
            key={i}
            className={`
              group relative rounded-[2.5rem] border-0 shadow-2xl hover:shadow-[0_8px_64px_rgba(140,80,255,0.18)]
              transition-all duration-300 overflow-visible scale-100 hover:scale-105 cursor-pointer
              bg-white/95 dark:bg-slate-900/90
              flex flex-col min-h-[420px] max-h-[520px]
            `}
            variants={{
              hidden: { opacity: 0, y: 32, scale: 0.97 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
            }}
            whileHover={{ y: -12, scale: 1.07 }}
            onClick={() => openModal(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") openModal(i); }}
            aria-label={`Learn more about ${title}`}
          >
            {/* Card gradient border and floating blobs */}
            <div className={`absolute inset-0 z-0 pointer-events-none rounded-[2.5rem] border-4 border-transparent group-hover:border-violet-400 transition-all duration-300`} style={{ boxShadow: "0 0 0 4px rgba(140,80,255,0.10)" }} />
            <div className="absolute -top-10 -right-10 w-36 h-36 bg-violet-400/20 rounded-full blur-2xl z-0" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-fuchsia-400/20 rounded-full blur-2xl z-0" />
            {/* Card icon with floating effect */}
            <div className={`flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-violet-600 via-fuchsia-500 to-indigo-500 shadow-2xl mb-6 mt-10 ml-10 group-hover:-translate-y-2 transition-transform duration-300`}>
              <Icon className="text-white w-10 h-10 drop-shadow-lg" />
            </div>
            <div className="px-12 pb-12 pt-2 flex flex-col h-full z-10 relative">
              <h3 className="text-2xl font-extrabold text-violet-900 dark:text-violet-100 mb-3 drop-shadow-sm tracking-tight group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors duration-200">
                {title}
              </h3>
              <p className="text-violet-800 dark:text-violet-200 text-lg mb-6 font-medium">{description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-violet-100 via-fuchsia-100 to-indigo-100 dark:from-violet-900 dark:via-fuchsia-900 dark:to-indigo-900 text-violet-700 dark:text-violet-200 text-xs font-semibold shadow-sm"
                  >
                    <span className="inline-block w-2 h-2 rounded-full mr-2 bg-gradient-to-br from-violet-400 via-fuchsia-400 to-indigo-400" />
                    {feature}
                  </span>
                ))}
              </div>
              <Button
                className="mt-auto w-full justify-center bg-gradient-to-r from-violet-600 via-fuchsia-500 to-indigo-500 hover:from-indigo-500 hover:to-violet-600 text-white font-bold text-lg rounded-2xl shadow-xl border-2 border-violet-200 transition-all duration-200 py-3 group-hover:scale-105"
                onClick={e => { e.stopPropagation(); openModal(i); }}
                aria-label={`Learn more about ${title}`}
              >
                Learn More <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal for service details */}
      <AnimatePresence>
        {selectedServiceIndex !== null && (
          <motion.div
            key="modal"
            className="fixed inset-0 bg-black/70 backdrop-blur-[2px] flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            aria-modal="true"
            role="dialog"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <motion.div
              className="bg-gradient-to-br from-violet-50 via-fuchsia-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-[2rem] max-w-lg w-full p-12 relative shadow-2xl border-0"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center space-x-5 mb-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 via-fuchsia-500 to-indigo-500 shadow-xl">
                  {React.createElement(services[selectedServiceIndex].icon, {
                    className: "text-white w-8 h-8",
                  })}
                </div>
                <h3
                  id="modal-title"
                  className="text-3xl font-extrabold text-violet-900 dark:text-violet-100 tracking-tight"
                >
                  {services[selectedServiceIndex].title}
                </h3>
              </div>
              <p
                id="modal-description"
                className="text-violet-800 dark:text-violet-200 mb-6 text-lg"
              >
                {services[selectedServiceIndex].details}
              </p>
              <h4 className="font-semibold mb-3 text-violet-900 dark:text-violet-100 text-lg">
                Key Features:
              </h4>
              <ul className="list-disc list-inside space-y-2 text-violet-700 dark:text-violet-200 mb-8 text-base">
                {services[selectedServiceIndex].features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <Button
                className="w-full justify-center bg-gradient-to-r from-violet-600 via-fuchsia-500 to-indigo-500 hover:from-indigo-500 hover:to-violet-600 text-white font-bold text-lg rounded-2xl shadow-xl border-2 border-violet-200 transition-all duration-200 py-3"
                onClick={closeModal}
                aria-label="Close details modal"
              >
                Close
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
