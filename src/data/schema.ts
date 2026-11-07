// Structured data (JSON-LD) shared by pages, for search engines and answer engines.
import { site } from './site';

export const absolute = (path: string, base: URL | undefined) => new URL(path, base).toString();

export const businessSchema = (base: URL | undefined, areaServed?: object | object[]) => ({
  '@type': 'ProfessionalService',
  '@id': absolute('/#business', base),
  name: site.name,
  url: absolute('/', base),
  description: site.description,
  email: site.email,
  telephone: site.phone,
  image: absolute('/hero.webp', base),
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.city,
    addressCountry: 'PK',
  },
  areaServed: areaServed ?? { '@type': 'Country', name: 'Pakistan' },
  knowsAbout: ['Website development', 'Web design', 'E-commerce websites', 'Digital marketing', 'Advertising', 'SEO', 'AI voice operators'],
});

export const breadcrumbSchema = (base: URL | undefined, items: { name: string; path: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: absolute(it.path, base),
  })),
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const graph = (...nodes: object[]) =>
  JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes });
