'use client';

import { motion } from 'framer-motion';

import { SignIn } from '@clerk/nextjs';


const LoginPage = () => {


  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#F0F4FF] to-[#D6E4FF] px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Welcome to Ecocee</h1>
        <p className="text-center text-gray-500 mb-6">Sign in with your Google account to continue</p>

       <SignIn
                           appearance={{
                               elements: {
                                   card: 'shadow-none',
                                   formButtonPrimary: 'bg-blue-500 hover:bg-blue-600 text-white',
                               },
                           }}
                       />

        <p className="mt-6 text-xs text-gray-400 text-center">
          By continuing, you agree to Ecocee&apos;s{' '}
          <a href="/privacy-policy" className="underline text-blue-500 hover:text-blue-600">Privacy Policy</a>.
        </p>
      </div>
    </motion.div>
  );
};

export default LoginPage;
