// ─── Content Types ──────────────────────────────────────────────────────────
// Every content file imports its shape from here. The OhhWells Content API
// serves data matching these interfaces.

// ── Brand ────────────────────────────────────────────────────────────────────
export interface BrandColors {
  parchment: string;
  taupe: string;
  terracotta: string;
  espresso: string;
  walnut: string;
  ink: string;
  inkSoft: string;
  stone: string;
  clay: string;
  creamLine: string;
  onDark: string;
}

export interface Brand {
  colors: BrandColors;
  fonts: { display: string; sans: string };
  radius: { sm: string; md: string; pill: string };
  maxWidth: string;
}

// ── Global / chrome ───────────────────────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface FooterColumn {
  heading: string;
  links: NavItem[];
}

export interface GlobalContent {
  siteName: string;
  logo: string;
  navItems: NavItem[];
  ctaButton: { label: string; href: string };
  footer: {
    address: string[];
    email: string;
    phone: string;
    columns: FooterColumn[];
    copyright: string;
  };
  socials: SocialLink[];
}

// ── Shared section shapes ──────────────────────────────────────────────────────
export interface ImageRef {
  src: string;
  alt: string;
}

/** A headline string may carry one italic accent via *asterisks*. */
export type AccentHeadline = string;

export interface EyebrowStatement {
  eyebrow: string;
  headline: AccentHeadline;
  body?: string[];
}

export interface HeroContent {
  eyebrow?: string;
  headline: AccentHeadline;
  subheadline?: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  image: ImageRef;
}

export interface FormatCard {
  num: string;
  title: string;
  description: string;
  duration: string;
  intensity: string;
  forWho: string;
  ctaText: string;
  ctaLink: string;
  image: ImageRef;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: ImageRef;
}

export interface PricingTier {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  featured?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqGroup {
  group: string;
  items: FaqItem[];
}

export interface ContactField {
  name: string;
  label: string;
  placeholder: string;
  type: 'text' | 'email' | 'textarea';
  required?: boolean;
}

export interface FormContent {
  eyebrow: string;
  headline: AccentHeadline;
  subheadline?: string;
  fields: ContactField[];
  submitText: string;
}

// ── Page content ───────────────────────────────────────────────────────────────
export interface HomeContent {
  hero: HeroContent;
  whatIsLagree: EyebrowStatement & { image: ImageRef };
  formats: { eyebrow: string; headline: AccentHeadline; items: FormatCard[] };
  testimonial: Testimonial & { image: ImageRef };
  form: FormContent;
}

export interface ValueBlock {
  title: string;
  body: string;
}

export interface InstructorCard {
  name: string;
  role: string;
  image: ImageRef;
}

export interface AboutContent {
  hero: EyebrowStatement;
  founder: { headline: AccentHeadline; body: string[]; image: ImageRef };
  values: { eyebrow: string; headline: AccentHeadline; items: ValueBlock[] };
  ethos: { quote: string; image: ImageRef };
  instructors: { eyebrow: string; headline: AccentHeadline; items: InstructorCard[] };
  cta: { eyebrow: string; headline: AccentHeadline; ctaText: string; ctaLink: string };
}

export interface TimelineStep {
  time: string;
  title: string;
  body: string;
}

export interface ServicesContent {
  hero: EyebrowStatement;
  formats: FormatCard[];
  timeline: { eyebrow: string; headline: AccentHeadline; steps: TimelineStep[] };
  equipment: { caption: string; image: ImageRef };
  cta: { eyebrow: string; headline: AccentHeadline; ctaText: string; ctaLink: string };
}

export interface PricingContent {
  hero: EyebrowStatement;
  tiers: PricingTier[];
  highlight: { eyebrow: string; headline: AccentHeadline; body: string; ctaText: string; ctaLink: string };
  faqTeaser: FaqGroup;
}

export interface StudioDetail {
  heading: string;
  lines: string[];
}

export interface ContactContent {
  form: FormContent;
  details: StudioDetail[];
  map: ImageRef;
}

export interface FaqsContent {
  hero: EyebrowStatement;
  groups: FaqGroup[];
  cta: { eyebrow: string; headline: AccentHeadline; ctaText: string; ctaLink: string };
}
