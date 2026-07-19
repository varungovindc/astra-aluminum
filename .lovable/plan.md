# Astra Group — Multi-Page Corporate Website

Premium, animated multi-page site for Astra Group of Companies. Four main routes only. Mission & Vision content lives inside the Home and About Us pages — not as its own route.

## Route Structure

```
src/routes/
  __root.tsx      # Shared shell: nav + footer + <Outlet />, base meta
  index.tsx       # / — Home
  about.tsx       # /about — About Us (includes Mission & Vision)
  services.tsx    # /services — Services grid (detail pages deferred)
  contact.tsx     # /contact — Contact Us
```

Nav: Home, About Us, Services, Contact. Active state via `activeProps`. Each route sets its own `title`, `description`, `og:title`, `og:description`. `og:image` only on leaf routes.

Per-service detail routes (`/services/$slug`) are intentionally out of scope for this iteration and will be planned separately.

## Design System

`src/styles.css` `@theme` tokens (oklch):
- `--brand-orange` (~#E85D2C from logo)
- `--brand-blue` (~#3BB4E5 from logo)
- `--ink` deep charcoal `#0B0B0D`
- `--surface` white, `--surface-alt` light grey, `--surface-dark` charcoal band
- Registered in `@theme inline` as `--color-brand-orange`, `--color-brand-blue`, `--color-ink`, `--color-surface-alt`, `--color-surface-dark`.

Typography — `<link>` in `__root.tsx` head (never remote `@import` in CSS):
- Display: **Syncopate** (closest to 29LT Bukra's bold geometric look)
- Body: **Montserrat** 400/500/600/700
- Registered as `--font-display` / `--font-body` in `@theme`; body uses Montserrat, h1–h3 + display use Syncopate.

## Dependencies

- `bun add framer-motion`
- Reuse shadcn button, lucide-react icons.

## Shared Components

```
src/components/astra/
  Nav.tsx                 # Sticky blur nav, logo + <Link> nav + CTA
  Footer.tsx              # Two-company block, socials, contact placeholders
  HeroSlider.tsx          # 3-slide slider (home) with TypingText + CTA
  ServiceCard.tsx         # Card w/ hover glow + accent bar
  Reveal.tsx              # Fade-in + slide-up on viewport enter
  PopIn.tsx               # Scale-in pop for cards/metrics
  TypingText.tsx          # Character-by-character typing
  ScrollColorHeading.tsx  # Large text lerps grey → brand on scroll
  SectionHeading.tsx      # Eyebrow + big display headline
  PageHero.tsx            # Interior-page hero band
src/lib/
  astra-content.ts        # Slides, services list, mission/vision, company info
src/assets/
  logo.png.asset.json     # Lovable-assets pointer for uploaded logo
```

## Page Contents

**Home (`/`)**
- Full-screen 3-slide `HeroSlider`:
  1. "Astra Group of Companies" — typing on "Aluminium & Glass Solutions"
  2. "Advanced Cladding & Facades"
  3. "Smart Technical Services"
  Each slide: eyebrow, huge display headline, subline, primary CTA (orange) + ghost secondary.
- About teaser strip → link to /about.
- Featured 6 services (Reveal + PopIn stagger) → link to /services.
- **Mission & Vision teaser band** (dark surface) using `ScrollColorHeading` — short Mission line + short Vision line side-by-side, links to About Us for more.
- Closing CTA band → /contact.

**About Us (`/about`)**
- `PageHero` with breadcrumb and page title.
- Welcome + Who Are We merged into split layout: bold headline + fact chips (Established 2023, Dubai HQ, UAQ branch) + body copy.
- Large pull-quote card with orange left border: "We believe that every project deserves the highest standards of craftsmanship, safety, and professionalism." — Sankaranarayanan, Managing Director.
- **Mission section**: eyebrow "Our Mission", huge display line — "We deliver aluminium, glass, and smart technical solutions built to the highest standards of craftsmanship, safety, and professionalism." Uses `ScrollColorHeading` (grey → brand orange).
- **Vision section**: eyebrow "Our Vision", huge display line — "To be the company of first choice for all stakeholders — lean and agile in adopting work processes." Uses `ScrollColorHeading` (grey → brand blue).
- Values row (Craftsmanship, Safety, Professionalism, Agility) as PopIn cards.

**Services (`/services`)**
- `PageHero` with title + intro.
- Full responsive grid (1/2/3/4 cols) of all services: Curtain wall systems, Glass works, Aluminium/Glass doors & windows, Frameless glass doors, Aluminium cladding (ACP & solid panel, Stainless Steel), Ventilated facade systems, Thermal break profiles, Interior glass partitions, Glass ceramic printing, Shower cubicles, Skylights, Gypsum works, Painting, False ceiling, Electromechanical installation, Plumbing & sanitary works.
- Cards: number, lucide icon, title, one-line summary. Hover: elevate, glowing border alternating orange/blue, accent bar animates in from left.
- Cards are non-linking for now (detail pages deferred); `data-*` slug hooks retained so per-service routing can be added later without refactor.
- Closing CTA band → /contact.

**Contact Us (`/contact`)**
- `PageHero`.
- Two side-by-side company cards:
  - Astra Aluminium and Glass Works — Umm Al Quwain
  - Astra Smart Technical Services LLC — Dubai
  Each with address / phone / email placeholders.
- Social icons row.
- Simple non-functional contact form scaffold (frontend only; no submission wiring).

## Animations (Framer Motion)

- `Reveal`: `initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}}` ~0.6s, `viewport={{once:true, margin:"-10%"}}`.
- `PopIn`: `scale 0.9 → 1` spring; parent variants stagger cards.
- `TypingText`: interval state, blinking CSS caret.
- `ScrollColorHeading`: `useScroll` + `useTransform` interpolates `color` grey → brand hex.
- Slider transitions via `AnimatePresence` mode="wait", opacity + subtle y.
- Respect `prefers-reduced-motion` (short-circuit variants).

## SEO / Head

Each route: title, description, og:title, og:description, matching twitter:card. Only leaf routes may set og:image (none forced — hosting injects screenshot fallback). Single H1 per page.

## Out of Scope

- Per-service detail pages (planned later).
- Backend, Cloud, functional form submission, auth, database, CMS.
