'use client';

import { Signup } from '@/components/signup';

export const CTA = () => {
  return (
    <section id="signup" className="py-60 w-full overflow-hidden relative z-30">
      <div className="bg-white dark:bg-black">
        <div className="mx-auto w-full relative z-20 sm:max-w-[40rem]  md:max-w-[48rem] lg:max-w-[64rem] xl:max-w-[80rem] bg-gradient-to-br from-slate-800 dark:from-neutral-900 to-gray-900 rounded-2xl">
          <div className="relative mx-0 rounded-2xl overflow-hidden px-6  md:px-8 ">
            <div
              className="absolute inset-0 w-full h-full opacity-10 bg-noise fade-vignette [mask-image:radial-gradient(#fff,transparent,75%)] rounded-2xl"
              style={{
                backgroundImage: 'url(/noise.webp)',
                backgroundSize: '30%',
              }}
            />

            <div
              className="pointer-events-none absolute inset-y-0 right-0 select-none overflow-hidden rounded-2xl"
              style={{
                mask: 'radial-gradient(33.875rem 33.875rem at calc(100% - 8.9375rem) 0, white 3%, transparent 70%)',
              }}
            />

            <div className="relative px-6 pb-14 pt-20 sm:px-10 sm:pb-20 lg:px-[4.5rem]">
              <h1 className="font-bold text-gradient text-5xl md:text-8xl pb-4 text-center">
                Summer 2024.
              </h1>

              <h2 className="my-8 text-center text-balance mx-auto text-3xl md:text-5xl font-semibold tracking-[-0.015em] text-white">
                Ready to join the waitlist?
              </h2>

              <div className="mt-16 w-full justify-center">
                <Signup />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
