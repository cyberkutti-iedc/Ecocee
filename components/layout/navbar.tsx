"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Menu, ArrowRight, X, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GOOGLE_FORM_URL } from "@/lib/config";

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "/#work", label: "Work" },
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/about", label: "About" },
  { href: "/#insights", label: "Insights" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="Ecocee"
              width={160}
              height={40}
              className="h-20 lg:h-24 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <button
              onClick={() => window.open(GOOGLE_FORM_URL, "_blank")}
              className="inline-flex items-center gap-2 text-sm font-medium text-white bg-white/10 hover:bg-white/15 px-5 py-2.5 rounded-full transition-all duration-200 border border-white/10 hover:border-white/20"
            >
              Start a project
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 -mr-2 text-white"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-6 h-16 border-b border-white/5">
                <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                  <Image
                    src="/logo.png"
                    alt="Ecocee"
                    width={120}
                    height={30}
                    className="h-16 w-auto"
                  />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 -mr-2 text-white"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex-1 flex flex-col justify-center px-8">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between py-5 border-b border-white/5 group"
                    >
                      <span className="text-3xl font-light text-white group-hover:text-gray-300 transition-colors">
                        {item.label}
                      </span>
                      <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="px-8 pb-10 pt-6 border-t border-white/5">
                <button
                  onClick={() => { setIsOpen(false); window.open(GOOGLE_FORM_URL, "_blank"); }}
                  className="inline-flex items-center gap-3 text-lg font-medium text-white"
                >
                  Start a project
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
