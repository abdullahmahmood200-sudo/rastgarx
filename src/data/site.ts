// Everything you are likely to edit lives here.

export const site = {
  name: 'RastgarX',
  title: 'RastgarX | Growth Partner & Marketing Agency in Pakistan',
  description:
    'RastgarX is a growth partner for businesses in Pakistan: a digital marketing agency, web studio and automation team in one, based in Islamabad.',

  // Full URLs of your official profiles (Instagram, LinkedIn, Facebook, Google Business...).
  // They tell Google and AI tools these accounts are the same business.
  socials: [] as string[],

  city: 'Islamabad',
  country: 'Pakistan',
  timeZone: 'Asia/Karachi',
  mapsUrl: 'https://maps.google.com/?q=Islamabad,+Pakistan',

  // NOTE: the original design uses a Rastgarx.com address on a RastgarX site.
  // Change this if your inbox is on a different domain.
  email: 'Team@Rastgarx.com',
  phone: '+92 324 7626969',

  // How many of the five booking slots show as AVAILABLE (0–5).
  openSlots: 2,

  // Hero visual. Put a file in /public (e.g. public/hero.jpg) and set its path
  // here, e.g. '/hero.jpg'. A .mp4/.webm path plays as a muted looping video.
  // Leave null to show the plain gradient panel.
  hero: '/hero.webp' as string | null,
  heroAlt: 'A dark, minimal desk at night: a laptop, a coffee and a phone lighting up with an incoming call under a green neon light',

  // Demo call recording. Put an audio file in /public (e.g. public/demo-call.mp3)
  // and set its path here. With null, the player runs a silent 83-second
  // visual-only replay, as in the original design.
  demoAudio: null as string | null,
  demoCallLabel: 'Call · +92 321 4567890 · 01:23',
};

export const telHref = 'tel:' + site.phone.replace(/[^+\d]/g, '');
export const mailHref = 'mailto:' + site.email;
