"use client";

import Link from "next/link";

const docSections = [
  { id: "getting-started", label: "Getting Started" },
  { id: "installation", label: "Installation" },
  { id: "variables", label: "Variables & Constants" },
  { id: "types", label: "Data Types" },
  { id: "operators", label: "Operators" },
  { id: "functions", label: "Functions" },
  { id: "control-flow", label: "Control Flow" },
  { id: "arrays", label: "Arrays & Collections" },
  { id: "structs", label: "Structs & Enums" },
  { id: "error-handling", label: "Error Handling" },
  { id: "modules", label: "Modules" },
  { id: "builtins", label: "Built-in Functions" },
];

export default function DocsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id?: string };
}) {
  const currentIndex = docSections.findIndex((s) => s.id === params?.id);
  const prevSection = currentIndex > 0 ? docSections[currentIndex - 1] : null;
  const nextSection = currentIndex < docSections.length - 1 ? docSections[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">
              Kode Docs
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-4">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4 text-sm uppercase tracking-wider">
                Documentation
              </h3>
              <nav className="space-y-1">
                {docSections.map((section) => (
                  <Link
                    key={section.id}
                    href={`/kode/docs/${section.id}`}
                    className={`block text-sm py-2 px-3 rounded-md transition-colors ${
                      params?.id === section.id
                        ? "bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 font-medium"
                        : "text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                    }`}
                  >
                    {section.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-800 p-6 md:p-8">
              {children}
            </div>

            {/* Navigation Footer */}
            <div className="flex justify-between items-center mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
              {prevSection ? (
                <Link
                  href={`/kode/docs/${prevSection.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors font-medium text-sm"
                >
                  <span>←</span>
                  <span>Previous</span>
                </Link>
              ) : (
                <div />
              )}

              {nextSection && (
                <Link
                  href={`/kode/docs/${nextSection.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors font-medium text-sm"
                >
                  <span>Next</span>
                  <span>→</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
