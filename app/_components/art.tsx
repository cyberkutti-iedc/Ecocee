import type { CSSProperties } from "react";
const f = (c: string): CSSProperties => ({ fill: c });

export const Defs = () => (
  <defs>
    <radialGradient id="gloss" cx=".32" cy=".28" r=".6"><stop offset="0" stopColor="#fff" stopOpacity=".8" /><stop offset=".5" stopColor="#fff" stopOpacity="0" /></radialGradient>
    <radialGradient id="shade" cx=".4" cy=".35" r=".75"><stop offset=".55" stopColor="#000" stopOpacity="0" /><stop offset="1" stopColor="#000" stopOpacity=".3" /></radialGradient>
    <linearGradient id="side"><stop offset="0" stopColor="#fff" stopOpacity=".3" /><stop offset=".5" stopColor="#fff" stopOpacity="0" /><stop offset="1" stopColor="#000" stopOpacity=".3" /></linearGradient>
  </defs>
);

export const Sphere = ({ cx, cy, r, c }: { cx: number; cy: number; r: number; c: string }) => (
  <g><circle cx={cx} cy={cy} r={r} style={f(c)} /><circle cx={cx} cy={cy} r={r} fill="url(#shade)" /><circle cx={cx} cy={cy} r={r} fill="url(#gloss)" /></g>
);

/** Isometric box. (x,y) is the top vertex, w the half-width, h the thickness. */
export const Cube = ({ x, y, w, h, c }: { x: number; y: number; w: number; h: number; c: string }) => {
  const t = `${x},${y} ${x + w},${y + w / 2} ${x},${y + w} ${x - w},${y + w / 2}`;
  const l = `${x - w},${y + w / 2} ${x},${y + w} ${x},${y + w + h} ${x - w},${y + w / 2 + h}`;
  const r = `${x + w},${y + w / 2} ${x},${y + w} ${x},${y + w + h} ${x + w},${y + w / 2 + h}`;
  return (
    <g>
      <polygon points={l} style={f(c)} /><polygon points={l} fill="#000" opacity=".12" />
      <polygon points={r} style={f(c)} /><polygon points={r} fill="#000" opacity=".28" />
      <polygon points={t} style={f(c)} /><polygon points={t} fill="#fff" opacity=".3" />
      <polyline points={`${x - w},${y + w / 2} ${x},${y} ${x + w},${y + w / 2}`} fill="none" stroke="#fff" strokeOpacity=".6" strokeWidth="1.5" />
    </g>
  );
};

export const Cyl = ({ x, y, w, h, c }: { x: number; y: number; w: number; h: number; c: string }) => {
  const ry = w * 0.22;
  return (
    <g>
      <ellipse cx={x} cy={y + h} rx={w / 2} ry={ry} style={f(c)} />
      <rect x={x - w / 2} y={y} width={w} height={h} style={f(c)} /><rect x={x - w / 2} y={y} width={w} height={h} fill="url(#side)" />
      <ellipse cx={x} cy={y + h} rx={w / 2} ry={ry} fill="#000" opacity=".12" />
      <ellipse cx={x} cy={y} rx={w / 2} ry={ry} style={f(c)} /><ellipse cx={x} cy={y} rx={w / 2} ry={ry} fill="#fff" opacity=".35" />
    </g>
  );
};

export const Ring = ({ cx, cy, r, c }: { cx: number; cy: number; r: number; c: string }) => (
  <g fill="none"><ellipse cx={cx} cy={cy + 6} rx={r} ry={r * 0.4} stroke="#000" strokeOpacity=".15" strokeWidth="12" /><ellipse cx={cx} cy={cy} rx={r} ry={r * 0.4} style={{ stroke: c }} strokeWidth="12" /><ellipse cx={cx} cy={cy - 3} rx={r} ry={r * 0.4} stroke="#fff" strokeOpacity=".45" strokeWidth="2.5" /></g>
);

const d = (s: number) => ({ className: "bob", style: { animationDelay: `${s}s` } });
const P = "#7B2FBE", AM = "#FFAE2B", MI = "#2FCB9F", SK = "#4DA8FF", CO = "#FF6F83";

export function HeroScene() {
  return (
    <svg viewBox="0 0 600 560" className="h-auto w-full" role="img" aria-label="The Kode owl standing on an isometric platform, surrounded by floating 3D shapes and a fib function in code">
      <Defs />
      <ellipse cx="300" cy="452" rx="250" ry="34" fill="#000" opacity=".1" />
      <Cube x={300} y={290} w={240} h={40} c="var(--floor)" />
      <ellipse cx="300" cy="418" rx="74" ry="14" fill="#000" opacity=".2" />
      <image href="/kode/logo.png" x="90" y="98" width="420" height="420" />
      <g {...d(0)}><Cube x={105} y={110} w={42} h={42} c={P} /></g>
      <g {...d(1.2)}><Sphere cx={505} cy={140} r={32} c={AM} /></g>
      <g {...d(0.6)}><Cyl x={528} y={290} w={64} h={72} c={SK} /></g>
      <g {...d(1.8)}><Ring cx={84} cy={330} r={46} c={MI} /></g>
      <g {...d(0.9)}><Cube x={462} y={40} w={22} h={22} c={CO} /></g>
      <g {...d(2.2)}><Sphere cx={178} cy={70} r={15} c={MI} /></g>
      <g {...d(1.5)}><Sphere cx={556} cy={225} r={11} c={P} /></g>
      <g transform="rotate(-5 120 480)">
        <rect x="22" y="426" width="236" height="108" rx="14" fill="#000" opacity=".12" transform="translate(4 6)" />
        <rect x="22" y="426" width="236" height="108" rx="14" fill="#1F1235" />
        <circle cx="40" cy="444" r="4" fill={AM} /><circle cx="54" cy="444" r="4" fill={MI} /><circle cx="68" cy="444" r="4" fill={SK} />
        <g className="mono" fontSize="13" fill="#F4ECFC">
          <text x="38" y="474"><tspan fill={AM}>fn</tspan> fib(n: int) -&gt; int {"{"}</text>
          <text x="54" y="494"><tspan fill={AM}>if</tspan> n &lt; 2 {"{"} <tspan fill={AM}>return</tspan> n {"}"}</text>
          <text x="54" y="514"><tspan fill={AM}>return</tspan> fib(n-1) + fib(n-2)</text>
        </g>
      </g>
    </svg>
  );
}

export function StackScene() {
  const rows: [number, string, string, string, string][] = [[190, AM, "Output", "Cranelift, linker", "kode-codegen"], [100, P, "Meaning", "type check, MIR", "kode-sema, kode-mir"], [10, SK, "Syntax", "lexer, parser, AST", "kode-syntax"]];
  return (
    <svg viewBox="0 0 560 400" className="h-auto w-full" role="img" aria-label="Three stacked layers of the compiler: syntax, meaning and output">
      <Defs />
      {rows.map(([y, c, t, s, k]) => (
        <g key={t}>
          <Cube x={170} y={y} w={150} h={26} c={c} />
          <line x1="320" y1={y + 75} x2="352" y2={y + 75} stroke="currentColor" strokeOpacity=".4" />
          <text x="360" y={y + 72} fontSize="20" fontWeight="650" fill="currentColor">{t}</text>
          <text x="360" y={y + 94} fontSize="14" fill="currentColor" opacity=".75">{s}</text>
          <text x="360" y={y + 114} fontSize="12" fill="currentColor" opacity=".6" className="mono">{k}</text>
        </g>
      ))}
    </svg>
  );
}

export function Gems({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 120" className={className} aria-hidden="true">
      <Defs /><g {...d(0)}><Cube x={50} y={20} w={34} h={34} c={P} /></g><g {...d(1)}><Sphere cx={130} cy={50} r={26} c={AM} /></g><g {...d(2)}><Cyl x={190} y={30} w={34} h={44} c={MI} /></g>
    </svg>
  );
}