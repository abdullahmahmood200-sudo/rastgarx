# Rastup website

Astro static site. The original Claude Design export is kept as `Rastup.html` for reference.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321, live reload
npm run build      # writes the finished site to dist/
npm run preview    # serves dist/ to check the production build
```

## Pages

| URL | File |
|---|---|
| `/` | `src/pages/index.astro` |
| `/work` | `src/pages/work.astro` |
| `/work/<project>` (one per project) | `src/pages/work/[slug].astro` |

## Edit content

- **Projects (Work page + case studies):** `src/data/projects.ts`. Add a project there and its case-study page is created automatically. Optional per project: `description`, `liveUrl`, `cover` image, `gallery` images.
- **Contact details, open booking slots, hero image, demo recording:** `src/data/site.ts`
- **Section text:** one file per section in `src/components/`
- **Colours, spacing, mobile layout:** `src/styles/global.css` (colour tokens are at the top)
- **Images, audio, video:** drop the files in `public/` and point to them from `site.ts` (e.g. `'/hero.jpg'`)

## Deploy to Netlify

Build settings are already in `netlify.toml` (`npm run build`, publish `dist`).

- **From Git (recommended):** push this folder to GitHub/GitLab, then in Netlify choose *Add new site → Import an existing project* and pick the repo. Every push redeploys automatically.
- **Without Git:** run `npm run build` and drag the `dist/` folder onto https://app.netlify.com/drop.
