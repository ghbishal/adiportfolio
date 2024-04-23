import Image from 'next/image';
import { ReactElement } from 'react';
import { SITE } from '@/config';

export const Hero = (): ReactElement => {
  const designerDescription = SITE.description.split(' / ')[0];
  return (
    <div className="main relative z-10 flex snap-start flex-wrap justify-center pt-40 sm:flex-nowrap sm:justify-between lg:h-screen">
      <div className="absolute -top-7 flex size-[22rem] flex-col items-center justify-center sm:absolute sm:right-8 sm:top-8 lg:relative lg:inset-0">
        <hr className="undEff top-[104px] w-11/12" />
        <hr className="undEff top-[194px] w-11/12" />
        <hr className="undEff top-[156px] w-11/12" />
        <hr className="undEff top-[246px] w-11/12" />
        <h1 className="text-center uppercase text-purple-500 sm:text-left">
          {SITE.firstName}
          <br />
          {SITE.lastName}
        </h1>
      </div>
      <div className="z-10 flex flex-col items-center sm:relative sm:-z-10 lg:z-0 ">
        <p className="-top-4 -z-10 mx-auto hidden w-max text-2xl uppercase text-neutral-50 opacity-10 sm:absolute sm:tracking-[1.75rem] lg:block ">
          Crafting Experience
        </p>
        <div>
          <Image
            src="/images/heroImage.webp"
            width={352}
            height={458}
            alt="Image of Aditya"
            className="z-10 object-cover"
            priority={true}
          />
        </div>
        <hr className="z-20 w-4/5 border-neutral-500" />
      </div>
      <div className="mt-auto flex w-[22rem] flex-col items-center gap-[1rem] text-center sm:items-start sm:text-left lg:static">
        <h3>{designerDescription}</h3>
        <p className="text-neutral-400">{SITE.aboutMe}</p>
      </div>
    </div>
  );
};
