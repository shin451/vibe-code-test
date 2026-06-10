import type { AboutContent } from '@/types/content';

const img = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1400&q=80`;

export const aboutContent: AboutContent = {
  hero: {
    eyebrow: 'Our Story',
    headline: 'A studio built on *restraint*.',
    body: [
      'RE:BOUND began with a simple frustration: fitness had become loud. We wanted somewhere quiet, warm and exacting — where the work speaks and nothing else competes.',
    ],
  },
  founder: {
    headline: 'Discipline meets *softness*.',
    body: [
      'Our founder spent a decade between Megaformer studios in LA and Sydney before opening RE:BOUND in Melbourne. The method never changed — the room did.',
      'We traded mirrors and neon for parchment walls, warm light and equipment treated like furniture. The intensity is the same. The feeling is entirely different.',
      'We believe strength is built slowly, and that how a place feels changes how hard you are willing to work in it.',
    ],
    image: { src: img('1517836357463-d25dfeac3438'), alt: 'The founder in the studio' },
  },
  values: {
    eyebrow: 'What we hold to',
    headline: 'Four things we *never* compromise.',
    items: [
      { title: 'Form first', body: 'Intensity is earned. We coach mechanics before we ask for effort.' },
      { title: 'Small rooms', body: 'Capped class sizes so every body is seen and corrected.' },
      { title: 'Warm, not stark', body: 'A space closer to a boutique hotel than a gym, by design.' },
      { title: 'Slow strength', body: 'Real progress over fast burnout. We are in this for years, not weeks.' },
    ],
  },
  ethos: {
    quote: 'Train hard. Move quietly. Leave better than you came.',
    image: { src: img('1599058917765-a780eda07a3e'), alt: 'The studio space at golden hour' },
  },
  instructors: {
    eyebrow: 'The Team',
    headline: 'The people in the *room*.',
    items: [
      { name: 'Sana K.', role: 'Head Coach', image: { src: img('1438761681033-6461ffad8d80'), alt: 'Portrait of Sana K.' } },
      { name: 'Theo R.', role: 'Lagree Lead', image: { src: img('1500648767791-00dcc994a43e'), alt: 'Portrait of Theo R.' } },
      { name: 'Imogen W.', role: 'Restore Coach', image: { src: img('1494790108377-be9c29b29330'), alt: 'Portrait of Imogen W.' } },
      { name: 'Dev P.', role: 'Foundation Coach', image: { src: img('1507003211169-0a1dd7228f2d'), alt: 'Portrait of Dev P.' } },
    ],
  },
  cta: {
    eyebrow: 'Come in',
    headline: 'Come see the *space*.',
    ctaText: 'Book a visit',
    ctaLink: '/contact',
  },
};
