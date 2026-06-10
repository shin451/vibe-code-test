import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { Accent } from '@/components/ui/accent';
import type { HeroContent } from '@/types/content';

/**
 * DESIGN.md Home — full-screen hero with transparent navbar overlay.
 * Upper half: centred subheadline + single CTA.
 * Bottom: giant display-xl headline left-aligned.
 */
export function Hero({ hero }: { hero: HeroContent }) {
  return (
    <section
      className="relative -mt-16 flex min-h-screen flex-col overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(60,46,30,0.55) 0%, rgba(60,46,30,0.25) 35%, rgba(60,46,30,0.55) 70%, rgba(60,46,30,0.82) 100%), url(${hero.image.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Upper centre — subheadline + CTA */}
      <div className="flex flex-1 flex-col items-center justify-center pt-16 text-center">
        {hero.eyebrow && (
          <p className="eyebrow eyebrow--on-dark mb-6">{hero.eyebrow}</p>
        )}
        {hero.subheadline && (
          <p className="mb-8 max-w-xs font-sans text-body-lg text-on-dark/90 md:max-w-sm">
            {hero.subheadline}
          </p>
        )}
        <Button asChild>
          <Link href={hero.ctaLink}>{hero.ctaText}</Link>
        </Button>
      </div>

      {/* Bottom — display headline */}
      <Container className="pb-12 md:pb-16">
        <h1 className="font-display text-display-xl text-on-dark">
          <Accent text={hero.headline} />
        </h1>
      </Container>
    </section>
  );
}
