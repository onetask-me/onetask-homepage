import React, { FC, PropsWithChildren } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { Star } from 'lucide-react';

export interface SocialProofProps {
  people: Array<{ imgSrc: string }>;
  message?: string;
  className?: string;
  stars: 1 | 2 | 3 | 4 | 5;
}

const SocialProof: FC<PropsWithChildren<SocialProofProps>> = ({
  people,
  message,
  className,
  stars,
}) => {
  if (!people.length) {
    return null;
  }
  return (
    <div className="@container">
      <div
        className={clsx(
          'grid items-center justify-items-center justify-center gap-1',
          className,
        )}
      >
        <div className="flex [&>:not(:first-child)]:-ml-3">
          {people.map((person, index) => {
            return (
              <Image
                key={index}
                src={person.imgSrc}
                width={34}
                height={34}
                alt="Happy customer"
                className="rounded-full shadow drop-shadow-md hover:-translate-y-1 hover:scale-105 transition-all border-2 border-[#F3F3F6] dark:border-black"
              />
            );
          })}
        </div>

        <div className="grid gap-y-1">
          {message ? (
            <p className="text-xs text-balance max-w-[40ch]">{message}</p>
          ) : null}
        </div>
        <div className="flex gap-0.5 m-auto">
          {Array.from(Array(stars)).map((_, index) => (
            <Star
              key={index}
              width={18}
              className="fill-amber-400 stroke-0 -mr-0.5"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
