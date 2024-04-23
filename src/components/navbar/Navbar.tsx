'use client';

import Image from 'next/image';
import React, { ReactElement } from 'react';
import { cn } from '@/lib/utils';
import { Link, usePathname } from '@/navigation';

export function Navbar(): ReactElement {
  const currentPathName = usePathname();

  return (
    <div className={`inset-0 z-50 mx-auto flex h-max snap-start items-center justify-between py-4`}>
      <Image src="/logo.svg" alt="Adi Logo" width={40} height={24} className="grayscale" />
      <div className="flex gap-2">
        <Link
          className={cn('text-sm capitalize text-neutral-300 hover:blur-[1px]', {
            'font-bold': currentPathName === '/',
          })}
          href={'/'}
        >
          About
        </Link>
        <Link
          className={cn('text-sm capitalize text-neutral-300 hover:blur-[1px]', {
            'font-bold': currentPathName === '/work',
          })}
          href={'/work'}
        >
          Work
        </Link>
      </div>
    </div>
  );
}
