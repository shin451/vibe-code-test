import type { HomeContent } from '@/types/content';

const img = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1400&q=80`;

export const homeContent: HomeContent = {
  hero: {
    headline: 'Change Meets *Softness*',
    subheadline:
      'Slow, deliberate, brutal in the best way — in a room that feels nothing like a gym.',
    ctaText: "Join the Waitlist — It's Free",
    ctaLink: '/contact',
    image: { src: '/images/hero.jpg', alt: 'RE:BOUND studio — Megaformer class in session' },
  },
  whatIsLagree: {
    eyebrow: 'What is Lagree?',
    headline: '*Not Pilates. Not yoga.* Something that borrows from both — and outworks them.',
    body: [
      'Lagree is a low-impact, high-intensity method performed on the Megaformer. Slow tempo, constant tension, zero rest — your muscles work the entire 50 minutes.',
      'It builds strength, endurance and control without the pounding of traditional training. You leave shaking. You come back stronger.',
    ],
    image: { src: img('1591258370814-01609b341790'), alt: 'Close detail of a Megaformer carriage' },
  },
  formats: {
    eyebrow: 'The Method',
    headline: 'Three formats. *One intention.*',
    items: [
      {
        num: '01',
        title: 'Foundation',
        description: 'Your entry to the method. Tempo, breath and form before intensity.',
        duration: '50 min',
        intensity: 'Accessible',
        forWho: 'First-timers & returners',
        ctaText: 'Book Foundation',
        ctaLink: '/services',
        image: { src: img('1554344728-77cf90d9ed26'), alt: 'An instructor guiding a Foundation class' },
      },
      {
        num: '02',
        title: 'Sculpt',
        description: 'The signature class. Relentless tension, full-body burn, no rest.',
        duration: '50 min',
        intensity: 'High',
        forWho: 'Regulars chasing strength',
        ctaText: 'Book Sculpt',
        ctaLink: '/services',
        image: { src: img('1571019613454-1cb2f99b2d8b'), alt: 'A Sculpt class mid-session' },
      },
      {
        num: '03',
        title: 'Restore',
        description: 'Slow, mobility-led work to lengthen, release and recover.',
        duration: '50 min',
        intensity: 'Low',
        forWho: 'Recovery & active rest days',
        ctaText: 'Book Restore',
        ctaLink: '/services',
        image: { src: img('1506126613408-eca07ce68773'), alt: 'A calm Restore session' },
      },
    ],
  },
  testimonial: {
    quote:
      'I came for the body and stayed for the calm. It is the only 50 minutes of my week that feels entirely my own.',
    name: 'Kaitlyn',
    role: 'Beginner',
    image: { src: '/images/hero-quote.jpg', alt: 'Studio interior with arched ceilings' },
  },
  form: {
    eyebrow: 'Get Ready to Transform',
    headline: "Let's make a *plan*.",
    subheadline:
      'Tell us where you are and what you are after. We will match you to the right format and your first class.',
    fields: [
      { name: 'name', label: 'Full name', placeholder: 'Your name', type: 'text', required: true },
      { name: 'email', label: 'Email', placeholder: 'you@email.com', type: 'email', required: true },
      { name: 'message', label: 'Your message', placeholder: 'What are you hoping to get from RE:BOUND?', type: 'textarea' },
    ],
    submitText: 'Reserve my spot',
  },
};
