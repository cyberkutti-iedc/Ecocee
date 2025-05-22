const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');


const path = require('path');

const BASE_URL = 'https://eocee.in';

(async () => {
  const sitemap = new SitemapStream({ hostname: BASE_URL });
  const writeStream = createWriteStream(path.resolve(__dirname, '../public/sitemap.xml'));
  sitemap.pipe(writeStream);

  const staticPages = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/kode', changefreq: 'weekly', priority: 0.9 },
    { url: '/niti', changefreq: 'monthly', priority: 0.8 },
    { url: '/ideas', changefreq: 'monthly', priority: 0.7 },
  ];

  staticPages.forEach(page => sitemap.write(page));
  sitemap.end();

  await streamToPromise(sitemap);
  console.log('✅ Sitemap generated at public/sitemap.xml');
})();
