# Design System — nghiem.thanh

## Product Context
- **What this is:** Personal portfolio and CV for Nguyen Nghiem Thanh, Senior Fullstack Software Engineer
- **Who it's for:** Enterprise recruiters and engineering leads (Toyota, SAP, DNP Japan clients)
- **Space/industry:** Developer portfolio
- **Project type:** Marketing site / personal branding

## Aesthetic Direction
- **Direction:** Precision Minimal
- **Decoration level:** Intentional (starfield in hero earns its place; subtle noise grain on cards)
- **Mood:** A senior engineer's desk. Dark, intentional. Enterprise architect, not terminal hacker.
- **Anti-patterns avoided:** Purple gradients, 3-column icon grids, decorative blobs, bubbly radius everywhere

## Typography
- **Display/Hero:** System UI / inherited — large, bold, -0.02em tracking, 1.1 leading
- **Section headings:** Geist Mono (`--font-mono`) — weight 600, fn-title style
- **Body:** DM Sans (`--font-inter`) — 400/500, 1.65 leading
- **Mono labels:** Geist Mono — uppercase, 0.1em letter-spacing, accent color
- **Code:** Geist Mono
- **Loading:** next/font/google (zero layout shift)

### Type Scale
| Token | Size | Usage |
|-------|------|-------|
| hero | clamp(2.4rem, 5.5vw, 4.75rem) | Hero headline |
| section-title | clamp(2rem, 4vw, 3.5rem) | Section headings |
| fn-title | clamp(1.75rem, 3vw, 2.75rem) | Function-style headings |
| xl | 22px | Card titles |
| base | 15–16px | Body text |
| sm | 13px | Secondary text |
| xs / mono-label | 11–12px | Labels, badges, uppercase |

## Color
- **Approach:** Restrained — one accent, semantic only where needed
- **Background:** `#07090a` — near-black, no tint
- **Surface:** `#0c0e10` — neutral dark (not greenish)
- **Card:** `#0c0e10` with glass overlay (`rgba(34,211,238,0.03)`)
- **Accent:** `#22d3ee` (cyan-400) — colder than green, more architectural
- **Accent dim:** `rgba(34, 211, 238, 0.08)` — for badge backgrounds
- **Text primary:** `#e2e8f0` — cool white, pairs with cyan
- **Text muted:** `#64748b` — slate-500
- **Border:** `rgba(34, 211, 238, 0.10)` default, `0.12` on cards
- **Selection:** `rgba(34, 211, 238, 0.20)`

### Why Cyan Not Green
Green is the default dev portfolio color — it reads "template." Cyan is colder, more architectural. Targets enterprise clients (Toyota/SAP/DNP), not the indie dev audience.

## Spacing
- **Base unit:** 8px
- **Density:** Comfortable
- **Scale:** 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64px

## Layout
- **Approach:** Grid-disciplined with full-width sections
- **Container:** `container-max` — no max-width cap, responsive horizontal padding
- **Padding scale:** px-4 → sm:px-8 → lg:px-16 → xl:px-24 → 2xl:px-32
- **Nav:** Full-width, links absolutely centered, logo left, social right

## Border Radius
| Token | Value | Usage |
|-------|-------|-------|
| sm | 4px (`rounded`) | Badges, small elements |
| md | 8px (`rounded-lg`) | Buttons, inputs |
| lg | 12px | Timeline dots, small cards |
| xl | 16px (`rounded-2xl`) | Cards, panels |
| full | 9999px | Pills, avatar |

## Motion
- **Approach:** Intentional — scroll-triggered entrance only
- **Enter:** ease-out, 700ms (sections), 300ms (elements)
- **Stagger:** 80–200ms between list items
- **Hover:** 150–200ms micro transitions (translate-y, border-color, opacity)
- **Principle:** `prefers-reduced-motion` respected in StarField

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-20 | Cyan accent (#22d3ee) over green (#00e676) | Green reads "template"; cyan is architectural, matches enterprise positioning |
| 2026-04-20 | DM Sans for body, Geist Mono for headings/labels | Geist signals Next.js expertise; DM Sans is warm and readable |
| 2026-04-20 | Removed user-select:none from body | Was blocking recruiters from copying email/content |
| 2026-04-20 | No max-width cap on container | Large monitors deserve full-width layouts |
| 2026-04-20 | Starfield kept in hero | Distinctive and earned; not generic decoration |
