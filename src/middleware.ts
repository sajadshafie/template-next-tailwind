import createMiddleware from "next-intl/middleware";
import appConfig from "@/configs";
import { NextRequest } from "next/server";

const { locales, defaultLocale } = appConfig;

export function middleware(request: NextRequest) {
  const nextIntelResponse = createMiddleware({
    // A list of all locales that are supported
    locales,
    // Used when no locale matches
    defaultLocale,
  })(request);

  return nextIntelResponse;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|fa)/:path*"],
};
