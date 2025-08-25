/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://ecocee.in',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: [
    '/api/*',
    '/admin',
    '/dashboard',
    '/dashboard/*',
    '/internship-certificate',
    '/terms-and-conditions',
  ],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'weekly',
      priority: path === '/' ? 1.0 : 0.5,
      lastmod: new Date().toISOString(),
    };
  },
};

module.exports = config;
