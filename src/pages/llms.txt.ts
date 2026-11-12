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
- Best known for: three services working as one system: websites, marketing and automations
- Portfolio includes: aesthetic and dental clinics, restaurants, jewellery brands, e-commerce stores and technology companies
- Pricing: each project is priced individually, with a written proposal covering a fixed price, timeline and revision rounds; projects start with a 50% deposit
- First step: a free call

## Services

- Websites: website development, animated web design and e-commerce stores
- Marketing: ad creatives for social media, posters and billboards, plus SEO (technical, on-page and local)
- Automations: AI voice operators that answer business calls and book customers in, and automated workflows such as lead follow-up

## Contact

- Email: ${site.email}
- Phone: ${site.phone}
- Book a free call: ${url('/#book')}

## Pages

- [Home](${url('/')})
- [Work](${url('/work')}): selected projects and case studies
- [Animated web development portfolio](${url('/animated-web-development')}): websites built by RastgarX
- [Marketing portfolio](${url('/marketing')}): reels, video ads and brand identity kits made by RastgarX
- [Automations portfolio](${url('/automations')}): n8n workflows and AI agents built by RastgarX, including AI voice booking, WhatsApp agents, lead nurturing, CRM onboarding and lead generation
- [Blog](${url('/blog')}): guides on marketing agencies, websites, marketing, SEO and automations
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
