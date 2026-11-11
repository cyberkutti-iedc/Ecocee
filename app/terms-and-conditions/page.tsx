
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions – Ecocee",
  description:
    "Read the terms and conditions governing the use of Ecocee's website, products and services.",
  robots: {
    index: false,
    follow: false,
  },
};

const sections = [
  {
    title: "Company Information",
    content: (
      <>
        <p>
          <strong>Company Name:</strong> Ecocee
        </p>
        <p>
          <strong>Business Model:</strong> Product and service-based
          technology solutions and support
        </p>
        <p>
          <strong>Registered Address:</strong> Kodungallur, Thrissur,
          Kerala, India
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:info@ecocee.in">info@ecocee.in</a>
        </p>
        <p>
          <strong>Website:</strong>{" "}
          <a href="https://ecocee.in">ecocee.in</a>
        </p>
      </>
    ),
  },
  {
    title: "Use of Our Website and Services",
    content: (
      <>
        <p>
          You agree to use our website and services only for lawful
          purposes and in a way that does not infringe the rights of
          others or restrict their use and enjoyment.
        </p>
        <ul>
          <li>
            You must not misuse our services by knowingly introducing
            viruses or harmful code.
          </li>
          <li>
            You must not attempt unauthorized access to our systems,
            accounts or data.
          </li>
          <li>
            You must not use our services to transmit unlawful, harmful,
            defamatory or offensive content.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Account Registration and Security",
    content: (
      <>
        <p>
          Some of our services may require you to create an account.
          You are responsible for maintaining the confidentiality of
          your login credentials and for activities carried out under
          your account.
        </p>
        <p>
          You must notify us promptly if you suspect unauthorized use
          of your account or a security breach.
        </p>
      </>
    ),
  },
  {
    title: "Products and Services",
    content: (
      <>
        <p>
          Ecocee develops and provides technology products and services,
          including software, artificial intelligence solutions,
          embedded systems and related engineering services.
        </p>
        <p>
          Product availability, specifications, features and pricing
          may vary and may be updated from time to time. Specific
          deliverables, timelines, technical specifications and
          commercial terms for commissioned work may be governed by a
          separate proposal, quotation, statement of work or agreement.
        </p>
        <p>
          We make reasonable efforts to keep published information
          accurate, but do not guarantee that all website content is
          complete or current.
        </p>
      </>
    ),
  },
  {
    title: "Orders and Payments",
    content: (
      <>
        <p>
          When placing an order or engaging Ecocee for a service, you
          agree to provide accurate and complete information. Payment
          terms, milestones, taxes and applicable charges will be
          communicated through the relevant quotation, invoice or
          agreement.
        </p>
        <p>
          Ecocee may refuse or cancel an order where there are
          reasonable grounds, including unavailability, pricing errors,
          incomplete information or suspected fraudulent activity.
        </p>
      </>
    ),
  },
  {
    title: "Shipping and Delivery",
    content: (
      <>
        <p>
          Where physical products are supplied, shipping timelines,
          delivery charges and applicable conditions will depend on
          the destination and the product ordered.
        </p>
        <p>
          We make reasonable efforts to meet communicated delivery
          estimates. Delays caused by circumstances outside our
          reasonable control may affect delivery schedules.
        </p>
      </>
    ),
  },
  {
    title: "Refunds, Returns and Replacements",
    content: (
      <>
        <p>
          Refund, return and replacement eligibility depends on the
          nature of the product or service, the applicable commercial
          agreement and applicable law.
        </p>
        <p>
          Unless otherwise agreed in writing or required by applicable
          law, payments for completed services, customized development
          work and work already performed are generally non-refundable.
        </p>
        <p>
          For questions about an order or service, contact{" "}
          <a href="mailto:info@ecocee.in">info@ecocee.in</a>.
        </p>
      </>
    ),
  },
  {
    title: "Intellectual Property",
    content: (
      <>
        <p>
          Unless otherwise agreed in writing, the content, branding,
          trademarks, logos and materials published on the Ecocee
          website are owned by or licensed to Ecocee.
        </p>
        <p>
          You may not copy, reproduce, distribute, modify or commercially
          exploit such materials without prior written permission.
        </p>
        <p>
          Ownership, licensing and usage rights for software,
          commissioned deliverables, source code, designs and other
          project-specific intellectual property will be governed by
          the relevant written agreement.
        </p>
      </>
    ),
  },
  {
    title: "Limitation of Liability",
    content: (
      <p>
        To the fullest extent permitted by applicable law, Ecocee shall
        not be liable for indirect, incidental, special or consequential
        losses arising from the use of, or inability to use, its website
        or services. Nothing in these terms excludes liability that
        cannot legally be excluded under applicable law.
      </p>
    ),
  },
  {
    title: "Indemnification",
    content: (
      <p>
        You agree to be responsible for claims, losses and reasonable
        expenses arising from your unlawful use of the services or
        violation of these Terms, to the extent permitted by applicable
        law.
      </p>
    ),
  },
  {
    title: "Changes to These Terms",
    content: (
      <>
        <p>
          We may revise these Terms and Conditions from time to time.
          Updated versions will be published on this page with a revised
          effective date.
        </p>
        <p>
          Your continued use of the website or services after updated
          terms are published constitutes acceptance of the revised
          terms, where permitted by applicable law.
        </p>
      </>
    ),
  },
  {
    title: "Governing Law and Jurisdiction",
    content: (
      <p>
        These Terms and Conditions are governed by the laws of India.
        Subject to applicable law and any separate written agreement,
        disputes arising in connection with these Terms shall be
        subject to the jurisdiction of the competent courts in Kerala,
        India.
      </p>
    ),
  },
];

export default function TermsAndConditionsPage() {
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
              Legal & Agreements
            </span>
          </div>

          <h1 className="text-[clamp(3.25rem,7vw,6rem)] font-semibold leading-[1] tracking-[-0.075em]">
            Terms & Conditions
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-[13px] text-[#777]">
            <p>
              Effective date:{" "}
              <span className="font-medium text-[#333]">
                June 7, 2025
              </span>
            </p>
            <span className="hidden h-1 w-1 rounded-full bg-[#bbb] sm:block" />
            <p>Ecocee · India</p>
          </div>

          <p className="mt-8 max-w-[650px] text-[16px] leading-[1.85] text-[#666] sm:text-[18px]">
            These terms explain the conditions governing your access
            to and use of the Ecocee website, products and services.
            Please read them carefully before using our services.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[240px_minmax(0,760px)] lg:gap-24">
          {/* Contents */}
          <aside className="h-fit lg:sticky lg:top-10">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#999]">
              On this page
            </p>

            <nav aria-label="Terms and conditions sections">
              <ol className="space-y-4">
                {sections.map((section, index) => (
                  <li key={section.title}>
                    <a
                      href={`#terms-section-${index + 1}`}
                      className="group flex items-start gap-3 text-[13px] leading-5 text-[#777] transition-colors hover:text-[#25845A]"
                    >
                      <span className="font-mono text-[11px] text-[#aaa] group-hover:text-[#25845A]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{section.title}</span>
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#terms-contact"
                    className="group flex items-start gap-3 text-[13px] leading-5 text-[#777] transition-colors hover:text-[#25845A]"
                  >
                    <span className="font-mono text-[11px] text-[#aaa] group-hover:text-[#25845A]">
                      13
                    </span>
                    <span>Contact</span>
                  </a>
                </li>
              </ol>
            </nav>

            <div className="mt-10 border-t border-[#e8e8e8] pt-6">
              <p className="text-[12px] leading-6 text-[#888]">
                Questions about these terms?
              </p>
              <a
                href="mailto:info@ecocee.in"
                className="mt-1 inline-block text-[13px] font-semibold text-[#25845A] hover:underline"
              >
                Contact Ecocee
              </a>
            </div>
          </aside>

          {/* Terms */}
          <div className="min-w-0">
            <div className="mb-12 border-b border-[#e8e8e8] pb-8">
              <p className="text-[14px] leading-[1.9] text-[#666]">
                By accessing or using{" "}
                <a
                  href="https://ecocee.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#25845A] hover:underline"
                >
                  ecocee.in
                </a>{" "}
                or engaging with our products and services, you agree
                to these Terms and Conditions. If you do not agree,
                please discontinue use of the relevant services.
              </p>
            </div>

            {sections.map((section, index) => (
              <article
                key={section.title}
                id={`terms-section-${index + 1}`}
                className="scroll-mt-12 border-b border-[#e8e8e8] py-9 first:pt-0"
              >
                <div className="mb-5 flex items-baseline gap-4">
                  <span className="font-mono text-[12px] text-[#25845A]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h2 className="text-[21px] font-semibold tracking-[-0.6px] text-[#202020] sm:text-[23px]">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-4 pl-8 text-[14px] leading-[2] text-[#666] sm:text-[15px] [&_a]:font-medium [&_a]:text-[#25845A] [&_a]:hover:underline [&_strong]:font-semibold [&_strong]:text-[#333] [&_ul]:space-y-3 [&_ul]:pl-0 [&_ul]:list-none [&_li]:flex [&_li]:gap-3 [&_li]:before:mt-[11px] [&_li]:before:h-1 [&_li]:before:w-1 [&_li]:before:shrink-0 [&_li]:before:rounded-full [&_li]:before:bg-[#25845A] [&_p]:m-0">
                  {section.content}
                </div>
              </article>
            ))}

            {/* Contact */}
            <section
              id="terms-contact"
              className="scroll-mt-12 border-t border-[#e8e8e8] pt-10"
            >
              <div className="mb-5 flex items-baseline gap-4">
                <span className="font-mono text-[12px] text-[#25845A]">
                  13
                </span>
                <h2 className="text-[21px] font-semibold tracking-[-0.6px] text-[#202020] sm:text-[23px]">
                  Contact
                </h2>
              </div>

              <div className="space-y-3 pl-8 text-[14px] leading-[2] text-[#666] sm:text-[15px]">
                <p>
                  For questions regarding these Terms and Conditions,
                  please contact us:
                </p>
                <p>
                  <strong className="text-[#333]">Email:</strong>{" "}
                  <a
                    href="mailto:info@ecocee.in"
                    className="font-medium text-[#25845A] hover:underline"
                  >
                    info@ecocee.in
                  </a>
                </p>
                <p>
                  <strong className="text-[#333]">Address:</strong>{" "}
                  Kodungallur, Thrissur, Kerala, India
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e8e8e8]">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-4 px-6 py-7 text-[12px] text-[#888] sm:flex-row sm:items-center sm:px-10 lg:px-16">
          <p>© 2026 Ecocee. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-[#25845A]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="transition-colors hover:text-[#25845A]"
            >
              ecocee.in
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
