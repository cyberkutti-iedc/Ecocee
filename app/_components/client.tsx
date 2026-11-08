"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setOn(true), io.disconnect()), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${on ? "in" : ""} ${className}`}>{children}</div>;
}

const TABS = [
  { id: "Functions", file: "fib.kode", out: "Asha: fib(30) = 832040", code: `fn fib(n: int) -> int {\n    if n < 2 {\n        return n\n    }\n    return fib(n - 1) + fib(n - 2)\n}\n\nname = "Asha"\nprint("\${name}: fib(30) =", fib(30))` },
  { id: "Closures", file: "closure.kode", out: "42", code: `double = |x: int| x * 2\nprint(double(21))` },
  { id: "Command line", file: "terminal", out: "", code: `kode run examples/hello.kode\nkode build hello.kode -o hello --release\nkode test` },
];
const TOK = /(\/\/.*|"[^"]*"|\b(?:fn|if|return)\b)/g;
const KW = /^(fn|if|return)$/;

export function CodeTabs() {
  const [i, setI] = useState(0);
  const t = TABS[i];
  return (
    <div className="grid gap-6 lg:grid-cols-[200px_1fr]">
      <div role="tablist" aria-label="Code samples" className="flex gap-2 lg:flex-col">
        {TABS.map((x, n) => (
          <button key={x.id} role="tab" aria-selected={i === n} onClick={() => setI(n)}
            className="rounded-xl px-4 py-3 text-left font-semibold transition-colors"
            style={i === n ? { background: "var(--brand)", color: "var(--onb)" } : { border: "1px solid var(--line)", color: "var(--brand)" }}>
            {x.id}
          </button>
        ))}
      </div>
      <div className="overflow-hidden rounded-2xl text-[#F4ECFC] shadow-[0_30px_60px_-30px_rgba(60,20,110,.55)]" style={{ background: "var(--code)" }}>
        <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3 text-sm text-[#BBA6D4]">
          <i className="h-2.5 w-2.5 rounded-full bg-[#FFAE2B]" /><i className="h-2.5 w-2.5 rounded-full bg-[#2FCB9F]" /><i className="h-2.5 w-2.5 rounded-full bg-[#4DA8FF]" />
          <span className="mono ml-2">{t.file}</span>
        </div>
        <pre role="tabpanel" className="mono min-h-[230px] overflow-x-auto p-5 text-[15px] leading-7"><code>
          {t.code.split("\n").map((ln, n) => (
            <div key={n} className="flex"><span className="w-8 shrink-0 select-none text-[#7D6A99]">{n + 1}</span><span>
              {ln.split(TOK).map((p, k) => p.startsWith("//") ? <span key={k} className="text-[#9C88B8]">{p}</span> : p.startsWith('"') ? <span key={k} className="text-[#7FE0C4]">{p}</span> : KW.test(p) ? <span key={k} className="text-[#FFAE2B]">{p}</span> : p)}
            </span></div>
          ))}
        </code></pre>
        {t.out && <div className="mono border-t border-white/10 px-5 py-3 text-sm"><span className="text-[#9C88B8]">output  </span><span className="text-[#7FE0C4]">{t.out}</span></div>}
      </div>
    </div>
  );
}

export function Copy({ text }: { text: string }) {
  const [ok, setOk] = useState(false);
  return (
    <div className="mono flex items-center justify-between gap-4 rounded-xl px-5 py-4 text-[15px] text-[#F4ECFC]" style={{ background: "var(--code)" }}>
      <code className="overflow-x-auto whitespace-nowrap"><span className="text-[#FFAE2B]">$ </span>{text}</code>
      <button onClick={() => navigator.clipboard.writeText(text).then(() => (setOk(true), setTimeout(() => setOk(false), 1500)))} className="shrink-0 rounded-lg border border-white/30 px-3 py-1 text-sm hover:bg-white/10">{ok ? "Copied" : "Copy"}</button>
    </div>
  );
}