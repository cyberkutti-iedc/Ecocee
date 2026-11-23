"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { trackInstallCopy } from "@/lib/analytics";

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
  {
    id: "Functions",
    file: "fib.kode",
    out: "Worker: fib(30) = 832040",
    code: `fn fib(n: int) -> int {
    if n < 2 {
        return n
    }
    return fib(n - 1) + fib(n - 2)
}

name = "Worker"
print("\${name}: fib(30) =", fib(30))`
  },
  {
    id: "Concurrency",
    file: "tasks.kode",
    out: "received: 10\nreceived: 20\nreceived: 30",
    code: `// Lightweight tasks and typed channels
ch = Channel<int>(capacity: 5)

spawn {
    for i in 1..=3 {
        ch.send(i * 10)
    }
    ch.close()
}

while val = ch.recv() {
    print("received:", val)
}`
  },
  {
    id: "HTTP Server",
    file: "api.kode",
    out: "Listening on http://localhost:8080",
    code: `// Self-contained HTTP server — zero external dependencies
router = Router()

router.get("/health", |req| {
    return Response.json({ status: "healthy", version: "0.3.6" })
})

router.get("/items/:id", |req| {
    id = req.params["id"]
    return Response.json({ id: id, ready: true })
})

serve(router, port: 8080)`
  },
  {
    id: "PostgreSQL",
    file: "db.kode",
    out: "connected, 4 active records fetched",
    code: `// Native client with SCRAM-SHA-256 and connection pooling
conn = pg.connect("postgres://app:secret@localhost:5432/main")

users = conn.query("SELECT id, name FROM users WHERE active = true")
for u in users {
    print(u["id"], u["name"])
}

conn.close()`
  },
  {
    id: "CLI Tooling",
    file: "terminal",
    out: "",
    code: `kode run examples/hello.kode
kode check service.kode --format=json
kode test
kode build service.kode --release -o service`
  },
];
const TOK = /(\/\/.*|"[^"]*"|\b(?:fn|if|return|spawn|await|while|for|in|match|try|catch|throw|serve|Channel|Router|Response|pg)\b)/g;
const KW = /^(fn|if|return|spawn|await|while|for|in|match|try|catch|throw)$/;
const TYP = /^(Channel|Router|Response|pg|serve)$/;

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
              {ln.split(TOK).map((p, k) => p.startsWith("//") ? <span key={k} className="text-[#9C88B8]">{p}</span> : p.startsWith('"') ? <span key={k} className="text-[#7FE0C4]">{p}</span> : KW.test(p) ? <span key={k} className="text-[#FFAE2B]">{p}</span> : TYP.test(p) ? <span key={k} className="text-[#C58BF2] font-medium">{p}</span> : p)}
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

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setOk(true);
      setTimeout(() => setOk(false), 1500);
    });
    trackInstallCopy();
  };

  return (
    <div className="mono flex items-center justify-between gap-4 rounded-xl px-5 py-4 text-[15px] text-[#F4ECFC]" style={{ background: "var(--code)" }}>
      <code className="overflow-x-auto whitespace-nowrap"><span className="text-[#FFAE2B]">$ </span>{text}</code>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={`Copy command: ${text}`}
        className="shrink-0 rounded-lg border border-white/30 px-3 py-1 text-sm hover:bg-white/10"
      >
        {ok ? "Copied" : "Copy"}
      </button>
    </div>
  );
}