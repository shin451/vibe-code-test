import type { GlobalContent } from '@/types/content';

export const globalContent: GlobalContent = {
  siteName: 'RE:BOUND',
  logo: 'RE:BOUND',
  // DESIGN.md §4.1 — HOME · ABOUT · CLASSES · PRICING · STUDIO · INSTRUCTORS · CONTACT.
  // Routing keeps the starter's /services path (labelled "Classes"); Studio &
  // Instructors deep-link into the About page's matching sections.
  navItems: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Classes', href: '/services' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Studio', href: '/about#studio' },
    { label: 'Instructors', href: '/about#instructors' },
    { label: 'Contact', href: '/contact' },
  ],
  ctaButton: { label: 'Book Now', href: '/contact' },
  footer: {
    address: ['Level 18, 101 Collins Street', 'Melbourne VIC 3000'],
    email: 'hello@rebound.studio',
    phone: '+61 3 9000 1234',
    columns: [
      {
        heading: 'Explore',
        links: [
          { label: 'Pricing & Membership', href: '/pricing' },
          { label: 'Classes & Schedule', href: '/services' },
          { label: 'Booking', href: '/contact' },
          { label: 'Contact', href: '/contact' },
          { label: 'The Studio', href: '/about#studio' },
          { label: 'FAQs', href: '/faqs' },
        ],
      },
      {
        heading: 'Company',
        links: [
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' },
          { label: 'Our Team', href: '/about#instructors' },
          { label: 'Careers', href: '/contact' },
        ],
      },
    ],
    copyright: '© 2026 RE:BOUND Studio. All rights reserved.',
  },
  socials: [
    { platform: 'Instagram', url: 'https://instagram.com' },
    { platform: 'Facebook', url: 'https://facebook.com' },
    { platform: 'X', url: 'https://x.com' },
    { platform: 'LinkedIn', url: 'https://linkedin.com' },
    { platform: 'YouTube', url: 'https://youtube.com' },
  ],
};
