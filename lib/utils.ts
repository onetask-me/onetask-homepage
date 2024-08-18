import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isPathActive(pathname: string, href: string) {
  const regex = new RegExp(`^${href}`);
  return regex.test(pathname);
}
