// Everything you are likely to edit lives here.

export const site = {
  name: 'Rastup',
  title: 'Rastup | Animated websites, ads & AI voice operators',
  description:
    'Rastup builds animated, high-converting websites, ready-to-run ad creatives and AI voice operators, one growth system for your business.',

  city: 'Islamabad',
  country: 'Pakistan',
  timeZone: 'Asia/Karachi',
  mapsUrl: 'https://maps.google.com/?q=Islamabad,+Pakistan',

  // NOTE: the original design uses a Rastgarx.com address on a Rastup site.
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
