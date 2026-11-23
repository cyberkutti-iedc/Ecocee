"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { Figtree, JetBrains_Mono } from "next/font/google";
import { CodeTabs, Copy } from "./client";
import Link from "next/link";
import { trackGithubClick } from "@/lib/analytics";

/**
 * Kode landing page, everything below the hero.
 * Same system as hero.tsx: Android Developers layout, Google Labs shapes.
 * No SVG, no icons, no emoji, no scroll-reveal. Shapes are plain CSS.
 * ./art is no longer needed. ./client still provides CodeTabs and Copy.
 *
 * Anchors used by the hero: #why, #code, #footprint (Speed), #agents.
 */

const sans = Figtree({ subsets: ["latin"], display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], display: "swap" });

const GH = "https://github.com/ecocee/Kode";
const DOC = `${GH}/blob/main/docs`;
const ECOCEE_LOGO = "/logo.png"; // swap for the Ecocee logo file when you have one

const wrap = "mx-auto max-w-[1320px] px-6 lg:px-10";
const h2 =
  "text-[clamp(2.5rem,5vw,4.25rem)] font-medium leading-[1.04] tracking-[-0.035em]";
const lead = "mt-5 max-w-2xl text-xl leading-relaxed text-[#3B2459] dark:text-[#D9C8EE]";
const muted = "text-[#5B4378] dark:text-[#BBA6D4]";
const link =
  "underline decoration-2 underline-offset-4 decoration-[#7B2FBE]/50 hover:decoration-[#7B2FBE] dark:decoration-[#C58BF2]/50 dark:hover:decoration-[#C58BF2]";
const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7B2FBE] dark:focus-visible:outline-[#C58BF2]";
const pillDark = `rounded-full bg-[#1E0A33] px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-[#3A1C66] dark:bg-[#F4ECFC] dark:text-[#12081F] dark:hover:bg-white ${focus}`;
const pillLine = `rounded-full border border-[#1E0A33]/30 px-8 py-[15px] text-lg font-medium text-[#1E0A33] transition-colors hover:bg-[#1E0A33]/8 dark:border-[#F4ECFC]/35 dark:text-[#F4ECFC] dark:hover:bg-[#F4ECFC]/10 ${focus}`;

const M = ({ children }: { children: ReactNode }) => (
  <code
    className={`${mono.className} rounded-md bg-[#1E0A33]/8 px-1.5 py-0.5 text-[.9em] dark:bg-[#F4ECFC]/12`}
  >
    {children}
  </code>
);

function Sec({
  id,
  label,
  className = "",
  children,
}: {
  id?: string;
  label: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={label}
      className={`${sans.className} bg-[#F4F0F7] py-24 text-[#1E0A33] dark:bg-[#12081F] dark:text-[#F4ECFC] lg:py-32 ${className}`}
    >
      {children}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Why Kode: dynamic editorial composition                             */
/* ------------------------------------------------------------------ */

export function Why() {
  return (
    <Sec id="why" label="why-t">
      <div className={`${wrap} grid gap-14 lg:grid-cols-[0.72fr_1.6fr] lg:gap-20`}>
        <div className="lg:sticky lg:top-12 lg:self-start">
          <h2 id="why-t" className={h2}>
            Why Kode?
          </h2>
          <p className={lead}>
            A compiled language designed for clarity, safety, and minimal resource overhead.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {/* Flagship Asymmetric Panel */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#7B2FBE] p-8 text-white sm:p-10 min-h-[19rem] flex flex-col justify-between">
            <div className="absolute -right-[15%] -top-[30%] aspect-square w-[55%] rounded-full bg-[#9B57DB]" />
            <div className="relative z-10">
              <span className="inline-block rounded-full border border-white/30 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#DCCBF7]">
                Clarity first
              </span>
              <h3 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
                Clean, readable syntax
              </h3>
              <p className="mt-3 max-w-xl text-lg leading-relaxed text-white/90">
                Type inference where you want it, explicit types where you need them. Variables need no boilerplate, string interpolation stays simple, and blocks use clean braces.
              </p>
            </div>
            <div className={`${mono.className} relative z-10 mt-6 flex flex-wrap items-center gap-3 text-sm text-[#F4ECFC]`}>
              <span className="rounded-xl bg-[#1B0B2E]/60 px-4 py-2 border border-white/10">name = &quot;Worker&quot;</span>
              <span className="rounded-xl bg-[#1B0B2E]/60 px-4 py-2 border border-white/10">print(&quot;${'{'}name{'}'}: ready&quot;)</span>
            </div>
          </div>

          {/* Staggered Paired Editorial Blocks */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#F5A623] p-8 text-[#1E0A33] sm:p-10 min-h-[19rem] flex flex-col justify-between">
              <div className="absolute -right-[18%] -top-[26%] aspect-square w-[62%] rounded-full bg-[#FFC857]" />
              <div className="relative z-10">
                <span className="inline-block rounded-full bg-black/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#1E0A33]">
                  Sound design
                </span>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Modern &amp; safe
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#1E0A33]/90 sm:text-lg">
                  First-class closures, safe optionals with <code className="font-mono text-sm font-bold">?.</code> and <code className="font-mono text-sm font-bold">??</code>, pattern matching with <code className="font-mono text-sm font-bold">is</code> narrowing, and compile-time type verification that catches errors early.
                </p>
              </div>
              <div className="relative z-10 mt-6 text-xs font-semibold uppercase tracking-wider opacity-70">
                Zero undefined behavior
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#1B0B2E] p-8 text-[#F4ECFC] sm:p-10 min-h-[19rem] flex flex-col justify-between">
              <div className="absolute -right-[18%] -top-[26%] aspect-square w-[62%] rounded-full bg-[#5A22A0]" />
              <div className="relative z-10">
                <span className="inline-block rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#C58BF2]">
                  Cloud &amp; Agents
                </span>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl text-white">
                  Small binaries, agent-ready
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#BBA6D4] sm:text-lg">
                  A hello world builds to ~302 KB stripped with zero VM overhead. Diagnostics output as JSON with error codes and actionable hints so AI agents can write and repair code autonomously.
                </p>
              </div>
              <div className={`${mono.className} relative z-10 mt-6 flex items-center gap-2 text-xs text-[#F5A623]`}>
                <span>~302 KB stripped</span>
                <span>•</span>
                <span>JSON diagnostics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Sec>
  );
}

/* ------------------------------------------------------------------ */
/* Code samples                                                        */
/* ------------------------------------------------------------------ */

export function Code() {
  return (
    <Sec id="code" label="code-t">
      <div className={wrap}>
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.6fr] lg:gap-20">
          <div>
            <h2 id="code-t" className={h2}>
              Read it once. Write it twice.
            </h2>
            <p className={lead}>
              The first sample is from the README. More one-idea programs are in{" "}
              <a className={link} href={`${GH}/tree/main/examples`}>
                examples/
              </a>
              , and the language fits on a{" "}
              <a className={link} href={`${DOC}/cheatsheet.md`}>
                one-page cheat sheet
              </a>
              .
            </p>
          </div>

          <div className="rounded-[2.5rem] bg-[#DCCBF7] p-3 dark:bg-[#3A1C66] sm:p-4">
            <div className="rounded-[2rem] bg-white p-4 dark:bg-[#1F1034] sm:p-6">
              <CodeTabs />
            </div>
          </div>
        </div>
      </div>
    </Sec>
  );
}

/* ------------------------------------------------------------------ */
/* Speed: verified benchmarks, memory, and runtime size split         */
/* ------------------------------------------------------------------ */

export function Speed() {
  const benchmarks = [
    { name: "loop_mod", kode: "11 ms", c: "11 ms", go: "29 ms", node: "49 ms", py: "3,026 ms", ratio: "1.01× C" },
    { name: "mandel", kode: "13 ms", c: "11 ms", go: "13 ms", node: "30 ms", py: "1,155 ms", ratio: "1.16× C" },
    { name: "collatz", kode: "200 ms", c: "150 ms", go: "228 ms", node: "1,799 ms", py: "14,166 ms", ratio: "1.33× C" },
    { name: "sieve", kode: "30 ms", c: "12 ms", go: "21 ms", node: "151 ms", py: "2,231 ms", ratio: "2.58× C" },
    { name: "fib(38)", kode: "4 ms", c: "57 ms", go: "91 ms", node: "194 ms", py: "4,815 ms", ratio: "0.07× C ¹" },
  ];

  const runtimeSizes = [
    { target: "hello (core runtime only)", size: "~302 KB", raw: "302,032 B stripped" },
    { target: "plaintext HTTP server", size: "454 KB", raw: "454,328 B stripped" },
    { target: "TLS server (serve_tls)", size: "2.78 MB", raw: "2,786,472 B stripped" },
    { target: "PostgreSQL client", size: "2.96 MB", raw: "2,967,752 B stripped" },
  ];

  return (
    <Sec id="footprint" label="speed-t" className="!bg-[#EBDDFB] dark:!bg-[#190A2B]">
      <div className={`${wrap} space-y-16`}>
        {/* Header */}
        <div className="max-w-3xl">
          <h2 id="speed-t" className={h2}>
            Measured performance
          </h2>
          <p className={lead}>
            Median wall-clock time measured with hyperfine on Apple silicon (macOS arm64, 10 cores).
            Kode release vs <M>cc -O2</M>, plain <M>go build</M>, Node, and Python source.
          </p>
        </div>

        {/* Benchmarks Grid */}
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Benchmarks Table */}
          <div className="rounded-[2.5rem] bg-[#1B0B2E] p-6 text-[#F4ECFC] sm:p-8">
            <h3 className="text-xl font-medium text-white mb-6">Wall Clock (median, lower is better)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-[#BBA6D4]">
                    <th className="pb-3 font-semibold">Program</th>
                    <th className="pb-3 font-semibold text-[#F5A623]">Kode</th>
                    <th className="pb-3 font-semibold">C (-O2)</th>
                    <th className="pb-3 font-semibold">Go</th>
                    <th className="pb-3 font-semibold">Node</th>
                    <th className="pb-3 font-semibold">Python</th>
                  </tr>
                </thead>
                <tbody className={`${mono.className} divide-y divide-white/5`}>
                  {benchmarks.map((b) => (
                    <tr key={b.name} className="hover:bg-white/[0.02]">
                      <td className="py-3 font-medium text-white">{b.name}</td>
                      <td className="py-3 font-bold text-[#F5A623]">{b.kode}</td>
                      <td className="py-3 text-[#C58BF2]">{b.c}</td>
                      <td className="py-3 text-white/80">{b.go}</td>
                      <td className="py-3 text-white/60">{b.node}</td>
                      <td className="py-3 text-white/40">{b.py}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-xs leading-relaxed text-[#BBA6D4]">
              ¹ Optimizer artifact, not a language comparison: Kode's MIR inliner inlines the recursion once before clang sees it (5 <M>bl</M> sites in the Kode binary vs 2 in C).
            </p>
            <p className="mt-2 text-xs text-[#BBA6D4]">
              On tight loops and mandelbrot, Kode performs within 1.01×–1.16× of optimized C.
            </p>
          </div>

          {/* Unified Architectural Telemetry Panel */}
          <div className="rounded-[2.5rem] bg-white p-8 dark:bg-[#1F1034] text-[#1E0A33] dark:text-[#F4ECFC] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-black/5 dark:border-white/5">
                <h3 className="text-xl font-semibold tracking-tight">Modular runtime size</h3>
                <span className="rounded-full bg-[#7B2FBE]/10 dark:bg-[#C58BF2]/10 px-3 py-1 text-xs font-semibold text-[#7B2FBE] dark:text-[#C58BF2]">
                  Zero VM
                </span>
              </div>
              <p className={`mt-3 text-sm leading-relaxed ${muted}`}>
                Plaintext programs link only the core runtime (~302 KB). TLS and PostgreSQL are included only when imported and used.
              </p>
              <ul className="mt-5 space-y-3">
                {runtimeSizes.map((s) => (
                  <li key={s.target} className="flex items-baseline justify-between border-b border-black/5 dark:border-white/5 pb-2 text-sm">
                    <span className="font-medium">{s.target}</span>
                    <span className={`${mono.className} font-semibold text-[#7B2FBE] dark:text-[#C58BF2]`}>{s.size}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10">
              <h4 className="text-base font-semibold tracking-tight">Lean memory footprint</h4>
              <p className={`mt-2 text-sm leading-relaxed ${muted}`}>
                Peak RSS on loop and collatz benchmarks: <strong className="text-[#1E0A33] dark:text-white">1.7 MB</strong> for Kode (comparable to C at 1.7 MB, vs 4.3 MB for Go, 47 MB for Node, and 9 MB for Python).
              </p>
              <div className="mt-4 rounded-xl bg-[#F4F0F7] dark:bg-white/[0.04] p-3 text-xs text-[#5B4378] dark:text-[#BBA6D4] flex items-center justify-between">
                <span>String building:</span>
                <span className={`${mono.className} font-semibold text-[#7B2FBE] dark:text-[#C58BF2]`}>StringBuilder 2.3 ms vs 188.4 ms (0.01×)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Sec>
  );
}

/* ------------------------------------------------------------------ */
/* Compiler: real pipeline from source to binary                      */
/* ------------------------------------------------------------------ */

const STAGES: [string, string, string][] = [
  ["Lexer", "token stream", "bg-[#DCCBF7] text-[#1E0A33]"],
  ["Parser", "syntax validation", "bg-[#C9A8F2] text-[#1E0A33]"],
  ["AST", "abstract syntax tree", "bg-[#B58BEA] text-[#1E0A33]"],
  ["Type check", "sound type verification", "bg-[#9B57DB] text-white"],
  ["MIR", "retain/release elimination (KODE_RC_ELIM)", "bg-[#7B2FBE] text-white"],
  ["LLVM IR", "lowered directly from MIR", "bg-[#6824A8] text-white"],
  ["Clang", "native object emission", "bg-[#5A22A0] text-white"],
  ["Linker", "self-contained binary (~302 KB)", "bg-[#2B0F47] text-white"],
];

export function Compiler() {
  return (
    <Sec label="comp-t">
      <div className={`${wrap} grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20`}>
        <div>
          <h2 id="comp-t" className={h2}>
            One compiler, written in Rust
          </h2>
          <p className={lead}>
            Pipeline: <M>source → lexer → parser → AST → type check → MIR → LLVM IR → clang → object → linker → binary</M>.
          </p>
          <p className={`mt-5 max-w-xl text-lg leading-relaxed ${muted}`}>
            Written in Rust with an LLVM backend and reference-counted memory. Every program compiles to a single self-contained binary containing only the runtime parts it actually uses. Built with version <strong>0.3.6</strong> and runtime <strong>ABI 0006</strong>.
          </p>
          <p className={`mt-4 max-w-xl text-sm leading-relaxed ${muted}`}>
            Run <M>kode mir file.kode</M> to view the MIR, <M>kode doctor</M> to inspect your toolchain and runtime ABI, and <M>kode check --format=json</M> for machine-readable diagnostics.
          </p>
        </div>

        <ol className="space-y-2.5">
          {STAGES.map(([name, note, tone], i) => (
            <li
              key={name}
              className={`flex w-[82%] items-center gap-4 rounded-full px-5 py-3 sm:w-[75%] ${tone}`}
              style={{ marginLeft: `${i * 3.5}%` }}
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black/15 text-xs font-semibold">
                {i + 1}
              </span>
              <span className="min-w-0">
                <span className="block text-base font-medium leading-tight">{name}</span>
                {note && <span className="block truncate text-xs opacity-85">{note}</span>}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </Sec>
  );
}

/* ------------------------------------------------------------------ */
/* What is in v0.3.6                                                  */
/* ------------------------------------------------------------------ */

export function Inside() {
  return (
    <Sec id="inside" label="in-t" className="!bg-[#EBDDFB] dark:!bg-[#190A2B]">
      <div className={wrap}>
        <h2 id="in-t" className={h2}>
          What is in v0.3.6
        </h2>
        <p className={lead}>
          A working native compiler (runtime ABI 0006) and an active standard library.
          Every program links only the runtime parts it actually uses.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {/* PostgreSQL Feature Showcase */}
          <div className="rounded-[2.5rem] bg-[#7B2FBE] p-8 text-white sm:p-10 lg:col-span-2 flex flex-col justify-between">
            <div>
              <span className="inline-block rounded-full border border-white/30 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#DCCBF7]">
                Native Database Driver
              </span>
              <h3 className="mt-4 text-3xl font-medium tracking-tight">PostgreSQL, built in</h3>
              <p className="mt-3 max-w-xl text-lg leading-relaxed opacity-90">
                A native client in the runtime with SCRAM-SHA-256 authentication, <M>sslmode=prefer</M>,
                connection pooling (<M>pg.pool</M>), and JSON query results. Speaks plain TCP and connects cleanly with zero external driver dependencies.
              </p>
              <div className={`${mono.className} mt-6 flex flex-wrap gap-2 text-sm`}>
                {["pg.connect", "pg.exec", "pg.query", "pg.close", "pg.pool"].map((x) => (
                  <span key={x} className="rounded-full border border-white/40 px-4 py-1.5 bg-black/10">
                    {x}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-6 text-sm opacity-90 border-t border-white/15 pt-4">
              Worked example:{" "}
              <a className="underline underline-offset-4 font-medium hover:text-[#FFC857]" href={`${GH}/blob/main/examples/db/postgres.kode`}>
                examples/db/postgres.kode
              </a>
            </p>
          </div>

          {/* Memory Lifecycle */}
          <div className="rounded-[2.5rem] bg-white p-8 dark:bg-[#1F1034] text-[#1E0A33] dark:text-[#F4ECFC] shadow-sm flex flex-col justify-between">
            <div>
              <span className="inline-block rounded-full bg-[#7B2FBE]/10 dark:bg-[#C58BF2]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#7B2FBE] dark:text-[#C58BF2]">
                Zero GC pauses
              </span>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">Deterministic Memory</h3>
              <p className={`mt-3 text-base leading-relaxed ${muted}`}>
                Reference counted with atomic counts, MIR retain/release elimination (<M>KODE_RC_ELIM</M>), and a built-in leak checker (<M>KODE_LEAK_CHECK=1</M>).
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 text-xs text-[#5B4378] dark:text-[#BBA6D4]">
              Clean teardown with zero dangling pointers
            </div>
          </div>

          {/* Technical Specification Grid */}
          <div className="rounded-[2.5rem] bg-white p-8 dark:bg-[#1F1034] text-[#1E0A33] dark:text-[#F4ECFC] shadow-sm lg:col-span-3">
            <h3 className="text-xl font-semibold tracking-tight">Core Language Specifications</h3>
            <div className="mt-6 grid gap-8 sm:grid-cols-3">
              <div className="border-t border-black/5 dark:border-white/5 pt-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#7B2FBE] dark:text-[#C58BF2]">
                  Syntax &amp; Control
                </span>
                <p className={`mt-2 text-sm leading-relaxed ${muted}`}>
                  <M>int</M>, <M>float</M>, <M>bool</M>, <M>string</M>; bitwise <M>&amp; | ^ ~ &lt;&lt; &gt;&gt;</M>; <M>if</M>, <M>while</M>, <M>for</M>, <M>match</M> with payload bindings and <M>is</M> narrowing. Closures and generic functions.
                </p>
              </div>

              <div className="border-t border-black/5 dark:border-white/5 pt-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#7B2FBE] dark:text-[#C58BF2]">
                  Data &amp; Errors
                </span>
                <p className={`mt-2 text-sm leading-relaxed ${muted}`}>
                  Lists <M>[T]</M>, maps <M>{"{string: T}"}</M>, generic classes with methods and defaults, enums with payloads, optionals <M>T?</M> with <M>?.</M>, <M>??</M>, <M>!</M>, and <M>expr catch e {"{ }"}</M>.
                </p>
              </div>

              <div className="border-t border-black/5 dark:border-white/5 pt-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#7B2FBE] dark:text-[#C58BF2]">
                  Concurrency &amp; I/O
                </span>
                <p className={`mt-2 text-sm leading-relaxed ${muted}`}>
                  Tasks with <M>spawn</M> and <M>await</M>, typed <M>Channel&lt;T&gt;</M>, a web server with <M>serve</M>, <M>serve_tls</M> and <M>Router</M>, JSON, an HTTP client, and native files.
                </p>
              </div>
            </div>
          </div>

          {/* Tested & Verified Quality Assurance */}
          <div className="rounded-[2.5rem] bg-[#1B0B2E] p-8 text-white sm:p-10 lg:col-span-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#F5A623]">
                  Quality Assurance
                </span>
                <h3 className="mt-1 text-2xl font-bold tracking-tight">
                  Tested and verified: 223 passed, 0 failed
                </h3>
              </div>
              <span className={`${mono.className} w-fit rounded-full bg-[#F5A623] px-4 py-1.5 text-xs font-bold text-[#1E0A33]`}>
                100% Passing
              </span>
            </div>
            <div className={`mt-6 grid gap-6 text-sm leading-relaxed text-[#BBA6D4] sm:grid-cols-3`}>
              <div>
                <strong className="block text-white mb-1">Zero Leaks Verified</strong>
                <M>223 passed, 0 failed</M> under <M>KODE_LEAK_CHECK=1 cargo test --workspace</M>.
              </div>
              <div>
                <strong className="block text-white mb-1">Full CLI Suite</strong>
                Complete developer toolchain: <M>kode run</M>, <M>build</M>, <M>check --format=json</M>, <M>fmt</M>, <M>test</M>, <M>mir</M>, <M>doc</M>, <M>lsp</M>, <M>doctor</M>, and <M>explain</M>.
              </div>
              <div>
                <strong className="block text-white mb-1">Minimal Footprint</strong>
                Self-contained native output: plaintext programs link only the core runtime (~302 KB stripped).
              </div>
            </div>
          </div>
        </div>
      </div>
    </Sec>
  );
}

/* ------------------------------------------------------------------ */
/* Agents                                                              */
/* ------------------------------------------------------------------ */

export function Agents() {
  const lines = [
    "kode check service.kode --format=json",
    "kode explain E0201",
    "kode test",
    "kode build service.kode --release",
  ];
  return (
    <Sec id="agents" label="ag-t">
      <div className={`${wrap} grid items-center gap-14 lg:grid-cols-2 lg:gap-20`}>
        <div>
          <h2 id="ag-t" className={h2}>
            Built for the age of agents
          </h2>
          <p className={lead}>
            Errors carry codes and hints, diagnostics come out as JSON, and a language server runs on stdio. An
            agent can write Kode and fix it from the compiler output.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={`${GH}/blob/main/AGENTS.md`} className={pillDark}>
              Read AGENTS.md
            </a>
            <a href={`${GH}/tree/main/docs`} className={pillLine}>
              See the docs
            </a>
          </div>
        </div>

        <div className="rounded-[2.5rem] bg-[#DCCBF7] p-3 dark:bg-[#3A1C66] sm:p-4">
          <div
            className={`${mono.className} rounded-[2rem] bg-[#1B0B2E] p-6 text-[14px] leading-8 text-[#F4ECFC] sm:p-8 sm:text-[15px]`}
            role="img"
            aria-label="Commands an agent can run: check with JSON output, explain an error code, test, and build"
          >
            {lines.map((l) => (
              <div key={l} className="overflow-x-auto whitespace-nowrap">
                <span className="text-[#F5A623]">$ </span>
                {l}
              </div>
            ))}
            <span
              aria-hidden="true"
              className="mt-1 inline-block h-5 w-2.5 bg-[#F5A623] motion-safe:animate-pulse"
            />
          </div>
        </div>
      </div>
    </Sec>
  );
}

/* ------------------------------------------------------------------ */
/* Roadmap & Journey: From v0.0.1 to today and beyond                */
/* ------------------------------------------------------------------ */

export function Roadmap() {
  const journey = [
    {
      phase: "Genesis",
      tag: "Shipped",
      version: "v0.0.1",
      body: "The initial proof-of-concept: basic lexer, hand-written recursive-descent parser, AST, and compiling trivial expressions directly to machine instructions.",
      current: false,
    },
    {
      phase: "Architecture",
      tag: "Shipped",
      version: "v0.1.0",
      body: "Introduced the Mid-level Intermediate Representation (MIR), type checking, structured functions, loops, and first-class closures.",
      current: false,
    },
    {
      phase: "Memory & Concurrency",
      tag: "Shipped",
      version: "v0.2.0",
      body: "Reference-counted memory model, leak detection (KODE_LEAK_CHECK=1), lightweight concurrent tasks (spawn/await), and typed channels.",
      current: false,
    },
    {
      phase: "Current Toolchain",
      tag: "Current Release",
      version: "v0.3.6 (ABI 0006)",
      body: "LLVM/Clang backend, ~302 KB stripped binaries, native PostgreSQL client, HTTP server (serve/serve_tls), CLI suite, and 223 passed tests.",
      current: true,
    },
    {
      phase: "Runtime Expansion",
      tag: "Next",
      version: "M9 Track",
      body: "Cycle-safe memory, byte buffers, full enum payload pattern matching, and generalized asynchronous I/O.",
      current: false,
    },
    {
      phase: "Horizon",
      tag: "Planned",
      version: "v1.0 & Self-Hosting",
      body: "Branch next/selfhost compiler byte-parity with the Rust compiler; native backend, Windows MSVC target, and formal v1.0 specifications.",
      current: false,
    },
  ];

  return (
    <Sec label="rm-t" className="!bg-[#EBDDFB] dark:!bg-[#190A2B]">
      <div className={wrap}>
        <div className="max-w-3xl">
          <h2 id="rm-t" className={h2}>
            The journey: From v0.0.1 to today and beyond
          </h2>
          <p className={lead}>
            How an experimental compiler evolved into a native language for cloud backends, and where we are heading next.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {journey.map((item, idx) => (
            <div
              key={item.version}
              className={`relative flex flex-col justify-between rounded-[2rem] p-7 sm:p-8 transition-shadow ${
                item.current
                  ? "bg-[#1B0B2E] text-white shadow-xl ring-2 ring-[#F5A623]"
                  : "bg-white text-[#1E0A33] dark:bg-[#1F1034] dark:text-[#F4ECFC]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 border-b border-black/5 dark:border-white/5 pb-3">
                  <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7B2FBE] dark:text-[#C58BF2]">
                    <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                      item.current ? "bg-[#F5A623] text-[#1E0A33]" : "bg-black/5 dark:bg-white/10"
                    }`}>
                      {idx + 1}
                    </span>
                    {item.phase}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      item.current
                        ? "bg-[#F5A623] text-[#1E0A33] font-semibold"
                        : "bg-black/5 text-[#5B4378] dark:bg-white/10 dark:text-[#BBA6D4]"
                    }`}
                  >
                    {item.tag}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-bold tracking-tight">
                  {item.version}
                </h3>

                <p
                  className={`mt-2.5 text-sm leading-relaxed ${
                    item.current
                      ? "text-[#F4ECFC]/80"
                      : "text-[#5B4378] dark:text-[#BBA6D4]"
                  }`}
                >
                  {item.body}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs">
                <span className="opacity-70">
                  {item.current ? "Active toolchain" : item.tag === "Shipped" ? "Milestone complete" : "In development"}
                </span>
                <span className="font-mono opacity-50">
                  {item.version.split(" ")[0]}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-[#5B4378] dark:text-[#BBA6D4]">
          Follow specifications, milestones, and development in{" "}
          <a className={link} href={`${GH}/tree/main/docs`}>
            github.com/ecocee/Kode/docs
          </a>
          .
        </p>
      </div>
    </Sec>
  );
}

/* ------------------------------------------------------------------ */
/* Start                                                               */
/* ------------------------------------------------------------------ */

export function Start() {
  return (
    <Sec id="start" label="st-t">
      <div className={wrap}>
        <div className="relative overflow-hidden rounded-[3rem] bg-[#7B2FBE] p-8 text-white sm:p-12 lg:p-16">
          <div
            aria-hidden="true"
            className="absolute -right-[10%] -top-[40%] hidden aspect-square w-[52%] rounded-full bg-[#9B57DB] lg:block"
          />
          <div className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_auto]">
            <div>
              <h2 id="st-t" className={h2}>
                Build Kode from source
              </h2>
              <p className="mt-5 max-w-xl text-xl leading-relaxed opacity-90">
                Needs Rust 1.91 or newer and a C compiler. On macOS, run <M>xcode-select --install</M> first.
              </p>
              <div className="mt-8 grid max-w-xl gap-3">
                {[
                  "cargo build --workspace",
                  "cargo test --workspace",
                  "./target/debug/kode run examples/hello.kode",
                ].map((c) => (
                  <Copy key={c} text={c} />
                ))}
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={GH}
                  onClick={() => trackGithubClick("kode")}
                  className="rounded-full bg-white px-8 py-4 text-lg font-medium text-[#7B2FBE] transition-colors hover:bg-[#F4ECFC] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Star on GitHub
                </a>
                <a
                  href={`${GH}/blob/main/CONTRIBUTING.md`}
                  onClick={() => trackGithubClick("kode")}
                  className="rounded-full border border-white/70 px-8 py-[15px] text-lg font-medium transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Contribute
                </a>
              </div>
            </div>

            <div className="relative hidden h-[300px] w-[300px] lg:block">
              <div className="absolute inset-0 rounded-full bg-[#F5A623]" />
              <Image
                src="/kode/logo.png"
                alt="Kode owl mascot"
                width={300}
                height={300}
                className="relative h-[300px] w-[300px] scale-125"
              />
            </div>
          </div>
        </div>
      </div>
    </Sec>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export function KodeFAQ() {
  const faqs = [
    {
      q: "What is Kode?",
      a: "Kode is an open source compiled programming language with clean syntax, native performance, and small binaries, built for cloud software, backends, and AI-assisted development.",
    },
    {
      q: "What license is Kode released under?",
      a: "Kode is released under the Apache-2.0 open source license.",
    },
    {
      q: "How do I build Kode from source?",
      a: "Clone https://github.com/ecocee/Kode, then run cargo build --workspace to compile, and cargo test --workspace to run tests.",
    },
    {
      q: "What are the requirements to build Kode?",
      a: "Building Kode requires Rust 1.91 or newer and a C compiler. On macOS, run xcode-select --install first.",
    },
    {
      q: "Which operating systems are supported, and is Windows supported?",
      a: "Kode supports Linux and macOS. Windows support is currently available as a preview.",
    },
    {
      q: "How can I contribute to Kode?",
      a: "Contributions are welcome on GitHub at https://github.com/ecocee/Kode through bug reports, feature discussions, and pull requests following CONTRIBUTING.md.",
    },
  ];

  return (
    <Sec id="faq" label="faq-heading">
      <div className={wrap}>
        <div className="max-w-2xl">
          <h2 id="faq-heading" className={h2}>
            Frequently asked questions
          </h2>
          <p className={lead}>
            Key facts about the Kode language, toolchain, and platform support.
          </p>
        </div>
        <div className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {faqs.map((f) => (
            <div
              key={f.q}
              className="border-t border-[#1E0A33]/15 pt-6 dark:border-[#F4ECFC]/15"
            >
              <h3 className="text-xl font-medium tracking-tight text-[#1E0A33] dark:text-[#F4ECFC]">
                {f.q}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#5B4378] dark:text-[#BBA6D4]">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Sec>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

export function Footer() {
  const columns: [string, [string, string][]][] = [
    [
      "Learn Kode",
      [
        ["Documentation", `${GH}/tree/main/docs`],
        ["Get started", `${GH}/tree/main/docs`],
        ["Cheat sheet", `${DOC}/cheatsheet.md`],
        ["Language specification", `${GH}/tree/main/docs/spec`],
        ["Examples", `${GH}/tree/main/examples`],
      ],
    ],
    [
      "Explore",
      [
        ["What's included", "#inside"],
        ["Benchmarks", "#footprint"],
        ["Compiler", "#compiler"],
        ["AI agents", "#agents"],
        ["Roadmap", `${DOC}/ROADMAP.md`],
      ],
    ],
    [
      "Community",
      [
        ["GitHub repository", GH],
        ["Discussions", `${GH}/discussions`],
        ["Report an issue", `${GH}/issues`],
        ["Contributing", `${GH}/blob/main/CONTRIBUTING.md`],
        ["Security", `${GH}/blob/main/SECURITY.md`],
      ],
    ],
  ];

  return (
    <footer className={`${sans.className} overflow-hidden bg-[#1B0B2E] text-[#F4ECFC]`}>
      {/* Main footer */}
      <div className={`${wrap} pt-20 lg:pt-28`}>
        {/* Brand introduction */}
        

        {/* Navigation and brand details */}
        <div className="grid gap-14 py-16 lg:grid-cols-[1.15fr_2fr] lg:gap-20 lg:py-20">
          {/* Left brand column */}
          <div>
            <Link
              href="/"
              aria-label="Kode home"
              className={`inline-flex items-center gap-3 rounded-lg ${focus}`}
            >
              <Image
                src="/kode/logo.png"
                alt="Kode logo"
                width={42}
                height={42}
                className="h-[42px] w-[42px] object-contain"
              />
              <span className="text-2xl font-semibold tracking-tight">
                Kode
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-base leading-relaxed text-[#BBA6D4]">
              A modern, statically typed programming language combining
              expressive syntax, native performance and developer tooling.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs text-[#D9C8EE]">
                Open source
              </span>
              <span className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs text-[#D9C8EE]">
                Apache-2.0
              </span>
              <span className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs text-[#D9C8EE]">
                v0.3
              </span>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-x-10">
            {columns.map(([heading, links]) => (
              <nav key={heading} aria-label={heading}>
                <h3 className="text-sm font-semibold tracking-wide text-white">
                  {heading}
                </h3>

                <ul className="mt-6 space-y-4">
                  {links.map(([label, url]) => {
                    const external = url.startsWith("http");

                    return (
                      <li key={label}>
                        <a
                          href={url}
                          onClick={() => {
                            if (url.includes("github.com/ecocee/Kode")) {
                              trackGithubClick("kode");
                            }
                          }}
                          className={`group inline-flex items-center gap-1.5 text-sm text-[#BBA6D4] transition-colors hover:text-white ${focus}`}
                        >
                          <span>{label}</span>
                          {external && (
                            <span
                              aria-hidden="true"
                              className="text-[11px] opacity-40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                            >
                              ↗
                            </span>
                          )}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Large typographic signature */}
        <div className="overflow-hidden border-t border-white/10 pt-8 pb-10">
          <p
            aria-hidden="true"
            className="select-none whitespace-nowrap text-[clamp(5rem,17.5vw,15rem)] font-semibold leading-[0.82] tracking-[-0.09em] text-white/[0.055]"
          >
            KODE<span className="text-[#F5A623]/30">.</span>
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div
          className={`${wrap} flex flex-col gap-7 py-7 sm:flex-row sm:items-center sm:justify-between`}
        >
          <div className="flex flex-col gap-1">
            <p className="text-sm text-[#D9C8EE]">
              © 2026 Ecocee. All rights reserved.
            </p>
            <p className="text-xs text-[#8E78A5]">
              Kode is released under the Apache-2.0 license.
            </p>
          </div>

          <a
            href="https://ecocee.in"
            className={`group inline-flex w-fit items-center gap-3 rounded-xl transition-opacity hover:opacity-80 ${focus}`}
          >
            <Image
              src="/logo.png"
              alt="Ecocee"
              width={38}
              height={38}
              className="h-[38px] w-[38px] object-contain"
            />

            <span>
              <span className="block text-xs text-[#8E78A5]">
                Built by
              </span>
              <span className="block text-sm font-semibold text-white">
                Ecocee
                <span className="ml-2 font-normal text-[#BBA6D4]">
                  · Kerala, India
                </span>
              </span>
            </span>

            <span
              aria-hidden="true"
              className="ml-1 text-sm text-[#BBA6D4] transition-transform group-hover:translate-x-1"
            >
              ↗
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
