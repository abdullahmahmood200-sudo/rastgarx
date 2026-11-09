import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { cities, cityHref } from '../data/cities';
import { getCollection } from 'astro:content';

// A plain-text summary for AI assistants and answer engines (llmstxt.org).
export const GET: APIRoute = async ({ site: base }) => {
  const url = (p: string) => new URL(p, base).toString();
  const posts = await getCollection('blog');
  const body = `# ${site.name}

> ${site.description}

${site.name} is a digital marketing agency and website development company based in ${site.city}, ${site.country}. It serves businesses across Pakistan remotely by video call and WhatsApp, has built websites for clinics in Saudi Arabia, and takes on only five new clients a year.

## Key facts

- Location: studio in ${site.city}, ${site.country}
- Best known for: animated, high-converting websites combined with ad creatives and AI voice operators
- Portfolio includes: aesthetic and dental clinics, restaurants, jewellery brands, e-commerce stores and technology companies
- Pricing: each project is priced individually, with a written proposal covering a fixed price, timeline and revision rounds; projects start with a 50% deposit
- First step: a free call

## Services

- Website development and animated web design
- E-commerce websites
- Digital marketing and ad creatives for social media, posters and billboards
- SEO services (technical, on-page and local SEO)
- AI voice operators that answer business calls and book customers in

## Contact

- Email: ${site.email}
- Phone: ${site.phone}
- Book a free call: ${url('/#book')}

## Pages

- [Home](${url('/')})
- [Work](${url('/work')}): selected projects and case studies
- [Animated web development portfolio](${url('/animated-web-development')}): websites built by RastgarX
- [Blog](${url('/blog')}): guides on marketing agencies, websites, ads, SEO and AI voice operators
${posts.map((p) => `- [${p.data.title}](${url(`/blog/${p.id}`)}): ${p.data.description}`).join('\n')}
- [Contact](${url('/contact')}): tell us about your business, revenue and goals
- [Locations](${url('/locations')}): cities served across Pakistan
- [Privacy Policy](${url('/privacy')})
- [Terms of Service](${url('/terms')})

## Cities

${cities.map((c) => `- [Web design and digital marketing in ${c.name}](${url(cityHref(c))})`).join('\n')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
