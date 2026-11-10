
"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Menu,
  ArrowUpRight,
  X,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { GOOGLE_FORM_URL } from "@/lib/config";

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "/#products", label: "Products" },
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/#insights", label: "Insights" },
];

export const Navbar = () => {
  const pathname = usePathname() || "";

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect page scroll.
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Lock background scrolling while mobile navigation is open.
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  // Close mobile navigation with Escape.
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Close navigation after changing routes.
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const isActive = (href: string) => {
    if (href === "/about") {
      return pathname === "/about";
    }

    return false;
  };

  return (
    <>
      {/* Main navigation */}
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-black/[0.08] bg-white/95 shadow-[0_2px_16px_rgba(0,0,0,0.025)] backdrop-blur-xl"
            : "border-transparent bg-white"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1600px] items-center justify-between px-6 sm:px-10 lg:h-[80px] lg:px-16 xl:px-24">

          {/* Brand */}
          <Link
            href="/"
            aria-label="Ecocee home"
            className="group relative flex shrink-0 items-center"
          >
            <Image
              src="/logo.png"
              alt="Ecocee"
              width={160}
              height={40}
              priority
              className="h-auto w-[112px] object-contain brightness-0 sm:w-[126px]"
            />
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 lg:flex xl:gap-9"
          >
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`group relative py-2 text-[13px] font-medium tracking-[-0.01em] transition-colors duration-200 ${
                    active
                      ? "text-black"
                      : "text-black/60 hover:text-black"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute -bottom-[2px] left-0 h-px bg-black transition-all duration-300 ${
                      active
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-7 lg:flex">

            {/* Product link */}
            <Link
              href="/mero"
              className="group inline-flex items-center gap-2 text-[12px] font-medium text-black/60 transition-colors hover:text-black"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-black/70" />
              Mero
              <ArrowUpRight
                size={13}
                className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
              />
            </Link>

            {/* Contact action */}
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-10 items-center gap-3 rounded-full bg-black px-5 text-[12px] font-medium text-white transition-all duration-300 hover:bg-black/75"
            >
              Start a project

              <ArrowUpRight
                size={15}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center rounded-full text-black transition-colors hover:bg-black/[0.05] lg:hidden"
          >
            <Menu size={22} strokeWidth={1.6} />
          </button>
        </div>
      </header>

      {/* Mobile navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex flex-col bg-white text-black lg:hidden"
          >
            {/* Mobile header */}
            <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-black/[0.08] px-6 sm:px-10">
              <Link
                href="/"
                aria-label="Ecocee home"
                onClick={closeMenu}
              >
                <Image
                  src="/logo.png"
                  alt="Ecocee"
                  width={140}
                  height={35}
                  className="h-auto w-[112px] brightness-0"
                />
              </Link>

              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close navigation menu"
                className="flex h-10 w-10 items-center justify-center rounded-full text-black transition-colors hover:bg-black/[0.06]"
              >
                <X size={22} strokeWidth={1.6} />
              </button>
            </div>

            {/* Mobile links */}
            <nav
              aria-label="Mobile navigation links"
              className="flex flex-1 flex-col justify-center overflow-y-auto px-8 sm:px-12"
            >
              <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.24em] text-black/40">
                Explore Ecocee
              </p>

              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="group flex items-center justify-between border-b border-black/[0.09] py-5"
                  >
                    <span className="text-[clamp(2rem,7vw,3rem)] font-medium tracking-[-0.055em] transition-transform duration-300 group-hover:translate-x-2">
                      {item.label}
                    </span>

                    <ChevronRight
                      size={21}
                      strokeWidth={1.4}
                      className="text-black/35 transition-all duration-300 group-hover:translate-x-1 group-hover:text-black"
                    />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.45 }}
              >
                <Link
                  href="/mero"
                  onClick={closeMenu}
                  className="group flex items-center justify-between border-b border-black/[0.09] py-5"
                >
                  <span className="text-[clamp(2rem,7vw,3rem)] font-medium tracking-[-0.055em] transition-transform duration-300 group-hover:translate-x-2">
                    Mero
                  </span>

                  <ArrowUpRight
                    size={21}
                    strokeWidth={1.4}
                    className="text-black/35 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black"
                  />
                </Link>
              </motion.div>
            </nav>

            {/* Mobile footer */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.45 }}
              className="shrink-0 border-t border-black/[0.08] px-8 pb-9 pt-7 sm:px-12"
            >
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-black/40">
                Have a project in mind?
              </p>

              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="group flex w-full items-center justify-between rounded-full bg-black px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-black/75"
              >
                Start a project

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <div className="mt-7 flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-black/35">
                <span>Bits that build the future</span>
                <span>© Ecocee</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
