// app/privacy-policy/page.tsx

import { privacyPolicySections } from "@/data/privacyandpolicy.data";

export const metadata = {
  title: 'Privacy Policy – Ecocee',
  description: 'Learn how Ecocee collects, uses, and protects your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-gray-600 mb-10">
        Effective Date: August 5, 2025
      </p>

      {privacyPolicySections.map((section, idx) => (
        <section key={idx} className="mb-8">
          <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
          <p className="text-gray-700 whitespace-pre-line">{section.content}</p>
        </section>
      ))}
    </main>
  );
}
