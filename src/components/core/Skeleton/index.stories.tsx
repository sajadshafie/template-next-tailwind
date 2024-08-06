import { Meta, StoryObj } from "@storybook/react";
import Skeleton from ".";
const tableDisabled = {
  table: {
    disable: true,
  },
};
const meta: Meta = {
  component: Skeleton,
  title: "Components/Core/Skeleton",
  tags: ["autodocs"],
  parameters: {
    deepControls: { enabled: true },
    layout: "centered",
  },
  args: {
    "sx.fontSize": "20px",
    width: 210,
    height: 40,
    isLoading: true,
    animation: "wave",
    message: "storybook.components.core.Skeleton.text",
  },
  argTypes: {
    "sx.fontSize": {
      name: "fontSize",
      control: "text",
    },
    variant: tableDisabled,
    children: tableDisabled,
    message: tableDisabled,
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    variant: "text",
  },
  argTypes: {
    animation: {
      control: { type: "radio" },
      options: ["pulse", "wave", false],
    },
  },
};

export const circular: Story = {
  args: {
    variant: "circular",
    message: "storybook.components.core.Skeleton.Circular",
    height: 210,
  },
  argTypes: {
    animation: {
      control: { type: "radio" },
      options: ["pulse", "wave", false],
    },
  },
};

export const rectangular: Story = {
  args: {
    variant: "rectangular",
    message: "storybook.components.core.Skeleton.Rectangular",
  },
  argTypes: {
    animation: {
      control: { type: "radio" },
      options: ["pulse", "wave", false],
    },
  },
};

export const rounded: Story = {
  args: {
    variant: "rounded",
    message: "storybook.components.core.Skeleton.Rounded",
  },
  argTypes: {
    animation: {
      control: { type: "radio" },
      options: ["pulse", "wave", false],
    },
  },
};
