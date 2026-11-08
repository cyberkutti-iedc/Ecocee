import Image from "next/image";
import Link from "next/link";

/**
 * Kode landing page, hero only.
 * Next.js 16 App Router, Server Component, Tailwind CSS.
 * Logo: /public/kode/logo.png
 *
 * Colors come from the owl logo.
 *   Light:  page #FBF8FF, text #2B0F47, muted #5B4378, brand #7B2FBE
 *   Dark:   page #12081F, text #F4ECFC, muted #BBA6D4, brand #C58BF2
 *   Both:   amber #F5A623 (beak and feet), orchid and indigo as card accents
 *
 * Dark mode follows the system setting (Tailwind default).
 * For a manual .dark class toggle, add to globals.css:
 *   @custom-variant dark (&:where(.dark, .dark *));
 */

const NAV = [
  { label: "Why Kode", href: "#why" },
  { label: "Docs", href: "/docs" },
  { label: "Benchmarks", href: "#footprint" },
  { label: "Community", href: "https://github.com/ecocee/Kode/discussions" },
];

const FEATURES = [
  {
    title: "Backend",
    body: "Typed services with a built-in web server, JSON and PostgreSQL client.",
    href: "#why",
    border: "border-[#7B2FBE] dark:border-[#C58BF2]",
    text: "text-[#7B2FBE] dark:text-[#C58BF2]",
    icon: <path d="M4 6h16v9H4zM9 19h6M12 15v4" />,
  },
  {
    title: "Cloud",
    body: "Small native binaries and a leak-checked runtime keep hosting cheap.",
    href: "#footprint",
    border: "border-[#5B4BD6] dark:border-[#8F84FF]",
    text: "text-[#4B3BC4] dark:text-[#A79EFF]",
    icon: (
      <path d="M7 18a4 4 0 0 1-.6-7.96A5.5 5.5 0 0 1 17 8.5a4.75 4.75 0 0 1 0 9.5H7z" />
    ),
  },
  {
    title: "Concurrency",
    body: "Tasks with spawn and await, plus typed channels.",
    href: "#code",
    border: "border-[#E09100] dark:border-[#F5A623]",
    text: "text-[#A86500] dark:text-[#F5A623]",
    icon: (
      <path d="M5 5h6v6H5zM13 13h6v6h-6zM11 8h4a2 2 0 0 1 2 2v3M13 16H9a2 2 0 0 1-2-2v-3" />
    ),
  },
  {
    title: "AI agents",
    body: "JSON diagnostics and error codes with hints, made for agents.",
    href: "#agents",
    border: "border-[#B64FD8] dark:border-[#D882F0]",
    text: "text-[#A33BC6] dark:text-[#E29BF5]",
    icon: (
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM18.5 16l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" />
    ),
  },
];

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7B2FBE] dark:focus-visible:outline-[#C58BF2]";

/** Layered isometric illustration: infrastructure, services, code, and the owl. */
function HeroIllustration() {
  const iso = "matrix(0.866 0.5 -0.866 0.5 0 0)";
  const mono = "ui-monospace, SFMono-Regular, Menlo, monospace";

  return (
    <svg
      viewBox="0 0 560 560"
      className="h-auto w-full"
      role="img"
      aria-label="Three stacked layers: Kode code on top, running services in the middle, a small server underneath, with the Kode owl perched on top"
    >
      <ellipse cx="280" cy="520" rx="190" ry="22" className="fill-[#2B0F47]/20 dark:fill-black/40" />

      {/* bottom slab: the small machine */}
      <g transform="translate(280 270)">
        <g transform={iso}>
          <rect width="260" height="260" rx="14" className="fill-[#EBDDFB] dark:fill-[#2A1245]" />
          <rect
            x="1" y="1" width="258" height="258" rx="13" fill="none" strokeWidth="1.5" strokeOpacity="0.6"
            className="stroke-[#7B2FBE] dark:stroke-[#C58BF2]"
          />
          {[52, 104, 156, 208].map((p) => (
            <g key={p} strokeOpacity="0.25" strokeWidth="1" className="stroke-[#7B2FBE] dark:stroke-[#C58BF2]">
              <line x1={p} y1="14" x2={p} y2="246" />
              <line x1="14" y1={p} x2="246" y2={p} />
            </g>
          ))}
          <rect x="30" y="30" width="46" height="46" rx="8" strokeOpacity="0.7" className="fill-[#FBF8FF] stroke-[#7B2FBE] dark:fill-[#12081F] dark:stroke-[#C58BF2]" />
          <rect x="184" y="184" width="46" height="46" rx="8" strokeOpacity="0.7" className="fill-[#FBF8FF] stroke-[#7B2FBE] dark:fill-[#12081F] dark:stroke-[#C58BF2]" />
          <text x="38" y="58" fontSize="10" fontFamily={mono} className="fill-[#7B2FBE] dark:fill-[#C58BF2]">1 vCPU</text>
          <text x="190" y="212" fontSize="10" fontFamily={mono} className="fill-[#7B2FBE] dark:fill-[#C58BF2]">1 GB</text>
        </g>
      </g>

      {/* middle slab: services */}
      <g transform="translate(280 175)">
        <g transform={iso}>
          <rect width="260" height="260" rx="14" className="fill-[#7B2FBE] dark:fill-[#5A22A0]" />
          <rect x="1" y="1" width="258" height="258" rx="13" fill="none" stroke="#fff" strokeOpacity="0.28" strokeWidth="1.5" />
          <rect x="28" y="34" width="92" height="40" rx="8" fill="#C58BF2" />
          <rect x="140" y="34" width="92" height="40" rx="8" fill="#2B0F47" />
          <rect x="28" y="96" width="92" height="40" rx="8" fill="#2B0F47" />
          <rect x="140" y="96" width="92" height="40" rx="8" fill="#F5A623" />
          <rect x="28" y="158" width="204" height="40" rx="8" fill="#1B0B2E" fillOpacity="0.9" />
          {Array.from({ length: 12 }).map((_, i) => {
            const h = ((i * 7) % 5) * 4 + 6;
            return <rect key={i} x={40 + i * 15.5} y={180 - h} width="9" height={h} rx="2" fill="#C58BF2" />;
          })}
        </g>
      </g>

      {/* top slab: code */}
      <g transform="translate(280 80)">
        <g transform={iso}>
          <rect width="260" height="260" rx="14" fill="#1B0B2E" />
          <rect x="1" y="1" width="258" height="258" rx="13" fill="none" stroke="#F4ECFC" strokeOpacity="0.45" strokeWidth="1.5" />
          <circle cx="22" cy="22" r="4" fill="#F5A623" />
          <circle cx="36" cy="22" r="4" fill="#C58BF2" />
          <circle cx="50" cy="22" r="4" fill="#F4ECFC" fillOpacity="0.55" />
          <text x="76" y="26" fontSize="10" fill="#F4ECFC" fillOpacity="0.55" fontFamily={mono}>fib.kode</text>
          <g fontFamily={mono} fontSize="11" fill="#F4ECFC">
            <text x="20" y="64" fillOpacity="0.45">{"// fib.kode"}</text>
            <text x="20" y="90"><tspan fill="#F5A623">fn</tspan> fib(n: int) -&gt; int {"{"}</text>
            <text x="34" y="110"><tspan fill="#F5A623">if</tspan> n &lt; 2 {"{"} <tspan fill="#F5A623">return</tspan> n {"}"}</text>
            <text x="34" y="130"><tspan fill="#F5A623">return</tspan> fib(n - 1) + fib(n - 2)</text>
            <text x="20" y="150">{"}"}</text>
            <text x="20" y="188">print(<tspan fill="#C58BF2">"fib(30) ="</tspan>, fib(30))</text>
          </g>
        </g>
      </g>

      {/* the owl, perched on the back corner of the top slab */}
      <ellipse cx="432" cy="190" rx="34" ry="8" fill="#000" opacity="0.3" />
     {/* <image className="kode-float" href="/kode/logo.png" x="342" y="58" width="180" height="180" /> */}

      {/* loose pieces */}
      <circle cx="96" cy="150" r="11" fill="#F5A623" />
      <circle cx="476" cy="360" r="6" className="fill-[#2B0F47] dark:fill-[#F4ECFC]" />
      <rect x="62" y="372" width="26" height="26" rx="6" fill="#C58BF2" transform="rotate(-14 75 385)" />
      <rect x="452" y="418" width="28" height="28" rx="7" className="fill-[#5B4BD6] dark:fill-[#8F84FF]" transform="rotate(18 466 432)" />
    </svg>
  );
}

/** Big flat planes behind the hero. */
function Backdrop() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
    >
      <polygon points="560,0 1440,0 1440,520 980,380" className="fill-[#F1E6FC] dark:fill-[#220F3A]" />
      <polygon points="760,0 1440,0 1440,300" className="fill-[#E4CFF8] dark:fill-[#2E1650]" />
      <polygon points="1100,900 1440,420 1440,900" className="fill-[#D6B6F3] dark:fill-[#3A1C66]" />
      <polygon points="0,900 420,900 0,620" className="fill-[#F4ECFD] dark:fill-[#190A2B]" />
    </svg>
  );
}

export function Hero() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <Backdrop />

        <header className="mx-auto flex max-w-[1320px] items-center justify-between px-6 py-4 lg:px-10">
          <Link href="/" className={`flex items-center gap-2 rounded-md ${focus}`}>
            <Image src="/kode/logo.png" alt="" width={44} height={44} className="h-11 w-11 scale-125" />
            <span className="text-[26px] font-semibold tracking-tight">Kode</span>
            <span className="mt-1 text-xs font-medium text-[#5B4378] dark:text-[#BBA6D4]">v0.3</span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-8 text-[15px] text-[#5B4378] dark:text-[#BBA6D4] lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-sm transition-colors hover:text-[#2B0F47] dark:hover:text-white ${focus}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/docs/get-started"
            className={`rounded-full bg-[#7B2FBE] px-6 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#6A22A8] dark:bg-[#C58BF2] dark:text-[#12081F] dark:hover:bg-[#D5A3F7] ${focus}`}
          >
            Get started
          </Link>
        </header>

        <div className="mx-auto grid max-w-[1320px] items-center gap-6 px-6 pb-24 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4 lg:px-10 lg:pb-36 lg:pt-16">
          <div>
            <h1 className="text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
              Write. Compile.
              <br />
              Ship.
            </h1>

            <p className="mt-7 max-w-xl text-xl leading-relaxed text-[#4A3266] dark:text-[#D9C8EE] sm:text-2xl sm:leading-relaxed">
             A modern, statically typed language that combines expressive syntax with native performance. Built for cloud software, backend systems and AI-assisted development.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/docs/get-started"
                className={`rounded-full bg-[#7B2FBE] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#6A22A8] dark:bg-[#C58BF2] dark:text-[#12081F] dark:hover:bg-[#D5A3F7] ${focus}`}
              >
                Get started
              </Link>
              <a
                href="https://github.com/ecocee/Kode"
                className={`rounded-full border-2 border-[#7B2FBE] px-8 py-[14px] text-lg font-semibold text-[#7B2FBE] transition-colors hover:bg-[#7B2FBE]/10 dark:border-[#C58BF2] dark:text-[#C58BF2] dark:hover:bg-[#C58BF2]/10 ${focus}`}
              >
                View on GitHub
              </a>
            </div>

            <p className="mt-5 text-sm text-[#5B4378] dark:text-[#BBA6D4]">
              Free and open source under the Apache-2.0 license. Developed by Ecocee.
            </p>
          </div>

          <div className="mx-auto w-full max-w-[560px] lg:max-w-none">
            <HeroIllustration />
          </div>
        </div>
      </section>

      {/* Feature row overlapping the hero edge */}
      <section
        aria-labelledby="build-heading"
        className="relative z-10 mx-auto -mt-12 max-w-[1320px] px-6 pb-24 lg:-mt-24 lg:px-10"
      >
        <h2 id="build-heading" className="sr-only">Build it with Kode</h2>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <li key={f.title}>
              <Link
                href={f.href}
                className={`group flex h-full flex-col rounded-3xl border-2 bg-[#FBF8FF] p-6 transition-colors hover:bg-[#F1E6FC] dark:bg-[#12081F] dark:hover:bg-[#1C0D31] ${f.border} ${focus}`}
              >
                <svg viewBox="0 0 24 24" className={`h-7 w-7 ${f.text}`} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {f.icon}
                </svg>
                <span className={`mt-4 text-2xl font-semibold ${f.text}`}>{f.title}</span>
                <span className="mt-2 text-base leading-relaxed text-[#4A3266] dark:text-[#D9C8EE]">{f.body}</span>
                <span className="mt-auto pt-6">
                  <svg viewBox="0 0 24 24" className={`h-6 w-6 transition-transform duration-200 group-hover:translate-x-1 ${f.text}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                  <span className="sr-only">Read more about {f.title}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}