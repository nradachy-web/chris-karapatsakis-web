# Chris Karapatsakis — chriskarapatsakis.com — Build Notes

Built 2026-06-24. Static Next.js 16 + Tailwind v4 site, deploys to GitHub Pages or Vercel.
Concept: "On the Record" — quiet-luxury, document/deed editorial design with a wax-seal
guarantee as the signature element. Honesty brand: every figure is defensible.

Local path: `~/Desktop/chris-karapatsakis-web/` (iCloud Desktop)
Run locally: `npm run build` then serve `out/`, or `npm run dev`.

---

## ACTION NEEDED — drop in the real photos

Save the photos Nick sent into `public/images/` with these exact names, then run `npm run build`:

| File name | Which photo | Used on |
|---|---|---|
| `chris-headshot.jpg` | The high-res professional one (patterned tie, gray backdrop) — REPLACE the current low-res one | Homepage hero record card |
| `chris-headshot-2.jpg` | The smiling one (white blazer, pink shirt) | About page portrait |
| `office-day.jpg` | The daytime office exterior (CHRIS KARAPATSAKIS REAL ESTATE sign) | Home, About, Contact office sections |
| `office-night.jpg` | The office at dusk (lit REAL ESTATE sign) | Office section (secondary) |

Until the files are added, those spots show clean labeled placeholders (never broken images).
The current `chris-headshot.jpg` is a 387x413 pull from his Zillow/Remerica profile as a stopgap.

---

## What is built (14 routes, all static)

- `/` homepage (hero → stats → CMA form → cinematic video band → 2 questions → seller perks →
  Easy-Exit guarantee pledge → why Chris → process → social proof → office → areas → FAQ → CTA)
- `/home-value` — primary CMA lead landing page (Google Ads target)
- `/sell-your-home-canton-mi`, `-plymouth-mi`, `-northville-mi`, `-south-lyon-mi` — city pages
  (cinematic banner, live market stats, neighborhoods, city FAQ, schema)
- `/realtor-commission-michigan`, `/how-long-to-sell-house-michigan` — answer pages (his top-2 Qs)
- `/seller-guarantee`, `/how-i-sell-your-home`, `/reviews`, `/about`, `/contact`, `/thank-you`, 404

## Media generated
- 6 cinematic scene stills (Nano Banana): brand-street + 4 cities + og-base → `public/scenes/`
- 3 Veo videos (`public/video/`): brand-street (homepage band), plymouth + northville (city banners)
  - NOTE: videos are uncompressed (~10-16MB each). Recommend compressing before launch
    (e.g. `ffmpeg -i in.mp4 -vcodec libx264 -crf 30 -an -movflags +faststart out.mp4`) for speed.
- `public/og-image.jpg` social card (1200x630)

## Local SEO / Google Ads (already wired)
- JSON-LD: RealEstateAgent (home), Person (about), FAQPage (all FAQ pages), city RealEstateAgent
- Per-page titles/meta, sitemap.xml, robots.txt, canonical NAP everywhere
- Form: multi-step CMA capture, posts to Web3Forms, captures gclid + UTM for ad attribution
- Conversion hooks: `cma_lead` event on submit, `data-conversion="call"` + call event on every
  phone link. Fires only when an Ads/GA id is set (see env below). Buyers/renters negative-keyword
  themes documented in the research brief; campaign launches PAUSED per Apex defaults.

## Env to set before launch (`.env.local` or host env)
- `NEXT_PUBLIC_WEB3FORMS_KEY` — REQUIRED or leads are not delivered (form logs to console until set)
- `NEXT_PUBLIC_ADS_ID` (AW-XXXX), `NEXT_PUBLIC_ADS_CMA_SENDTO`, `NEXT_PUBLIC_ADS_CALL_SENDTO`
- `NEXT_PUBLIC_GA4_ID` (G-XXXX)
- `NEXT_PUBLIC_BASE_PATH=/chris-karapatsakis-web` ONLY if hosting on a GitHub Pages project page;
  leave unset for the domain root (CNAME already set to chriskarapatsakis.com).

## CONFIRMED by Nick
- Phone: (734) 634-7056 (matches the LED sign on his office and his Nextdoor profile)
- Office: 44245 Ford Rd, Ste 101, Canton MI 48187 (his own branded office)

## Still needs Chris/Ethan confirmation (flags in `src/lib/constants.ts`)
1. Exact licensed broker entity for the footer (currently "Remerica Hometown III").
2. REALTOR® usage — `BRAND.isRealtor=true`; set false if not a current NAR member.
3. License number — optional in MI; `BRAND.licenseNumber` is empty.
4. Dollar volume — site intentionally OMITS "$350M" (his own LinkedIn/Zillow show lower, unverifiable).
   It leads with "hundreds of homes" + sourced stats (700+ transactions, ~84% seller-side, top 7%
   Plymouth, 5.0 Zillow/1 review). Only add a dollar headline if Chris stands behind it in writing.
5. Guarantee terms — confirm Remerica allows no-fee cancellations on his say-so.
6. Home warranty — confirm it is truly every seller with no hidden conditions.
7. Languages — confirm English + Arabic.
8. "Nearly 30 years" framing (vs a hard "28").
9. City market figures are mid-2026 estimates — refresh quarterly.
10. Recommend standing up a Google Business Profile with this exact NAP (biggest near-me + review lever).

## Premium video upgrade (optional)
For higher-end cinematic clips later, run `higgsfield auth login` (Ultra plan) and I can generate
Seedance 2.0 clips to replace the Veo ones.
