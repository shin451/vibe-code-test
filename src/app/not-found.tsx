import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <section className="section-rb">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow mb-5">Error 404</p>
          <h1 className="text-h1">
            This page took a <em className="italic">rest</em> day.
          </h1>
          <p className="mt-5 font-sans text-body-lg text-ink-soft">
            The page you&rsquo;re after doesn&rsquo;t exist. Let&rsquo;s get you back on the mat.
          </p>
          <div className="mt-9 flex justify-center">
            <Button asChild>
              <Link href="/">Back to home</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
