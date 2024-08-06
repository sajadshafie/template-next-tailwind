import React, { useEffect } from "react";
import type { Decorator } from "@storybook/react";
import RootLayoutProvider from "../../src/components/layout";

const RootLayout: Decorator = (Story, context) => {
  const theme = context.globals.theme;
  const locale = context.globals.locale;
  const dir = locale === "fa" ? "rtl" : "ltr";
  
  useEffect(() => {
    if (document) {
      const rootEls = document.getElementById("storybook-root");
      const docStoryEls = document.getElementsByClassName("docs-story");
      const els = [rootEls, ...docStoryEls];

      for (let i = 0; i < els.length; i++) {
        // @ts-ignore
        els[i].style.direction = dir;
      }
    }
  }, [dir]);

  return (
    // @ts-ignore
    <RootLayoutProvider
      locale={locale}
      dir={dir}
      isStorybook
      storybook={{ theme }}
    >
      <Story />
    </RootLayoutProvider>
  );
};

export default RootLayout;
