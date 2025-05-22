"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { login, getCurrentUser } from "@/lib/appwrite";
import { User, Key, AlertCircle, Loader2, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [customRole, setCustomRole] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Redirect after login
  const redirectPath = searchParams.get("redirect") || "/dashboard";

  useEffect(() => {
    const checkUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        if (currentUser) {
          console.log("✅ Already logged in, redirecting...");
          router.replace(redirectPath);
        }
      } catch (error) {
        console.warn("Auth check failed: Guest session detected", error);
      } finally {
        setIsLoading(false);
      }
    };
  
    checkUser();
  }, [router, redirectPath]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    if (!email || !password || !role) {
      setError("All fields are required");
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await login(email, password);
    
      if (result.success && result.user) {
        router.push(redirectPath);
      } else {
        throw new Error(result.error?.message || "Invalid email or password");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Login error:", error);
        setError(error.message);
      } else {
        console.error("Unexpected login error:", error);
        setError("An unexpected error occurred. Please try again.");
      }
    }
    
  };

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100 text-gray-600">
        <Loader2 className="animate-spin h-12 w-12 text-blue-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/30"
      >
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center">Sign In</h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm text-center mt-1">Access your account</p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border dark:border-gray-700 rounded-md pl-10 bg-transparent dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <User className="absolute left-3 top-3 text-gray-400 dark:text-gray-500" size={20} />
          </div>

          {/* Password Field */}
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border dark:border-gray-700 rounded-md pl-10 bg-transparent dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Key className="absolute left-3 top-3 text-gray-400 dark:text-gray-500" size={20} />
          </div>

          {/* Role Selection */}
          <div className="relative">
            <select
              className="w-full p-3 border dark:border-gray-700 rounded-md pl-10 bg-transparent dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="" disabled>Select your role</option>
              <option value="CEO">CEO</option>
              <option value="CTO">CTO</option>
              <option value="Manager">Manager</option>
              <option value="Intern">Intern</option>
              <option value="Other">Other</option>
            </select>
            <Briefcase className="absolute left-3 top-3 text-gray-400 dark:text-gray-500" size={20} />
          </div>

          {/* Custom Role Input */}
          {role === "Other" && (
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your role"
                className="w-full p-3 border dark:border-gray-700 rounded-md pl-10 bg-transparent dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                value={customRole}
                onChange={(e) => setCustomRole(e.target.value)}
                required
              />
            </div>
          )}

          {/* Error Message */}
          {error && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-3 rounded-md bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 flex items-center">
              <AlertCircle className="h-5 w-5 text-red-500 dark:text-red-400 mr-2" />
              <span className="text-red-800 dark:text-red-200 text-sm">{error}</span>
            </motion.div>
          )}

          {/* Submit Button */}
          <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 dark:bg-blue-500 text-white p-3 rounded-md font-medium hover:bg-blue-700 dark:hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed">
            {isSubmitting ? "Signing in..." : "Sign In"}
          </button>

          {/* Registration Link */}
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            Don&rsquo;t have an account?{" "}
            <Link href="/register" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
              Register
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
}
