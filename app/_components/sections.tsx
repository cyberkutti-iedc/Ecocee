import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal, CodeTabs, Copy } from "./client";
import { Defs, Cube, Sphere, Cyl, Ring, StackScene, Gems } from "./art";

const GH = "https://github.com/ecocee/Kode";
const DOC = `${GH}/blob/main/docs`;
const ECOCEE_LOGO = "/logo.png"; // swap for the Ecocee logo file when you have one
const mut = { color: "var(--muted)" };
const M = ({ children }: { children: ReactNode }) => <code className="mono text-[.92em]">{children}</code>;

const icon = (k: number) => (
  <svg viewBox="0 0 90 90" className="h-20 w-20 shrink-0" aria-hidden="true">
    <Defs />
    {[<Cube key="a" x={45} y={14} w={30} h={30} c="#7B2FBE" />, <Sphere key="b" cx={45} cy={45} r={28} c="#FFAE2B" />, <Cyl key="c" x={45} y={20} w={52} h={44} c="#2FCB9F" />, <Ring key="d" cx={45} cy={46} r={34} c="#4DA8FF" />][k]}
  </svg>
);

export function Why() {
  const items = [
    ["Python-readable", "Plain syntax. Variables need no keyword, strings interpolate with ${name}, and blocks use braces."],
    ["JavaScript-familiar", "Closures, optionals with ?. and ??, and try / catch feel like home. Static types catch the rest."],
    ["Small native binaries", "A hello world builds to about 450 KB, or 373 KB stripped. No VM and nothing to install on the server."],
    ["Written for agents", "Every error has a code and a hint, and diagnostics come as JSON, so an agent can fix its own code."],
  ];
  return (
    <section id="why" aria-labelledby="why-t" className="sec">
      <div className="wrap">
        <Reveal><h2 id="why-t" className="h2 max-w-3xl">Why Kode?</h2></Reveal>
        <div className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2">
          {items.map(([t, b], n) => (
            <Reveal key={t}><div className="rule flex items-start gap-6 pt-8">{icon(n)}<div><h3 className="text-2xl font-semibold">{t}</h3><p className="mt-2" style={mut}>{b}</p></div></div></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Code() {
  return (
    <section id="code" aria-labelledby="code-t" className="sec alt">
      <div className="wrap">
        <Reveal>
          <h2 id="code-t" className="h2">Read it once. Write it twice.</h2>
          <p className="lead mt-4">The first sample is from the README. More one-idea programs are in <a className="link" href={`${GH}/tree/main/examples`}>examples/</a>, and the language fits on a <a className="link" href={`${DOC}/cheatsheet.md`}>one-page cheat sheet</a>.</p>
        </Reveal>
        <div className="mt-10"><CodeTabs /></div>
      </div>
    </section>
  );
}

const CUBES: [number, number, number, number][] = [[20, 20, 70, 0], [100, 20, 40, 0.8], [180, 20, 90, 1.6], [20, 100, 50, 1.2], [100, 100, 80, 0.4], [180, 100, 30, 2], [20, 180, 36, 2.4], [100, 180, 60, 1]];

export function Speed() {
  const rows: [string, string, number][] = [["Python", "4,658 ms", 100], ["Kode", "93 ms", 2.6], ["C", "58 ms", 1.6]];
  return (
    <section id="speed" aria-labelledby="speed-t" className="sec">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 id="speed-t" className="h2">Fast where it counts</h2>
          <p className="lead mt-4">Time to compute fib(35), measured on one development machine: macOS arm64, Apple silicon.</p>
          <div className="mt-8 space-y-4">
            {rows.map(([n, t, w]) => (
              <div key={n} className="grid grid-cols-[64px_1fr_84px] items-center gap-4">
                <span className="font-semibold">{n}</span>
                <div className="h-4 rounded-full" style={{ background: "var(--bg2)" }}><div className="bar h-4 rounded-full" style={{ width: `${Math.max(w, 2.5)}%`, background: n === "Kode" ? "var(--amber)" : "var(--brand)" }} /></div>
                <span className="mono text-right text-sm">{t}</span>
              </div>
            ))}
          </div>
          <p className="mt-6" style={mut}>Binary size: 450,696 bytes for hello world, 373,336 after <M>strip -x</M>. The numbers, targets and the rows that still miss are in <a className="link" href={`${GH}/blob/main/benchmarks/report.md`}>benchmarks/report.md</a>. HTTP benchmarks are still preliminary.</p>
        </Reveal>
        <div className="scene" aria-hidden="true"><div className="plane">
          {CUBES.map(([x, y, h, d], n) => <div key={n} className="cube" style={{ "--s": "58px", "--h": `${h}px`, left: x, top: y, animationDelay: `${d}s` } as React.CSSProperties}><i /><i /><i /></div>)}
        </div></div>
      </div>
    </section>
  );
}

export function Compiler() {
  return (
    <section aria-labelledby="comp-t" className="sec alt">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <h2 id="comp-t" className="h2">One compiler, written in Rust</h2>
          <p className="lead mt-4">Source goes through the lexer, parser, AST, type check and MIR, then Cranelift writes an object file and the linker makes the binary. Each stage is its own crate.</p>
          <p className="mt-4" style={mut}>Run <M>kode mir file.kode</M> to see the MIR, including retain and release, and <M>kode doctor</M> to see the target, linker and runtime ABI.</p>
        </Reveal>
        <div style={{ color: "var(--ink)" }}><StackScene /></div>
      </div>
    </section>
  );
}

export function Inside() {
  const card = "rounded-3xl p-7 border";
  const L = { borderColor: "var(--line)", background: "var(--bg)" };
  return (
    <section id="inside" aria-labelledby="in-t" className="sec">
      <div className="wrap">
        <Reveal><h2 id="in-t" className="h2">What is in v0.3</h2><p className="lead mt-4">A working compiler and an active standard library. Known gaps are tracked in <a className="link" href={`${DOC}/STATUS.md`}>docs/STATUS.md</a>.</p></Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <div className={`${card} lg:col-span-2`} style={{ background: "var(--brand)", color: "var(--onb)", borderColor: "transparent" }}>
            <h3 className="text-2xl font-semibold">PostgreSQL, built in</h3>
            <p className="mt-2 max-w-xl opacity-90">A client in the runtime with SCRAM-SHA-256 authentication and JSON results. It speaks plain TCP today. TLS is planned in ADR 0033.</p>
            <p className="mono mt-5 flex flex-wrap gap-2 text-sm">{["pg.connect", "pg.exec", "pg.query", "pg.close"].map((x) => <span key={x} className="rounded-lg border border-current/40 px-3 py-1">{x}</span>)}</p>
            <p className="mt-4 text-sm opacity-90">Worked example: <a className="underline" href={`${GH}/blob/main/examples/db/postgres.kode`}>examples/db/postgres.kode</a></p>
          </div>
          <div className={card} style={L}><h3 className="text-xl font-semibold">Memory</h3><p className="mt-2" style={mut}>Reference counted, with a leak checker. The test runner fails a program that leaks.</p></div>
          <div className={card} style={L}><h3 className="text-xl font-semibold">Language</h3><p className="mt-2" style={mut}>int, float, bool, string. if, while, for, match. Named arguments, closures, generics, interfaces, classes and enums.</p></div>
          <div className={card} style={L}><h3 className="text-xl font-semibold">Data and errors</h3><p className="mt-2" style={mut}>Lists, maps, optionals <M>T?</M>, and errors with throw, try / catch and <M>expr catch e {"{ }"}</M>.</p></div>
          <div className={card} style={L}><h3 className="text-xl font-semibold">Concurrency and I/O</h3><p className="mt-2" style={mut}>spawn and await, <M>Channel&lt;T&gt;</M>, a web server with Router, JSON, an HTTP client and files.</p></div>
          <div className={`${card} lg:col-span-3`} style={L}>
            <h3 className="text-xl font-semibold">Tested the way you would want</h3>
            <div className="mt-3 grid gap-4 md:grid-cols-3" style={mut}>
              <p><M>test</M> blocks live in the language, run by <M>kode test</M>.</p>
              <p><M>tests/run-pass</M> programs must run and are checked for leaks.</p>
              <p><M>tests/compile-fail</M> programs must fail with the right error code.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Agents() {
  const lines = ["kode check service.kode --format=json", "kode explain E0201", "kode test", "kode build service.kode --release"];
  return (
    <section id="agents" aria-labelledby="ag-t" className="sec alt">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <Gems className="mb-4 h-24 w-44" />
          <h2 id="ag-t" className="h2">Built for the age of agents</h2>
          <p className="lead mt-4">Errors carry codes and hints, diagnostics come out as JSON, and a language server runs on stdio. An agent can write Kode and fix it from the compiler output.</p>
          <div className="mt-8 flex flex-wrap gap-4"><a href={`${GH}/blob/main/AGENTS.md`} className="btn btn-p">Read AGENTS.md</a><a href={`${DOC}/ROADMAP.md`} className="btn btn-s">See the roadmap</a></div>
        </Reveal>
        <div className="mono rounded-2xl p-6 text-[15px] leading-8 text-[#F4ECFC]" style={{ background: "var(--code)" }} role="img" aria-label="Commands an agent can run: check with JSON output, explain an error code, test, and build">
          {lines.map((l, n) => <div key={l} className="line overflow-x-auto whitespace-nowrap" style={{ animationDelay: `${n * 0.8}s` }}><span className="text-[#FFAE2B]">$ </span>{l}</div>)}
          <span className="caret text-[#7FE0C4]">▍</span>
        </div>
      </div>
    </section>
  );
}

export function Roadmap() {
  const s: [string, string, string, string][] = [
    ["Shipped", "v0.3", "Working compiler, standard library, PostgreSQL client, Linux x86-64 and macOS arm64 releases.", "#2FCB9F"],
    ["Next", "M9 production track", "TLS, cycle-safe memory, byte buffers and enum payloads.", "#FFAE2B"],
    ["Planned", "Windows", "Builds with the GNU toolchain today. Not a release target yet.", "#4DA8FF"],
    ["Goal", "v1", "The plan is in docs/PLAN-v1.md.", "#7B2FBE"],
  ];
  return (
    <section aria-labelledby="rm-t" className="sec">
      <div className="wrap">
        <Reveal><h2 id="rm-t" className="h2">Where Kode is going</h2><p className="lead mt-4">See <a className="link" href={`${DOC}/ROADMAP.md`}>docs/ROADMAP.md</a> and <a className="link" href={`${DOC}/PLAN-v1.md`}>docs/PLAN-v1.md</a>.</p></Reveal>
        <ol className="relative mt-14 grid gap-10 md:grid-cols-4">
          <span className="absolute left-0 right-0 top-[15px] hidden h-0.5 md:block" style={{ background: "var(--line)" }} aria-hidden="true" />
          {s.map(([w, t, b, c]) => (
            <li key={t} className="relative">
              <span className="block h-8 w-8 rounded-full" style={{ background: `radial-gradient(circle at 32% 28%,#fff9,transparent 45%),${c}`, boxShadow: "inset -4px -5px 8px #0003" }} aria-hidden="true" />
              <p className="mt-4 text-sm font-semibold" style={{ color: "var(--brand)" }}>{w}</p>
              <h3 className="text-xl font-semibold">{t}</h3><p className="mt-1" style={mut}>{b}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Start() {
  return (
    <section id="start" aria-labelledby="st-t" className="sec" style={{ background: "var(--brand)", color: "var(--onb)" }}>
      <div className="wrap grid items-center gap-12 lg:grid-cols-[1.2fr_auto]">
        <Reveal>
          <h2 id="st-t" className="h2">Build Kode from source</h2>
          <p className="mt-3 max-w-xl opacity-90">Needs Rust 1.91 or newer and a C compiler. On macOS, run <M>xcode-select --install</M> first.</p>
          <div className="mt-8 grid max-w-xl gap-3">
            {["cargo build --workspace", "cargo test --workspace", "./target/debug/kode run examples/hello.kode"].map((c) => <Copy key={c} text={c} />)}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={GH} className="btn" style={{ background: "var(--onb)", color: "var(--brand)" }}>Star on GitHub</a>
            <a href={`${GH}/blob/main/CONTRIBUTING.md`} className="btn border-2 border-current">Contribute</a>
          </div>
        </Reveal>
        <Image src="/kode/logo.png" alt="" width={300} height={300} className="bob hidden h-[300px] w-[300px] scale-125 lg:block" />
      </div>
    </section>
  );
}

export function Footer() {
  const cols: [string, [string, string][]][] = [
    ["Learn", [["Cheat sheet", `${DOC}/cheatsheet.md`], ["Language spec", `${GH}/tree/main/docs/spec`], ["Examples", `${GH}/tree/main/examples`], ["Windows setup", `${DOC}/windows.md`]]],
    ["Project", [["Status", `${DOC}/STATUS.md`], ["Roadmap", `${DOC}/ROADMAP.md`], ["Changelog", `${GH}/blob/main/CHANGELOG.md`], ["Benchmarks", `${GH}/blob/main/benchmarks/report.md`]]],
    ["Community", [["GitHub", GH], ["Issues", `${GH}/issues`], ["Contributing", `${GH}/blob/main/CONTRIBUTING.md`], ["Security", `${GH}/blob/main/SECURITY.md`]]],
  ];
  return (
    <footer className="bg-[#1B0B2E] py-16 text-[#D9C8EE]">
      <div className="wrap grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div>
          <div className="flex items-center gap-2 text-white"><Image src="/kode/logo.png" alt="" width={44} height={44} className="h-11 w-11 scale-125" /><span className="text-2xl font-semibold">Kode</span></div>
          <p className="mt-4 max-w-xs text-sm">A modern programming language combining expressive syntax, native performance and powerful developer tooling.</p>
          <a href="https://ecocee.in" className="mt-6 inline-flex items-center gap-3 rounded-xl border border-white/20 px-4 py-3 text-sm text-white hover:bg-white/10">
            <Image src={ECOCEE_LOGO} alt="" width={32} height={32} className="h-8 w-8 scale-125" />
            <span>Made by <strong>Ecocee</strong><br /><span className="text-[#BBA6D4]">Kerala, India</span></span>
          </a>
        </div>
        {cols.map(([h, ls]) => (
          <nav key={h} aria-label={h}><h3 className="font-semibold text-white">{h}</h3><ul className="mt-4 space-y-2 text-sm">{ls.map(([l, u]) => <li key={l}><a href={u} className="hover:text-white">{l}</a></li>)}</ul></nav>
        ))}
      </div>
      <p className="wrap mt-12 text-sm text-[#BBA6D4]">© 2026 Ecocee. Kode is released under the Apache-2.0 license.</p>
    </footer>
  );
}