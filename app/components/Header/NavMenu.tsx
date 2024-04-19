import { ReactNode } from 'react';
import NavLink from './NavLink';
import { Stack } from '@mui/material';
import { IoHomeSharp as HomeIcon } from 'react-icons/io5';
import { IoChatbubbleEllipsesSharp as ChatIcon } from 'react-icons/io5';
import { RiCalendarScheduleFill as CalendarMonthIcon } from 'react-icons/ri';
import { MdSource as SourceIcon } from 'react-icons/md';

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
    <div className='fixed bottom-0 left-0 w-full bg-white lg:bg-transparent lg:static lg:block'>
      <div className='flex justify-around lg:gap-[3rem] lg:justify-center lg:items-center'>
        {NavMenu.map((nav, index) => (
          <NavLink {...nav} key={index} index={index} />
        ))}
      </div>
    </div>
  );
}
