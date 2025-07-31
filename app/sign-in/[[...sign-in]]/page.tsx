'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SignIn } from '@clerk/nextjs'; 


import { 
   
  Shield, 
  Zap, 
  CheckCircle, 
  Globe,
  Brain,
  Cpu,
  Star,
} from 'lucide-react';
import Image from 'next/image';

const LoginPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "AI-Powered Solutions",
      description: "Leverage cutting-edge AI for smarter, faster development."
    },
    {
      icon: <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Embedded Systems",
      description: "Design and deploy robust hardware solutions with ease."
    },
    {
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "IoT Integration",
      description: "Seamlessly connect and manage your devices globally."
    },
    {
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Custom Development",
      description: "Tailored software solutions built to your exact specifications."
    }
  ];

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3500); // Slightly longer interval for smoother transitions
    return () => clearInterval(interval);
  }, [features.length]); 

  

  // Framer Motion variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15 
      }
    }
  };

  // Framer Motion variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Framer Motion variants for subtle background elements (simplified for cleaner look)
  const subtleFloatingVariants = {
    animate: {
      y: [-5, 5, -5], 
      x: [-5, 5, -5],
      rotate: [0, 1, -1, 0], 
      transition: {
        duration: 8,
        repeat: Infinity, 
        ease: "easeInOut" 
      }
    }
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center 
                 bg-gray-50 dark:bg-gray-900 
                 p-4 sm:p-6 md:p-8 mt-16 transition-colors duration-500 relative overflow-hidden font-inter text-gray-900 dark:text-gray-100" // Added mt-16 for top margin
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
     

      {/* Subtle Animated Background Elements (less prominent) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-10">
        <motion.div
          variants={subtleFloatingVariants}
          animate="animate"
          className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" 
        />
        <motion.div
          variants={subtleFloatingVariants}
          animate="animate"
          style={{ animationDelay: '3s' }}
          className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-green-500/10 rounded-full blur-3xl" 
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center 
                 gap-6 sm:gap-10 lg:gap-16 max-w-7xl w-full relative z-10"> 
        {/* Left Side - Branding & Features */}
        <motion.div
          variants={itemVariants}
          className="flex-1 text-center lg:text-left space-y-8 w-full max-w-lg lg:max-w-none"
        >
          {/* Logo & Brand */}
          <div className="space-y-3 sm:space-y-5">
            <motion.div
              className="inline-flex items-center gap-3 sm:gap-4 mb-3 sm:mb-5"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl flex items-center justify-center shadow-lg"> 
                  
                  {/* <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-white" /> */}

   <Image
        src="/login-logo.png"
        alt="Ecocee logo"
        width={100} // or use "auto"
        height={100} // or use "auto"
        className="object-contain"
        priority
      />

                </div>
                <motion.div
                  className="absolute -top-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-green-500 rounded-full flex items-center justify-center" 
                  animate={{ scale: [1, 1.2, 1] }} 
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full" />
                </motion.div>
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-green-600 to-indigo-600 dark:from-blue-400 dark:via-green-400 dark:to-indigo-400 bg-clip-text text-transparent"> 
                  Ecocee
                </h1>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium"> 
                  Innovation at Scale
                </p>
              </div>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 dark:text-gray-100 leading-tight px-4 sm:px-0" 
            >
              Your Gateway to Advanced
              <span className="block bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-400 dark:to-green-400 bg-clip-text text-transparent">
                Tech Solutions
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-md mx-auto lg:mx-0 px-4 sm:px-0" 
            >
              Empowering developers and businesses with robust, scalable, and intelligent platforms.
            </motion.p>
          </div>

          {/* Rotating Features */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-7 border border-gray-200 dark:border-gray-700 shadow-xl mx-4 sm:mx-0" 
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeature}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 sm:gap-5"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg sm:rounded-xl flex items-center justify-center text-white shadow-lg flex-shrink-0"> 
                  {features[currentFeature].icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-base sm:text-lg lg:text-xl truncate"> 
                    {features[currentFeature].title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed"> 
                    {features[currentFeature].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Feature Dots */}
            <div className="flex justify-center gap-2 mt-4 sm:mt-5">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeature(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentFeature
                      ? 'bg-green-500 w-5 sm:w-7' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Show feature ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 text-sm sm:text-base text-gray-600 dark:text-gray-400 px-4 sm:px-0" 
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" /> 
              <span className="whitespace-nowrap">Secure & Private</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" /> 
              <span className="whitespace-nowrap">Trusted by 100k+</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0" /> 
              <span className="whitespace-nowrap">4.9 Rating</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Login Form (Supabase Inspired) */}
        <motion.div
          variants={itemVariants}
          className="flex-1 w-full max-w-sm sm:max-w-md mx-auto relative 
                     bg-transparent sm:bg-white sm:dark:bg-gray-800 
                     rounded-xl p-0 sm:p-6 md:p-8 
                     shadow-none sm:shadow-2xl 
                     border-none sm:border sm:border-gray-200 sm:dark:border-gray-700"
        >
          {/* Clerk Sign In Component */}
          <SignIn
            appearance={{
              variables: {
                fontFamily: 'Inter, sans-serif', 
                colorText: darkMode ? '#E5E7EB' : '#1F2937', 
                colorPrimary: '#22C55E', 
                colorTextSecondary: darkMode ? '#9CA3AF' : '#6B7280', 
                colorInputBackground: darkMode ? '#374151' : '#F9FAFB', 
                colorInputText: darkMode ? '#E5E7EB' : '#1F2937',
                colorBackground: darkMode ? '#1F2937' : '#FFFFFF', 
                borderRadius: '0.5rem', 
              },
              elements: {
                card: 'shadow-none bg-transparent border-none', 
                headerTitle: 'hidden', 
                headerSubtitle: 'hidden', 
                socialButtonsBlockButton: 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 rounded-md font-medium py-2.5 text-sm', 
                socialButtonsBlockButtonText: 'font-medium text-sm',
                formButtonPrimary: 'bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 rounded-md transition-colors duration-200 text-sm shadow-md', 
                formFieldInput: 'rounded-md border border-gray-300 dark:border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm py-2.5 px-3', 
                identityPreviewEditButton: 'text-green-500 hover:text-green-600 text-sm', 
                footerActionLink: 'text-green-500 hover:text-green-600 text-sm', 
                formFieldLabel: 'text-sm font-medium text-gray-700 dark:text-gray-300', 
                dividerText: 'text-xs text-gray-500 dark:text-gray-400', 
                formResendCodeLink: 'text-sm text-green-500 hover:text-green-600', 
                otpCodeFieldInput: 'rounded-md border border-gray-300 dark:border-gray-600 focus:border-green-500 text-center text-lg font-semibold bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100' 
              }
            }}
          />
          
          {/* Trust & Privacy Section */}
          <motion.div
            variants={itemVariants}
            className="relative z-10 mt-6 p-4 
                       bg-gray-100 dark:bg-gray-700 rounded-lg 
                       border border-gray-200 dark:border-gray-600 text-sm" 
          >
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-green-500 flex-shrink-0" /> 
              <span className="font-medium text-gray-700 dark:text-gray-300"> 
                Your data is protected
              </span>
            </div>
            <p className="leading-relaxed text-gray-600 dark:text-gray-400"> 
              By continuing, you agree to our{' '}
              <a href="/terms" className="text-green-500 hover:underline font-medium"> 
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="/privacy" className="text-green-500 hover:underline font-medium"> 
                Privacy Policy
              </a>
              . We use industry-standard encryption to keep your information safe.
            </p>
          </motion.div>

          {/* Additional CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-6"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400"> 
              New to Ecocee?{' '}
              <span className="text-green-500 font-medium"> 
                Create your account instantly
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoginPage;
