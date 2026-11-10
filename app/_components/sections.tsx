import Image from "next/image";
import type { ReactNode } from "react";
import { Figtree, JetBrains_Mono } from "next/font/google";
import { CodeTabs, Copy } from "./client";
import Link from "next/link";

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
/* Why Kode: four flat color tiles                                     */
/* ------------------------------------------------------------------ */

function Tile({
  title,
  body,
  bg,
  blob,
  className = "",
}: {
  title: string;
  body: string;
  bg: string;
  blob: string;
  className?: string;
}) {
  return (
    <li className={`relative flex flex-col justify-end overflow-hidden rounded-[2.5rem] p-8 sm:p-10 ${bg} ${className}`}>
      <div className={`absolute -right-[18%] -top-[26%] aspect-square w-[62%] rounded-full ${blob}`} />
      <div className="relative">
        <h3 className="text-3xl font-medium tracking-tight">{title}</h3>
        <p className="mt-3 max-w-md text-lg leading-relaxed opacity-90">{body}</p>
      </div>
    </li>
  );
}

export function Why() {
  return (
    <Sec id="why" label="why-t">
      <div className={`${wrap} grid gap-14 lg:grid-cols-[0.72fr_1.6fr] lg:gap-20`}>
        <div className="lg:sticky lg:top-12 lg:self-start">
          <h2 id="why-t" className={h2}>
            Why Kode?
          </h2>
          <p className={lead}>
            A language that reads like Python, feels like JavaScript and builds like C.
          </p>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2">
          <Tile
            title="Python-readable"
            body="Plain syntax. Variables need no keyword, strings interpolate with ${name}, and blocks use braces."
            bg="bg-[#7B2FBE] text-white"
            blob="bg-[#9B57DB]"
            className="min-h-[22rem]"
          />
          <Tile
            title="JavaScript-familiar"
            body="Closures, optionals with ?. and ??, and try / catch feel like home. Static types catch the rest."
            bg="bg-[#F5A623] text-[#1E0A33]"
            blob="bg-[#FFC857]"
            className="min-h-[22rem] sm:mt-12"
          />
          <Tile
            title="Small native binaries"
            body="A hello world builds to about 450 KB, or 373 KB stripped. No VM and nothing to install on the server."
            bg="bg-[#DCCBF7] text-[#1E0A33] dark:bg-[#3A1C66] dark:text-[#F4ECFC]"
            blob="bg-[#C58BF2]/70 dark:bg-[#5A22A0]"
            className="min-h-[22rem] sm:-mt-0"
          />
          <Tile
            title="Written for agents"
            body="Every error has a code and a hint, and diagnostics come as JSON, so an agent can fix its own code."
            bg="bg-[#1B0B2E] text-[#F4ECFC]"
            blob="bg-[#5A22A0]"
            className="min-h-[22rem] sm:mt-12"
          />
        </ul>
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
/* Speed: the bars are the visual                                      */
/* ------------------------------------------------------------------ */

export function Speed() {
  const rows: [string, string, number, string][] = [
    ["Python", "4,658 ms", 100, "bg-[#8F84FF]"],
    ["Kode", "93 ms", 2.6, "bg-[#F5A623]"],
    ["C", "58 ms", 1.6, "bg-[#C58BF2]"],
  ];
  return (
    <Sec id="footprint" label="speed-t" className="!bg-[#EBDDFB] dark:!bg-[#190A2B]">
      <div className={`${wrap} grid items-center gap-12 lg:grid-cols-2 lg:gap-20`}>
        <div>
          <h2 id="speed-t" className={h2}>
            Fast where it counts
          </h2>
          <p className={lead}>
            Time to compute fib(35), measured on one development machine: macOS arm64, Apple silicon.
          </p>
          <p className={`mt-6 max-w-xl text-lg leading-relaxed ${muted}`}>
            Binary size: 450,696 bytes for hello world, 373,336 after <M>strip -x</M>. The numbers, targets and
            the rows that still miss are in{" "}
            <a className={link} href={`${GH}/blob/main/benchmarks/report.md`}>
              benchmarks/report.md
            </a>
            . HTTP benchmarks are still preliminary.
          </p>
        </div>

        <div className="rounded-[2.5rem] bg-[#1B0B2E] p-8 text-[#F4ECFC] sm:p-12">
          <ul className="space-y-8">
            {rows.map(([name, time, w, color]) => (
              <li key={name}>
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-medium">{name}</span>
                  <span className={`${mono.className} text-base`}>{time}</span>
                </div>
                <div className="mt-3 h-6 rounded-full bg-[#2E1650]">
                  <div
                    className={`h-6 rounded-full ${color}`}
                    style={{ width: `${Math.max(w, 2.5)}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-[#BBA6D4]">Shorter is faster. Bars are to scale.</p>
        </div>
      </div>
    </Sec>
  );
}

/* ------------------------------------------------------------------ */
/* Compiler: a real sequence, so it is a staircase                     */
/* ------------------------------------------------------------------ */

const STAGES: [string, string, string][] = [
  ["Lexer", "", "bg-[#DCCBF7] text-[#1E0A33]"],
  ["Parser", "", "bg-[#C9A8F2] text-[#1E0A33]"],
  ["AST", "", "bg-[#B58BEA] text-[#1E0A33]"],
  ["Type check", "", "bg-[#9B57DB] text-white"],
  ["MIR", "retain and release included", "bg-[#7B2FBE] text-white"],
  ["Cranelift", "writes an object file", "bg-[#5A22A0] text-white"],
  ["Linker", "makes the binary", "bg-[#2B0F47] text-white"],
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
            Source goes through the lexer, parser, AST, type check and MIR, then Cranelift writes an object file
            and the linker makes the binary. Each stage is its own crate.
          </p>
          <p className={`mt-5 max-w-xl text-lg leading-relaxed ${muted}`}>
            Run <M>kode mir file.kode</M> to see the MIR, including retain and release, and <M>kode doctor</M> to
            see the target, linker and runtime ABI.
          </p>
        </div>

        <ol className="space-y-3">
          {STAGES.map(([name, note, tone], i) => (
            <li
              key={name}
              className={`flex w-[72%] items-center gap-4 rounded-full px-5 py-3.5 sm:w-[66%] ${tone}`}
              style={{ marginLeft: `${i * 4.5}%` }}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/15 text-sm font-semibold">
                {i + 1}
              </span>
              <span className="min-w-0">
                <span className="block text-lg font-medium leading-tight">{name}</span>
                {note && <span className="block truncate text-sm opacity-85">{note}</span>}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </Sec>
  );
}

/* ------------------------------------------------------------------ */
/* What is in v0.3                                                     */
/* ------------------------------------------------------------------ */

export function Inside() {
  const card =
    "rounded-[2rem] bg-white p-8 dark:bg-[#1F1034]";
  const h3 = "text-2xl font-medium tracking-tight";
  return (
    <Sec id="inside" label="in-t" className="!bg-[#EBDDFB] dark:!bg-[#190A2B]">
      <div className={wrap}>
        <h2 id="in-t" className={h2}>
          What is in v0.3
        </h2>
        <p className={lead}>
          A working compiler and an active standard library. Known gaps are tracked in{" "}
          <a className={link} href={`${DOC}/STATUS.md`}>
            docs/STATUS.md
          </a>
          .
        </p>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <div className="rounded-[2.5rem] bg-[#7B2FBE] p-8 text-white sm:p-10 lg:col-span-2">
            <h3 className="text-3xl font-medium tracking-tight">PostgreSQL, built in</h3>
            <p className="mt-3 max-w-xl text-lg leading-relaxed opacity-90">
              A client in the runtime with SCRAM-SHA-256 authentication and JSON results. It speaks plain TCP
              today. TLS is planned in ADR 0033.
            </p>
            <p className={`${mono.className} mt-6 flex flex-wrap gap-2 text-sm`}>
              {["pg.connect", "pg.exec", "pg.query", "pg.close"].map((x) => (
                <span key={x} className="rounded-full border border-white/40 px-4 py-1.5">
                  {x}
                </span>
              ))}
            </p>
            <p className="mt-5 text-sm opacity-90">
              Worked example:{" "}
              <a className="underline underline-offset-4" href={`${GH}/blob/main/examples/db/postgres.kode`}>
                examples/db/postgres.kode
              </a>
            </p>
          </div>

          <div className={card}>
            <h3 className={h3}>Memory</h3>
            <p className={`mt-3 text-lg leading-relaxed ${muted}`}>
              Reference counted, with a leak checker. The test runner fails a program that leaks.
            </p>
          </div>
          <div className={card}>
            <h3 className={h3}>Language</h3>
            <p className={`mt-3 text-lg leading-relaxed ${muted}`}>
              int, float, bool, string. if, while, for, match. Named arguments, closures, generics, interfaces,
              classes and enums.
            </p>
          </div>
          <div className={card}>
            <h3 className={h3}>Data and errors</h3>
            <p className={`mt-3 text-lg leading-relaxed ${muted}`}>
              Lists, maps, optionals <M>T?</M>, and errors with throw, try / catch and{" "}
              <M>expr catch e {"{ }"}</M>.
            </p>
          </div>
          <div className={card}>
            <h3 className={h3}>Concurrency and I/O</h3>
            <p className={`mt-3 text-lg leading-relaxed ${muted}`}>
              spawn and await, <M>Channel&lt;T&gt;</M>, a web server with Router, JSON, an HTTP client and files.
            </p>
          </div>

          <div className={`${card} lg:col-span-2`}>
            <h3 className={h3}>Tested the way you would want</h3>
            <div className={`mt-4 grid gap-4 text-lg leading-relaxed sm:grid-cols-3 ${muted}`}>
              <p>
                <M>test</M> blocks live in the language, run by <M>kode test</M>.
              </p>
              <p>
                <M>tests/run-pass</M> programs must run and are checked for leaks.
              </p>
              <p>
                <M>tests/compile-fail</M> programs must fail with the right error code.
              </p>
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
            <a href={`${DOC}/ROADMAP.md`} className={pillLine}>
              See the roadmap
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
/* Roadmap: a real timeline                                            */
/* ------------------------------------------------------------------ */

export function Roadmap() {
  const s: [string, string, string, string][] = [
    ["Shipped", "v0.3", "Working compiler, standard library, PostgreSQL client, Linux x86-64 and macOS arm64 releases.", "bg-[#7B2FBE] dark:bg-[#C58BF2]"],
    ["Next", "M9 production track", "TLS, cycle-safe memory, byte buffers and enum payloads.", "bg-[#F5A623]"],
    ["Planned", "Windows", "Builds with the GNU toolchain today. Not a release target yet.", "bg-[#5B4BD6] dark:bg-[#8F84FF]"],
    ["Goal", "v1", "The plan is in docs/PLAN-v1.md.", "bg-[#1E0A33] dark:bg-[#F4ECFC]"],
  ];
  return (
    <Sec label="rm-t" className="!bg-[#EBDDFB] dark:!bg-[#190A2B]">
      <div className={wrap}>
        <h2 id="rm-t" className={h2}>
          Where Kode is going
        </h2>
        <p className={lead}>
          See{" "}
          <a className={link} href={`${DOC}/ROADMAP.md`}>
            docs/ROADMAP.md
          </a>{" "}
          and{" "}
          <a className={link} href={`${DOC}/PLAN-v1.md`}>
            docs/PLAN-v1.md
          </a>
          .
        </p>

        <ol className="relative mt-16 grid gap-12 md:grid-cols-4 md:gap-8">
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-[11px] hidden h-0.5 bg-[#1E0A33]/20 dark:bg-[#F4ECFC]/25 md:block"
          />
          {s.map(([when, title, body, dot]) => (
            <li key={title} className="relative">
              <span className={`block h-6 w-6 rounded-full ring-8 ring-[#EBDDFB] dark:ring-[#190A2B] ${dot}`} />
              <p className="mt-5 text-base font-medium text-[#7B2FBE] dark:text-[#C58BF2]">{when}</p>
              <h3 className="mt-1 text-2xl font-medium tracking-tight">{title}</h3>
              <p className={`mt-2 text-lg leading-relaxed ${muted}`}>{body}</p>
            </li>
          ))}
        </ol>
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
                  className="rounded-full bg-white px-8 py-4 text-lg font-medium text-[#7B2FBE] transition-colors hover:bg-[#F4ECFC] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Star on GitHub
                </a>
                <a
                  href={`${GH}/blob/main/CONTRIBUTING.md`}
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
                alt=""
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
/* Footer                                                              */
/* ------------------------------------------------------------------ */



export function Footer() {
  const columns: [string, [string, string][]][] = [
    [
      "Learn Kode",
      [
        ["Documentation", "/docs"],
        ["Get started", "/docs/get-started"],
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
                alt=""
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
