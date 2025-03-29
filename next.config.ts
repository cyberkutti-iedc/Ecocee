import type { NextConfig } from 'next';
const withTM = require('next-transpile-modules')(['@devnomic/marquee']);

// Read environment variables from .env.local
const nextConfig: NextConfig = {
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'i.pravatar.cc',
      'images.unsplash.com',
    ],
  },
  env: {
    GOOGLE_SITE_VERIFICATION: process.env.GOOGLE_SITE_VERIFICATION,
  },
  async rewrites() {
    return [
      {
        source: '/docs/:path*',
        destination: '/public/docs/:path*', // Ensure static files in public/docs are accessible
      },
    ];
  },
  trailingSlash: true, // Ensures URLs like `/docs/niti_hal/` work correctly
};

export default nextConfig;
