import type { APIRoute } from 'astro';
import { projects, projectHref, isThinProject } from '../data/projects';
import { cities, cityHref } from '../data/cities';
import { getCollection } from 'astro:content';

const posts = await getCollection('blog');

// Paths end in "/" to match the canonical URLs of the built pages (dist/work/index.html).
const slash = (p: string) => (p.endsWith("/") ? p : p + "/");

// Every public page, with how important it is relative to the others.
const pages: { path: string; priority: string; changefreq: string }[] = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/work', priority: '0.8', changefreq: 'monthly' },
  { path: '/animated-web-development', priority: '0.8', changefreq: 'monthly' },
  { path: '/marketing', priority: '0.8', changefreq: 'monthly' },
  { path: '/automations', priority: '0.8', changefreq: 'monthly' },
  ...projects.filter((p) => !isThinProject(p)).map((p) => ({ path: projectHref(p), priority: '0.6', changefreq: 'monthly' })),
  { path: '/blog', priority: '0.8', changefreq: 'weekly' },
  ...posts.map((p) => ({ path: `/blog/${p.id}`, priority: '0.7', changefreq: 'monthly' })),
  { path: '/contact', priority: '0.7', changefreq: 'yearly' },
  { path: '/careers', priority: '0.5', changefreq: 'monthly' },
  { path: '/locations', priority: '0.8', changefreq: 'monthly' },
  ...cities.map((c) => ({ path: cityHref(c), priority: '0.7', changefreq: 'monthly' })),
  { path: '/privacy', priority: '0.2', changefreq: 'yearly' },
  { path: '/terms', priority: '0.2', changefreq: 'yearly' },
];

export const GET: APIRoute = ({ site }) => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = pages
    .map((p) => `  <url>\n    <loc>${new URL(slash(p.path), site)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
