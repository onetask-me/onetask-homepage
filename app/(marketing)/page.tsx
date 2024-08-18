import { BlurImage } from "@/components/blur-image";
import { Container } from "@/components/container";
import { CTA } from "@/components/cta";
import { Hero } from "@/components/hero";
import { HeroHighlight } from "@/components/hero-highlight";
import { HeroSubtasks } from "@/components/hero-subtasks";
import { HeroTarget } from "@/components/hero-target";
import { Testimonials } from "@/components/testimonials";
import { Highlight } from "@/components/ui/hero-highlight";
import { ContainerScroll } from "@/components/ui/scroll-animation";

export default function Home() {
  return (
    <div className="relative overflow-hidden antialiased">
      <Container className="flex min-h-screen flex-col items-center justify-between ">
        <Hero />

        <HeroHighlight />

        <ContainerScroll
          header={
            <>
              Overwhelmed?
              <br />
              Complete{" "}
              <Highlight
                className="text-white from-green-400 via-blue-500 to-indigo-600"
                delay={0.5}
              >
                one task
              </Highlight>{" "}
              <Highlight delay={1}>at a time.</Highlight>
            </>
          }
        >
          <BlurImage
            src="/cards.webp"
            alt="header"
            width={800}
            height={800}
            className="rounded-[20px] w-full h-full object-cover object-bottom flex-shrink-0"
          />
        </ContainerScroll>

        <HeroTarget />

        <ContainerScroll
          header={
            <>
              A to-do app that gives you{" "}
              <Highlight
                className="text-white from-fuchsia-500 via-pink-500 to-purple-600"
                delay={0.5}
              >
                your most important tasks
              </Highlight>
              <br />
              in the correct order.
            </>
          }
        >
          <BlurImage
            src="/todolist.webp"
            alt="header"
            width={800}
            height={800}
            className="rounded-[20px] w-full h-full object-cover object-bottom flex-shrink-0"
          />
        </ContainerScroll>

        <HeroSubtasks />

        <ContainerScroll
          header={
            <>
              Not sure when to work on it?
              <br />
              <Highlight
                className="text-white from-yellow-500 via-orange-500 to-red-600"
                delay={0.5}
              >
                AI will schedule it
              </Highlight>
              .
            </>
          }
        >
          <BlurImage
            src="/calendar.webp"
            alt="header"
            width={800}
            height={800}
            className="rounded-[20px] w-full h-full object-cover object-bottom flex-shrink-0"
          />
        </ContainerScroll>

        <Testimonials />
      </Container>

      <CTA />
    </div>
  );
}
