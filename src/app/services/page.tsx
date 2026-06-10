import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { StatementBlock } from '@/components/sections/StatementBlock';
import { FormatCards } from '@/components/sections/FormatCards';
import { CtaBand } from '@/components/sections/CtaBand';
import { Accent } from '@/components/ui/accent';
import { buildMetadata } from '@/lib/seo';
import { servicesContent as c } from '@/content/services';

export const metadata: Metadata = buildMetadata({
  title: 'Classes',
  description: 'Three Lagree formats on the Megaformer — Foundation, Sculpt and Restore. 50 minutes, low-impact, high-intensity.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <StatementBlock eyebrow={c.hero.eyebrow} headline={c.hero.headline} body={c.hero.body} />

      {/* The three formats, enlarged one-per-row */}
      <FormatCards eyebrow="The formats" headline="Foundation. Sculpt. *Restore.*" items={c.formats} layout="rows" />

      {/* How a class runs — timeline */}
      <section className="section-rb">
        <Container>
          <header className="mb-12 max-w-2xl">
            <p className="eyebrow mb-5">{c.timeline.eyebrow}</p>
            <h2 className="text-h2 md:text-display-l">
              <Accent text={c.timeline.headline} />
            </h2>
          </header>
          <ol className="grid gap-px overflow-hidden rounded-md border border-cream-line bg-cream-line sm:grid-cols-2 lg:grid-cols-4">
            {c.timeline.steps.map((step) => (
              <li key={step.time} className="bg-parchment p-7">
                <span className="font-display text-h3 text-terracotta">{step.time}</span>
                <h3 className="mt-3 font-display text-body-lg text-ink">{step.title}</h3>
                <p className="mt-2 font-sans text-body text-ink-soft">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Full-bleed equipment photo + caption */}
      <section
        className="relative flex min-h-[60vh] items-end overflow-hidden bg-walnut bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(60,46,30,0.7), rgba(60,46,30,0.1)), url(${c.equipment.image.src})`,
        }}
      >
        <Container className="py-12">
          <p className="max-w-xl font-sans text-body-lg text-on-dark/90">{c.equipment.caption}</p>
        </Container>
      </section>

      <CtaBand {...c.cta} tone="taupe" />
    </>
  );
}
