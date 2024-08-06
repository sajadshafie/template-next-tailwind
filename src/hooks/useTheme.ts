import { useState, useLayoutEffect } from "react";
import { useTheme as useNextTheme } from "next-themes";
import { PaletteMode } from "@mui/material";

export default function useTheme() {
  const { theme, resolvedTheme, ...restNextTheme } = useNextTheme();
  const [systemTheme, setSystemTheme] = useState<PaletteMode | null>();

  useLayoutEffect(() => {
    const sysIsDark = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemTheme(sysIsDark.matches ? "dark" : "light");
  }, []);

  return {
    theme: theme as PaletteMode | "system",
    resolvedTheme: (resolvedTheme === "system"
      ? systemTheme
      : resolvedTheme) as PaletteMode,
    ...restNextTheme,
  };
}
