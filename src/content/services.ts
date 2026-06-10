import type { ServicesContent } from '@/types/content';
import { homeContent } from './home';

const img = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;

export const servicesContent: ServicesContent = {
  hero: {
    eyebrow: 'Choose your class',
    headline: 'Three ways to *work*.',
    body: [
      'Every class runs 50 minutes on the Megaformer. Same equipment, same intention — different intensity. Start with Foundation, build into Sculpt, recover with Restore.',
    ],
  },
  // Reuse the three formats from Home, the backbone of the Services page.
  formats: homeContent.formats.items,
  timeline: {
    eyebrow: 'What to expect',
    headline: 'How a class *runs*.',
    steps: [
      { time: '0:00', title: 'Arrive & settle', body: 'Shoes off, water down, find your Megaformer. We set spring load together.' },
      { time: '0:05', title: 'Warm & align', body: 'Slow activation to wake the core and dial in your form before load.' },
      { time: '0:15', title: 'The work', body: 'Continuous tension, slow tempo, no rest between transitions. This is the burn.' },
      { time: '0:45', title: 'Release', body: 'Guided stretch and breath to lengthen everything you just shortened.' },
    ],
  },
  equipment: {
    caption: 'The Megaformer — our only piece of equipment, and the only one you need.',
    image: { src: img('1534438327276-14e5300c3a48'), alt: 'A row of Megaformers in the studio' },
  },
  cta: {
    eyebrow: 'Ready?',
    headline: 'Book your *first* class.',
    ctaText: 'Reserve my spot',
    ctaLink: '/contact',
  },
};
