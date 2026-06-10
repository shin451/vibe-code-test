import type { Config } from 'tailwindcss';

/**
 * RE:BOUND — Tailwind theme.
 * Colour + type tokens map 1:1 to DESIGN.md. The raw hex values live as CSS
 * variables in src/styles/globals.css; this file only references them so the
 * palette has a single source of truth.
 */
const config: Config = {
  darkMode: ['class'],
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── DESIGN.md palette (literal tokens) ──────────────────────────
        parchment: 'var(--c-parchment)',
        taupe: 'var(--c-taupe)',
        terracotta: 'var(--c-terracotta)',
        espresso: 'var(--c-espresso)',
        walnut: 'var(--c-walnut)',
        ink: {
          DEFAULT: 'var(--c-ink)',
          soft: 'var(--c-ink-soft)',
        },
        stone: 'var(--c-stone)',
        clay: 'var(--c-clay-100)',
        'cream-line': 'var(--c-cream-line)',
        'on-dark': 'var(--c-on-dark)',

        // ── Semantic aliases (shadcn-style) ─────────────────────────────
        background: 'var(--c-parchment)',
        foreground: 'var(--c-ink)',
        border: 'var(--c-cream-line)',
        input: 'var(--c-cream-line)',
        ring: 'var(--c-terracotta)',
        primary: {
          DEFAULT: 'var(--c-terracotta)',
          foreground: 'var(--c-on-dark)',
        },
        secondary: {
          DEFAULT: 'var(--c-espresso)',
          foreground: 'var(--c-on-dark)',
        },
        muted: {
          DEFAULT: 'var(--c-taupe)',
          foreground: 'var(--c-stone)',
        },
        accent: {
          DEFAULT: 'var(--c-terracotta)',
          foreground: 'var(--c-on-dark)',
        },
      },
      fontFamily: {
        display: 'var(--font-display)',
        sans: 'var(--font-sans)',
      },
      fontSize: {
        // DESIGN.md type scale (desktop). Mobile sizing handled per-component.
        'display-xl': ['clamp(3rem, 8vw, 7.5rem)', { lineHeight: '1.0', fontWeight: '400' }],
        'display-l': ['clamp(2.25rem, 4.5vw, 3.5rem)', { lineHeight: '1.05', fontWeight: '400' }],
        h1: ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '1.05', fontWeight: '400' }],
        h2: ['clamp(1.75rem, 3.2vw, 2.5rem)', { lineHeight: '1.15', fontWeight: '400' }],
        h3: ['1.75rem', { lineHeight: '1.2', fontWeight: '500' }],
        eyebrow: ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0.18em', fontWeight: '600' }],
        'body-lg': ['1.1875rem', { lineHeight: '1.6' }],
        body: ['1rem', { lineHeight: '1.65' }],
        'body-sm': ['0.8125rem', { lineHeight: '1.5' }],
      },
      maxWidth: {
        content: '1280px',
        prose: '62ch',
      },
      spacing: {
        gutter: '24px',
        'gutter-lg': '64px',
        section: '128px',
        'section-mobile': '64px',
      },
      borderRadius: {
        sm: '2px',
        md: '4px',
        pill: '999px',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease both',
        'accordion-down': 'accordion-down 0.25s ease-out',
        'accordion-up': 'accordion-up 0.25s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
