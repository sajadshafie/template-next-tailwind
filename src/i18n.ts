import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import appConfig from "@/configs";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!appConfig.locales.includes(locale as Locale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
