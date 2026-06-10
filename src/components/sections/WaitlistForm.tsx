'use client';

import * as React from 'react';
import { Input, Textarea } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Accent } from '@/components/ui/accent';
import { Container } from '@/components/layout/Container';
import type { FormContent } from '@/types/content';
import { cn } from '@/lib/utils';

/**
 * DESIGN.md §4.4 — two-column on desktop: left = eyebrow + headline + body;
 * right = form fields (name/email inline, textarea, submit). Reused on Home +
 * Contact.
 */
export function WaitlistForm({ form, withContainer = true }: { form: FormContent; withContainer?: boolean }) {
  const [sent, setSent] = React.useState(false);

  const inner = (
    <div className="grid gap-12 md:grid-cols-2 md:gap-20 md:items-start">
      {/* Left — intro copy */}
      <div>
        <p className="eyebrow mb-5">{form.eyebrow}</p>
        <h2 className="text-h2 md:text-display-l">
          <Accent text={form.headline} />
        </h2>
        {form.subheadline && (
          <p className="mt-5 max-w-prose font-sans text-body-lg text-ink-soft">{form.subheadline}</p>
        )}
      </div>

      {/* Right — form */}
      <div>
        {sent ? (
          <p className="rounded-md border border-cream-line bg-parchment p-6 font-sans text-body text-ink-soft">
            Thank you — we&rsquo;ve got your details and will be in touch within a day.
          </p>
        ) : (
          <form
            className="flex flex-col gap-5"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {form.fields
                .filter((f) => f.type !== 'textarea')
                .map((field) => (
                  <div key={field.name} className="flex flex-col gap-2">
                    <label htmlFor={field.name} className="font-sans text-body-sm text-stone">
                      {field.label}
                    </label>
                    <Input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.required}
                    />
                  </div>
                ))}
            </div>

            {form.fields
              .filter((f) => f.type === 'textarea')
              .map((field) => (
                <div key={field.name} className="flex flex-col gap-2">
                  <label htmlFor={field.name} className="font-sans text-body-sm text-stone">
                    {field.label}
                  </label>
                  <Textarea
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                  />
                </div>
              ))}

            <div>
              <Button type="submit">{form.submitText}</Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );

  if (!withContainer) return inner;

  return (
    <section className={cn('section-rb')}>
      <Container>{inner}</Container>
    </section>
  );
}
