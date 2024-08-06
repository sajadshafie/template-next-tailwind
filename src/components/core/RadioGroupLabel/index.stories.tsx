import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import RadioGroupLabel from ".";

const render = (args: any) => {
  const [{}, updateArgs] = useArgs();
  return (
    <RadioGroupLabel onChange={(e, value) => updateArgs({ value })} {...args} />
  );
};

const meta: Meta = {
  component: RadioGroupLabel,
  render,
  title: "Components/Core/RadioGroupLabel",
  parameters: {
    deepControls: { enabled: true },
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: { type: "string" },
    value: { type: "string" },
    list: {
      control: { type: "object" },
    },
    listLabelKey: { type: "string" },
    listValueKey: { type: "string" },
    row: {
      type: "boolean",
    },
    translateList: { type: "boolean" },
    color: {
      options: ["primary", "secondary", "success", "error", "warning", "info"],
      control: { type: "select" },
    },
    size: {
      options: ["medium", "small"],
      control: { type: "radio" },
    },
    disabled: { type: "boolean" },
    error: { type: "boolean" },
    helperText: { type: "string" },
  },
  args: {
    label: "storybook.components.core.RadioGroupLabel.label",
    name: "radio-group-label",
    value: "1",
    list: [
      { id: 1, name: "storybook.components.core.RadioGroupLabel.list-item-1" },
      { id: 2, name: "storybook.components.core.RadioGroupLabel.list-item-2" },
      { id: 3, name: "storybook.components.core.RadioGroupLabel.list-item-3" },
      { id: 4, name: "storybook.components.core.RadioGroupLabel.list-item-4" },
    ],
    listLabelKey: "name" as any,
    listValueKey: "id" as any,
    translateList: true,
    color: "primary",
    size: "medium",
    disabled: false,
    error: false,
    helperText: "",
  },
} satisfies Meta<typeof RadioGroupLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Column: Story = {
  render,
  args: { row: false },
};

export const Row: Story = {
  render,
  args: { row: true },
};

export const Small: Story = {
  render,
  args: { size: "small" },
};

export const Medium: Story = {
  render,
  args: { size: "medium" },
};

export const Error: Story = {
  render,
  args: {
    error: true,
    helperText: "storybook.components.core.RadioGroupLabel.helperText",
    value: null,
  },
};
