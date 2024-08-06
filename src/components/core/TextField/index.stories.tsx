import type { Meta, StoryObj } from "@storybook/react";
import TextField from "./index";

const meta = {
  title: "Components/Core/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["filled", "outlined", "standard"],
      control: { type: "radio" },
    },
    color: {
      options: ["primary", "secondary", "error", "success", "warning", "info"],
      control: { type: "select" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
  args: {
    label: "storybook.components.core.TextField.label",
    color: "primary",
    variant: "outlined",
    disabled: false,
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    name: "outlined-text-field",
    variant: "outlined",
  },
};

export const Filled: Story = {
  args: {
    name: "filled-text-field",
    variant: "filled",
  },
};

export const Standard: Story = {
  args: {
    name: "standard-text-field",
    variant: "standard",
  },
};

export const Error: Story = {
  args: {
    error: true,
    helperText: "storybook.components.core.TextField.helperText",
  },
};

export const Multiline: Story = {
  args: {
    multiline: true,
    rows: 5,
    helperText: "storybook.components.core.TextField.helperText",
  },
};
