import { Meta, StoryObj } from "@storybook/react";
import Link from "./index";

const tableDisabled = {
  table: {
    disable: true,
  },
};

const meta: Meta = {
  component: Link,
  tags: ["autodocs"],
  parameters: {
    deepControls: { enabled: true },
    layout: "centered",
  },
  argTypes: {
    color: { control: "color" },
    variant: {
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "caption",
        "button",
        "overline",
      ],
      control: { type: "select" },
    },
    fontWeight: {
      options: ["400", "500", "700", "900"],
      control: { type: "radio" },
    },
  },
  args: {
    label: "storybook.components.core.Link.link",
    href: "/",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const heading1: Story = {
  render: (args) => {
    return <Link href={"/"} label={args.label} variant="h1" {...args} />;
  },
  argTypes: {
    children: {
      control: { type: "function", description: "need ReactNode" },
    },
  },
};

export const heading2: Story = {
  render: (args) => {
    return <Link href={"/"} label={args.label} variant="h2" {...args} />;
  },
  argTypes: {
    children: {
      control: { type: "function", description: "need ReactNode" },
    },
  },
};

export const heading3: Story = {
  render: (args) => {
    return <Link href={"/"} label={args.label} variant="h3" {...args} />;
  },
  argTypes: {
    children: {
      control: { type: "function", description: "need ReactNode" },
    },
  },
};
export const heading4: Story = {
  render: (args) => {
    return <Link href={"/"} label={args.label} variant="h4" {...args} />;
  },
  argTypes: {
    children: {
      control: { type: "function", description: "need ReactNode" },
    },
  },
};

export const heading5: Story = {
  render: (args) => {
    return <Link href={"/"} label={args.label} variant="h5" {...args} />;
  },
  argTypes: {
    children: {
      control: { type: "function", description: "need ReactNode" },
    },
  },
};
export const heading6: Story = {
  render: (args) => {
    return <Link href={"/"} label={args.label} variant="h6" {...args} />;
  },
  argTypes: {
    children: {
      control: { type: "function", description: "need ReactNode" },
    },
  },
};
