"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Menu, ArrowRight, ChevronDown, X, Bot, Building2, Warehouse, Sun, Moon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";

/* ─── Data ──────────────────────────────────────────────────── */

interface DropdownItem {
  href: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

interface RouteProps {
  href: string;
  label: string;
  dropdown?: DropdownItem[];
}

const routeList: RouteProps[] = [
  {
    href: "/ai-agents",
    label: "Solutions",
    dropdown: [
      { href: "/ai-agents#business", label: "Business Agent", description: "Customer support, lead capture, and sales automation", icon: <Bot className="w-5 h-5" /> },
      { href: "/ai-agents#office", label: "Office Agent", description: "Email, scheduling, HR, and document management", icon: <Building2 className="w-5 h-5" /> },
      { href: "/ai-agents#warehouse", label: "Warehouse Agent", description: "Inventory, logistics, and supply chain automation", icon: <Warehouse className="w-5 h-5" /> },
    ],
  },
  { href: "/#how-we-work", label: "How We Work" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
];

/* ─── Theme Toggle (inline for navbar) ──────────────────────── */

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-9 h-9" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-200"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
    </button>
  );
}

/* ─── Main Navbar ───────────────────────────────────────────── */

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const hoverTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => () => { if (hoverTimer.current) clearTimeout(hoverTimer.current); }, []);

  const onEnter = useCallback((label: string) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setActiveDropdown(label);
  }, []);

  const onLeave = useCallback(() => {
    hoverTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  }, []);

  /* ---------- Logo: logo.png = white text on transparent bg ---- */
  const Logo = ({ size = "normal" }: { size?: "normal" | "small" }) => {
    const maxH = size === "small" ? "max-h-28" : "max-h-56";
    const w = size === "small" ? 700 : 1200;
    const h = size === "small" ? 175 : 300;
    return (
      <Link href="/" className="flex items-center justify-center shrink-0">
        <Image
          src="/logo.png"
          alt="Ecocee"
          width={w}
          height={h}
          priority
          className={`h-auto w-auto ${maxH} invert dark:invert-0 object-contain object-center`}
        />
      </Link>
    );
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-950/95 backdrop-blur-2xl shadow-lg shadow-gray-200/30 dark:shadow-black/50 border-b border-gray-200 dark:border-gray-800"
          : "bg-white/98 dark:bg-gray-950/98 border-b border-gray-100/50 dark:border-gray-800/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-40 md:h-48 lg:h-56">
        {/* ── Logo ── */}
        <Logo />

        {/* ── Desktop Nav ── */}
        <nav className="hidden lg:flex items-center gap-0.5 mx-auto">
          {routeList.map(({ href, label, dropdown }) => (
            <div
              key={label}
              className="relative"
              onMouseEnter={() => dropdown && onEnter(label)}
              onMouseLeave={() => dropdown && onLeave()}
            >
              <Link
                href={dropdown ? dropdown[0].href : href}
                className="relative flex items-center gap-1 px-4 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary/90 transition-all duration-200 rounded-lg hover:bg-gray-50/80 dark:hover:bg-primary/10"
              >
                {label}
                {dropdown && (
                  <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${activeDropdown === label ? "rotate-180" : ""}`} />
                )}
              </Link>

              {/* Dropdown */}
              {dropdown && activeDropdown === label && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                  onMouseEnter={() => onEnter(label)}
                  onMouseLeave={onLeave}
                >
                  <div className="bg-white dark:bg-gray-900/95 rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl shadow-gray-300/20 dark:shadow-black/40 p-2 w-80 backdrop-blur-sm animate-in fade-in slide-in-from-top-2 duration-200">
                    {dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group/item"
                      >
                        <span className="mt-0.5 p-2 rounded-lg bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors shrink-0">
                          {item.icon}
                        </span>
                        <div className="min-w-0">
                          <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{item.label}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{item.description}</div>
                        </div>
                      </Link>
                    ))}
                    <div className="mt-1 pt-1 border-t border-gray-100 dark:border-gray-800">
                      <Link href={href} className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-primary hover:bg-primary/5 dark:hover:bg-primary/10 rounded-lg transition-colors">
                        View all solutions
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* ── Desktop Right: Theme + CTA ── */}
        <div className="hidden lg:flex items-center gap-1.5 shrink-0">
          <ThemeToggle />
          <a href="mailto:info@ecocee.in" className="text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary/90 px-4 py-2.5 rounded-lg hover:bg-gray-50/80 dark:hover:bg-primary/10 transition-all duration-200">
            Contact
          </a>
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-white font-bold text-sm h-10 px-6 group rounded-lg shadow-md hover:shadow-lg transition-all duration-200 dark:bg-primary dark:hover:bg-primary/80" asChild>
            <a href="/#contact">
              Get Started
              <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </Button>
        </div>

        {/* ── Mobile Right: Theme Toggle + Hamburger ── */}
        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 active:scale-95 transition-all" aria-label="Open menu">
                <Menu className="w-5 h-5 text-gray-700 dark:text-gray-200" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm bg-white dark:bg-gray-950/98 p-0 border-l border-gray-200 dark:border-gray-800 backdrop-blur-sm">
              <div className="flex flex-col h-full">
                {/* Mobile header */}
                <div className="flex items-center justify-between p-5 border-b border-gray-100 dark:border-gray-800">
                  <Logo size="small" />
                  <button onClick={() => setIsOpen(false)} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors" aria-label="Close menu">
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                {/* Mobile nav items */}
                <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                  {routeList.map(({ href, label, dropdown }) => (
                    <div key={label}>
                      {dropdown ? (
                        <>
                          <button
                            onClick={() => setMobileExpanded(mobileExpanded === label ? null : label)}
                            className="w-full flex items-center justify-between px-4 py-3.5 rounded-lg text-base font-semibold text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary/90 hover:bg-gray-50/80 dark:hover:bg-primary/10 transition-all duration-200"
                          >
                            {label}
                            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${mobileExpanded === label ? "rotate-180" : ""}`} />
                          </button>
                          {mobileExpanded === label && (
                            <div className="ml-2 mt-1 mb-2 space-y-0.5 animate-in slide-in-from-top-1 duration-150">
                              {dropdown.map((item) => (
                                <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                  <span className="mt-0.5 text-primary shrink-0">{item.icon}</span>
                                  <div className="min-w-0">
                                    <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{item.label}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{item.description}</div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link href={href} onClick={() => setIsOpen(false)} className="block px-4 py-3.5 rounded-lg text-base font-semibold text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary/90 hover:bg-gray-50/80 dark:hover:bg-primary/10 transition-all duration-200">
                          {label}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="p-4 border-t border-gray-100 dark:border-gray-800 space-y-2.5">
                  <a href="mailto:info@ecocee.in" className="flex items-center justify-center gap-2 w-full py-3.5 text-base font-semibold text-gray-700 dark:text-gray-200 bg-gray-50/80 dark:bg-gray-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-primary/20 transition-all duration-200">
                    Email Us
                  </a>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 dark:bg-primary dark:hover:bg-primary/80" onClick={() => setIsOpen(false)} asChild>
                    <a href="/#contact">Book a Demo</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};