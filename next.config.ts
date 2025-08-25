import type { NextConfig } from 'next';
const withTM = require('next-transpile-modules')(['@devnomic/marquee']);

// Read environment variables from .env.local
const nextConfig: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        hostname: 'i.pravatar.cc',
      },
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'styxucsqgybzuprmkmft.supabase.co',
      },
      {
        hostname: '**.supabase.co',
      },
      // Add more patterns as needed
    ],
    domains: ['styxucsqgybzuprmkmft.supabase.co'],
  },
  env: {
    GOOGLE_SITE_VERIFICATION: process.env.GOOGLE_SITE_VERIFICATION,
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
    SUPABASE_BUCKET: process.env.SUPABASE_BUCKET,
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