"use client";

import { ThemeProvider } from "@emotion/react";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { Button, PaletteMode, createTheme } from "@mui/material";
import { getDesignTokens } from "../theme/colors";

export default function ThemeRegistry({
  children,
}: {
  children: ReactNode;
}) {
  const [mode, setMode] = useState<PaletteMode>("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => {
          return prevMode === "light" ? "dark" : "light";
        });
      },
    }),
    []
  );

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.className = "dark";
    } else {
      document.documentElement.removeAttribute("class");
    }
  }, [mode]);

  const theme = useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        onClick={() => colorMode.toggleColorMode()}
      >
        Toggle mode
      </Button>
      {children}
    </ThemeProvider>
  );
}
