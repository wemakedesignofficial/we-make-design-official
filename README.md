# WM Designs

An independent creative and technology studio website built with Next.js App Router, TypeScript, Tailwind CSS and Framer Motion.

## Start locally

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3000`.

## Project checks

```bash
npm run typecheck
npm run build
```

The contact CTA links to Instagram. There is no contact form or `mailto:` submit handler in the current site.

## Supplied assets

- `public/wm-logo.png` — original supplied WM logo copied unchanged.
- `public/handmade-haven.jpg`, `public/architecture-studio.jpg`, `public/digital-invitation.jpg` — supplied portfolio imagery.
- `work/figma-reference.png` — supplied visual reference, retained outside the public site.

## Deploy to Cloudflare

- Build command: `npm run build`
- Output directory: `out`
- Deploy command (Workers UI only): `npx wrangler deploy`

To add a custom domain, open your Worker in **Workers & Pages**, choose **Custom domains**, select **Set up a custom domain**, and follow the prompts to choose and verify the domain.
