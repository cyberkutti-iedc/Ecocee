import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Github, BookOpen, Code2, Rocket, Terminal } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Kode Documentation',
  description: 'Official documentation for the Kode programming language',
};

export default function DocsPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <Badge variant="outline" className="border-violet-400 text-violet-600 dark:text-violet-400 mb-4">
          v0.3.3-dev • March 2026
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400 bg-clip-text text-transparent">
          Kode Documentation
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          A modern, statically-typed programming language written in Go. Built for clarity, performance, and rapid development.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link href="/docs/quick-start">
            <Button size="lg" className="bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white shadow-lg shadow-violet-500/50">
              <Rocket className="w-4 h-4 mr-2" />
              Quick Start
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <a href="https://github.com/cyberkutti-iedc/Ecocee" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-violet-300 dark:border-violet-700 hover:bg-violet-50 dark:hover:bg-violet-950/30">
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
            </Button>
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-slate-100">Start Learning</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/docs/installation">
            <Card className="group border-violet-200 dark:border-violet-800 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 hover:shadow-xl hover:shadow-violet-500/20 transition-all h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform">
                    <Terminal className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-slate-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      Installation
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Build Kode from source and verify your installation. Requires Go 1.21+.
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-violet-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/docs/language-syntax">
            <Card className="group border-violet-200 dark:border-violet-800 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 hover:shadow-xl hover:shadow-violet-500/20 transition-all h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-slate-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      Language Syntax
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Explore Kode's clean syntax, types, operators, and language features.
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-violet-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/docs/built-ins">
            <Card className="group border-violet-200 dark:border-violet-800 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 hover:shadow-xl hover:shadow-violet-500/20 transition-all h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-slate-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      Built-in Functions
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Discover 40+ built-in functions for output, math, strings, arrays, and file I/O.
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-violet-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/docs/examples">
            <Card className="group border-violet-200 dark:border-violet-800 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 hover:shadow-xl hover:shadow-violet-500/20 transition-all h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-slate-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      Examples
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Working examples from Fibonacci to closures, pattern matching, and modules.
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-violet-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      {/* Code Example */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Hello Kode</h2>
        <div className="rounded-lg border-2 border-violet-300 dark:border-violet-700 overflow-hidden">
          <div className="bg-gradient-to-r from-violet-500 to-purple-500 px-4 py-2">
            <Badge variant="secondary" className="bg-white/20 text-white border-0 font-mono text-xs">
              hello.kode
            </Badge>
          </div>
          <div className="bg-slate-950 p-6 font-mono text-sm">
            <pre className="text-gray-100">
{`func main() {
    let name = "Kode"
    let version = 3
    
    print("Hello from \${name} v\${version}!")
}

// Run with: kode hello.kode`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}