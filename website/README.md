# Personal website

Next.js 16 / React 19 / TypeScript / Tailwind CSS 3, exported as static files. Use Node.js 22 or newer (Next.js requires at least 20.9).

Run these commands from this directory:

```sh
npm ci
npm run dev
```

Development: http://localhost:3000

## Build and preview

```sh
npm run build
npm run preview
```

The production files are in `out/`. The local preview is http://127.0.0.1:3080. `npm start` also starts this static preview; a Next.js production server is not needed.

Deploy the contents of `out/`, including `_next/`, HTML files, route data, and public assets. Your static host must serve `/about` from `about.html` and `/publications&projects` from `publications&projects.html`. The repository-root `index.html` is an unrelated historical placeholder. Keep the current public route names when deploying; rename them only with redirects.

## Validation

```sh
npm run lint
npm run typecheck
npm run build
npm run test:e2e
npm audit
```

Browser tests use installed Google Chrome by default. For a machine without Chrome:

```sh
npx playwright install chromium
PLAYWRIGHT_CHANNEL=chromium npm run test:e2e
```

Build before testing. Playwright starts and stops the static preview automatically. Tests cover all three routes at seven widths, article dialogs, menu navigation and dismissal, saved/system themes, reduced motion, runtime errors, and image loading. Screenshots are written under `test-results/screenshots/` for 375px and 1440px viewports. Traces are retained on failure.

## Content and images

- `src/data/articles.ts`: shared publication and project records.
- `app/page.tsx`: introduction and work experience.
- `app/about/page.tsx`: biography.
- `src/data/photos.ts`: original gallery photo groups, rotations, and timing.
- `globals.css`: theme variables; `tailwind.config.js`: the single Tailwind configuration.

Run `npm run images` after adding or changing source photographs. It writes 360px and 720px WebP variants into `public/images/optimized/`. Add a new photograph’s filename stem to a group in `src/data/photos.ts` to include it in the rotating strip. The oversized strip intentionally extends beyond the text column and is cropped at the page edges, using the original image sizes and rotation intervals. Rotation pauses for reduced motion and hidden tabs; timers are cleaned up on unmount. Originals remain untouched. Commit generated assets so normal builds require no image processing. These responsive assets work with static hosting; other `next/image` instances explicitly use `unoptimized` because no image optimization server exists in an exported site.

`next-themes` controls the `data-theme` attribute. Match new dark styles to that attribute; do not add a second class or local-storage theme implementation.

## Maintenance

The lockfile includes compatible dependency updates. Temporary overrides update the old brace-expansion 1.x dependency and Tailwind 3’s selector parser to patched versions. The production build and browser tests pass with these overrides; reassess them when upgrading ESLint or migrating Tailwind to version 4.

Google Tag Manager retains the existing container ID. Check its tags and desired loading/consent behavior in the deployed environment. This repository does not expose that remote configuration.

The FACTS publication uses the author list, September 2026 preprint date, and a summary of [arXiv:2609.07155](https://arxiv.org/abs/2609.07155). The [official code repository](https://github.com/MoritzTho/FACTS) identifies the venue as BMVC 2026. `public/project_images/facts-table.svg` redraws the checkmark comparison table in Figure 1(c), preserving its labels and values. Featured publications retain the full list’s newest-first order: BMVC 2026, ICML 2026, then NeurIPS 2025.
