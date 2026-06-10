'use client';

import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="section-rb">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow mb-5">Something went wrong</p>
          <h1 className="text-h1">
            Let&rsquo;s try that <em className="italic">again</em>.
          </h1>
          <p className="mt-5 font-sans text-body-lg text-ink-soft">
            An unexpected error occurred. Reload and you should be back in the room.
          </p>
          <div className="mt-9 flex justify-center">
            <Button onClick={reset}>Try again</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
