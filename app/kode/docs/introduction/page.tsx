import { Metadata } from 'next';
import { CodeBlock } from '@/components/docs/code-block';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Shield, Code2, Gauge, Globe, Package } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Introduction | Kode Documentation',
  description: 'Learn about the Kode programming language and its features.',
};

export default function IntroductionPage() {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent">
            Introduction to Kode
          </h1>
          <Badge variant="outline" className="border-violet-400 text-violet-600 dark:text-violet-400">v0.3.3-dev</Badge>
        </div>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          A modern programming language designed for clarity, performance, and developer productivity.
        </p>
      </div>

      <div className="bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-950/50 dark:to-purple-950/50 rounded-xl p-6 border border-violet-200 dark:border-violet-800">
        <h2 className="text-2xl font-semibold mb-3 text-violet-900 dark:text-violet-100">What is Kode?</h2>
        <p className="text-slate-700 dark:text-slate-300">
          Kode is a statically-typed programming language that compiles to bytecode and runs on a virtual machine.
          It combines the best features of modern languages while maintaining simplicity and performance.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-slate-100">Key Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="border-violet-200 dark:border-violet-800 bg-white/50 dark:bg-slate-900/50 hover:shadow-lg hover:shadow-violet-500/20 transition-all">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Static Typing</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Catch errors at compile time with strong type checking</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-violet-200 dark:border-violet-800 bg-white/50 dark:bg-slate-900/50 hover:shadow-lg hover:shadow-violet-500/20 transition-all">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Type Inference</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Let the compiler figure out types when possible</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-violet-200 dark:border-violet-800 bg-white/50 dark:bg-slate-900/50 hover:shadow-lg hover:shadow-violet-500/20 transition-all">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Clean Syntax</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Readable code that gets out of your way</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-violet-200 dark:border-violet-800 bg-white/50 dark:bg-slate-900/50 hover:shadow-lg hover:shadow-violet-500/20 transition-all">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg">
                  <Gauge className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Fast Compilation</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Quick compile times for rapid development</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-violet-200 dark:border-violet-800 bg-white/50 dark:bg-slate-900/50 hover:shadow-lg hover:shadow-violet-500/20 transition-all">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Cross-Platform</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Run your code anywhere with the Kode VM</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-violet-200 dark:border-violet-800 bg-white/50 dark:bg-slate-900/50 hover:shadow-lg hover:shadow-violet-500/20 transition-all">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg">
                  <Package className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Rich Standard Library</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Batteries included for common tasks</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Hello World</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          Here's the traditional "Hello World" program in Kode:
        </p>

        <CodeBlock language="kode">
{`fn main() {
    print("Hello, Kode!")
}`}
        </CodeBlock>

        <p className="text-slate-600 dark:text-slate-400 mb-4">
          Save this code to a file called <code className="px-2 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded">hello.kode</code> and run it:
        </p>

        <CodeBlock language="bash">
{`kode hello.kode`}
        </CodeBlock>
      </div>
    </div>
  );
}