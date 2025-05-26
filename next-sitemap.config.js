/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://ecocee.in',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'weekly',
      priority: path === '/' ? 1.0 : 0.0, // Only homepage prioritized
      lastmod: new Date().toISOString(),
    };
  },
};

module.exports = config;
