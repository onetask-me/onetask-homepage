'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';
import { cn, isPathActive } from '@/lib/utils';
import { links } from '@/data/links';
import { Logo } from '../Logo';
import { ModeToggle } from '../mode-toggle';

export const DesktopNavbar = () => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        'w-full flex relative justify-between px-4 py-2 rounded-full bg-transparent transition duration-200',
      )}
    >
      <div className="flex flex-row gap-2 items-center bg-black dark:bg-black rounded-full">
        <Logo />
      </div>

      <nav className="hidden md:grid grid-flow-col gap-8 items-center">
        {links.map(({ href, label, button }, index) => {
          if (button) {
            return (
              <Link
                key={href}
                href={href}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/80 h-8 px-3"
              >
                {label}
              </Link>
            );
          }
          return (
            <Link
              className={clsx(
                'font-bold relative hover:text-foreground transition-all text-sm',
                {
                  'text-foreground': isPathActive(pathname, href),
                  'text-muted-foreground': !isPathActive(pathname, href),
                },
              )}
              href={href}
              key={href}
            >
              {label}
              {isPathActive(pathname, href) ? (
                <motion.span
                  animate={{
                    scale: 1.1,
                  }}
                  transition={{
                    type: 'spring',
                    bounce: 0.2,
                    duration: 0.6,
                  }}
                  layoutId="underline"
                  className="absolute left-0 right-0 block h-[0.0625rem] -bottom-2 bg-primary will-change-transform"
                />
              ) : null}
            </Link>
          );
        })}
        <ModeToggle />
      </nav>
    </div>
  );
};
