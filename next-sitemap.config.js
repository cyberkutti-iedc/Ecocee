/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://ecocee.in',
  generateRobotsTxt: true,
  generateIndexSitemap: true,

  // Do NOT exclude everything by default
  // Instead, filter pages using transform

  // Remove exclude property

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/', // Allow whole site or specifically allowed pages
        // disallow: ['/secret'], // Disallow only what you want hidden
      },
    ],
  },

  transform: async (config, path) => {
    const allowedPaths = ['/', '/niti', '/kode'];
    if (!allowedPaths.includes(path)) {
      return null; // Exclude all other pages
    }

    return {
      loc: path, // URL path
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: new Date().toISOString(),
    };
  },
};

module.exports = config;
