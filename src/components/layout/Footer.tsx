import Link from 'next/link';
import { Instagram, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import { Container } from './Container';
import { WordmarkSignoff } from './WordmarkSignoff';
import type { GlobalContent } from '@/types/content';

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Instagram,
  Facebook,
  X: Twitter,
  LinkedIn: Linkedin,
  YouTube: Youtube,
};

/** DESIGN.md §4.7 — wordmark sign-off, then parchment footer columns + rule. */
export function Footer({ content, socials, logo }: {
  content: GlobalContent['footer'];
  socials: GlobalContent['socials'];
  logo: string;
}) {
  return (
    <footer>
      <WordmarkSignoff logo={logo} />
      <div className="bg-parchment py-16 md:py-20">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
            {/* Logo + address/contact */}
            <div>
              <Link href="/" className="font-display text-2xl text-ink">
                {logo}
              </Link>
              <address className="mt-5 space-y-1 font-sans text-body-sm not-italic text-stone">
                {content.address.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                <p className="pt-3">
                  <a href={`mailto:${content.email}`} className="transition-colors hover:text-terracotta">
                    {content.email}
                  </a>
                </p>
                <p>
                  <a href={`tel:${content.phone.replace(/\s/g, '')}`} className="transition-colors hover:text-terracotta">
                    {content.phone}
                  </a>
                </p>
              </address>
            </div>

            {/* Link columns */}
            {content.columns.map((col) => (
              <div key={col.heading}>
                <h4 className="eyebrow mb-5">{col.heading}</h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="font-sans text-body-sm text-stone transition-colors hover:text-terracotta"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social row */}
          <div className="mt-14 flex flex-wrap items-center gap-5">
            {socials.map((social) => {
              const Icon = socialIcons[social.platform];
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.platform}
                  className="text-stone transition-colors hover:text-terracotta"
                >
                  {Icon ? <Icon className="size-5" /> : social.platform}
                </a>
              );
            })}
          </div>

          {/* Bottom rule + centred copyright */}
          <div className="mt-10 border-t border-cream-line pt-8">
            <p className="text-center font-sans text-body-sm text-stone">{content.copyright}</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
