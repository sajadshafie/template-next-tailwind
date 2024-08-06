import { Meta, StoryObj } from "@storybook/react";
import Loading from "./index";
const meta: Meta = {
  component: Loading,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "success",
        "inherit",
        "info",
        "warning",
        "error",
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const LoadingProgress: Story = {};

export const Determinate: Story = {
  args: {
    variant: "determinate",
    value: "25",
  },
  argTypes: {
    size: {
      control: { type: "number" },
    },
    value: {
      control: { type: "number", min: 25, max: 100 },
    },
    //  | 'indeterminate'
  },
};
