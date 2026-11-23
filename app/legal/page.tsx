// Draft: review by a lawyer

import type { Metadata } from "next";
import Link from "next/link";
import { FooterSection } from "@/components/layout/sections/footer";

export const metadata: Metadata = {
  title: "Legal Information — Ecocee",
  description:
    "Company registration details, open source disclosures, and legal disclosures for Ecocee Technologies.",
  alternates: {
    canonical: "https://ecocee.in/legal",
  },
};

export default function LegalPage() {
  return (
    <>
      <main className="min-h-screen bg-white text-[#171717] pt-28 pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-black/60" />
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-black/60">
              Corporate & Legal
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Legal Disclosures
          </h1>

          <p className="text-sm text-black/50 mb-12">
            Ecocee Technologies · Ernakulam, Kerala, India
          </p>

          <div className="prose prose-neutral max-w-none space-y-8 text-black/80 leading-relaxed text-base sm:text-lg">
            <section className="p-6 bg-black/[0.02] border border-black/10 rounded-xl">
              <h2 className="text-xl font-semibold text-black mb-4">Entity Details</h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-black/50 font-medium">Business Name</dt>
                  <dd className="font-semibold text-black mt-1">Ecocee Technologies</dd>
                </div>
                <div>
                  <dt className="text-black/50 font-medium">Enterprise Registration</dt>
                  <dd className="font-semibold text-black mt-1">
                    MSME-registered, Udyam-KL-13-0039296
                  </dd>
                </div>
                <div>
                  <dt className="text-black/50 font-medium">Location</dt>
                  <dd className="font-semibold text-black mt-1">Ernakulam, Kerala, India</dd>
                </div>
                <div>
                  <dt className="text-black/50 font-medium">Official Contact</dt>
                  <dd className="font-semibold text-black mt-1">
                    <a href="mailto:info@ecocee.in" className="underline underline-offset-4">info@ecocee.in</a>
                  </dd>
                </div>
                <div>
                  <dt className="text-black/50 font-medium">Founder &amp; Executive</dt>
                  <dd className="font-semibold text-black mt-1">
                    Sreeraj V Rajesh (<a href="mailto:sreeraj@ecocee.in" className="underline underline-offset-4">sreeraj@ecocee.in</a>)
                  </dd>
                </div>
              </dl>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">Open Source &amp; Trademarks</h2>
              <p>
                Kode is open source software released under the <strong>Apache-2.0 license</strong>. The full license text is published in the{" "}
                <a href="https://github.com/ecocee/Kode/blob/main/LICENSE" className="underline underline-offset-4" target="_blank" rel="noopener noreferrer">
                  Kode repository on GitHub
                </a>.
              </p>
              <p className="mt-3">
                <strong>Trademark notice:</strong> The names &ldquo;Ecocee&rdquo; and &ldquo;Kode&rdquo; and their associated owl and geometric logos are proprietary brand identifiers of Ecocee Technologies. The Apache-2.0 software license does not grant permission to use these trademarks for third-party commercial promotion or brand identity [CONFIRM].
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">Policies &amp; Agreements</h2>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy" className="text-black font-medium underline underline-offset-4 hover:text-black/70">
                    Privacy Policy (DPDP Act 2023 Disclosures) →
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-black font-medium underline underline-offset-4 hover:text-black/70">
                    Terms of Use →
                  </Link>
                </li>
                <li>
                  <a href="/.well-known/security.txt" className="text-black font-medium underline underline-offset-4 hover:text-black/70">
                    Security Policy (.well-known/security.txt) →
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-3">Copyright</h2>
              <p>
                &copy; 2026 Ecocee Technologies. All rights reserved.
              </p>
            </section>
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
}
