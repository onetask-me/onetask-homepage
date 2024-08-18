import { Container } from '@/components/container';
import { CTA } from '@/components/cta';
import { Testimonials } from '@/components/testimonials';
import { HeroNew } from '@/components/hero-new';
import { LandingSection } from '@/components/landing-section';
import CalendarImage from '/public/calendar.webp';
import TodoImage from '/public/todolist.webp';

export default function Home() {
  return (
    <div className="relative overflow-hidden antialiased">
      <Container className="min-h-screen flex-col items-center justify-between grid gap-[clamp(2rem,20cqw,11rem)]">
        <HeroNew />
        <Testimonials />
        <LandingSection
          heading={['Not sure when to work on it?', 'AI will schedule it.']}
          subheading="Add another bit of relevant supporting text here to backup the claim above."
          staticImage={CalendarImage}
          alt=""
        />
        <LandingSection
          heading={[
            'A to-do app that gives you',
            'your most important',
            'tasks in the correct order.',
          ]}
          subheading="Add another bit of relevant supporting text here to backup the claim above."
          staticImage={TodoImage}
          alt=""
        />
      </Container>

      <CTA />
    </div>
  );
}
