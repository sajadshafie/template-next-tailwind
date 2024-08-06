"use client";
import { ThemeProvider } from "@mui/material";
import useThemeConfig from "./useThemeConfig";

export default function ThemeConfigProvider({ children }: ComponentChildren) {
  const themeConfig = useThemeConfig();

  return <ThemeProvider theme={themeConfig}>{children}</ThemeProvider>;
}
