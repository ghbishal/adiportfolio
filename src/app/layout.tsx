import '@/styles/globals.css';
import { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import React, { ReactNode, Suspense } from 'react';
import Loading from '@/app/loading';
import { Navbar } from '@/components/navbar';

const inter = Raleway({ subsets: ['latin'] });

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Adi',
  description: 'UI/UX Designer / Frontend Developer',
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <Navbar />
          {children}
        </Suspense>
      </body>
    </html>
  );
}
