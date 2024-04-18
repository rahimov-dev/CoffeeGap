import { Theme } from "@mui/material/styles";
import { amber, deepOrange, grey } from "@mui/material/colors";
import { PaletteMode } from "@mui/material";
import { Inter } from "next/font/google";

type MyFunctionType = (mode: PaletteMode) => Theme;

const inter = Inter({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

// @ts-ignore
export const getDesignTokens: MyFunctionType = (
  mode: PaletteMode
) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
          background: {
            default: grey[900],
          },
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: deepOrange[900],
            paper: deepOrange[900],
          },
          text: {
            primary: "#fff",
            secondary: grey[100],
          },
        }),
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
});
