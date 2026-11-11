import { Hanken_Grotesk } from "next/font/google";

import { GOOGLE_FORM_URL } from "@/lib/config";
import { applications } from "./shared";
import { Workspace } from "./workspace";

/**
 * Dotpaper landing page.
 *
 * Restrained and grid-based: one typeface, hairline rules, flat color, small radii.
 * No shadows, no rotation, no icons, no SVG, no emoji, no gradients, no scroll animation.
 * No sample data: no invented numbers, customers, invoices or records anywhere.
 *
 * Brand colors only: Cobalt #185ADB, Tangerine #FF8A3D, Cream #F5F1E8, Ink #333333.
 * Light and dark follow the system setting.
 * For a manual .dark class toggle, add to globals.css:
 *   @custom-variant dark (&:where(.dark, .dark *));
 *
 * Files: page.tsx (server), workspace.tsx (client, the hero window), shared.tsx (content).
 */

const font = Hanken_Grotesk({ subsets: ["latin"], display: "swap" });

const CONTACT_HREF = GOOGLE_FORM_URL;

const TOKENS =
  "[--paper:#F5F1E8] [--surface:#FFFFFF] [--ink:#333333] [--muted:#5E5A52] [--rule:rgba(51,51,51,0.18)] " +
  "[--cobalt:#185ADB] [--cobalt-text:#185ADB] [--tang:#FF8A3D] " +
  "dark:[--paper:#1C1B19] dark:[--surface:#262421] dark:[--ink:#F5F1E8] dark:[--muted:#B3AD9F] " +
  "dark:[--rule:rgba(245,241,232,0.16)] dark:[--cobalt-text:#8DB1FF]";

const wrap = "mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12";
const h2 =
  "text-[clamp(2.25rem,4.2vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.035em] [text-wrap:balance]";
const lead = "mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl sm:leading-relaxed";
const side = "max-w-md text-lg leading-relaxed text-[var(--muted)] lg:col-span-4 lg:col-start-9 lg:self-end";
const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--cobalt-text)]";
const btn = `inline-flex items-center justify-center rounded-md px-6 py-3.5 text-base font-semibold transition-colors ${focus}`;

const NAV = [
  ["Applications", "#applications"],
  ["How it works", "#how-it-works"],
  ["Why Dotpaper", "#why-dotpaper"],
];

const benefits = [
  [
    "Everything connected",
    "A customer, their service history, estimates, invoices and payments belong together. Your team doesn't have to piece the story together from different tools.",
  ],
  [
    "Made around your work",
    "Every business has its own way of working. Dotpaper can be shaped around your processes, records, teams and day-to-day requirements.",
  ],
  [
    "A clearer way to work",
    "Your team gets a familiar experience across every application. Less switching between tools, less repeated work and fewer things to chase.",
  ],
  [
    "Your business stays in control",
    "Manage who can see information and perform actions. Keep important activity organised and make changes with confidence.",
  ],
];

const comparison = [
  ["Daily work", "Move between different tools", "Work from one familiar place"],
  ["Business records", "Information spread across systems", "Connected records in one workspace"],
  ["Team access", "Manage access in multiple places", "One organised access system"],
  ["Changing needs", "Adapt your process to the software", "Adapt the software to your process"],
];

/* What a customer record brings together. Labels only, no data. */
const linked = [
  ["Service history", "Requests and work orders for this customer."],
  ["Estimates, invoices and payments", "The money side, connected to the work."],
  ["Conversations and follow-ups", "Enquiries and what needs doing next."],
  ["Stock and parts", "Stock movements tied to everyday work."],
];

function Brand() {
  return (
    <a href="#top" aria-label="Dotpaper home" className={`inline-flex items-baseline rounded-sm ${focus}`}>
      <span className="text-[26px] font-bold tracking-[-0.045em]">dotpaper</span>
      <span aria-hidden="true" className="ml-0.5 inline-block h-2 w-2 rounded-full bg-[var(--tang)]" />
    </a>
  );
}

function Header() {
  return (
    <header className="relative z-50 bg-[var(--paper)]">
      <div className={`${wrap} flex h-[92px] items-center justify-between`}>
        <div className="flex items-center gap-12">
          <Brand />
          <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
            {NAV.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className={`rounded-sm text-[15px] font-medium text-[var(--muted)] transition-colors hover:text-[var(--ink)] ${focus}`}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <a
          href={CONTACT_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btn} hidden bg-[var(--ink)] !px-5 !py-2.5 !text-[15px] text-[var(--paper)] hover:opacity-85 md:inline-flex`}
        >
          Talk to our team
        </a>

        {/* The phone menu needs no JavaScript */}
        <details className="md:hidden">
          <summary
            className={`flex cursor-pointer list-none items-center rounded-md border border-[var(--rule)] px-4 py-2 text-[15px] font-medium [&::-webkit-details-marker]:hidden ${focus}`}
          >
            Menu
          </summary>
          <nav
            aria-label="Mobile navigation"
            className="absolute inset-x-0 top-full border-b border-[var(--rule)] bg-[var(--paper)] px-5 pb-6"
          >
            {NAV.map(([label, href]) => (
              <a key={label} href={href} className="block border-b border-[var(--rule)] py-4 text-lg font-medium">
                {label}
              </a>
            ))}
            <a
              href={CONTACT_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btn} mt-6 w-full bg-[var(--ink)] text-[var(--paper)]`}
            >
              Talk to our team
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="bg-[var(--paper)]">
      <div className={`${wrap} grid gap-x-8 gap-y-10 pb-16 pt-14 sm:pt-20 lg:grid-cols-12 lg:pb-20 lg:pt-28`}>
        <h1 className="text-[clamp(3.25rem,7.4vw,7.25rem)] font-semibold leading-[0.98] tracking-[-0.045em] lg:col-span-8">
          Your business.
          <span className="block text-[var(--cobalt-text)]">All in one place.</span>
        </h1>

        <div className="lg:col-span-4 lg:self-end">
          <p className="text-lg leading-relaxed text-[var(--muted)] sm:text-xl sm:leading-relaxed">
            Bring your daily work together with one connected business workspace. Manage services, money,
            customers and stock without juggling separate tools.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={CONTACT_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btn} bg-[var(--ink)] text-[var(--paper)] hover:opacity-85`}
            >
              Talk to our team
            </a>
            <a
              href="#applications"
              className={`rounded-sm text-base font-semibold underline decoration-2 underline-offset-[6px] decoration-[var(--tang)] hover:decoration-[var(--ink)] ${focus}`}
            >
              Explore applications
            </a>
          </div>
        </div>
      </div>

      {/* The workspace sits on a cobalt band and is cropped by its bottom edge */}
      <div className="bg-[var(--cobalt)] pt-8 sm:pt-12 lg:pt-16">
        <div className={wrap}>
          <Workspace />
        </div>
      </div>
    </section>
  );
}

function Applications() {
  return (
    <section id="applications" className="scroll-mt-4 bg-[var(--paper)] py-20 lg:py-28">
      <div className={wrap}>
        <div className="grid gap-x-8 gap-y-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-base font-semibold text-[var(--cobalt-text)]">One workspace, many possibilities</p>
            <h2 className={`${h2} mt-3`}>Everything your team needs to get work done.</h2>
          </div>
          <p className={side}>
            Start with the applications your business needs today. Bring more of your operations into the same
            workspace as you grow.
          </p>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-lg border border-[var(--rule)] bg-[var(--rule)] sm:grid-cols-2 lg:grid-cols-4">
          {applications.map((app) => (
            <li key={app.id} className="flex flex-col bg-[var(--paper)] p-6">
              <h3 className="text-2xl font-semibold tracking-[-0.03em]">{app.name}</h3>
              <p className="mt-3 leading-relaxed text-[var(--muted)]">{app.description}</p>
              <div className="mt-auto pt-10">
                <ul className="border-t border-[var(--rule)]">
                  {app.covers.map((item) => (
                    <li key={item} className="border-b border-[var(--rule)] py-2.5 text-[15px] font-medium last:border-b-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-xl text-base text-[var(--muted)]">
          Each application has a clear purpose, while keeping the same familiar experience for your entire team.
        </p>
      </div>
    </section>
  );
}

function Connected() {
  return (
    <section id="how-it-works" className="scroll-mt-4 border-t border-[var(--rule)] bg-[var(--paper)] py-20 lg:py-28">
      <div className={`${wrap} grid items-start gap-14 lg:grid-cols-12 lg:gap-8`}>
        <div className="lg:col-span-5">
          <p className="text-base font-semibold text-[var(--cobalt-text)]">A better way to work</p>
          <h2 className={`${h2} mt-3`}>Your work is connected. Your team stays in sync.</h2>
          <p className={lead}>
            When your applications share the same workspace, information doesn't have to be entered again and
            again. Your team can see what matters and move work forward with more clarity.
          </p>
        </div>

        <div className="rounded-lg border border-[var(--rule)] bg-[var(--surface)] lg:col-span-6 lg:col-start-7">
          <div className="border-b border-[var(--rule)] p-6">
            <p className="text-sm text-[var(--muted)]">One customer record</p>
            <h3 className="mt-1 text-2xl font-semibold tracking-[-0.03em]">Everything about a customer, together</h3>
          </div>

          <ul className="grid gap-px bg-[var(--rule)] sm:grid-cols-2">
            {linked.map(([label, detail]) => (
              <li key={label} className="bg-[var(--surface)] p-5">
                <p className="font-semibold">{label}</p>
                <p className="mt-1 text-[15px] leading-relaxed text-[var(--muted)]">{detail}</p>
              </li>
            ))}
          </ul>

          <p className="border-t border-[var(--rule)] px-6 py-4 text-[15px] text-[var(--muted)]">
            Information is entered once and shared across your applications.
          </p>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section id="why-dotpaper" className="scroll-mt-4 border-t border-[var(--rule)] bg-[var(--paper)] py-20 lg:py-28">
      <div className={wrap}>
        <div className="grid gap-x-8 gap-y-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-base font-semibold text-[var(--cobalt-text)]">Why Dotpaper</p>
            <h2 className={`${h2} mt-3`}>Less time managing tools. More time moving forward.</h2>
          </div>
          <p className={side}>
            Your business deserves software that fits the way you work. Dotpaper brings the essentials together
            and gives you room to grow.
          </p>
        </div>

        <ul className="mt-14 border-b border-[var(--rule)]">
          {benefits.map(([title, body]) => (
            <li key={title} className="grid gap-x-8 gap-y-3 border-t border-[var(--rule)] py-8 lg:grid-cols-12">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl lg:col-span-5">{title}</h3>
              <p className="max-w-xl text-lg leading-relaxed text-[var(--muted)] lg:col-span-6 lg:col-start-7">
                {body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <section className="border-t border-[var(--rule)] bg-[var(--paper)] py-20 lg:py-28">
      <div className={wrap}>
        <div className="max-w-2xl">
          <p className="text-base font-semibold text-[var(--cobalt-text)]">A simpler way forward</p>
          <h2 className={`${h2} mt-3`}>One place makes a difference.</h2>
        </div>

        <div className="mt-14 overflow-x-auto">
          <table className="w-full min-w-[34rem] border-collapse text-left">
            <caption className="sr-only">Separate tools compared with Dotpaper</caption>
            <thead>
              <tr className="text-sm">
                <td className="w-[24%]" />
                <th scope="col" className="pb-4 pr-6 font-medium text-[var(--muted)]">
                  Separate tools
                </th>
                <th scope="col" className="border-l-[3px] border-[var(--cobalt)] pb-4 pl-6 font-semibold text-[var(--cobalt-text)]">
                  Dotpaper
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map(([label, old, now]) => (
                <tr key={label} className="border-t border-[var(--rule)]">
                  <th scope="row" className="py-6 pr-6 text-base font-semibold sm:text-lg">
                    {label}
                  </th>
                  <td className="py-6 pr-6 text-base text-[var(--muted)] sm:text-lg">{old}</td>
                  <td className="border-l-[3px] border-[var(--cobalt)] py-6 pl-6 text-base font-semibold sm:text-lg">
                    {now}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-[var(--tang)] py-20 text-[#2B2926] lg:py-32">
      <div className={`${wrap} grid gap-x-8 gap-y-10 lg:grid-cols-12`}>
        <div className="lg:col-span-9">
          <p className="text-base font-semibold">A better way to run your business</p>
          <h2 className="mt-4 text-[clamp(3rem,8vw,7.5rem)] font-semibold leading-[0.97] tracking-[-0.045em] [text-wrap:balance]">
            Bring your business together.
          </h2>
        </div>
        <div className="lg:col-span-5">
          <p className="text-lg leading-relaxed sm:text-xl sm:leading-relaxed">
            Tell us how your business works. Let's explore how Dotpaper can bring your everyday operations into
            one place.
          </p>
          <a
            href={CONTACT_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btn} mt-8 bg-[#2B2926] text-[#F5F1E8] hover:bg-[#3D3A36] focus-visible:!outline-[#2B2926]`}
          >
            Talk to our team
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const link =
    "rounded-sm text-[15px] text-[#F5F1E8]/80 hover:text-[#F5F1E8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF8A3D]";
  return (
    <footer className="bg-[#333333] py-14 text-[#F5F1E8]">
      <div className={wrap}>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <a href="#top" aria-label="Dotpaper home" className="inline-flex items-baseline">
              <span className="text-[26px] font-bold tracking-[-0.045em]">dotpaper</span>
              <span aria-hidden="true" className="ml-0.5 inline-block h-2 w-2 rounded-full bg-[#FF8A3D]" />
            </a>
            <p className="mt-3 text-[15px] text-[#F5F1E8]/70">Business software, built around you.</p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <ul className="space-y-3">
              {NAV.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className={link}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <a href={CONTACT_HREF} target="_blank" rel="noopener noreferrer" className={`${link} font-semibold !text-[#F5F1E8]`}>
              Contact us
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-1 border-t border-[#F5F1E8]/20 pt-6 text-sm text-[#F5F1E8]/60 sm:flex-row sm:justify-between">
          <p>© 2026 ECOCEE. All rights reserved.</p>
          <p>Designed and built by ECOCEE.</p>
        </div>
      </div>
    </footer>
  );
}

export default function DotpaperLanding() {
  return (
    <main
      className={`${font.className} ${TOKENS} min-h-screen overflow-x-clip bg-[var(--paper)] text-[var(--ink)] antialiased`}
    >
      <Header />
      <Hero />
      <Applications />
      <Connected />
      <Benefits />
      <Comparison />
      <FinalCTA />
      <Footer />
    </main>
  );
}