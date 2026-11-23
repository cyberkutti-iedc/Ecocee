"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Figtree, JetBrains_Mono } from "next/font/google";
import { trackGithubClick } from "@/lib/analytics";

/**
 * Kode landing page, hero + feature section.
 * Next.js 16 App Router, Server Component, Tailwind CSS.
 * Logo: /public/kode/logo.png
 *
 * Reference feel
 *   Google Labs        centered oversized headline, one big organic shape behind it,
 *                      headline changes color where the shape crosses it, tilted white cards.
 *   Android Developers left intro column + 2x2 grid of flat-color panels, black pill button,
 *                      big friendly sans, generous whitespace.
 *
 * No SVG, no icons, no emoji. Every shape is plain CSS (borders, radius, clip by overflow).
 *
 * Palette (from the owl logo)
 *   Light  page #F4F0F7  ink #1E0A33  muted #5B4378  brand #7B2FBE
 *   Dark   page #12081F  ink #F4ECFC  muted #BBA6D4  brand #C58BF2
 *   Both   amber #F5A623 (beak and feet), indigo #5B4BD6, orchid #C58BF2
 *
 * Dark mode follows the system setting (Tailwind default).
 * For a manual .dark class toggle, add to globals.css:
 *   @custom-variant dark (&:where(.dark, .dark *));
 */

const sans = Figtree({ subsets: ["latin"], display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], display: "swap" });

const NAV = [
  { label: "Why Kode", href: "#why" },
  { label: "Docs", href: "https://github.com/ecocee/Kode/tree/main/docs" },
  { label: "Benchmarks", href: "#footprint" },
  { label: "Community", href: "https://github.com/ecocee/Kode/discussions" },
];

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7B2FBE] dark:focus-visible:outline-[#C58BF2]";

const pillDark =
  "rounded-full bg-[#1E0A33] text-white transition-colors hover:bg-[#3A1C66] dark:bg-[#F4ECFC] dark:text-[#12081F] dark:hover:bg-white";

const pillLine =
  "rounded-full border border-[#1E0A33]/30 text-[#1E0A33] transition-colors hover:bg-[#1E0A33]/8 dark:border-[#F4ECFC]/35 dark:text-[#F4ECFC] dark:hover:bg-[#F4ECFC]/10";

const wrap = "mx-auto max-w-[1320px] px-6 lg:px-10";

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
/* ------------------------------------------------------------------ */

const CODE = `// fib.kode
fn fib(n: int) -> int {
  if n < 2 { return n }
  return fib(n - 1) + fib(n - 2)
}

print("fib(30) =", fib(30))`;

function Code() {
  const parts = CODE.split(/(\/\/.*|"[^"]*"|\bfn\b|\bif\b|\breturn\b)/g);
  return (
    <pre
      className={`${mono.className} overflow-x-auto text-[12.5px] leading-6 text-[#F4ECFC] sm:text-[13.5px]`}
    >
      <code>
        {parts.map((p, i) => {
          if (/^(fn|if|return)$/.test(p))
            return (
              <span key={i} className="text-[#F5A623]">
                {p}
              </span>
            );
          if (p.startsWith('"'))
            return (
              <span key={i} className="text-[#C58BF2]">
                {p}
              </span>
            );
          if (p.startsWith("//"))
            return (
              <span key={i} className="text-[#F4ECFC]/50">
                {p}
              </span>
            );
          return <span key={i}>{p}</span>;
        })}
      </code>
    </pre>
  );
}

/* Hero cards: white frame, colored panel inside, copy underneath (Google Labs). */
function HeroCard({
  title,
  body,
  href,
  tilt,
  panel,
  children,
}: {
  title: string;
  body: string;
  href: string;
  tilt: string;
  panel: string;
  children: ReactNode;
}) {
  return (
    <li className={`${tilt} motion-safe:transition-transform motion-safe:duration-300 lg:hover:rotate-0`}>
      <Link
        href={href}
        className={`group flex h-full flex-col rounded-[2.5rem] bg-white p-3 dark:bg-[#1F1034] ${focus}`}
      >
        <div className={`relative overflow-hidden rounded-[1.9rem] ${panel}`}>{children}</div>
        <div className="px-4 pb-4 pt-5">
          <h3 className="text-2xl font-medium tracking-tight">{title}</h3>
          <p className="mt-1.5 text-base leading-relaxed text-[#5B4378] dark:text-[#BBA6D4]">{body}</p>
        </div>
      </Link>
    </li>
  );
}

/* The headline, rendered twice: ink version on the page, tinted version clipped by the blob. */
function Headline({ tone, hidden }: { tone: string; hidden?: boolean }) {
  return (
    <div className={`${wrap} pt-12 text-center lg:pt-16`} aria-hidden={hidden || undefined}>
      {hidden ? (
        <div
          className={`text-[clamp(3rem,8.4vw,8.75rem)] font-medium leading-[0.98] tracking-[-0.045em] ${tone}`}
        >
          Write. Compile. Ship.
        </div>
      ) : (
        <h1
          className={`text-[clamp(3rem,8.4vw,8.75rem)] font-medium leading-[0.98] tracking-[-0.045em] ${tone}`}
        >
          Write. Compile. Ship.
        </h1>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page section                                                        */
/* ------------------------------------------------------------------ */

export function Hero() {
  return (
    <div className={`${sans.className} bg-[#F4F0F7] text-[#1E0A33] dark:bg-[#12081F] dark:text-[#F4ECFC]`}>
      {/* ============================ HERO ============================ */}
      <section className="relative isolate overflow-hidden">
        {/* The one big shape. It clips a second copy of the headline so the
            letters change color exactly where the shape passes behind them. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 -z-0 h-[74%] w-[70%] overflow-hidden bg-[#F5A623] dark:bg-[#7B2FBE] lg:w-[56%]"
          style={{ borderRadius: "46% 0 0 62% / 34% 0 0 66%" }}
        >
          <div className="absolute right-0 top-0 w-[142.857%] lg:w-[178.571%]">
            <div className="h-20" />
            <Headline hidden tone="text-[#3B0F66] dark:text-[#FFC857]" />
          </div>
        </div>

        <header className={`${wrap} relative z-10 grid h-20 grid-cols-[1fr_auto] items-center lg:grid-cols-[1fr_auto_1fr]`}>
          <Link href="/" className={`flex w-fit items-center gap-2.5 rounded-md ${focus}`}>
            <Image src="/kode/logo.png" alt="Kode logo" width={44} height={44} className="h-11 w-11 scale-125" priority />
            <span className="text-[26px] font-semibold tracking-tight">Kode</span>
            <span className="mt-1 text-xs font-medium text-[#5B4378] dark:text-[#BBA6D4]">v0.3.6</span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-9 text-[17px] lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-sm transition-opacity hover:opacity-60 ${focus}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-3">
            <a
              href="https://github.com/ecocee/Kode"
              onClick={() => trackGithubClick("kode")}
              className={`hidden px-5 py-2.5 text-[15px] font-medium sm:inline-block ${pillLine} ${focus}`}
            >
              GitHub
            </a>
            <a
              href="https://github.com/ecocee/Kode/tree/main/docs"
              onClick={() => trackGithubClick("kode")}
              className={`px-5 py-2.5 text-[15px] font-medium ${pillDark} ${focus}`}
            >
              Docs
            </a>
          </div>
        </header>

        <div className="relative z-10">
          <Headline tone="text-[#1E0A33] dark:text-[#F4ECFC]" />

          <div className={`${wrap} text-center`}>
            <p className="mx-auto mt-8 max-w-[36rem] text-xl leading-relaxed text-[#3B2459] dark:text-[#D9C8EE] sm:text-[22px] sm:leading-[1.55]">
              A compiled language engineered for clarity, speed, and minimal memory footprint. Clean syntax, static typing, and small native binaries built for cloud backends and AI agents.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://github.com/ecocee/Kode"
                onClick={() => trackGithubClick("kode")}
                className={`px-8 py-4 text-lg font-medium ${pillDark} ${focus}`}
              >
                Try Kode
              </a>
            </div>

            <p className="mt-5 text-sm text-[#5B4378] dark:text-[#BBA6D4]">
              Free and open source (Apache-2.0). Needs Rust 1.91+ and a C compiler. Windows support is a preview.
            </p>
          </div>

          {/* Three cards that follow the headline: Write, Compile, Ship */}
          <div className={`${wrap} pb-24 pt-16 lg:pb-32 lg:pt-24`}>
            <ul className="grid items-end gap-6 lg:grid-cols-3 lg:gap-8">
              <HeroCard
                title="Write"
                body="Expressive, statically typed syntax that reads the way you think."
                href="https://github.com/ecocee/Kode/tree/main/docs"
                tilt="lg:-rotate-[4deg] lg:origin-bottom-right"
                panel="bg-[#DCCBF7] dark:bg-[#3A1C66]"
              >
                <div className="flex aspect-[4/3.3] items-center p-5 sm:p-7">
                  <div className="w-full rounded-2xl bg-[#1B0B2E] p-5">
                    <Code />
                  </div>
                </div>
              </HeroCard>

              <HeroCard
                title="Compile"
                body="One command produces a small native binary with a leak-checked runtime."
                href="#why"
                tilt="lg:-translate-y-6"
                panel="bg-[#7B2FBE]"
              >
                <div className="relative flex aspect-[4/4.6] flex-col items-center justify-center">
                  <div className="absolute left-1/2 top-[46%] aspect-square w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C58BF2]" />
                  <Image
                    src="/kode/logo.png"
                    alt="The Kode owl"
                    width={320}
                    height={320}
                    className="relative w-[62%] -translate-y-3"
                  />
                  <p
                    className={`${mono.className} absolute bottom-6 rounded-full bg-[#FBF8FF] px-5 py-2.5 text-sm font-medium text-[#1E0A33] sm:text-base`}
                  >
                    fib(30) = 832040
                  </p>
                </div>
              </HeroCard>

              <HeroCard
                title="Ship"
                body="Runs comfortably on a single small server, so hosting stays cheap."
                href="#footprint"
                tilt="lg:rotate-[4deg] lg:origin-bottom-left"
                panel="bg-[#5B4BD6]"
              >
                <div className="relative aspect-[4/3.3]">
                  <div className="absolute -right-[12%] -top-[28%] aspect-square w-[62%] rounded-full bg-[#8F84FF]" />
                  <p className="absolute left-[8%] top-[16%] -rotate-3 rounded-3xl bg-[#FBF8FF] px-6 py-4 text-4xl font-semibold tracking-tight text-[#1E0A33] sm:text-5xl">
                    1 vCPU
                  </p>
                  <p className="absolute bottom-[14%] right-[8%] rotate-3 rounded-3xl bg-[#F5A623] px-6 py-4 text-4xl font-semibold tracking-tight text-[#1E0A33] sm:text-5xl">
                    1 GB
                  </p>
                </div>
              </HeroCard>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}