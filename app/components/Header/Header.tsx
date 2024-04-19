import { Container, Stack } from '@mui/material';
import Logo from '../icons/Logo';
import NavMenu from './NavMenu';
import Avatar from './Avatar';
import ThemeSwitcher from '../ThemeSwitcher';

export default function Header({
  role,
}: {
  role: 'expert' | 'junior';
}) {
  return (
    <Container>
      <Stack
        alignItems='center'
        flexDirection='row'
        justifyContent='space-between'
      >
        <Logo />
        <NavMenu role={role} />
        <div className='flex items-center gap-10'>
          <ThemeSwitcher />
          <Avatar />
        </div>
      </Stack>
    </Container>
  );
}
