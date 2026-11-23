// Draft: review by a lawyer

import type { Metadata } from "next";
import Link from "next/link";
import { FooterSection } from "@/components/layout/sections/footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Ecocee",
  description:
    "Privacy policy for Ecocee website visitors, detailing data collection under India's Digital Personal Data Protection Act, 2023.",
  alternates: {
    canonical: "https://ecocee.in/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <main className="min-h-screen bg-white text-[#171717] pt-28 pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-black/60" />
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-black/60">
              Legal & Privacy
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Privacy Policy
          </h1>

          <p className="text-sm text-black/50 mb-12">
            Effective date: November 24, 2026 · Ecocee Technologies, Ernakulam, Kerala, India
          </p>

          <div className="prose prose-neutral max-w-none space-y-8 text-black/80 leading-relaxed text-base sm:text-lg">
            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">1. Overview</h2>
              <p>
                Ecocee Technologies (&ldquo;Ecocee&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) operates{" "}
                <Link href="/" className="underline underline-offset-4">ecocee.in</Link> and{" "}
                <a href="https://kode.ecocee.in" className="underline underline-offset-4">kode.ecocee.in</a>.
                This Privacy Policy explains how we collect, use, and handle information when you visit our website, in accordance with applicable Indian laws, including the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">2. What Data We Collect and Why</h2>
              <p>We only collect personal information that you intentionally provide to us, along with basic, pseudonymous usage analytics:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong>Website Analytics:</strong> We use Google Analytics 4 (GA4, Measurement ID <code className="text-sm bg-black/5 px-1.5 py-0.5 rounded">G-MYLZ8LF7ZM</code>) to measure aggregated website metrics such as page views, visitor country, device type, and key interaction events (such as copying installation commands or clicking external links). Analytics storage requires visitor consent via our consent notice.
                </li>
                <li>
                  <strong>Project Inquiries (Google Form):</strong> When you click &ldquo;Start a project&rdquo;, you are directed to a form hosted on Google Forms (Google LLC). The information you submit (name, email, company, and project scope) is collected solely to evaluate and respond to your business inquiry.
                </li>
                <li>
                  <strong>Email Inquiries:</strong> When you contact us via <a href="mailto:info@ecocee.in" className="underline underline-offset-4">info@ecocee.in</a>, we receive your email address, name, and message content to reply to your inquiry.
                </li>
                <li>
                  <strong>Product Waitlists (Mero Early Access):</strong> When you register for Mero early access, your email is received via an email dispatch to notify you when hardware access becomes available.
                </li>
                <li>
                  <strong>Fonts & Static Assets:</strong> Web typography used on this site is downloaded and self-hosted upon build. We do not transmit your IP address to third-party font networks during routine page visits.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">3. Third-Party Processors</h2>
              <p>
                We do not sell, rent, or trade your personal information. We utilize the following third-party infrastructure providers to support our website:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong>Google LLC:</strong> Provides Google Analytics 4 and Google Forms. Google processes technical telemetry and submitted form data under its standard enterprise privacy frameworks.
                </li>
                <li>
                  <strong>Hosting & CDN (Vercel):</strong> Serves static files and routes domain traffic.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">4. Data Retention</h2>
              <p>
                We retain personal correspondence and inquiry records only for as long as needed to fulfill the business communication purpose or satisfy legal accounting requirements [Retention schedule: CONFIRM WITH OWNER]. Unsolicited job applications are retained for evaluation and deleted upon request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">5. Your Rights Under the DPDP Act, 2023</h2>
              <p>
                As a data principal under the Digital Personal Data Protection Act, 2023, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Request access to a summary of personal data processed about you.</li>
                <li>Request correction, completion, or deletion of outdated or inaccurate data.</li>
                <li>Withdraw consent at any time for data processed on the basis of consent. Withdrawal does not affect previous lawful processing.</li>
                <li>Seek grievance redressal regarding data handling practices.</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, email us at <a href="mailto:info@ecocee.in" className="underline underline-offset-4">info@ecocee.in</a> with your request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">6. Cookies and Consent</h2>
              <p>
                We do not use marketing or behavioral profiling cookies. Analytical cookies used by Google Analytics are disabled by default until you interact with our consent banner. You may choose to accept or decline analytics tracking at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">7. Grievance Redressal and Contact</h2>
              <p>
                For questions, concerns, or grievance requests concerning this Privacy Policy, contact:
              </p>
              <div className="mt-3 p-4 bg-black/[0.03] rounded-lg border border-black/10 text-sm">
                <p><strong>Ecocee Technologies</strong></p>
                <p>Location: Ernakulam, Kerala, India</p>
                <p>Email: <a href="mailto:info@ecocee.in" className="underline underline-offset-4">info@ecocee.in</a></p>
                <p>Grievance Officer: [CONFIRM WITH OWNER]</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
}

