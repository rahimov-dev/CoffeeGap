"use client";

import { useTheme } from "@emotion/react";
import Button from "@mui/material/Button";

export default function Home() {
  // @ts-ignore
  const colorMode: { palette: { mode: "light" | "dark" } } =
    useTheme();
  return (
    <div className="dark:bg-gray-900 bg-slate-200 h-screen">
      <Button variant="outlined" onClick={() => {}}>
        {colorMode?.palette?.mode}
      </Button>
    </div>
  );
}
