"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Boxes,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleHelp,
  ClipboardList,
  CreditCard,
  FileText,
  LayoutDashboard,
  Menu,
  Package,
  Receipt,
  ShieldCheck,
  ShoppingBag,
  Users,
  Wallet,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { GOOGLE_FORM_URL } from "@/lib/config";

const CONTACT_HREF = GOOGLE_FORM_URL;

const EASE = [0.22, 1, 0.36, 1] as const;

const applications = [
  {
    id: "service",
    name: "Service Desk",
    short: "Service",
    icon: Wrench,
    color: "bg-[#DCE8FF]",
    accent: "text-[#244FAD]",
    description:
      "Keep every job moving. Manage requests, work orders, approvals and service history in one place.",
    metrics: [
      ["Open work orders", "24"],
      ["Awaiting approval", "07"],
      ["Completed this month", "38"],
    ],
    records: [
      ["WO-1048", "Compressor repair", "Al Noor Trading", "In progress", "blue"],
      ["WO-1047", "Engine service", "Kochi Marine Services", "Approved", "purple"],
      ["WO-1046", "Pump replacement", "Nair Traders", "Completed", "green"],
    ],
  },
  {
    id: "finance",
    name: "Financials",
    short: "Finance",
    icon: Receipt,
    color: "bg-[#FCE7C8]",
    accent: "text-[#98500D]",
    description:
      "Understand the money coming in and going out. Keep estimates, invoices and payments connected.",
    metrics: [
      ["Invoiced this month", "482k"],
      ["Payments received", "391k"],
      ["Outstanding", "91k"],
    ],
    records: [
      ["INV-2089", "Gulf Star Workshop", "AED 1,850", "Draft", "gray"],
      ["INV-2088", "Kochi Marine", "INR 48,500", "Sent", "blue"],
      ["INV-2087", "Al Noor Trading", "AED 4,200", "Paid", "green"],
    ],
  },
  {
    id: "customers",
    name: "Customers",
    short: "Customers",
    icon: Users,
    color: "bg-[#D9F0E5]",
    accent: "text-[#176B4B]",
    description:
      "Keep customer details, conversations, enquiries and follow-ups together. Give your team the full picture.",
    metrics: [
      ["Customers", "212"],
      ["Open enquiries", "12"],
      ["Follow-ups today", "04"],
    ],
    records: [
      ["CUS-0212", "Al Noor Trading", "Annual service enquiry", "Follow up", "orange"],
      ["CUS-0211", "Malabar Auto Care", "New enquiry", "New", "blue"],
      ["CUS-0210", "Nair Traders", "Repeat customer", "Active", "green"],
    ],
  },
  {
    id: "inventory",
    name: "Inventory",
    short: "Inventory",
    icon: Package,
    color: "bg-[#E8E0FA]",
    accent: "text-[#6840A6]",
    description:
      "Know what you have, where it is and what needs attention. Connect stock movements to everyday work.",
    metrics: [
      ["Items tracked", "640"],
      ["Low stock", "07"],
      ["Orders in progress", "03"],
    ],
    records: [
      ["ITM-0142", "Air filters", "Main warehouse", "Reorder", "orange"],
      ["ITM-0118", "Brake pads", "42 in stock", "Healthy", "green"],
      ["ITM-0084", "Battery 70Ah", "14 in stock", "Healthy", "green"],
    ],
  },
] as const;

type ApplicationId = (typeof applications)[number]["id"];

const benefits = [
  {
    number: "01",
    title: "Everything connected",
    description:
      "A customer, their service history, estimates, invoices and payments belong together. Your team doesn't have to piece the story together from different tools.",
    icon: Boxes,
    background: "bg-[#E8E2FA]",
    foreground: "text-[#55349B]",
  },
  {
    number: "02",
    title: "Made around your work",
    description:
      "Every business has its own way of working. Dotpaper can be shaped around your processes, records, teams and day-to-day requirements.",
    icon: BriefcaseBusiness,
    background: "bg-[#DDEAFF]",
    foreground: "text-[#2456A6]",
  },
  {
    number: "03",
    title: "A clearer way to work",
    description:
      "Your team gets a familiar experience across every application. Less switching between tools, less repeated work and fewer things to chase.",
    icon: LayoutDashboard,
    background: "bg-[#FBE8CF]",
    foreground: "text-[#9A5516]",
  },
  {
    number: "04",
    title: "Your business stays in control",
    description:
      "Manage who can see information and perform actions. Keep important activity organised and make changes with confidence.",
    icon: ShieldCheck,
    background: "bg-[#DDF1E7]",
    foreground: "text-[#176B4B]",
  },
];

const comparison = [
  {
    label: "Daily work",
    old: "Move between different tools",
    dotpaper: "Work from one familiar place",
  },
  {
    label: "Business records",
    old: "Information spread across systems",
    dotpaper: "Connected records in one workspace",
  },
  {
    label: "Team access",
    old: "Manage access in multiple places",
    dotpaper: "One organised access system",
  },
  {
    label: "Changing needs",
    old: "Adapt your process to the software",
    dotpaper: "Adapt the software to your process",
  },
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

function Status({
  children,
  tone,
}: {
  children: React.ReactNode;
  tone: string;
}) {
  const styles: Record<string, string> = {
    blue: "bg-blue-50 text-blue-700",
    purple: "bg-violet-50 text-violet-700",
    green: "bg-emerald-50 text-emerald-700",
    orange: "bg-orange-50 text-orange-700",
    gray: "bg-slate-100 text-slate-600",
  };

  return (
    <span
      className={`inline-flex shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
        styles[tone] ?? styles.gray
      }`}
    >
      {children}
    </span>
  );
}

function Brand() {
  return (
    <a
      href="#top"
      aria-label="Dotpaper home"
      className="inline-flex items-center gap-2.5"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#24204A] text-white">
        <span className="text-[19px] font-bold tracking-[-0.08em]">d.</span>
      </span>
      <span className="text-[19px] font-semibold tracking-[-0.055em] text-[#22213A]">
        dotpaper
      </span>
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Applications", "#applications"],
    ["How it works", "#how-it-works"],
    ["Why Dotpaper", "#why-dotpaper"],
  ];

  return (
    <header className="relative z-50 border-b border-[#EAE8EF] bg-[#FBFAF8]">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">
        <Brand />

        <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-[13px] font-medium text-[#5E5C6D] transition-colors hover:text-[#29234D]"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href="#applications"
            className="text-[13px] font-medium text-[#5E5C6D] transition-colors hover:text-[#29234D]"
          >
            Explore Dotpaper
          </a>
          <a
            href={CONTACT_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-[#29234D] px-5 text-[13px] font-semibold text-white transition hover:bg-[#40396B]"
          >
            Talk to our team
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E6E3EC] text-[#29234D] md:hidden"
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-[#EAE8EF] bg-[#FBFAF8] md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-[#4E4A60] hover:bg-[#F0EDF6]"
                >
                  {label}
                </a>
              ))}
              <a
                href={CONTACT_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#29234D] px-5 py-3 text-sm font-semibold text-white"
              >
                Talk to our team <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function WorkspacePreview() {
  const [active, setActive] = useState<ApplicationId>("service");
  const current = applications.find((app) => app.id === active)!;

  return (
    <div className="relative mx-auto w-full max-w-[760px]">
      <div className="absolute -inset-5 rounded-[2.5rem] bg-[#DCD6F0]/50 blur-2xl" />

      <div className="relative overflow-hidden rounded-[22px] border border-[#E5E2EA] bg-white shadow-[0_30px_90px_-38px_rgba(36,29,70,0.32)]">
        <div className="flex h-[58px] items-center justify-between border-b border-[#EEEAF2] px-5 sm:px-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#29234D] text-[13px] font-bold text-white">
              d.
            </span>
            <span className="text-[13px] font-semibold tracking-tight text-[#302D42]">
              Dotpaper workspace
            </span>
          </div>
          <div className="flex items-center gap-2 text-[11px] font-medium text-[#8B8998]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#37A77A]" />
            Sample workspace
          </div>
        </div>

        <div className="grid min-h-[390px] grid-cols-1 sm:grid-cols-[180px_1fr]">
          <aside className="border-b border-[#EEEAF2] bg-[#FBFAFC] p-3 sm:border-b-0 sm:border-r">
            <p className="px-3 pb-2 pt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#A09CAB]">
              Your applications
            </p>
            <div className="grid grid-cols-2 gap-1 sm:grid-cols-1">
              {applications.map((app) => {
                const Icon = app.icon;
                const selected = active === app.id;

                return (
                  <button
                    key={app.id}
                    type="button"
                    onClick={() => setActive(app.id)}
                    aria-pressed={selected}
                    className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-[12px] font-medium transition ${
                      selected
                        ? "bg-[#29234D] text-white shadow-sm"
                        : "text-[#696678] hover:bg-[#F0EDF5]"
                    }`}
                  >
                    <Icon size={15} strokeWidth={1.8} />
                    <span>{app.short}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-5 hidden rounded-xl bg-[#F0EDF7] p-3 sm:block">
              <div className="flex items-center gap-2 text-[11px] font-semibold text-[#514875]">
                <ShieldCheck size={14} />
                Your workspace
              </div>
              <p className="mt-1.5 text-[10px] leading-4 text-[#89839C]">
                One place for your team's everyday work.
              </p>
            </div>
          </aside>

          <div className="min-w-0 p-4 sm:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 9 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -7 }}
                transition={{ duration: 0.22, ease: EASE }}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#9692A2]">
                      Overview
                    </p>
                    <h3 className="mt-1 text-[21px] font-semibold tracking-[-0.05em] text-[#28253C]">
                      {current.name}
                    </h3>
                  </div>
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${current.color} ${current.accent}`}
                  >
                    <current.icon size={19} strokeWidth={1.8} />
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2.5">
                  {current.metrics.map(([label, value]) => (
                    <div
                      key={label}
                      className="min-w-0 rounded-xl border border-[#EEEAF2] bg-[#FEFDFE] p-3"
                    >
                      <p className="min-h-7 text-[10px] leading-4 text-[#8D8999]">
                        {label}
                      </p>
                      <p className="mt-1 text-[22px] font-semibold tracking-[-0.055em] text-[#302D42]">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 overflow-hidden rounded-xl border border-[#EEEAF2]">
                  <div className="flex items-center justify-between border-b border-[#EEEAF2] px-3.5 py-3">
                    <p className="text-[11px] font-semibold text-[#454154]">
                      Recent activity
                    </p>
                    <span className="text-[10px] font-medium text-[#9692A2]">
                      View all
                    </span>
                  </div>

                  {current.records.map((record) => (
                    <div
                      key={record[0]}
                      className="flex items-center justify-between gap-2 border-b border-[#F1EEF4] px-3.5 py-3 last:border-0"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-[11px] font-semibold text-[#454154]">
                          {record[1]}
                        </p>
                        <p className="mt-0.5 truncate text-[10px] text-[#9692A2]">
                          {record[0]} · {record[2]}
                        </p>
                      </div>
                      <Status tone={record[4]}>{record[3]}</Status>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-7 -left-5 hidden items-center gap-3 rounded-2xl border border-[#EAE6F0] bg-white px-4 py-3 shadow-[0_14px_35px_-18px_rgba(36,29,70,0.25)] sm:flex">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DDF1E7] text-[#176B4B]">
          <Check size={16} />
        </span>
        <div>
          <p className="text-[11px] font-semibold text-[#353145]">Work stays connected</p>
          <p className="mt-0.5 text-[10px] text-[#8D8999]">One shared workspace</p>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#FBFAF8]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-44 top-10 h-[560px] w-[560px] rounded-full bg-[#E8E2F6] opacity-70 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 bottom-0 h-[360px] w-[360px] rounded-full bg-[#F8E9D8] opacity-60 blur-[90px]"
      />

      <div className="relative mx-auto grid max-w-[1440px] items-center gap-14 px-5 pb-24 pt-20 sm:px-8 md:pb-32 md:pt-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-14">
        <div className="relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E8E3EF] bg-white/75 px-3.5 py-2 text-[11px] font-semibold text-[#615A78]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7961B4]" />
              BUSINESS SOFTWARE BY ECOCEE
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-8 max-w-[650px] text-[clamp(3.3rem,6.1vw,6.4rem)] font-semibold leading-[0.99] tracking-[-0.075em] text-[#26233C] [text-wrap:balance]">
              Your business.
              <br />
              <span className="text-[#7862B2]">All in one place.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-7 max-w-[490px] text-[16px] leading-[1.85] text-[#706C7D] sm:text-[18px]">
              Bring your daily work together with one connected business
              workspace. Manage services, money, customers and stock without
              juggling separate tools.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={CONTACT_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-[52px] items-center gap-3 rounded-full bg-[#29234D] px-6 text-[13px] font-semibold text-white transition hover:bg-[#40396B]"
              >
                Talk to our team
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#applications"
                className="inline-flex h-[52px] items-center gap-2 rounded-full border border-[#E4DFEA] bg-white/70 px-6 text-[13px] font-semibold text-[#454158] transition hover:border-[#C8BDDC] hover:bg-white"
              >
                Explore applications
                <ArrowDown className="h-3.5 w-3.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-12 flex items-center gap-4 border-t border-[#EAE6ED] pt-6">
              <div className="flex -space-x-2">
                {["bg-[#DCE8FF]", "bg-[#FCE7C8]", "bg-[#D9F0E5]"].map(
                  (color, index) => (
                    <span
                      key={index}
                      className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#FBFAF8] ${color}`}
                    >
                      {index === 0 ? (
                        <BriefcaseBusiness size={13} className="text-[#315A9E]" />
                      ) : index === 1 ? (
                        <Wallet size={13} className="text-[#98500D]" />
                      ) : (
                        <Users size={13} className="text-[#176B4B]" />
                      )}
                    </span>
                  ),
                )}
              </div>
              <p className="text-[11px] leading-5 text-[#858191]">
                One workspace for the work
                <br />
                that keeps your business moving.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18} className="relative lg:pl-2">
          <WorkspacePreview />
        </Reveal>
      </div>
    </section>
  );
}

function ApplicationSection() {
  return (
    <section id="applications" className="scroll-mt-10 bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 md:py-32 lg:px-14">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#7862B2]">
              One workspace, many possibilities
            </p>
            <h2 className="mt-5 max-w-[540px] text-[clamp(2.7rem,5vw,5rem)] font-semibold leading-[1.02] tracking-[-0.07em] text-[#29263D]">
              Everything your team needs to get work done.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-[470px] pb-1 text-[15px] leading-8 text-[#777384] md:ml-auto">
              Start with the applications your business needs today. Bring
              more of your operations into the same workspace as you grow.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {applications.map((app, index) => {
            const Icon = app.icon;

            return (
              <Reveal key={app.id} delay={index * 0.07}>
                <a
                  href="#showcase"
                  className={`group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-[24px] p-7 transition duration-300 hover:-translate-y-1 sm:min-h-[340px] sm:p-9 ${app.color}`}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 ${app.accent}`}
                    >
                      <Icon size={22} strokeWidth={1.7} />
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/60 text-[#514B64] transition group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight size={17} />
                    </span>
                  </div>

                  <div className="relative z-10 mt-10 max-w-[390px]">
                    <p className={`text-[11px] font-bold uppercase tracking-[0.14em] ${app.accent}`}>
                      APPLICATION 0{index + 1}
                    </p>
                    <h3 className="mt-3 text-[32px] font-semibold tracking-[-0.06em] text-[#29263D] sm:text-[39px]">
                      {app.name}
                    </h3>
                    <p className="mt-3 max-w-[370px] text-[14px] leading-7 text-[#59566A]">
                      {app.description}
                    </p>
                  </div>

                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full border-[34px] border-white/25 transition duration-500 group-hover:scale-110 ${app.accent}`}
                  />
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ConnectedSection() {
  return (
    <section id="how-it-works" className="scroll-mt-10 bg-[#F3F0F8]">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 md:py-32 lg:px-14">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#7862B2]">
              A better way to work
            </p>
            <h2 className="mt-5 max-w-[510px] text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[1.02] tracking-[-0.07em] text-[#29263D]">
              Your work is connected. Your team stays in sync.
            </h2>
            <p className="mt-6 max-w-[460px] text-[15px] leading-8 text-[#777384]">
              When your applications share the same workspace, information
              doesn't have to be entered again and again. Your team can see
              what matters and move work forward with more clarity.
            </p>
            <a
              href="#showcase"
              className="mt-8 inline-flex items-center gap-2 text-[13px] font-semibold text-[#5D4798] transition hover:gap-3"
            >
              See how it comes together <ArrowRight size={16} />
            </a>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-[26px] bg-white p-5 shadow-[0_25px_80px_-45px_rgba(40,30,70,0.25)] sm:p-8">
              <div className="flex items-center justify-between border-b border-[#EEEAF2] pb-5">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#9692A2]">
                    One customer record
                  </p>
                  <h3 className="mt-1 text-[20px] font-semibold tracking-[-0.04em] text-[#302D42]">
                    Al Noor Trading
                  </h3>
                </div>
                <span className="rounded-full bg-[#DDF1E7] px-3 py-1.5 text-[10px] font-semibold text-[#176B4B]">
                  Active customer
                </span>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    icon: ClipboardList,
                    label: "Service history",
                    detail: "4 work orders",
                    color: "bg-[#DCE8FF] text-[#2456A6]",
                  },
                  {
                    icon: Receipt,
                    label: "Invoices",
                    detail: "2 recent invoices",
                    color: "bg-[#FCE7C8] text-[#98500D]",
                  },
                  {
                    icon: Users,
                    label: "Contacts",
                    detail: "3 team contacts",
                    color: "bg-[#D9F0E5] text-[#176B4B]",
                  },
                  {
                    icon: Package,
                    label: "Parts & items",
                    detail: "6 linked items",
                    color: "bg-[#E8E0FA] text-[#6840A6]",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-2xl border border-[#EEEAF2] p-4"
                    >
                      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.color}`}>
                        <Icon size={18} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[12px] font-semibold text-[#454154]">
                          {item.label}
                        </p>
                        <p className="mt-1 text-[11px] text-[#9692A2]">
                          {item.detail}
                        </p>
                      </div>
                      <ChevronRight className="ml-auto h-4 w-4 shrink-0 text-[#B1ADBA]" />
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 rounded-2xl bg-[#F7F5FA] p-4">
                <div className="flex items-center gap-2 text-[11px] font-semibold text-[#5B5470]">
                  <Zap size={14} className="text-[#8A70C3]" />
                  Connected activity
                </div>
                <div className="mt-4 space-y-3">
                  {[
                    ["09:42", "Work order updated", "Service Desk"],
                    ["10:15", "Estimate sent to customer", "Financials"],
                    ["11:08", "Payment recorded", "Financials"],
                  ].map(([time, event, source]) => (
                    <div key={event} className="flex items-center gap-3">
                      <span className="w-10 shrink-0 text-[10px] tabular-nums text-[#A19CAB]">
                        {time}
                      </span>
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#8A70C3]" />
                      <p className="min-w-0 flex-1 text-[11px] font-medium text-[#5A5668]">
                        {event}
                      </p>
                      <span className="text-[10px] text-[#A19CAB]">{source}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-3 text-center text-[10px] text-[#A19CAB]">
                Illustrative example using sample information.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  const [active, setActive] = useState<ApplicationId>("service");
  const current = applications.find((app) => app.id === active)!;

  return (
    <section id="showcase" className="scroll-mt-10 bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 md:py-32 lg:px-14">
        <Reveal className="mx-auto max-w-[720px] text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#7862B2]">
            Take a closer look
          </p>
          <h2 className="mt-5 text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[1.02] tracking-[-0.07em] text-[#29263D]">
            Familiar from the first day.
          </h2>
          <p className="mx-auto mt-5 max-w-[550px] text-[15px] leading-8 text-[#777384]">
            Each application has a clear purpose, while keeping the same
            familiar experience for your entire team.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="mt-12">
          <div className="flex flex-wrap justify-center gap-2">
            {applications.map((app) => {
              const Icon = app.icon;
              const selected = active === app.id;

              return (
                <button
                  key={app.id}
                  type="button"
                  onClick={() => setActive(app.id)}
                  aria-pressed={selected}
                  className={`inline-flex h-11 items-center gap-2 rounded-full px-4 text-[12px] font-semibold transition ${
                    selected
                      ? "bg-[#29234D] text-white"
                      : "border border-[#E9E5EE] bg-white text-[#696678] hover:bg-[#F7F5FA]"
                  }`}
                >
                  <Icon size={15} />
                  {app.name}
                </button>
              );
            })}
          </div>

          <div className="mt-6 overflow-hidden rounded-[26px] border border-[#E9E5EE] bg-[#F8F7FA] p-3 sm:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: EASE }}
                className="overflow-hidden rounded-[18px] border border-[#EAE6EF] bg-white"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#EEEAF2] px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${current.color} ${current.accent}`}>
                      <current.icon size={17} />
                    </span>
                    <div>
                      <p className="text-[13px] font-semibold text-[#393548]">
                        {current.name}
                      </p>
                      <p className="mt-0.5 text-[10px] text-[#9995A3]">
                        Business overview
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-[#F0EDF6] px-3 py-1.5 text-[10px] font-semibold text-[#6C5A9D]">
                    Sample workspace
                  </span>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="grid gap-3 sm:grid-cols-3">
                    {current.metrics.map(([label, value]) => (
                      <div key={label} className="rounded-2xl bg-[#FAF9FB] p-4">
                        <p className="text-[11px] text-[#8E899A]">{label}</p>
                        <p className="mt-2 text-[29px] font-semibold tracking-[-0.06em] text-[#302D42]">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 overflow-hidden rounded-2xl border border-[#EEEAF2]">
                    <div className="hidden grid-cols-[1fr_1.4fr_1.2fr_auto] gap-3 bg-[#FAF9FB] px-4 py-3 sm:grid">
                      {["Reference", "Name", "Details", "Status"].map((label) => (
                        <span key={label} className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#A09CAB]">
                          {label}
                        </span>
                      ))}
                    </div>
                    {current.records.map((record) => (
                      <div
                        key={record[0]}
                        className="grid gap-2 border-t border-[#F0EDF3] px-4 py-4 sm:grid-cols-[1fr_1.4fr_1.2fr_auto] sm:items-center sm:gap-3"
                      >
                        <span className="text-[10px] font-medium text-[#9995A3]">
                          {record[0]}
                        </span>
                        <span className="text-[12px] font-semibold text-[#494557]">
                          {record[1]}
                        </span>
                        <span className="text-[11px] text-[#8E899A]">
                          {record[2]}
                        </span>
                        <span>
                          <Status tone={record[4]}>{record[3]}</Status>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <p className="mt-3 text-center text-[10px] text-[#A09CAB]">
            Product illustration with sample records. Screens and figures are examples.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section id="why-dotpaper" className="scroll-mt-10 bg-[#FBFAF8]">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 md:py-32 lg:px-14">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#7862B2]">
            Why Dotpaper
          </p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <h2 className="max-w-[650px] text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[1.02] tracking-[-0.07em] text-[#29263D]">
              Less time managing tools. More time moving forward.
            </h2>
            <p className="max-w-[420px] text-[15px] leading-8 text-[#777384] lg:ml-auto">
              Your business deserves software that fits the way you work.
              Dotpaper brings the essentials together and gives you room to
              grow.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <Reveal key={benefit.number} delay={index * 0.06}>
                <div className="flex h-full gap-5 rounded-[22px] border border-[#ECE8EF] bg-white p-6 sm:p-8">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${benefit.background} ${benefit.foreground}`}>
                    <Icon size={21} strokeWidth={1.7} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.14em] text-[#A09CAB]">
                      {benefit.number}
                    </p>
                    <h3 className="mt-2 text-[20px] font-semibold tracking-[-0.045em] text-[#302D42]">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 max-w-[430px] text-[13px] leading-7 text-[#777384]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <section className="bg-[#F3F0F8]">
      <div className="mx-auto max-w-[1200px] px-5 py-24 sm:px-8 md:py-32">
        <Reveal className="mx-auto max-w-[700px] text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#7862B2]">
            A simpler way forward
          </p>
          <h2 className="mt-5 text-[clamp(2.8rem,5vw,4.7rem)] font-semibold leading-[1.03] tracking-[-0.07em] text-[#29263D]">
            One place makes a difference.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="overflow-hidden rounded-[22px] border border-[#E5DFED] bg-white">
            <div className="grid grid-cols-[0.7fr_1fr_1fr] border-b border-[#EEEAF2] bg-[#FAF9FB]">
              <div className="p-4 sm:p-6" />
              <div className="p-4 text-[11px] font-semibold text-[#9995A3] sm:p-6 sm:text-[12px]">
                Separate tools
              </div>
              <div className="bg-[#EAE4F5] p-4 text-[11px] font-semibold text-[#5C478F] sm:p-6 sm:text-[12px]">
                Dotpaper
              </div>
            </div>

            {comparison.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-[0.7fr_1fr_1fr] border-b border-[#F0EDF3] last:border-0"
              >
                <div className="flex items-center p-4 text-[11px] font-semibold text-[#494557] sm:p-6 sm:text-[13px]">
                  {item.label}
                </div>
                <div className="flex items-center p-4 text-[11px] leading-5 text-[#8E899A] sm:p-6 sm:text-[13px] sm:leading-6">
                  {item.old}
                </div>
                <div className="flex items-center gap-2 bg-[#F7F4FB] p-4 text-[11px] font-medium leading-5 text-[#49415E] sm:gap-3 sm:p-6 sm:text-[13px] sm:leading-6">
                  <Check className="h-3.5 w-3.5 shrink-0 text-[#7961B4]" />
                  {item.dotpaper}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 md:py-28">
      <Reveal>
        <div className="relative mx-auto max-w-[1350px] overflow-hidden rounded-[28px] bg-[#29234D] px-6 py-20 text-center sm:px-12 md:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-48 h-[480px] w-[480px] rounded-full border-[70px] border-white/[0.045]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-64 -left-20 h-[480px] w-[480px] rounded-full bg-[#7961B4]/30 blur-3xl"
          />

          <div className="relative mx-auto max-w-[760px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#C8B9E8]">
              A better way to run your business
            </p>
            <h2 className="mt-6 text-[clamp(2.8rem,6vw,5.8rem)] font-semibold leading-[1.02] tracking-[-0.075em] text-white [text-wrap:balance]">
              Bring your business together.
            </h2>
            <p className="mx-auto mt-6 max-w-[490px] text-[14px] leading-7 text-[#D0C9E0] sm:text-[16px]">
              Tell us how your business works. Let's explore how Dotpaper can
              bring your everyday operations into one place.
            </p>
            <a
              href={CONTACT_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-9 inline-flex h-[54px] items-center gap-3 rounded-full bg-white px-7 text-[13px] font-semibold text-[#29234D] transition hover:bg-[#F0ECF7]"
            >
              Talk to our team
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}


function Footer() {
  return (
    <footer className="border-t border-[#ECE8EF] bg-[#FBFAF8]">
      <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-14">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <Brand />
            <p className="mt-3 text-[11px] text-[#9995A3]">
              Business software, built around you.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
            <a href="#applications" className="text-[12px] font-medium text-[#777384] hover:text-[#29234D]">
              Applications
            </a>
            <a href="#how-it-works" className="text-[12px] font-medium text-[#777384] hover:text-[#29234D]">
              How it works
            </a>
            <a href="#why-dotpaper" className="text-[12px] font-medium text-[#777384] hover:text-[#29234D]">
              Why Dotpaper
            </a>
            <a
              href={CONTACT_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#5D4798] hover:text-[#29234D]"
            >
              Contact <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-2 border-t border-[#ECE8EF] pt-5 text-[10px] text-[#A09CAB] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ECOCEE. All rights reserved.</p>
          <p>Designed and built by ECOCEE.</p>
        </div>
      </div>
    </footer>
  );
}


export default function DotpaperLanding() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#FBFAF8] text-[#29263D] antialiased">
      <Header />
      <Hero />
      <ApplicationSection />
      <ConnectedSection />
      <Showcase />
      <Benefits />
      <Comparison />
      <FinalCTA />
      <Footer />
    </main>
  );
}