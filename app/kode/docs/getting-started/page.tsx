import { Metadata } from 'next';
import { CodeBlock } from '@/components/docs/code-block';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Getting Started | Kode Documentation',
  description: 'Learn the basics of Kode and set up your development environment.',
};

export default function GettingStartedPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
          Getting Started
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Welcome to Kode! This guide will help you get started with the Kode programming language.
        </p>
      </div>

      <Card className="border-violet-200 dark:border-violet-800 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-3 text-slate-900 dark:text-slate-100">What is Kode?</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Kode is a modern, statically-typed programming language designed for clarity and performance. It features:
          </p>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400">
            <li className="flex items-start gap-2">
              <span className="text-violet-500 mt-1">•</span>
              <span><strong>Static typing</strong> with automatic type inference</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-500 mt-1">•</span>
              <span><strong>Clean syntax</strong> inspired by modern languages</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-500 mt-1">•</span>
              <span><strong>Fast compilation</strong> to bytecode</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-500 mt-1">•</span>
              <span><strong>Rich standard library</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-500 mt-1">•</span>
              <span><strong>Cross-platform</strong> support</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Installation</h2>
        
        <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">Prerequisites</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          Go 1.21+ (for building from source)
        </p>

        <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">Build from Source</h3>
        <CodeBlock language="bash">
{`# Clone the repository
git clone https://github.com/cyberkutti-iedc/Ecocee.git
cd Ecocee

# Build the compiler
go build -o kode ./cmd/kode`}
        </CodeBlock>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">Verify Installation</h3>
        <CodeBlock language="bash">
{`# Check version
./kode version

# Should output:
# Kode v0.3.3
# Platform: windows/amd64`}
        </CodeBlock>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Your First Program</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          Create a file called <code className="px-2 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded">hello.kode</code> with the following content:
        </p>
        <CodeBlock language="kode">
{`fn main() {
    print("Hello, Kode!")
}`}
        </CodeBlock>

        <p className="text-slate-600 dark:text-slate-400 mt-4 mb-4">Run it with:</p>
        <CodeBlock language="bash">
{`./kode hello.kode`}
        </CodeBlock>

        <p className="text-slate-600 dark:text-slate-400 mt-4">
          You should see: <code className="px-2 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded">Hello, Kode!</code>
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Next Steps</h2>
        <ul className="space-y-2 text-slate-600 dark:text-slate-400">
          <li className="flex items-start gap-2">
            <span className="text-violet-500 mt-1">•</span>
            <span>Learn about <a href="/kode/docs/language-syntax" className="text-violet-600 dark:text-violet-400 hover:underline">language syntax</a></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-violet-500 mt-1">•</span>
            <span>Explore <a href="/kode/docs/functions" className="text-violet-600 dark:text-violet-400 hover:underline">functions</a></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-violet-500 mt-1">•</span>
            <span>Check out the <a href="/kode/docs/built-ins" className="text-violet-600 dark:text-violet-400 hover:underline">built-in functions</a></span>
          </li>
        </ul>
      </div>
    </div>
  );
}