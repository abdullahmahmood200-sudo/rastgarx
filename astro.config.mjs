import { defineConfig } from 'astro/config';

// Static output: `npm run build` writes plain HTML/CSS/JS to dist/.
// Set `site` to your real domain once you have one (used for canonical URLs).
export default defineConfig({
  site: 'https://rastup.vercel.app',
  // Fetch internal pages on hover so the transition hands over quickly.
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
});
