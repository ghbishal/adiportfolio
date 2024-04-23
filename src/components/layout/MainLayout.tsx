import React from 'react';
import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function MainLayout({ children, className }: Props) {
  return (
    <div
      className={cn(
        'mx-auto self-stretch px-3 py-7 sm:px-[40px] sm:py-10 xl:w-[1200px]',
        className
      )}
    >
      {children}
    </div>
  );
}
