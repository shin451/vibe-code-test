import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Accent } from '@/components/ui/accent';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { CtaBand } from '@/components/sections/CtaBand';
import { buildMetadata } from '@/lib/seo';
import { faqsContent as c } from '@/content/faqs';

export const metadata: Metadata = buildMetadata({
  title: 'FAQs',
  description: 'Everything to know before your first RE:BOUND class — getting started, classes, membership, billing and the studio.',
  path: '/faqs',
});

export default function FaqsPage() {
  return (
    <>
      <section className="section-rb">
        <Container>
          <header className="mx-auto mb-14 max-w-[760px]">
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

          <div className="mx-auto flex max-w-[760px] flex-col gap-14">
            {c.groups.map((group) => (
              <div key={group.group}>
                <h3 className="mb-2 font-sans text-body-sm uppercase tracking-[0.16em] text-stone">
                  {group.group}
                </h3>
                <Accordion type="single" collapsible>
                  {group.items.map((item) => (
                    <AccordionItem key={item.question} value={item.question}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent>{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand {...c.cta} tone="taupe" />
    </>
  );
}
