// Draft: review by a lawyer

import type { Metadata } from "next";
import Link from "next/link";
import { FooterSection } from "@/components/layout/sections/footer";

export const metadata: Metadata = {
  title: "Terms of Use — Ecocee",
  description:
    "Terms and conditions governing the use of the Ecocee website, open source software, and engineering services.",
  alternates: {
    canonical: "https://ecocee.in/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <main className="min-h-screen bg-white text-[#171717] pt-28 pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-black/60" />
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-black/60">
              Legal & Terms
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Terms of Use
          </h1>

          <p className="text-sm text-black/50 mb-12">
            Last updated: November 24, 2026 · Ecocee Technologies, Ernakulam, Kerala, India
          </p>

          <div className="prose prose-neutral max-w-none space-y-8 text-black/80 leading-relaxed text-base sm:text-lg">
            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing or using the websites located at{" "}
                <Link href="/" className="underline underline-offset-4">ecocee.in</Link> and{" "}
                <a href="https://kode.ecocee.in" className="underline underline-offset-4">kode.ecocee.in</a>{" "}
                (collectively, the &ldquo;Site&rdquo;), you agree to comply with and be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use the Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">2. Permitted Use of the Site</h2>
              <p>
                You may browse and interact with the Site solely for lawful personal or business evaluation purposes. You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Attempt to compromise, probe, or circumvent site security or server configurations.</li>
                <li>Transmit malicious code, viruses, or automated scraping requests that degrade service performance.</li>
                <li>Misrepresent your identity or affiliation when contacting Ecocee through web forms or email.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">3. Intellectual Property and Open Source Software</h2>
              <p>
                The visual layout, original copy, documentation, graphics, and trade dress of this Site are owned by Ecocee Technologies.
              </p>
              <p className="mt-3">
                <strong>Kode Open Source License:</strong> Software source code for the Kode programming language repository is published under the Apache-2.0 open source license. While the license permits copying, modifying, and distributing the software code subject to its terms, the names &ldquo;Ecocee&rdquo; and &ldquo;Kode&rdquo; and their associated logos are proprietary trademarks of Ecocee Technologies and are not licensed for use as third-party brand names or commercial trademarks [CONFIRM].
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">4. Disclaimer of Warranties</h2>
              <p>
                The Site, its contents, and any informational materials provided are provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis without warranties of any kind, whether express, statutory, or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not guarantee uninterrupted or error-free operation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">5. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by applicable Indian law, Ecocee Technologies and its directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your access to or inability to access the Site, even if advised of the possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">6. Third-Party Links</h2>
              <p>
                The Site contains outbound links to external third-party platforms (such as GitHub, Google Forms, and LinkedIn). Ecocee does not control, endorse, or accept responsibility for the content, security, or privacy policies of third-party websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">7. Governing Law and Jurisdiction</h2>
              <p>
                These Terms of Use shall be governed by and construed in accordance with the laws of the Republic of India. Any legal action, suit, or proceeding arising out of these Terms shall be instituted exclusively in the competent courts located in Ernakulam, Kerala, India [CONFIRM].
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">8. Contact Information</h2>
              <p>
                For questions regarding these Terms, contact Ecocee Technologies at{" "}
                <a href="mailto:info@ecocee.in" className="underline underline-offset-4">info@ecocee.in</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
}

