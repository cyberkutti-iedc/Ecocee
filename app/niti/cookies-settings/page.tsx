"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const CookiesSettings = () => {
  const [settings, setSettings] = useState({
    essential: true, // Always enabled
    analytics: false,
    advertising: false,
  });

  const theme = {
    primaryButton: "bg-emerald-600 hover:bg-emerald-700",
    secondaryButton: "bg-gray-200 hover:bg-gray-300",
    textAccent: "text-emerald-600",
    lightBg: "bg-emerald-50",
  };

  const handleToggle = (key: keyof typeof settings) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  return (
    <section className={`min-h-screen py-16 px-6 ${theme.lightBg} flex items-center justify-center`}>
      <motion.div
        className="max-w-2xl bg-white p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-semibold mb-4 text-center">Manage Cookie Preferences 🍪</h1>
        <p className="text-gray-600 text-center mb-6">
          Control how we use cookies on your device.
        </p>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">✅ Essential Cookies</span>
            <span className="text-gray-500 text-sm">Required for site functionality</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">📊 Analytics Cookies</span>
            <button
              className={`px-4 py-2 text-sm rounded-md transition ${
                settings.analytics ? theme.primaryButton + " text-white" : theme.secondaryButton
              }`}
              onClick={() => handleToggle("analytics")}
            >
              {settings.analytics ? "Enabled" : "Disabled"}
            </button>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">🎯 Advertising Cookies</span>
            <button
              className={`px-4 py-2 text-sm rounded-md transition ${
                settings.advertising ? theme.primaryButton + " text-white" : theme.secondaryButton
              }`}
              onClick={() => handleToggle("advertising")}
            >
              {settings.advertising ? "Enabled" : "Disabled"}
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button className={`px-6 py-3 ${theme.primaryButton} text-white rounded-md transition`}>
            Save Preferences
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default CookiesSettings;
