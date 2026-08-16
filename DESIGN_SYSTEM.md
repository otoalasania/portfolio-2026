# Design System

This is the source of truth for this portfolio's visual language. Read it
before adding, removing, or restyling any section so new work stays
consistent with what's already here. If a new pattern is genuinely needed,
add it here too — this file should always reflect the current, real state
of the CSS, not a plan or a wish list.

All values below are pulled directly from the codebase (`app/globals.css`,
`app/components/ui.module.css`, and the per-component `*.module.css`
files). If this doc and the code ever disagree, the code wins — fix this
file to match.

## Layout

- Page content column: `max-width: 640px`, centered (`margin: auto`),
  `padding: 0 16px` → inner content width is **608px**. This is the frame
  every section lives in by default (`PortfolioHome.module.css .content`).
- Section top spacing: `margin-top: 96px` (`ui.module.css .section`,
  the default for `<Section>`). Individual sections may override via the
  `style` prop when they need tighter/looser spacing (e.g. Work uses 40px).
- Section label → supporting text gap: **16px**.
- The **only** sections allowed to break out of the 640px column are ones
  that explicitly need a wide canvas (currently: Work). Use the full-bleed
  pattern below — don't widen the whole page.

### Full-bleed breakout pattern (Work section)

```css
.stage {
  position: relative;
}
@media (min-width: 640px) {
  .stage {
    left: 50%;
    width: 100vw;
    margin-left: -50vw;
    overflow: hidden; /* contain rotated/overlapping children */
  }
}
```
Scope the breakout to `min-width: 640px` — on phone, content should stay
inside the normal column.

### Breakpoints

Two breakpoints are in active use, mobile-first:

- **640px** — the main "phone vs. everything else" split. Used everywhere
  (Header, Profile, Experience, Skills, Ventures, Writing, Personal,
  Contact, Work).
- **1024px** — desktop-only refinements layered on top of the 640px
  tablet state. Currently only used for Work's hover-scale interaction
  (tablet gets tap feedback only, desktop gets hover + tap).

Don't invent a third breakpoint unless a spec explicitly calls for
different behavior between 640 and 1024 elsewhere.

## Color tokens

Defined in `app/globals.css` as CSS variables on `:root`, with dark-mode
overrides under `@media (prefers-color-scheme: dark)`. Always reference
the variable, never a raw hex, so components stay theme-aware automatically.

| Token | Light | Dark | Used for |
|---|---|---|---|
| `--background` | `#ffffff` | `#0d0d0d` | page background |
| `--foreground` | `#121212` | `#ffffff` | primary text, bright labels |
| `--foreground-subdued` | `#7e7e7e` | `#8f8f8f` | secondary/muted text, icons |
| `--hover-surface` | `#fafafa` | `#141414` | row/card hover background (Ventures, Writing, Contact socials) |
| `--player-panel` | `#f2f2f2` | `#1f1f1f` | Personal music card's inner panel |
| `--input-bg` | `#f8f8f8` | `#141414` | form input/textarea background |
| `--input-border` | `#f8f8f8` | `#1c1c1c` | form input/textarea border |
| `--button-bg` | `#f8f8f8` | `#1c1c1c` | primary button (Send message) |
| `--button-bg-hover` | `#f2f2f2` | `#212121` | primary button hover |
| `--focus-ring` | `rgba(18,18,18,.1)` | `rgba(255,255,255,.1)` | input focus ring |
| `--color-accent-online` | `#16bf5e` | (same) | status dot |
| `--color-white` / `--color-black` | fixed `#fff`/`#000` | (same) | elements that must stay one color regardless of theme (e.g. project card white mat, Tile badge text) |
| `--white-03` … `--white-90` | `rgba(255,255,255,α)` | (same) | legacy translucent overlays — prefer a named token above for anything new |
| `--black-05` … `--black-70` | `rgba(0,0,0,α)` | (same) | shadows, translucent dark overlays |

**When adding a new surface color** (a new card/panel background, a new
hover state): add a named `--token` pair to `globals.css` (light value in
`:root`, dark value in the dark media query) rather than hardcoding a hex
or reaching for the raw `--white-*`/`--black-*` alpha scale. Check
first whether an existing token (`--hover-surface`, `--player-panel`,
etc.) already matches the color you need — several components intentionally
share the same token.

## Typography

Two font families, both loaded via `next/font/google` in `app/layout.tsx`:

- **Inter** (`--font-inter`) — the body/content font. Default on `<body>`.
- **Geist Mono** (`--font-geist-mono`) — reserved for section overlines,
  date/timestamps, and small utility text (header clock, dates, "STACK"/
  "WORK"-style labels). Never use it for paragraph copy.

Two typography patterns cover almost everything on the page:

**Section label** (`ui.module.css .sectionLabel`, applied by every
`<Section title="...">`):
```css
font-family: var(--font-geist-mono), monospace;
font-size: 12px;
font-weight: 400;
line-height: 16px;
letter-spacing: 0.04em;
text-transform: uppercase;
opacity: 0.7;
color: var(--foreground-subdued);
```
Same recipe is reused ad hoc for other mono utility text (header clock,
footer location/weather) even where it isn't literally a `<SectionLabel>`.

**Body text** (`ui.module.css .subtitle`, and reused across nearly every
section's paragraphs — role, bio, descriptions, titles):
```css
font-family: var(--font-inter); /* inherited */
font-size: 16px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.01em;
color: var(--foreground) or var(--foreground-subdued);
```
`foreground` for primary/emphasized text (names, titles, values),
`foreground-subdued` for secondary text (descriptions, roles, dates,
placeholders). This 16/400/24/0.01em combo is the default for *all* body
copy — only drop to smaller sizes (13px/18px line-height, or 14px mono)
for genuinely secondary micro-text like footer captions or a reading-time
label. Don't introduce a new arbitrary font-size without checking if
16px already covers it.

## Spacing scale

Gaps and margins in this codebase come from a small set of repeated
values — reach for one of these before picking an arbitrary number:

`4px · 6px · 8px · 12px · 16px · 24px · 32px · 40px · 48px · 64px · 80px · 96px`

Common meanings:
- `16px` — label-to-description gap; side padding; icon-to-text gaps
- `24px` — profile→bio gap; caption row gaps
- `32px` — gap between repeated list items (Experience entries); form-block→socials gap
- `40–48px` — gap between major sub-blocks within a section (Personal's music→photos)
- `96px` — default gap *between* sections (`.section` margin-top)

## Border radius scale

`4px · 6px · 8px · 10px · 12px · 80px (pill) · 9999px (circle)`

- `6px` — small badges/logo tiles (company Tile, inline logo/flag badges)
- `8px` — medium panels (music player inner panel)
- `10–12px` — cards (project cards, photo cards, avatar, music card outer)
- `80px` / `9999px` — pill buttons and circular elements (submit button, status dot)
- `0` — explicitly flat elements (Ventures/Writing rows — hover surface,
  no rounding)

## Shadows

Two recipes, both theme-agnostic (same in light/dark):

**Card shadow** (project cards, photo cards) — a crisp 1px outline plus a
very soft drop:
```css
box-shadow:
  0 0 0 1px rgba(0, 0, 0, 0.12),
  0 6px 12px rgba(0, 0, 0, 0.04);
```

**Elevated artwork shadow** (album art) — three stacked layers for a
softer, more physical lift:
```css
box-shadow:
  0 1px 2px rgba(0, 0, 0, 0.3),
  0 2px 4px rgba(0, 0, 0, 0.27),
  0 4px 8px rgba(0, 0, 0, 0.14);
```

## Interaction conventions

- **Hover surfaces**: rows that highlight on hover (Ventures, Writing,
  Contact socials) use `background: var(--hover-surface)` with
  `transition: background-color 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)`
  (a spring-like ease). Don't use a flat `ease`/`linear` transition for
  these — the bounce is part of the established feel.
- **Opacity-based hover** (icon-only links — Spotify, Instagram): rest at
  `opacity: 0.5`, hover to `1`, same 0.45s spring transition, no scale
  change.
- **Tap/active feedback** (Work cards): `--scale` custom property driven,
  `:active { --scale: 0.98 }`, hover (desktop only, ≥1024px) `--scale: 1.05`.
- Icons are inline SVG components in `app/components/icons.tsx`, stroke
  width **1.6–1.75**, sizes **16 / 20 / 24px** depending on context. Several
  accept optional `size`/`strokeWidth` props (see `ArrowUpRight`,
  `ClockIcon`, `MailIcon`/`XIcon`/`GitHubIcon`/`LinkedInIcon`) so one
  shared icon can be resized per call-site without affecting other
  usages — follow that pattern instead of hardcoding a new one-off icon.
- **Scroll-hide** (Dock): fades out, blurs (`filter: blur(4px)`), and
  translates off the edge it's anchored to, on a `data-hidden="true"`
  attribute driven by a debounced scroll listener (hide immediately on
  scroll, un-hide ~400ms after scroll stops). Same spring easing as the
  hover-surface transition. Reuse this recipe for any other
  fixed/floating chrome that should get out of the way while scrolling.
- **Tooltips** (Dock): a `position: absolute` label anchored to
  `bottom: calc(100% + 8px)` of its trigger, revealed via
  `opacity`/`translateY` on hover — gated behind `@media (min-width: 640px)`
  so touch/phone never gets a hover-only affordance.

## SVG assets

Two ways to bring in an SVG, pick based on what it is:

- **Generic UI icon** (single-color, decorative, used via `currentColor`) —
  hand-write it as a component in `app/components/icons.tsx`, following the
  existing `Icon` wrapper pattern. This is right for things like the clock,
  arrow, chevron — simple enough to type by hand and benefits from
  `currentColor` theming.
- **Everything else** (brand logos, flags, multi-color or detailed
  artwork) — drop the `.svg` file under `public/assets/svgs/<category>/`
  (currently `logos/`, `flags/`) and import it as a real React component:
  ```tsx
  import VsCodeLogo from "@assets/svgs/logos/vscode.svg";
  // ...
  <VsCodeLogo width={40} height={40} role="img" aria-label="VS Code" />
  ```
  This renders as an actual inline `<svg>` (stylable, no extra network
  request) instead of an opaque `<img>`/`next/image`. Don't hand-type
  complex multi-path artwork into a `.tsx` file — keep it as a `.svg` file
  and import it.

Setup behind this (already done, shouldn't need touching again): the
`@assets/*` path alias in `tsconfig.json` and `next.config.ts`
(`resolveAlias`), the `@svgr/webpack` loader wired up for **both**
Turbopack (`turbopack.rules`) and webpack (`webpack()` config — Next.js
can run either, so both need the rule or SVG imports break depending on
which one executes), and the `declare module "@assets/*.svg"` ambient
type in `svg.d.ts` so TypeScript knows the import is a component. The
loader is scoped to `public/assets/**` only, so `next/image` still works
normally for any SVG referenced by URL string elsewhere.

## Adding a new section — checklist

1. Wrap it in `<Section id="..." title={t.x.title}>` from `../ui` — this
   gives you the label typography, section spacing, and (optionally)
   `subtitle` body text for free.
2. Stay inside the 640px column unless the content genuinely needs a wide
   canvas (see the full-bleed pattern above) — don't widen the page.
3. Reuse spacing/radius/shadow values from the scales above instead of
   picking new numbers.
4. Use `var(--foreground)` / `var(--foreground-subdued)` for text color,
   never a raw white/gray hex, so light mode keeps working.
5. Add both `en` and `es` copy in `app/i18n/translations.ts` — every
   section on this page is bilingual (see `app/i18n/LocaleContext.tsx`).
6. If you add new copy-driven data (dates, list items, etc.), keep the
   translatable text in `translations.ts` and the structural/non-text
   data (colors, hrefs, icons) in `app/data.ts`, matched by array index —
   that's the existing split for Experience/Ventures/Writing.
7. Check both breakpoints (640px / 1024px) and both themes before calling
   it done.
