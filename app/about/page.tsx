
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

import { FooterSection } from "@/components/layout/sections/footer";
import { EcoceeLabsSection } from "@/components/layout/sections/ecocee-labs";
import Seo from "@/components/seo/Seo";
import {
  organizationSchema,
  breadcrumbSchema,
  webPageSchema,
} from "@/lib/seo/schemas";
import { teamData } from "@/data/team";
import { GOOGLE_FORM_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "About Ecocee — Technology & Product Engineering Company",
  description:
    "Discover Ecocee, an Indian technology company engineering AI software, developer technology, embedded systems and intelligent hardware.",
};

const capabilities = [
  {
    number: "01",
    name: "Artificial Intelligence",
    description:
      "AI agents, retrieval systems, intelligent automation and applications connected to real business workflows.",
    tags: ["AI Agents", "RAG", "Machine Learning"],
  },
  {
    number: "02",
    name: "Software & Infrastructure",
    description:
      "Custom software, backend systems, developer tools and scalable infrastructure built for demanding applications.",
    tags: ["Software Engineering", "Cloud", "Developer Tools"],
  },
  {
    number: "03",
    name: "Embedded Engineering",
    description:
      "Firmware, electronics, connected devices and software that bridges digital systems with the physical world.",
    tags: ["Embedded Systems", "Electronics", "IoT"],
  },
  {
    number: "04",
    name: "Edge Intelligence",
    description:
      "Computing and AI systems deployed closer to devices, data sources and real-world operations.",
    tags: ["Edge Computing", "Private AI", "Automation"],
  },
];

const principles = [
  {
    number: "01",
    title: "Understand the problem",
    description:
      "We begin with the engineering and operational challenge. Technology is selected only after the problem is understood.",
  },
  {
    number: "02",
    title: "Build the complete system",
    description:
      "A useful product requires more than a working prototype. We consider architecture, interfaces, infrastructure and deployment together.",
  },
  {
    number: "03",
    title: "Choose technology with purpose",
    description:
      "Cloud, on-premise infrastructure, edge devices or hybrid systems — the right approach depends on the requirements.",
  },
  {
    number: "04",
    title: "Keep improving",
    description:
      "We build with maintainability, reliability and future development in mind, rather than treating delivery as the end of engineering.",
  },
];

const milestones = [
  {
    year: "2023",
    title: "The beginning",
    description:
      "Ecocee started in Kerala with an interest in electronics, embedded engineering and building technology.",
  },
  {
    year: "2024",
    title: "Expanding engineering",
    description:
      "Work expanded across software development, connected systems and practical product engineering.",
  },
  {
    year: "2025",
    title: "Building software systems",
    description:
      "A broader focus on AI applications, business software, infrastructure and technology products.",
  },
  {
    year: "Today",
    title: "Engineering across disciplines",
    description:
      "Developing software, AI systems, developer technology and intelligent hardware for real-world applications.",
  },
];

export default function AboutPage() {
  const structuredData = [
    organizationSchema,
    webPageSchema(
      metadata.title as string,
      metadata.description as string,
      "https://ecocee.in/about"
    ),
    breadcrumbSchema([
      { name: "Home", url: "https://ecocee.in" },
      { name: "About", url: "https://ecocee.in/about" },
    ]),
  ];

  return (
    <>
      <Seo
        title={metadata.title as string}
        description={metadata.description as string}
        canonical="https://ecocee.in/about"
        image="https://ecocee.in/og-banner.webp"
        twitterHandle="@Ecocee"
        siteName="Ecocee"
        structuredData={structuredData}
      />

      <main className="min-h-screen overflow-hidden bg-white text-[#171717]">

        {/* 01 — Introduction */}
        <section className="relative border-b border-[#e8e8e8]">
          <div className="mx-auto max-w-[1440px] px-6 pb-20 pt-32 sm:px-10 sm:pb-28 lg:px-16 lg:pb-36 lg:pt-40">
            <div className="grid gap-14 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:gap-20">

              <div>
                <div className="mb-10 flex items-center gap-3">
                  <span className="h-px w-9 bg-[#25845A]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#25845A]">
                    About Ecocee
                  </span>
                </div>

                <h1 className="max-w-[900px] text-[clamp(3.6rem,8.5vw,8rem)] font-semibold leading-[0.94] tracking-[-0.085em]">
                  Engineering
                  <br />
                  <span className="text-[#25845A]">
                    what comes next.
                  </span>
                </h1>
              </div>

              <div className="max-w-[430px] lg:pb-3">
                <p className="text-[17px] leading-[1.9] text-[#626262] sm:text-[19px]">
                  Ecocee is an Indian technology company building
                  software, artificial intelligence systems,
                  developer technology and intelligent hardware.
                </p>

                <p className="mt-5 text-[14px] leading-[1.9] text-[#888]">
                  We bring software engineering and electronics
                  together to turn complex ideas into practical
                  technology.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-5">
                  <Link
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center gap-3 bg-[#171717] px-6 text-[13px] font-semibold text-white transition-colors hover:bg-[#25845A]"
                  >
                    Start a conversation
                    <ArrowUpRight size={16} />
                  </Link>

                  <Link
                    href="/#products"
                    className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#555] transition-colors hover:text-[#25845A]"
                  >
                    Explore our work
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-20 flex flex-col justify-between gap-5 border-t border-[#e8e8e8] pt-6 sm:flex-row sm:items-center">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#999]">
                Independent technology company
              </p>

              <div className="flex items-center gap-2 text-[12px] text-[#777]">
                <MapPin size={14} className="text-[#25845A]" />
                Kerala, India
                <span className="mx-2 text-[#ccc]">/</span>
                Working beyond boundaries
              </div>
            </div>
          </div>
        </section>

        {/* 02 — Company introduction */}
        <section className="border-b border-[#e8e8e8]">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24 lg:px-16 lg:py-32">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25845A]">
                01 / The company
              </p>

              <h2 className="mt-6 max-w-[360px] text-[36px] font-semibold leading-[1.12] tracking-[-0.055em] sm:text-[46px]">
                Technology should solve something real.
              </h2>
            </div>

            <div className="max-w-[760px]">
              <p className="text-[19px] leading-[1.8] tracking-[-0.02em] text-[#333] sm:text-[23px]">
                Powerful technology is only useful when it works
                outside a demonstration. It must connect with
                existing systems, operate under real constraints
                and deliver measurable value.
              </p>

              <div className="mt-9 grid gap-8 border-t border-[#e8e8e8] pt-8 sm:grid-cols-2 sm:gap-12">
                <div>
                  <p className="text-[14px] leading-[1.9] text-[#777]">
                    We work across artificial intelligence,
                    software architecture, embedded systems
                    and computing infrastructure.
                  </p>
                </div>

                <div>
                  <p className="text-[14px] leading-[1.9] text-[#777]">
                    Our approach is to understand the complete
                    problem, engineer the right solution and
                    continue improving it as requirements evolve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 — Engineering capabilities */}
        <section
          id="capabilities"
          className="scroll-mt-20 border-b border-[#e8e8e8]"
        >
          <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-32">
            <div className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25845A]">
                  02 / Engineering capabilities
                </p>
                <h2 className="mt-6 max-w-[650px] text-[42px] font-semibold leading-[1.05] tracking-[-0.065em] sm:text-[58px]">
                  Different disciplines.
                  <br />
                  One engineering approach.
                </h2>
              </div>

              <p className="max-w-[350px] text-[14px] leading-[1.9] text-[#888]">
                Our work spans the software layer, computing
                infrastructure and physical devices.
              </p>
            </div>

            <div className="border-t border-[#dedede]">
              {capabilities.map((item) => (
                <article
                  key={item.number}
                  className="grid gap-5 border-b border-[#e8e8e8] py-9 sm:grid-cols-[65px_0.8fr_1.2fr] sm:gap-8 sm:py-11"
                >
                  <span className="font-mono text-[12px] text-[#25845A]">
                    {item.number}
                  </span>

                  <h3 className="text-[23px] font-semibold tracking-[-0.8px] sm:text-[25px]">
                    {item.name}
                  </h3>

                  <div>
                    <p className="max-w-[570px] text-[14px] leading-[1.9] text-[#777] sm:text-[15px]">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#999]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 04 — Engineering approach */}
        <section className="border-b border-[#e8e8e8] bg-[#f8f9f7]">
          <div className="mx-auto grid max-w-[1440px] gap-14 px-6 py-20 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-16 lg:py-32">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25845A]">
                03 / How we work
              </p>

              <h2 className="mt-6 max-w-[450px] text-[42px] font-semibold leading-[1.06] tracking-[-0.065em] sm:text-[56px]">
                Engineering is a way of thinking.
              </h2>

              <p className="mt-7 max-w-[400px] text-[14px] leading-[1.9] text-[#777]">
                We value clear reasoning, practical decisions
                and systems that continue to work after
                they are delivered.
              </p>
            </div>

            <div className="border-t border-[#dedede]">
              {principles.map((item) => (
                <article
                  key={item.number}
                  className="grid grid-cols-[42px_1fr] gap-5 border-b border-[#dedede] py-7 sm:grid-cols-[55px_1fr] sm:gap-7"
                >
                  <span className="pt-1 font-mono text-[12px] text-[#25845A]">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="text-[18px] font-semibold tracking-[-0.4px]">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-[570px] text-[14px] leading-[1.9] text-[#777]">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 05 — Product engineering */}
        <section className="border-b border-[#e8e8e8]">
          <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25845A]">
                  04 / Product engineering
                </p>

                <h2 className="mt-6 text-[42px] font-semibold leading-[1.06] tracking-[-0.065em] sm:text-[56px]">
                  We build beyond client projects.
                </h2>

                <p className="mt-7 max-w-[420px] text-[14px] leading-[1.9] text-[#777]">
                  Alongside engineering solutions for businesses,
                  we explore and develop our own technology
                  products, tools and platforms.
                </p>

                <Link
                  href="/#products"
                  className="mt-8 inline-flex items-center gap-2 text-[13px] font-semibold text-[#25845A] hover:underline"
                >
                  Discover our products
                  <ArrowUpRight size={15} />
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-0 border-t border-[#dedede] sm:grid-cols-2">
                <article className="border-b border-[#e8e8e8] py-8 sm:border-r sm:pr-8">
                  <p className="font-mono text-[11px] text-[#25845A]">
                    PRODUCT / 01
                  </p>
                  <h3 className="mt-5 text-[28px] font-semibold tracking-[-1px]">
                    Mero
                  </h3>
                  <p className="mt-3 text-[13px] leading-[1.9] text-[#777]">
                    Edge computing hardware for applications
                    that bring computation closer to devices
                    and operations.
                  </p>
                </article>

                <article className="border-b border-[#e8e8e8] py-8 sm:pl-8">
                  <p className="font-mono text-[11px] text-[#25845A]">
                    PRODUCT / 02
                  </p>
                  <h3 className="mt-5 text-[28px] font-semibold tracking-[-1px]">
                    Dotpaper
                  </h3>
                  <p className="mt-3 text-[13px] leading-[1.9] text-[#777]">
                    A business applications platform for
                    operational workflows and internal tools.
                  </p>
                </article>

                <article className="border-b border-[#e8e8e8] py-8 sm:border-r sm:pr-8">
                  <p className="font-mono text-[11px] text-[#25845A]">
                    TECHNOLOGY / 03
                  </p>
                  <h3 className="mt-5 text-[28px] font-semibold tracking-[-1px]">
                    Kode
                  </h3>
                  <p className="mt-3 text-[13px] leading-[1.9] text-[#777]">
                    An independent programming-language
                    project exploring developer technology
                    and systems programming.
                  </p>
                </article>

                <article className="border-b border-[#e8e8e8] py-8 sm:pl-8">
                  <p className="font-mono text-[11px] text-[#25845A]">
                    TECHNOLOGY / 04
                  </p>
                  <h3 className="mt-5 text-[28px] font-semibold tracking-[-1px]">
                    TIVA
                  </h3>
                  <p className="mt-3 text-[13px] leading-[1.9] text-[#777]">
                    A developer-agent initiative focused on
                    terminal-based development workflows.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* 06 — Ecocee Labs */}
        <section
          id="labs"
          className="border-b border-[#e8e8e8]"
        >
          <EcoceeLabsSection />
        </section>

        {/* 07 — Journey */}
        <section className="border-b border-[#e8e8e8]">
          <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25845A]">
                  05 / Our journey
                </p>

                <h2 className="mt-6 text-[42px] font-semibold leading-[1.06] tracking-[-0.065em] sm:text-[56px]">
                  Still building.
                  <br />
                  Still learning.
                </h2>

                <p className="mt-7 max-w-[380px] text-[14px] leading-[1.9] text-[#777]">
                  From early engineering experiments to
                  building software and intelligent systems,
                  our journey continues through practical work.
                </p>
              </div>

              <div className="border-t border-[#dedede]">
                {milestones.map((item, index) => (
                  <article
                    key={item.year}
                    className="grid grid-cols-[90px_1fr] gap-5 border-b border-[#e8e8e8] py-7 sm:grid-cols-[115px_1fr] sm:gap-8"
                  >
                    <span className="font-mono text-[12px] text-[#25845A]">
                      {item.year}
                    </span>

                    <div>
                      <h3 className="text-[18px] font-semibold tracking-[-0.4px]">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-[540px] text-[14px] leading-[1.9] text-[#777]">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 08 — People */}
        <section
          id="team"
          className="border-b border-[#e8e8e8]"
        >
          <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-32">
            <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25845A]">
                  06 / The people
                </p>
                <h2 className="mt-6 text-[42px] font-semibold leading-[1.06] tracking-[-0.065em] sm:text-[56px]">
                  People behind the engineering.
                </h2>
              </div>

              <p className="max-w-[460px] self-end text-[14px] leading-[1.9] text-[#777]">
                A team bringing together engineering,
                technology and different perspectives
                to build practical solutions.
              </p>
            </div>

            <div className="border-t border-[#dedede]">
              {teamData.slice(0, 3).map((member, index) => (
                <article
                  key={member.id}
                  className="grid gap-6 border-b border-[#e8e8e8] py-8 sm:grid-cols-[70px_1fr_auto] sm:items-center sm:gap-8"
                >
                  <div className="flex h-[58px] w-[58px] items-center justify-center border border-[#e8e8e8] bg-[#f8f9f7] text-[25px]">
                    <span aria-hidden>{member.avatar}</span>
                  </div>

                  <div>
                    <h3 className="text-[20px] font-semibold tracking-[-0.5px]">
                      {member.name}
                    </h3>

                    <p className="mt-1 text-[13px] font-medium text-[#25845A]">
                      {member.role}
                    </p>

                    <p className="mt-4 max-w-[600px] text-[13px] leading-[1.9] text-[#777]">
                      {member.bio}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                      {member.skills.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] font-medium uppercase tracking-[0.09em] text-[#999]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`LinkedIn profile of ${member.name}`}
                        className="flex h-9 w-9 items-center justify-center border border-[#e8e8e8] text-[#777] transition-colors hover:border-[#25845A] hover:text-[#25845A]"
                      >
                        <Linkedin size={16} />
                      </a>
                    )}

                    {member.email && member.email !== "#" && (
                      <a
                        href={`mailto:${member.email}`}
                        aria-label={`Email ${member.name}`}
                        className="flex h-9 w-9 items-center justify-center border border-[#e8e8e8] text-[#777] transition-colors hover:border-[#25845A] hover:text-[#25845A]"
                      >
                        <Mail size={16} />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 09 — Contact */}
        <section className="bg-[#f8f9f7]">
          <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
            <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25845A]">
                  Work with Ecocee
                </p>

                <h2 className="mt-7 max-w-[850px] text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.075em]">
                  Have something
                  <br />
                  worth building?
                </h2>

                <p className="mt-8 max-w-[540px] text-[15px] leading-[1.9] text-[#777]">
                  Tell us about the challenge, the idea or the
                  system you want to build. Let's explore the
                  engineering behind it.
                </p>
              </div>

              <div className="lg:justify-self-end">
                <Link
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center gap-4 bg-[#171717] px-7 text-[14px] font-semibold text-white transition-colors hover:bg-[#25845A]"
                >
                  Talk to our team
                  <ArrowUpRight size={17} />
                </Link>

                <p className="mt-5 text-[12px] text-[#999]">
                  <a
                    href="mailto:info@ecocee.in"
                    className="transition-colors hover:text-[#25845A]"
                  >
                    info@ecocee.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
