
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  Code2,
  Github,
  Layers3,
  Package,
  Rocket,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Kode Documentation — Modern Systems Programming Language",
  description:
    "Learn Kode, a modern statically typed programming language. Explore installation, language syntax, modules, concurrency, server development and practical examples.",
};

const documentation = [
  {
    number: "01",
    title: "Installation",
    description:
      "Set up Kode on your machine and run your first program.",
    href: "/kode/docs/installation",
    icon: Terminal,
    tag: "Getting started",
  },
  {
    number: "02",
    title: "Language Syntax",
    description:
      "Learn variables, types, operators, functions and control flow.",
    href: "/kode/docs/language-syntax",
    icon: Code2,
    tag: "Language",
  },
  {
    number: "03",
    title: "Module System",
    description:
      "Organise your code with imports, exports and reusable modules.",
    href: "/kode/docs/module-system",
    icon: Layers3,
    tag: "Language",
  },
  {
    number: "04",
    title: "CLI Commands",
    description:
      "Run, build, check and format your Kode projects.",
    href: "/kode/docs/cli-commands",
    icon: Terminal,
    tag: "Tooling",
  },
  {
    number: "05",
    title: "Server Module",
    description:
      "Build HTTP services with Kode's server standard library.",
    href: "/kode/docs/server-module",
    icon: Workflow,
    tag: "Development",
  },
  {
    number: "06",
    title: "Code Examples",
    description:
      "Explore practical examples covering functions, patterns and concurrency.",
    href: "/kode/docs/examples",
    icon: BookOpen,
    tag: "Reference",
  },
];

const examples = [
  {
    title: "Hello, Kode",
    file: "hello.kode",
    description: "A first look at a Kode program.",
    code: `fn main() {
    let name = "Kode"
    let version = 3.3

    print("Hello from \${name} v\${version}!")
}

// Run with: kode hello.kode`,
  },
  {
    title: "HTTP Server",
    file: "server.kode",
    description: "Create a simple HTTP server with routes.",
    code: `import { newServer, start, get, post, okJSON } from "server"

fn main() {
    let srv = newServer(8080)

    get(srv, "/api/hello", fn(req) {
        return okJSON("{\\"message\\": \\"Hello, World!\\"}")
    })

    post(srv, "/api/users", fn(req) {
        let data = body(req)
        return created("{\\"id\\": 1, \\"status\\": \\"created\\"}")
    })

    start(srv)
}`,
  },
  {
    title: "Concurrency",
    file: "concurrent.kode",
    description: "Use channels to exchange messages between workers.",
    code: `fn main() {
    let messages = make(Channel<string>)

    spawn {
        send(messages, "Hello from worker 1")
    }

    spawn {
        send(messages, "Hello from worker 2")
    }

    print(receive(messages))
    print(receive(messages))
}`,
  },
];

const implemented = [
  "Type system with inference",
  "Arithmetic, bitwise and logical operators",
  "Structs, enums, traits and generics",
  "Pattern matching and destructuring",
  "Module imports and exports",
  "Concurrency primitives and channels",
  "Bytecode VM and Go code generation",
  "HTTP server standard library",
];

const inDevelopment = [
  "File I/O operations",
  "String manipulation utilities",
  "Math library functions",
  "Kode package manager",
];

const planned = [
  "Async/await syntax",
  "LLVM backend",
  "WebAssembly target",
  "Foreign Function Interface",
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function CodeExample({
  title,
  file,
  description,
  code,
}: {
  title: string;
  file: string;
  description: string;
  code: string;
}) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-5 py-4">
        <div>
          <h3 className="text-sm font-semibold text-slate-950">{title}</h3>
          <p className="mt-1 text-xs text-slate-500">{description}</p>
        </div>
        <span className="rounded-md bg-slate-100 px-3 py-1.5 font-mono text-xs text-slate-600">
          {file}
        </span>
      </div>

      <pre className="overflow-x-auto bg-[#101820] p-5 text-[13px] leading-7 text-slate-100 sm:p-6">
        <code>{code}</code>
      </pre>
    </article>
  );
}

function StatusList({
  title,
  items,
  variant,
}: {
  title: string;
  items: string[];
  variant: "complete" | "progress" | "planned";
}) {
  const styles = {
    complete: {
      dot: "bg-emerald-500",
      text: "text-emerald-700",
      label: "Implemented",
    },
    progress: {
      dot: "bg-amber-500",
      text: "text-amber-700",
      label: "In development",
    },
    planned: {
      dot: "bg-slate-400",
      text: "text-slate-600",
      label: "Planned",
    },
  };

  const style = styles[variant];

  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <span className={`h-2 w-2 rounded-full ${style.dot}`} />
        <h3 className="text-sm font-semibold text-slate-950">{title}</h3>
        <span className={`ml-auto text-xs ${style.text}`}>
          {items.length} features
        </span>
      </div>

      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
            {variant === "complete" ? (
              <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
            ) : (
              <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${style.dot}`} />
            )}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function DocsPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 pb-24 pt-10 sm:px-8 lg:px-12">
      {/* Intro */}
      <section className="border-b border-slate-200 pb-14 pt-6 sm:pb-20">
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <Badge
            variant="outline"
            className="rounded-full border-blue-200 bg-blue-50 px-3 py-1 text-blue-700"
          >
            Kode v0.3.3
          </Badge>
          <span className="text-xs text-slate-500">March 2026 release</span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <span className="text-xs text-slate-500">Official documentation</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-medium text-blue-700">
              The Kode programming language
            </p>

            <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
              Build with
              <br />
              <span className="text-blue-700">Kode.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              A modern, statically typed systems programming language
              designed for performance, safety and developer productivity.
              Explore the language, understand its features and start
              building with Kode.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-blue-700 px-6 text-sm font-medium text-white hover:bg-blue-800"
              >
                <Link href="/kode/docs/quick-start">
                  <Rocket className="mr-2 h-4 w-4" />
                  Get started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-slate-300 bg-white px-6 text-sm text-slate-800 hover:bg-slate-50"
              >
                <a
                  href="https://github.com/ecocee/kode-go"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View source
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Product information panel */}
          <div className="relative overflow-hidden rounded-2xl bg-[#101820] p-6 text-white sm:p-8">
            <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-blue-500/15 blur-3xl" />

            <div className="relative">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-slate-400">
                  Language overview
                </span>
                <Code2 className="h-5 w-5 text-blue-400" />
              </div>

              <div className="grid grid-cols-2 gap-x-6 gap-y-8 pt-7">
                <div>
                  <p className="text-3xl font-semibold tracking-tight">0.3.3</p>
                  <p className="mt-2 text-xs text-slate-400">Current version</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold tracking-tight">Static</p>
                  <p className="mt-2 text-xs text-slate-400">Type system</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold tracking-tight">VM</p>
                  <p className="mt-2 text-xs text-slate-400">Execution model</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold tracking-tight">Go</p>
                  <p className="mt-2 text-xs text-slate-400">Code generation</p>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="text-xs leading-6 text-slate-400">
                  Explore the language reference, standard library and
                  development tools in the documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core capabilities */}
      <section className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="Language capabilities"
          title="Designed around the way systems are built."
          description="Kode combines a modern type system, flexible execution and built-in concurrency features."
        />

        <div className="mt-10 grid gap-0 border-y border-slate-200 md:grid-cols-3 md:divide-x md:divide-slate-200">
          <div className="py-7 md:pr-8">
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
              <Zap className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-950">
              Multiple backends
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Stack-based VM execution for portability, with optional Go
              code generation for native performance.
            </p>
          </div>

          <div className="border-t border-slate-200 py-7 md:border-t-0 md:px-8">
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
              <Code2 className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-950">
              Modern type system
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Static typing, type inference, generics, traits, interfaces
              and pattern matching.
            </p>
          </div>

          <div className="border-t border-slate-200 py-7 md:border-t-0 md:pl-8">
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
              <Workflow className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-950">
              Built-in concurrency
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Lightweight goroutines, channels, select statements and
              synchronization primitives.
            </p>
          </div>
        </div>
      </section>

      {/* Documentation navigation */}
      <section className="border-t border-slate-200 py-16 sm:py-20">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Documentation"
            title="Everything you need to get started."
            description="Follow the learning path or jump directly to the topic you need."
          />

          <Link
            href="/kode/docs/quick-start"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900"
          >
            Quick start guide
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
          {documentation.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="group grid gap-4 py-6 transition-colors hover:bg-slate-50 sm:grid-cols-[60px_1fr_auto] sm:items-center sm:px-4"
              >
                <span className="font-mono text-xs text-slate-400">
                  {item.number}
                </span>

                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-colors group-hover:bg-blue-50 group-hover:text-blue-700">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-semibold text-slate-950 transition-colors group-hover:text-blue-700">
                        {item.title}
                      </h3>
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-slate-500">
                        {item.tag}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>

                <ArrowRight className="hidden h-5 w-5 text-slate-400 transition-all group-hover:translate-x-1 group-hover:text-blue-700 sm:block" />
              </Link>
            );
          })}
        </div>
      </section>

      {/* Code examples */}
      <section className="border-t border-slate-200 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Learn by example"
          title="See Kode in action."
          description="Start with a simple program, explore server development and learn how concurrent tasks communicate."
        />

        <div className="mt-10 grid gap-6">
          {examples.map((example) => (
            <CodeExample key={example.file} {...example} />
          ))}
        </div>

        <div className="mt-6">
          <Link
            href="/kode/docs/examples"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900"
          >
            Explore all examples
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Feature status */}
      <section className="border-t border-slate-200 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Development progress"
          title="Where Kode stands today."
          description="A snapshot of the language roadmap for version 0.3.3."
        />

        <div className="mt-10 grid gap-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:grid-cols-3">
          <StatusList
            title="Fully implemented"
            items={implemented}
            variant="complete"
          />

          <div className="border-t border-slate-200 pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <StatusList
              title="In development"
              items={inDevelopment}
              variant="progress"
            />
          </div>

          <div className="border-t border-slate-200 pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <StatusList
              title="Planned"
              items={planned}
              variant="planned"
            />
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="overflow-hidden rounded-2xl bg-[#101820] px-6 py-12 text-white sm:px-10 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-400">
              Start building
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Your next project starts with Kode.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              Read the quick start guide, explore the language and build
              your first Kode application.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-white px-6 text-slate-950 hover:bg-slate-100"
            >
              <Link href="/kode/docs/quick-start">
                Get started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-white/25 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white"
            >
              <a
                href="https://github.com/ecocee/kode-go"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="flex flex-col gap-3 border-t border-slate-200 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>Kode documentation · Version 0.3.3</p>
        <p>
          Built by{" "}
          <a
            href="https://ecocee.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-slate-700 hover:text-blue-700"
          >
            ECOCEE
          </a>
        </p>
      </footer>
    </main>
  );
}
