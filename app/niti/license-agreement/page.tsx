"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const LicenseAgreement = () => {
  const [accepted, setAccepted] = useState(false);
  const router = useRouter();

  const theme = {
    primaryButton: "bg-emerald-600 hover:bg-emerald-700",
    secondaryButton: "bg-gray-200 hover:bg-gray-300",
    textAccent: "text-emerald-600",
    lightBg: "bg-emerald-50",
  };

  return (
    <section className={`min-h-screen py-16 px-6 ${theme.lightBg} flex items-center justify-center`}>
      <motion.div
        className="max-w-4xl bg-white p-8 rounded-lg shadow-lg flex flex-col"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-semibold mb-4 text-center">Niti License Agreement 📜</h1>
        <p className="text-gray-600 text-center mb-6">
  This End-User License Agreement (&quot;Agreement&quot;) is a legal contract between you (&quot;User&quot;) and Ecocee Technologies
  (&quot;Company&quot;) for the use of the Niti software and services.
</p>

        {/* Scrollable Agreement */}
        <div className="border border-gray-200 rounded-lg p-4 h-72 overflow-y-auto bg-gray-50">
          <h2 className="text-xl font-semibold mb-2">1. Ownership & Rights</h2>
          <p className="text-gray-700 text-sm mb-4">
            The Niti software, including its design, code, and branding, is exclusively owned by Ecocee Technologies. 
            All intellectual property rights are protected under Indian Copyright Act, 1957, and the Information Technology Act, 2000.
          </p>

          <h2 className="text-xl font-semibold mb-2">2. Grant of License</h2>
          <p className="text-gray-700 text-sm mb-4">
            Ecocee grants the User a non-exclusive, non-transferable, revocable license to use the Niti software 
            for personal or business purposes, subject to the terms of this Agreement.
          </p>

          <h2 className="text-xl font-semibold mb-2">3. Restrictions</h2>
          <p className="text-gray-700 text-sm mb-4">
            The User may not:  
            - Modify, reverse-engineer, or decompile the software.  
            - Sell, sublicense, or distribute any part of the software.  
            - Use the software for any illegal purposes under Indian laws.  
          </p>

          <h2 className="text-xl font-semibold mb-2">4. Data Collection & Privacy</h2>
          <p className="text-gray-700 text-sm mb-4">
            Ecocee Technologies collects and processes personal data in accordance with the Indian IT Act, 2000, and 
            the Personal Data Protection Bill. By using the software, you consent to data collection for operational 
            and security purposes.
          </p>

          <h2 className="text-xl font-semibold mb-2">5. Termination</h2>
          <p className="text-gray-700 text-sm mb-4">
            Ecocee reserves the right to revoke this license at any time if the User is found in violation of the terms. 
            Upon termination, the User must cease all usage of the software and remove any copies.
          </p>

          <h2 className="text-xl font-semibold mb-2">6. Liability & Warranty Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-4">
  The software is provided &quot;AS IS&quot; without any warranties. Ecocee Technologies is not responsible for 
  damages, data loss, or security breaches arising from software usage. 
</p>

          <h2 className="text-xl font-semibold mb-2">7. Governing Law</h2>
          <p className="text-gray-700 text-sm mb-4">
            This Agreement is governed by the laws of India. Any disputes shall be settled in the courts of 
            [Your State, India].
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

export default LicenseAgreement;
