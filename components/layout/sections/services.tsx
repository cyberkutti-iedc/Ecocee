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
    <section className="container mx-auto px-4 py-20 max-w-6xl">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-violet-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-lg">
          Our Services
        </h2>
        <p className="mt-2 max-w-xl mx-auto text-blue-700 dark:text-blue-200 text-base">
          Comprehensive technology solutions from embedded systems to AI, designed to drive innovation and transform your ideas into reality.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.10 } },
        }}
      >
        {services.map(({ icon: Icon, title, description, features }, i) => (
          <motion.div
            key={i}
            className="relative bg-gradient-to-br from-violet-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-xl border border-blue-100 dark:border-violet-900 p-6 flex flex-col group hover:shadow-xl transition-all duration-200 cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 16, scale: 0.98 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
            }}
            whileHover={{ y: -2, scale: 1.03 }}
            onClick={() => openModal(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") openModal(i); }}
            aria-label={`Learn more about ${title}`}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-violet-600 via-blue-600 to-indigo-600 mb-4 shadow-lg">
              <Icon className="text-white w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-2">{title}</h3>
            <p className="text-blue-700 dark:text-blue-300 text-sm mb-4">{description}</p>
            <ul className="mt-auto space-y-1 text-xs text-blue-500 dark:text-blue-300">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="inline-block w-1.5 h-1.5 rounded-full mr-2 bg-gradient-to-br from-violet-400 via-blue-400 to-indigo-400" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              className="mt-6 w-full justify-center bg-gradient-to-r from-violet-600 via-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-violet-600 text-white font-semibold text-sm rounded-lg"
              onClick={e => { e.stopPropagation(); openModal(i); }}
              aria-label={`Learn more about ${title}`}
            >
              Learn More <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal for service details */}
      <AnimatePresence>
        {selectedServiceIndex !== null && (
          <motion.div
            key="modal"
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
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
              className="bg-gradient-to-br from-violet-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-xl max-w-lg w-full p-8 relative shadow-2xl border border-blue-100 dark:border-violet-900"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-violet-600 via-blue-600 to-indigo-600 shadow-lg">
                  {React.createElement(services[selectedServiceIndex].icon, {
                    className: "text-white w-6 h-6",
                  })}
                </div>
                <h3
                  id="modal-title"
                  className="text-xl font-bold text-blue-900 dark:text-blue-200"
                >
                  {services[selectedServiceIndex].title}
                </h3>
              </div>
              <p
                id="modal-description"
                className="text-blue-700 dark:text-blue-300 mb-5 text-sm"
              >
                {services[selectedServiceIndex].details}
              </p>
              <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-200 text-base">
                Key Features:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-blue-500 dark:text-blue-300 mb-6 text-xs">
                {services[selectedServiceIndex].features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <Button
                className="w-full justify-center bg-gradient-to-r from-violet-600 via-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-violet-600 text-white font-semibold text-sm rounded-lg"
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
