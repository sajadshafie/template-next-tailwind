import { Meta, StoryObj } from "@storybook/react";
import Select from ".";

const tableDisabled = {
  table: {
    disable: true,
  },
};

//@ts-ignore
const meta: Meta = {
  title: "Components/Core/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    deepControls: { enabled: true },
    layout: "centered",
  },
  argTypes: {
    menuItemProps: tableDisabled,
    listItemTextProps: tableDisabled,
    inputLabelProps: tableDisabled,
    checkboxProps: tableDisabled,
    handleOnChange: tableDisabled,
    defaultSelected: tableDisabled,
    list: tableDisabled,
    defaultValue: tableDisabled,
    formControlProps: tableDisabled,
    paperProps: tableDisabled,
    //@ts-ignore
    "formControlProps.disabled": tableDisabled,
    "sx.width": tableDisabled,
    "formControlProps.error": tableDisabled,
    "formControlProps.variant": {
      name: "Variant",
      control: { type: "radio" },
      options: ["standard", "outlined", "filled"],
    },
    disabled: {
      type: "boolean",
    },
    "formControlProps.required": {
      name: "required",
      type: "boolean",
    },
    "formControlProps.color": {
      name: "Color",
      control: { type: "select" },
      options: ["primary", "secondary", "error", "info", "success", "warning"],
    },
  },
  args: {
    label: "storybook.components.core.Select.label",
    //@ts-ignore
    "sx.width": "200px",
    defaultValue: [1],
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Single: Story = {};

export const Multiplie: Story = {
  args: {
    multiple: true,
  },
};

export const Error: Story = {
  args: {
    //@ts-ignore
    "formControlProps.error": {
      name: "error Label",
      control: "boolean",
      defaultValue: true,
    },
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    //@ts-ignore
    "formControlProps.disabled": {
      name: "disabled",
      control: false,
      defaultValue: true,
    },
  },
};

export const required: Story = {
  args: {
    //@ts-ignore
    "formControlProps.required": {
      name: "required",
      control: false,
      defaultValue: true,
    },
  },
};
