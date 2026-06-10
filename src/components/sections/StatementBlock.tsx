import { Container } from '@/components/layout/Container';
import { Accent } from '@/components/ui/accent';
import { cn } from '@/lib/utils';

interface StatementBlockProps {
  eyebrow: string;
  headline: string;
  body?: string[];
  image?: { src: string; alt: string };
  /** Place the image on the left (text right) instead of the default right. */
  imageLeft?: boolean;
  /** Taupe band instead of parchment. */
  tone?: 'parchment' | 'taupe';
  className?: string;
  children?: React.ReactNode;
}

/**
 * DESIGN.md §4.6 — the repeating editorial unit:
 * eyebrow → serif statement (roman + italic) → body → (optional CTA via
 * children), optionally paired with an image to the side.
 */
export function StatementBlock({
  eyebrow,
  headline,
  body,
  image,
  imageLeft = false,
  tone = 'parchment',
  className,
  children,
}: StatementBlockProps) {
  return (
    <section className={cn('section-rb', tone === 'taupe' && 'bg-taupe', className)}>
      <Container>
        <div
          className={cn(
            'grid items-center gap-10 md:gap-16',
            image && 'md:grid-cols-2',
          )}
        >
          <div className={cn(image && imageLeft && 'md:order-2')}>
            <p className={cn('eyebrow mb-5', tone === 'taupe' && 'text-walnut')}>{eyebrow}</p>
            <h2 className="text-h2 md:text-display-l">
              <Accent text={headline} />
            </h2>
            {body?.map((p, i) => (
              <p
                key={i}
                className={cn(
                  'mt-5 max-w-prose font-sans text-body-lg',
                  tone === 'taupe' ? 'text-walnut/90' : 'text-ink-soft',
                )}
              >
                {p}
              </p>
            ))}
            {children && <div className="mt-8">{children}</div>}
          </div>

          {image && (
            <div
              className="aspect-[4/5] w-full rounded-md bg-walnut bg-cover bg-center"
              role="img"
              aria-label={image.alt}
              style={{
                backgroundImage: `linear-gradient(rgba(60,46,30,0.05), rgba(60,46,30,0.05)), url(${image.src})`,
              }}
            />
          )}
        </div>
      </Container>
    </section>
  );
}
