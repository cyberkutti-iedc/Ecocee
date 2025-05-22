"use client";

import { motion } from "framer-motion";

const Careers = () => {
  const theme = {
    primaryButton: "bg-emerald-600 hover:bg-emerald-700",
    lightBg: "bg-emerald-50",
    textAccent: "text-emerald-600",
  };

  return (
    <section className={`min-h-screen flex flex-col items-center justify-center ${theme.lightBg} px-6`}>
      <motion.div
        className="max-w-2xl bg-white p-8 rounded-lg shadow-lg text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-semibold mb-4">🚀 Careers at Ecocee</h1>
        <p className="text-gray-600 mb-6">
          We’re excited to grow our team! Amazing career opportunities are coming soon.
          Stay tuned and check back later.  
        </p>

        <motion.div 
          className="mt-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <span className={`text-lg font-medium ${theme.textAccent}`}>Thank you for your interest! 😊</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Careers;
