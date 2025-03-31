"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
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
        <h1 className="text-3xl font-semibold mb-4 text-center">Privacy Policy 🔒</h1>
        <p className="text-gray-600 text-center mb-6">
          This Privacy Policy describes how Ecocee Technologies collects, uses, and protects your data.
        </p>

        {/* Scrollable Content */}
        <div className="border border-gray-200 rounded-lg p-4 h-72 overflow-y-auto bg-gray-50">
          <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <p className="text-gray-700 text-sm mb-4">
            We collect personal data such as name, email, and usage analytics when you use our services.
          </p>

          <h2 className="text-xl font-semibold mb-2">2. How We Use Your Data</h2>
          <p className="text-gray-700 text-sm mb-4">
            Your data is used to improve services, enhance security, and comply with legal requirements.
          </p>

          <h2 className="text-xl font-semibold mb-2">3. Data Protection</h2>
          <p className="text-gray-700 text-sm mb-4">
            We follow strict security measures to protect your data from unauthorized access or breaches.
          </p>

          <h2 className="text-xl font-semibold mb-2">4. Your Rights</h2>
          <p className="text-gray-700 text-sm mb-4">
            You can request data access, modification, or deletion under applicable Indian laws.
          </p>

          <h2 className="text-xl font-semibold mb-2">5. Third-Party Services</h2>
          <p className="text-gray-700 text-sm mb-4">
            We may share data with third-party services for analytics and security, ensuring compliance.
          </p>

          <h2 className="text-xl font-semibold mb-2">6. Governing Law</h2>
          <p className="text-gray-700 text-sm mb-4">
            This policy follows Indian IT laws and is subject to legal jurisdiction in [Your State, India].
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

export default PrivacyPolicy;
