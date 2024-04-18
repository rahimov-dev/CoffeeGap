import { ReactNode } from "react";
import NavLink from "./NavLink";
import { Stack } from "@mui/material";

interface INav {
  path: string;
  label: string;
  icon?: ReactNode;
}

export default function NavMenu() {
  const NavMenuExpert: INav[] = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/chats",
      label: "Chats",
    },
    {
      path: "/schedule",
      label: "Schedule",
    },
    {
      path: "/content",
      label: "Content",
    },
  ];
  return (
    <Stack
      justifyContent="center"
      flexDirection="row"
      alignItems="center"
      gap="3rem"
    >
      {NavMenuExpert.map((nav, index) => (
        <NavLink {...nav} index={index} />
      ))}
    </Stack>
  );
}
