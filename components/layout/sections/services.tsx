"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Brain,
  Code,
  Wifi,
  Zap,
  Target,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Cpu,
      title: "Embedded Systems",
      description:
        "Custom embedded solutions tailored to your hardware requirements with optimized performance and reliability.",
      features: [
        "Microcontroller Programming",
        "Real-time Systems",
        "Hardware Integration",
        "Performance Optimization",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Brain,
      title: "AI Solutions",
      description:
        "Intelligent automation and machine learning solutions to transform your business operations.",
      features: [
        "Machine Learning Models",
        "Computer Vision",
        "Natural Language Processing",
        "Predictive Analytics",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Code,
      title: "Software Development",
      description:
        "Full-stack software solutions from web applications to enterprise systems.",
      features: [
        "Web Applications",
        "Mobile Apps",
        "Desktop Software",
        "API Development",
      ],
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Wifi,
      title: "IoT Solutions",
      description:
        "Connected device ecosystems that enable smart monitoring and control systems.",
      features: [
        "Device Connectivity",
        "Cloud Integration",
        "Data Analytics",
        "Remote Monitoring",
      ],
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Zap,
      title: "Firmware Development",
      description:
        "Low-level programming for embedded devices with efficient and secure code.",
      features: [
        "Bootloader Development",
        "Driver Programming",
        "RTOS Implementation",
        "Security Protocols",
      ],
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: Target,
      title: "Custom Solutions",
      description:
        "Bespoke technology solutions designed specifically for your unique business needs.",
      features: [
        "Requirement Analysis",
        "Prototyping",
        "MVP Development",
        "Scalable Architecture",
      ],
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-4"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <Sparkles className="w-6 h-6 text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {"Comprehensive technology solutions from embedded systems to AI, delivering innovation that transforms your ideas into reality."}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 overflow-hidden cursor-pointer"
              >
                {/* Background Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Icon */}
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl mb-6 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-orange-500 group-hover:to-red-500 transition-all duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-500 dark:text-gray-400"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                    >
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 flex-shrink-0`}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  className={`w-full py-3 px-6 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-lg hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-500/30 flex items-center justify-center gap-2 group`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Ready to Transform Your Ideas?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
              {"Let's discuss your project requirements and create innovative solutions together."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="py-4 px-8 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-500/30 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="py-4 px-8 border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
