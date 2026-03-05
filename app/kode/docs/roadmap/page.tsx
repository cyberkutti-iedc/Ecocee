import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Circle, Rocket } from 'lucide-react';

export default function RoadmapPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
          Development Roadmap
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Planned features and milestones for Kode language.
        </p>
      </div>

      <Card className="border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-500" />
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">v0.3.3 (Current)</h2>
            <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Released</Badge>
          </div>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
              <span>Core language features (variables, functions, closures)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
              <span>Control flow (if/else, for, while, match)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
              <span>Arrays and basic struct support</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
              <span>40+ built-in functions</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
              <span>Error handling (try/catch, defer)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
              <span>REPL and CLI interpreter</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
              <span>Bytecode compiler and VM</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="border-violet-200 dark:border-violet-800 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Rocket className="w-8 h-8 text-violet-500" />
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">v0.4.0 (Q2 2026)</h2>
            <Badge className="bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400">In Progress</Badge>
          </div>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400">
            <li className="flex items-start gap-2">
              <Circle className="w-5 h-5 text-violet-500 mt-0.5" />
              <span><strong>Module System:</strong> import/export with package resolution</span>
            </li>
            <li className="flex items-start gap-2">
              <Circle className="w-5 h-5 text-violet-500 mt-0.5" />
              <span><strong>Enums:</strong> Full enum support with pattern matching</span>
            </li>
            <li className="flex items-start gap-2">
              <Circle className="w-5 h-5 text-violet-500 mt-0.5" />
              <span><strong>Struct Methods:</strong> Enhanced struct implementation with <code className="px-1.5 py-0.5 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded text-sm">impl</code> blocks</span>
            </li>
            <li className="flex items-start gap-2">
              <Circle className="w-5 h-5 text-violet-500 mt-0.5" />
              <span><strong>Garbage Collection:</strong> Mark-and-sweep GC replacing reference counting</span>
            </li>
            <li className="flex items-start gap-2">
              <Circle className="w-5 h-5 text-violet-500 mt-0.5" />
              <span><strong>JSON Support:</strong> Built-in JSON parsing and serialization</span>
            </li>
            <li className="flex items-start gap-2">
              <Circle className="w-5 h-5 text-violet-500 mt-0.5" />
              <span><strong>Better Error Messages:</strong> Improved error reporting with line numbers and context</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="border-blue-200 dark:border-blue-800">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Circle className="w-8 h-8 text-blue-500" />
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">v0.5.0 (Q3 2026)</h2>
            <Badge variant="outline" className="border-blue-300 dark:border-blue-700">Planned</Badge>
          </div>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400">
            <li className="flex items-start gap-2">
              <Circle className="w-5 h-5 text-blue-500 mt-0.5" />
              <span><strong>Generics:</strong> Generic functions and structs</span>
            </li>
            <li className="flex items-start gap-2">
              <Circle className="w-5 h-5 text-blue-500 mt-0.5" />
              <span><strong>Traits/Interfaces:</strong> Define shared behavior across types</span>
            </li>
            <li className="flex items-start gap-2">
              <Circle className="w-5 h-5 text-blue-500 mt-0.5" />
              <span><strong>Advanced Pattern Matching:</strong> Guards, destructuring, nested patterns</span>
            </li>
            <li className="flex items-start gap-2">
              <Circle className="w-5 h-5 text-blue-500 mt-0.5" />
              <span><strong>HTTP Client:</strong> Native HTTP/HTTPS support</span>
            </li>
            <li className="flex items-start gap-2">
              <Circle className="w-5 h-5 text-blue-500 mt-0.5" />
              <span><strong>Standard Library:</strong> Collections (HashMap, Set), DateTime, Regex</span>
            </li>
            <li className="flex items-start gap-2">
              <Circle className="w-5 h-5 text-blue-500 mt-0.5" />
              <span><strong>Package Manager:</strong> <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-sm">kode pkg</code> for dependency management</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="border-purple-200 dark:border-purple-800">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Circle className="w-8 h-8 text-purple-500" />
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">v0.6.0 (Q4 2026)</h2>
            <Badge variant="outline" className="border-purple-300 dark:border-purple-700">Planned</Badge>
          </div>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400">
            <li className="flex items-start gap-2">
              <Circle className="w-5 h-5 text-purple-500 mt-0.5" />
              <span><strong>Language Server Protocol (LSP):</strong> VS Code extension with IntelliSense</span>
            </li>
            <li className="flex items-start gap-2">
              <Circle className="w-5 h-5 text-purple-500 mt-0.5" />
              <span><strong>Debugger:</strong> Step-through debugging with breakpoints</span>
            </li>
            <li className="flex items-start gap-2">
              <Circle className="w-5 h-5 text-purple-500 mt-0.5" />
              <span><strong>Async/Await:</strong> Asynchronous programming primitives</span>
            </li>
            <li className="flex items-start gap-2">
              <Circle className="w-5 h-5 text-purple-500 mt-0.5" />
              <span><strong>FFI (Foreign Function Interface):</strong> Call C/C++ libraries</span>
            </li>
            <li className="flex items-start gap-2">
              <Circle className="w-5 h-5 text-purple-500 mt-0.5" />
              <span><strong>JIT Compilation:</strong> Hot path optimization for performance</span>
            </li>
            <li className="flex items-start gap-2">
              <Circle className="w-5 h-5 text-purple-500 mt-0.5" />
              <span><strong>Testing Framework:</strong> Built-in unit testing with <code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-sm">kode test</code></span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="border-slate-200 dark:border-slate-800">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Future Research</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Long-term goals beyond v1.0:
          </p>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400">
            <li className="flex items-start gap-2">
              <Circle className="w-5 h-5 text-slate-400 mt-0.5" />
              <span><strong>WebAssembly Target:</strong> Compile Kode to WASM for browser execution</span>
            </li>
            <li className="flex items-start gap-2">
              <Circle className="w-5 h-5 text-slate-400 mt-0.5" />
              <span><strong>Actor Model:</strong> Concurrent programming with message passing</span>
            </li>
            <li className="flex items-start gap-2">
              <Circle className="w-5 h-5 text-slate-400 mt-0.5" />
              <span><strong>Static Analysis:</strong> Linter and static checker for code quality</span>
            </li>
            <li className="flex items-start gap-2">
              <Circle className="w-5 h-5 text-slate-400 mt-0.5" />
              <span><strong>LLVM Backend:</strong> Native code generation for maximum performance</span>
            </li>
            <li className="flex items-start gap-2">
              <Circle className="w-5 h-5 text-slate-400 mt-0.5" />
              <span><strong>Self-Hosting:</strong> Bootstrap the Kode compiler in Kode itself</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="border-violet-200 dark:border-violet-800 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-3 text-slate-900 dark:text-slate-100">Contributing</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Kode is an open-source project. We welcome contributions! Check out the GitHub repository to get involved.
          </p>
          <div className="flex gap-3">
            <Badge className="bg-gradient-to-r from-violet-500 to-purple-500">Open Source</Badge>
            <Badge className="bg-gradient-to-r from-violet-500 to-purple-500">Community Driven</Badge>
            <Badge className="bg-gradient-to-r from-violet-500 to-purple-500">MIT License</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
