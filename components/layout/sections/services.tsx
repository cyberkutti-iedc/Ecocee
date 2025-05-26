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
  ArrowRight,
  X,
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
  const [selectedServiceIndex, setSelectedServiceIndex] = useState<number | null>(
    null
  );

  const openModal = (index: number) => {
    setSelectedServiceIndex(index);
    document.body.style.overflow = "hidden"; // prevent scroll when modal open
  };

  const closeModal = () => {
    setSelectedServiceIndex(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="container mx-auto px-6 py-20 max-w-7xl">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text text-transparent dark:from-pink-400 dark:to-purple-600">
          Our Services
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-muted-foreground dark:text-gray-300 text-lg">
          Comprehensive technology solutions from embedded systems to AI, designed to drive innovation and transform your ideas into reality.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        {services.map(({ icon: Icon, title, description, features, gradient }, i) => (
          <motion.div
            key={i}
            className="relative bg-background dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-8 cursor-pointer hover:shadow-lg transition-shadow flex flex-col"
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
            }}
            whileHover={{ scale: 1.03, y: -5 }}
            onClick={() => openModal(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") openModal(i); }}
            aria-label={`Learn more about ${title}`}
          >
            <div
              className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${gradient} mb-6 shadow-lg flex-shrink-0`}
            >
              <Icon className="text-white w-7 h-7" />
            </div>

            <h3 className="text-2xl font-semibold text-foreground dark:text-white mb-3">{title}</h3>
            <p className="text-muted-foreground dark:text-gray-300 flex-grow">{description}</p>

            <ul className="mt-6 space-y-2 text-sm text-muted-foreground dark:text-gray-400">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <span className={`inline-block w-2 h-2 rounded-full mr-3 bg-gradient-to-r ${gradient}`} />
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              variant="gradient"
              className="mt-8 w-full justify-center bg-gradient-to-r from-[#D247BF] to-primary hover:from-primary hover:to-[#D247BF]"
              onClick={(e) => {
                e.stopPropagation();
                openModal(i);
              }}
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
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
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
              className="bg-background dark:bg-gray-900 rounded-lg max-w-3xl w-full p-8 relative shadow-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-muted-foreground dark:text-gray-400 hover:text-foreground dark:hover:text-white"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center space-x-4 mb-6">
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${services[selectedServiceIndex].gradient} shadow-lg flex-shrink-0`}
                >
                  {React.createElement(services[selectedServiceIndex].icon, {
                    className: "text-white w-7 h-7",
                  })}
                </div>
                <h3
                  id="modal-title"
                  className="text-3xl font-bold text-foreground dark:text-white"
                >
                  {services[selectedServiceIndex].title}
                </h3>
              </div>

              <p
                id="modal-description"
                className="text-muted-foreground dark:text-gray-300 mb-6"
              >
                {services[selectedServiceIndex].details}
              </p>

              <h4 className="font-semibold mb-3 text-foreground dark:text-white">
                Key Features:
              </h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground dark:text-gray-400 mb-8">
                {services[selectedServiceIndex].features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <Button
                variant="gradient"
                className="w-full justify-center bg-gradient-to-r from-[#D247BF] to-primary hover:from-primary hover:to-[#D247BF]"
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
