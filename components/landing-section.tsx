'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import { variants } from '@/lib/utils';

interface LandingSectionProps {
  heading: string[];
  subheading: string;
  staticImage: StaticImageData;
  alt: string;
}

export const LandingSection: React.FC<LandingSectionProps> = ({
  heading,
  subheading,
  staticImage,
  alt,
}) => {
  return (
    <motion.div
      variants={variants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="grid grid-cols-12"
    >
      <div className="grid col-span-12 md:col-start-2 md:col-end-12 gap-8">
        <div className="grid gap-4">
          <p className="text-2xl md:text-4xl font-bold">
            {heading.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < heading.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
          <p className="text-base md:text-xl text-neutral-400 max-w-[40ch]">
            {subheading}
          </p>
        </div>
        <Image
          src={staticImage}
          alt={alt}
          className="rounded-2xl border border-neutral-600"
        />
      </div>
    </motion.div>
  );
};
