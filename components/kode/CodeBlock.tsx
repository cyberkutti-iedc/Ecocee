"use client";

export function CodeBlock({
  language,
  children,
}: {
  language: string;
  children: string;
}) {
  return (
    <div className="bg-slate-900 dark:bg-slate-950 rounded-lg overflow-hidden border border-slate-800 dark:border-slate-700 my-4">
      <div className="px-4 py-2 bg-slate-800 dark:bg-slate-900 border-b border-slate-700 dark:border-slate-800 flex items-center justify-between">
        <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
          {language}
        </span>
        <button
          onClick={() => navigator.clipboard.writeText(children)}
          className="text-xs text-slate-400 hover:text-slate-200 transition-colors px-2 py-1 rounded hover:bg-slate-700"
        >
          Copy
        </button>
      </div>
      <pre className="overflow-x-auto px-4 py-4">
        <code className="text-sm font-mono text-slate-100 leading-relaxed">
          {children}
        </code>
      </pre>
    </div>
  );
}
