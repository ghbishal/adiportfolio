'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactElement } from 'react';
import { MainLayout } from '../layout';
import { cn } from '@/lib/utils';
import LOGO from 'public/logo.svg';
export function Navbar(): ReactElement {
  const currentPathName = usePathname();

  return (
    <main className="bg-neutral-950">
      <MainLayout className="py-4 sm:py-4">
        <div className={`inset-0 z-50 mx-auto flex h-max snap-start items-center justify-between `}>
          <Image src={LOGO} alt="Adi Logo" width={40} height={24} className="grayscale" />
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
      </MainLayout>
    </main>
  );
}
