
import type { Metadata } from "next";
import Link from "next/link";
import { privacyPolicySections } from "@/data/privacyandpolicy.data";

export const metadata: Metadata = {
  title: "Privacy Policy – Ecocee",
  description:
    "Learn how Ecocee collects, uses, stores, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-[#171717]">
      {/* Header */}
      <header className="border-b border-[#e8e8e8]">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-16">
          <Link
            href="/"
            aria-label="Ecocee home"
            className="text-[19px] font-bold tracking-[-0.8px]"
          >
            ecocee<span className="text-[#25845A]">.</span>
          </Link>

          <Link
            href="/"
            className="text-[13px] font-medium text-[#777] transition-colors hover:text-[#25845A]"
          >
            Back to home
          </Link>
        </div>
      </header>

      {/* Page heading */}
      <section className="border-b border-[#e8e8e8]">
        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-[#25845A]" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#25845A]">
              Legal & Privacy
            </span>
          </div>

          <h1 className="text-[clamp(3.25rem,7vw,6rem)] font-semibold leading-[1] tracking-[-0.075em]">
            Privacy Policy
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-[13px] text-[#777]">
            <p>
              Effective date:{" "}
              <span className="font-medium text-[#333]">
                August 5, 2025
              </span>
            </p>
            <span className="hidden h-1 w-1 rounded-full bg-[#bbb] sm:block" />
            <p>Ecocee · India</p>
          </div>

          <p className="mt-8 max-w-[620px] text-[16px] leading-[1.85] text-[#666] sm:text-[18px]">
            Your privacy matters to us. This policy explains how we
            collect, use, store and protect information when you interact
            with our services.
          </p>
        </div>
      </section>

      {/* Policy content */}
      <section className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[240px_minmax(0,760px)] lg:gap-24">
          {/* Table of contents */}
          <aside className="h-fit lg:sticky lg:top-10">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#999]">
              On this page
            </p>

            <nav aria-label="Privacy policy sections">
              <ol className="space-y-4">
                {privacyPolicySections.map((section, index) => (
                  <li key={section.title}>
                    <a
                      href={`#policy-section-${index + 1}`}
                      className="group flex items-start gap-3 text-[13px] leading-5 text-[#777] transition-colors hover:text-[#25845A]"
                    >
                      <span className="font-mono text-[11px] text-[#aaa] transition-colors group-hover:text-[#25845A]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{section.title.replace(/^\d+\.\s*/, "")}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mt-10 border-t border-[#e8e8e8] pt-6">
              <p className="text-[12px] leading-6 text-[#888]">
                Questions about your data?
              </p>
              <a
                href="mailto:info@ecocee.in"
                className="mt-1 inline-block text-[13px] font-semibold text-[#25845A] hover:underline"
              >
                Contact Ecocee
              </a>
            </div>
          </aside>

          {/* Main policy */}
          <div className="min-w-0">
            <div className="mb-12 border-b border-[#e8e8e8] pb-8">
              <p className="text-[14px] leading-[1.9] text-[#666]">
                Please read this Privacy Policy carefully to understand
                how your information is handled. By using our services,
                you acknowledge the practices described in this policy.
              </p>
            </div>

            <div>
              {privacyPolicySections.map((section, index) => (
                <article
                  key={section.title}
                  id={`policy-section-${index + 1}`}
                  className="scroll-mt-12 border-b border-[#e8e8e8] py-9 first:pt-0 last:border-b-0"
                >
                  <div className="mb-5 flex items-baseline gap-4">
                    <span className="font-mono text-[12px] text-[#25845A]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h2 className="text-[21px] font-semibold tracking-[-0.6px] text-[#202020] sm:text-[23px]">
                      {section.title.replace(/^\d+\.\s*/, "")}
                    </h2>
                  </div>

                  <div className="pl-8 text-[14px] leading-[2] text-[#666] sm:text-[15px]">
                    {section.content
                      .trim()
                      .split("\n")
                      .map((line, lineIndex) => {
                        const content = line.trim();

                        if (!content) return null;

                        if (content.startsWith("- ")) {
                          return (
                            <div
                              key={lineIndex}
                              className="flex gap-3 py-1"
                            >
                              <span className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-[#25845A]" />
                              <span>{content.slice(2)}</span>
                            </div>
                          );
                        }

                        return (
                          <p key={lineIndex} className="mb-3 last:mb-0">
                            {content}
                          </p>
                        );
                      })}
                  </div>
                </article>
              ))}
            </div>

            {/* Contact information */}
            <div className="mt-10 border-t border-[#e8e8e8] pt-8">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#999]">
                Privacy enquiries
              </p>

              <h2 className="mt-4 text-[25px] font-semibold tracking-[-1px]">
                Need clarification?
              </h2>

              <p className="mt-3 max-w-[500px] text-[14px] leading-7 text-[#777]">
                If you have questions about this policy or how your
                personal information is handled, contact our team.
              </p>

              <a
                href="mailto:info@ecocee.in?subject=Privacy%20Policy%20Enquiry"
                className="mt-6 inline-flex items-center border-b border-[#25845A] pb-1 text-[14px] font-semibold text-[#25845A] hover:border-[#171717] hover:text-[#171717]"
              >
                info@ecocee.in
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e8e8e8]">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-4 px-6 py-7 text-[12px] text-[#888] sm:flex-row sm:items-center sm:px-10 lg:px-16">
          <p>© 2026 Ecocee. All rights reserved.</p>
          <Link
            href="/"
            className="transition-colors hover:text-[#25845A]"
          >
            ecocee.in
          </Link>
        </div>
      </footer>
    </main>
  );
}
