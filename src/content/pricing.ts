import type { PricingContent } from '@/types/content';

export const pricingContent: PricingContent = {
  hero: {
    eyebrow: 'Membership & Packages',
    headline: 'Pay for the work, *not the noise*.',
    body: ['No lock-ins, no loud "best value" badges. Three honest ways in — start small, settle into a rhythm, or go all in.'],
  },
  tiers: [
    {
      name: 'Intro Offer',
      price: '$49',
      cadence: 'for 2 weeks',
      description: 'Unlimited classes for your first fortnight. The best way to feel the method.',
      features: ['Unlimited classes, 14 days', 'Any format, any time', 'Free grip socks', 'No commitment'],
      ctaText: 'Start the intro',
      ctaLink: '/contact',
    },
    {
      name: 'Class Packs',
      price: '$280',
      cadence: 'for 10 classes',
      description: 'Flexible credits that never expire on an active account. Train on your terms.',
      features: ['10 class credits', 'Valid 6 months', 'Book up to 7 days ahead', 'Shareable with a partner'],
      ctaText: 'Buy a pack',
      ctaLink: '/contact',
      featured: true,
    },
    {
      name: 'Unlimited',
      price: '$320',
      cadence: 'per month',
      description: 'For the committed. Every class, every week, plus priority booking.',
      features: ['Unlimited classes', 'Priority 14-day booking', '2 guest passes / month', 'Freeze up to 4 weeks / year'],
      ctaText: 'Go unlimited',
      ctaLink: '/contact',
    },
  ],
  highlight: {
    eyebrow: 'On us',
    headline: 'Your first class is *free*.',
    body: 'Never tried Lagree? Come in for a complimentary Foundation class before you commit to anything.',
    ctaText: 'Claim your free class',
    ctaLink: '/contact',
  },
  faqTeaser: {
    group: 'Billing, briefly',
    items: [
      { question: 'Can I freeze my membership?', answer: 'Yes — Unlimited members can freeze up to four weeks per year, no questions asked.' },
      { question: 'How do cancellations work?', answer: 'Cancel anytime before your next billing date. No exit fees, ever.' },
      { question: 'Do class credits expire?', answer: 'Credits stay valid for six months on any active account.' },
    ],
  },
};
