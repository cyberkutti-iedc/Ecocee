'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SignIn } from '@clerk/nextjs';
import { 
  Sparkles, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Globe,
  Brain,
  Cpu,
  Star,
  Sun,
  Moon
} from 'lucide-react';

const LoginPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence for your projects"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Embedded Systems",
      description: "Advanced hardware solutions for modern applications"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "IoT Integration",
      description: "Connect your devices to the future of technology"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Custom Development",
      description: "Tailored solutions for your unique requirements"
    }
  ];

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 px-4 py-8 transition-colors duration-500 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 dark:bg-blue-500/20 rounded-full blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
          className="absolute top-40 right-20 w-32 h-32 bg-purple-200/30 dark:bg-purple-500/20 rounded-full blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '4s' }}
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-200/30 dark:bg-indigo-500/20 rounded-full blur-xl"
        />
      </div>
    

      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl w-full">
        {/* Left Side - Branding & Features */}
        <motion.div
          variants={itemVariants}
          className="flex-1 text-center lg:text-left space-y-8"
        >
          {/* Logo & Brand */}
          <div className="space-y-4">
            <motion.div
              className="inline-flex items-center gap-3 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <motion.div
                  className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-2 h-2 bg-white rounded-full" />
                </motion.div>
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  Ecocee
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  Innovation at Scale
                </p>
              </div>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white leading-tight"
            >
              Welcome to the Future of
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Technology Solutions
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto lg:mx-0"
            >
              Join thousands of innovators building tomorrow's technology today. 
              Sign in to unlock premium features and personalized solutions.
            </motion.p>
          </div>

          {/* Rotating Features */}
          <motion.div
            variants={itemVariants}
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeature}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                  {features[currentFeature].icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 dark:text-white text-lg">
                    {features[currentFeature].title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {features[currentFeature].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Feature Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeature(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentFeature
                      ? 'bg-blue-500 w-6'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 dark:text-gray-400"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>Secure & Private</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Trusted by 10k+</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>5.0 Rating</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Login Form */}
        <motion.div
          variants={itemVariants}
          className="flex-1 max-w-md w-full"
        >
          <motion.div
            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-2xl" />

            {/* Form Header */}
            <div className="relative z-10 text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
              >
                <ArrowRight className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                Sign In to Continue
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Access your personalized dashboard and start building
              </p>
            </div>

            {/* Clerk Sign In Component */}
            <div className="relative z-10">
              <SignIn
                appearance={{
                  elements: {
                    card: 'shadow-none bg-transparent border-none',
                    headerTitle: 'hidden',
                    headerSubtitle: 'hidden',
                    socialButtonsBlockButton: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl font-semibold py-3',
                    socialButtonsBlockButtonText: 'font-semibold',
                    formButtonPrimary: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl font-semibold',
                    formFieldInput: 'rounded-xl border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100',
                    identityPreviewEditButton: 'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300',
                    footerActionLink: 'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300',
                  }
                }}
              />
            </div>

            {/* Trust & Privacy */}
            <motion.div
              variants={itemVariants}
              className="relative z-10 mt-6 p-4 bg-gray-50/80 dark:bg-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-600"
            >
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Your data is protected
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                By continuing, you agree to our{' '}
                <a href="/terms" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
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
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                Create your account instantly
              </span>
            </p>
          </motion.div>
        </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoginPage;