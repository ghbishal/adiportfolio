import Image from 'next/image';
import { ReactElement } from 'react';
import { Heading } from '@/components/heading';
import { SkillsData } from '@/data/skills';

export const Skills = (): ReactElement => {
  const desList = SkillsData.Designing.map((items) => (
    <div key={items.id} className="skillscard relative">
      <Image
        src={`/images/skills/${items.img}`}
        width={48}
        height={48}
        alt="logos"
        sizes="(max-width: 808px) 50vw, 100vw"
        className="inset-0 m-auto max-h-[48px] max-w-[48px] object-contain"
      />
    </div>
  ));

  const feList = SkillsData.Frontend.map((items) => (
    <div key={items.id} className="skillscard relative">
      <Image
        src={`/images/skills/${items.img}`}
        width={48}
        height={48}
        alt="logos"
        className="inset-0 m-auto max-h-[40px] max-w-[48px] object-contain"
        sizes="(max-width: 808px) 50vw, 100vw"
      />
    </div>
  ));

  return (
    <div id="skills" className="main flex snap-start flex-col">
      <Heading title="Skills" />
      <div className="flex flex-1 flex-wrap content-center items-start gap-6 self-stretch lg:gap-11">
        <div className="flex flex-col-reverse items-start gap-5">
          <p className="text-neutral-500">\\ FIGMA \\ PHOTOSHOP \\ ILLUSTRATOR \\</p>
          <div className="flex content-start items-start justify-between self-stretch">
            {desList}
          </div>
          <h4 className="text-neutral-500">Designing</h4>
        </div>
        <div className="flex flex-1 flex-col-reverse items-start gap-5">
          <p className="text-neutral-500">
            \\ REACT \\ CSS \\ HTML \\ NEXT \\ FRAMER MOTION \\ TAILWIND \\
          </p>
          <div className="flex flex-wrap content-start items-start justify-between gap-5 self-stretch sm:flex-nowrap sm:gap-4 lg:justify-between">
            {feList}
          </div>
          <h4 className="text-neutral-500">Frontend</h4>
        </div>
      </div>
    </div>
  );
};
