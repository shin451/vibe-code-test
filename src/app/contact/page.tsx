import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { WaitlistForm } from '@/components/sections/WaitlistForm';
import { buildMetadata } from '@/lib/seo';
import { contactContent as c } from '@/content/contact';

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description: 'Get in touch with RE:BOUND — Level 18, 101 Collins St, Melbourne. Bookings, questions and first visits.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <section className="section-rb">
        <Container>
          <div className="grid gap-14 md:grid-cols-[1.2fr_0.8fr] md:gap-20">
            {/* Left — reused waitlist/contact form */}
            <WaitlistForm form={c.form} withContainer={false} />

            {/* Right — studio details */}
            <div className="md:border-l md:border-cream-line md:pl-12">
              <dl className="space-y-8">
                {c.details.map((detail) => (
                  <div key={detail.heading}>
                    <dt className="font-display text-h3 text-ink">{detail.heading}</dt>
                    <dd className="mt-2 space-y-1 font-sans text-body text-ink-soft">
                      {detail.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* Full-width map / studio photo band, framed as a sharp rectangle */}
      <section
        className="min-h-[45vh] bg-walnut bg-cover bg-center"
        role="img"
        aria-label={c.map.alt}
        style={{
          backgroundImage: `linear-gradient(rgba(60,46,30,0.15), rgba(60,46,30,0.15)), url(${c.map.src})`,
        }}
      />
    </>
  );
}
