"use client";
import { variants } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface LandingSectionProps {
  subheading: string;
  staticImageLight: StaticImageData;
  staticImageDark: StaticImageData;
  title?: React.ReactNode;
  alt: string;
}

export const LandingSection: React.FC<LandingSectionProps> = ({
  subheading,
  staticImageLight,
  staticImageDark,
  title,
  alt,
}) => {
  const { theme } = useTheme();

  return (
    <motion.div
      variants={variants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="grid grid-cols-12"
    >
      <div className="grid col-span-12 md:col-start-2 md:col-end-12 gap-8">
        <p className="text-2xl md:text-4xl font-bold">{title}</p>

        <p className="text-base md:text-xl text-neutral-400 max-w-4xl">
          {subheading}
        </p>

        <Image
          src={theme === "light" ? staticImageLight : staticImageDark}
          alt={alt}
          className="rounded-2xl border border-border/20"
        />
      </div>
    </motion.div>
  );
};
