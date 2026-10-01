# WM Designs

An independent creative and technology studio website built with Next.js App Router, TypeScript, Tailwind CSS and Framer Motion.

## Start locally

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3000`.

## Search engine setup

The production site URL is configured once in `lib/site.ts` as `SITE_URL`.
The static export generates `/robots.txt` and `/sitemap.xml` in `out/`, which is the Cloudflare Workers Assets directory in `wrangler.jsonc`. Unknown asset routes use the exported 404 page. The initial HTML contains page metadata and visible content because Next.js statically renders routes at build time.

The default social sharing image path is `/og-image.jpg`. Add a 1200 × 630 image at `public/og-image.jpg` before deploying if you want a branded social preview.

## Project checks

```bash
npm run typecheck
npm run build
```

The contact CTA links to Instagram and email. There is no contact form in the current site.

## Supplied assets

- `public/wm-logo.png` — original supplied WM logo copied unchanged.
- `public/handmade-haven.jpg`, `public/architecture-studio.jpg`, `public/digital-invitation.jpg` — supplied portfolio imagery.
- `work/figma-reference.png` — supplied visual reference, retained outside the public site.

## Deploy to Cloudflare Workers

```bash
npm run build
npx wrangler deploy
```

After deployment, open `/robots.txt` and `/sitemap.xml`, view page source to check the title, description, canonical and social metadata, then add the site in [Google Search Console](https://search.google.com/search-console/), verify ownership, submit `/sitemap.xml`, and use URL Inspection → Request Indexing for the homepage.

To add a custom domain, open your Worker in **Workers & Pages**, choose **Custom domains**, select **Set up a custom domain**, and follow the prompts to choose and verify the domain.
