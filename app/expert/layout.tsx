import { ReactNode } from 'react';
import Header from '../components/Header/Header';

export default function layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Header role='expert' />
      {children}
    </>
  );
}
