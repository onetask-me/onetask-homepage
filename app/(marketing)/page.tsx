import { Container } from "@/components/container";
import { CTA } from "@/components/cta";
import FAQs from "@/components/faqs";
import { HeroNew } from "@/components/hero-new";
import { HeroTarget } from "@/components/hero-target";
import { LandingSection } from "@/components/landing-section";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import CalDark from "/public/cal-dark.webp";
import CalLight from "/public/cal-light.webp";
import { default as NowDark, default as NowLight } from "/public/now-dark.webp";
import SubtasksDark from "/public/subtasks-dark.webp";
import SubtasksLight from "/public/subtasks-light.webp";

export default function Home() {
  return (
    <div className="relative overflow-hidden antialiased">
      <Container className="min-h-screen flex-col items-center justify-between grid gap-[clamp(2rem,20cqw,11rem)]">
        <HeroNew />

        <Testimonials />

        <LandingSection
          title={
            <>
              Only see what you can work on{" "}
              <span className="bg-gradient-to-r from-rose-400 via-pink-600 to-purple-700 bg-clip-text text-transparent">
                right now
              </span>
              .
            </>
          }
          subheading="Let’s admit it: most to-do apps are broken. They overwhelm us with all of the things we still need to do, without showing us what matters most — only what you can work on in this moment."
          staticImageLight={NowLight}
          staticImageDark={NowDark}
          alt=""
        />

        <LandingSection
          title={
            <>
              Calendar-Driven? Let{" "}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                AI
              </span>{" "}
              schedule your tasks.
            </>
          }
          subheading="With Google Calendar integration, let AI help you by taking the guesswork out of task scheduling."
          staticImageLight={CalLight}
          staticImageDark={CalDark}
          alt=""
        />

        <LandingSection
          title={
            <>
              Stop managing your tasks, and start{" "}
              <span className="bg-gradient-to-r from-green-400 via-yellow-500 to-purple-500 bg-clip-text text-transparent">
                doing
              </span>{" "}
              them.
            </>
          }
          subheading="Let AI simplify your planning and guide you through the steps to complete your project."
          staticImageLight={SubtasksLight}
          staticImageDark={SubtasksDark}
          alt=""
        />

        <HeroTarget />

        <Pricing />

        <FAQs />
      </Container>

      <CTA />
    </div>
  );
}
