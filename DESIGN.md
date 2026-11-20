---
name: Farid Portfolio
description: One printed circuit board the visitor scrolls along; copper traces on soldermask, silkscreen type, measured values in mono.
colors:
  soldermask: "#0a1210"
  soldermask-raised: "#0f1a17"
  board-card: "#111e1a"
  scope-glass: "#070e0c"
  footer-board: "#070d0b"
  trace-line: "#22352f"
  trace-line-hover: "#3a5149"
  silkscreen: "#e8ede9"
  silkscreen-soft: "#c3cec8"
  silkscreen-muted: "#8fa39a"
  copper: "#d08a52"
  copper-hover: "#e0a06c"
  copper-ink: "#0a1210"
  tin-silver: "#9fb4ad"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 6.4vw, 5rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Bricolage Grotesque, Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.4rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Bricolage Grotesque, Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 2.4vw, 1.7rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "JetBrains Mono, ui-monospace, Menlo, Consolas, monospace"
    fontSize: "0.72rem"
    fontWeight: 400
    letterSpacing: "0.1em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "12px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "20px"
  lg: "28px"
  xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.copper}"
    textColor: "{colors.copper-ink}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.copper-hover}"
  button-ghost:
    backgroundColor: "{colors.board-card}"
    textColor: "{colors.silkscreen}"
    rounded: "{rounded.lg}"
    padding: "8px 16px"
    height: "44px"
  chip:
    backgroundColor: "{colors.soldermask-raised}"
    textColor: "{colors.silkscreen-soft}"
    rounded: "{rounded.md}"
    padding: "4px 12px"
  card:
    backgroundColor: "{colors.board-card}"
    textColor: "{colors.silkscreen}"
    rounded: "{rounded.md}"
    padding: "40px"
  tab-selected:
    backgroundColor: "{colors.copper}"
    textColor: "{colors.copper-ink}"
    rounded: "{rounded.lg}"
    height: "44px"
---

# Design System: Farid Portfolio

## Overview

**Creative North Star: "The Printed Circuit Board"**

The page is one board the visitor scrolls along. Sections are components placed on a soldermask ground, copper is the single committed accent, and measured values are set in mono like silkscreen. Depth comes from hairline borders and tonal steps between greens, never from glow.

Density is calm and spec-sheet like: full 1px borders, 6px corners, rows ruled with a hairline instead of boxed. The signature moments are the live oscilloscope panel in the hero (pointer sets frequency and amplitude) and a copper trace down the left edge that fills as the page scrolls.

**Key Characteristics:**
- Dark green-black ground, off-white text, one copper accent, tin-silver as the only secondary line color.
- Flat at rest; borders carry structure.
- Mono type only for measured values and designators (position, DOI, indices, readouts).
- Copper trace motifs (45-degree bend, pad circle) appear as hero background and under every section h2.
- Motion is reveal-up and trace-fill, all disabled under prefers-reduced-motion.

## Colors

Soldermask green-black with warm copper as the lone chromatic voice.

### Primary
- **Copper** (#d08a52): links on hover, primary buttons, selected tabs, trace rail fill, timeline pads, designators, the "me" in author lists. Hover steps to **Bright Copper** (#e0a06c). Text on copper is **Copper Ink** (#0a1210).

### Secondary
- **Tin Silver** (#9fb4ad): the second oscilloscope channel, tab and vote hover borders. Never a fill.

### Neutral
- **Soldermask** (#0a1210): page ground and theme color.
- **Raised Mask** (#0f1a17): alternate section bands (even sections), chips, inset panels.
- **Board Card** (#111e1a): cards, ghost buttons, hero board.
- **Scope Glass** (#070e0c) and **Footer Board** (#070d0b): the two deepest steps, for the scope screen and footer.
- **Trace Line** (#22352f): every 1px border and divider; **Trace Line Hover** (#3a5149) on card hover.
- **Silkscreen** (#e8ede9): primary text; **Silkscreen Soft** (#c3cec8) for body copy in cards; **Silkscreen Muted** (#8fa39a) for captions and meta.

### Named Rules
**The One Copper Rule.** Copper is the only accent. It marks action, selection, and progress; it is never a large fill other than a button or selected tab.

**The No Glow Rule.** No neon, no text gradients. The only radial wash is a faint copper tint behind the contact section.

## Typography

**Display Font:** Bricolage Grotesque (fallback Hanken Grotesk, system sans)
**Body Font:** Hanken Grotesk (fallback system sans)
**Label/Mono Font:** JetBrains Mono

**Character:** A characterful display face over a neutral humanist body, with mono reserved for instrument-style readouts.

### Hierarchy
- **Display** (700, clamp(2.6rem, 6.4vw, 5rem), 1.15): hero name only.
- **Headline** (700, clamp(2rem, 5vw, 3.4rem), 1.15, -0.015em): section h2, each followed by a copper trace flourish.
- **Title** (700, clamp(1.25rem, 2.4vw, 1.7rem), 1.15): h3 for cards and principles; project h3 scales up to 2.4rem.
- **Body** (400, 1rem, 1.6): Hanken Grotesk; lead paragraph clamp(1rem, 1.6vw, 1.2rem) capped at 60ch, project copy at 80ch.
- **Label** (mono, 0.7-0.78rem, 0.1em, uppercase for meta terms): meta dt, period, DOI, scope bar, figcaptions.

### Named Rules
**The Measured Values Rule.** Mono is for things that are measured or identified (dates, DOI, index numbers, readouts, designators). Prose and headings never use it.

## Layout

Content sits in a `.wrap` of min(1200px, 100% - 32px), with an 820px narrow column for prose sections. Section padding is clamp(64px, 10vw, 120px). The hero is a two-column grid (6fr copy, 5fr board) with a faint copper trace SVG anchored top right. Even-numbered sections get a Raised Mask band with hairline top and bottom borders so the board reads as stacked zones. Skills are ruled spec rows (4fr label, 7fr value) rather than cards. Project entries pair copy (1.45fr) with a documentation frame (.55fr). Mobile breakpoints at 820px, 620px, 380px; touch targets are 44px minimum. A 2px trace rail runs fixed at the left edge (10px, 4px on small screens).

## Elevation & Depth

Flat by default. Depth is tonal (Soldermask, Raised Mask, Board Card, Scope Glass) plus 1px Trace Line borders; hover only shifts a card border to Trace Line Hover. The one exception is the About photo stack, where the polaroid and ID card carry a soft `box-shadow: 0 10px 28px rgba(0,0,0,.5)` to read as objects laid on the board.

### Named Rules
**The Hairline Rule.** Structure comes from a 1px Trace Line border, not from shadow or fill. Shadow is reserved for loose objects (polaroid, ID card).

## Shapes

Small, precise corners: 4px for portraits, 6px for cards, buttons and chips, 8px for tabs and ghost buttons, 12px for gallery shots and the ID card, 14px for principle tiles and documentation frames. Full 1px borders everywhere; pills appear only for lightbox controls. Timeline entries use a 9px circular copper pad, and h2 flourishes end in a pad circle, echoing vias.

## Components

### Buttons
- **Shape:** 6px corners (primary), 8px (ghost, tabs).
- **Primary:** Copper fill, Copper Ink text, 12px 20px, weight 600, 1px copper border; hover to Bright Copper.
- **Ghost:** Board Card fill, Trace Line border, 44px minimum height; hover turns border and text copper.
- **Focus:** 2px copper outline, 3px offset on all interactive elements.

### Chips
- Raised Mask fill, 1px Trace Line border, 6px radius, Silkscreen Soft text at 0.8rem; `tag` variant is mono and muted; `badge` variant has copper border and text. Tool chips invert their logos to monochrome.

### Cards / Containers
- 6px radius, Board Card fill, 1px Trace Line border, padding clamp(20px, 3.5vw, 40px), no shadow.

### Navigation
- Fixed, 64px tall; transparent at top, then 88% soldermask with a 14px backdrop blur and a hairline bottom border once scrolled. Links 0.9rem Silkscreen Soft, hover copper. Brand is display-face name over a mono subline. Below 820px links fold into a full-width drawer with ruled rows and a 44px toggle.

### Tabs and Votes
- 44px, 8px radius, Trace Line border; selected state fills copper with Copper Ink text, weight 600.

### Signal Scope (signature)
- Scope Glass panel with a mono copper/silver bar (CH1, CH2, live readout in Hz and Vpp), a canvas with a 10 by 6 faint grid and two sine channels (copper, tin-silver, 2px), eased toward pointer position. Static frame under reduced motion.

### Trace Rail (signature)
- Fixed 2px left-edge line in Trace Line whose copper overlay scales down the page with scroll progress.

## Do's and Don'ts

### Do:
- **Do** use copper (#d08a52) only for action, selection, progress, and designators.
- **Do** build structure from 1px Trace Line borders and tonal steps between the greens.
- **Do** set measured values (dates, DOI, indices, readouts) in JetBrains Mono.
- **Do** keep touch targets at 44px and keep the 2px copper focus ring.
- **Do** gate reveals, marquees, scope animation and trace fill behind prefers-reduced-motion.

### Don't:
- **Don't** add glow, neon, or gradient text; the page refuses the generic dark portfolio.
- **Don't** use a second accent hue; tin-silver is a line color, never a fill.
- **Don't** put drop shadows on cards; shadow is only for the loose polaroid and ID card.
- **Don't** set prose or headings in mono.
