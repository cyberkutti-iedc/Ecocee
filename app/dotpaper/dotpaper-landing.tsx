"use client";

import { useEffect, useState } from "react";
import type { KeyboardEvent, MouseEvent, ReactNode } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  Code,
  Cpu,
  Database,
  LayoutDashboard,
  Monitor,
  Package,
  Play,
  Receipt,
  RefreshCw,
  ShieldCheck,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { GOOGLE_FORM_URL } from "@/lib/config";

/* ------------------------------------------------------------------ */
/* Config                                                             */
/* ------------------------------------------------------------------ */

const CONTACT_HREF = GOOGLE_FORM_URL;
const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

/* ------------------------------------------------------------------ */
/* Data                                                               */
/* ------------------------------------------------------------------ */

type Tone = "indigo" | "emerald" | "amber" | "slate" | "red";

const TONES: Record<Tone, string> = {
  indigo: "bg-indigo-50 text-indigo-700 ring-indigo-600/20",
  emerald: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  amber: "bg-amber-50 text-amber-700 ring-amber-600/20",
  slate: "bg-slate-100 text-slate-600 ring-slate-500/20",
  red: "bg-red-50 text-red-700 ring-red-600/20",
};

type Preview = {
  id: string;
  label: string;
  Icon: LucideIcon;
  metrics: { label: string; value: string; note: string }[];
  rows: { title: string; sub: string; status: string; tone: Tone }[];
  spark?: { title: string; bars: number[] };
};

const PREVIEWS: Preview[] = [
  {
    id: "service",
    label: "Service Desk",
    Icon: Wrench,
    metrics: [
      { label: "Active work orders", value: "24", note: "7 awaiting approval" },
      { label: "Finished this month", value: "38", note: "Closed with full history" },
      { label: "Awaiting payment", value: "6", note: "Linked to invoices" },
    ],
    rows: [
      { title: "WO-1048 Compressor repair", sub: "Al Noor Trading", status: "Diagnosing", tone: "amber" },
      { title: "WO-1047 Engine service", sub: "Kochi Marine Services", status: "Approved", tone: "indigo" },
      { title: "WO-1046 Pump replacement", sub: "Nair Traders", status: "Completed", tone: "emerald" },
    ],
    spark: { title: "Jobs finished per week", bars: [40, 56, 48, 70, 64, 82, 76, 96] },
  },
  {
    id: "accounting",
    label: "Financials",
    Icon: Receipt,
    metrics: [
      { label: "Invoiced this month", value: "482k", note: "Across 63 invoices" },
      { label: "Collected", value: "391k", note: "81% of invoiced" },
      { label: "Outstanding", value: "91k", note: "6 invoices open" },
    ],
    rows: [
      { title: "INV-2089 Gulf Star Workshop", sub: "Draft", status: "Draft", tone: "slate" },
      { title: "INV-2088 Kochi Marine", sub: "Sent", status: "Sent", tone: "indigo" },
      { title: "INV-2087 Al Noor Trading", sub: "Payment recorded", status: "Paid", tone: "emerald" },
    ],
    spark: { title: "Revenue, last 8 weeks", bars: [52, 64, 58, 76, 88, 80, 96, 104] },
  },
  {
    id: "crm",
    label: "CRM",
    Icon: Users,
    metrics: [
      { label: "Customers", value: "212", note: "One shared record" },
      { label: "Open enquiries", value: "12", note: "4 follow-ups today" },
      { label: "Quotes out", value: "9", note: "Awaiting reply" },
    ],
    rows: [
      { title: "Al Noor Trading", sub: "Annual service enquiry", status: "Follow up", tone: "amber" },
      { title: "Malabar Auto Care", sub: "New enquiry", status: "New", tone: "indigo" },
      { title: "Nair Traders", sub: "Repeat customer", status: "Active", tone: "emerald" },
    ],
  },
  {
    id: "inventory",
    label: "Inventory",
    Icon: Package,
    metrics: [
      { label: "Items tracked", value: "640", note: "Across locations" },
      { label: "Low stock", value: "7", note: "Reorder suggested" },
      { label: "On order", value: "3", note: "Purchase orders open" },
    ],
    rows: [
      { title: "Air filters", sub: "8 in stock", status: "Reorder", tone: "amber" },
      { title: "Brake pads", sub: "42 in stock", status: "Healthy", tone: "emerald" },
      { title: "Battery 70Ah", sub: "14 in stock", status: "Healthy", tone: "emerald" },
    ],
  },
];

const LAYERS: {
  Icon: LucideIcon;
  tag: string;
  title: string;
  points: string[];
}[] = [
  {
    Icon: Code,
    tag: "Business logic",
    title: "Python SDK",
    points: [
      "Define your specific business rules",
      "No messy front-end code required",
      "Easy to update and maintain",
    ],
  },
  {
    Icon: Cpu,
    tag: "Core system",
    title: "Rust runtime",
    points: [
      "Secure sign-in and user permissions",
      "Fast data processing and background tasks",
      "Keeps your business data safe",
    ],
  },
  {
    Icon: Monitor,
    tag: "User interface",
    title: "React interface",
    points: [
      "Clean, modern look across all apps",
      "Easy for your team to learn and use",
      "Maintained automatically by Dotpaper",
    ],
  },
];

const FEATURES: { Icon: LucideIcon; title: string; text: string }[] = [
  {
    Icon: Database,
    title: "Organized data",
    text: "Store text, numbers, dates, and files securely. Easily link records together, like connecting invoices to customers.",
  },
  {
    Icon: LayoutDashboard,
    title: "Consistent design",
    text: "Tables, forms, and charts that always look great and work the exact same way in every part of the system.",
  },
  {
    Icon: Zap,
    title: "Automated workflows",
    text: "Run business processes automatically. Catch errors early and guide your team with helpful, clear prompts.",
  },
  {
    Icon: ShieldCheck,
    title: "Strong security",
    text: "Your data is kept completely private. Give each team member exactly the access they need, and nothing more.",
  },
  {
    Icon: RefreshCw,
    title: "Safe updates",
    text: "Preview changes before they go live. Update your applications smoothly without disrupting your business.",
  },
  {
    Icon: Boxes,
    title: "Built for any business",
    text: "Whether you need a Service Desk, CRM, Accounting, or Inventory system—it all runs on one reliable foundation.",
  },
];

const TABS = [
  { id: "service", label: "Service Desk", Icon: Wrench },
  { id: "finance", label: "Financials", Icon: Receipt },
  { id: "ops", label: "Custom Operations", Icon: Package },
] as const;

type TabId = (typeof TABS)[number]["id"];

const STATUS_FLOW = ["Draft", "Diagnosing", "Approved", "Work started", "Ready", "Completed"];

const ACTION_CODE = `@app.action
def receive_stock(ctx, payload):
    record = payload.get("record") or {}
    qty = int(payload.get("quantity", 0))
    if qty <= 0:
        raise ValueError("Quantity must be positive")
    return Item.objects.update(
        str(record["id"]),
        {"stock": record["stock"] + qty},
    )`;

const COMPARE = [
  {
    row: "Applications",
    legacy: "Many separate tools, each with its own login",
    dotpaper: "One platform running all your business applications",
  },
  {
    row: "Interface",
    legacy: "A different design to learn for every tool",
    dotpaper: "One consistent design across every application",
  },
  {
    row: "Security",
    legacy: "Different rules and passwords to manage for each vendor",
    dotpaper: "One secure login and permission system for everything",
  },
  {
    row: "Data layer",
    legacy: "Separate databases, glued together with integrations",
    dotpaper: "One central database where everything is connected",
  },
  {
    row: "Custom needs",
    legacy: "Wait for the vendor, or work around the product",
    dotpaper: "Easily customized exactly to your business rules",
  },
  {
    row: "Maintenance",
    legacy: "Updates and breakages handled tool by tool",
    dotpaper: "The entire platform is maintained and updated centrally",
  },
];

/* ------------------------------------------------------------------ */
/* Helpers                                                            */
/* ------------------------------------------------------------------ */

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

function Pill({ tone, children }: { tone: Tone; children: ReactNode }) {
  return (
    <span className={`inline-flex shrink-0 items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${TONES[tone]}`}>
      {children}
    </span>
  );
}

function highlight(line: string): ReactNode {
  const parts = line.split(/("[^"]*"|\b(?:from|import|class|def|return|raise|if)\b|@[\w.]+)/g);
  return parts.map((part, i) => {
    if (!part) return null;
    if (part.startsWith('"')) return <span key={i} className="text-emerald-300">{part}</span>;
    if (/^(from|import|class|def|return|raise|if)$/.test(part)) return <span key={i} className="text-indigo-300">{part}</span>;
    if (part.startsWith("@")) return <span key={i} className="text-amber-300">{part}</span>;
    return <span key={i}>{part}</span>;
  });
}

function CodeWindow({ file, code }: { file: string; code: string }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-slate-900">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="ml-3 text-xs text-slate-400">{file}</span>
      </div>
      <pre className="overflow-x-auto p-5 text-[13px] leading-6 text-slate-200">
        <code>
          {code.split("\n").map((line, i) => (
            <div key={i}>{highlight(line) || "\u00a0"}</div>
          ))}
        </code>
      </pre>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Hero workspace                                                     */
/* ------------------------------------------------------------------ */

function Workspace() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 120, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 120, damping: 20 });

  useEffect(() => {
    if (reduce || !auto) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % PREVIEWS.length), 4500);
    return () => window.clearInterval(id);
  }, [reduce, auto]);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  if (!isMounted) {
    return <div className="relative mx-auto mt-16 max-w-5xl md:mt-20 min-h-[400px]" />;
  }

  const app = PREVIEWS[active];

  return (
    <div className="relative mx-auto mt-16 max-w-5xl md:mt-20" style={{ perspective: 1400 }} onMouseMove={onMove} onMouseLeave={onLeave}>
      <motion.div style={reduce ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}>
        <div className="overflow-hidden rounded-3xl border border-white/70 bg-white/70 text-left shadow-[0_40px_100px_-30px_rgba(15,23,42,0.35)] backdrop-blur-xl">
          <div className="flex items-center gap-2 border-b border-slate-200/60 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="ml-3 text-xs font-medium text-slate-500">Dotpaper workspace</span>
            <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Sample data
            </span>
          </div>

          <div className="flex min-h-[27rem]">
            <nav className="hidden w-52 shrink-0 border-r border-slate-200/60 p-3 sm:block" aria-label="Applications">
              {PREVIEWS.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => {
                    setActive(i);
                    setAuto(false);
                  }}
                  aria-current={i === active ? "true" : undefined}
                  className={`mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600 ${
                    i === active ? "bg-indigo-600 text-white" : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <p.Icon className="h-4 w-4" aria-hidden="true" />
                  {p.label}
                </button>
              ))}
            </nav>

            <div className="min-w-0 flex-1 p-5 sm:p-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={app.id}
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: EASE }}
                >
                  <p className="text-lg font-semibold tracking-tight text-slate-900 sm:text-2xl">{app.label}</p>

                  <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {app.metrics.map((m) => (
                      <div key={m.label} className="rounded-2xl border border-slate-200/60 bg-white/80 p-4">
                        <p className="text-xs text-slate-500">{m.label}</p>
                        <p className="mt-1 text-3xl font-semibold tracking-tight text-slate-900">{m.value}</p>
                        <p className="mt-1 text-xs text-slate-500">{m.note}</p>
                      </div>
                    ))}
                  </div>

                  <div className={`mt-5 grid gap-4 ${app.spark ? "lg:grid-cols-[1.4fr_1fr]" : ""}`}>
                    <ul className="divide-y divide-slate-200/60 rounded-2xl border border-slate-200/60 bg-white/80">
                      {app.rows.map((r) => (
                        <li key={r.title} className="flex items-center justify-between gap-3 px-4 py-3">
                          <div className="min-w-0">
                            <p className="truncate text-sm font-medium text-slate-900">{r.title}</p>
                            <p className="truncate text-xs text-slate-500">{r.sub}</p>
                          </div>
                          <Pill tone={r.tone}>{r.status}</Pill>
                        </li>
                      ))}
                    </ul>

                    {app.spark && (
                      <div className="hidden rounded-2xl border border-slate-200/60 bg-white/80 p-4 lg:block">
                        <p className="text-xs text-slate-500">{app.spark.title}</p>
                        <div className="mt-3 flex h-24 items-end gap-1.5" aria-hidden="true">
                          {app.spark.bars.map((h, i) => (
                            <span
                              key={i}
                              className={`flex-1 rounded-t-md ${i === app.spark!.bars.length - 1 ? "bg-emerald-500" : "bg-indigo-500"}`}
                              style={{ height: `${h}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <motion.div
          className="absolute -left-2 top-24 hidden items-center gap-3 rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-xl backdrop-blur-xl md:flex lg:-left-10"
          animate={reduce ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transform: "translateZ(60px)" }}
        >
          <CheckCircle2 className="h-5 w-5 text-emerald-500" aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold text-slate-900">Estimate approved</p>
            <p className="text-xs text-slate-500">WO-1047 moved to Work started</p>
          </div>
        </motion.div>

        <motion.div
          className="absolute -right-2 bottom-16 hidden items-center gap-3 rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-xl backdrop-blur-xl md:flex lg:-right-10"
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transform: "translateZ(80px)" }}
        >
          <Receipt className="h-5 w-5 text-indigo-600" aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold text-slate-900">Invoice created</p>
            <p className="text-xs text-slate-500">From the approved estimate</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Showcase panels                                                    */
/* ------------------------------------------------------------------ */

function ServicePanel() {
  const orders = [
    { id: "WO-1048", job: "Compressor repair", who: "Al Noor Trading", priority: "High", pTone: "red" as Tone, status: "Diagnosing", sTone: "amber" as Tone },
    { id: "WO-1047", job: "Engine service", who: "Kochi Marine Services", priority: "Medium", pTone: "amber" as Tone, status: "Approved", sTone: "indigo" as Tone },
    { id: "WO-1046", job: "Pump replacement", who: "Nair Traders", priority: "Low", pTone: "slate" as Tone, status: "Completed", sTone: "emerald" as Tone },
    { id: "WO-1045", job: "Generator inspection", who: "Gulf Star Workshop", priority: "Medium", pTone: "amber" as Tone, status: "Ready", sTone: "emerald" as Tone },
  ];
  const techs = [
    { name: "Anand K.", note: "Assigned, on site", dot: "bg-emerald-500" },
    { name: "Rahul M.", note: "Available", dot: "bg-emerald-500" },
    { name: "Fatima S.", note: "On another job", dot: "bg-amber-400" },
  ];
  const current = STATUS_FLOW.indexOf("Diagnosing");

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
      <div className="rounded-2xl border border-slate-200/60 bg-white">
        <div className="flex items-center justify-between border-b border-slate-200/60 px-5 py-4">
          <p className="font-semibold text-slate-900">Work orders</p>
          <p className="text-xs text-slate-500">Priority and status at a glance</p>
        </div>
        <ul className="divide-y divide-slate-200/60">
          {orders.map((o) => (
            <li key={o.id} className="flex items-center justify-between gap-3 px-5 py-4">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-slate-900">{o.id} {o.job}</p>
                <p className="truncate text-xs text-slate-500">{o.who}</p>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-1.5 sm:flex-row sm:items-center">
                <Pill tone={o.pTone}>{o.priority}</Pill>
                <Pill tone={o.sTone}>{o.status}</Pill>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-slate-200/60 bg-white p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-semibold text-slate-900">WO-1048 Compressor repair</p>
            <p className="text-xs text-slate-500">Al Noor Trading</p>
          </div>
          <Pill tone="red">High</Pill>
        </div>

        <ol className="mt-4 flex flex-wrap gap-1.5" aria-label="Job status workflow">
          {STATUS_FLOW.map((s, i) => (
            <li
              key={s}
              aria-current={i === current ? "step" : undefined}
              className={`rounded-md px-2 py-1 text-[11px] font-medium ${
                i < current
                  ? "bg-emerald-50 text-emerald-700"
                  : i === current
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-100 text-slate-400"
              }`}
            >
              {s}
            </li>
          ))}
        </ol>

        <div className="mt-5">
          <p className="text-xs font-semibold text-slate-500">Diagnosis</p>
          <p className="mt-1 text-sm text-slate-700">
            Compressor not reaching pressure. Possible valve wear. Estimate to follow once the unit is opened.
          </p>
        </div>

        <div className="mt-5">
          <p className="text-xs font-semibold text-slate-500">Technician dispatch</p>
          <ul className="mt-2 space-y-2">
            {techs.map((t) => (
              <li key={t.name} className="flex items-center justify-between rounded-xl border border-slate-200/60 px-3 py-2">
                <span className="text-sm font-medium text-slate-900">{t.name}</span>
                <span className="inline-flex items-center gap-2 text-xs text-slate-500">
                  <span className={`h-2 w-2 rounded-full ${t.dot}`} />
                  {t.note}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function FinancePanel() {
  const actual = [52, 64, 58, 76, 88, 96];
  const projected = [102, 110, 118];
  const months = ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"];
  const invoices = [
    { id: "INV-2092", who: "Al Noor Trading", amount: "AED 4,200", status: "Paid", tone: "emerald" as Tone },
    { id: "INV-2091", who: "Kochi Marine Services", amount: "INR 48,500", status: "Sent", tone: "indigo" as Tone },
    { id: "INV-2090", who: "Riyadh Fleet Care", amount: "SAR 3,900", status: "Overdue", tone: "red" as Tone },
    { id: "INV-2089", who: "Gulf Star Workshop", amount: "AED 1,850", status: "Draft", tone: "slate" as Tone },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          ["Cash in", "391k", "This month"],
          ["Cash out", "244k", "This month"],
          ["Net cash flow", "147k", "Projected to rise"],
        ].map(([l, v, n]) => (
          <div key={l} className="rounded-2xl border border-slate-200/60 bg-white p-4">
            <p className="text-xs text-slate-500">{l}</p>
            <p className="mt-1 text-3xl font-semibold tracking-tight text-slate-900">{v}</p>
            <p className="mt-1 text-xs text-slate-500">{n}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-2xl border border-slate-200/60 bg-white p-5">
          <p className="font-semibold text-slate-900">Cash flow and projection</p>
          <svg viewBox="0 0 480 200" className="mt-4 h-auto w-full" role="img" aria-label="Bar chart: six months of actual cash flow followed by three months of projection.">
            <line x1="0" y1="170" x2="480" y2="170" stroke="#e2e8f0" strokeWidth="1.5" />
            {[...actual, ...projected].map((h, i) => {
              const isProjected = i >= actual.length;
              return (
                <rect
                  key={i}
                  x={10 + i * 52}
                  y={170 - h * 1.35}
                  width="34"
                  height={h * 1.35}
                  rx="6"
                  fill={isProjected ? "#d1fae5" : "#4f46e5"}
                  stroke={isProjected ? "#10b981" : "none"}
                  strokeDasharray={isProjected ? "4 3" : undefined}
                  strokeWidth={isProjected ? 1.5 : 0}
                />
              );
            })}
            {months.map((m, i) => (
              <text key={m} x={27 + i * 52} y="190" textAnchor="middle" fontSize="11" fill="#64748b">{m}</text>
            ))}
          </svg>
          <div className="mt-3 flex flex-wrap gap-5 text-xs text-slate-500">
            <span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-sm bg-indigo-600" /> Actual</span>
            <span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-sm border border-dashed border-emerald-500 bg-emerald-100" /> Projected</span>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200/60 bg-white">
          <div className="flex items-center justify-between border-b border-slate-200/60 px-5 py-4">
            <p className="font-semibold text-slate-900">Invoices</p>
            <p className="text-xs text-slate-500">Multiple currencies</p>
          </div>
          <ul className="divide-y divide-slate-200/60">
            {invoices.map((inv) => (
              <li key={inv.id} className="flex items-center justify-between gap-3 px-5 py-3.5">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-slate-900">{inv.id} {inv.who}</p>
                  <p className="text-xs tabular-nums text-slate-500">{inv.amount}</p>
                </div>
                <Pill tone={inv.tone}>{inv.status}</Pill>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function OpsPanel() {
  const moves = [
    { item: "Air filters", kind: "Received", qty: "+40", where: "Main warehouse", tone: "emerald" as Tone },
    { item: "Brake pads", kind: "Issued", qty: "-6", where: "Job WO-1047", tone: "indigo" as Tone },
    { item: "Battery 70Ah", kind: "Transfer", qty: "12", where: "Main to Branch", tone: "slate" as Tone },
    { item: "Engine oil 5L", kind: "Reorder", qty: "20", where: "Supplier order", tone: "amber" as Tone },
  ];
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <CodeWindow file="actions/stock.py" code={ACTION_CODE} />

      <div className="rounded-2xl border border-slate-200/60 bg-white">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/60 px-5 py-4">
          <p className="font-semibold text-slate-900">Stock movements</p>
          <div className="flex gap-2">
            <span className="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white">Receive stock</span>
            <span className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700">Transfer</span>
          </div>
        </div>
        <ul className="divide-y divide-slate-200/60">
          {moves.map((m) => (
            <li key={m.item} className="flex items-center justify-between gap-3 px-5 py-3.5">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-slate-900">{m.item}</p>
                <p className="truncate text-xs text-slate-500">{m.where}</p>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <span className="text-sm font-semibold tabular-nums text-slate-900">{m.qty}</span>
                <Pill tone={m.tone}>{m.kind}</Pill>
              </div>
            </li>
          ))}
        </ul>
        <p className="border-t border-slate-200/60 px-5 py-3 text-xs text-slate-500">
          Buttons call Python actions. The runtime applies the change inside your tenant.
        </p>
      </div>
    </div>
  );
}

function Showcase() {
  const reduce = useReducedMotion();
  const [tab, setTab] = useState<TabId>("service");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const i = TABS.findIndex((t) => t.id === tab);
    let next = i;
    if (e.key === "ArrowRight") next = (i + 1) % TABS.length;
    else if (e.key === "ArrowLeft") next = (i - 1 + TABS.length) % TABS.length;
    else return;
    e.preventDefault();
    setTab(TABS[next].id);
    document.getElementById(`tab-${TABS[next].id}`)?.focus();
  };

  if (!isMounted) {
    return <div className="min-h-[600px]" />;
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="Dotpaper application previews"
        onKeyDown={onKey}
        className="mx-auto flex w-full max-w-full flex-wrap justify-center gap-1 rounded-2xl border border-slate-200/60 bg-white/70 p-1.5 backdrop-blur sm:w-fit"
      >
        {TABS.map((t) => (
          <button
            key={t.id}
            id={`tab-${t.id}`}
            role="tab"
            type="button"
            aria-selected={tab === t.id}
            aria-controls={`panel-${t.id}`}
            tabIndex={tab === t.id ? 0 : -1}
            onClick={() => setTab(t.id)}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600 ${
              tab === t.id ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <t.Icon className="h-4 w-4" aria-hidden="true" />
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-slate-200/60 bg-slate-50/80 p-4 sm:p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            id={`panel-${tab}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab}`}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            {tab === "service" && <ServicePanel />}
            {tab === "finance" && <FinancePanel />}
            {tab === "ops" && <OpsPanel />}
          </motion.div>
        </AnimatePresence>
      </div>
      <p className="mt-3 text-center text-xs text-slate-500">Sample screens with sample data.</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                               */
/* ------------------------------------------------------------------ */

export default function DotpaperLanding() {
  return (
    <main className="relative overflow-x-clip bg-slate-50 text-slate-900 antialiased">
      {/* 1. Hero */}
      <section className="relative">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] overflow-hidden">
          <div className="absolute -top-40 left-1/2 h-[28rem] w-[56rem] -translate-x-1/2 rounded-full bg-indigo-200/50 blur-3xl" />
          <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-20 text-center sm:px-8 md:pt-28">
          

          <Reveal delay={0.08}>
            <h1 className="mx-auto mt-8 max-w-4xl text-5xl font-semibold tracking-tight text-slate-900 [text-wrap:balance] md:text-7xl">
              One platform. Many business applications.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 md:text-xl">
              Dotpaper powers your entire business. Run your Service Desk, Financials, and
              custom internal tools all from the exact same place, built entirely around your business needs.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={CONTACT_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-base font-semibold text-white transition duration-200 hover:scale-[1.03] hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Request Executive Access
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <a
                href="#architecture"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/60 px-7 py-3.5 text-base font-semibold text-slate-800 backdrop-blur transition duration-200 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <Play className="h-4 w-4" aria-hidden="true" />
                Explore the Architecture
              </a>
            </div>
          </Reveal>

          <Workspace />
        </div>
      </section>

      {/* 2. Architecture */}
      <section id="architecture" className="scroll-mt-6 border-y border-slate-200/60 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight [text-wrap:balance] md:text-6xl">
              Built for speed and reliability.
            </h2>
            <p className="mt-5 text-lg text-slate-600">
              Dotpaper handles the complicated parts like databases and secure logins for you. 
              We write clean code, and the platform turns it into working business software instantly.
            </p>
          </Reveal>

          <div className="mt-16 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {LAYERS.map((l, i) => (
              <div key={l.title} className="contents">
                <Reveal delay={i * 0.1} className="h-full">
                  <div className="h-full rounded-3xl border border-slate-200/60 bg-slate-50/70 p-7">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white">
                      <l.Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <p className="mt-6 text-xs font-semibold text-indigo-600">{l.tag}</p>
                    <h3 className="mt-1 text-2xl font-semibold tracking-tight">{l.title}</h3>
                    <ul className="mt-5 space-y-3">
                      {l.points.map((p) => (
                        <li key={p} className="flex gap-3 text-slate-600">
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                {i < LAYERS.length - 1 && (
                  <div className="flex flex-col items-center justify-center gap-1 py-1 text-slate-400 lg:py-0" aria-hidden="true">
                    <ArrowRight className="h-5 w-5 rotate-90 lg:rotate-0" />
                    <span className="text-center text-[11px] font-medium leading-tight text-slate-500">
                      {i === 0 ? "JSON manifest" : "Versioned UI schema"}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-2xl text-center text-lg font-medium text-slate-900">
            You focus on your business rules. Dotpaper handles the rest.
          </p>
        </div>
      </section>

      {/* 3. Feature grid */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight [text-wrap:balance] md:text-6xl">
            Everything your business needs.
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            The strong foundations are built once in the platform, so every application you use is secure, fast, and reliable.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.07} className="h-full">
              <div className="h-full rounded-3xl border border-slate-200/60 bg-white p-7 transition-shadow duration-300 hover:shadow-[0_20px_50px_-25px_rgba(79,70,229,0.35)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white">
                  <f.Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-3 text-slate-600">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 4. Showcase */}
      <section id="showcase" className="scroll-mt-6 border-y border-slate-200/60 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight [text-wrap:balance] md:text-6xl">
              See real applications work.
            </h2>
            <p className="mt-5 text-lg text-slate-600">
              Switch between applications. Same interface, same records, same sign-in.
            </p>
          </Reveal>
          <Reveal className="mt-12" delay={0.08}>
            <Showcase />
          </Reveal>
        </div>
      </section>

      {/* 5. Comparison */}
      <section className="mx-auto max-w-5xl px-5 py-24 sm:px-8 md:py-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight [text-wrap:balance] md:text-6xl">
            One platform instead of many tools.
          </h2>
        </Reveal>

        <Reveal className="mt-14" delay={0.08}>
          <div className="overflow-hidden rounded-3xl border border-slate-200/60 bg-white">
            <table className="block w-full text-left md:table">
              <caption className="sr-only">Separate SaaS tools compared with the ECOCEE Dotpaper platform</caption>
              <thead className="hidden md:table-header-group">
                <tr className="border-b border-slate-200/60">
                  <th scope="col" className="w-1/4 px-7 py-5"><span className="sr-only">Topic</span></th>
                  <th scope="col" className="px-7 py-5 text-sm font-semibold text-slate-500">Separate SaaS tools</th>
                  <th scope="col" className="bg-indigo-50/60 px-7 py-5 text-sm font-semibold text-indigo-700">ECOCEE Dotpaper platform</th>
                </tr>
              </thead>
              <tbody className="block md:table-row-group">
                {COMPARE.map((c) => (
                  <tr key={c.row} className="block border-b border-slate-200/60 last:border-b-0 md:table-row">
                    <th scope="row" className="block px-7 pb-1 pt-6 text-base font-semibold text-slate-900 md:table-cell md:py-6 md:align-top">
                      {c.row}
                    </th>
                    <td
                      data-label="Separate SaaS tools"
                      className="block px-7 py-2 text-slate-500 before:mb-0.5 before:block before:text-xs before:font-semibold before:text-slate-400 before:content-[attr(data-label)] md:table-cell md:py-6 md:align-top md:before:hidden"
                    >
                      {c.legacy}
                    </td>
                    <td
                      data-label="ECOCEE Dotpaper platform"
                      className="block bg-indigo-50/40 px-7 py-3 font-medium text-slate-900 before:mb-0.5 before:block before:text-xs before:font-semibold before:text-indigo-600 before:content-[attr(data-label)] md:table-cell md:bg-indigo-50/60 md:py-6 md:align-top md:before:hidden"
                    >
                      {c.dotpaper}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate-500">
          Security also depends on how each deployment is run: access, updates, backups and network setup.
        </p>
      </section>

      {/* 6. Footer CTA */}
      <section className="px-5 pb-24 sm:px-8 md:pb-32">
        <Reveal>
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-slate-900 px-6 py-20 text-center sm:px-12 md:py-28">
            <div aria-hidden="true" className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-indigo-500/30 blur-3xl" />
            <div className="relative">
              <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-white [text-wrap:balance] md:text-6xl">
                Run your business on Dotpaper.
              </h2>
              <a
                href={CONTACT_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-slate-900 transition duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Request Executive Access
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}