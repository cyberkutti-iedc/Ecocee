import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

export default function FeatureStatusPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
          Feature Status
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Current implementation status of Kode language features (v0.3.3).
        </p>
      </div>

      <div className="flex gap-6 flex-wrap">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-green-500" />
          <span className="text-sm text-slate-600 dark:text-slate-400">Fully Implemented</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-yellow-500" />
          <span className="text-sm text-slate-600 dark:text-slate-400">Partial / In Progress</span>
        </div>
        <div className="flex items-center gap-2">
          <Circle className="w-5 h-5 text-slate-400" />
          <span className="text-sm text-slate-600 dark:text-slate-400">Planned</span>
        </div>
      </div>

      <Card className="border-violet-200 dark:border-violet-800">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Core Language</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-700 dark:text-slate-300">Variables & Constants</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Complete</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-700 dark:text-slate-300">Functions</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Complete</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-700 dark:text-slate-300">Closures</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Complete</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-700 dark:text-slate-300">Control Flow (if/else, loops)</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Complete</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-700 dark:text-slate-300">Arrays</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Complete</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-700 dark:text-slate-300">Structs</span>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-yellow-500" />
                <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">Partial</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-700 dark:text-slate-300">Enums</span>
              <div className="flex items-center gap-2">
                <Circle className="w-5 h-5 text-slate-400" />
                <Badge variant="outline" className="border-slate-300 dark:border-slate-700">Planned</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-violet-200 dark:border-violet-800">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Type System</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-700 dark:text-slate-300">Primitive Types (int, float, string, bool)</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Complete</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-700 dark:text-slate-300">Type Annotations</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Complete</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-700 dark:text-slate-300">Type Inference</span>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-yellow-500" />
                <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">Partial</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-700 dark:text-slate-300">Generics</span>
              <div className="flex items-center gap-2">
                <Circle className="w-5 h-5 text-slate-400" />
                <Badge variant="outline" className="border-slate-300 dark:border-slate-700">Planned</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-violet-200 dark:border-violet-800">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Advanced Features</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-700 dark:text-slate-300">Pattern Matching</span>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-yellow-500" />
                <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">Partial</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-700 dark:text-slate-300">Error Handling (try/catch)</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Complete</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-700 dark:text-slate-300">Defer Statement</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Complete</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-700 dark:text-slate-300">Module System</span>
              <div className="flex items-center gap-2">
                <Circle className="w-5 h-5 text-slate-400" />
                <Badge variant="outline" className="border-slate-300 dark:border-slate-700">Planned</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-700 dark:text-slate-300">Traits/Interfaces</span>
              <div className="flex items-center gap-2">
                <Circle className="w-5 h-5 text-slate-400" />
                <Badge variant="outline" className="border-slate-300 dark:border-slate-700">Planned</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-violet-200 dark:border-violet-800">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Standard Library</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-700 dark:text-slate-300">Built-in Functions (40+)</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Complete</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-700 dark:text-slate-300">String Manipulation</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Complete</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-700 dark:text-slate-300">Math Functions</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Complete</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-700 dark:text-slate-300">File I/O</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Complete</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-700 dark:text-slate-300">HTTP/Networking</span>
              <div className="flex items-center gap-2">
                <Circle className="w-5 h-5 text-slate-400" />
                <Badge variant="outline" className="border-slate-300 dark:border-slate-700">Planned</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-700 dark:text-slate-300">JSON Support</span>
              <div className="flex items-center gap-2">
                <Circle className="w-5 h-5 text-slate-400" />
                <Badge variant="outline" className="border-slate-300 dark:border-slate-700">Planned</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-violet-200 dark:border-violet-800">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Tooling</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-700 dark:text-slate-300">CLI Interpreter</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Complete</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-700 dark:text-slate-300">REPL</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Complete</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-700 dark:text-slate-300">Bytecode Compiler</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Complete</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-700 dark:text-slate-300">Package Manager</span>
              <div className="flex items-center gap-2">
                <Circle className="w-5 h-5 text-slate-400" />
                <Badge variant="outline" className="border-slate-300 dark:border-slate-700">Planned</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-700 dark:text-slate-300">Language Server (LSP)</span>
              <div className="flex items-center gap-2">
                <Circle className="w-5 h-5 text-slate-400" />
                <Badge variant="outline" className="border-slate-300 dark:border-slate-700">Planned</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
