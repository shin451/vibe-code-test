import { Hero } from '@/components/sections/Hero';
import { StatementBlock } from '@/components/sections/StatementBlock';
import { FormatCards } from '@/components/sections/FormatCards';
import { Testimonial } from '@/components/sections/Testimonial';
import { WaitlistForm } from '@/components/sections/WaitlistForm';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { homeContent as c } from '@/content/home';

export default function HomePage() {
  return (
    <>
      <Hero hero={c.hero} />

      <StatementBlock
        eyebrow={c.whatIsLagree.eyebrow}
        headline={c.whatIsLagree.headline}
        body={c.whatIsLagree.body}
        image={c.whatIsLagree.image}
      >
        <Button asChild variant="dark">
          <Link href="/services">Learn About Lagree</Link>
        </Button>
      </StatementBlock>

      <FormatCards
        eyebrow={c.formats.eyebrow}
        headline={c.formats.headline}
        items={c.formats.items}
        viewAllHref="/services"
      />

      <Testimonial
        data={c.testimonial}
        ctaButtons={[
          { label: 'View Packages & Membership', href: '/pricing', variant: 'dark' },
          { label: 'Book a Session', href: '/contact', variant: 'ghostLight' },
        ]}
      />

      <WaitlistForm form={c.form} />
    </>
  );
}
