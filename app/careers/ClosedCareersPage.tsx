
import React from "react";
import { ArrowUpRight, Mail } from "lucide-react";

const ClosedCareersPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white text-[#171717]">
      {/* Header */}
      <header className="border-b border-[#e8e8e8]">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-16">
          <a
            href="/"
            aria-label="Ecocee home"
            className="text-[19px] font-bold tracking-[-0.8px]"
          >
            ecocee<span className="text-[#25845A]">.</span>
          </a>

          <div className="flex items-center gap-3 text-[12px] font-medium tracking-[0.12em] text-[#777]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#25845A]" />
            CAREERS
          </div>
        </div>
      </header>

      {/* Main content */}
      <section className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="grid min-h-[680px] grid-cols-1 items-center gap-16 py-24 lg:grid-cols-[1.3fr_0.7fr] lg:gap-24 lg:py-32">
          {/* Main message */}
          <div className="max-w-[760px]">
            <div className="mb-10 flex items-center gap-3">
              <span className="h-px w-8 bg-[#25845A]" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#25845A]">
                Working at Ecocee
              </span>
            </div>

            <h1 className="max-w-[760px] text-[clamp(3.5rem,7.5vw,6.8rem)] font-semibold leading-[0.99] tracking-[-0.075em]">
              Good work
              <br />
              starts with
              <br />
              <span className="text-[#25845A]">good people.</span>
            </h1>

            <p className="mt-10 max-w-[510px] text-[17px] leading-[1.8] text-[#666] sm:text-[19px]">
              We build software, AI systems and technology products
              that solve real problems. We believe the best work comes
              from curious people who care about what they create.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-5">
              <a
                href="mailto:info@ecocee.in?subject=Career%20Enquiry"
                className="inline-flex h-12 items-center gap-3 bg-[#171717] px-6 text-[14px] font-medium text-white transition-colors hover:bg-[#25845A]"
              >
                <Mail size={16} strokeWidth={1.8} />
                Get in touch
                <ArrowUpRight size={15} />
              </a>

              <a
                href="/"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-[#555] transition-colors hover:text-[#25845A]"
              >
                Explore Ecocee
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          {/* Careers status */}
          <aside className="border-t border-[#dedede] pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#25845A]/20" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#25845A]" />
              </span>

              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#25845A]">
                Current status
              </span>
            </div>

            <h2 className="mt-8 text-[32px] font-semibold leading-[1.15] tracking-[-1.5px]">
              No open positions
              <br />
              right now.
            </h2>

            <p className="mt-5 max-w-[380px] text-[15px] leading-[1.8] text-[#777]">
              We are not accepting applications for specific roles at
              the moment. When opportunities become available, they
              will be published here.
            </p>

            <div className="my-9 h-px w-full bg-[#e8e8e8]" />

            <h3 className="text-[13px] font-semibold text-[#333]">
              Areas we work in
            </h3>

            <ul className="mt-5 space-y-4 text-[14px] text-[#666]">
              {[
                "Artificial Intelligence & Software",
                "Developer Tools & Infrastructure",
                "Embedded Systems & Electronics",
                "Product Engineering",
              ].map((area) => (
                <li key={area} className="flex items-center gap-3">
                  <span className="h-1 w-1 rounded-full bg-[#25845A]" />
                  {area}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <p className="text-[13px] leading-6 text-[#888]">
                Interested in working with us?
              </p>
              <a
                href="mailto:info@ecocee.in?subject=Career%20Enquiry"
                className="mt-2 inline-flex items-center gap-2 text-[14px] font-semibold text-[#25845A] hover:underline"
              >
                Write to our team
                <ArrowUpRight size={14} />
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e8e8e8]">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-4 px-6 py-7 text-[12px] text-[#888] sm:flex-row sm:items-center sm:px-10 lg:px-16">
<p>© 2026 Ecocee. All rights reserved.</p>
          <a
            href="https://ecocee.in/"
            className="transition-colors hover:text-[#25845A]"
          >
            ecocee.in
          </a>
        </div>
      </footer>
    </main>
  );
};

export default ClosedCareersPage;
