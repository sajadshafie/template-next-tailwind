"use client";
import { globalContext, GlobalContext } from "./globalContext";
import ThemeProvider from "./ThemeProvider";

interface Props extends ComponentChildren, GlobalContext {}

export default function RootLayoutProvider(props: Props) {
  const { children, ...restProps } = props;

  return (
    <globalContext.Provider value={{ ...restProps }}>
      <ThemeProvider>{children}</ThemeProvider>
    </globalContext.Provider>
  );
}

export { globalContext, useGlobalContext } from "./globalContext";
export type { GlobalContext } from "./globalContext";
export { default as ThemeRtlConfig } from "./ThemeProvider/ThemeRtlConfig";
export { default as ThemeConfigProvider } from "./ThemeProvider/ThemeConfigProvider";
export { default as useThemeConfig } from "./ThemeProvider/ThemeConfigProvider/useThemeConfig";
