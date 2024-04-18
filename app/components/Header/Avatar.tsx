import { Avatar, Stack, Typography } from "@mui/material";

export default function AvatarComponent() {
  return (
    <Stack
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      gap="1rem"
      className="cursor-pointer"
    >
      <Avatar />
      <Typography variant="h5">John Doe</Typography>
    </Stack>
  );
}
