import appConfig from "@/configs";
import { unstable_setRequestLocale } from "next-intl/server";
import RootLayoutProvider from "@/components/layout";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Dashboard from "@/components/layout/Dashboard";

interface Props extends ComponentChildren {
  params: CommonPageParams;
}

export function generateStaticParams() {
  return appConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({ children, params }: Props) {
  const { locale } = params;

  unstable_setRequestLocale(locale);

  const dir = locale === "fa" ? "rtl" : "ltr";

  const messages = useMessages();
  return (
    <html lang={locale} dir={dir}>
      <body dir={dir}>
        <RootLayoutProvider locale={locale} dir={dir}>
          <Dashboard>
            <NextIntlClientProvider
              locale={locale}
              messages={messages}
              timeZone={locale === "fa" ? "Asia/Tehran" : "UTC"}
            >
              {children}
            </NextIntlClientProvider>
          </Dashboard>
        </RootLayoutProvider>
      </body>
    </html>
  );
}
