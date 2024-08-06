"use client";
import { render, screen, cleanup, prettyDOM } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import { RenderOptions } from "@testing-library/react";
import appConfig from "@/configs";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const useRouter = jest.spyOn(require("next/router"), "useRouter");
  const locale = "fa";
  const messages = require(`../../messages/${appConfig.defaultLocale}.json`);

  useRouter.mockImplementationOnce(() => ({
    query: { locale: locale },
  }));
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      timeZone={"Asia/Tehran"}
    >
      {children}
    </NextIntlClientProvider>
  );
};

const customeRender = (ui: React.ReactNode, options?: RenderOptions) => {
  return render(ui, { wrapper: Provider, ...options });
};

export * from "@testing-library/react";

export { customeRender as render, screen, cleanup, prettyDOM };
export { default as userEvent } from "@testing-library/user-event";
