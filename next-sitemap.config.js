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
  ],
  transform: async (config, path) => {
    // Define priority based on route importance
    const priorities = {
      '/': 1.0,
      '/solutions': 0.9,
      '/solutions/*': 0.85,
      '/about': 0.8,
      '/careers': 0.6,
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
