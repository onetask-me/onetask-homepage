"use client";
import { cn, variants } from "@/lib/utils";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

import { Heading } from "./heading";

export const Testimonials = () => {
  return (
    <motion.div
      variants={variants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="relative z-20 grid gap-6"
    >
      <Heading as="h2">Loved by people from all over</Heading>

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
  <span
    className={cn(
      "px-2 py-0.5 mx-0.5 font-medium rounded-lg text-white bg-gradient-to-br",
      className
    )}
  >
    {children}
  </span>
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
      "relative grid gap-6 bg-[#F3F3F6] dark:bg-muted p-6 rounded-2xl text-xl",
      className
    )}
  >
    <div className="leading-tight text-muted-foreground text-base md:text-xl">
      {quote}
    </div>

    <Avatar image={photo} name={quotee} profession={profession} />
  </motion.div>
);

const TestimonialGrid = () => (
  <div className="text-2xl font-normal grid grid-cols-12 gap-8">
    <Testimonial
      className="md:col-start-2 col-span-12 md:col-span-5"
      photo="/testimonial-1.jpg"
      profession="Software developer"
      quote={
        <>
          The first task list that has truly excited me. I get a{" "}
          <Mark className="from-fuchsia-500 via-pink-500 to-purple-600">
            huge sense of satisfaction
          </Mark>{" "}
          using this app, and it is amazing at how well it helps me to
          prioritize my tasks. Absolutely revolutionary.
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
          app helps me a lot with its clean user interface and the app does some{" "}
          <Mark className="from-blue-500 via-green-500 to-yellow-500">
            incredibly magic calculations
          </Mark>{" "}
          to show me my most important tasks.
        </>
      }
      quotee="Philippe Ruaudel"
    />

    <Testimonial
      className="md:col-start-2 col-span-12 md:col-span-5"
      photo="/testimonial-4.jpg"
      profession="Marketing Exec"
      quote={
        <>
          Like{" "}
          <Mark className="from-green-400 via-blue-500 to-purple-600 bg-gradient-to-r">
            Notion for tasks
          </Mark>{" "}
          and incredibly helpful. A game-changer...
          <Mark className="from-blue-500 via-green-500 to-yellow-500 bg-gradient-to-r">
            a life-changer!
          </Mark>
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
          I’ll finally use a{" "}
          <Mark className="from-fuchsia-500 via-pink-500 to-purple-600 bg-gradient-to-r">
            to-do app
          </Mark>{" "}
          🎉
        </>
      }
      quotee="Diane MalletteBiz"
    />
  </div>
);
