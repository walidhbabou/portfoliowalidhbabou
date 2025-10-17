# Dynamics & Theme utilities

This short doc explains the new dynamic UI utilities added to the project.

## Classes/utilitaires

- `.reveal` — apply to a block-level section to make it fade/slide into view when scrolled into viewport. It uses IntersectionObserver. Add `reveal` to the top element of a section, e.g. `<section className="reveal">...</section>`.

- `.reveal-slow` — modifier to increase the reveal duration (slower entrance). Add alongside `.reveal`.

- `[data-parallax]` — add this attribute (with optional value) to decorative elements to enable a small vertical parallax effect while scrolling. Usage: `<div data-parallax="0.04">...</div>` where the value is depth.

- `.effects-disabled` — when present on the root element (`<html>`), animations and parallax are disabled for accessibility or to reduce motion.

## CSS variables

Adjust these variables in `src/App.css` to tune timings and behavior:

- `--reveal-duration` — duration for reveal animations (default: `400ms`).
- `--reveal-duration-slow` — duration for `.reveal-slow` (default: `800ms`).
- `--reveal-ease` — easing curve for reveals.
- `--typewriter-ms` — base interval for the typewriter effect (default: `50ms`).
- `--parallax-mobile-factor` — factor to reduce parallax on small screens (default: `0.35`).

## Keyboard shortcut

- Toggle effects: `Ctrl + .` (Control + period). This toggles the `effects-disabled` state and saves preference in `localStorage`.

## UI

- A small toggle button was added in the navigation with an icon and visible label showing current state.

## How it works

- `src/lib/dynamics.ts` contains three helpers:
  - `initReveal()` — wires IntersectionObserver for `.reveal` elements.
  - `attachParallax()` — attaches a scroll RAF loop for `[data-parallax]` elements.
  - `typeWrite()` — simple typewriter effect reading `data-text` or element text.

- `src/components/EffectsToggle.tsx` provides a small UI to toggle effects and uses `sonner` to show a toast when toggled.

## Notes

- The dynamics are intentionally lightweight (no extra large runtime libs). The code respects `prefers-reduced-motion` and the user toggle.
- If you want particles (canvas) instead of blobs, we can add a small canvas-based implementation or integrate tsparticles.

*** End of doc
