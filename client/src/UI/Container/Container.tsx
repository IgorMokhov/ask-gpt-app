import type { ReactNode } from 'react';

interface IContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: IContainerProps) => {
  return <div className="max-w-[1400px] mx-auto px-4">{children}</div>;
};
