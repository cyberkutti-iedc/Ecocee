/* eslint-disable react/no-unescaped-entities */
"use client";

import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { MotionDiv } from "@/components/ui/motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Code, XCircle, CheckCircle } from "lucide-react";
import Cookies from "js-cookie"; // ✅ Import js-cookie

export default function Ideas() {
  const router = useRouter();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<"hardware" | "software" | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOpenModal = (category: "hardware" | "software") => {
    setSelectedCategory(category);
    setShowModal(true);
  };

  const handleConfirmYes = () => {
    if (selectedCategory) {
      Cookies.set("userConfirmed", "true", { expires: 1 }); // ✅ Set cookie to remember confirmation
      router.push(`/ideas/${selectedCategory}`); // ✅ Redirect to chosen category
    }
    setShowModal(false);
  };

  // 🚨 Fix: Prevent rendering styles based on `theme` before mounting
  if (!mounted) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <section
      className={`container mx-auto min-h-screen flex flex-col items-center justify-center px-6 py-20 transition-colors ${
        theme === "dark" ? "bg-black text-white" : "bg-[#F9F9F9] text-black"
      }`}
    >
      {/* Header Section */}
      <div className="text-center space-y-6">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide">
          Welcome to  
          <span className="text-transparent px-2 bg-gradient-to-r from-[#FFD700] to-[#D247BF] bg-clip-text">
            Ecocee Idea Box
          </span>
        </h1>
        <p className="text-lg max-w-xl mx-auto text-gray-600 dark:text-gray-300">
          A creative hub for students to explore, innovate, and bring their ideas to life.  
          Whether you&apos;re into <strong className="text-black dark:text-white">electronics</strong> or  
          <strong className="text-black dark:text-white"> software</strong>, we&apos;ve got you covered!
        </p>
      </div>

      {/* Idea Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mt-10">
        <MotionDiv
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer"
          onClick={() => handleOpenModal("hardware")}
        >
          <Card
            className={`p-6 text-center border rounded-xl shadow-xl transition ${
              theme === "dark"
                ? "bg-gradient-to-b from-gray-900 to-black hover:bg-gray-800"
                : "bg-white border-gray-200 hover:bg-gray-100"
            }`}
          >
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center justify-center gap-2">
                <Cpu className={theme === "dark" ? "text-[#FFD700]" : "text-yellow-600"} />
                <span className={theme === "dark" ? "text-[#FFD700]" : "text-yellow-600"}>
                  Hardware Electronics Ideas
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">Build IoT, robotics, and embedded systems.</p>
            </CardContent>
          </Card>
        </MotionDiv>

        <MotionDiv
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer"
          onClick={() => handleOpenModal("software")}
        >
          <Card
            className={`p-6 text-center border rounded-xl shadow-xl transition ${
              theme === "dark"
                ? "bg-gradient-to-b from-gray-900 to-black hover:bg-gray-800"
                : "bg-white border-gray-200 hover:bg-gray-100"
            }`}
          >
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center justify-center gap-2">
                <Code className={theme === "dark" ? "text-[#00FFFF]" : "text-blue-600"} />
                <span className={theme === "dark" ? "text-[#00FFFF]" : "text-blue-600"}>
                  Software-Based Ideas
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">Work on web apps, AI, mobile apps, and automation.</p>
            </CardContent>
          </Card>
        </MotionDiv>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            className={`p-6 rounded-xl shadow-2xl border w-96 transition ${
              theme === "dark"
                ? "bg-black bg-opacity-80 backdrop-blur-lg border-gray-700"
                : "bg-white bg-opacity-80 backdrop-blur-lg border-gray-200"
            }`}
          >
            <h2 className="text-xl font-bold text-black dark:text-white">
              Do you want to explore {selectedCategory === "hardware" ? "Hardware Electronics" : "Software"} ideas?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Click "Yes" to continue or "No" to stay on this page.
            </p>
            <div className="flex justify-between mt-4">
              <Button
                onClick={handleConfirmYes}
                className="bg-[#28A745] hover:bg-[#218838] text-white font-bold flex items-center gap-2 px-4 py-2 rounded-lg transition shadow-lg"
              >
                <CheckCircle className="size-5" /> Yes
              </Button>
              <Button
                onClick={() => setShowModal(false)}
                className="bg-[#DC3545] hover:bg-[#C82333] text-white font-bold flex items-center gap-2 px-4 py-2 rounded-lg transition shadow-lg"
              >
                <XCircle className="size-5" /> No
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-10">
        <Button className="px-6 py-3 font-bold flex items-center gap-2 bg-gradient-to-r from-[#FFD700] to-[#D247BF] rounded-lg shadow-lg hover:shadow-xl transition">
          <span>Submit Your Idea</span> <ArrowRight className="size-5" />
        </Button>
      </div>
    </section>
  );
}
