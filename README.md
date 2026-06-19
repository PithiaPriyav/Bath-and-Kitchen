# Bath & Kitchen Studio

Marketing site for **Bath & Kitchen Studio LLP** — a Nairobi showroom for premium
tiles, kitchens, bathrooms and wardrobes, plus an in-house 3D rendering service.

Static **Astro** + TypeScript, plain scoped CSS (no Tailwind, no UI library).
Designed to look premium, rank well, load fast, and be editable by non-technical
staff from a single data file.

## Commands

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to dist/
npm run preview  # serve the production build
```

Node 20+ required.

## Editing content

**All copy, products, offers and contact details live in `src/data/site.ts`.**
Edit that file — not the pages. Each export maps onto a future CMS document:

| Export        | What it controls                                            |
| ------------- | ----------------------------------------------------------- |
| `site`        | Name, tagline, address, phones, email, socials              |
| `nav`         | Header / footer navigation                                  |
| `offer`       | The promotion + its `deals[]` (prices, dates, terms)        |
| `categories`  | Product categories (also generates `/products/[slug]`)      |
| `clientele`   | "Who we work with" list                                     |
| `service`     | The 3D rendering pitch                                       |

### How the offer shows itself

The offer is **date-driven** off `offer.start` / `offer.end`:

- **Before `start`** — featured everywhere as *Coming Soon* (preview).
- **Between `start` and `end`** — featured as live.
- **After `end`** (or `active: false`) — hidden; pages fall back to a tasteful
  empty state ("no active offers — visit the showroom").

To run a new promo, edit the `offer` object (name, headline, dates, `deals`).

## Design rules (do not violate)

- **No `border-radius` anywhere** — everything is square.
- Monochrome base (`#0A0A0A` / white / greys). **Red & yellow are offer-only**
  accents (promo bar, offer panels, deal prices, offer CTAs) — nowhere else.
- Headings: Poppins, UPPERCASE, weight 800. The signature device is the
  **two-tone headline** (some words white/black, some grey, same line).
- Sections alternate black / white down the page.
- All design tokens live in `src/layouts/Base.astro` `:root`. Use the CSS
  variables — don't hardcode hex values in components.

## SEO

Per-page `title` / `description` / `canonical` / OG / Twitter via `Base.astro`
props (`title`, `description`, `path`). `HomeGoodsStore` JSON-LD on every page;
`BreadcrumbList` on category pages. Sitemap auto-generated; `robots.txt` in
`public/`. One `<h1>` per page.

## Structure

```
src/
  data/site.ts          ← ALL content lives here
  layouts/Base.astro    ← <head>, SEO, JSON-LD, global styles + tokens
  components/            ← Header, Footer, Logo, Placeholder
  pages/
    index.astro         ← home (offer-led hero + full flow)
    products.astro      ← category overview
    products/[slug].astro ← per-category detail (+ BreadcrumbList)
    offers.astro        ← deal grid / empty state
    contact.astro       ← showroom info + WhatsApp enquiry form
public/
  robots.txt, og.jpg, favicon.svg
```

## Contact form

The contact form is server-free: it validates client-side then opens **WhatsApp**
(`wa.me`) with the enquiry pre-filled to the studio's first listed number, with a
`mailto:` fallback. To move to a backend form service later, replace the submit
handler in `src/pages/contact.astro`.

## To do (next)

- Replace `Placeholder` blocks with real photography via Astro `<Image />`
  (`astro:assets`) — product cut-outs, hero/section shots, category thumbs.
- Optional new pages: About / Our Story, Projects / Gallery.
- CMS migration (Sanity / Payload): model each `site.ts` export as a document,
  fetch at build, keep the same component props; add a deploy webhook.

## Deploy (Vercel)

Push to GitHub → import in Vercel (auto-detects Astro via `vercel.json`). Set
custom domain `bath-kitchenstudio.com`, force HTTPS, redirect `www` → apex. Old
WordPress paths redirect via `vercel.json`.
