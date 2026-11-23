/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://ecocee.in',
  generateRobotsTxt: false,
  generateIndexSitemap: true,
  exclude: [
    '/api/*',
    '/admin',
    '/dashboard',
    '/dashboard/*',
    '/internship-certificate',
    '/docs',
    '/docs/*',
    '/kode/docs',
    '/kode/docs/*',
    '/privacy-policy',
    '/privacy-policy/*',
    '/terms-and-conditions',
    '/terms-and-conditions/*',
    '/apple-icon.png',
    '/icon.png',
    '/icon.svg',
    '/manifest.json',
  ],
  transform: async (config, path) => {
    // Define priority based on route importance
    const priorities = {
      '/': 1.0,
      '/kode': 0.9,
      '/solutions': 0.9,
      '/solutions/*': 0.85,
      '/about': 0.8,
      '/careers': 0.6,
      '/privacy': 0.5,
      '/terms': 0.5,
      '/legal': 0.5,
    };

    return {
      loc: path,
      changefreq: path === '/' ? 'weekly' : 'monthly',
      priority: priorities[path] || 0.5,
      lastmod: new Date().toISOString(),
    };
  },
};

module.exports = config;
