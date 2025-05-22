"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function Register() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by ensuring theme is mounted before rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md"
      >
        {mounted && (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
      </button>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Registration Unavailable
            </h1>
            <div className="mt-4 bg-yellow-100 dark:bg-yellow-900 p-4 rounded-lg">
              <p className="text-yellow-800 dark:text-yellow-200">
                The registration function is currently not implemented. Please contact the administrator for assistance.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400">
                For registration inquiries, please contact:
              </p>
              <a
                href="mailto:admin@example.com"
                className="mt-2 inline-block text-blue-600 dark:text-blue-400 hover:underline"
              >
                ecoceeteam@gmail.com
              </a>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              onClick={() => window.history.back()}
            >
              Go Back
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
