"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Github, Sun, Moon, Search } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const navigation = [
  { name: 'Introduction', href: '/docs/introduction' },
  { name: 'Getting Started', href: '/docs/getting-started' },
  { name: 'Installation', href: '/docs/installation' },
  { name: 'Hello World', href: '/docs/hello-world' },
  { name: 'Language Syntax', href: '/docs/language-syntax' },
  { name: 'Functions', href: '/docs/functions' },
  { name: 'Modules', href: '/docs/modules' },
  { name: 'Standard Library', href: '/docs/standard-library' },
  { name: 'Compiler', href: '/docs/compiler' },
  { name: 'Bytecode', href: '/docs/bytecode' },
  { name: 'Virtual Machine', href: '/docs/virtual-machine' },
  { name: 'Contributing', href: '/docs/contributing' },
  { name: 'Roadmap', href: '/docs/roadmap' },
];

export function DocsLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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

              <Link href="/docs" className="flex items-center gap-2 font-bold text-xl">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
                  K
                </div>
                Kode
              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/docs"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Docs
              </Link>
              <a
                href="https://github.com/cyberkutti-iedc/Ecocee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                GitHub
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
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
            fixed inset-y-0 left-0 z-40 w-64 transform bg-background border-r transition-transform duration-200 ease-in-out md:translate-x-0 md:static md:inset-0
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          `}>
            <div className="flex h-full flex-col">
              <div className="flex h-16 items-center border-b px-4 md:hidden">
                <Link href="/docs" className="flex items-center gap-2 font-bold">
                  <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-primary-foreground font-bold text-sm">
                    K
                  </div>
                  Kode
                </Link>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                <div className="mb-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search docs..."
                      className="pl-9"
                    />
                  </div>
                </div>

                <nav className="space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`
                        block px-3 py-2 text-sm rounded-md transition-colors
                        ${pathname === item.href
                          ? 'bg-primary text-primary-foreground font-medium'
                          : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                        }
                      `}
                      onClick={() => setSidebarOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          {/* Overlay for mobile */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm md:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Main content */}
          <main className="flex-1 min-w-0 md:ml-0">
            <div className="px-4 py-8 md:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  {/* Content */}
                  <div className="lg:col-span-3">
                    {children}
                  </div>

                  {/* Table of Contents */}
                  <div className="lg:col-span-1">
                    <div className="sticky top-24">
                      <TableOfContents />
                    </div>
                  </div>
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
  // This would normally extract headings from the current page content
  // For now, we'll show a placeholder
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
        On this page
      </h3>
      <nav className="space-y-2">
        <div className="text-sm">
          <div className="py-1 px-2 rounded hover:bg-accent cursor-pointer">
            Getting Started
          </div>
          <div className="py-1 px-4 text-muted-foreground hover:text-foreground cursor-pointer">
            Installation
          </div>
          <div className="py-1 px-4 text-muted-foreground hover:text-foreground cursor-pointer">
            Hello World
          </div>
        </div>
      </nav>
    </div>
  );
}
