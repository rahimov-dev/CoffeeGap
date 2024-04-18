import { Container, Stack } from '@mui/material';
import Logo from '../icons/Logo';
import NavMenu from './NavMenu';
import Avatar from './Avatar';

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
        <Avatar />
      </Stack>
    </Container>
  );
}
