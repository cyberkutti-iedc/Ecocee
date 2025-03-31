"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const CookiePolicy = () => {
  const [accepted, setAccepted] = useState(false);

  const theme = {
    primaryButton: "bg-emerald-600 hover:bg-emerald-700",
    textAccent: "text-emerald-600",
    lightBg: "bg-emerald-50",
  };

  return (
    <section className={`min-h-screen py-16 px-6 ${theme.lightBg} flex items-center justify-center`}>
      <motion.div
        className="max-w-2xl bg-white p-8 rounded-lg shadow-lg text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-semibold mb-4">Cookie Policy 🍪</h1>
        <p className="text-gray-600 mb-6">
          We use cookies to enhance your experience, analyze traffic, and improve our services. By continuing to browse,
          you agree to our use of cookies.
        </p>

        <h2 className="text-lg font-medium mb-3">How We Use Cookies:</h2>
        <ul className="text-gray-600 text-left mb-6 space-y-2">
          <li>✅ Essential: Required for site functionality.</li>
          <li>📊 Analytics: Helps us improve user experience.</li>
          <li>🎯 Advertising: Shows relevant ads.</li>
        </ul>

        <button
          onClick={() => setAccepted(true)}
          className={`px-6 py-3 ${theme.primaryButton} text-white rounded-md transition`}
        >
          {accepted ? "Cookies Accepted ✔" : "Accept Cookies"}
        </button>

        <p className="text-sm text-gray-500 mt-4">
          Want to change settings? <a href="/niti/cookies-settings" className={theme.textAccent}>Manage Cookies</a>
        </p>
      </motion.div>
    </section>
  );
};

export default CookiePolicy;
