"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const TermsOfService = () => {
  const [accepted, setAccepted] = useState(false);
  const router = useRouter();

  const theme = {
    primaryButton: "bg-emerald-600 hover:bg-emerald-700",
    lightBg: "bg-emerald-50",
  };

  return (
    <section className={`min-h-screen py-16 px-6 ${theme.lightBg} flex items-center justify-center`}>
      <motion.div
        className="max-w-4xl bg-white p-8 rounded-lg shadow-lg flex flex-col"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-semibold mb-4 text-center">Terms of Service 📜</h1>
        <p className="text-gray-600 text-center mb-6">
          These Terms of Service govern your use of Niti and all related services provided by Ecocee Technologies.
        </p>

        {/* Scrollable Content */}
        <div className="border border-gray-200 rounded-lg p-4 h-72 overflow-y-auto bg-gray-50">
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p className="text-gray-700 text-sm mb-4">
            By using Niti, you agree to comply with these Terms of Service. If you do not agree, do not use our services.
          </p>

          <h2 className="text-xl font-semibold mb-2">2. User Responsibilities</h2>
          <p className="text-gray-700 text-sm mb-4">
            You must not misuse the platform, engage in illegal activities, or violate security measures.
          </p>

          <h2 className="text-xl font-semibold mb-2">3. Intellectual Property</h2>
          <p className="text-gray-700 text-sm mb-4">
            All content, including code and designs, belongs to Ecocee Technologies and is protected under Indian copyright laws.
          </p>

          <h2 className="text-xl font-semibold mb-2">4. Limitation of Liability</h2>
          <p className="text-gray-700 text-sm mb-4">
            Ecocee Technologies is not liable for any direct or indirect damages arising from the use of our services.
          </p>

          <h2 className="text-xl font-semibold mb-2">5. Termination of Service</h2>
          <p className="text-gray-700 text-sm mb-4">
            We reserve the right to suspend or terminate access to Niti if users violate these terms.
          </p>

          <h2 className="text-xl font-semibold mb-2">6. Governing Law</h2>
          <p className="text-gray-700 text-sm mb-4">
            These terms are governed by the laws of India and disputes will be settled in courts within [Your State, India].
          </p>
        </div>

        {/* Accept Button */}
        <div className="mt-6 text-center">
          <button
            className={`px-6 py-3 ${theme.primaryButton} text-white rounded-md transition`}
            onClick={() => {
              setAccepted(true);
              setTimeout(() => router.push("/dashboard"), 1000);
            }}
            disabled={accepted}
          >
            {accepted ? "Accepted ✅" : "Accept & Continue"}
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default TermsOfService;
