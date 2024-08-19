"use client";
import SocialProof, { SocialProofProps } from "@/components/SocialProof";
import { variants } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import ListDark from "/public/list-dark.webp";
import ListLight from "/public/list-light.webp";

const dir = "/";

const images: SocialProofProps["people"] = [
  "testimonial-1.jpg",
  "testimonial-2.jpg",
  "testimonial-3.jpg",
  "testimonial-4.jpg",
].map((image) => ({
  imgSrc: dir + image,
}));

export const HeroNew = () => {
  const { theme } = useTheme();

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
          message="Loved by creatives and entrepreneurs from all over the world"
          className="-mb-4"
        />
      ) : null}

      <motion.h1 className="md:text-6xl text-4xl font-bold">
        An AI to-do app for{" "}
        <span className="bg-gradient-to-r from-fuchsia-400 via-blue-500 to-teal-300 bg-clip-text text-transparent">
          creatives
        </span>{" "}
        that prioritizes your tasks for you.
      </motion.h1>

      <p className="text-2xl text-neutral-400 max-w-[60ch] m-auto">
        A simple, fully automated to-do app that helps you get things done.
      </p>

      <div>
        <Link
          href="/#signup"
          className="gap-x-2 content-center inline-flex items-center justify-center whitespace-nowrap rounded-full font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/80 h-16 px-8 text-xl drop-shadow"
        >
          Join the waitlist
        </Link>
      </div>

      <Image
        alt="Add alt text here"
        src={theme === "light" ? ListLight : ListDark}
        className="rounded-2xl border border-border/20"
      />
    </motion.div>
  );
};
