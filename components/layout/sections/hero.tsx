"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Lightbulb } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const HeroSection = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/ideas");
  };

  const handleBookOrder = () => {
    router.push("/book-order");
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
          className="text-xs py-1 px-3 bg-white/80 border border-gray-200 shadow-sm mb-2 font-bold"
          >
          <span className="mr-2 text-primary font-semibold">{t.badge1}</span>
          <span className="font-semibold text-gray-900">{t.badge2}</span>
          </Badge>
        </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
            <span className="block">{t.headline1}</span>
            <span className="block text-blue-700 font-black tracking-tight">
              {t.headline2}
            </span>
          </h1>
          <p className="max-w-xl text-base md:text-lg text-gray-600 font-medium">
            {t.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center md:justify-start items-center mt-4">
            <Button
              className="w-full sm:w-auto font-bold flex items-center justify-center px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white shadow-md transition-all duration-200"
              onClick={handleBookOrder}
            >
              <ArrowRight className="size-5 mr-2" />
              {t.bookOrder}
            </Button>
            <Button
              className="w-full sm:w-auto font-bold flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 text-white shadow-lg transition-all duration-200"
              onClick={handleClick}
            >
              <Lightbulb className="w-5 h-5 mr-2" />
              {t.ideas}
            </Button>
          </div>
          {/* Why Ecocee Section */}
          <div className="w-full max-w-xl mt-8">
            <div className="rounded-2xl border border-gray-100 bg-white/80 shadow-sm px-6 py-5 text-left">
              <h2 className="text-lg font-bold text-blue-700 mb-2">{t.why}</h2>
              <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                {t.whyList.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-blue-500" />
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
            className="w-full h-[260px] sm:h-[350px] md:h-[440px] rounded-3xl overflow-hidden shadow-xl border border-gray-100
            bg-gradient-to-br 
              from-green-400 via-blue-500 to-violet-600
              dark:from-gray-900 dark:via-gray-800 dark:to-black
              flex items-center justify-center relative z-20 cursor-pointer"
          >
            <img
              src="/logo.png"
              alt="Ecocee Embedded Solutions"
              className="w-11/12 h-5/6 object-contain object-center transition-transform duration-500 hover:scale-105 drop-shadow-[0_12px_128px_rgba(0,0,0,0.30)]"
              style={{ minHeight: 160, maxHeight: 340 }}
            />
            {/* Static multi-color overlay for extra vibrance */}
            <div className="absolute inset-0 pointer-events-none z-10">
              <div className="w-full h-full bg-gradient-to-tr from-orange-400/20 via-blue-400/20 to-violet-400/20 rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile CTA sticky bar */}
      <div className="fixed bottom-0 left-0 w-full z-40 md:hidden bg-white/90 border-t border-gray-200 px-4 py-3 flex items-center justify-between shadow-lg">
        <span className="text-blue-700 font-semibold text-base">{t.cta}</span>
        <Button
          className="bg-blue-700 text-white font-bold px-4 py-2 rounded-xl shadow hover:bg-blue-800 transition-all"
          onClick={handleClick}
        >
          {t.ideas}
        </Button>
      </div>
    </section>
  );
};
