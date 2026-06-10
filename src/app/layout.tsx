import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { globalContent } from '@/content/global';
import { fontClasses } from '@/lib/fonts';
import { buildMetadata } from '@/lib/seo';
import '@/styles/globals.css';

export const metadata: Metadata = buildMetadata({
  title: 'Lagree & Megaformer Studio',
  description:
    'RE:BOUND is a warm, editorial Lagree studio in Melbourne. Discipline meets softness — low-impact, high-intensity Megaformer classes.',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontClasses}>
      <body>
        <Navbar
          items={globalContent.navItems}
          logo={globalContent.logo}
          ctaButton={globalContent.ctaButton}
        />
        <main className="pt-16">{children}</main>
        <Footer
          content={globalContent.footer}
          socials={globalContent.socials}
          logo={globalContent.logo}
        />
      </body>
    </html>
  );
}
