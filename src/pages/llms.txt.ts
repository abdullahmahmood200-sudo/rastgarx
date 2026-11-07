import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { cities, cityHref } from '../data/cities';

// A plain-text summary for AI assistants and answer engines (llmstxt.org).
export const GET: APIRoute = ({ site: base }) => {
  const url = (p: string) => new URL(p, base).toString();
  const body = `# ${site.name}

> ${site.description}

${site.name} is a website development, web design and digital marketing agency based in ${site.city}, ${site.country}. It serves businesses across Pakistan remotely by video call and WhatsApp, and takes on only five new clients a year.

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
- [Locations](${url('/locations')}): cities served across Pakistan
- [Privacy Policy](${url('/privacy')})
- [Terms of Service](${url('/terms')})

## Cities

${cities.map((c) => `- [Web design and digital marketing in ${c.name}](${url(cityHref(c))})`).join('\n')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
