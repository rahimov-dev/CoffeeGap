import { ReactNode } from 'react';
import NavLink from './NavLink';
import { Stack } from '@mui/material';

interface INav {
  path: string;
  label: string;
  icon?: ReactNode;
}

export default function NavMenu({
  role,
}: {
  role: 'expert' | 'junior';
}) {
  const NavMenuExpert: INav[] = [
    {
      path: '/expert/',
      label: 'Home',
    },
    {
      path: '/expert/chats',
      label: 'Chats',
    },
    {
      path: '/expert/schedule',
      label: 'Schedule',
    },
    {
      path: '/expert/content',
      label: 'Content',
    },
  ];
  const NavMenuJunior: INav[] = [
    {
      path: '/junior/',
      label: 'Home',
    },
    {
      path: '/junior/chats',
      label: 'Chats',
    },
    {
      path: '/junior/schedule',
      label: 'Schedule',
    },
  ];
  const NavMenu = role === 'expert' ? NavMenuExpert : NavMenuJunior;
  return (
    <Stack
      justifyContent='center'
      flexDirection='row'
      alignItems='center'
      gap='3rem'
      className='hidden lg:block'
    >
      {NavMenu.map((nav, index) => (
        <NavLink {...nav} key={index} index={index} />
      ))}
    </Stack>
  );
}
