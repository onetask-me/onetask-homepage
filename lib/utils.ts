import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Variants } from 'framer-motion';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isPathActive(pathname: string, href: string) {
  const regex = new RegExp(`^${href}`);
  return regex.test(pathname);
}

export const variants: Variants = {
  offscreen: {
    y: 20,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.15,
      type: 'tween',
      duration: 0.25,
      ease: 'easeIn',
    },
  },
};
