import { ReactElement } from 'react';

type Props = {
  title: string;
};
export const Heading = ({ title }: Props): ReactElement => {
  return (
    <div className="relative flex w-max flex-col items-center self-center px-2 sm:self-stretch">
      <hr className="undEff absolute top-[12px] sm:top-[13px]" />
      <h2>{title}</h2>
      <hr className="undEff absolute top-[47px] sm:top-[54px]" />
    </div>
  );
};
