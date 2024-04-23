import Image from 'next/image';
import { ReactElement } from 'react';
import { Heading } from '@/components/heading';
import { ExperienceData } from '@/data/experience';

export const Experience = (): ReactElement => {
  const experience = ExperienceData.map((items) => (
    <div
      key={items.id}
      className="flex w-full min-w-[200px] shrink-0 flex-col items-center justify-center gap-3 border-b-[1px] border-neutral-800 p-4 transition-all hover:bg-neutral-900/30 hover:filter-none sm:w-[40vw] sm:border-none sm:p-5  lg:w-[352px]"
    >
      <Image
        src={`/images/exp/${items.img}`}
        width={40}
        height={40}
        alt="Experience Logos"
        className="inset-0 m-auto max-h-[40px] max-w-[40px] object-contain"
      />
      <div className="flex w-full flex-col items-center gap-1">
        <h4 className="text-purple-500">{items.title}</h4>
        <p>{items.company}</p>
      </div>
      <p className="text-neutral-300">{items.time}</p>
    </div>
  ));

  return (
    <div id="experience" className="main top-0 flex snap-start flex-col sm:items-center">
      <div>
        <Heading title="Experience" />
      </div>
      <div className="flex flex-wrap items-end justify-center sm:justify-center lg:gap-5">
        {experience}
      </div>
    </div>
  );
};
