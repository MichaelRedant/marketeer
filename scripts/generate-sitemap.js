const fs = require('fs');
const path = require('path');
const routes = require('../src/routes.json');

const hostname = process.env.SITE_URL || 'https://example.com';

const urls = routes
  .filter((route) => !route.startsWith('/admin'))
  .map((route) => `  <url>\n    <loc>${hostname}${route}</loc>\n  </url>`)
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  `${urls}\n` +
  `</urlset>`;

fs.writeFileSync(path.resolve(__dirname, '../public/sitemap.xml'), sitemap);
console.log('sitemap.xml generated');

