import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { StatementBlock } from '@/components/sections/StatementBlock';
import { CtaBand } from '@/components/sections/CtaBand';
import { Accent } from '@/components/ui/accent';
import { buildMetadata } from '@/lib/seo';
import { aboutContent as c } from '@/content/about';

export const metadata: Metadata = buildMetadata({
  title: 'About',
  description: 'The story behind RE:BOUND — a warm, exacting Lagree studio in Melbourne where discipline meets softness.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      {/* Short hero — eyebrow statement on parchment, no full photo */}
      <StatementBlock eyebrow={c.hero.eyebrow} headline={c.hero.headline} body={c.hero.body} />

      {/* Founder / philosophy two-column (image left) */}
      <StatementBlock
        eyebrow="The Founder"
        headline={c.founder.headline}
        body={c.founder.body}
        image={c.founder.image}
        imageLeft
      />

      {/* Taupe values band */}
      <section className="section-rb bg-taupe">
        <Container>
          <header className="mb-12 max-w-2xl">
            <p className="eyebrow mb-5 text-walnut">{c.values.eyebrow}</p>
            <h2 className="text-h2 text-walnut md:text-display-l">
              <Accent text={c.values.headline} />
            </h2>
          </header>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {c.values.items.map((v) => (
              <div key={v.title} className="border-t border-walnut/25 pt-5">
                <h3 className="font-display text-h3 text-walnut">{v.title}</h3>
                <p className="mt-3 font-sans text-body text-walnut/90">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Full-bleed studio photo with one-line ethos */}
      <section
        className="relative flex min-h-[60vh] items-center overflow-hidden bg-walnut bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(60,46,30,0.5), rgba(60,46,30,0.5)), url(${c.ethos.image.src})`,
        }}
      >
        <Container>
          <p className="mx-auto max-w-3xl text-center font-display text-h2 italic text-on-dark md:text-display-l">
            {c.ethos.quote}
          </p>
        </Container>
      </section>

      {/* Instructors preview row */}
      <section className="section-rb">
        <Container>
          <header className="mb-12 max-w-2xl">
            <p className="eyebrow mb-5">{c.instructors.eyebrow}</p>
            <h2 className="text-h2 md:text-display-l">
              <Accent text={c.instructors.headline} />
            </h2>
          </header>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {c.instructors.items.map((person) => (
              <figure key={person.name}>
                <div
                  role="img"
                  aria-label={person.image.alt}
                  className="aspect-[4/5] w-full rounded-md bg-walnut bg-cover bg-center"
                  style={{ backgroundImage: `url(${person.image.src})` }}
                />
                <figcaption className="mt-4">
                  <p className="font-sans text-body-sm uppercase tracking-[0.14em] text-ink">{person.name}</p>
                  <p className="mt-1 font-display text-body-lg italic text-stone">{person.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand {...c.cta} tone="taupe" />
    </>
  );
}
