'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react';

type WorkItem = {
  id: number;
  title: string;
  img: string;
  workurl: string;
  workurlmob: string;
  workurlmed: string;
};

const WorkData: WorkItem[] = [
  {
    id: 1,
    title: 'Hostel Hives',
    img: 'hostelhives.webp',
    workurl:
      'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F757oKj2Nr3KoZLig52EKl9%2FPersonal-Portfolio%3Fpage-id%3D1549%253A2746%26type%3Ddesign%26node-id%3D1549-3231%26viewport%3D526%252C372%252C0.09%26t%3D4kf0c8kqetOfjaNI-1%26scaling%3Dscale-down-width%26starting-point-node-id%3D1549%253A3231%26mode%3Ddesign%26hide-ui%3D1',
    workurlmob:
      'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F757oKj2Nr3KoZLig52EKl9%2FPersonal-Portfolio%3Fpage-id%3D1549%253A2746%26type%3Ddesign%26node-id%3D1549-3712%26viewport%3D526%252C372%252C0.09%26t%3D4kf0c8kqetOfjaNI-1%26scaling%3Dscale-down-width%26starting-point-node-id%3D1549%253A3712%26mode%3Ddesign%26hide-ui%3D1',
    workurlmed:
      'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F757oKj2Nr3KoZLig52EKl9%2FPersonal-Portfolio%3Fpage-id%3D1549%253A2746%26type%3Ddesign%26node-id%3D1549-2750%26viewport%3D526%252C372%252C0.09%26t%3D4kf0c8kqetOfjaNI-1%26scaling%3Dscale-down-width%26starting-point-node-id%3D1549%253A2750%26mode%3Ddesign%26hide-ui%3D1',
  },
  {
    id: 2,
    title: 'Niyalo Website',
    img: 'niyalocreatives.webp',
    workurl:
      'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F757oKj2Nr3KoZLig52EKl9%2FPersonal-Portfolio%3Fpage-id%3D1313%253A27%26type%3Ddesign%26node-id%3D1478-4097%26viewport%3D-1419%252C-216%252C0.09%26t%3DeeJT3yKxya45IANW-1%26scaling%3Dscale-down-width%26starting-point-node-id%3D1478%253A4097%26mode%3Ddesign%26hide-ui%3D1',
    workurlmob:
      'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F757oKj2Nr3KoZLig52EKl9%2FPersonal-Portfolio%3Fpage-id%3D1313%253A27%26type%3Ddesign%26node-id%3D1478-4256%26viewport%3D-1419%252C-216%252C0.09%26t%3DeeJT3yKxya45IANW-1%26scaling%3Dmin-zoom%26starting-point-node-id%3D1478%253A4256%26show-proto-sidebar%3D1%26mode%3Ddesign%26hide-ui%3D1',
    workurlmed:
      'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F757oKj2Nr3KoZLig52EKl9%2FPersonal-Portfolio%3Fpage-id%3D1313%253A27%26type%3Ddesign%26node-id%3D1478-3938%26viewport%3D-855%252C-186%252C0.07%26t%3DgwY40pPOGSfumBF8-1%26scaling%3Dscale-down-width%26starting-point-node-id%3D1478%253A3938%26mode%3Ddesign%26hide-ui%3D1',
  },
  {
    id: 3,
    title: 'Swift Game Devs',
    img: 'swift.webp',
    workurl:
      'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F757oKj2Nr3KoZLig52EKl9%2FPersonal-Portfolio%3Fpage-id%3D1549%253A1196%26type%3Ddesign%26node-id%3D1549-1664%26viewport%3D516%252C395%252C0.08%26t%3Dj2qTna57dQpC6okC-1%26scaling%3Dscale-down-width%26starting-point-node-id%3D1549%253A1664%26mode%3Ddesign%26hide-ui%3D1',
    workurlmob:
      'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F757oKj2Nr3KoZLig52EKl9%2FPersonal-Portfolio%3Fpage-id%3D1549%253A1196%26type%3Ddesign%26node-id%3D1549-2124%26viewport%3D516%252C395%252C0.08%26t%3Dj2qTna57dQpC6okC-1%26scaling%3Dscale-down-width%26starting-point-node-id%3D1549%253A2124%26mode%3Ddesign%26hide-ui%3D1',
    workurlmed:
      'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F757oKj2Nr3KoZLig52EKl9%2FPersonal-Portfolio%3Fpage-id%3D1549%253A1196%26type%3Ddesign%26node-id%3D1549-1204%26viewport%3D516%252C395%252C0.08%26t%3Dj2qTna57dQpC6okC-1%26scaling%3Dscale-down-width%26starting-point-node-id%3D1549%253A1204%26mode%3Ddesign%26hide-ui%3D1',
  },
  {
    id: 4,
    title: 'Innov8',
    img: 'innnov8.webp',
    workurl:
      'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F757oKj2Nr3KoZLig52EKl9%2FPersonal-Portfolio%3Fpage-id%3D1549%253A4324%26type%3Ddesign%26node-id%3D1549-4339%26viewport%3D566%252C364%252C0.09%26t%3DgUjaMIVUcGuLnX4Q-1%26scaling%3Dscale-down-width%26starting-point-node-id%3D1549%253A4339%26mode%3Ddesign%26hide-ui%3D1',
    workurlmob:
      'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F757oKj2Nr3KoZLig52EKl9%2FPersonal-Portfolio%3Fpage-id%3D1549%253A4324%26type%3Ddesign%26node-id%3D1549-4353%26viewport%3D566%252C364%252C0.09%26t%3DgUjaMIVUcGuLnX4Q-1%26scaling%3Dscale-down-width%26starting-point-node-id%3D1549%253A4353%26mode%3Ddesign%26hide-ui%3D1',
    workurlmed:
      'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F757oKj2Nr3KoZLig52EKl9%2FPersonal-Portfolio%3Fpage-id%3D1549%253A4324%26type%3Ddesign%26node-id%3D1549-4325%26viewport%3D566%252C364%252C0.09%26t%3DgUjaMIVUcGuLnX4Q-1%26scaling%3Dscale-down-width%26starting-point-node-id%3D1549%253A4325%26mode%3Ddesign%26hide-ui%3D1',
  },
] as const;

export const Work = () => {
  const router = useRouter();

  const [percentage, setPercentage] = useState(0);

  const handleRoute = (workurl: string): void => {
    if (workurl) router.push(`/work/${workurl}`);
  };

  const cardSlide = useRef<HTMLDivElement>(null);

  const scrollHandler = (e: React.WheelEvent<HTMLDivElement>): void => {
    const container = cardSlide.current;
    if (!container) return;

    const divideY = e.deltaY / 10;
    const divideX = e.deltaX / 10;
    const newPercentage = percentage + divideX + divideY;

    if (newPercentage <= 300 && newPercentage >= 0) {
      setPercentage(newPercentage);
      container.style.transition = 'transform 0.3s ease-out';
      container.style.transform = `translate(-${percentage / 4}%, 0%)`;
    }
  };

  const Cards = WorkData.map((items) => (
    <div
      key={items.id}
      id="works"
      className="flex flex-col items-start gap-[1.25rem] hover:transition-all sm:hover:scale-105"
      onClick={() => handleRoute(String(items.id))}
    >
      <div className="relative h-[320px] w-[270px] border-2 border-purple-900/30 object-center hover:border-purple-600 xl:h-[400px] xl:w-[352px]">
        <Image
          src={`/images/work/${items.img}`}
          alt="Card Image"
          fill={true}
          className="snap-center object-cover grayscale transition-all hover:grayscale-0"
          objectPosition={`${percentage / 3}% 100%`}
          sizes="(max-width: 808px) 50vw, 100vw"
          priority={true}
        />
      </div>
      <p>{items.title}</p>
    </div>
  ));

  return (
    <section className="flex h-screen w-screen items-center" onWheel={scrollHandler}>
      <div
        ref={cardSlide}
        className="scrollbar-hide relative flex snap-x snap-mandatory items-start gap-4 overflow-x-auto px-[10%] sm:top-[5%] sm:overflow-visible sm:pl-[50%] lg:gap-6"
      >
        {Cards}
      </div>
    </section>
  );
};
