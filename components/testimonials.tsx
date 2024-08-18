'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import React from 'react';
import { cn, variants } from '@/lib/utils';

import { Heading } from './heading';
import { Subheading } from './subheading';

export const Testimonials = () => {
  return (
    <motion.div
      variants={variants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="relative z-20 grid gap-6"
    >
      <div>
        <Heading as="h2">Loved by people from all over the universe</Heading>

        <Subheading className="text-center max-w-lg mx-auto">
          But by Earthlings in particular.
        </Subheading>
      </div>

      <TestimonialGrid />
    </motion.div>
  );
};

const Avatar = ({
  image,
  name,
  profession,
}: {
  image: string;
  name: string;
  profession: string;
}) => (
  <div>
    <div className="grid grid-cols-[auto_1fr] space-x-3 content-start">
      {image && (
        <div className="flex-shrink-0 overflow-hidden rounded-full w-12 h-12 relative">
          <Image src={image} alt="Avatar" fill />
        </div>
      )}

      <div className="grid">
        <div className="text-base leading-normal font-semibold text-black dark:text-white">
          {name}
        </div>

        <div className="text-sm text-muted-foreground">{profession}</div>
        <div className="flex gap-0.5">
          {Array.from(Array(5)).map((_, index) => (
            <Star
              key={index}
              width={18}
              className="fill-amber-400 stroke-0 -mr-0.5"
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Mark = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <mark
    className={cn(
      'dark:text-muted-foreground px-2 py-0.5 mx-0.5 dark:p-0 dark:m-0 rounded-lg bg-[#F3FBA1] dark:bg-transparent',
      className,
    )}
  >
    {children}
  </mark>
);
const Testimonial = ({
  photo,
  profession,
  quote,
  quotee,
  className,
}: {
  photo: string;
  profession: string;
  quote: React.ReactNode;
  quotee: string;
  className?: string;
}) => (
  <motion.div
    variants={variants}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.5 }}
    className={cn(
      'relative grid gap-6 bg-[#F3F3F6] dark:bg-muted p-6 rounded-2xl text-xl',
      className,
    )}
  >
    <div className="leading-tight text-muted-foreground text-base md:text-xl">
      {quote}
    </div>

    <Avatar image={photo} name={quotee} profession={profession} />
  </motion.div>
);

const TestimonialGrid = () => (
  <div className="text-2xl font-normal grid grid-cols-12 gap-4">
    <Testimonial
      className="md:col-start-2 col-span-12 md:col-span-5"
      photo="/testimonial-1.jpg"
      profession="Software developer"
      quote={
        <>
          The first task list that has truly excited me. I get a{' '}
          <Mark>huge sense of satisfaction</Mark> using this app, and it is
          amazing at how well it helps me to prioritize my tasks. Absolutely
          revolutionary.
        </>
      }
      quotee="Anthony McGrath"
    />

    <Testimonial
      className="col-span-12 md:col-span-5"
      photo="/testimonial-3.jpg"
      profession="Author"
      quote={
        <>
          As a creative, I need tools to help me to know what to prioritize. The
          app helps me a lot with its clean user interface and the app does some{' '}
          <Mark className="from-fuchsia-500 via-pink-500 to-purple-600">
            incredibly magic calculations
          </Mark>{' '}
          to show me my most important tasks.
        </>
      }
      quotee="Philippe Ruaudel"
    />

    <Testimonial
      className="md:col-start-2 col-span-12 md:col-span-5"
      photo="/testimonial-4.jpg"
      profession="Author"
      quote={
        <>
          Like <Mark>Notion for tasks</Mark> and incredibly helpful. A
          game-changer...
          <Mark>a life-changer!</Mark>
        </>
      }
      quotee="Rizala Carrington"
    />

    <Testimonial
      className="col-span-12 md:col-span-5"
      photo="/testimonial-2.jpg"
      profession="Coach"
      quote={
        <>
          I’ll finally use a <Mark>to-do app</Mark> 🎉
        </>
      }
      quotee="Diane MalletteBiz"
    />
  </div>
);
