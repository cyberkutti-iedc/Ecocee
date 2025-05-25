/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://ecocee.in', // No trailing slash
  generateRobotsTxt: true,
  generateIndexSitemap: true,

  // Include all pages except specific exclusions
  transform: async (config, path) => {
    const excludedPaths = ['/admin', '/secret']; // Add your restricted paths here
    if (excludedPaths.includes(path)) return null;

    return {
      loc: path,
      changefreq: 'weekly',
      priority: path === '/' ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
    };
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/', // Allow all pages by default
      },
    ],
    additionalSitemaps: [
      'https://ecocee.in/sitemap.xml', // Ensure sitemap is included in robots.txt
    ],
  },
};

module.exports = config;
