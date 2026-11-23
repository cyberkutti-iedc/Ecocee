import type { NextConfig } from 'next';
const withTM = require('next-transpile-modules')(['@devnomic/marquee']);

// Read environment variables from .env.local
const nextConfig: NextConfig = {
  cacheComponents: true,
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
      // Add more patterns as needed
    ],
  },
  env: {
    GOOGLE_SITE_VERIFICATION: process.env.GOOGLE_SITE_VERIFICATION,
  },
  async redirects() {
    return [
      {
        source: '/docs/:path*',
        destination: 'https://github.com/ecocee/Kode/tree/main/docs',
        permanent: false,
      },
      {
        source: '/kode/docs/:path*',
        destination: 'https://github.com/ecocee/Kode/tree/main/docs',
        permanent: false,
      },
    ];
  },
  trailingSlash: true, // Ensures URLs like `/docs/niti_hal/` work correctly
};

export default nextConfig;