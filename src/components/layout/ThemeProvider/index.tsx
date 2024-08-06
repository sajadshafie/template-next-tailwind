import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import NextThemesProvider from "./NextThemesProvider";
import ThemeRtlConfig from "./ThemeRtlConfig";
import ThemeConfigProvider from "./ThemeConfigProvider";
import CssBaseline from "@mui/material/CssBaseline";

export default function ThemeProvider({ children }: ComponentChildren) {
  return (
    <AppRouterCacheProvider>
      <NextThemesProvider>
        <ThemeRtlConfig>
          <ThemeConfigProvider>
            <CssBaseline />
            {children}
          </ThemeConfigProvider>
        </ThemeRtlConfig>
      </NextThemesProvider>
    </AppRouterCacheProvider>
  );
}
