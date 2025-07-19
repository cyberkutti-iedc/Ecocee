"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const HeroSection = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/ideas");
  };

  const handleBookOrder = () => {
    router.push("/bookings");
  };

  // English only content
  const t = {
    badge1: "Consulting & Solutions",
    badge2: "for Embedded, IoT & AI",
    headline1: "Have an Embedded Idea?",
    headline2: "Let's Build It Together",
    desc: "Ecocee offers expert consulting, product development, and custom solutions in Embedded Systems, IoT, and AI. Whether you need a prototype, a full product, or technical guidance—our team is ready to help you turn your vision into reality.",
    bookOrder: "Book Your First Order",
    ideas: "Share Your Idea",
    why: "Why Choose Ecocee?",
    whyList: [
      "End-to-end embedded & IoT product development",
      "Rapid prototyping & proof-of-concept services",
      "Custom hardware, firmware, and cloud integration",
      "Consulting for startups, enterprises, and innovators",
      "Trusted by leading institutions and businesses in India",
    ],
    cta: "Have an embedded idea?",
    consult: "Consult Now",
  };

  return (
    <section className="container w-full px-0">
      <div className="relative flex flex-col md:flex-row items-center justify-between min-h-[70vh] py-12 md:py-24 gap-10 md:gap-0">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-8 px-2 md:px-8">
          <div className="w-full flex justify-center">
            <Badge
              variant="outline"
              className="text-xs py-1 px-3 bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 shadow-sm mb-2 font-bold backdrop-blur-md transition-colors duration-300"
            >
              <span className="mr-2 font-semibold animate-pulse text-blue-700 dark:text-green-400">
              {t.badge1}
              </span>
                <span className="font-semibold text-gray-900 dark:text-white">{t.badge2}</span>
            </Badge>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white drop-shadow-lg">
            <span className="block">{t.headline1}</span>
            <span className="block bg-gradient-to-r from-blue-700 via-green-400 to-violet-600 bg-clip-text text-transparent dark:from-green-400 dark:via-blue-400 dark:to-violet-400 dark:bg-clip-text dark:text-transparent font-black tracking-tight animate-gradient-x">
              {t.headline2}
            </span>
          </h1>
          <p className="max-w-xl text-base md:text-lg text-gray-600 dark:text-gray-300 font-medium bg-white/60 dark:bg-gray-900/60 rounded-xl px-4 py-2 shadow-md backdrop-blur-md">
            {t.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center md:justify-start items-center mt-4">
            <Button
              className="w-full sm:w-auto font-bold flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-700 to-green-400 hover:from-green-400 hover:to-blue-700 dark:from-green-700 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-green-700 text-white shadow-xl transition-all duration-200 scale-100 hover:scale-105"
              onClick={handleBookOrder}
            >
              <ArrowRight className="size-5 mr-2 animate-bounce" />
              {t.bookOrder}
            </Button>
            <Button
              className="w-full sm:w-auto font-bold flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 dark:from-violet-700 dark:to-pink-700 dark:hover:from-pink-700 dark:hover:to-violet-700 text-white shadow-xl transition-all duration-200 scale-100 hover:scale-105"
              onClick={handleClick}
            >
              <Lightbulb className="w-5 h-5 mr-2 animate-spin-slow" />
              {t.ideas}
            </Button>
          </div>
          {/* Why Ecocee Section */}
          <div className="w-full max-w-xl mt-8">
            <div className="rounded-2xl border border-gray-100 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 shadow-lg px-6 py-5 text-left backdrop-blur-md">
              <h2 className="text-lg font-bold text-blue-700 dark:text-green-400 mb-2">{t.why}</h2>
              <ul className="space-y-2 text-gray-700 dark:text-gray-200 text-sm md:text-base">
                {t.whyList.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-blue-500 dark:text-green-400 animate-pulse" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex items-center justify-center w-full max-w-lg mx-auto md:mx-0 px-2 md:px-8">
          <div
            className="w-[320px] h-[320px] sm:w-[320px] sm:h-[320px] md:w-[340px] md:h-[340px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800
              bg-gradient-to-br 
              from-green-400 via-blue-500 to-violet-600
              dark:from-gray-900 dark:via-blue-900 dark:to-violet-900
              flex items-center justify-center relative z-20 cursor-pointer transition-colors duration-300"
          >
            <img
              src="/logo.png"
              alt="Ecocee Embedded Solutions"
              className="w-5/6 h-5/6 object-contain object-center transition-transform duration-500 hover:scale-110 drop-shadow-[0_12px_128px_rgba(0,0,0,0.30)] dark:drop-shadow-[0_12px_128px_rgba(80,200,255,0.10)]"
              style={{ minHeight: 0, maxHeight: '80%' }}
            />
            {/* Static multi-color overlay for extra vibrance */}
            <div className="absolute inset-0 pointer-events-none z-10">
              <div className="w-full h-full bg-gradient-to-tr from-orange-400/20 via-blue-400/20 to-violet-400/20 dark:from-blue-900/20 dark:via-green-900/20 dark:to-violet-900/20 rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile CTA sticky bar */}
      <div className="fixed bottom-0 left-0 w-full z-40 md:hidden bg-white/90 dark:bg-gray-900/90 border-t border-gray-200 dark:border-gray-800 px-4 py-3 flex items-center justify-between shadow-lg backdrop-blur-md">
        <span className="text-blue-700 dark:text-green-400 font-semibold text-base">{t.cta}</span>
        <Button
          className="bg-gradient-to-r from-blue-700 to-green-400 dark:from-green-700 dark:to-blue-700 text-white font-bold px-4 py-2 rounded-xl shadow hover:from-green-400 hover:to-blue-700 dark:hover:from-blue-700 dark:hover:to-green-700 transition-all"
          onClick={handleClick}
        >
          {t.ideas}
        </Button>
      </div>
      {/* Responsive background gradient for hero */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-950 dark:to-black opacity-0" />
      </div>
      {/* Responsive decorative blobs */}
      <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-blue-300/30 dark:bg-green-900/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-[-80px] right-[-80px] w-72 h-72 bg-green-300/30 dark:bg-blue-900/30 rounded-full blur-3xl -z-10" />
    </section>
  );
};

// Add custom animations to your global CSS (e.g., animate-gradient-x, animate-spin-slow)
// Example (tailwind.config.js):
// extend: {
//   animation: {
//     'gradient-x': 'gradient-x 3s ease infinite',
//     'spin-slow': 'spin 2.5s linear infinite',
//   },
//   keyframes: {
//     'gradient-x': {
//       '0%, 100%': { backgroundPosition: '0% 50%' },
//       '50%': { backgroundPosition: '100% 50%' },
//     },
//   },
// }
//   },
// }
