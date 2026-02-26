"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import {
  ArrowRight, Check, Terminal, Code, FileCode, Book,
  Zap, Github, Download, ExternalLink, Copy, CheckCheck,
  ChevronRight, Layers, Globe, Server, GitBranch, Shuffle,
} from "lucide-react";

// ─── Copy hook ────────────────────────────────────────────────────────────────
function useCopy(text: string) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return { copied, copy };
}

// ─── Code Block ───────────────────────────────────────────────────────────────
function CodeBlock({ code, label }: { code: string; label?: string }) {
  const { copied, copy } = useCopy(code);
  return (
    <div className="relative rounded-xl border border-white/[0.07] bg-[#060a10] overflow-hidden">
      {label && (
        <div className="px-4 py-2 border-b border-white/[0.07] font-mono text-xs text-slate-500">
          {label}
        </div>
      )}
      <button
        onClick={copy}
        className="absolute top-3 right-3 flex items-center gap-1.5 rounded-md border border-white/[0.07] bg-slate-900 px-2 py-1.5 font-mono text-[11px] text-slate-500 hover:text-sky-400 hover:border-sky-400/40 transition-colors"
      >
        {copied ? <CheckCheck size={12} /> : <Copy size={12} />}
        {copied ? "Copied!" : "Copy"}
      </button>
      <pre className="p-5 overflow-x-auto font-mono text-[13.5px] leading-relaxed text-slate-300 whitespace-pre">
        {code}
      </pre>
    </div>
  );
}

// ─── Install Command ──────────────────────────────────────────────────────────
function InstallCommand() {
  const cmd = "go install github.com/ecocee/kode-go/cmd/kode@latest";
  const { copied, copy } = useCopy(cmd);
  return (
    <button
      onClick={copy}
      className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-slate-900/60 px-5 py-3.5 font-mono text-sm text-slate-300 hover:border-sky-400/40 transition-colors w-full max-w-2xl"
    >
      <span className="text-sky-400 shrink-0">$</span>
      <span className="truncate text-left flex-1">{cmd}</span>
      {copied
        ? <CheckCheck size={14} className="shrink-0 text-emerald-400" />
        : <Copy size={14} className="shrink-0 text-slate-500" />}
    </button>
  );
}

// ─── Feature Card ─────────────────────────────────────────────────────────────
function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode; title: string; description: string;
}) {
  return (
    <div className="rounded-xl border border-white/[0.07] bg-slate-900/40 p-6 hover:border-sky-400/25 hover:-translate-y-0.5 transition-all duration-200">
      <div className="w-10 h-10 rounded-lg bg-sky-400/10 flex items-center justify-center text-sky-400 mb-4">
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-slate-100 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
    </div>
  );
}

// ─── Code Examples ────────────────────────────────────────────────────────────
const EXAMPLES = [
  {
    tab: "Hello World",
    code: `fn main() {\n    let msg = "Hello, World!";\n    print msg;\n}`,
  },
  {
    tab: "Goroutines",
    code: `fn main() {\n    let ch: chan<int> = chan.new();\n\n    go fn() {\n        ch <- 42;\n    }();\n\n    let v = <-ch;\n    print v;  // 42\n}`,
  },
  {
    tab: "Select",
    code: `fn main() {\n    let a: chan<string> = chan.new();\n    let b: chan<string> = chan.new();\n\n    go fn() { a <- "from a"; }();\n    go fn() { b <- "from b"; }();\n\n    select {\n        case let msg = <-a: print msg;\n        case let msg = <-b: print msg;\n    }\n}`,
  },
  {
    tab: "Functions",
    code: `fn add(a: int, b: int): int {\n    return a + b;\n}\n\nfn factorial(n: int): int {\n    if (n <= 1) { return 1; }\n    return n * factorial(n - 1);\n}\n\nfn main() {\n    print add(10, 32);   // 42\n    print factorial(5);  // 120\n}`,
  },
  {
    tab: "Error Handling",
    code: `fn divide(a: int, b: int): int {\n    return a / b;\n}\n\nfn main() {\n    try {\n        print divide(10, 0);\n    } catch {\n        print "Cannot divide by zero";\n    }\n}`,
  },
  {
    tab: "Arrays",
    code: `fn main() {\n    let nums = [1, 2, 3, 4, 5];\n    let sum = 0;\n\n    for (let i = 0; i < 5; i = i + 1) {\n        sum = sum + nums[i];\n    }\n\n    print sum;  // 15\n}`,
  },
];

function CodeExamples() {
  const [active, setActive] = useState(0);
  return (
    <div className="max-w-3xl">
      <div className="flex gap-1 flex-wrap rounded-t-xl border border-b-0 border-white/[0.07] bg-slate-900/60 px-2 pt-2">
        {EXAMPLES.map((e, i) => (
          <button
            key={e.tab}
            onClick={() => setActive(i)}
            className={`px-3.5 py-2 rounded-t-lg font-mono text-[11px] transition-colors ${
              i === active
                ? "bg-[#060a10] text-sky-400 border border-white/[0.07] border-b-[#060a10]"
                : "text-slate-500 hover:text-slate-300"
            }`}
          >
            {e.tab}
          </button>
        ))}
      </div>
      <div className="rounded-b-xl rounded-tr-xl border border-white/[0.07] bg-[#060a10] relative overflow-hidden">
        <CodeBlock code={EXAMPLES[active].code} />
      </div>
    </div>
  );
}

// ─── Roadmap Card ─────────────────────────────────────────────────────────────
type RoadmapStatus = "done" | "current" | "planned";

const statusStyles: Record<RoadmapStatus, { card: string; badge: string; icon: string }> = {
  done:    { card: "border-emerald-500/20",  badge: "bg-emerald-500/10 text-emerald-400",  icon: "text-emerald-400" },
  current: { card: "border-sky-400/25",      badge: "bg-sky-400/10 text-sky-400",          icon: "text-sky-400" },
  planned: { card: "border-violet-400/15",   badge: "bg-violet-400/10 text-violet-400",    icon: "text-violet-400" },
};
const statusLabels: Record<RoadmapStatus, string> = {
  done: "Released", current: "In Progress", planned: "Planned",
};

function RoadmapCard({ version, title, status, items }: {
  version: string; title: string; status: RoadmapStatus; items: string[];
}) {
  const s = statusStyles[status];
  return (
    <div className={`rounded-xl border bg-slate-900/40 p-5 ${s.card}`}>
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-xs text-slate-500">{version}</span>
        <span className={`text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full ${s.badge}`}>
          {statusLabels[status]}
        </span>
      </div>
      <h3 className="text-sm font-semibold text-slate-100 mb-3">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className={`flex items-center gap-2 text-xs text-slate-500 ${s.icon}`}>
            {status === "done"
              ? <Check size={12} className="shrink-0" />
              : <ChevronRight size={12} className="shrink-0" />}
            <span className="text-slate-400">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Step ─────────────────────────────────────────────────────────────────────
function Step({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 rounded-xl border border-white/[0.07] bg-slate-900/40 p-4">
      <div className="w-7 h-7 rounded-full bg-sky-400/15 text-sky-400 font-mono text-xs font-bold flex items-center justify-center shrink-0">
        {num}
      </div>
      <div>
        <h4 className="text-sm font-semibold text-slate-100 mb-1">{title}</h4>
        <div className="text-xs text-slate-500 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

// ─── Inline code helper ───────────────────────────────────────────────────────
function IC({ children }: { children: React.ReactNode }) {
  return (
    <code className="font-mono text-sky-400 bg-sky-400/[0.08] px-1 py-0.5 rounded text-[11px]">
      {children}
    </code>
  );
}

// ─── Doc Card ─────────────────────────────────────────────────────────────────
function DocCard({ icon, title, desc, href }: {
  icon: React.ReactNode; title: string; desc: string; href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-2 rounded-xl border border-white/[0.07] bg-slate-900/40 p-5 hover:border-emerald-400/30 hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="text-emerald-400 mb-1">{icon}</div>
      <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
      <p className="text-xs text-slate-500 leading-relaxed flex-1">{desc}</p>
      <span className="flex items-center gap-1 font-mono text-[11px] text-emerald-400 mt-1">
        Read more <ExternalLink size={10} />
      </span>
    </a>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Kode — Concurrency-First Compiled Language</title>
        <meta name="description" content="Kode is a statically typed, concurrency-first compiled language for backend and distributed systems. Compiles to idiomatic Go." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Sora:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-[#080b10] text-slate-200" style={{ fontFamily: "'Sora', sans-serif" }}>

        {/* ── NAV ── */}
        <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 h-16 transition-all duration-300 ${
          scrolled ? "bg-[#080b10]/85 backdrop-blur-xl border-b border-white/[0.06]" : ""
        }`}>
          <a href="#" className="flex items-center gap-2 font-mono text-lg font-bold text-sky-400 no-underline">
            <Terminal size={17} />
            kode
            <span className="text-slate-500 font-light text-xs border border-white/[0.07] px-2 py-0.5 rounded-full ml-1">
              v0.3.0
            </span>
          </a>
          <ul className="hidden md:flex gap-8 list-none">
            {["features", "examples", "install", "docs", "roadmap"].map((s) => (
              <li key={s}>
                <a href={`#${s}`} className="text-slate-500 text-sm no-underline capitalize hover:text-slate-200 transition-colors">
                  {s}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/ecocee/Kode"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-300 border border-white/[0.07] px-3.5 py-2 rounded-lg no-underline hover:border-sky-400/40 hover:text-sky-400 transition-colors"
            >
              <Github size={13} /> GitHub
            </a>
            <a
              href="#install"
              className="flex items-center gap-1.5 text-xs font-semibold text-black bg-sky-400 px-4 py-2 rounded-lg no-underline hover:opacity-90 transition-opacity"
            >
              Get Started <ArrowRight size={13} />
            </a>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-6 md:px-16 pt-24 pb-16 relative overflow-hidden">
          {/* glow blobs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[400px] bg-sky-400/[0.04] rounded-full blur-3xl" />
            <div className="absolute top-1/4 right-0 w-[400px] h-[500px] bg-emerald-400/[0.03] rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 border border-sky-400/30 bg-sky-400/[0.07] text-sky-400 font-mono text-[11px] px-3.5 py-1.5 rounded-full mb-6">
              <Zap size={10} /> v0.3.0 — Concurrency &amp; stdlib release
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight mb-5">
              Backend systems,{" "}
              <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
                built to scale.
              </span>
            </h1>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-lg mb-8">
              Kode is a concurrency-first, statically typed compiled language for backend
              and distributed systems. Compiles to idiomatic Go — native performance,
              full ecosystem.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="#install"
                className="flex items-center gap-2 text-sm font-semibold text-black bg-sky-400 px-6 py-3 rounded-lg no-underline hover:opacity-90 transition-opacity"
              >
                <Download size={15} /> Install Kode
              </a>
              <a
                href="https://github.com/ecocee/Kode"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-300 border border-white/[0.07] px-6 py-3 rounded-lg no-underline hover:border-sky-400/40 hover:text-sky-400 transition-colors"
              >
                <Github size={15} /> View on GitHub
              </a>
            </div>
            <div className="flex gap-10 pt-5 border-t border-white/[0.06]">
              {[
                { num: "Go", label: "compiles to" },
                { num: "CSP", label: "concurrency model" },
                { num: "HM", label: "type inference" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div className="font-mono text-xl font-bold text-slate-100">{num}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating code window */}
          <div className="hidden lg:block relative z-10">
            <div className="rounded-2xl border border-white/[0.07] bg-[#060a10] shadow-[0_32px_80px_rgba(0,0,0,0.5)] animate-[float_7s_ease-in-out_infinite]">
              <div className="flex items-center gap-2 bg-[#0e1420] px-4 py-3 border-b border-white/[0.07] rounded-t-2xl">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="font-mono text-[11px] text-slate-500 ml-2">server.kode</span>
              </div>
              <pre className="p-6 font-mono text-[13px] leading-[1.85] text-slate-300 whitespace-pre">
                <span className="text-slate-600">{"// concurrent message passing"}</span>{"\n"}
                <span className="text-sky-300">fn</span>{" "}
                <span className="text-violet-400">worker</span>
                <span className="text-slate-500">(</span>
                {"ch"}
                <span className="text-slate-500">:</span>{" "}
                <span className="text-emerald-400">{"chan<string>"}</span>
                <span className="text-slate-500">{")"}</span>{" "}
                <span className="text-slate-500">{"{"}</span>{"\n"}
                {"    "}{"ch "}
                <span className="text-pink-400">{"<-"}</span>{" "}
                <span className="text-amber-400">{'"job done"'}</span>
                <span className="text-slate-500">{";"}</span>{"\n"}
                <span className="text-slate-500">{"}"}</span>{"\n\n"}
                <span className="text-sky-300">fn</span>{" "}
                <span className="text-violet-400">main</span>
                <span className="text-slate-500">{"()"}</span>{" "}
                <span className="text-slate-500">{"{"}</span>{"\n"}
                {"    "}
                <span className="text-sky-300">let</span>{" ch"}
                <span className="text-slate-500">:</span>{" "}
                <span className="text-emerald-400">{"chan<string>"}</span>{" "}
                <span className="text-pink-400">{"="}</span>{" "}
                <span className="text-violet-400">chan.new</span>
                <span className="text-slate-500">{"();"}</span>{"\n"}
                {"    "}
                <span className="text-sky-300">go</span>{" "}
                <span className="text-violet-400">worker</span>
                <span className="text-slate-500">{"(ch);"}</span>{"\n"}
                {"    "}
                <span className="text-sky-300">let</span>{" result "}
                <span className="text-pink-400">{"="}</span>{" "}
                <span className="text-pink-400">{"<-"}</span>
                {"ch"}
                <span className="text-slate-500">{";"}</span>{"\n"}
                {"    "}
                <span className="text-violet-400">print</span>{" result"}
                <span className="text-slate-500">{";"}</span>{"\n"}
                <span className="text-slate-500">{"}"}</span>{"\n\n"}
                <span className="text-slate-600">{"// Output:"}</span>{"\n"}
                <span className="text-emerald-400">{"→ job done"}</span>
              </pre>
            </div>
          </div>
        </section>

        {/* ── INSTALL QUICK ── */}
        <div className="flex justify-center px-6 md:px-16 pb-4">
          <InstallCommand />
        </div>

        {/* ── FEATURES ── */}
        <section id="features" className="px-6 md:px-16 py-20">
          <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-sky-400 mb-3">Why Kode</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Designed for distributed systems.</h2>
          <p className="text-slate-400 max-w-lg mb-10 leading-relaxed">
            Every feature in Kode is aimed at making backend and concurrent programming safer, clearer, and faster to ship.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <FeatureCard icon={<Shuffle size={18} />} title="Built-in Concurrency" description="First-class goroutines, typed channels, and select — CSP concurrency as a core language primitive, not an afterthought." />
            <FeatureCard icon={<Zap size={18} />} title="Static Typing + Inference" description="Hindley-Milner type inference means you rarely annotate types, but still get full compile-time safety." />
            <FeatureCard icon={<Code size={18} />} title="Compiles to Go" description="Kode emits idiomatic Go code. Native performance and seamless access to the entire Go package ecosystem." />
            <FeatureCard icon={<Server size={18} />} title="Backend-First Design" description="HTTP server primitives and collection utilities in the stdlib. Built for microservices and data pipelines." />
            <FeatureCard icon={<Terminal size={18} />} title="Modern CLI Toolchain" description="kode run, build, fmt, check — everything from a single fast CLI. Formatter and type checker included." />
            <FeatureCard icon={<Globe size={18} />} title="Cross-Platform" description="Portable binaries via the Go toolchain. Runs on Windows, macOS, and Linux out of the box." />
          </div>
        </section>

        {/* ── EXAMPLES ── */}
        <section id="examples" className="px-6 md:px-16 py-20 bg-slate-950/60">
          <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-sky-400 mb-3">Syntax Showcase</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Familiar. Expressive. Concurrent.</h2>
          <p className="text-slate-400 max-w-lg mb-10 leading-relaxed">
            Browse real Kode snippets — from Hello World to goroutines and select statements.
          </p>
          <CodeExamples />
        </section>

        {/* ── INSTALL ── */}
        <section id="install" className="px-6 md:px-16 py-20">
          <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-sky-400 mb-3">Get Started</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Up and running in under a minute.</h2>
          <p className="text-slate-400 max-w-xl mb-10 leading-relaxed">
            Kode requires the Go toolchain. Install with <IC>go install</IC>, scaffold a project, and start building.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="flex flex-col gap-3">
              <Step num="1" title="Install the CLI">
                Run <IC>go install github.com/ecocee/kode-go/cmd/kode@latest</IC> to add <IC>kode</IC> to your PATH.
              </Step>
              <Step num="2" title="Scaffold a new project">
                <IC>kode new myproject</IC> generates a ready-to-run project structure.
              </Step>
              <Step num="3" title="Build and run">
                <IC>kode build .</IC> generates Go code and compiles it. Then run the binary directly.
              </Step>
              <Step num="4" title="Explore the CLI">
                Use <IC>kode run</IC>, <IC>kode fmt</IC>, and <IC>kode check</IC> in your dev workflow.
              </Step>
            </div>
            <CodeBlock
              label="terminal"
              code={`# Install via Go toolchain
go install github.com/ecocee/kode-go/cmd/kode@latest

# Scaffold a new project
kode new myproject
cd myproject

# Generate Go code and compile
kode build .

# Run the binary
./myproject

# Or run a single file directly
kode run path/to/file.kode

# Other useful commands
kode fmt path/to/file.kode    # auto-format
kode check path/to/file.kode  # type check only
kode clean                    # remove artifacts
kode version                  # show version info`}
            />
          </div>
        </section>

        {/* ── DOCS ── */}
        <section id="docs" className="px-6 md:px-16 py-20 bg-slate-950/60">
          <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-sky-400 mb-3">Documentation</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Everything you need to know.</h2>
          <p className="text-slate-400 max-w-lg mb-10 leading-relaxed">
            Guides, references and architecture docs — all in the repository.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <DocCard icon={<Book size={18} />} title="Syntax & Grammar" desc="Complete language syntax reference and grammar specification." href="https://github.com/ecocee/Kode/blob/main/docs/syntax.md" />
            <DocCard icon={<Terminal size={18} />} title="CLI Reference" desc="All CLI commands: run, build, fmt, check, clean, version." href="https://github.com/ecocee/Kode/blob/main/docs/cli.md" />
            <DocCard icon={<Layers size={18} />} title="Architecture" desc="AST to IR to Go compilation pipeline internals." href="https://github.com/ecocee/Kode/blob/main/docs/ARCHITECTURE.md" />
            <DocCard icon={<FileCode size={18} />} title="Bytecode Format" desc="The .kode bytecode format for tooling and advanced users." href="https://github.com/ecocee/Kode/blob/main/docs/bytecode.md" />
            <DocCard icon={<Globe size={18} />} title="Complete Wiki" desc="Full language guide including concurrency, stdlib, and more." href="https://github.com/ecocee/Kode/blob/main/docs/wiki.md" />
            <DocCard icon={<GitBranch size={18} />} title="Roadmap" desc="Phased development plan from v0.2 through future JIT and cloud SDKs." href="https://github.com/ecocee/Kode/blob/main/docs/roadmap.md" />
          </div>
        </section>

        {/* ── ROADMAP ── */}
        <section id="roadmap" className="px-6 md:px-16 py-20">
          <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-sky-400 mb-3">Roadmap</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Where Kode is headed.</h2>
          <p className="text-slate-400 max-w-lg mb-10 leading-relaxed">
            Semantic versioned milestones for the Kode language and toolchain.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <RoadmapCard version="v0.2" title="Core Language" status="done"
              items={["Lexer, parser & type checker", "Hindley-Milner inference", "IR & Go code generation", "Runtime scheduler", "Basic CLI (run, build)"]} />
            <RoadmapCard version="v0.3" title="Concurrency & Stdlib" status="current"
              items={["Full channel select multiplexing", "HTTP server/client helpers", "Basic collections library", "Formatter (kode fmt)", "Type-check only command"]} />
            <RoadmapCard version="v0.4" title="Optimization & Packages" status="planned"
              items={["LLVM backend option", "Package manager (kpm)", "Improved tooling & LSP", "Performance benchmarks", "Online playground"]} />
            <RoadmapCard version="Future" title="Cloud & JIT" status="planned"
              items={["JIT compilation", "Actor model support", "Cloud-native SDKs", "WebAssembly target", "VS Code extension"]} />
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="mx-6 md:mx-16 mb-20 rounded-2xl border border-sky-400/20 bg-gradient-to-br from-sky-400/[0.07] to-emerald-400/[0.04] p-10 md:p-14 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Start building with Kode today.</h2>
            <p className="text-slate-400 text-sm">Open source, MIT licensed, and actively developed by the ECOCEE team.</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="https://github.com/ecocee/Kode"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-300 border border-white/[0.07] px-5 py-3 rounded-lg no-underline hover:border-sky-400/40 hover:text-sky-400 transition-colors"
            >
              <Github size={15} /> Star on GitHub
            </a>
            <a
              href="#install"
              className="flex items-center gap-2 text-sm font-semibold text-black bg-sky-400 px-5 py-3 rounded-lg no-underline hover:opacity-90 transition-opacity"
            >
              Install Now <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* ── FOOTER ── */}
        <footer className="border-t border-white/[0.06] px-6 md:px-16 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 font-mono text-base font-bold text-sky-400 mb-3">
                <Terminal size={16} /> kode
              </div>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                A concurrency-first, statically typed compiled language for backend and distributed systems.
                Compiles to idiomatic Go. MIT licensed.
              </p>
            </div>
            {[
              {
                heading: "Documentation",
                links: [
                  { label: "Language Syntax", href: "https://github.com/ecocee/Kode/blob/main/docs/syntax.md" },
                  { label: "CLI Reference", href: "https://github.com/ecocee/Kode/blob/main/docs/cli.md" },
                  { label: "Architecture", href: "https://github.com/ecocee/Kode/blob/main/docs/ARCHITECTURE.md" },
                  { label: "Complete Wiki", href: "https://github.com/ecocee/Kode/blob/main/docs/wiki.md" },
                ],
              },
              {
                heading: "Resources",
                links: [
                  { label: "GitHub", href: "https://github.com/ecocee/Kode" },
                  { label: "Examples", href: "https://github.com/ecocee/Kode/tree/main/examples" },
                  { label: "Changelog", href: "https://github.com/ecocee/Kode/blob/main/CHANGELOG.md" },
                  { label: "Roadmap", href: "#roadmap" },
                ],
              },
              {
                heading: "Community",
                links: [
                  { label: "Contributing", href: "https://github.com/ecocee/Kode/blob/main/CONTRIBUTING.md" },
                  { label: "Report a Bug", href: "https://github.com/ecocee/Kode/issues" },
                  { label: "Discussions", href: "https://github.com/ecocee/Kode/discussions" },
                  { label: "kode.ecocee.in", href: "https://kode.ecocee.in" },
                ],
              },
            ].map(({ heading, links }) => (
              <div key={heading}>
                <h4 className="text-xs font-semibold text-slate-300 mb-4">{heading}</h4>
                <ul className="space-y-2.5 list-none">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-xs text-slate-500 no-underline hover:text-slate-200 transition-colors"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <p className="text-[11px] text-slate-600">© 2026 ECOCEE · Kode Programming Language · MIT License</p>
            <p className="font-mono text-[10px] text-slate-700">Built with Go · kode.ecocee.in</p>
          </div>
        </footer>

      </div>

      {/* Float animation keyframe — injected once as a tiny global */}
      <style>{`@keyframes float{0%,100%{transform:translateY(0) rotate(.3deg)}50%{transform:translateY(-10px) rotate(-.3deg)}}`}</style>
    </>
  );
}
