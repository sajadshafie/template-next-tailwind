import type { Meta, StoryObj } from "@storybook/react";
import type { TypeWithDeepControls } from "storybook-addon-deep-controls";
import CheckboxLabel from "./index";

const meta = {
  title: "Components/Core/CheckboxLabel",
  component: CheckboxLabel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      type: "boolean",
    },
    color: {
      options: ["primary", "secondary", "success", "error", "warning", "info"],
      control: { type: "select" },
    },
    "labelProps.required": {
      name: "required",
      control: { type: "boolean" },
    },
  },
  args: {
    name: "check-box-label-story",
    label: "storybook.components.core.CheckboxLabel.label",
    disabled: false,
    color: "primary",
    labelProps: {
      required: false,
    },
  },
} satisfies TypeWithDeepControls<Meta<typeof CheckboxLabel>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: TypeWithDeepControls<Story> = {
  args: {},
};
