import type { NextConfig } from 'next';
const withTM = require('next-transpile-modules')(['@devnomic/marquee']);

// Read environment variables from .env.local
const nextConfig: NextConfig = {
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'i.pravatar.cc', // Add this line to allow images from i.pravatar.cc
      'images.unsplash.com', // Already allowed, assuming you're using Unsplash
    ], // Add the allowed image domains here
  },
  env: {
    // Expose the Google verification code as an environment variable
    GOOGLE_SITE_VERIFICATION: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default nextConfig;
