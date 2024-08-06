"use client";
import { useMemo } from "react";
import { PaletteMode, Theme } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useGlobalContext } from "@/components/layout/globalContext";
import { useTheme } from "@/hooks";
import commonConfigs from "./commonConfigs";
import { enFont, faFont, storybookFont } from "./fonts";
import { lightPalette, darkPalette } from "./palettes";

export default function useThemeConfig(): Theme {
  const { locale, dir, isStorybook, storybook } = useGlobalContext();
  const { resolvedTheme } = useTheme();
  const storybookTheme = (storybook?.theme || "light") as PaletteMode;

  const themeConfig = useMemo(() => {
    return createTheme({
      ...commonConfigs,
      direction: dir,
      components: {
        ...commonConfigs?.components,
        MuiCssBaseline: {
          ...commonConfigs?.components?.MuiCssBaseline,
          ...(isStorybook && {
            styleOverrides: storybookFont,
          }),
        },
      },
      typography: {
        ...commonConfigs.typography,
        ...(locale === "fa"
          ? {
              fontFamily: !isStorybook
                ? faFont.style.fontFamily
                : "vazirmatn, sans",
            }
          : {
              fontFamily: !isStorybook
                ? enFont.style.fontFamily
                : "roboto, sans",
            }),
      },
      palette: {
        mode: !isStorybook ? resolvedTheme : storybookTheme,
        ...(resolvedTheme === "light" ? lightPalette : darkPalette),
      },
    });
  }, [dir, isStorybook, locale, resolvedTheme, storybookTheme]);

  return themeConfig;
}
