'use client';

import * as React from 'react';
import Link from 'next/link';
import { Container } from './Container';
import { MobileMenu } from './MobileMenu';
import { cn } from '@/lib/utils';
import type { NavItem } from '@/types/content';

interface NavbarProps {
  items: NavItem[];
  logo: string;
  ctaButton: { label: string; href: string };
}

/** DESIGN.md §4.1 — fixed transparent overlay; transitions to solid parchment on scroll. */
export function Navbar({ items, logo, ctaButton }: NavbarProps) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'border-b border-cream-line bg-parchment/95 backdrop-blur-sm'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className={cn(
            'font-display text-2xl tracking-tight transition-colors duration-300',
            scrolled ? 'text-ink' : 'text-on-dark',
          )}
        >
          {logo}
        </Link>

        <nav className="hidden items-center gap-8 min-[900px]:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'font-sans text-[0.8125rem] uppercase tracking-[0.1em] transition-colors duration-300 hover:text-terracotta',
                scrolled ? 'text-ink-soft' : 'text-on-dark/90',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={ctaButton.href}
            className="hidden rounded-pill bg-terracotta px-5 py-2.5 font-sans text-[0.8125rem] font-semibold uppercase tracking-[0.1em] text-on-dark transition-colors hover:bg-espresso min-[900px]:inline-block"
          >
            {ctaButton.label}
          </Link>
          <MobileMenu items={items} logo={logo} ctaButton={ctaButton} scrolled={scrolled} />
        </div>
      </Container>
    </header>
  );
}
