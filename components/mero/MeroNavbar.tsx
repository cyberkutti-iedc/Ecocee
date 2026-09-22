"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/brand/logo";

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "/mero#intro", label: "Overview" },
  { href: "/mero#hardware", label: "Hardware" },
  { href: "/mero#flows", label: "Flows" },
  { href: "/mero#specs", label: "Specs" },
];

export const MeroNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50",
          "transition-all duration-300",
          scrolled
            ? "border-b border-slate-200 bg-white/92 backdrop-blur-xl"
            : "bg-white/80 backdrop-blur-md",
        ].join(" ")}
      >
        <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 lg:h-22 lg:px-10">
          {/* Brand */}
          <Link
            href="/mero"
            className="group flex items-center gap-3"
            aria-label="Mero home"
          >
            <Logo
              size={30}
              scale={1.3}
              title="Mero Logo"
              className="shrink-0 transition-transform duration-300 group-hover:scale-105"
            />

            <span className="text-xl font-semibold tracking-[-0.03em] text-slate-950">
              Mero
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 lg:flex lg:items-center lg:gap-9">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-500 transition-colors duration-200 hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop right */}
          <div className="hidden items-center gap-6 lg:flex">
            <Link
              href="/"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors duration-200 hover:text-slate-950"
            >
              Ecocee
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <span className="h-4 w-px bg-slate-200" />

            <span className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
              Coming Soon
            </span>
          </div>

          {/* Mobile */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center text-slate-950 lg:hidden"
            aria-label="Open menu"
            aria-expanded={isOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white lg:hidden"
          >
            <div className="flex h-full flex-col">
              {/* Mobile header */}
              <div className="flex h-20 items-center justify-between border-b border-slate-200 px-6">
                <Link
                  href="/mero"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3"
                >
                  <Logo size={30} scale={1.3} title="Mero Logo" />
                  <span className="text-xl font-semibold tracking-tight text-slate-950">
                    Mero
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex h-10 w-10 items-center justify-center text-slate-950"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-1 flex-col justify-center px-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between border-b border-slate-200 py-6"
                    >
                      <span className="text-3xl font-medium tracking-[-0.04em] text-slate-950">
                        {item.label}
                      </span>

                      <span className="font-mono text-[10px] tracking-[0.18em] text-slate-400">
                        0{index + 1}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile footer */}
              <div className="border-t border-slate-200 px-6 py-8">
                <div className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  A product by Ecocee
                </div>

                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
                >
                  Visit Ecocee
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};