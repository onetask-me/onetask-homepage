import { Container } from '@/components/container';
import { CTA } from '@/components/cta';
import { Testimonials } from '@/components/testimonials';
import { HeroNew } from '@/components/hero-new';

export default function Home() {
  return (
    <div className="relative overflow-hidden antialiased">
      <Container className="min-h-screen flex-col items-center justify-between grid gap-[clamp(2rem,20cqw,11rem)]">
        <HeroNew />

        <Testimonials />
      </Container>

      <CTA />
    </div>
  );
}
