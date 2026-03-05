"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Github, Sun, Moon, Search, ChevronDown, ChevronRight } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const navigation = [
  { name: 'Introduction', href: '/docs/introduction' },
  { name: 'Installation', href: '/docs/installation' },
  { name: 'Quick Start', href: '/docs/quick-start' },
  { name: 'CLI Commands', href: '/docs/cli-commands' },
  {
    name: 'Language Syntax',
    href: '/docs/language-syntax',
    children: [
      { name: 'Variables', href: '/docs/variables' },
      { name: 'Constants', href: '/docs/constants' },
      { name: 'Data Types', href: '/docs/types' },
      { name: 'Operators', href: '/docs/operators' },
      { name: 'Control Flow', href: '/docs/control-flow' },
      { name: 'Functions', href: '/docs/functions' },
      { name: 'Closures', href: '/docs/closures' },
      { name: 'Arrays', href: '/docs/arrays' },
      { name: 'Structs', href: '/docs/structs' },
      { name: 'Enums', href: '/docs/enums' },
      { name: 'Pattern Matching', href: '/docs/pattern-matching' },
      { name: 'Error Handling', href: '/docs/error-handling' },
      { name: 'Modules', href: '/docs/modules' },
    ]
  },
  { name: 'Built-in Functions', href: '/docs/built-ins' },
  { name: 'Examples', href: '/docs/examples' },
  { name: 'Feature Status', href: '/docs/feature-status' },
  { name: 'Architecture', href: '/docs/architecture' },
  { name: 'Roadmap', href: '/docs/roadmap' },
];

export function DocsLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>(['Language Syntax']);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const toggleSection = (name: string) => {
    setExpandedSections(prev => 
      prev.includes(name) 
        ? prev.filter(s => s !== name)
        : [...prev, name]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-violet-200 dark:border-violet-900/50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-950/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>

              <Link href="/docs" className="flex items-center gap-3 font-bold text-xl group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition"></div>
                  <Image
                    src="/kode/logo.png"
                    alt="Kode Logo"
                    width={32}
                    height={32}
                    className="relative rounded-lg"
                  />
                </div>
                <span className="bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent">Kode</span>
                <Badge variant="outline" className="ml-2 border-violet-300 dark:border-violet-700 text-violet-700 dark:text-violet-300">v0.3.3</Badge>
              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/docs"
                className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              >
                Docs
              </Link>
              <Link
                href="/docs/examples"
                className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              >
                Examples
              </Link>
              <a
                href="https://github.com/cyberkutti-iedc/Ecocee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors flex items-center gap-1"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-violet-600 dark:text-violet-400 hover:bg-violet-100 dark:hover:bg-violet-900/30"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4">
        <div className="flex">
          {/* Sidebar */}
          <aside className={`
            fixed inset-y-0 left-0 z-40 w-72 transform bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-r border-violet-200 dark:border-violet-900/50 transition-transform duration-200 ease-in-out md:translate-x-0 md:static md:inset-0 shadow-xl md:shadow-none
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          `}>
            <div className="flex h-full flex-col">
              <div className="flex h-16 items-center border-b border-violet-200 dark:border-violet-900/50 px-4 md:hidden">
                <Link href="/docs" className="flex items-center gap-2 font-bold">
                  <Image
                    src="/kode/logo.png"
                    alt="Kode Logo"
                    width={24}
                    height={24}
                    className="rounded"
                  />
                  <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Kode</span>
                </Link>
              </div>

              <ScrollArea className="flex-1 px-4 py-6">
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-violet-400" />
                    <Input
                      placeholder="Search docs..."
                      className="pl-9 border-violet-200 dark:border-violet-800 focus:border-violet-500 dark:focus:border-violet-500 bg-white dark:bg-slate-900"
                    />
                  </div>
                </div>

                <nav className="space-y-2">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <div className="flex items-center gap-2">
                        {'children' in item && item.children ? (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-auto p-0 hover:bg-transparent"
                            onClick={() => toggleSection(item.name)}
                          >
                            {expandedSections.includes(item.name) ? (
                              <ChevronDown className="h-4 w-4 text-violet-500" />
                            ) : (
                              <ChevronRight className="h-4 w-4 text-violet-500" />
                            )}
                          </Button>
                        ) : (
                          <div className="w-4" />
                        )}
                        <Link
                          href={item.href}
                          className={`
                            flex-1 px-3 py-2 text-sm rounded-lg transition-all font-medium
                            ${pathname === item.href
                              ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg shadow-violet-500/50'
                              : 'text-slate-700 dark:text-slate-300 hover:bg-violet-100 dark:hover:bg-violet-900/30 hover:text-violet-700 dark:hover:text-violet-300'
                            }
                          `}
                          onClick={() => setSidebarOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </div>
                      {'children' in item && item.children && expandedSections.includes(item.name) && (
                        <div className="ml-6 mt-2 space-y-1 border-l-2 border-violet-200 dark:border-violet-800 pl-4">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className={`
                                block px-3 py-1.5 text-sm rounded-md transition-all
                                ${pathname === child.href
                                  ? 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 font-medium'
                                  : 'text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/20'
                                }
                              `}
                              onClick={() => setSidebarOpen(false)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </ScrollArea>
            </div>
          </aside>

          {/* Overlay for mobile */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 z-30 bg-slate-900/60 backdrop-blur-sm md:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Main content */}
          <main className="flex-1 min-w-0 md:ml-0">
            <div className="px-4 py-8 md:px-8 lg:px-12">
              <div className="max-w-5xl mx-auto">
                <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-violet-200 dark:border-violet-900/50 p-8 md:p-12">
                  {children}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function TableOfContents() {
  return null; // Removed for cleaner layout
}