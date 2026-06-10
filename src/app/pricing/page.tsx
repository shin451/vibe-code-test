import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { Accent } from '@/components/ui/accent';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { CtaBand } from '@/components/sections/CtaBand';
import { buildMetadata } from '@/lib/seo';
import { pricingContent as c } from '@/content/pricing';
import { cn } from '@/lib/utils';

export const metadata: Metadata = buildMetadata({
  title: 'Pricing',
  description: 'RE:BOUND membership and packages — intro offer, class packs and unlimited. No lock-ins, your first class free.',
  path: '/pricing',
});

export default function PricingPage() {
  return (
    <>
      <section className="section-rb">
        <Container>
          <header className="mb-14 max-w-2xl">
            <p className="eyebrow mb-5">{c.hero.eyebrow}</p>
            <h2 className="text-h2 md:text-display-l">
              <Accent text={c.hero.headline} />
            </h2>
            {c.hero.body?.map((p, i) => (
              <p key={i} className="mt-5 max-w-prose font-sans text-body-lg text-ink-soft">
                {p}
              </p>
            ))}
          </header>

          {/* 3-tier grid — hairline cards, featured tier gets a terracotta top-rule */}
          <div className="grid gap-6 lg:grid-cols-3">
            {c.tiers.map((tier) => (
              <div
                key={tier.name}
                className={cn(
                  'flex flex-col rounded-md border border-cream-line bg-parchment p-8',
                  tier.featured && 'border-t-2 border-t-terracotta',
                )}
              >
                <h3 className="font-sans text-body-sm uppercase tracking-[0.16em] text-stone">{tier.name}</h3>
                <p className="mt-5 font-display text-display-l leading-none text-ink">{tier.price}</p>
                <p className="mt-2 font-sans text-body-sm text-stone">{tier.cadence}</p>
                <p className="mt-5 font-sans text-body text-ink-soft">{tier.description}</p>
                <ul className="mt-7 flex flex-1 flex-col gap-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 font-sans text-body text-ink-soft">
                      <Check className="mt-1 size-4 shrink-0 text-terracotta" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-8 w-full">
                  <Link href={tier.ctaLink}>{tier.ctaText}</Link>
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* "First class is on us" highlight band */}
      <section className="section-rb bg-taupe">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-5 text-walnut">{c.highlight.eyebrow}</p>
            <h2 className="text-h2 text-walnut md:text-display-l">
              <Accent text={c.highlight.headline} />
            </h2>
            <p className="mx-auto mt-5 max-w-prose font-sans text-body-lg text-walnut/90">{c.highlight.body}</p>
            <div className="mt-9 flex justify-center">
              <Button asChild>
                <Link href={c.highlight.ctaLink}>{c.highlight.ctaText}</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Billing FAQ teaser */}
      <section className="section-rb">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <p className="eyebrow mb-8">{c.faqTeaser.group}</p>
            <Accordion type="single" collapsible>
              {c.faqTeaser.items.map((item) => (
                <AccordionItem key={item.question} value={item.question}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Questions?"
        headline="Read the full *FAQs*."
        ctaText="See all FAQs"
        ctaLink="/faqs"
        tone="taupe"
      />
    </>
  );
}
