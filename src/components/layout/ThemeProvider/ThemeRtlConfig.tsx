"use client";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { useGlobalContext } from "../globalContext";

export default function ThemeRtlConfig({ children }: ComponentChildren) {
  const { locale } = useGlobalContext();

  const cacheLtr = createCache({
    key: "mui",
  });

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <CacheProvider value={locale !== "fa" ? cacheLtr : cacheRtl}>
      {children}
    </CacheProvider>
  );
}
