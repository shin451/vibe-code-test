import type { Brand } from '@/types/content';

/**
 * DESIGN.md §1–3 — the canonical RE:BOUND tokens, in data form.
 * The live styling reads these values from CSS variables in globals.css /
 * tailwind.config; this file is the single documented source of truth and is
 * also what the OhhWells Content API would serve.
 */
export const brand: Brand = {
  colors: {
    parchment: '#EBECDD',
    taupe: '#A89B83',
    terracotta: '#6B3A22',
    espresso: '#4B3724',
    walnut: '#3C2E1E',
    ink: '#2A2018',
    inkSoft: '#3A332B',
    stone: '#6B6758',
    clay: '#D9D3C7',
    creamLine: '#DAD9C6',
    onDark: '#F3F1E8',
  },
  fonts: {
    display: '"Canela", "Newsreader", Georgia, serif',
    sans: '"Neue Montreal", "Hanken Grotesk", system-ui, sans-serif',
  },
  radius: {
    sm: '2px',
    md: '4px',
    pill: '999px',
  },
  maxWidth: '1280px',
};
