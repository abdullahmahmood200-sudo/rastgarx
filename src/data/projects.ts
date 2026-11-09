// Projects shown on /work, in display order. Each one also gets its own
// case-study page at /work/<slug> (e.g. /work/rawnaq).
//
// Optional fields, leave them out until you have the material:
//   description  Case-study paragraph. Hidden when missing.
//   liveUrl      Shows a "VISIT LIVE SITE" button on the case study.
//   cover        Image for the Work list preview and grid tile,
//                e.g. '/work/rawnaq/cover.jpg' (put the file in public/work/rawnaq/).
//   gallery      Case-study images, scrolled sideways. Without them the page shows
//                four coloured placeholder panels.

export interface Shot { src: string; alt: string }

export interface Project {
  name: string;
  category: string;
  services: string;
  year: string;
  description?: string;
  liveUrl?: string;
  cover?: string;
  gallery?: Shot[];
}

export const projects: Project[] = [
  {
    name: 'Rawnaq',
    category: 'Aesthetic Clinic',
    services: 'Web Design & Animation',
    year: '2026',
    description:
      'A premium website for Rawnaq, an aesthetic clinic in Saudi Arabia. Interactive animations guide visitors through the clinic’s treatments, and every page is built to turn a visit into a booked consultation.',
  },
  { name: 'Moxan', category: 'Treatments', services: 'Web Design', year: '2026' },
  { name: 'Zylo', category: 'Tech Accessories', services: 'E-Commerce Web Design', year: '2026' },
  { name: 'Loxvo', category: 'Technology', services: 'Branding & Motion Reel', year: '2026' },
  { name: 'Rastgar X Kids', category: 'Kids Fashion', services: 'E-Commerce Design & Development', year: '2026' },
  { name: 'Rastgar X Promo', category: 'Agency', services: 'Video Ad Campaign', year: '2026' },
];

export const slugify = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const projectHref = (p: Project) => `/work/${slugify(p.name)}`;

// Case studies with no write-up or images stay out of search results until they have some.
export const isThinProject = (p: Project) => !p.description && !p.gallery?.length;

// Headline numbers in the Work intro row. `projects` defaults to the list above.
// Set `clients` to a number to show it; leave null to hide that column.
export const workStats = {
  clients: null as number | null,
  projects: projects.length,
};

// Placeholder panel colours on the Work page, cycled per project.
export const looks = [
  { bg: '#1FFF00', fg: '#0B0B0B', dot: '#0B0B0B', ring: '#0B0B0B' },
  { bg: '#2C2C2F', fg: '#EDEDED', dot: '#1FFF00', ring: '#6A6A6E' },
  { bg: '#0E0E0F', fg: '#EDEDED', dot: '#1FFF00', ring: '#4A4A4E' },
  { bg: '#EDEDED', fg: '#111111', dot: '#111111', ring: '#8E8E93' },
];

// Placeholder gallery panels on case-study pages.
export const shotLooks = [
  { bg: '#2C2C2F', fg: '#EDEDED', dot: '#1FFF00', ring: '#6A6A6E' },
  { bg: '#0B0B0B', fg: '#EDEDED', dot: '#1FFF00', ring: '#4A4A4E' },
  { bg: '#1FFF00', fg: '#0B0B0B', dot: '#0B0B0B', ring: '#0B0B0B' },
  { bg: '#3A3A3D', fg: '#EDEDED', dot: '#EDEDED', ring: '#8E8E93' },
];
