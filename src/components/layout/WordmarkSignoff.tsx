import { Container } from './Container';

/**
 * DESIGN.md §4.7 — giant full-bleed RE:BOUND wordmark over a faint studio
 * photo. The brand "sign-off" band that closes every page, above the footer.
 */
export function WordmarkSignoff({ logo }: { logo: string }) {
  return (
    <section
      aria-hidden
      className="relative overflow-hidden bg-walnut bg-cover bg-center py-20 md:py-28"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(60,46,30,0.72), rgba(60,46,30,0.82)), url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1800&q=70)',
      }}
    >
      <Container>
        <p className="select-none text-center font-display text-[clamp(3.5rem,18vw,16rem)] leading-none tracking-tight text-on-dark/90">
          {logo}
        </p>
      </Container>
    </section>
  );
}
