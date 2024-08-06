import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

const meta = {
  title: "Components/Core/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["contained", "outlined", "text"],
      control: { type: "radio" },
    },
    loading: {
      type: "boolean",
    },
    disabled: {
      type: "boolean",
    },
    color: {
      options: ["primary", "secondary", "success", "error", "warning", "info"],
      control: { type: "select" },
    },
    loadingPosition: {
      options: ["start", "center", "end"],
      control: { type: "radio" },
    },
    disableElevation: {
      type: "boolean",
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
  },
  args: {
    label: "storybook.components.core.Button.label",
    variant: "contained",
    loading: false,
    disabled: false,
    color: "primary",
    loadingPosition: "center",
    size: "medium",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: { variant: "contained" },
};

export const Outlined: Story = {
  args: { variant: "outlined" },
};

export const Text: Story = {
  args: { variant: "text" },
};

export const Loading: Story = {
  args: { loading: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Primary: Story = {
  args: { color: "primary" },
};

export const Secondary: Story = {
  args: { color: "secondary" },
};

export const Error: Story = {
  args: { color: "error" },
};

export const Success: Story = {
  args: { color: "success" },
};

export const Warning: Story = {
  args: { color: "warning" },
};

export const Info: Story = {
  args: { color: "info" },
};
