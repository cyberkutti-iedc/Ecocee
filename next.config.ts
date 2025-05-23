import type { NextConfig } from 'next';
const withTM = require('next-transpile-modules')(['@devnomic/marquee']);

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
  async redirects() {
    return [
      {
        source: '/(.*)',
        has: [{ type: 'host', value: 'www.eocee.in' }],
        destination: 'https://eocee.in/:1',
        permanent: true, // 🔁 Redirect www to non-www (canonical)
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/docs/:path*',
        destination: '/public/docs/:path*', // Good: makes public/docs available
      },
    ];
  },
  trailingSlash: true, // ✅ SEO-friendly URLs like /kode/
};

export default withTM(nextConfig);
