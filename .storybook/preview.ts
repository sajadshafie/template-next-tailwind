import type { Preview } from "@storybook/react";
import decorators from "./decorators";

const preview: Preview = {
  decorators,
  globalTypes: {
    locale: {
      defaultValue: "fa",
      toolbar: {
        title: "Language",
        icon: "globe",
        dynamicTitle: true,
        items: [
          { value: "fa", title: "Farsi", right: "فارسی" },
          { value: "en", title: "English", right: "انگلیسی" },
        ],
      },
    },
    theme: {
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        dynamicTitle: true,
        items: [
          { value: "light", title: "Light", right: "روشن" },
          { value: "dark", title: "Dark", right: "تاریک" },
        ],
      },
    },
  },
  parameters: {
    deepControls: { enabled: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
