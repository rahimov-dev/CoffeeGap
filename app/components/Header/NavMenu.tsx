import { ReactNode } from 'react';
import NavLink from './NavLink';
import { Stack } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SourceIcon from '@mui/icons-material/Source';

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
      path: '/expert',
      label: 'Home',
      icon: <HomeIcon />,
    },
    {
      path: '/expert/chats',
      label: 'Chats',
      icon: <ChatIcon />,
    },
    {
      path: '/expert/schedule',
      label: 'Schedule',
      icon: <CalendarMonthIcon />,
    },
    {
      path: '/expert/content',
      label: 'Content',
      icon: <SourceIcon />,
    },
  ];
  const NavMenuJunior: INav[] = [
    {
      path: '/junior',
      label: 'Home',
      icon: <HomeIcon />,
    },
    {
      path: '/junior/chats',
      label: 'Chats',
      icon: <ChatIcon />,
    },
    {
      path: '/junior/schedule',
      label: 'Schedule',
      icon: <CalendarMonthIcon />,
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
