import { StoryObj, Meta } from "@storybook/react";
import ProcessLoading from ".";

const tableDisabled = {
  table: {
    disable: true,
  },
};

const meta: Meta = {
  component: ProcessLoading,
  title: "Components/Core/ProcessLoading",
  tags: ["autodocs"],
  args: {
    state: "loading",
    messageLoading: "storybook.components.core.ProcessLoading.messageLoading",
    messageError: "storybook.components.core.ProcessLoading.messageError",
    messageNotfound: "storybook.components.core.ProcessLoading.messageNotfound",
    labelErrorButton:
      "storybook.components.core.ProcessLoading.labelErrorButton",
  },
  argTypes: {
    messageLoading: tableDisabled,
    messageError: tableDisabled,
    messageNotfound: tableDisabled,
    labelErrorButton: tableDisabled,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Loading: Story = {};

export const Error: Story = {
  args: {
    state: "error",
  },
};

export const Notfound: Story = {
  args: {
    state: "notfound",
  },
};
