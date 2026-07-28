# Plan — Scroll-fill "Aluminium. Glass. Steel." hero headline

## Goal
Replace the first hero slide's "Aluminium. Glass. Steel." headline with a bold, scroll-scrubbing text-fill animation that uses the existing `ScrollFillText` component.

## What I will change

### 1. HeroSlider.tsx — new headline
- Remove the current `TypingText` for the first slide.
- Render the headline as three stacked lines inside the same `h1`:
  - **Aluminium.** — fills with brand orange
  - **Glass.** — fills with brand blue
  - **Steel.** — fills with brand orange
- Keep the existing slide-level `AnimatePresence` fade/slide animation so the first slide still transitions in the same way as slides 2 and 3.
- Increase the first slide headline size to match the other slides (bold, large, uppercase display type).

### 2. ScrollFillText.tsx — optional target prop
- Extend `ScrollFillText` so it can accept an external `target` ref.
- This lets the first slide headline fill based on the whole hero section's scroll progress, not just the text itself.
- When no target is passed, it keeps its existing behaviour.

### 3. Scroll range
- The hero section will act as the scroll target.
- Fill will progress from outline to full solid colour as the user scrolls from the hero top entering the viewport down to the hero bottom leaving the viewport.
- On mobile the fill will still work but the text may need a slightly smaller size to avoid overlapping the 3D badge.

### 4. Mobile badge check
- Verify the larger headline doesn't clash with the rotating 3D badge on the bottom-right of mobile/tablet.
- If needed, adjust badge opacity or margin slightly.

## Verification
- Scroll down the homepage; the first slide text should start outlined and fill in with orange/blue.
- Slide 2 and 3 keep their current behaviour unchanged.
- No overflow, no overlap with badge, reduced-motion fallback works.

## Out of scope
- No changes to other pages, services, or domain/DNS.
- No new dependencies.