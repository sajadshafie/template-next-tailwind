import { Meta, StoryObj } from "@storybook/react";
import SwitchLabel from "./index";

const tableDisabled = {
  table: {
    disable: true,
  },
};

const meta: Meta = {
  component: SwitchLabel,

  args: {
    defaultChecked: "storybook.components.core.SwitchLabel.defaultChecked",
    name: "test",
  },

  argTypes: {
    labelProps: tableDisabled,
    name: tableDisabled,
    defaultChecked: tableDisabled,
  },

  parameters: {
    deepControls: { enabled: true },
    layout: "centered",
  },

  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const defaultChecked: Story = {
  argTypes: {
    "labelProps.required": {
      type: "boolean",
      name: "required",
    },
    size: {
      control: { type: "radio", defaultValue: "medium" },
      options: ["small", "medium"],
    },
    color: {
      control: { type: "select", defaultValue: "primary" },
      options: [
        "primary",
        "secondary",
        "error",
        "info",
        "success",
        "warning",
        "default",
      ],
    },
  },
  args: {
    defaultChecked: true,
    label: "storybook.components.core.SwitchLabel.defaultChecked",
  },
};

export const disabled: Story = {
  args: {
    "labelProps.disabled": true,
    label: "storybook.components.core.SwitchLabel.disabled",
  },
  argTypes: {
    ...defaultChecked.argTypes,
    "labelProps.disabled": {
      type: "boolean",
      name: "disabled",
      defaultValue: true,
    },
  },
};

export const labelPlacement: Story = {
  argTypes: {
    ...defaultChecked.argTypes,
    "labelProps.labelPlacement": {
      name: "labelPlacement",
      control: {
        type: "radio",
        defultValue: "top",
      },
      options: ["end", "start", "top", "bottom"],
    },
  },
  args: {
    label: "storybook.components.core.SwitchLabel.labelplacement",
    "labelProps.labelPlacement": "top",
  },
};
