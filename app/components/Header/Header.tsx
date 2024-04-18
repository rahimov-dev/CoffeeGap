import { Container, Stack } from "@mui/material";
import Logo from "../icons/Logo";
import NavMenu from "./NavMenu";
import Avatar from "./Avatar";

export default function Header() {
  return (
    <Container>
      <Stack
        alignItems="center"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Logo />
        <NavMenu />
        <Avatar />
      </Stack>
    </Container>
  );
}
