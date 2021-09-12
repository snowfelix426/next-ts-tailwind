import React from 'react';
import Link from 'next/link';
import { Button } from '@components/Common/Common';
import { ChevronRightIcon } from '@heroicons/react/solid';

export interface IHeroProps {
  content?: any;
}

const Hero = ({ content }: IHeroProps) => {
  const { subtitle, title, backgroundImage, ctaLabel, ctaLink } = content;
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-6 bg-no-repeat bg-cover lg:px-20 md:px-12"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="mx-auto max-w-7xl">
        <span className="text-base font-bold text-white uppercase lg:text-xl">
          {subtitle}
        </span>
        <h1 className="text-5xl leading-none text-white lg:text-7xl pt-3.5 mb-12">
          {title}
        </h1>
        <Link href={ctaLink}>
          <a>
            <Button>
              <span>{ctaLabel}</span>
              <ChevronRightIcon className="w-5 h-5 ml-2.5" />
            </Button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
