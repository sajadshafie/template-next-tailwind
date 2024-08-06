import type { Meta, StoryObj } from "@storybook/react";
import Autocomplete from ".";

const options = [
  { id: 1, label: "storybook.components.core.Autocomplete.options.first" },
  { id: 2, label: "storybook.components.core.Autocomplete.options.second" },
  { id: 3, label: "storybook.components.core.Autocomplete.options.third" },
  { id: 4, label: "storybook.components.core.Autocomplete.options.fourth" },
];

const render = (args: any) => {
  return (
    <div style={{ width: "320px" }}>
      <Autocomplete {...args} />
    </div>
  );
};

const meta = {
  title: "Components/Core/Autocomplete",
  component: Autocomplete,
  render,
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
    name: {
      type: "string",
    },
    options: {
      control: { type: "object" },
    },
    uniqeKey: {
      type: "string",
    },
    labelKey: {
      type: "string",
    },
    virtualization: {
      type: "boolean",
    },
    setValue: {
      table: {
        disable: true,
      },
    },
    renderTagProps: {
      table: {
        disable: true,
      },
    },
    open: {
      type: "boolean",
    },
    disableCloseOnSelect: {
      type: "boolean",
    },
    disableClearable: {
      type: "boolean",
    },
    clearOnEscape: {
      type: "boolean",
    },
  },
  args: {
    name: "autocomplete",
    options,
    label: "storybook.components.core.Autocomplete.label",
    // @ts-ignore
    uniqeKey: "id",
    // @ts-ignore
    labelKey: "label",
    virtualization: false,
    disableCloseOnSelect: false,
    disableClearable: false,
    clearOnEscape: false,
    variant: "outlined",
    color: "primary",
  },
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    variant: "outlined",
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
  },
};

export const Standard: Story = {
  args: {
    variant: "standard",
  },
};

export const Error: Story = {
  args: {
    error: true,
    helperText: "storybook.components.core.TextField.helperText",
  },
};
