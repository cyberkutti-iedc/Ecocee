"use client";
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Terminal, Code, Play, FileCode, Book, Zap, Github, Download, ExternalLink } from 'lucide-react';

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(`fn app() {
    print "Hello, Kode!";
}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
     <Head>
        <title>Kode | Modern Programming Made Simple | Ecocee</title>
        <meta
          name="description"
          content="Kode is a lightweight interpreted language with clean C-like syntax, dynamic typing, and functional capabilities. Explore installation, key features, code examples, documentation, and roadmap."
        />
        <meta
          name="keywords"
          content="Kode, programming language, embedded systems, Ecocee, interpreted language, IoT coding, C-like syntax, functional programming"
        />
      </Head>
     <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Terminal className="text-purple-600 h-6 w-6" />
            <span className="font-bold text-xl text-purple-800">Kode</span>
            <span className="text-xs bg-purple-100 text-purple-700 rounded-full px-2 py-0.5 ml-2">v0.1.0</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-700 hover:text-purple-700 transition">Features</Link>
            <Link href="#docs" className="text-gray-700 hover:text-purple-700 transition">Docs</Link>
            <Link href="#examples" className="text-gray-700 hover:text-purple-700 transition">Examples</Link>
            <Link href="#roadmap" className="text-gray-700 hover:text-purple-700 transition">Roadmap</Link>
          </nav>
          <a href="https://github.com/cyberkutti-iedc/kode" className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-sm">
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Modern Programming <br />
                <span className="text-purple-300">Made Simple</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-purple-100 max-w-lg">
                Kode is a lightweight interpreted language with clean C-like syntax,
                dynamic typing, and functional capabilities.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#installation" className="bg-white text-purple-800 hover:bg-purple-50 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition shadow-md">
                  <Download className="h-5 w-5" />
                  Install Kode
                </a>
                <a href="#docs" className="bg-purple-700 bg-opacity-30 hover:bg-opacity-40 text-white border border-purple-500 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition">
                  <Book className="h-5 w-5" />
                  Documentation
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
                <div className="flex items-center bg-gray-800 px-4 py-2 border-b border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="ml-4 text-sm text-gray-400">hello.kode</span>
                  <button 
                    onClick={copyCode}
                    className="ml-auto text-gray-400 hover:text-white transition"
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <div className="p-6 text-purple-300 font-mono text-sm md:text-base">
                  <pre>
{`fn app() {
    print "Hello, Kode!";
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-purple-900">Key Features</h2>
          <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
            Designed with simplicity and readability in mind, Kode brings modern programming concepts in an accessible format.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Terminal />}
              title="Familiar Syntax"
              description="C-style syntax that feels natural to most programmers from any background."
            />
            <FeatureCard
              icon={<Code />}
              title="Dynamic Typing"
              description="Flexible variable handling without strict type declarations for rapid development."
            />
            <FeatureCard
              icon={<FileCode />}
              title="First-Class Functions"
              description="Support for closures and function passing for functional programming patterns."
            />
            <FeatureCard
              icon={<Zap />}
              title="Bytecode Compilation"
              description="Compile to .kdc bytecode for faster execution and distribution."
            />
            <FeatureCard
              icon={<Play />}
              title="Interactive REPL"
              description="Experiment with code in real-time with a built-in interactive shell."
            />
            <FeatureCard
              icon={<Book />}
              title="Module System"
              description="Import and use code from other files with a simple module system."
            />
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section id="examples" className="py-16 md:py-24 px-4 bg-purple-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-purple-900">Code Examples</h2>
          <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
            See how clean and intuitive Kode syntax is with these examples.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <CodeExample 
              title="Factorial Function" 
              code={`fn factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

fn main() {
    print factorial(5);  // 120
}`} 
            />
            <CodeExample 
              title="Closures" 
              code={`fn createCounter() {
    let count = 0;
    return fn() {
        count = count + 1;
        return count;
    };
}

let counter = createCounter();
print counter();  // 1
print counter();  // 2`} 
            />
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="installation" className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-purple-900">Get Started With Kode</h2>
          <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
            Follow these steps to install and run your first Kode program.
          </p>

          <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden max-w-3xl mx-auto">
            <div className="flex items-center bg-gray-800 px-4 py-2 border-b border-gray-700">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-4 text-sm text-gray-400">terminal</span>
            </div>
            <div className="p-6 text-purple-300 font-mono text-sm">
              <pre className="whitespace-pre-wrap">
{`# Clone repository
git clone https://github.com/cyberkutti-iedc/kode
cd kode

# Build with Cargo
cargo build --release

# Run a sample program
./target/release/kode run examples/hello.kode

# Start REPL
./target/release/kode repl`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section id="docs" className="py-16 md:py-24 px-4 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Documentation</h2>
          <p className="text-xl text-center mb-12 text-purple-200 max-w-3xl mx-auto">
            Comprehensive resources to help you learn and master Kode.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <DocCard
              title="Language Syntax"
              description="Complete reference for Kode language syntax and grammar."
              link="#"
            />
            <DocCard
              title="CLI Reference"
              description="Details on all available CLI commands and options."
              link="#"
            />
            <DocCard
              title="Complete Wiki"
              description="Comprehensive guide to all aspects of the language."
              link="#"
            />
            <DocCard
              title="Bytecode Format"
              description="Technical details about the .kdc bytecode format."
              link="#"
            />
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-purple-900">Development Roadmap</h2>
          <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
            The future direction and development goals for the Kode programming language.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <RoadmapCard 
              title="Short-Term Goals" 
              version="v0.1.x"
              items={[
                "Standard Library Implementation", 
                "Documentation Completion", 
                "Testing Framework"
              ]}
              completed={[
                "Bytecode Compilation",
                "REPL Improvements",
                "Closures and Arrays",
                "Error Handling",
                "Module System"
              ]}
            />
            <RoadmapCard 
              title="Mid-Term Goals" 
              version="v0.3.x"
              items={[
                "Native Code Generation", 
                "Static Type Checking", 
                "Standard Library Implementation",
                "Enhanced Loops",
                "Tracebacks",
                "Debugging Support",
                "Performance Optimizations",
                "String Interpolation",
                "VS Code Extension"
              ]}
            />
            <RoadmapCard 
              title="Long-Term Goals" 
              version="v1.0+"
              items={[
                "Package/Module System", 
                "Package Manager", 
                "Asynchronous Programming",
                "Advanced Data Structures",
                "Function Overloading",
                "Pattern Matching",
                "JIT Compilation",
                "Foreign Function Interface",
                "Meta-programming",
                "Object System"
              ]}
            />
          </div>

          <div className="text-center mt-12">
            <a href="roadmap.md" className="inline-flex items-center gap-2 text-purple-700 hover:text-purple-900 transition font-medium">
              View full roadmap
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="text-purple-400 h-6 w-6" />
                <span className="font-bold text-xl text-white">Kode</span>
                <span className="text-xs bg-purple-800 text-purple-200 rounded-full px-2 py-0.5 ml-2">v0.1.0</span>
              </div>
              <p className="text-gray-400 max-w-md">
                A modern, interpretable programming language with C-style syntax and functional capabilities.
              </p>
              <p className="mt-4 text-gray-500">
                © 2025 Kode Programming Language. Created by Sreeraj V Rajesh.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-white mb-4">Documentation</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Language Syntax</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">CLI Reference</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Complete Wiki</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Bytecode Format</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">GitHub</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Tutorials</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Examples</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Roadmap</a></li>
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h3 className="font-semibold text-white mb-4">Community</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Discord</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Twitter</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Contributing Guidelines</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Report a Bug</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Component for feature cards
function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 hover:shadow-md transition">
      <div className="text-purple-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-purple-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// Component for code examples
function CodeExample({ title, code }: { title: string; code: string }) {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex justify-between items-center bg-gray-100 px-4 py-2 border-b border-gray-200">
        <span className="font-medium text-gray-700">{title}</span>
        <button 
          onClick={copyCode}
          className="text-sm text-purple-600 hover:text-purple-800 transition"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className="p-4 bg-gray-900 text-purple-300 font-mono text-sm overflow-x-auto">
        <pre>{code}</pre>
      </div>
    </div>
  );
}

// Component for documentation cards
function DocCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <a 
      href={link} 
      className="bg-purple-800 bg-opacity-40 hover:bg-opacity-50 p-6 rounded-lg border border-purple-700 transition group"
    >
      <h3 className="text-xl font-semibold mb-2 text-white flex items-center gap-2">
        {title}
        <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition" />
      </h3>
      <p className="text-purple-200">{description}</p>
    </a>
  );
}

// Component for roadmap cards
function RoadmapCard({ title, version, items, completed = [] }: { title: string; version: string; items: string[]; completed?: string[] }) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-purple-900">{title}</h3>
        <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">{version}</span>
      </div>
      
      {completed.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm uppercase text-gray-500 font-semibold mb-3">Completed</h4>
          <ul className="space-y-2">
            {completed.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-600">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <div>
        <h4 className="text-sm uppercase text-gray-500 font-semibold mb-3">In Progress</h4>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-600">
              <div className="h-5 w-5 border-2 border-purple-300 rounded-full mt-0.5 flex-shrink-0"></div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
   
  );
}
