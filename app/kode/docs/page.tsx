import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Github, BookOpen, Code2, Rocket, Terminal } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Kode Documentation - Modern Systems Programming Language',
  description: 'Official documentation for Kode - a modern, statically-typed systems programming language with stack-based VM execution, complete module system, and production-ready server stdlib.',
};

export default function DocsPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <Badge variant="outline" className="border-violet-400 text-violet-600 dark:text-violet-400 mb-4">
          v0.3.3 • March 2026
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400 bg-clip-text text-transparent">
          Kode Documentation
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          A modern, statically-typed systems programming language designed for performance, safety, and productivity. 
          Features stack-based VM execution, complete module system, and concurrency-first design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link href="/kode/docs/quick-start">
            <Button size="lg" className="bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white shadow-lg shadow-violet-500/50">
              <Rocket className="w-4 h-4 mr-2" />
              Quick Start
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <a href="https://github.com/ecocee/kode-go" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-violet-300 dark:border-violet-700 hover:bg-violet-50 dark:hover:bg-violet-950/30">
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
            </Button>
          </a>
        </div>
      </div>

      {/* Key Features */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">What Makes Kode Special?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="border-violet-200 dark:border-violet-800 bg-gradient-to-br from-violet-50/50 to-purple-50/50 dark:from-violet-950/20 dark:to-purple-950/20">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">⚡ Multiple Backends</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Stack-based VM execution for portability, optional Go code generation for native performance
              </p>
            </CardContent>
          </Card>
          <Card className="border-violet-200 dark:border-violet-800 bg-gradient-to-br from-violet-50/50 to-purple-50/50 dark:from-violet-950/20 dark:to-purple-950/20">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">🎯 Modern Type System</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Static typing with full inference, generics, traits/interfaces, and pattern matching
              </p>
            </CardContent>
          </Card>
          <Card className="border-violet-200 dark:border-violet-800 bg-gradient-to-br from-violet-50/50 to-purple-50/50 dark:from-violet-950/20 dark:to-purple-950/20">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">🚀 Concurrency-First</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Lightweight goroutines, channels, select statements, and built-in synchronization primitives
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-slate-100">Start Learning</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/kode/docs/installation">
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
                      Quick install via Go or build from source. Requires Go 1.18+.
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-violet-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/kode/docs/language-syntax">
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
                      Complete syntax reference: operators, control flow, functions, and more.
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-violet-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/kode/docs/module-system">
            <Card className="group border-violet-200 dark:border-violet-800 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 hover:shadow-xl hover:shadow-violet-500/20 transition-all h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-slate-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      Module System
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Powerful imports/exports system for code organization and reusability.
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-violet-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/kode/docs/cli-commands">
            <Card className="group border-violet-200 dark:border-violet-800 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 hover:shadow-xl hover:shadow-violet-500/20 transition-all h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform">
                    <Terminal className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-slate-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      CLI Commands
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Run, build, type-check, format, and manage Kode projects efficiently.
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-violet-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/kode/docs/server-module">
            <Card className="group border-violet-200 dark:border-violet-800 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 hover:shadow-xl hover:shadow-violet-500/20 transition-all h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-slate-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      Server Module
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Production-ready HTTP server stdlib backed by Go's net/http.
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-violet-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/kode/docs/examples">
            <Card className="group border-violet-200 dark:border-violet-800 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 hover:shadow-xl hover:shadow-violet-500/20 transition-all h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-slate-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      Code Examples
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Practical examples: recursion, closures, pattern matching, and concurrency.
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-violet-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      {/* Code Examples */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Quick Examples</h2>
        
        {/* Hello World */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2 text-slate-800 dark:text-slate-200">Hello Kode</h3>
          <div className="rounded-lg border-2 border-violet-300 dark:border-violet-700 overflow-hidden">
            <div className="bg-gradient-to-r from-violet-500 to-purple-500 px-4 py-2">
              <Badge variant="secondary" className="bg-white/20 text-white border-0 font-mono text-xs">
                hello.kode
              </Badge>
            </div>
            <div className="bg-slate-950 p-6 font-mono text-sm">
              <pre className="text-gray-100">
{`fn main() {
    let name = "Kode"
    let version = 3.3
    
    print("Hello from \${name} v\${version}!")
}

// Run with: kode hello.kode`}
              </pre>
            </div>
          </div>
        </div>

        {/* HTTP Server Example */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2 text-slate-800 dark:text-slate-200">Production HTTP Server</h3>
          <div className="rounded-lg border-2 border-violet-300 dark:border-violet-700 overflow-hidden">
            <div className="bg-gradient-to-r from-violet-500 to-purple-500 px-4 py-2">
              <Badge variant="secondary" className="bg-white/20 text-white border-0 font-mono text-xs">
                server.kode
              </Badge>
            </div>
            <div className="bg-slate-950 p-6 font-mono text-sm">
              <pre className="text-gray-100">
{`import { newServer, start, get, post, okJSON } from "server"

fn main() {
    let srv = newServer(8080)
    
    get(srv, "/api/hello", fn(req) {
        return okJSON("{\\"message\\": \\"Hello, World!\\"}")
    })
    
    post(srv, "/api/users", fn(req) {
        let data = body(req)
        // Process user data
        return created("{\\"id\\": 1, \\"status\\": \\"created\\"}")
    })
    
    start(srv)  // Server running on :8080
}`}
              </pre>
            </div>
          </div>
        </div>

        {/* Concurrency Example */}
        <div>
          <h3 className="text-lg font-medium mb-2 text-slate-800 dark:text-slate-200">Concurrency with Channels</h3>
          <div className="rounded-lg border-2 border-violet-300 dark:border-violet-700 overflow-hidden">
            <div className="bg-gradient-to-r from-violet-500 to-purple-500 px-4 py-2">
              <Badge variant="secondary" className="bg-white/20 text-white border-0 font-mono text-xs">
                concurrent.kode
              </Badge>
            </div>
            <div className="bg-slate-950 p-6 font-mono text-sm">
              <pre className="text-gray-100">
{`fn main() {
    let messages = make(Channel<string>)
    
    // Spawn lightweight threads
    spawn {
        send(messages, "Hello from worker 1")
    }
    
    spawn {
        send(messages, "Hello from worker 2")
    }
    
    // Receive messages
    print(receive(messages))
    print(receive(messages))
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Status */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Feature Status (v0.3.3)</h2>
        <Card className="border-violet-200 dark:border-violet-800">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-green-600 dark:text-green-400 mb-3">✅ Fully Implemented</h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li>✅ Complete type system with inference</li>
                  <li>✅ All operators (arithmetic, bitwise, logical)</li>
                  <li>✅ Structs, enums, traits, and generics</li>
                  <li>✅ Pattern matching & destructuring</li>
                  <li>✅ Module system with imports/exports</li>
                  <li>✅ Concurrency primitives (spawn, channels)</li>
                  <li>✅ Bytecode VM + Go code generation</li>
                  <li>✅ Production server stdlib</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-amber-600 dark:text-amber-400 mb-3">⏳ In Development</h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li>⏳ File I/O operations</li>
                  <li>⏳ String manipulation utilities</li>
                  <li>⏳ Math library functions</li>
                  <li>⏳ Package manager (Kodepm)</li>
                </ul>
                <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3 mt-6">🔮 Planned</h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li>🔮 Async/await syntax sugar</li>
                  <li>🔮 LLVM backend option</li>
                  <li>🔮 WebAssembly target</li>
                  <li>🔮 FFI (Foreign Function Interface)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}