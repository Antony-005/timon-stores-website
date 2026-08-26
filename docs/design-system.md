# Design System — Timon Stores Ltd Website
Style direction: **Warm Heritage Maximalism**

## 1. Purpose of this direction
The site's job is to make both a wholesale buyer and a first-time visitor feel
the same thing: this is a business that grew from something small and real,
run by people who understand the customer because they started as one.
Every color-block, photo, and line of copy should serve that relatability —
not just look impressive.

## 2. Color system
| Token | Hex | Usage |
|---|---|---|
| --color-navy | #1B2A4A | Primary sections, nav, footer, headings on light bg |
| --color-gold | #D9A441 | Route-line motif, primary CTAs, key highlights |
| --color-green | #1F5C4E | Secondary sections (coverage/growth), icons |
| --color-rust | #A84B2F | Urgent CTAs (Request a Quote button), hover states |
| --color-sand | #EDE3CC | Base background, alternates with navy/green blocks |
| --color-ink | #20211D | Body text |

**Color-blocking order (applies to every page, not just Home):**
Sections alternate deliberately — never two of the same block type back to
back:
`sand → navy → sand → green-tinted → sand → navy (footer)`
This creates rhythm without needing extra decoration — the color change
itself signals "new idea starting here."

## 3. Typography
- Display: **Fraunces** — all H1/H2, used at large sizes with generous
  line-height. Never used for body copy.
- Body: **General Sans** — all paragraph text, nav, buttons.
- Data/Utility: **IBM Plex Mono** — stat numbers, figures, county/branch
  labels, form field labels. Using mono for numbers specifically makes scale
  (years, counties, fleet size) feel precise and earned, not decorative.

Type scale (rem, mobile → desktop):
| Role | Mobile | Desktop |
|---|---|---|
| H1 | 2.25 | 4.5 |
| H2 | 1.75 | 3 |
| H3 | 1.25 | 1.75 |
| Body | 1 | 1.125 |
| Stat number | 2 | 3.5 |

## 4. The signature element — Gold Route-Line
A thin (2–3px) gold line that visually threads through the page. Rules for
where it appears:
- **About page:** runs vertically/diagonally through the kiosk→fleet
  timeline, connecting each milestone marker
- **Distribution page:** connects branch/county markers on the coverage
  section
- **Home page:** appears as a subtle horizontal divider between color-blocked
  sections, growing/animating in on scroll (respects `prefers-reduced-motion`)
- **Never** used as generic decoration on pages/sections where it doesn't
  represent an actual sequence or route — that would cheapen its meaning

## 5. Photography treatment
- Real photos only (branches, trucks, products, team) — no stock imagery for
  primary hero/story moments
- Warm, slightly warm-toned color grading to match the sand/gold palette
  (avoid cold blue-grey filters)
- Full-bleed within color-blocked sections, not boxed in small thumbnails,
  except in the product grid

## 6. Motion guidelines
- Gentle scroll-reveals as sections transition between color blocks (fade +
  slight upward movement, ~400ms)
- Stat counters animate once on first scroll into view, not on every scroll
- Hover states: subtle lift (4–6px) + gold border on cards, no flashy
  transforms
- All motion respects `prefers-reduced-motion: reduce`
- No auto-playing carousels or looping animations — this is a maximalist
  layout, not a busy one; the boldness is in color/type/density, not motion

## 7. Component tone
- Buttons: solid fills using gold (primary) or rust (urgent/RFQ), rounded
  corners (6–8px), never flat grey
- Cards: consistent aspect ratio, sand or white background depending on
  parent section, gold-line hover accent
- Forms: generous spacing, inline validation, labels in mono font for a
  "structured/professional" feel without being cold