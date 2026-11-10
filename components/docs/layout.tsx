
"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Github,
  Sun,
  Moon,
  Search,
  ChevronDown,
  ChevronRight,
  BookOpen,
  ExternalLink,
} from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const navigation = [
  { name: "Introduction", href: "/docs/introduction" },
  { name: "Installation", href: "/docs/installation" },
  { name: "Quick Start", href: "/docs/quick-start" },
  { name: "CLI Commands", href: "/docs/cli-commands" },
  {
    name: "Language Syntax",
    href: "/docs/language-syntax",
    children: [
      { name: "Variables", href: "/docs/variables" },
      { name: "Constants", href: "/docs/constants" },
      { name: "Data Types", href: "/docs/types" },
      { name: "Operators", href: "/docs/operators" },
      { name: "Control Flow", href: "/docs/control-flow" },
      { name: "Functions", href: "/docs/functions" },
      { name: "Closures", href: "/docs/closures" },
      { name: "Arrays", href: "/docs/arrays" },
      { name: "Structs", href: "/docs/structs" },
      { name: "Enums", href: "/docs/enums" },
      { name: "Pattern Matching", href: "/docs/pattern-matching" },
      { name: "Error Handling", href: "/docs/error-handling" },
      { name: "Modules", href: "/docs/modules" },
    ],
  },
  { name: "Built-in Functions", href: "/docs/built-ins" },
  { name: "Examples", href: "/docs/examples" },
  { name: "Feature Status", href: "/docs/feature-status" },
  { name: "Architecture", href: "/docs/architecture" },
  { name: "Roadmap", href: "/docs/roadmap" },
];

export function DocsLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "Language Syntax",
  ]);

  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const toggleSection = (name: string) => {
    setExpandedSections((previous) =>
      previous.includes(name)
        ? previous.filter((section) => section !== name)
        : [...previous, name]
    );
  };

  const closeSidebar = () => setSidebarOpen(false);

  const filteredNavigation = navigation
    .map((item) => {
      if (!searchQuery.trim()) return item;

      const query = searchQuery.toLowerCase();
      const parentMatches = item.name.toLowerCase().includes(query);

      if (item.children) {
        const matchingChildren = item.children.filter((child) =>
          child.name.toLowerCase().includes(query)
        );

        if (parentMatches) return item;

        if (matchingChildren.length > 0) {
          return { ...item, children: matchingChildren };
        }

        return null;
      }

      return item.name.toLowerCase().includes(query) ? item : null;
    })
    .filter((item): item is (typeof navigation)[number] => item !== null);

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-[#111315] dark:text-slate-100">
      {/* Top navigation */}
      <header className="sticky top-0 z-50 h-16 border-b border-slate-200 bg-white/95 backdrop-blur-md dark:border-white/10 dark:bg-[#111315]/95">
        <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 shrink-0 md:hidden"
              onClick={() => setSidebarOpen((open) => !open)}
              aria-label={sidebarOpen ? "Close navigation" : "Open navigation"}
            >
              {sidebarOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>

            <Link
              href="/docs"
              className="flex shrink-0 items-center gap-2.5"
              onClick={closeSidebar}
            >
              <Image
                src="/kode/logo.png"
                alt="Kode"
                width={30}
                height={30}
                className="rounded-md"
                priority
              />

              <span className="text-[19px] font-semibold tracking-tight">
                Kode
              </span>
            </Link>

            <span className="mx-1 hidden h-5 w-px bg-slate-200 dark:bg-white/15 sm:block" />

            <Link
              href="/docs"
              className="hidden text-sm font-medium text-slate-600 transition-colors hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-400 sm:block"
            >
              Documentation
            </Link>

            <span className="hidden rounded-full border border-slate-200 px-2 py-0.5 text-[10px] font-medium text-slate-500 dark:border-white/15 dark:text-slate-400 sm:inline-flex">
              v0.3.3
            </span>
          </div>

          <nav className="hidden items-center gap-7 md:flex">
            <Link
              href="/docs"
              className={`text-sm transition-colors ${
                pathname === "/docs"
                  ? "font-semibold text-blue-700 dark:text-blue-400"
                  : "text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
              }`}
            >
              Documentation
            </Link>

            <Link
              href="/docs/examples"
              className="text-sm text-slate-600 transition-colors hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
            >
              Examples
            </Link>

            <a
              href="https://github.com/ecocee/kode-go"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-slate-600 transition-colors hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
            >
              <Github className="h-4 w-4" />
              GitHub
              <ExternalLink className="h-3 w-3 opacity-50" />
            </a>
          </nav>

          <div className="flex shrink-0 items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-[18px] w-[18px]" />
              ) : (
                <Moon className="h-[18px] w-[18px]" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Documentation shell */}
      <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-[1600px]">
        {/* Desktop sidebar */}
        <aside className="sticky top-16 hidden h-[calc(100vh-64px)] w-[272px] shrink-0 border-r border-slate-200 bg-white dark:border-white/10 dark:bg-[#111315] md:block">
          <SidebarContent
            pathname={pathname}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filteredNavigation={filteredNavigation}
            expandedSections={expandedSections}
            toggleSection={toggleSection}
            closeSidebar={closeSidebar}
          />
        </aside>

        {/* Mobile sidebar */}
        {sidebarOpen && (
          <>
            <button
              type="button"
              aria-label="Close navigation overlay"
              className="fixed inset-0 z-40 bg-slate-950/40 md:hidden"
              onClick={closeSidebar}
            />

            <aside className="fixed inset-y-16 left-0 z-50 w-[min(85vw,320px)] border-r border-slate-200 bg-white shadow-xl dark:border-white/10 dark:bg-[#17191c] md:hidden">
              <SidebarContent
                pathname={pathname}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                filteredNavigation={filteredNavigation}
                expandedSections={expandedSections}
                toggleSection={toggleSection}
                closeSidebar={closeSidebar}
              />
            </aside>
          </>
        )}

        {/* Main document */}
        <main className="min-w-0 flex-1">
          <div className="mx-auto w-full max-w-[1040px] px-5 py-9 sm:px-8 sm:py-12 lg:px-12">
            <div className="min-w-0">
              {children}
            </div>

            <footer className="mt-20 flex flex-col gap-3 border-t border-slate-200 py-7 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
              <span>Kode documentation · v0.3.3</span>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/ecocee/kode-go"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-blue-700 dark:hover:text-blue-400"
                >
                  GitHub
                </a>

                <a
                  href="https://ecocee.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-blue-700 dark:hover:text-blue-400"
                >
                  ECOCEE
                </a>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}

type SidebarContentProps = {
  pathname: string;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  filteredNavigation: typeof navigation;
  expandedSections: string[];
  toggleSection: (name: string) => void;
  closeSidebar: () => void;
};

function SidebarContent({
  pathname,
  searchQuery,
  setSearchQuery,
  filteredNavigation,
  expandedSections,
  toggleSection,
  closeSidebar,
}: SidebarContentProps) {
  return (
    <div className="flex h-full flex-col">
      {/* Search */}
      <div className="border-b border-slate-100 px-4 py-4 dark:border-white/10">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <Input
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search documentation"
            aria-label="Search documentation"
            className="h-10 rounded-lg border-slate-200 bg-slate-50 pl-9 pr-3 text-sm shadow-none placeholder:text-slate-400 focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/15 dark:border-white/10 dark:bg-white/[0.04] dark:text-white"
          />
        </div>
      </div>

      {/* Navigation tree */}
      <ScrollArea className="flex-1">
        <nav className="px-3 py-5">
          <div className="mb-3 flex items-center gap-2 px-3">
            <BookOpen className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.13em] text-slate-400">
              Documentation
            </span>
          </div>

          <div className="space-y-0.5">
            {filteredNavigation.map((item) => {
              const hasChildren = "children" in item && Boolean(item.children);
              const isExpanded =
                expandedSections.includes(item.name) || Boolean(searchQuery);
              const isActive = pathname === item.href;
              const hasActiveChild =
                hasChildren &&
                item.children?.some((child) => pathname === child.href);

              return (
                <div key={item.name}>
                  <div className="flex items-center">
                    {hasChildren ? (
                      <button
                        type="button"
                        onClick={() => toggleSection(item.name)}
                        aria-label={`${isExpanded ? "Collapse" : "Expand"} ${item.name}`}
                        className="flex h-8 w-7 shrink-0 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-white/10 dark:hover:text-white"
                      >
                        {isExpanded ? (
                          <ChevronDown className="h-3.5 w-3.5" />
                        ) : (
                          <ChevronRight className="h-3.5 w-3.5" />
                        )}
                      </button>
                    ) : (
                      <span className="w-7 shrink-0" />
                    )}

                    <Link
                      href={item.href}
                      onClick={closeSidebar}
                      className={`flex min-h-9 min-w-0 flex-1 items-center rounded-md px-3 py-2 text-[13px] transition-colors ${
                        isActive
                          ? "bg-blue-50 font-semibold text-blue-800 dark:bg-blue-500/15 dark:text-blue-300"
                          : hasActiveChild
                            ? "font-medium text-slate-900 dark:text-white"
                            : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-white/[0.06] dark:hover:text-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </div>

                  {hasChildren && isExpanded && item.children && (
                    <div className="ml-[22px] mt-1 space-y-0.5 border-l border-slate-200 pl-3 dark:border-white/10">
                      {item.children.map((child) => {
                        const childActive = pathname === child.href;

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeSidebar}
                            className={`block rounded-md px-3 py-2 text-[12.5px] transition-colors ${
                              childActive
                                ? "bg-blue-50 font-semibold text-blue-800 dark:bg-blue-500/15 dark:text-blue-300"
                                : "text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/[0.06] dark:hover:text-white"
                            }`}
                          >
                            {child.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            {filteredNavigation.length === 0 && (
              <div className="px-3 py-8 text-center">
                <Search className="mx-auto h-5 w-5 text-slate-300" />
                <p className="mt-3 text-xs text-slate-500">
                  No matching pages found.
                </p>
              </div>
            )}
          </div>
        </nav>
      </ScrollArea>

      {/* Sidebar bottom */}
      <div className="border-t border-slate-200 px-5 py-4 dark:border-white/10">
        <a
          href="https://github.com/ecocee/kode-go"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between text-xs text-slate-500 transition-colors hover:text-blue-700 dark:text-slate-400 dark:hover:text-blue-400"
        >
          <span>Contribute on GitHub</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
