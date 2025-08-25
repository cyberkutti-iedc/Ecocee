"use client";

import { useParams, useRouter } from "next/navigation";
import { softwareIdeas } from "@/data/softwareList";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function SoftwareDetails() {
  const { id } = useParams();
  const router = useRouter();

  // Find the software idea by id
  const idea = softwareIdeas.find((item) => item.id === id);

  // Redirect if the ID is invalid (client-side check for extra security)
  useEffect(() => {
    if (!idea) {
      router.replace("/ideas"); // Redirect to /ideas if ID is invalid
    }
  }, [idea, router]);

  if (!idea) {
    return null; // Prevents UI flashing before redirect
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gray-100 dark:bg-[#0a0a0a]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl w-full bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg backdrop-blur-md bg-opacity-80 dark:bg-opacity-70"
      >
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-center text-gray-900 dark:text-white"
        >
          {idea.title}
        </motion.h1>

        {/* Category Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-center"
        >
          <span className="inline-block px-4 py-1 text-sm font-semibold text-white rounded-full bg-blue-600">
            {idea.category}
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-lg text-gray-600 dark:text-gray-300 mt-6 text-center"
        >
          {idea.description}
        </motion.p>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-6 flex justify-center"
        >
          <Button
            onClick={() => router.back()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
          >
            Go Back
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
