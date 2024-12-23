import type { NextConfig } from 'next';
const withTM = require("next-transpile-modules")(["@devnomic/marquee"]);
const nextConfig: NextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com',
      'i.pravatar.cc', // Add this line to allow images from i.pravatar.cc
      'images.unsplash.com', // Already allowed, assuming you're using Unsplash
    ], // Add the allowed image domains here
    
  },
 
};

export default nextConfig;
