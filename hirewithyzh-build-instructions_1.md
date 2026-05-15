# hirewithyzh — Agent Build Instructions

> A simple two-page personal-brand agency website. Frontend only. No backend, no database, no auth.

---

## 1. Project Overview

**Brand:** hirewithyzh — "Hire with Ease. Top Filipino Talent. Global Impact."
**Type:** Personal-brand recruitment / VA staffing agency — marketing site only.
**Pages:** Home, Career.
**External integrations:** Two Google Forms (one for "Discovery Call" CTA, one for the Career page apply button). Both opened in a new tab via `target="_blank"`.

**Tone:** Confident, corporate, trustworthy. Refined editorial feel — not generic SaaS.

---

## 2. Tech Stack (Locked)

| Layer | Tech |
|---|---|
| Framework | **Next.js 14+** (App Router) + **React 18+** + **TypeScript** |
| Styling | **Tailwind CSS** + CSS variables for design tokens |
| Fonts | `next/font/google` — Fraunces (display) + Geist (body) + JetBrains Mono (accents) |
| Animation | `motion` (Framer Motion), used sparingly |
| Deployment | **Vercel** |

No backend. No API routes. No database. Forms are external Google Forms — the site just links to them.

---

## 3. Repository Structure

Single Next.js app. No monorepo needed.

```
hirewithyzh/
├── app/
│   ├── layout.tsx                  # Root layout — fonts, header, footer
│   ├── page.tsx                    # Home page
│   ├── career/
│   │   └── page.tsx                # Career page
│   ├── globals.css                 # Design tokens + base styles
│   └── not-found.tsx               # 404 page
├── components/
│   ├── layout/
│   │   ├── Header.tsx              # Logo left, nav + CTA right
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Banner.tsx              # Home hero
│   │   ├── About.tsx               # About agency
│   │   ├── Services.tsx            # Services grid
│   │   └── CareerCTA.tsx           # Career page content + button
│   └── ui/
│       ├── Button.tsx              # Primary + secondary variants
│       └── Container.tsx           # Max-width wrapper
├── lib/
│   └── config.ts                   # Site config (links, copy, services list)
├── public/
│   ├── logo.png                    # Provided logo
│   └── favicon.ico
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
├── package.json
└── README.md
```

**Why centralize copy in `lib/config.ts`?** So the owner can update services, the Google Form URL, contact email, etc. without touching component code. One file to edit.

---

## 4. Site Configuration (`lib/config.ts`)

Everything that might change lives here. Example shape:

```ts
export const siteConfig = {
  name: "hirewithyzh",
  tagline: "Hire with Ease",
  subtagline: "Top Filipino Talent. Global Impact.",

  // External links — fill in actual URLs before deploy
  discoveryCallUrl: "https://forms.gle/PLACEHOLDER_DISCOVERY",
  careerApplyUrl: "https://forms.gle/PLACEHOLDER_CAREER",

  // Contact (for footer)
  email: "hello@hirewithyzh.com",     // placeholder, owner to confirm
  socials: {
    linkedin: "",                      // optional, leave empty to hide
    facebook: "",
    instagram: "",
  },

  // Services — easy to add/remove
  services: [
    {
      title: "Executive Virtual Assistants",
      description: "Calendar, inbox, travel, and operations support for busy founders and executives.",
    },
    {
      title: "Customer Support Specialists",
      description: "Trained, empathetic agents who represent your brand across email, chat, and voice.",
    },
    {
      title: "Marketing & Social Media",
      description: "Content scheduling, community management, and creative production from a remote team.",
    },
    {
      title: "Bookkeeping & Admin",
      description: "Reliable financial and administrative back-office support.",
    },
    // Owner can add more
  ],

  // Nav menu
  nav: [
    { label: "Home", href: "/" },
    { label: "Career", href: "/career" },
  ],
};
```

---

## 5. Pages

### 5.1 Home (`/`)

Three sections, stacked, in this order:

1. **Banner (Hero)**
2. **About the agency**
3. **Services**

### 5.2 Career (`/career`)

Single page with brief content and one big CTA button linking to the Google Form. No form on the page itself.

---

## 6. Component Specs

### 6.1 Header (`components/layout/Header.tsx`)

- Sticky to top. Background `--color-bone` with a hairline bottom border that appears only after the user scrolls past 8px (use a scroll listener or `IntersectionObserver`).
- **Left:** Logo, ~40px tall, links to `/`.
- **Right:** Nav links (Home, Career) inline, followed by the **Discovery Call** button (primary variant).
- Discovery Call button opens `siteConfig.discoveryCallUrl` in a new tab (`target="_blank" rel="noopener noreferrer"`).
- Active nav link gets a 1px burgundy underline (only the active one — don't underline on hover for others; use a subtle color shift to `--color-ink` instead).
- **Mobile (< 768px):** hide nav links, keep logo + CTA visible. The CTA shrinks to "Discovery Call →" text-only or icon-only — the user must always be one tap from the form. Optional: add a hamburger to toggle a slide-down panel with Home/Career links, but the CTA stays visible at all times.

### 6.2 Footer (`components/layout/Footer.tsx`)

- Background `--color-ink` (near-black), text `--color-bone`.
- Three regions:
  - **Left:** inverted logo (white version) + tagline in small body text.
  - **Center:** nav links (Home, Career) and the Discovery Call link.
  - **Right:** email + social icons (only render socials whose URLs are non-empty in config).
- Bottom strip: `© 2026 hirewithyzh. All rights reserved.` in `--color-slate`.

### 6.3 Banner (Home Hero) — `components/sections/Banner.tsx`

Asymmetric 12-column layout, not centered.

- **Left (cols 1–7):**
  - Eyebrow: `PERSONAL RECRUITMENT, GLOBAL REACH`
  - H1: `Hire top Filipino talent, with <em>ease</em>.` — the word "ease" in Fraunces italic, color `--color-burgundy`.
  - Lead paragraph (body-lg): 1–2 sentences explaining what the agency does.
  - Two buttons inline: **Discovery Call** (primary, opens Google Form) and **Our services** (secondary, anchor-link to `#services`).
- **Right (cols 8–12):**
  - A vertically-aligned stat/quote block. Three stats stacked: e.g. `500+ talents placed`, `12 countries served`, `100% Filipino-sourced`. Each stat: large Fraunces number, eyebrow label below.
  - Below the stats: a short pull quote in serif italic.
- Section padding: `py-24 md:py-32`.
- Background: `--color-bone`.

### 6.4 About Agency — `components/sections/About.tsx`

- Section background: subtle shift — use `--color-paper` (clean white) here so it visually separates from the banner.
- Two-column layout, 12-col grid: left col (cols 1–4) has an eyebrow `— About hirewithyzh` and an h2; right col (cols 5–12) has 2–3 paragraphs of body copy.
- Below the copy, a horizontal row of three "value" pillars: just text — a short label (eyebrow style) + one sentence each. No icons. Use a thin burgundy top border on each pillar to anchor them visually.
- Example pillars: `Vetted Talent`, `Time Zone Aligned`, `Personal Service`.

### 6.5 Services — `components/sections/Services.tsx`

- Section id: `services` (for hero anchor link).
- Background: `--color-bone`.
- Header: eyebrow `— What we do`, h2 `Services tailored to how you actually work.`
- Grid: 2 columns on tablet, 3 on desktop, 1 on mobile. Gap-8.
- Each service card from `siteConfig.services`:
  - White (`--color-paper`) background
  - 1px hairline border, **no drop shadow**
  - Padding `p-8`
  - Inside: a small number prefix in JetBrains Mono (e.g. `01 —`), the service title (h3, Fraunces), description (body)
  - Hover: border darkens to `--color-ink`, a 2px burgundy bar slides in along the bottom edge (CSS transform, 200ms)
- Below the grid, a closing line + Discovery Call button repeated.

### 6.6 Career Page — `components/sections/CareerCTA.tsx`

Single section, full viewport-height feel (but not literally `100vh` — use `min-h-[70vh]` so it breathes on tall monitors).

- Background: `--color-bone`.
- Centered content column, max width 720px.
- Eyebrow: `— Join the team`
- H1: `We're looking for great people.` (Fraunces, large)
- Body: 2 short paragraphs.
  - Paragraph 1: who you're looking for (Filipino professionals, remote-first, etc.).
  - Paragraph 2: what to expect after applying ("We review every application personally. Expect to hear back within 5 business days.").
- A single primary button: **Apply now →** — opens `siteConfig.careerApplyUrl` in a new tab.
- Below the button, in small slate text: `Application form opens in a new tab. Takes about 5 minutes to complete.`

### 6.7 Button (`components/ui/Button.tsx`)

Two variants: `primary` and `secondary`. Plus an `as` prop so it can render as `<a>` (for external links) or `<Link>` (for internal nav).

- Primary: solid `--color-burgundy` bg, `--color-bone` text. Hover: `--color-burgundy-deep`.
- Secondary: transparent bg, 1px solid `--color-ink`, ink text. Hover: ink fill, bone text.
- Border-radius: `2px` max — keep it sharp/corporate. No pill shapes.
- Padding: `px-6 py-3` standard; `px-8 py-4` for hero CTAs.
- Font: Geist 500, letter-spacing slightly tight (-0.01em).
- All external-link buttons must include `target="_blank" rel="noopener noreferrer"` and a trailing `→` glyph.

### 6.8 Container (`components/ui/Container.tsx`)

Simple max-width wrapper: `max-w-7xl mx-auto px-6 md:px-8`. Used by every section.

---

## 7. Design System

### 7.1 Aesthetic Direction

**Refined editorial-corporate.** Think the website of a boutique executive search firm, not a generic SaaS landing page. Generous whitespace, confident typography, deep burgundy as a sparing accent — not a paint-bucket fill. Light theme with weight and gravity.

**What to avoid:**
- Purple gradients. Don't.
- Inter / Roboto / Poppins / Montserrat / Space Grotesk fonts.
- Floating cards with soft drop shadows everywhere.
- Stock "diverse team high-fiving" hero images.
- Three-column feature grids with circle icons.
- Pure `#FFFFFF` as the page background.

### 7.2 Color Tokens (in `globals.css`)

```css
:root {
  /* Brand — pulled from logo */
  --color-burgundy:        #6B1320;
  --color-burgundy-deep:   #4A0D17;
  --color-burgundy-soft:   #F5E6E8;

  /* Neutrals */
  --color-ink:             #1A1A1A;
  --color-graphite:        #3D3D3D;
  --color-slate:           #6B6B6B;
  --color-bone:            #FAF7F2;   /* page background — warm off-white, NOT pure white */
  --color-paper:           #FFFFFF;   /* cards / contrast sections only */
  --color-hairline:        #E6E1D8;
}
```

The warm off-white (`--color-bone`) is the single most important visual choice. Do not substitute `#FFFFFF` for the page background.

### 7.3 Typography

Load via `next/font/google` in `app/layout.tsx`:

- **Fraunces** — variable serif (display). Weights 400–600, opsz 9–144. CSS var: `--font-display`.
- **Geist Sans** — body/UI. Weights 400, 500, 600. CSS var: `--font-body`.
- **JetBrains Mono** — small accents (stat numbers, service number prefixes). Weight 400. CSS var: `--font-mono`.

If Geist isn't available on Google Fonts at build, fall back to **IBM Plex Sans**. Do NOT substitute Inter.

**Type scale:**

```
h1:       clamp(2.75rem, 6vw, 5rem)    Fraunces 500, line-height 1.05, letter-spacing -0.02em
h2:       clamp(2rem, 4vw, 3rem)       Fraunces 500, line-height 1.1
h3:       1.5rem                       Fraunces 500
body-lg:  1.125rem                     Geist 400, line-height 1.6
body:     1rem                         Geist 400, line-height 1.65
small:    0.875rem                     Geist 500
eyebrow:  0.75rem                      Geist 600, uppercase, letter-spacing 0.12em
```

Headings should mix the serif with a single italic word for emphasis — e.g. `Hire top Filipino talent, <em>everywhere</em>.` That italic-in-serif is part of the brand voice.

### 7.4 Spacing & Layout

- Max content width: 1280px (`max-w-7xl`).
- Section vertical padding: `py-24 md:py-32` desktop, `py-16` on mobile.
- Grid: 12-column with `gap-8`.
- The hero is **not** centered. Use asymmetry — magazine-spread feel.

### 7.5 Motion

Use `motion` (Framer Motion). Three approved patterns only:

1. **Page-load stagger** on the home hero — headline reveals word-by-word, 40ms stagger, opacity 0→1 + 8px y-shift.
2. **Scroll-triggered fade-up** on section headers — `viewport={{ once: true }}`, 24px y, 600ms ease-out.
3. **Hover micro-interaction** on service cards — burgundy bar sliding in along the bottom edge (CSS transform, 200ms).

No parallax. No floating shapes. No marquee tickers. No typewriter effect.

### 7.6 Logo Usage

The provided logo: arrow/figure motif above `hirewithyzh` wordmark.

- Header: ~40px tall.
- Footer: ~56px tall, white/inverted variant on dark background. If only the dark-on-light version is provided, use CSS filter `filter: invert(1) brightness(2)` as a temporary measure or have the owner export a white version.
- Don't crop, recolor, or rotate.
- Use Next.js `<Image>` component for both. Set `priority` on the header logo.

---

## 8. Reference Layout — Home Page

```
┌────────────────────────────────────────────────────────────┐
│  [logo]                 Home  Career  [Discovery Call →]  │  Header (sticky, bone bg)
├────────────────────────────────────────────────────────────┤
│                                                            │
│   EYEBROW: PERSONAL RECRUITMENT, GLOBAL REACH              │
│                                                            │
│   Hire top Filipino                       ┌──────────────┐ │
│   talent, with                            │  500+        │ │
│   <em>ease</em>.                          │  TALENTS     │ │
│                                           │  ──────────  │ │
│   Lead paragraph in body-lg here.         │  12          │ │
│                                           │  COUNTRIES   │ │
│   [Discovery Call →]  [Our services]      │  ──────────  │ │
│                                           │  "quote"     │ │
│                                           └──────────────┘ │
│                                                            │
├════════════════════════════════════════════════════════════┤  (color shift — paper bg)
│   — About hirewithyzh                                      │
│                                                            │
│   We're a personal-                  Body paragraph 1.     │
│   brand recruitment                                        │
│   agency.                            Body paragraph 2.     │
│                                                            │
│   ──────────   ──────────   ──────────                     │
│   VETTED       TIME-ZONE    PERSONAL                       │
│   TALENT       ALIGNED      SERVICE                        │
│   one line     one line     one line                       │
├────────────────────────────────────────────────────────────┤
│   — What we do                                             │
│   Services tailored to how you actually work.              │
│                                                            │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐                 │
│   │ 01 —     │  │ 02 —     │  │ 03 —     │                 │
│   │ Title    │  │ Title    │  │ Title    │                 │
│   │ desc     │  │ desc     │  │ desc     │                 │
│   └──────────┘  └──────────┘  └──────────┘                 │
│                                                            │
│   Ready to hire?   [Discovery Call →]                      │
├────────────────────────────────────────────────────────────┤
│  FOOTER (ink bg, bone text)                                │
│  [logo white] Tagline    Home Career Discovery   email/soc │
│  ── © 2026 hirewithyzh                                     │
└────────────────────────────────────────────────────────────┘
```

---

## 9. Build Order

Each step independently testable.

1. **Scaffold:** `npx create-next-app@latest hirewithyzh --typescript --tailwind --app --eslint`.
2. **Fonts & tokens:** set up `app/layout.tsx` with `next/font/google` for the three fonts; add the CSS variables and base styles to `globals.css`; extend `tailwind.config.ts` to expose the color tokens as Tailwind utilities (e.g. `bg-bone`, `text-burgundy`).
3. **Config file:** create `lib/config.ts` with placeholder URLs and the services array.
4. **UI primitives:** build `Button` and `Container`. Verify in isolation.
5. **Layout chrome:** build `Header` and `Footer`. Wire into `app/layout.tsx`. Verify the Discovery Call button opens the Google Form in a new tab.
6. **Home page:** build `Banner`, `About`, `Services` in that order. Assemble in `app/page.tsx`.
7. **Career page:** build `CareerCTA`. Assemble in `app/career/page.tsx`.
8. **Polish:** 404 page, mobile responsiveness check at 375px, scroll-shadow on header, motion micro-interactions.
9. **Metadata:** set `metadata` exports in `layout.tsx` and each page — title, description, OG image (a screenshot of the hero will do for v1).
10. **Deploy to Vercel:** push to GitHub → Vercel import → deploy. No env vars needed.

---

## 10. Acceptance Criteria

Before considering the build complete, verify:

- [ ] Both pages render correctly at 375px, 768px, 1280px, and 1920px viewports.
- [ ] The Discovery Call button (header) and Apply button (career page) both open the correct Google Form URL in a new tab.
- [ ] Pure white (`#FFFFFF`) is **not** used as the page background — `--color-bone` is used.
- [ ] Inter / Roboto / Poppins / Montserrat are **not** loaded anywhere. Check the Network tab.
- [ ] Lighthouse on Vercel preview: Performance ≥ 95, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
- [ ] All external links have `target="_blank" rel="noopener noreferrer"`.
- [ ] No `console.error` or `console.warn` in the browser console on either page.
- [ ] The header logo links back to `/`.
- [ ] On mobile, the Discovery Call CTA remains accessible without scrolling (it's in the sticky header).
- [ ] `lib/config.ts` is the only place where copy and external URLs are hardcoded — components import from it, not duplicate it.
- [ ] The `services` array can be extended by adding one object — the grid auto-flows.

---

## 11. Deployment Notes

- Push to GitHub → import on Vercel → accept defaults → deploy.
- No environment variables required for v1.
- Once a custom domain is purchased (e.g. `hirewithyzh.com`), add it in Vercel project settings → Domains. Vercel handles SSL automatically.
- After deploy, replace the placeholder Google Form URLs in `lib/config.ts` with the real ones, push, and Vercel re-deploys automatically.

---

## 12. Future-Proofing Notes (don't build now, just don't paint yourself in)

- **Blog or insights section:** if added later, create `app/insights/` and re-use the `Container` and section patterns established here. Pull content from MDX files.
- **Testimonials:** when ready, add a `Testimonials` section component between `About` and `Services` on the home page, and a `testimonials` array in `lib/config.ts`.
- **Real applicant tracking:** if the Google Form gets unwieldy, a backend (Express + MongoDB) can be added as a separate API later. The current site won't need to change — only the button URLs.
- **CMS:** if the owner wants to update services without touching code, swap `lib/config.ts` for a fetch to Sanity, Contentful, or Notion. The component contracts stay the same.

---

**End of instructions.** Simple done well is the hardest brief. Build with intentionality.
