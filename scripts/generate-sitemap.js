import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const formatToHyphenated = (input) => {
    return input
        .trim()
        .replace(/[^a-zA-Z0-9\s]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .toLowerCase();
};

const BASE_URL = 'https://prepcohealthcare.com';
const TODAY = new Date().toISOString().split('T')[0];
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');

const plans_v2 = [
    "Ultimate Health Plan",
    "Indian Health Plan",
    "Diamond Health Plan",
    "Platinum Health Plan",
    "Gold Health Plan",
];

const staticRoutes = ['/', '/about', '/blogs', '/career', '/contact', '/plans', '/testimonials'];
const legalRoutes = ['/privacy-policy', '/terms-and-conditions'];
const planSlugs = plans_v2.map(plan => `/plans/${formatToHyphenated(plan)}`);

function generateUrlElement(route, priority, freq) {
    return `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function generateSitemap() {
    const urls = [
        ...staticRoutes.map(route => generateUrlElement(route, '0.8', 'weekly')),
        ...legalRoutes.map(route => generateUrlElement(route, '0.3', 'yearly')),
        ...planSlugs.map(route => generateUrlElement(route, '0.6', 'monthly')),
    ].join('\n');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

    fs.writeFileSync(OUTPUT_PATH, xml);
    console.log('✅ Sitemap generated at /public/sitemap.xml');
}

generateSitemap();
