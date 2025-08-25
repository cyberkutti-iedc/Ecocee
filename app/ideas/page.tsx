/* eslint-disable react/no-unescaped-entities */
"use client";

import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { MotionDiv } from "@/components/ui/motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Cpu, 
  Code, 
  XCircle, 
  CheckCircle, 
  Mail, 
  Send, 
  Info,
  Lightbulb,
  Share2,
  Users,
  Sparkles,
  Heart
} from "lucide-react";
import Cookies from "js-cookie"; // ✅ Import js-cookie
import Seo from "@/components/seo/Seo";

export default function Ideas() {
  const router = useRouter();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<"hardware" | "software" | null>(null);


  const seoConfig = {
  title: "Free Electronics & IoT Project Ideas | Ecocee Idea Box | Kerala",
  description: "Explore 100+ free embedded systems, IoT, and electronics project ideas for students and startups in Kerala. Get inspired with our open-source hardware and software concepts.",
  keywords: [
    "Free Project Ideas in Electronics",
    "Embedded Systems Project Ideas",
    "IoT Project Ideas Free",
    "Automation Project Ideas for Students",
    "AI ML Project Ideas India",
    "Electronics Mini Project Ideas",
    "Free Electronics Startup Ideas",
    "Industrial Automation Project Ideas",
    "PCB Design Project Concepts",
    "Open Source Project Ideas Kerala",
    "Ecocee Free Ideas",
    "Ecocee Innovation Projects",
    "Ecocee Embedded Systems Ideas",
    "Ecocee IoT Project Concepts",
    "Embedded Project Ideas Kerala",
    "IoT Project Ideas Kerala",
    "Electronics Ideas Thrissur",
    "Project Ideas for Students in Ernakulam",
    "BTech Electronics Project Ideas",
    "Engineering Final Year Project Ideas",
    "Arduino Project Ideas Free",
    "Raspberry Pi Project Ideas India",
    "Electronics Startup Ideas Free",
    "Smart Farming Project Ideas",
    "AI Edge Computing Project Ideas",
    "TinyML Free Project Concepts"
  ],
  canonical: "https://ecocee.in/ideas",
  image: "https://ecocee.in/images/og-ideas.webp",
  twitterHandle: "@EcoceeTech",
  siteName: "Ecocee",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Electronics and IoT Project Ideas",
    "description": "Collection of free project ideas for embedded systems and IoT development",
    "url": "https://ecocee.in/ideas",
    "numberOfItems": "100",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "CreativeWork",
          "name": "Hardware Electronics Projects",
          "url": "https://ecocee.in/ideas/hardware"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "CreativeWork",
          "name": "Software Development Projects",
          "url": "https://ecocee.in/ideas/software"
        }
      }
    ]
  }
};

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

  const handleSubmitIdea = () => {
    setShowSubmitModal(true);
  };

  const handleEmailRedirect = () => {
    const subject = encodeURIComponent("New Idea Submission - Ecocee Idea Box");
    const body = encodeURIComponent(`Hi Ecocee Team,

I have an exciting idea to share with the community:

Project Title: [Your Project Title]
Category: [Hardware/Software]
Description: [Brief description of your idea]
Target Audience: [Students/Professionals/Everyone]

Looking forward to collaborating!

Best regards,
[Your Name]`);
    
    window.open(`mailto:info@ecocee.in?subject=${subject}&body=${body}`, '_blank');
    setShowSubmitModal(false);
  };

  // 🚨 Fix: Prevent rendering styles based on `theme` before mounting
  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading amazing ideas...</p>
        </div>
      </div>
    );
  }

  return (
    <>
    <Seo {...seoConfig} />
    <section
      className={`container mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 transition-colors ${
        theme === "dark" ? "bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white" : "bg-gradient-to-br from-blue-50 via-white to-purple-50 text-black"
      }`}
    >
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header Section */}
      <div className="text-center space-y-8 relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Lightbulb className="w-8 h-8 text-yellow-500 animate-pulse" />
            <Sparkles className="w-6 h-6 text-purple-500" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide leading-tight">
            Welcome to  
            <span className="block sm:inline text-transparent px-2 bg-gradient-to-r from-[#FFD700] via-[#FF6B6B] to-[#D247BF] bg-clip-text animate-gradient-x">
              Ecocee Idea Box
            </span>
          </h1>
        </MotionDiv>
        
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
            A creative hub for students to explore, innovate, and bring their ideas to life.  
            Whether you&apos;re into <strong className="text-blue-600 dark:text-blue-400">electronics</strong> or  
            <strong className="text-purple-600 dark:text-purple-400"> software</strong>, we&apos;ve got you covered!
          </p>
        </MotionDiv>

        {/* Stats Section */}
        <MotionDiv
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 mt-8"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700">
            <Users className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium">100+ Ideas</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700">
            <Heart className="w-4 h-4 text-red-500" />
            <span className="text-sm font-medium">Community Driven</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700">
            <Share2 className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium">Open Source</span>
          </div>
        </MotionDiv>
      </div>

      {/* Idea Selection Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-4xl mt-16 relative z-10">
        <MotionDiv
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer group"
          onClick={() => handleOpenModal("hardware")}
        >
          <Card
            className={`p-8 text-center border-2 rounded-2xl shadow-2xl transition-all duration-300 relative overflow-hidden ${
              theme === "dark"
                ? "bg-gradient-to-br from-gray-900/80 to-black/80 hover:from-gray-800/80 hover:to-gray-900/80 border-gray-700 hover:border-yellow-500/50"
                : "bg-gradient-to-br from-white/80 to-gray-50/80 hover:from-yellow-50/80 hover:to-orange-50/80 border-gray-200 hover:border-yellow-400/50"
            } backdrop-blur-sm group-hover:shadow-yellow-500/20`}
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-orange-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <CardHeader className="relative z-10">
              <CardTitle className="text-2xl font-bold flex items-center justify-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-8 h-8" />
                </div>
                <span className={`bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent ${
                  theme === "dark" ? "from-yellow-400 to-orange-400" : ""
                }`}>
                  Hardware Electronics
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
                Build IoT, robotics, and embedded systems with Arduino, ESP32, and Raspberry Pi
              </p>
              <div className="flex justify-center">
                <Button variant="ghost" className="text-yellow-600 dark:text-yellow-400 hover:bg-yellow-100 dark:hover:bg-yellow-900/20">
                  Explore Ideas <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05, rotate: -1 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer group"
          onClick={() => handleOpenModal("software")}
        >
          <Card
            className={`p-8 text-center border-2 rounded-2xl shadow-2xl transition-all duration-300 relative overflow-hidden ${
              theme === "dark"
                ? "bg-gradient-to-br from-gray-900/80 to-black/80 hover:from-gray-800/80 hover:to-gray-900/80 border-gray-700 hover:border-blue-500/50"
                : "bg-gradient-to-br from-white/80 to-gray-50/80 hover:from-blue-50/80 hover:to-cyan-50/80 border-gray-200 hover:border-blue-400/50"
            } backdrop-blur-sm group-hover:shadow-blue-500/20`}
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-cyan-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <CardHeader className="relative z-10">
              <CardTitle className="text-2xl font-bold flex items-center justify-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-8 h-8" />
                </div>
                <span className={`bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent ${
                  theme === "dark" ? "from-blue-400 to-cyan-400" : ""
                }`}>
                  Software Development
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
                Work on web apps, AI, mobile apps, and automation tools
              </p>
              <div className="flex justify-center">
                <Button variant="ghost" className="text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/20">
                  Explore Ideas <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </MotionDiv>
      </div>

      {/* Modal for Category Selection */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`p-8 rounded-2xl shadow-2xl border max-w-md w-full transition ${
              theme === "dark"
                ? "bg-gray-900/95 backdrop-blur-xl border-gray-700"
                : "bg-white/95 backdrop-blur-xl border-gray-200"
            }`}
          >
            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                {selectedCategory === "hardware" ? (
                  <Cpu className="w-12 h-12 text-yellow-500" />
                ) : (
                  <Code className="w-12 h-12 text-blue-500" />
                )}
              </div>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-2">
                Explore {selectedCategory === "hardware" ? "Hardware Electronics" : "Software"} Ideas?
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Discover amazing projects and get inspired to build something incredible!
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button
                onClick={handleConfirmYes}
                className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold flex items-center justify-center gap-2 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/25"
              >
                <CheckCircle className="w-5 h-5" /> Yes, Let's Go!
              </Button>
              <Button
                onClick={() => setShowModal(false)}
                variant="outline"
                className="flex-1 border-2 font-bold flex items-center justify-center gap-2 py-3 rounded-xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <XCircle className="w-5 h-5" /> Maybe Later
              </Button>
            </div>
          </MotionDiv>
        </div>
      )}

      {/* Submit Idea Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`p-8 rounded-2xl shadow-2xl border max-w-lg w-full transition ${
              theme === "dark"
                ? "bg-gray-900/95 backdrop-blur-xl border-gray-700"
                : "bg-white/95 backdrop-blur-xl border-gray-200"
            }`}
          >
            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
                  <Info className="w-8 h-8" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                Share Your Amazing Idea! 
              </h2>
              <div className="text-left space-y-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl mb-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong className="text-blue-600 dark:text-blue-400">🚀 Public idea submissions are currently not accepting.</strong>
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  But don't worry! If you really want to share your brilliant idea with our community, 
                  we'd love to hear from you directly.
                </p>
                <div className="flex items-center gap-3 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-600">
                  <Mail className="w-5 h-5 text-purple-600" />
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">Send us an email:</p>
                    <p className="text-purple-600 dark:text-purple-400 font-mono">info@ecocee.in</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button
                onClick={handleEmailRedirect}
                className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold flex items-center justify-center gap-2 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                <Send className="w-5 h-5" /> Send Email
              </Button>
              <Button
                onClick={() => setShowSubmitModal(false)}
                variant="outline"
                className="flex-1 border-2 font-bold flex items-center justify-center gap-2 py-3 rounded-xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <XCircle className="w-5 h-5" /> Close
              </Button>
            </div>
          </MotionDiv>
        </div>
      )}

      {/* Call to Action */}
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-16 relative z-10"
      >
        <Button 
          onClick={handleSubmitIdea}
          className="px-8 py-4 text-lg font-bold flex items-center gap-3 bg-gradient-to-r from-[#FFD700] via-[#FF6B6B] to-[#D247BF] hover:from-[#FFC107] hover:via-[#FF5252] hover:to-[#C2185B] rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 text-white"
        >
          <Lightbulb className="w-6 h-6" />
          <span>Submit Your Idea</span> 
          <ArrowRight className="w-5 h-5" />
        </Button>
      </MotionDiv>

      {/* Footer Message */}
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="mt-12 text-center relative z-10"
      >
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">
          Join our community of innovators and turn your ideas into reality. 
          Every great project starts with a single idea! 
        </p>
      </MotionDiv>
    </section>
    </>
  );
}