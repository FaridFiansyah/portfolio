---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: []
---

# Surface brief: portfolio home (app/page.tsx)

Mode: Experience (portfolio). Audience: recruiters and industry engineers. Action: email Farid / read projects.

## Direction contract

THESIS: The page is one printed circuit board the visitor scrolls along: sections are components placed on the board, copper traces route between them. Refuses the generic dark portfolio (neon glow, centered hero, row of identical cards).

OWN-WORLD: Soldermask ground (green-black #0a1210 family), silkscreen off-white text, copper (#d08a52) as the single committed accent with tin-silver secondary lines, gold pad dots as markers. No glow, no gradients on text. Component language: hairline copper traces with 45-degree bends, pad/via circles at junctions, silkscreen-style small labels (measurement/designator use only: R1, U2), 4px radii, full 1px borders, spec-sheet tables. Faces: Bricolage Grotesque display, Hanken Grotesk body, JetBrains Mono for measured values only.

STORY: Visitor sees an electrical + software engineer with real hardware shipped (robots, Jetson, STM32, power analysis), believes it from concrete project specs and a live signal trace, and emails.

FIRST VIEWPORT: Left: name in large display type, role line, one-line pitch, primary action "Email me" plus secondary "See projects". Right: a live oscilloscope-style signal panel (canvas, sine + noise, traces in copper and silver) with measured readouts (current position, location). Portrait sits in the panel's corner as a bonded component. Faint PCB trace pattern behind everything.

FORM: Directions were not rolled: the brief pins the world in the owner's words ("dark clean, suited to an electrical-engineering portfolio"). seed: none (pinned). Signature interaction: the hero signal responds to pointer position (frequency/amplitude); copper trace line draws down the page as the visitor scrolls. Motion grammar: stroke-draw and ease-out reveals, all disabled under prefers-reduced-motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
