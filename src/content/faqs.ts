import type { FaqsContent } from '@/types/content';

export const faqsContent: FaqsContent = {
  hero: {
    eyebrow: 'Good to know',
    headline: 'Everything before your *first class*.',
    body: ['New to the Megaformer? Here is the short version. Anything we missed lives one message away on the contact page.'],
  },
  groups: [
    {
      group: 'Getting Started',
      items: [
        { question: 'I have never done Lagree. Where do I start?', answer: 'Begin with Foundation. It teaches the tempo, breath and form the method is built on — no experience needed.' },
        { question: 'What should I bring?', answer: 'Just water and grip socks (we sell them, or bring your own). Everything else is provided.' },
        { question: 'How early should I arrive?', answer: 'Ten minutes before your first class so we can set up your Megaformer together.' },
      ],
    },
    {
      group: 'Classes',
      items: [
        { question: 'How long is a class?', answer: 'Every class runs exactly 50 minutes, from warm-up to final stretch.' },
        { question: 'Is it suitable if I am injured?', answer: 'Lagree is low-impact and joint-friendly, but tell your coach beforehand so they can modify.' },
        { question: 'How often should I come?', answer: 'Two to three times a week is the sweet spot for steady, sustainable strength.' },
      ],
    },
    {
      group: 'Membership & Billing',
      items: [
        { question: 'Can I freeze my membership?', answer: 'Unlimited members can freeze up to four weeks per year at no cost.' },
        { question: 'What is your cancellation policy?', answer: 'Cancel anytime before your next billing date. No exit fees.' },
        { question: 'Do class credits expire?', answer: 'Credits remain valid for six months on any active account.' },
      ],
    },
    {
      group: 'The Studio',
      items: [
        { question: 'Where are you located?', answer: 'Level 18, 101 Collins St, Melbourne — a four-minute walk from Parliament Station.' },
        { question: 'Do you have showers?', answer: 'Yes — full change rooms with showers, towels and amenities.' },
        { question: 'Is there parking?', answer: 'Bike parking is on Level 1; paid car parking is available in the building.' },
      ],
    },
  ],
  cta: {
    eyebrow: 'Still curious?',
    headline: 'Still have *questions*?',
    ctaText: 'Talk to us',
    ctaLink: '/contact',
  },
};
