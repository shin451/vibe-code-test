import type { ContactContent } from '@/types/content';
import { homeContent } from './home';

const img = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;

export const contactContent: ContactContent = {
  // Directly reuses the "Let's make a plan" form styling from Home (DESIGN.md §Contact).
  form: {
    ...homeContent.form,
    eyebrow: 'Get in touch',
    headline: "Let's make a *plan*.",
    subheadline: 'Questions, bookings or a first visit — drop us a line and we will be in touch within a day.',
  },
  details: [
    { heading: 'Studio', lines: ['Level 18, 101 Collins St', 'Melbourne VIC 3000'] },
    { heading: 'Hours', lines: ['Mon–Fri 6am – 8pm', 'Sat–Sun 7am – 2pm'] },
    { heading: 'Contact', lines: ['hello@rebound.studio', '+61 3 9000 0000'] },
    { heading: 'Getting here', lines: ['Parliament Station, 4 min walk', 'Bike parking on Level 1'] },
  ],
  map: { src: img('1524661135-423995f22d0b'), alt: 'Map to the RE:BOUND studio' },
};
