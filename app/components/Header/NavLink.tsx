'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { usePathname } from 'next/navigation';

type props = {
  active: boolean;
};

const StyledLink = styled.span<props>`
  font-size: 20px;
  position: relative;
  cursor: pointer;
  &::after {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: 0;
    transform: ${(props) =>
      props.active ? 'scaleX(1)' : 'scaleX(0)'};
    transition: 0.2s ease-in-out;
    background-color: currentColor;
    transform-origin: left;
  }
  &:hover::after {
    transform: scaleX(1);
  }
`;

export default function NavLink({
  path,
  label,
  icon,
  index,
}: {
  path: string;
  label: string;
  icon?: ReactNode;
  index: number;
}) {
  const pathname = usePathname();

  return (
    <Link key={index} href={path}>
      <StyledLink active={path === pathname}>{label}</StyledLink>
    </Link>
  );
}
