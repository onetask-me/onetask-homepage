'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import SocialProof, { SocialProofProps } from '@/components/SocialProof';
import CardsImage from '/public/cards.webp';
import { variants } from '@/lib/utils';

const dir = '/';

const images: SocialProofProps['people'] = [
  'testimonial-1.jpg',
  'testimonial-2.jpg',
  'testimonial-3.jpg',
  'testimonial-4.jpg',
].map((image) => ({
  imgSrc: dir + image,
}));

export const HeroNew = () => {
  return (
    <motion.div
      variants={variants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="grid gap-10 pt-20 justify-items-center md:pt-40 relative text-balance text-center"
    >
      {images.length ? (
        <SocialProof
          stars={5}
          people={images}
          message="Loved by Entrepreneurs from all over the world"
          className="-mb-4"
        />
      ) : null}
      <motion.h1 className="md:text-6xl text-4xl font-bold">
        The AI to-do app for people who think differently.
      </motion.h1>
      <p className="text-2xl text-neutral-400 max-w-[60ch] m-auto">
        Add a further problem agitation or benefit here that supports the main
        problem agitation.
      </p>
      <div>
        <Link
          href="/#signup"
          className="gap-x-2 content-center inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/80 h-16 px-8 text-xl drop-shadow"
        >
          Join the waitlist
        </Link>
      </div>
      <Image
        alt="Add alt text here"
        src={CardsImage}
        className="rounded-2xl border border-neutral-600"
      />
    </motion.div>
  );
};
