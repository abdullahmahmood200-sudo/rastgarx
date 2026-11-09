// Structured data (JSON-LD) shared by pages, for search engines and answer engines.
import { site } from './site';

// Page URLs end in "/" to match the canonical URLs of the built pages.
export const absolute = (path: string, base: URL | undefined) => {
  const url = new URL(path, base);
  if (!url.pathname.endsWith('/') && !/\.[a-z0-9]+$/i.test(url.pathname)) url.pathname += '/';
  return url.toString();
};

const services = ['Website development', 'Animated web design', 'E-commerce websites', 'Ad creatives', 'SEO', 'AI voice operators'];

export const businessSchema = (base: URL | undefined, areaServed?: object | object[]) => ({
  '@type': 'ProfessionalService',
  '@id': absolute('/#business', base),
  name: site.name,
  url: absolute('/', base),
  description: site.description,
  email: site.email,
  telephone: site.phone,
  image: absolute('/og-image.jpg', base),
  logo: absolute('/logo.png', base),
  slogan: 'We build. You profit.',
  ...(site.socials.length ? { sameAs: site.socials } : {}),
  makesOffer: services.map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.city,
    addressCountry: 'PK',
  },
  areaServed: areaServed ?? { '@type': 'Country', name: 'Pakistan' },
  knowsAbout: ['Digital marketing', 'Marketing agency services', 'Website development', 'Web design', 'E-commerce websites', 'Advertising', 'SEO', 'AI voice operators'],
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
