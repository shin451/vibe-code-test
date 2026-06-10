'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Sheet, SheetTrigger, SheetContent, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import type { NavItem } from '@/types/content';

interface MobileMenuProps {
  items: NavItem[];
  logo: string;
  ctaButton: { label: string; href: string };
  scrolled?: boolean;
}

/**
 * Hamburger → full-screen parchment drawer with large serif links
 * (DESIGN.md §4.1). Shown below 900px.
 */
export function MobileMenu({ items, logo, ctaButton, scrolled = false }: MobileMenuProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className={cn(
          'transition-colors hover:text-terracotta min-[900px]:hidden',
          scrolled ? 'text-ink' : 'text-on-dark',
        )}
        aria-label="Open menu"
      >
        <Menu className="size-6" />
      </SheetTrigger>
      <SheetContent title="Navigation">
        <span className="font-display text-2xl text-ink">{logo}</span>
        <nav className="mt-16 flex flex-col gap-6">
          {items.map((item) => (
            <SheetClose asChild key={item.href}>
              <Link
                href={item.href}
                className="font-display text-4xl text-ink transition-colors hover:text-terracotta"
              >
                {item.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
        <div className="mt-auto pt-10">
          <SheetClose asChild>
            <Button asChild className="rounded-pill">
              <Link href={ctaButton.href}>{ctaButton.label}</Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
