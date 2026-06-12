'use client';

import * as React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import type { Testimonial as TestimonialType } from '@/types/content';

interface TestimonialProps {
  data: TestimonialType | TestimonialType[];
  ctaButtons?: Array<{ label: string; href: string; variant?: 'primary' | 'dark' | 'ghostLight' }>;
}

/**
 * DESIGN.md §4.5 — full-bleed warm photo + walnut gradient scrim. Large serif
 * quote, ‹ › arrow controls, optional CTA buttons below.
 */
export function Testimonial({ data, ctaButtons }: TestimonialProps) {
  const items = Array.isArray(data) ? data : [data];
  const [idx, setIdx] = React.useState(0);
  const current = items[idx];
  const total = items.length;

  return (
    <section
      className="relative overflow-hidden bg-walnut bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(60,46,30,0.6), rgba(60,46,30,0.6)), url(${current.image.src})`,
      }}
    >
      <Container className="relative py-24 md:py-36">
        {/* ‹ arrow — left */}
        {total > 1 && (
          <button
            onClick={() => setIdx((idx - 1 + total) % total)}
            aria-label="Previous testimonial"
            className="absolute left-4 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-on-dark/40 text-on-dark transition-colors hover:border-on-dark hover:bg-on-dark/10 md:left-8"
          >
            &#8249;
          </button>
        )}

        {/* Quote */}
        <figure className="mx-auto max-w-3xl text-center">
          <span aria-hidden className="block font-display text-7xl leading-none text-terracotta">
            &#10078;
          </span>
          <blockquote className="mt-4 font-display text-h2 italic text-on-dark md:text-display-l">
            {current.quote}
          </blockquote>
          <figcaption className="mt-8 font-sans text-body-sm uppercase tracking-[0.14em] text-on-dark opacity-80">
            {current.name}, <span className="italic normal-case tracking-normal">{current.role}</span>
          </figcaption>
        </figure>

        {/* › arrow — right */}
        {total > 1 && (
          <button
            onClick={() => setIdx((idx + 1) % total)}
            aria-label="Next testimonial"
            className="absolute right-4 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-on-dark/40 text-on-dark transition-colors hover:border-on-dark hover:bg-on-dark/10 md:right-8"
          >
            &#8250;
          </button>
        )}

        {/* CTA buttons */}
        {ctaButtons && ctaButtons.length > 0 && (
          <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
            {ctaButtons.map((btn) => (
              <Button key={btn.label} asChild variant={btn.variant ?? 'dark'}>
                <Link href={btn.href}>{btn.label}</Link>
              </Button>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
