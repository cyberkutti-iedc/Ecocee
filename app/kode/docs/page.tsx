import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Documentation | Kode Programming Language",
  description:
    "Complete developer documentation for the Kode programming language. Learn syntax, features, and built-in functions.",
};

const docs = [
  { id: "getting-started", title: "Getting Started", description: "Quick start guide and first program", badge: "Start Here" },
  { id: "installation", title: "Installation", description: "Build from source, CLI commands, and environment setup" },
  { id: "variables", title: "Variables & Constants", description: "Declare variables with let and constants with const" },
  { id: "types", title: "Data Types", description: "int, float, string, bool, and array types" },
  { id: "operators", title: "Operators", description: "Arithmetic, comparison, logical, and bitwise operators" },
  { id: "functions", title: "Functions", description: "Expression body, block body, closures, and recursion" },
  { id: "control-flow", title: "Control Flow", description: "if/else, for, while, for-in, break, and continue" },
  { id: "arrays", title: "Arrays & Collections", description: "Array literals, indexing, mutation, push, and pop" },
  { id: "structs", title: "Structs & Enums", description: "Define composite types and enumerated values" },
  { id: "error-handling", title: "Error Handling", description: "try/catch blocks and defer statements" },
  { id: "modules", title: "Module System", description: "Export, import, and namespace imports across files" },
  { id: "builtins", title: "Built-in Functions", description: "I/O, math, string, array, and file functions" },
];

export default function KodeDocsIndexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex items-center gap-3 mb-4">
            <Link
              href="/kode"
              className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <span className="text-white font-bold text-lg">K</span>
            </Link>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Kode Language</p>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                Documentation
              </h1>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mt-2">
            A statically typed, compiled language built in Go. Version{" "}
            <span className="font-mono bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-sm">
              0.3.3
            </span>
          </p>
        </div>
      </div>

      {/* Doc Grid */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {docs.map((doc, idx) => (
            <Link
              key={doc.id}
              href={`/kode/docs/${doc.id}`}
              className="group flex items-start justify-between p-5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-sm transition-all"
            >
              <div className="flex items-start gap-4">
                <span className="mt-0.5 text-sm font-mono text-slate-400 dark:text-slate-600 w-5 shrink-0">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {doc.title}
                    </h2>
                    {"badge" in doc && (
                      <span className="text-xs bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full font-medium">
                        {(doc as { badge?: string }).badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {doc.description}
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors shrink-0 mt-1 ml-2" />
            </Link>
          ))}
        </div>

        {/* Footer links */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-4 items-center justify-between">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Kode v0.3.3 &mdash; Built with Go &middot; MIT License
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/ecocee/kode-go"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
            <Link
              href="/kode"
              className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Back to Kode
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
