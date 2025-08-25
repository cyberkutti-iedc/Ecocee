"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FooterSection } from "@/components/layout/sections/footer";
import { Label } from "@radix-ui/react-label";
import { toast } from "react-hot-toast";
import Seo from "@/components/seo/Seo";

interface ValidationResult {
  valid: boolean;
  full_name?: string;
  batch?: string;
  issued_on?: string;
  unique_number?: string;
  specification?: string;
  error?: string;
}

export default function InternshipCertificatePage() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ValidationResult | null>(null);
  const [error, setError] = useState<string | null>(null);


 
  const validateCertificate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);

    if (!code.trim()) {
      setError("Certificate number is required.");
      setLoading(false);
      return;
    }

    try {
      // Use GET with query param for unique_number
      const res = await fetch(`/api/internship-certificate?unique_number=${encodeURIComponent(code.trim())}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (res.status === 404) {
        setResult(null);
        setError("Certificate not found for this unique number.");
        toast.error("Certificate not found for this unique number.");
        setLoading(false);
        return;
      }

      const data = await res.json();

      // If the API returns the certificate object, show it
      if (
        data &&
        (data.unique_number || data.full_name || data.batch || data.issued_on || data.specification)
      ) {
        setResult({
          valid: true,
          full_name: data.full_name ?? "",
          batch: data.batch ?? "",
          issued_on: data.issued_on ?? "",
          unique_number: data.unique_number ?? "",
          specification: data.specification ?? "",
        });
        setError(null);
      } else if (data && data.valid === false) {
        setResult(null);
        setError(data.error || "Certificate not found for this unique number.");
        toast.error(data.error || "Certificate not found for this unique number.");
      } else {
        setResult(null);
        setError("Certificate not found for this unique number.");
        toast.error("Certificate not found for this unique number.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setResult(null);
      toast.error("Something went wrong. Please try again.");
    }
    setLoading(false);
  };


  return (
    <>
    <Seo
      title="Internship Certificate Validation – Ecocee"
      description="Validate your Ecocee internship certificate by entering the unique number."
      canonical="https://ecocee.in/internship-certificate"
      noIndex
    />
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 dark:bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-indigo-200/30 dark:bg-indigo-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-purple-200/30 dark:bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-cyan-200/30 dark:bg-cyan-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="flex flex-col items-center justify-center flex-1 relative z-10 px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="relative mb-6 group">
            {/* Logo Background with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 transform scale-110"></div>
           
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent mb-4 leading-tight">
            Certificate Validation
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
            Verify the authenticity of your internship certificate instantly
          </p>
        </div>

        {/* Main Card */}
        <div className="w-full max-w-lg">
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border border-white/20 dark:border-slate-700/30 relative group hover:shadow-3xl transition-all duration-500">
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Secure Verification
                </div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                  Enter Certificate Unique Number
                </h2>
                <p className="text-slate-500 dark:text-slate-400">
                  Input your unique certificate number (e.g. ECOCEE-2024-123456)
                </p>
              </div>

              <form onSubmit={validateCertificate} className="space-y-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="w-full pl-12 pr-4 py-4 text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all duration-300 bg-slate-50/50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 backdrop-blur-sm"
                    placeholder="Enter unique certificate number"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                    disabled={loading}
                    autoFocus
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-lg font-semibold rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group"
                  disabled={loading}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Validating...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Validate Certificate
                      </>
                    )}
                  </span>
                </button>
              </form>

              {/* Results Section */}
              {result && (
                <div className="mt-8">
                  {result.valid ? (
                    <div className="border-2 border-green-200 dark:border-green-700 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl p-6 shadow-lg backdrop-blur-sm">
                      <div className="text-center mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4 shadow-lg">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-2">
                          Certificate Verified!
                        </h3>
                        <p className="text-green-600 dark:text-green-400">
                          This certificate is authentic and valid
                        </p>
                      </div>

                      <div className="space-y-4">
                        {[
                          { label: "Full Name", value: result.full_name },
                          { label: "Batch", value: result.batch },
                          { label: "Date of Issue", value: result.issued_on && new Date(result.issued_on).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) },
                          { label: "Unique Number", value: result.unique_number },
                          { label: "Specification", value: result.specification || "Not provided" }
                        ].map((item, index) => (
                          <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl border border-green-200/50 dark:border-green-700/50 backdrop-blur-sm">
                            <span className="font-semibold text-slate-700 dark:text-slate-300 mb-1 sm:mb-0">
                              {item.label}:
                            </span>
                            <span className="text-slate-900 dark:text-slate-100 font-medium">
                              {item.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="border-2 border-red-200 dark:border-red-700 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/30 dark:to-rose-900/30 rounded-2xl p-6 text-center shadow-lg backdrop-blur-sm">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500 rounded-full mb-4 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-red-800 dark:text-red-300 mb-2">
                        Invalid Certificate
                      </h3>
                      <p className="text-red-600 dark:text-red-400">
                        {error || "The certificate code you entered is not valid"}
                      </p>
                      {/* Show details if present */}
                      <div className="mt-4 space-y-2 text-left">
                        {result.full_name && (
                          <div>
                            <span className="font-semibold">Full Name:</span> {result.full_name}
                          </div>
                        )}
                        {result.batch && (
                          <div>
                            <span className="font-semibold">Batch:</span> {result.batch}
                          </div>
                        )}
                        {result.issued_on && (
                          <div>
                            <span className="font-semibold">Date of Issue:</span>{" "}
                            {new Date(result.issued_on).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                          </div>
                        )}
                        {result.unique_number && (
                          <div>
                            <span className="font-semibold">Unique Number:</span> {result.unique_number}
                          </div>
                        )}
                        {result.specification && (
                          <div>
                            <span className="font-semibold">Specification:</span> {result.specification}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Trust Indicators */}
              <div className="mt-12 text-center">
                <div className="inline-flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                    </svg>
                    <span>Secure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Verified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span>Trusted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <FooterSection/>
    </>
  );
}