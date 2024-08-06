"use client";
import { ThemeProvider } from "next-themes";
import { useIsClient } from "usehooks-ts";

export default function NextThemesProvider(props: ComponentChildren) {
  const { children } = props;

  const isClient = useIsClient();

  if (!isClient) return <>{children}</>;

  return <ThemeProvider>{children}</ThemeProvider>;
}
