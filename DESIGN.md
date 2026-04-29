# Design Brief

## Direction

Local Deal Factory — fast-moving, pragmatic real estate interface for high-frequency property transactions. Clean, trustworthy, conversion-focused. No luxury softness, no generic defaults.

## Tone

Bold pragmatism. Strong type weights, rectangular forms, high contrast. Confidence without pretense—an interface that feels like it moves deals, not sells dreams.

## Differentiation

Property cards expand inline for full details (no modal distraction). Sticky filter bar keeps category switching instant. Floating WhatsApp button always reachable. Speed of decision over browsing friction.

## Color Palette

| Token        | OKLCH            | Role                                  |
| ------------ | ---------------- | ------------------------------------- |
| background   | 0.99 0.008 230   | Cool off-white, light mode default    |
| foreground   | 0.15 0.015 230   | Dark neutral text on light            |
| primary      | 0.45 0.15 240    | Strong blue — trust + urgency signal  |
| accent       | 0.65 0.18 150    | WhatsApp green — conversion fuel      |
| card         | 1.0 0.004 230    | Pure white for property images        |
| muted        | 0.94 0.01 230    | Light grey for secondary sections     |
| destructive  | 0.55 0.22 25     | Red — warnings + alerts               |

## Typography

- **Display**: Plus Jakarta Sans (bold, friendly-but-strong for headings, 700-800 weight)
- **Body**: General Sans (clean, readable, professional, 400-500 weight)
- **Mono**: JetBrains Mono (labels, code snippets)
- **Scale**: Hero text-6xl font-bold, section headings text-3xl font-bold, labels text-sm uppercase semibold, body text-base

## Elevation & Depth

Subtle card shadows (0 2px 6px) on white cards over grey sections. Blue hover state brightens border and lifts shadow. No gradients or decorative depth—clarity through flatness + careful contrast.

## Structural Zones

| Zone    | Background         | Border                    | Notes                                 |
| ------- | ------------------ | ------------------------- | ------------------------------------- |
| Header  | primary (blue)     | none                      | Sticky, white text, 48px tall         |
| Filter  | muted (light grey) | border-bottom primary     | Sticky below header, 56px tall mobile |
| Content | alternating        | border-b on sections      | White sections, muted sections        |
| Cards   | card (white)       | border-border, hover blue | Subtle shadow, rounded-lg (10px)      |
| Footer  | muted (light grey) | border-t primary          | Dark text, 64px padding               |

## Spacing & Rhythm

16px base unit with 8/16/24/32/48px section gaps. Cards 12px internal padding, 16px external gaps. Mobile-first: compact on <640px, spacious on md+. Button heights 48px (touch-safe).

## Component Patterns

- **Buttons**: 48px min height, rounded-md (8px), semibold weight, full-width on mobile. Primary blue, secondary grey, accent green (WhatsApp). Hover: opacity-90.
- **Cards**: white bg, rounded-lg (10px), subtle shadow, border-border. Hover: shadow-elevated, border brightens. No zoom—border + shadow expansion only.
- **Badges**: inline chip, muted bg, dark text, rounded-full (9999px), 24px height, 8px padding.
- **Inputs**: 44px height, border-input, rounded-md, focus ring blue primary.

## Motion

- **Entrance**: fade-in 0.3s ease-out on scroll (lazy-loaded cards, section headings)
- **Hover**: transition-smooth (0.3s) on card border/shadow, button opacity
- **Sticky**: smooth scroll lock on filter bar + floating buttons (no jank)
- **None**: no bounce, no spring, no playful easing—purely utilitarian

## Constraints

- Mobile-first always (320px min width covered)
- Touch targets ≥ 48px (buttons, links, filters)
- Text contrast ≥ 4.5:1 (WCAG AA)
- No hero full-screen image (viewport waste on mobile)
- Minimal font weights (400, 500, 600, 700 only)
- Avoid transparency stacking (card-in-card readability)

## Signature Detail

Inline card expansion. Clicking a property card slides its content up from below, replacing the card thumbnail with full details (agent, amenities, gallery preview) within the same card container. No modal, no page transition—just fast, in-context expansion. The experience feels like the site moves at your speed, not the other way around.
