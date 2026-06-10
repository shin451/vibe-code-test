import { Newsreader, Hanken_Grotesk } from 'next/font/google';

/**
 * DESIGN.md §2 — Typography.
 * Display serif: Canela / Ogg / Tiempos are licensed; the named OPEN fallback
 * is "Newsreader" (high-contrast transitional serif with a refined italic).
 * Body sans: Neue Montreal is licensed; the named OPEN fallback is a neutral
 * grotesque — "Hanken Grotesk". (Inter/Roboto/Arial are explicitly avoided.)
 */
const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-hanken',
  display: 'swap',
});

export const fontClasses = `${newsreader.variable} ${hankenGrotesk.variable}`;
