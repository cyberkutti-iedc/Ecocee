"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import {
  ArrowRight, Check, Terminal, Code, FileCode,
  Book, Zap, Github, Download, ExternalLink, Copy, CheckCheck,
  ChevronRight, Layers, Globe, Server, GitBranch, Shuffle
} from "lucide-react";

// ─── CSS extracted as a plain string — avoids JSX template-literal brace issues ──
const PAGE_CSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #080b10;
    --bg2: #0c1018;
    --bg3: #111620;
    --border: rgba(255,255,255,0.07);
    --accent: #38bdf8;
    --accent2: #34d399;
    --accent3: #a78bfa;
    --text: #e2e8f0;
    --muted: #64748b;
    --code-bg: #090d14;
    --radius: 10px;
    --font-sans: 'Sora', sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
  }

  html { scroll-behavior: smooth; }
  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--font-sans);
    line-height: 1.6;
    overflow-x: hidden;
  }

  nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 clamp(1.5rem, 5vw, 4rem);
    height: 64px;
    transition: background 0.3s, border-bottom 0.3s;
  }
  nav.scrolled {
    background: rgba(8,11,16,0.88);
    backdrop-filter: blur(18px);
    border-bottom: 1px solid var(--border);
  }
  .nav-logo {
    font-family: var(--font-mono);
    font-size: 1.2rem; font-weight: 700;
    color: var(--accent); text-decoration: none;
    display: flex; align-items: center; gap: 0.5rem;
  }
  .nav-logo .ver {
    color: var(--muted); font-weight: 300; font-size: 0.78rem;
    border: 1px solid var(--border); padding: 0.1rem 0.5rem;
    border-radius: 100px; margin-left: 0.25rem;
  }
  .nav-links { display: flex; gap: 2rem; list-style: none; }
  .nav-links a {
    color: var(--muted); font-size: 0.875rem; text-decoration: none;
    transition: color 0.2s;
  }
  .nav-links a:hover { color: var(--text); }
  .nav-right { display: flex; align-items: center; gap: 0.75rem; }

  .btn-ghost {
    background: transparent; border: 1px solid var(--border);
    color: var(--text); font-family: var(--font-sans);
    font-size: 0.8rem; padding: 0.45rem 1rem; border-radius: 6px;
    cursor: pointer; text-decoration: none;
    display: inline-flex; align-items: center; gap: 0.4rem;
    transition: border-color 0.2s, color 0.2s;
  }
  .btn-ghost:hover { border-color: var(--accent); color: var(--accent); }

  .btn-primary {
    background: var(--accent); color: #000;
    font-family: var(--font-sans); font-weight: 600;
    font-size: 0.85rem; padding: 0.5rem 1.1rem; border-radius: 6px;
    border: none; cursor: pointer; text-decoration: none;
    display: inline-flex; align-items: center; gap: 0.4rem;
    transition: opacity 0.2s, transform 0.2s;
  }
  .btn-primary:hover { opacity: 0.88; transform: translateY(-1px); }
  .btn-lg { font-size: 0.95rem !important; padding: 0.75rem 1.75rem !important; border-radius: 8px !important; }

  .hero {
    min-height: 100vh;
    display: grid; grid-template-columns: 1fr 1fr;
    align-items: center; gap: 3rem;
    padding: 96px clamp(1.5rem, 5vw, 4rem) 4rem;
    position: relative; overflow: hidden;
  }
  .hero::before {
    content: '';
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 55% 50% at 10% 50%, rgba(56,189,248,0.06) 0%, transparent 60%),
      radial-gradient(ellipse 45% 55% at 85% 25%, rgba(52,211,153,0.05) 0%, transparent 60%);
    pointer-events: none;
  }
  .hero-eyebrow {
    display: inline-flex; align-items: center; gap: 0.5rem;
    border: 1px solid rgba(56,189,248,0.3);
    background: rgba(56,189,248,0.07);
    color: var(--accent); font-size: 0.72rem; font-family: var(--font-mono);
    padding: 0.35rem 0.9rem; border-radius: 100px;
    margin-bottom: 1.5rem;
  }
  .hero h1 {
    font-size: clamp(2.4rem, 5vw, 3.6rem);
    font-weight: 800; line-height: 1.1;
    letter-spacing: -0.03em; margin-bottom: 1.25rem;
  }
  .hero h1 em {
    font-style: normal;
    background: linear-gradient(135deg, var(--accent), var(--accent2));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  }
  .hero p {
    color: var(--muted); font-size: 1.05rem;
    max-width: 500px; margin-bottom: 2rem; line-height: 1.75;
  }
  .hero-actions { display: flex; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 2rem; }
  .hero-stats {
    display: flex; gap: 2.5rem; padding-top: 1rem;
    border-top: 1px solid var(--border);
  }
  .stat-num { font-size: 1.4rem; font-weight: 700; color: var(--text); font-family: var(--font-mono); }
  .stat-label { font-size: 0.72rem; color: var(--muted); }

  .hero-code {
    background: var(--code-bg); border: 1px solid var(--border);
    border-radius: 14px; overflow: hidden;
    box-shadow: 0 32px 80px rgba(0,0,0,0.5);
    animation: float 7s ease-in-out infinite;
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0.3deg); }
    50% { transform: translateY(-10px) rotate(-0.3deg); }
  }
  .hero-code-bar {
    background: #0e1420; padding: 0.7rem 1rem;
    display: flex; align-items: center; gap: 0.5rem;
    border-bottom: 1px solid var(--border);
  }
  .dot { width: 11px; height: 11px; border-radius: 50%; }
  .dot-r { background: #ff5f57; }
  .dot-y { background: #febc2e; }
  .dot-g { background: #28c840; }
  .hero-code-title { font-size: 0.72rem; color: var(--muted); margin-left: 0.5rem; font-family: var(--font-mono); }
  .hero-code pre {
    padding: 1.5rem; font-family: var(--font-mono);
    font-size: 0.84rem; line-height: 1.85; margin: 0; color: var(--text);
    white-space: pre;
  }
  .kw { color: #7dd3fc; }
  .ty { color: #86efac; }
  .fn-n { color: #c4b5fd; }
  .str { color: #fbbf24; }
  .op { color: #f472b6; }
  .punc { color: #475569; }
  .cm { color: #2d3f55; }
  .out { color: var(--accent2); }

  .install-section {
    padding: 0 clamp(1.5rem, 5vw, 4rem) 1rem;
    display: flex; justify-content: center;
  }
  .install-cmd {
    display: flex; align-items: center; gap: 0.75rem;
    background: var(--bg3); border: 1px solid var(--border);
    color: var(--text); font-family: var(--font-mono); font-size: 0.85rem;
    padding: 0.75rem 1.5rem; border-radius: 8px;
    cursor: pointer; transition: border-color 0.2s;
    max-width: 680px; width: 100%;
  }
  .install-cmd:hover { border-color: var(--accent); }
  .prompt { color: var(--accent); flex-shrink: 0; }
  .cmd-text { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 1; text-align: left; }
  .copy-icon { flex-shrink: 0; color: var(--muted); }

  section { padding: 5rem clamp(1.5rem, 5vw, 4rem); }
  .section-label {
    font-family: var(--font-mono); font-size: 0.7rem; letter-spacing: 0.15em;
    text-transform: uppercase; color: var(--accent); margin-bottom: 0.75rem;
  }
  .section-title {
    font-size: clamp(1.75rem, 3vw, 2.5rem);
    font-weight: 700; letter-spacing: -0.02em; margin-bottom: 1rem;
  }
  .section-sub { color: var(--muted); max-width: 560px; font-size: 1rem; margin-bottom: 3rem; }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.25rem;
  }
  .feature-card {
    background: var(--bg3); border: 1px solid var(--border);
    border-radius: var(--radius); padding: 1.5rem;
    transition: border-color 0.2s, transform 0.2s;
  }
  .feature-card:hover { border-color: rgba(56,189,248,0.3); transform: translateY(-2px); }
  .feature-icon {
    width: 40px; height: 40px; border-radius: 8px;
    background: rgba(56,189,248,0.1);
    display: flex; align-items: center; justify-content: center;
    color: var(--accent); margin-bottom: 1rem;
  }
  .feature-card h3 { font-size: 0.95rem; font-weight: 600; margin-bottom: 0.5rem; }
  .feature-card p { font-size: 0.85rem; color: var(--muted); line-height: 1.6; }

  .examples-section { background: var(--bg2); }
  .examples-wrapper { max-width: 800px; }
  .tab-bar {
    display: flex; gap: 0.25rem; flex-wrap: wrap;
    background: var(--bg3); border: 1px solid var(--border);
    border-bottom: none; border-radius: var(--radius) var(--radius) 0 0;
    padding: 0.5rem 0.5rem 0;
  }
  .tab-btn {
    background: transparent; border: none;
    color: var(--muted); font-family: var(--font-mono); font-size: 0.75rem;
    padding: 0.4rem 0.85rem; border-radius: 6px 6px 0 0;
    cursor: pointer; transition: color 0.2s;
  }
  .tab-btn:hover { color: var(--text); }
  .tab-btn.active {
    background: var(--code-bg); color: var(--accent);
    border: 1px solid var(--border); border-bottom: 1px solid var(--code-bg);
  }

  .code-block {
    position: relative; background: var(--code-bg);
    border: 1px solid var(--border); border-radius: var(--radius);
  }
  .tab-bar + .code-block { border-radius: 0 var(--radius) var(--radius) var(--radius); }
  .code-block pre {
    padding: 1.5rem; overflow-x: auto;
    font-family: var(--font-mono); font-size: 0.86rem;
    line-height: 1.8; margin: 0; color: var(--text);
  }
  .code-label {
    font-family: var(--font-mono); font-size: 0.7rem; color: var(--muted);
    padding: 0.6rem 1rem; border-bottom: 1px solid var(--border);
  }
  .copy-btn {
    position: absolute; top: 0.6rem; right: 0.6rem;
    background: var(--bg3); border: 1px solid var(--border);
    color: var(--muted); font-family: var(--font-mono); font-size: 0.7rem;
    padding: 0.3rem 0.6rem; border-radius: 5px;
    cursor: pointer; display: flex; align-items: center; gap: 0.35rem;
    transition: color 0.2s, border-color 0.2s;
  }
  .copy-btn:hover { color: var(--accent); border-color: var(--accent); }

  .install-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: start;
  }
  .install-steps { display: flex; flex-direction: column; gap: 1rem; }
  .step {
    display: flex; gap: 1rem; align-items: flex-start;
    background: var(--bg3); border: 1px solid var(--border);
    border-radius: var(--radius); padding: 1rem 1.25rem;
  }
  .step-num {
    width: 28px; height: 28px; border-radius: 50%;
    background: rgba(56,189,248,0.15); color: var(--accent);
    font-size: 0.72rem; font-weight: 700; font-family: var(--font-mono);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .step h4 { font-size: 0.875rem; font-weight: 600; margin-bottom: 0.2rem; }
  .step p { font-size: 0.8rem; color: var(--muted); line-height: 1.5; }
  .step code {
    font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent);
    background: rgba(56,189,248,0.08); padding: 0.1rem 0.3rem; border-radius: 3px;
  }

  .docs-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1rem;
  }
  .doc-card {
    background: var(--bg3); border: 1px solid var(--border);
    border-radius: var(--radius); padding: 1.5rem;
    text-decoration: none; color: var(--text);
    transition: border-color 0.2s, transform 0.2s;
    display: flex; flex-direction: column; gap: 0.5rem;
  }
  .doc-card:hover { border-color: var(--accent2); transform: translateY(-2px); }
  .doc-card-icon { color: var(--accent2); margin-bottom: 0.25rem; }
  .doc-card h3 { font-size: 0.9rem; font-weight: 600; }
  .doc-card p { font-size: 0.8rem; color: var(--muted); line-height: 1.5; flex: 1; }
  .doc-card-link {
    font-size: 0.72rem; color: var(--accent2); font-family: var(--font-mono);
    display: flex; align-items: center; gap: 0.3rem; margin-top: 0.5rem;
  }

  .roadmap-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.25rem;
  }
  .roadmap-card {
    background: var(--bg3); border: 1px solid var(--border);
    border-radius: var(--radius); padding: 1.5rem;
  }
  .road-done { border-color: rgba(52,211,153,0.2); }
  .road-current { border-color: rgba(56,189,248,0.25); }
  .road-planned { border-color: rgba(167,139,250,0.15); }
  .road-header {
    display: flex; justify-content: space-between; align-items: center;
    margin-bottom: 0.75rem;
  }
  .road-version { font-family: var(--font-mono); font-size: 0.72rem; color: var(--muted); }
  .road-badge {
    font-size: 0.62rem; font-weight: 600; letter-spacing: 0.05em;
    padding: 0.2rem 0.6rem; border-radius: 100px;
  }
  .road-done .road-badge { background: rgba(52,211,153,0.15); color: var(--accent2); }
  .road-current .road-badge { background: rgba(56,189,248,0.15); color: var(--accent); }
  .road-planned .road-badge { background: rgba(167,139,250,0.15); color: var(--accent3); }
  .roadmap-card h3 { font-size: 0.9rem; font-weight: 600; margin-bottom: 0.75rem; }
  .roadmap-card ul { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; }
  .roadmap-card li {
    display: flex; align-items: center; gap: 0.5rem;
    font-size: 0.8rem; color: var(--muted);
  }
  .road-done li svg { color: var(--accent2); }
  .road-current li svg { color: var(--accent); }
  .road-planned li svg { color: var(--accent3); }

  .cta-banner {
    margin: 0 clamp(1.5rem, 5vw, 4rem) 5rem;
    background: linear-gradient(135deg, rgba(56,189,248,0.07) 0%, rgba(52,211,153,0.05) 100%);
    border: 1px solid rgba(56,189,248,0.2);
    border-radius: 16px; padding: 3.5rem;
    display: flex; justify-content: space-between;
    align-items: center; gap: 2rem; flex-wrap: wrap;
  }
  .cta-banner h2 { font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 700; }
  .cta-banner p { color: var(--muted); font-size: 0.95rem; margin-top: 0.5rem; }
  .cta-actions { display: flex; gap: 0.75rem; flex-wrap: wrap; }

  footer {
    border-top: 1px solid var(--border);
    padding: 3rem clamp(1.5rem, 5vw, 4rem);
  }
  .footer-grid {
    display: grid; grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 2.5rem; margin-bottom: 2.5rem;
  }
  .footer-brand p { color: var(--muted); font-size: 0.85rem; margin-top: 0.75rem; max-width: 300px; line-height: 1.6; }
  .footer-col h4 { font-size: 0.8rem; font-weight: 600; margin-bottom: 1rem; }
  .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 0.6rem; }
  .footer-col a { color: var(--muted); font-size: 0.8rem; text-decoration: none; transition: color 0.2s; }
  .footer-col a:hover { color: var(--text); }
  .footer-bottom {
    border-top: 1px solid var(--border); padding-top: 1.5rem;
    display: flex; justify-content: space-between;
    align-items: center; flex-wrap: wrap; gap: 1rem;
  }
  .footer-bottom p { font-size: 0.72rem; color: var(--muted); }

  @media (max-width: 960px) {
    .hero { grid-template-columns: 1fr; padding-top: 110px; }
    .hero-code { display: none; }
    .install-grid { grid-template-columns: 1fr; }
    .footer-grid { grid-template-columns: 1fr 1fr; }
    .nav-links { display: none; }
  }
  @media (max-width: 600px) {
    .footer-grid { grid-template-columns: 1fr; }
    .cta-banner { padding: 2rem; }
    .hero-stats { gap: 1.5rem; }
    .install-cmd { font-size: 0.72rem; }
  }
`;

// ─── Utility: copy hook ───────────────────────────────────────────────────────
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
    <div className="code-block">
      {label && <div className="code-label">{label}</div>}
      <button className="copy-btn" onClick={copy}>
        {copied ? <CheckCheck size={14} /> : <Copy size={14} />}
        {copied ? "Copied!" : "Copy"}
      </button>
      <pre><code>{code}</code></pre>
    </div>
  );
}

// ─── Install Command ──────────────────────────────────────────────────────────
function InstallCommand() {
  const cmd = "go install github.com/ecocee/kode-go/cmd/kode@latest";
  const { copied, copy } = useCopy(cmd);
  return (
    <button className="install-cmd" onClick={copy}>
      <span className="prompt">$</span>
      <span className="cmd-text">{cmd}</span>
      {copied
        ? <CheckCheck size={14} className="copy-icon" />
        : <Copy size={14} className="copy-icon" />}
    </button>
  );
}

// ─── Feature Card ─────────────────────────────────────────────────────────────
function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode; title: string; description: string;
}) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// ─── Code Examples ────────────────────────────────────────────────────────────
const EXAMPLES = [
  {
    tab: "Hello World",
    code: `fn main() {
    let msg = "Hello, World!";
    print msg;
}`,
  },
  {
    tab: "Goroutines",
    code: `fn main() {
    let ch: chan<int> = chan.new();

    go fn() {
        ch <- 42;
    }();

    let v = <-ch;
    print v;  // 42
}`,
  },
  {
    tab: "Select",
    code: `fn main() {
    let a: chan<string> = chan.new();
    let b: chan<string> = chan.new();

    go fn() { a <- "from a"; }();
    go fn() { b <- "from b"; }();

    select {
        case let msg = <-a: print msg;
        case let msg = <-b: print msg;
    }
}`,
  },
  {
    tab: "Functions",
    code: `fn add(a: int, b: int): int {
    return a + b;
}

fn factorial(n: int): int {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

fn main() {
    print add(10, 32);    // 42
    print factorial(5);   // 120
}`,
  },
  {
    tab: "Error Handling",
    code: `fn divide(a: int, b: int): int {
    if (b == 0) {
        return a / b;
    }
    return a / b;
}

fn main() {
    try {
        print divide(10, 0);
    } catch {
        print "Cannot divide by zero";
    }
}`,
  },
  {
    tab: "Arrays",
    code: `fn main() {
    let numbers = [1, 2, 3, 4, 5];
    let sum = 0;

    for (let i = 0; i < 5; i = i + 1) {
        sum = sum + numbers[i];
    }

    print sum;  // 15
}`,
  },
];

function CodeExamples() {
  const [active, setActive] = useState(0);
  return (
    <div className="examples-wrapper">
      <div className="tab-bar">
        {EXAMPLES.map((e, i) => (
          <button
            key={e.tab}
            className={"tab-btn" + (i === active ? " active" : "")}
            onClick={() => setActive(i)}
          >
            {e.tab}
          </button>
        ))}
      </div>
      <CodeBlock code={EXAMPLES[active].code} />
    </div>
  );
}

// ─── Roadmap Card ─────────────────────────────────────────────────────────────
function RoadmapCard({ version, title, status, items }: {
  version: string; title: string;
  status: "done" | "current" | "planned"; items: string[];
}) {
  const labels = { done: "Released", current: "In Progress", planned: "Planned" };
  return (
    <div className={"roadmap-card road-" + status}>
      <div className="road-header">
        <span className="road-version">{version}</span>
        <span className="road-badge">{labels[status]}</span>
      </div>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>
            {status === "done" ? <Check size={13} /> : <ChevronRight size={13} />}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Hero Code Window (rendered via dangerouslySetInnerHTML to avoid JSX brace issues) ──
const HERO_CODE_HTML = `<span class="cm">// concurrent message passing</span>
<span class="kw">fn</span> <span class="fn-n">worker</span><span class="punc">(</span>ch<span class="punc">:</span> <span class="ty">chan</span><span class="punc">&lt;</span><span class="ty">string</span><span class="punc">&gt;)</span> <span class="punc">{</span>
    ch <span class="op">&lt;-</span> <span class="str">"job done"</span><span class="punc">;</span>
<span class="punc">}</span>

<span class="kw">fn</span> <span class="fn-n">main</span><span class="punc">()</span> <span class="punc">{</span>
    <span class="kw">let</span> ch<span class="punc">:</span> <span class="ty">chan</span><span class="punc">&lt;</span><span class="ty">string</span><span class="punc">&gt;</span> <span class="op">=</span> chan<span class="punc">.</span><span class="fn-n">new</span><span class="punc">();</span>
    <span class="kw">go</span> <span class="fn-n">worker</span><span class="punc">(</span>ch<span class="punc">);</span>
    <span class="kw">let</span> result <span class="op">=</span> <span class="op">&lt;-</span>ch<span class="punc">;</span>
    <span class="fn-n">print</span> result<span class="punc">;</span>
<span class="punc">}</span>

<span class="cm">// Output:</span>
<span class="out">&#x2192; job done</span>`;

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
        <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      </Head>

      {/* NAV */}
      <nav className={scrolled ? "scrolled" : ""}>
        <a href="#" className="nav-logo">
          <Terminal size={17} /> kode <span className="ver">v0.3.0</span>
        </a>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#examples">Examples</a></li>
          <li><a href="#install">Install</a></li>
          <li><a href="#docs">Docs</a></li>
          <li><a href="#roadmap">Roadmap</a></li>
        </ul>
        <div className="nav-right">
          <a href="https://github.com/ecocee/Kode" className="btn-ghost" target="_blank" rel="noopener noreferrer">
            <Github size={14} /> GitHub
          </a>
          <a href="#install" className="btn-primary">
            Get Started <ArrowRight size={14} />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div>
          <div className="hero-eyebrow">
            <Zap size={11} /> v0.3.0 — Concurrency &amp; stdlib release
          </div>
          <h1>
            Backend systems,<br /><em>built to scale.</em>
          </h1>
          <p>
            Kode is a concurrency-first, statically typed compiled language for backend
            and distributed systems. It compiles to idiomatic Go — giving you native
            performance and the full Go ecosystem.
          </p>
          <div className="hero-actions">
            <a href="#install" className="btn-primary btn-lg">
              <Download size={15} /> Install Kode
            </a>
            <a href="https://github.com/ecocee/Kode" className="btn-ghost btn-lg" target="_blank" rel="noopener noreferrer">
              <Github size={15} /> View on GitHub
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="stat-num">Go</div>
              <div className="stat-label">compiles to</div>
            </div>
            <div>
              <div className="stat-num">CSP</div>
              <div className="stat-label">concurrency model</div>
            </div>
            <div>
              <div className="stat-num">HM</div>
              <div className="stat-label">type inference</div>
            </div>
          </div>
        </div>

        {/* Floating code window */}
        <div className="hero-code">
          <div className="hero-code-bar">
            <span className="dot dot-r" />
            <span className="dot dot-y" />
            <span className="dot dot-g" />
            <span className="hero-code-title">server.kode</span>
          </div>
          <pre dangerouslySetInnerHTML={{ __html: HERO_CODE_HTML }} />
        </div>
      </div>

      {/* INSTALL QUICK */}
      <div className="install-section">
        <InstallCommand />
      </div>

      {/* FEATURES */}
      <section id="features">
        <div className="section-label">Why Kode</div>
        <h2 className="section-title">Designed for distributed systems.</h2>
        <p className="section-sub">
          Every feature in Kode is aimed at making backend and concurrent programming
          safer, clearer, and faster to ship.
        </p>
        <div className="features-grid">
          <FeatureCard icon={<Shuffle size={18} />} title="Built-in Concurrency" description="First-class goroutines, typed channels, and select — CSP concurrency as a core language primitive, not an afterthought." />
          <FeatureCard icon={<Zap size={18} />} title="Static Typing + Inference" description="Hindley-Milner type inference means you rarely annotate types, but still get full compile-time safety." />
          <FeatureCard icon={<Code size={18} />} title="Compiles to Go" description="Kode emits idiomatic Go code. You get native performance and seamless access to the entire Go package ecosystem." />
          <FeatureCard icon={<Server size={18} />} title="Backend-First Design" description="HTTP server primitives and collection utilities in the stdlib. Built for microservices and data pipelines." />
          <FeatureCard icon={<Terminal size={18} />} title="Modern CLI Toolchain" description="kode run, build, fmt, check — everything you need from a single fast CLI. Formatter and type checker included." />
          <FeatureCard icon={<Globe size={18} />} title="Cross-Platform" description="Portable binaries via the Go toolchain. Runs on Windows, macOS, and Linux out of the box." />
        </div>
      </section>

      {/* EXAMPLES */}
      <section id="examples" className="examples-section">
        <div className="section-label">Syntax Showcase</div>
        <h2 className="section-title">Familiar. Expressive. Concurrent.</h2>
        <p className="section-sub">
          Browse real Kode snippets — from Hello World to goroutines and select statements.
        </p>
        <CodeExamples />
      </section>

      {/* INSTALL */}
      <section id="install">
        <div className="section-label">Get Started</div>
        <h2 className="section-title">Up and running in under a minute.</h2>
        <p className="section-sub">
          Kode requires the Go toolchain. Install with{" "}
          <code style={{ fontFamily: "var(--font-mono)", fontSize: "0.9em", color: "var(--accent)", background: "rgba(56,189,248,0.08)", padding: "0.1rem 0.4rem", borderRadius: "3px" }}>
            go install
          </code>
          , scaffold a project, and start building.
        </p>
        <div className="install-grid">
          <div className="install-steps">
            <div className="step">
              <div className="step-num">1</div>
              <div>
                <h4>Install the CLI</h4>
                <p>Run <code>go install github.com/ecocee/kode-go/cmd/kode@latest</code> — this adds <code>kode</code> to your PATH.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div>
                <h4>Scaffold a new project</h4>
                <p><code>kode new myproject</code> generates a ready-to-run project structure.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div>
                <h4>Build and run</h4>
                <p><code>kode build .</code> generates Go code and compiles it. Then run the binary directly.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <div>
                <h4>Explore the CLI</h4>
                <p>Use <code>kode run</code>, <code>kode fmt</code>, and <code>kode check</code> as part of your dev workflow.</p>
              </div>
            </div>
          </div>
          <CodeBlock
            label="terminal"
            code={
`# Install via Go toolchain
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
kode version                  # show version info`
            }
          />
        </div>
      </section>

      {/* DOCS */}
      <section id="docs" style={{ background: "var(--bg2)" }}>
        <div className="section-label">Documentation</div>
        <h2 className="section-title">Everything you need to know.</h2>
        <p className="section-sub">Guides, references and architecture docs — all in the repository.</p>
        <div className="docs-grid">
          {[
            { icon: <Book size={18} />, title: "Syntax & Grammar", desc: "Complete language syntax reference and grammar specification.", href: "https://github.com/ecocee/Kode/blob/main/docs/syntax.md" },
            { icon: <Terminal size={18} />, title: "CLI Reference", desc: "All CLI commands: run, build, fmt, check, clean, version.", href: "https://github.com/ecocee/Kode/blob/main/docs/cli.md" },
            { icon: <Layers size={18} />, title: "Architecture", desc: "AST to IR to Go compilation pipeline internals.", href: "https://github.com/ecocee/Kode/blob/main/docs/ARCHITECTURE.md" },
            { icon: <FileCode size={18} />, title: "Bytecode Format", desc: "The .kode bytecode format for tooling and advanced users.", href: "https://github.com/ecocee/Kode/blob/main/docs/bytecode.md" },
            { icon: <Globe size={18} />, title: "Complete Wiki", desc: "Full language guide including concurrency, stdlib, and more.", href: "https://github.com/ecocee/Kode/blob/main/docs/wiki.md" },
            { icon: <GitBranch size={18} />, title: "Roadmap", desc: "Phased development plan from v0.2 through future JIT and cloud SDKs.", href: "https://github.com/ecocee/Kode/blob/main/docs/roadmap.md" },
          ].map(({ icon, title, desc, href }) => (
            <a key={title} href={href} target="_blank" rel="noopener noreferrer" className="doc-card">
              <div className="doc-card-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <span className="doc-card-link">Read more <ExternalLink size={11} /></span>
            </a>
          ))}
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap">
        <div className="section-label">Roadmap</div>
        <h2 className="section-title">Where Kode is headed.</h2>
        <p className="section-sub">Semantic versioned milestones for the Kode language and toolchain.</p>
        <div className="roadmap-grid">
          <RoadmapCard
            version="v0.2"
            title="Core Language"
            status="done"
            items={["Lexer, parser & type checker", "Hindley-Milner inference", "IR & Go code generation", "Runtime scheduler", "Basic CLI (run, build)"]}
          />
          <RoadmapCard
            version="v0.3"
            title="Concurrency & Stdlib"
            status="current"
            items={["Full channel select multiplexing", "HTTP server/client helpers", "Basic collections library", "Formatter (kode fmt)", "Type-check only command"]}
          />
          <RoadmapCard
            version="v0.4"
            title="Optimization & Packages"
            status="planned"
            items={["LLVM backend option", "Package manager (kpm)", "Improved tooling & LSP", "Performance benchmarks", "Online playground"]}
          />
          <RoadmapCard
            version="Future"
            title="Cloud & JIT"
            status="planned"
            items={["JIT compilation", "Actor model support", "Cloud-native SDKs", "WebAssembly target", "VS Code extension"]}
          />
        </div>
      </section>

      {/* CTA */}
      <div className="cta-banner">
        <div>
          <h2>Start building with Kode today.</h2>
          <p>Open source, MIT licensed, and actively developed by the ECOCEE team.</p>
        </div>
        <div className="cta-actions">
          <a href="https://github.com/ecocee/Kode" target="_blank" rel="noopener noreferrer" className="btn-ghost btn-lg">
            <Github size={15} /> Star on GitHub
          </a>
          <a href="#install" className="btn-primary btn-lg">
            Install Now <ArrowRight size={15} />
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="nav-logo" style={{ fontSize: "1.05rem" }}>
              <Terminal size={16} /> kode
            </a>
            <p>A concurrency-first, statically typed compiled language for backend and distributed systems. Compiles to idiomatic Go. MIT licensed.</p>
          </div>
          <div className="footer-col">
            <h4>Documentation</h4>
            <ul>
              <li><a href="https://github.com/ecocee/Kode/blob/main/docs/syntax.md" target="_blank" rel="noopener noreferrer">Language Syntax</a></li>
              <li><a href="https://github.com/ecocee/Kode/blob/main/docs/cli.md" target="_blank" rel="noopener noreferrer">CLI Reference</a></li>
              <li><a href="https://github.com/ecocee/Kode/blob/main/docs/ARCHITECTURE.md" target="_blank" rel="noopener noreferrer">Architecture</a></li>
              <li><a href="https://github.com/ecocee/Kode/blob/main/docs/wiki.md" target="_blank" rel="noopener noreferrer">Complete Wiki</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="https://github.com/ecocee/Kode" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://github.com/ecocee/Kode/tree/main/examples" target="_blank" rel="noopener noreferrer">Examples</a></li>
              <li><a href="https://github.com/ecocee/Kode/blob/main/CHANGELOG.md" target="_blank" rel="noopener noreferrer">Changelog</a></li>
              <li><a href="#roadmap">Roadmap</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Community</h4>
            <ul>
              <li><a href="https://github.com/ecocee/Kode/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">Contributing</a></li>
              <li><a href="https://github.com/ecocee/Kode/issues" target="_blank" rel="noopener noreferrer">Report a Bug</a></li>
              <li><a href="https://github.com/ecocee/Kode/discussions" target="_blank" rel="noopener noreferrer">Discussions</a></li>
              <li><a href="https://kode.ecocee.in" target="_blank" rel="noopener noreferrer">kode.ecocee.in</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 ECOCEE · Kode Programming Language · MIT License</p>
          <p style={{ fontFamily: "var(--font-mono)", color: "var(--muted)", fontSize: "0.68rem" }}>
            Built with Go · kode.ecocee.in
          </p>
        </div>
      </footer>
    </>
  );
}
