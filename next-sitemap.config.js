/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://ecocee.in',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: ['/**'], // exclude everything by default

  // Only allow these specific paths:
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/**'],
      },
    ],
    additionalSitemaps: [], // No other sitemaps
  },

  // Manually add only the included pages
  transform: async (config, path) => {
    const allowedPaths = ['/', '/niti', '/kode'];
    if (!allowedPaths.includes(path)) {
      return null; // Exclude all other pages
    }

    return {
      loc: path, // The URL path
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: new Date().toISOString(),
    };
  },
};

module.exports = config;
