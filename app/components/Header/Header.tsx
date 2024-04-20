import { Container, Stack } from '@mui/material';
import NavMenu from './NavMenu';
import Avatar from './Avatar';
import ThemeSwitcher from '../ThemeSwitcher';
import LogoIcon from '../icons/LogoIcon';
import Link from 'next/link';

export default function Header({
  role,
}: {
  role: 'expert' | 'junior';
}) {
  return (
    <Container className='py-5'>
      <Stack
        alignItems='center'
        flexDirection='row'
        justifyContent='space-between'
      >
        <Link href='/expert'>
          <LogoIcon />
        </Link>
        <NavMenu role={role} />
        <div className='flex items-center gap-10'>
          <ThemeSwitcher />
          <Avatar />
        </div>
      </Stack>
    </Container>
  );
}
