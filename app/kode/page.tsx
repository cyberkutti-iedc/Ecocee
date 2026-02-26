"use client";
import { useState, useEffect } from "react";
import {
  ArrowRight, Check, Terminal, Code, FileCode, Book,
  Zap, Github, Download, ExternalLink, Copy, CheckCheck,
  ChevronRight, Layers, Globe, Server, GitBranch, Shuffle, X, Menu
} from "lucide-react";

// ─── Design tokens ────────────────────────────────────────────────────────────
const C = {
  // Purples — pulled from the KotlinConf reference
  bg:        "#0d0814",   // very dark purple-black
  bg2:       "#130d1e",   // slightly lighter
  card:      "#1a1028",   // card surface
  cardHover: "#1f1430",
  purple1:   "#7c3aed",   // vivid violet
  purple2:   "#a855f7",   // lighter purple
  purple3:   "#c084fc",   // lavender
  pink:      "#ec4899",   // accent pink
  gradHero:  "linear-gradient(135deg, #3b0764 0%, #6b21a8 35%, #9333ea 65%, #c026d3 100%)",
  gradBtn:   "linear-gradient(135deg, #7c3aed, #a855f7)",
  gradText:  "linear-gradient(135deg, #c084fc, #f0abfc, #e879f9)",
  border:    "rgba(167,114,252,0.15)",
  borderHi:  "rgba(167,114,252,0.45)",
  text:      "#f5f0ff",
  dim:       "#c4b5fd",
  muted:     "#7c6fa0",
  codeBg:    "#0a0614",
  mono:      "'JetBrains Mono', 'Fira Code', monospace",
  sans:      "'Outfit', system-ui, sans-serif",
};

// ─── Hooks ────────────────────────────────────────────────────────────────────
function useCopy(text: string) {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return { copied, copy };
}
function useHover() {
  const [on, setOn] = useState(false);
  return { on, onMouseEnter: () => setOn(true), onMouseLeave: () => setOn(false) };
}

// ─── Shared styles ────────────────────────────────────────────────────────────
const card = (hov = false): React.CSSProperties => ({
  background: hov ? C.cardHover : C.card,
  border: `1px solid ${hov ? C.borderHi : C.border}`,
  borderRadius: 14,
  padding: "1.4rem 1.5rem",
  transition: "all 0.2s ease",
  transform: hov ? "translateY(-2px)" : "none",
});

const PX: React.CSSProperties = { padding: "0 clamp(1.2rem, 6vw, 5rem)" };
const SEC: React.CSSProperties = { ...PX, paddingTop: "5rem", paddingBottom: "5rem" };

// ─── Code Block ───────────────────────────────────────────────────────────────
function CodeBlock({ code, label }: { code: string; label?: string }) {
  const { copied, copy } = useCopy(code);
  return (
    <div style={{ position: "relative", background: C.codeBg, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
      {label && <div style={{ fontFamily: C.mono, fontSize: 11, color: C.muted, padding: "8px 16px", borderBottom: `1px solid ${C.border}` }}>{label}</div>}
      <button onClick={copy} style={{ position: "absolute", top: 10, right: 10, display: "flex", alignItems: "center", gap: 5, background: "rgba(124,58,237,0.15)", border: `1px solid ${C.border}`, borderRadius: 6, padding: "4px 10px", cursor: "pointer", fontFamily: C.mono, fontSize: 11, color: copied ? C.purple3 : C.muted, transition: "color 0.2s" }}>
        {copied ? <CheckCheck size={12} /> : <Copy size={12} />}<span>{copied ? "Copied!" : "Copy"}</span>
      </button>
      <pre style={{ fontFamily: C.mono, fontSize: 13, lineHeight: 1.85, color: "#d4b8ff", padding: "1.3rem 1.3rem 1.3rem 1.3rem", margin: 0, overflowX: "auto", whiteSpace: "pre" }}>{code}</pre>
    </div>
  );
}

// ─── Install bar ──────────────────────────────────────────────────────────────
function InstallBar() {
  const cmd = "go install github.com/ecocee/kode-go/cmd/kode@latest";
  const { copied, copy } = useCopy(cmd);
  const { on, ...h } = useHover();
  return (
    <button onClick={copy} {...h} style={{ display: "flex", alignItems: "center", gap: 12, background: "rgba(124,58,237,0.1)", border: `1px solid ${on ? C.borderHi : C.border}`, borderRadius: 10, padding: "12px 20px", cursor: "pointer", fontFamily: C.mono, fontSize: 13, color: C.dim, width: "100%", maxWidth: 660, transition: "border-color 0.2s" }}>
      <span style={{ color: C.purple3, flexShrink: 0 }}>$</span>
      <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1, textAlign: "left" }}>{cmd}</span>
      {copied ? <CheckCheck size={14} style={{ color: C.purple3, flexShrink: 0 }} /> : <Copy size={14} style={{ color: C.muted, flexShrink: 0 }} />}
    </button>
  );
}

// ─── Feature card ─────────────────────────────────────────────────────────────
function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  const { on, ...h } = useHover();
  return (
    <div {...h} style={card(on)}>
      <div style={{ width: 42, height: 42, borderRadius: 10, background: "rgba(124,58,237,0.18)", display: "flex", alignItems: "center", justifyContent: "center", color: C.purple3, marginBottom: 14 }}>{icon}</div>
      <h3 style={{ fontFamily: C.sans, fontSize: 15, fontWeight: 600, color: C.text, marginBottom: 8 }}>{title}</h3>
      <p style={{ fontFamily: C.sans, fontSize: 13, color: C.muted, lineHeight: 1.7, margin: 0 }}>{desc}</p>
    </div>
  );
}

// ─── Code tabs ────────────────────────────────────────────────────────────────
const TABS = [
  { tab: "Hello World",    code: `// You are a developer\nfn main() {\n    print("You are a developer");\n}` },
  { tab: "Goroutines",     code: `fn main() {\n    let ch: chan<int> = chan.new();\n\n    go fn() {\n        ch <- 42;\n    }();\n\n    let v = <-ch;\n    print(v);  // 42\n}` },
  { tab: "Select",         code: `fn main() {\n    let a: chan<string> = chan.new();\n    let b: chan<string> = chan.new();\n\n    go fn() { a <- "from a"; }();\n    go fn() { b <- "from b"; }();\n\n    select {\n        case let msg = <-a: print(msg);\n        case let msg = <-b: print(msg);\n    }\n}` },
  { tab: "Functions",      code: `fn add(a: int, b: int): int {\n    return a + b;\n}\n\nfn factorial(n: int): int {\n    if (n <= 1) { return 1; }\n    return n * factorial(n - 1);\n}\n\nfn main() {\n    print(add(10, 32));    // 42\n    print(factorial(5));   // 120\n}` },
  { tab: "Error Handling", code: `fn divide(a: int, b: int): int {\n    return a / b;\n}\n\nfn main() {\n    try {\n        print(divide(10, 0));\n    } catch {\n        print("Cannot divide by zero");\n    }\n}` },
  { tab: "Arrays",         code: `fn main() {\n    let nums = [1, 2, 3, 4, 5];\n    let sum = 0;\n    for (let i = 0; i < 5; i = i + 1) {\n        sum = sum + nums[i];\n    }\n    print(sum);  // 15\n}` },
];

function CodeTabs() {
  const [active, setActive] = useState(0);
  return (
    <div style={{ maxWidth: 760 }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, background: "rgba(124,58,237,0.08)", border: `1px solid ${C.border}`, borderBottom: "none", borderRadius: "12px 12px 0 0", padding: "8px 8px 0" }}>
        {TABS.map((t, i) => (
          <button key={t.tab} onClick={() => setActive(i)} style={{ background: i === active ? C.codeBg : "transparent", border: i === active ? `1px solid ${C.border}` : "1px solid transparent", borderBottom: i === active ? `1px solid ${C.codeBg}` : "1px solid transparent", borderRadius: "8px 8px 0 0", padding: "7px 14px", cursor: "pointer", fontFamily: C.mono, fontSize: 11, color: i === active ? C.purple3 : C.muted, transition: "color 0.2s", whiteSpace: "nowrap" }}>
            {t.tab}
          </button>
        ))}
      </div>
      <div style={{ borderRadius: "0 12px 12px 12px", overflow: "hidden", border: `1px solid ${C.border}` }}>
        <CodeBlock code={TABS[active].code} />
      </div>
    </div>
  );
}

// ─── Roadmap card ─────────────────────────────────────────────────────────────
type RS = "done" | "current" | "planned";
const RM: Record<RS, { border: string; bg: string; color: string; label: string }> = {
  done:    { border: "rgba(167,114,252,0.3)", bg: "rgba(167,114,252,0.12)", color: C.purple3, label: "Released" },
  current: { border: "rgba(192,84,252,0.35)", bg: "rgba(192,84,252,0.12)", color: C.purple2, label: "In Progress" },
  planned: { border: "rgba(124,58,237,0.2)",  bg: "rgba(124,58,237,0.1)",  color: C.muted,   label: "Planned" },
};

function RoadCard({ version, title, status, items }: { version: string; title: string; status: RS; items: string[] }) {
  const s = RM[status];
  return (
    <div style={{ ...card(), borderColor: s.border }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <span style={{ fontFamily: C.mono, fontSize: 11, color: C.muted }}>{version}</span>
        <span style={{ background: s.bg, color: s.color, fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "3px 10px", borderRadius: 100 }}>{s.label}</span>
      </div>
      <h3 style={{ fontFamily: C.sans, fontSize: 14, fontWeight: 600, color: C.text, marginBottom: 12 }}>{title}</h3>
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
        {items.map(item => (
          <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
            <span style={{ color: s.color, flexShrink: 0, marginTop: 2 }}>{status === "done" ? <Check size={12} /> : <ChevronRight size={12} />}</span>
            <span style={{ fontFamily: C.sans, fontSize: 12, color: C.muted, lineHeight: 1.5 }}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Doc card ─────────────────────────────────────────────────────────────────
function DocCard({ icon, title, desc, href }: { icon: React.ReactNode; title: string; desc: string; href: string }) {
  const { on, ...h } = useHover();
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...h} style={{ ...card(on), textDecoration: "none", display: "flex", flexDirection: "column", gap: 8 }}>
      <span style={{ color: C.purple3 }}>{icon}</span>
      <h3 style={{ fontFamily: C.sans, fontSize: 14, fontWeight: 600, color: C.text, margin: 0 }}>{title}</h3>
      <p style={{ fontFamily: C.sans, fontSize: 12, color: C.muted, lineHeight: 1.65, margin: 0, flex: 1 }}>{desc}</p>
      <span style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: C.mono, fontSize: 11, color: C.purple3, marginTop: 4 }}>Read docs <ExternalLink size={10} /></span>
    </a>
  );
}

// ─── Step ─────────────────────────────────────────────────────────────────────
function Step({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", gap: 16, ...card() }}>
      <div style={{ width: 30, height: 30, borderRadius: "50%", background: "rgba(124,58,237,0.2)", color: C.purple3, fontFamily: C.mono, fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{num}</div>
      <div>
        <h4 style={{ fontFamily: C.sans, fontSize: 14, fontWeight: 600, color: C.text, marginBottom: 6 }}>{title}</h4>
        <div style={{ fontFamily: C.sans, fontSize: 12, color: C.muted, lineHeight: 1.7 }}>{children}</div>
      </div>
    </div>
  );
}

function IC({ c }: { c: React.ReactNode }) {
  return <code style={{ fontFamily: C.mono, fontSize: 11, color: C.purple3, background: "rgba(124,58,237,0.15)", padding: "2px 7px", borderRadius: 5 }}>{c}</code>;
}

// ─── Section labels ───────────────────────────────────────────────────────────
const SL = ({ c }: { c: string }) => <p style={{ fontFamily: C.mono, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: C.purple3, marginBottom: 10 }}>{c}</p>;
const ST = ({ c }: { c: React.ReactNode }) => <h2 style={{ fontFamily: C.sans, fontSize: "clamp(1.7rem,3vw,2.25rem)", fontWeight: 800, letterSpacing: "-0.02em", color: C.text, marginBottom: 12, lineHeight: 1.15 }}>{c}</h2>;
const SS = ({ c }: { c: string }) => <p style={{ fontFamily: C.sans, fontSize: 15, color: C.muted, lineHeight: 1.75, maxWidth: 520, marginBottom: 40, margin: "0 0 2.5rem" }}>{c}</p>;

// ─── Primary button ───────────────────────────────────────────────────────────
function PBtn({ href, children }: { href: string; children: React.ReactNode }) {
  const { on, ...h } = useHover();
  return (
    <a href={href} {...h} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: C.sans, fontSize: 14, fontWeight: 600, color: "#fff", background: on ? "linear-gradient(135deg,#6d28d9,#9333ea)" : C.gradBtn, padding: "13px 28px", borderRadius: 10, textDecoration: "none", transition: "background 0.2s", boxShadow: "0 4px 24px rgba(124,58,237,0.35)" }}>
      {children}
    </a>
  );
}

function GhostBtn({ href, children, ext }: { href: string; children: React.ReactNode; ext?: boolean }) {
  const { on, ...h } = useHover();
  return (
    <a href={href} target={ext ? "_blank" : undefined} rel={ext ? "noopener noreferrer" : undefined} {...h}
      style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: C.sans, fontSize: 14, color: on ? C.purple3 : C.dim, border: `1px solid ${on ? C.borderHi : C.border}`, padding: "13px 28px", borderRadius: 10, textDecoration: "none", transition: "all 0.2s" }}>
      {children}
    </a>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navLinks = ["Features","Examples","Install","Docs","Roadmap"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Outfit:wght@300;400;500;600;700;800&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        body{background:#0d0814;-webkit-font-smoothing:antialiased;}
        @keyframes heroFade{from{opacity:0;transform:translateY(24px);}to{opacity:1;transform:none;}}
        @keyframes floatUp{0%,100%{transform:translateY(0) rotate(.4deg);}50%{transform:translateY(-12px) rotate(-.4deg);}}
        @keyframes pulse{0%,100%{opacity:.6;}50%{opacity:1;}}
        .hero-in{animation:heroFade .8s ease both;}
        .hero-in-2{animation:heroFade .8s .15s ease both;opacity:0;animation-fill-mode:forwards;}
        .hero-in-3{animation:heroFade .8s .3s ease both;opacity:0;animation-fill-mode:forwards;}
        .float-win{animation:floatUp 7s ease-in-out infinite;}
        ::-webkit-scrollbar{width:5px;background:#0d0814;}
        ::-webkit-scrollbar-thumb{background:#3b1f5e;border-radius:3px;}
        @media(max-width:768px){
          .hero-grid{grid-template-columns:1fr !important;}
          .float-win{display:none !important;}
          .install-grid{grid-template-columns:1fr !important;}
          .nav-desktop{display:none !important;}
          .nav-mobile-btn{display:flex !important;}
          .footer-grid{grid-template-columns:1fr 1fr !important;}
        }
        @media(max-width:480px){
          .footer-grid{grid-template-columns:1fr !important;}
          .hero-actions{flex-direction:column !important; align-items:stretch !important;}
          .hero-actions a{justify-content:center !important;}
        }
      `}</style>

      <div style={{ minHeight: "100vh", background: C.bg, color: C.text, fontFamily: C.sans }}>

        {/* ── ANNOUNCEMENT BAR ── */}
        <div style={{ background: "linear-gradient(90deg,#6d28d9,#9333ea,#a855f7)", padding: "10px clamp(1.2rem,6vw,5rem)", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <Zap size={14} color="#fff" />
          <span style={{ fontFamily: C.sans, fontSize: 13, fontWeight: 500, color: "#fff", textAlign: "center" }}>
            Kode v0.3.0 is here — Concurrency & stdlib release →
          </span>
        </div>

        {/* ── NAV ── */}
        <nav style={{ position: "sticky", top: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 clamp(1.2rem,6vw,5rem)", height: 62, background: scrolled ? "rgba(13,8,20,0.92)" : "rgba(13,8,20,0.6)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${scrolled ? C.border : "transparent"}`, transition: "all 0.3s" }}>
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 9, fontFamily: C.mono, fontSize: 17, fontWeight: 700, color: C.purple3, textDecoration: "none" }}>
            <Terminal size={16} />kode
            <span style={{ fontFamily: C.mono, fontSize: 10, color: C.muted, border: `1px solid ${C.border}`, padding: "2px 8px", borderRadius: 100, marginLeft: 2 }}>v0.3.0</span>
          </a>

          {/* Desktop nav */}
          <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 36 }}>
            <div style={{ display: "flex", gap: 28 }}>
              {navLinks.map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} style={{ fontFamily: C.sans, fontSize: 13, color: C.muted, textDecoration: "none" }}>{l}</a>
              ))}
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <a href="https://github.com/ecocee/Kode" target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: C.sans, fontSize: 12, color: C.dim, border: `1px solid ${C.border}`, padding: "7px 14px", borderRadius: 8, textDecoration: "none" }}>
                <Github size={13} />GitHub
              </a>
              <a href="#install" style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: C.sans, fontSize: 12, fontWeight: 600, color: "#fff", background: C.gradBtn, padding: "7px 16px", borderRadius: 8, textDecoration: "none" }}>
                Get Started<ArrowRight size={12} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button className="nav-mobile-btn" onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: C.dim, padding: 4 }}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ position: "fixed", top: 62, left: 0, right: 0, zIndex: 99, background: "rgba(13,8,20,0.98)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${C.border}`, padding: "1.5rem clamp(1.2rem,6vw,5rem)", display: "flex", flexDirection: "column", gap: 24 }}>
            {navLinks.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                style={{ fontFamily: C.sans, fontSize: 16, color: C.dim, textDecoration: "none" }}>{l}</a>
            ))}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, paddingTop: 8, borderTop: `1px solid ${C.border}` }}>
              <a href="https://github.com/ecocee/Kode" target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: C.sans, fontSize: 14, color: C.dim, border: `1px solid ${C.border}`, padding: "11px 20px", borderRadius: 10, textDecoration: "none" }}>
                <Github size={15} />View on GitHub
              </a>
              <a href="#install" onClick={() => setMenuOpen(false)}
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: C.sans, fontSize: 14, fontWeight: 600, color: "#fff", background: C.gradBtn, padding: "11px 20px", borderRadius: 10, textDecoration: "none" }}>
                Get Started<ArrowRight size={14} />
              </a>
            </div>
          </div>
        )}

        {/* ── HERO ── */}
        <section style={{ minHeight: "92vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center" }}>
          {/* Big gradient backdrop — like KotlinConf */}
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 90% 70% at 60% 40%, rgba(147,51,234,0.22) 0%, rgba(109,40,217,0.12) 40%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: "10%", left: "5%", width: 340, height: 340, background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "10%", right: "5%", width: 260, height: 260, background: "radial-gradient(circle, rgba(192,84,252,0.1) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

          <div className="hero-grid" style={{ width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: "3.5rem", ...PX, paddingTop: "5rem", paddingBottom: "5rem", position: "relative", zIndex: 1 }}>

            {/* Left */}
            <div>
              <div className="hero-in" style={{ display: "inline-flex", alignItems: "center", gap: 7, border: `1px solid rgba(167,114,252,0.35)`, background: "rgba(124,58,237,0.1)", color: C.purple3, fontFamily: C.mono, fontSize: 11, padding: "5px 14px", borderRadius: 100, marginBottom: 28 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.purple3, animation: "pulse 2s infinite" }} />
                Write once. Run anywhere.
              </div>

              <h1 className="hero-in-2" style={{ fontFamily: C.sans, fontSize: "clamp(2.6rem,5.5vw,4rem)", fontWeight: 800, lineHeight: 1.06, letterSpacing: "-0.03em", marginBottom: 22, color: C.text }}>
                One codebase.<br />
                <span style={{ background: C.gradText, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Every platform.
                </span>
              </h1>

              <p className="hero-in-3" style={{ fontFamily: C.sans, fontSize: 16, color: C.muted, lineHeight: 1.78, maxWidth: 480, marginBottom: 36 }}>
                Kode is a statically typed, concurrency-first compiled language. Write your code once — deploy it everywhere. Clean syntax, powerful primitives, zero compromise.
              </p>

              <div className="hero-actions hero-in-3" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
                <PBtn href="#install"><Download size={15} />Install Kode</PBtn>
                <GhostBtn href="https://github.com/ecocee/Kode" ext><Github size={15} />View on GitHub</GhostBtn>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem 3rem", paddingTop: 24, borderTop: `1px solid ${C.border}` }}>
                {[["Static","type system"],["CSP","concurrency"],["Bytecode","compilation"],["Cross","platform"]].map(([n,l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: C.mono, fontSize: 18, fontWeight: 700, color: C.purple3 }}>{n}</div>
                    <div style={{ fontFamily: C.sans, fontSize: 11, color: C.muted, marginTop: 2 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — floating code window */}
            <div className="float-win" style={{ borderRadius: 18, border: `1px solid rgba(124,58,237,0.3)`, background: C.codeBg, boxShadow: "0 0 0 1px rgba(167,114,252,0.08), 0 32px 80px rgba(88,28,235,0.35)", overflow: "hidden" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(124,58,237,0.12)", padding: "11px 16px", borderBottom: `1px solid rgba(124,58,237,0.15)` }}>
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f57" }} />
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#febc2e" }} />
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#28c840" }} />
                <span style={{ fontFamily: C.mono, fontSize: 11, color: C.muted, marginLeft: 8 }}>main.kode</span>
              </div>
              <pre style={{ fontFamily: C.mono, fontSize: 13, lineHeight: 1.9, padding: "1.5rem 1.6rem", margin: 0, whiteSpace: "pre", color: "#c4b5fd" }}>
{`// You are a developer
fn main() {
    print("You are a developer");
}

// Concurrent channels
fn worker(ch: chan<string>) {
    ch <- "Hello, Kode!";
}

fn app() {
    let ch: chan<string> = chan.new();
    go worker(ch);
    let msg = <-ch;
    print(msg);
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* ── INSTALL QUICK ── */}
        <div style={{ display: "flex", justifyContent: "center", ...PX, paddingBottom: "1.5rem" }}>
          <InstallBar />
        </div>

        {/* ── FEATURES ── */}
        <section id="features" style={SEC}>
          <SL c="Why Kode" />
          <ST c="Built for the real world." />
          <SS c="Everything you need for backend, systems, and distributed work — in one clean language." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))", gap: 14 }}>
            <FeatureCard icon={<Shuffle size={18}/>} title="Write Once, Run Anywhere" desc="A single codebase that compiles and runs across every platform. No rewrites, no compromises." />
            <FeatureCard icon={<Zap size={18}/>} title="Concurrency First" desc="First-class goroutines, typed channels, and select — CSP concurrency baked in from day one." />
            <FeatureCard icon={<Code size={18}/>} title="Static Typing + Inference" desc="Hindley-Milner inference means you rarely write types, but get full compile-time guarantees." />
            <FeatureCard icon={<Server size={18}/>} title="Backend-First Design" desc="HTTP helpers, collections, and I/O utilities in the stdlib. Built for services and pipelines." />
            <FeatureCard icon={<Terminal size={18}/>} title="Modern CLI" desc="kode run, build, fmt, check — one fast CLI for your entire workflow." />
            <FeatureCard icon={<Globe size={18}/>} title="Cross-Platform" desc="Native binaries on Windows, macOS, and Linux via the Go toolchain — zero friction." />
          </div>
        </section>

        {/* ── EXAMPLES ── */}
        <section id="examples" style={{ ...SEC, background: C.bg2 }}>
          <SL c="Code Examples" />
          <ST c="Clean syntax. Powerful primitives." />
          <SS c="From hello world to concurrent channels — see how readable Kode really is." />
          <CodeTabs />
        </section>

        {/* ── INSTALL ── */}
        <section id="install" style={SEC}>
          <SL c="Get Started" />
          <ST c="Up in under a minute." />
          <SS c={`Install via the CLI, scaffold a project, and run your first Kode program.`} />
          <div className="install-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Step num="1" title="Install the CLI">
                Run <IC c="go install github.com/ecocee/kode-go/cmd/kode@latest" /> to add <IC c="kode" /> to your PATH.
              </Step>
              <Step num="2" title="Scaffold a project">
                <IC c="kode new myproject" /> creates a ready-to-run project.
              </Step>
              <Step num="3" title="Build and run">
                <IC c="kode build ." /> compiles your code. Then run the binary.
              </Step>
              <Step num="4" title="Explore commands">
                Use <IC c="kode run" />, <IC c="kode fmt" />, and <IC c="kode check" /> as you develop.
              </Step>
            </div>
            <CodeBlock label="terminal" code={`# Install
go install github.com/ecocee/kode-go/cmd/kode@latest

# New project
kode new myproject
cd myproject

# Build
kode build .
./myproject

# Run a file
kode run main.kode

# Tooling
kode fmt main.kode     # format
kode check main.kode   # type check
kode clean             # remove artifacts
kode version           # show version`} />
          </div>
        </section>

        {/* ── DOCS ── */}
        <section id="docs" style={{ ...SEC, background: C.bg2 }}>
          <SL c="Documentation" />
          <ST c="Everything, documented." />
          <SS c="Syntax guides, CLI references, architecture internals — all open source." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(210px,1fr))", gap: 14 }}>
            <DocCard icon={<Book size={17}/>} title="Language Syntax" desc="Complete syntax reference and grammar specification." href="https://github.com/ecocee/Kode/blob/main/docs/syntax.md" />
            <DocCard icon={<Terminal size={17}/>} title="CLI Reference" desc="Every command: run, build, fmt, check, clean, version." href="https://github.com/ecocee/Kode/blob/main/docs/cli.md" />
            <DocCard icon={<Layers size={17}/>} title="Architecture" desc="The compilation pipeline from AST to IR to native binary." href="https://github.com/ecocee/Kode/blob/main/docs/ARCHITECTURE.md" />
            <DocCard icon={<FileCode size={17}/>} title="Bytecode Format" desc="Internal bytecode spec for advanced tooling authors." href="https://github.com/ecocee/Kode/blob/main/docs/bytecode.md" />
            <DocCard icon={<Globe size={17}/>} title="Complete Wiki" desc="Language guide covering concurrency, stdlib, patterns." href="https://github.com/ecocee/Kode/blob/main/docs/wiki.md" />
            <DocCard icon={<GitBranch size={17}/>} title="Roadmap" desc="Versioned milestones from v0.2 to JIT and cloud SDKs." href="https://github.com/ecocee/Kode/blob/main/docs/roadmap.md" />
          </div>
        </section>

        {/* ── ROADMAP ── */}
        <section id="roadmap" style={SEC}>
          <SL c="Roadmap" />
          <ST c="Shipping fast, shipping right." />
          <SS c="Transparent milestones — see exactly what's done, what's in progress, and what's next." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(230px,1fr))", gap: 14 }}>
            <RoadCard version="v0.2" title="Core Language" status="done" items={["Lexer, parser, type checker","Hindley-Milner inference","IR & code generation","Runtime scheduler","Basic CLI (run, build)"]} />
            <RoadCard version="v0.3" title="Concurrency & Stdlib" status="current" items={["Full channel select","HTTP server/client","Collections library","Formatter (kode fmt)","Type-check command"]} />
            <RoadCard version="v0.4" title="Optimization & Packages" status="planned" items={["LLVM backend option","Package manager (kpm)","LSP integration","Benchmarks","Online playground"]} />
            <RoadCard version="Future" title="Cloud & JIT" status="planned" items={["JIT compilation","Actor model","Cloud-native SDKs","WebAssembly target","VS Code extension"]} />
          </div>
        </section>

        {/* ── CTA ── */}
        <div style={{ ...PX, paddingBottom: "5rem" }}>
          <div style={{ position: "relative", borderRadius: 22, overflow: "hidden", padding: "4rem clamp(2rem,5vw,4rem)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "2rem", flexWrap: "wrap", background: "linear-gradient(135deg,rgba(88,28,235,0.3) 0%,rgba(147,51,234,0.2) 50%,rgba(192,84,252,0.15) 100%)", border: `1px solid rgba(124,58,237,0.35)` }}>
            {/* inner glow */}
            <div style={{ position: "absolute", top: "50%", left: "30%", transform: "translate(-50%,-50%)", width: 300, height: 200, background: "radial-gradient(ellipse, rgba(147,51,234,0.2) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{ fontFamily: C.sans, fontSize: "clamp(1.5rem,2.5vw,2.1rem)", fontWeight: 800, color: C.text, marginBottom: 8 }}>Start building with Kode.</h2>
              <p style={{ fontFamily: C.sans, fontSize: 14, color: C.muted }}>Open source · MIT licensed · Actively developed by ECOCEE.</p>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", position: "relative", zIndex: 1 }}>
              <GhostBtn href="https://github.com/ecocee/Kode" ext><Github size={15} />Star on GitHub</GhostBtn>
              <PBtn href="#install">Install Now<ArrowRight size={14} /></PBtn>
            </div>
          </div>
        </div>

        {/* ── FOOTER ── */}
        <footer style={{ borderTop: `1px solid ${C.border}`, ...PX, paddingTop: "3rem", paddingBottom: "3rem" }}>
          <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "2.5rem 3rem", marginBottom: "2.5rem" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: C.mono, fontSize: 15, fontWeight: 700, color: C.purple3, marginBottom: 12 }}>
                <Terminal size={15} />kode
              </div>
              <p style={{ fontFamily: C.sans, fontSize: 12, color: C.muted, lineHeight: 1.75, maxWidth: 280 }}>
                A concurrency-first, statically typed compiled language. Write once, run anywhere. MIT licensed.
              </p>
            </div>
            {[
              { h: "Docs", l: [["Language Syntax","https://github.com/ecocee/Kode/blob/main/docs/syntax.md"],["CLI Reference","https://github.com/ecocee/Kode/blob/main/docs/cli.md"],["Architecture","https://github.com/ecocee/Kode/blob/main/docs/ARCHITECTURE.md"],["Complete Wiki","https://github.com/ecocee/Kode/blob/main/docs/wiki.md"]] },
              { h: "Resources", l: [["GitHub","https://github.com/ecocee/Kode"],["Examples","https://github.com/ecocee/Kode/tree/main/examples"],["Changelog","https://github.com/ecocee/Kode/blob/main/CHANGELOG.md"],["Roadmap","#roadmap"]] },
              { h: "Community", l: [["Contributing","https://github.com/ecocee/Kode/blob/main/CONTRIBUTING.md"],["Report a Bug","https://github.com/ecocee/Kode/issues"],["Discussions","https://github.com/ecocee/Kode/discussions"],["kode.ecocee.in","https://kode.ecocee.in"]] },
            ].map(({ h, l }) => (
              <div key={h}>
                <h4 style={{ fontFamily: C.sans, fontSize: 12, fontWeight: 600, color: C.dim, marginBottom: 14 }}>{h}</h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 9 }}>
                  {l.map(([label, href]) => (
                    <li key={label}><a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} style={{ fontFamily: C.sans, fontSize: 12, color: C.muted, textDecoration: "none" }}>{label}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 20, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
            <p style={{ fontFamily: C.sans, fontSize: 11, color: C.muted }}>© 2026 ECOCEE · Kode Programming Language · MIT License</p>
            <p style={{ fontFamily: C.mono, fontSize: 10, color: "#3b2060" }}>kode.ecocee.in</p>
          </div>
        </footer>

      </div>
    </>
  );
}
