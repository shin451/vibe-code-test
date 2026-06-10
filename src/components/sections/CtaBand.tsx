import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { Accent } from '@/components/ui/accent';

interface CtaBandProps {
  eyebrow: string;
  headline: string;
  ctaText: string;
  ctaLink: string;
  tone?: 'parchment' | 'taupe';
}

/** Centred eyebrow → serif statement → single primary CTA. */
export function CtaBand({ eyebrow, headline, ctaText, ctaLink, tone = 'parchment' }: CtaBandProps) {
  return (
    <section className={tone === 'taupe' ? 'section-rb bg-taupe' : 'section-rb'}>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className={`eyebrow mb-5 ${tone === 'taupe' ? 'text-walnut' : ''}`}>{eyebrow}</p>
          <h2 className={`text-h2 md:text-display-l ${tone === 'taupe' ? 'text-walnut' : ''}`}>
            <Accent text={headline} />
          </h2>
          <div className="mt-9 flex justify-center">
            <Button asChild>
              <Link href={ctaLink}>
                {ctaText}
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
