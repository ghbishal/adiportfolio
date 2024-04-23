import Link from 'next/link';
import { ReactElement } from 'react';

export const Explore = (): ReactElement => {
  return (
    <Link
      href="/work"
      className="main explorebg group relative flex cursor-pointer flex-col items-center justify-center"
    >
      <div className="items-center justify-center text-lg  text-neutral-50 transition-all duration-300 group-hover:scale-105 sm:text-2xl">
        <span className="group-hover:textglow text-purple-500">Click</span> to explore my best works
      </div>
    </Link>
  );
};
