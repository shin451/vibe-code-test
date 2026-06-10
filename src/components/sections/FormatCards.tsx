import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Accent } from '@/components/ui/accent';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { FormatCard } from '@/types/content';

function CardImage({ image, className }: { image: FormatCard['image']; className?: string }) {
  return (
    <div
      role="img"
      aria-label={image.alt}
      className={cn('w-full bg-walnut bg-cover bg-center', className)}
      style={{ backgroundImage: `url(${image.src})` }}
    />
  );
}

function FormatLink({ card }: { card: FormatCard }) {
  return (
    <Button asChild variant="link" className="mt-5">
      <Link href={card.ctaLink}>
        {card.ctaText}
        <ArrowRight />
      </Link>
    </Button>
  );
}

interface FormatCardsProps {
  eyebrow: string;
  headline: string;
  items: FormatCard[];
  /** "grid" = 3-up compact (Home); "rows" = enlarged one-per-row (Services). */
  layout?: 'grid' | 'rows';
  /** Shows a centred "VIEW ALL CLASSES" CTA below the grid. */
  viewAllHref?: string;
}

/**
 * DESIGN.md §4.3 — the image IS the card: full-bleed photo (4:5) → serif h3 →
 * sans description → terracotta text-link CTA. No border, no shadow, sitting on
 * the taupe band.
 */
export function FormatCards({ eyebrow, headline, items, layout = 'grid', viewAllHref }: FormatCardsProps) {
  return (
    <section className="section-rb bg-taupe">
      <Container>
        <header className="mb-12 max-w-2xl">
          <p className="eyebrow mb-5 text-walnut">{eyebrow}</p>
          <h2 className="text-h2 text-walnut md:text-display-l">
            <Accent text={headline} />
          </h2>
        </header>

        {layout === 'grid' ? (
          <>
            <div className="grid gap-8 md:grid-cols-3">
              {items.map((card) => (
                <article key={card.title}>
                  <CardImage image={card.image} className="aspect-[4/5] rounded-md" />
                  <h3 className="mt-5 font-display text-h3 text-walnut">{card.title}</h3>
                  <p className="mt-2 max-w-prose font-sans text-body text-walnut/90">{card.description}</p>
                  <FormatLink card={card} />
                </article>
              ))}
            </div>
            {viewAllHref && (
              <div className="mt-14 text-center">
                <Button asChild variant="dark">
                  <Link href={viewAllHref}>View All Classes</Link>
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col gap-16">
            {items.map((card, i) => (
              <article
                key={card.title}
                className={cn(
                  'grid items-center gap-8 md:grid-cols-2 md:gap-14',
                  i % 2 === 1 && 'md:[&>*:first-child]:order-2',
                )}
              >
                <CardImage image={card.image} className="aspect-[5/4] rounded-md" />
                <div>
                  <span className="block font-sans text-body-sm uppercase tracking-[0.18em] text-walnut/70">
                    {card.num}
                  </span>
                  <h3 className="mt-2 font-display text-h2 text-walnut">{card.title}</h3>
                  <p className="mt-3 max-w-prose font-sans text-body-lg text-walnut/90">{card.description}</p>
                  <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-4 border-t border-walnut/20 pt-6">
                    {[
                      ['Duration', card.duration],
                      ['Intensity', card.intensity],
                      ['For', card.forWho],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <dt className="font-sans text-body-sm uppercase tracking-[0.14em] text-walnut/60">
                          {label}
                        </dt>
                        <dd className="mt-1 font-sans text-body text-walnut">{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <FormatLink card={card} />
                </div>
              </article>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
