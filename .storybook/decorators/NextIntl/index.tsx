import React from "react";
import type { Decorator } from "@storybook/react";
import config from "./config";
import { NextIntlClientProvider } from "next-intl";

const NextIntlDecorator: Decorator = (Story, context) => {
  const locale = context.globals.locale;
  const messages = config.messages[locale];

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      timeZone={locale === "fa" ? "Asia/Tehran" : "UTC"}
    >
      <Story />
    </NextIntlClientProvider>
  );
};

export default NextIntlDecorator;
export { default as NextIntlConfig } from "./config";
