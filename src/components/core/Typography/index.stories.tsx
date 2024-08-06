import { Meta, StoryObj } from "@storybook/react";
import Typography from ".";

const meta: Meta = {
  component: Typography,
  title: "Components/Core/Typography",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
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
    message: "storybook.components.core.Typography.message",
    fontWeight: "400",
  },
} satisfies Meta<typeof Typography>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    variant: "h1",
  },
};

export const Heading2: Story = {
  args: {
    variant: "h2",
  },
};

export const Heading3: Story = {
  args: {
    variant: "h3",
  },
};

export const Heading4: Story = {
  args: {
    variant: "h4",
  },
};

export const Heading5: Story = {
  args: {
    variant: "h5",
  },
};

export const Heading6: Story = {
  args: {
    variant: "h6",
  },
};

export const Subtitle1: Story = {
  args: {
    variant: "subtitle1",
  },
};

export const Subtitle2: Story = {
  args: {
    variant: "subtitle2",
  },
};

export const Body1: Story = {
  args: {
    variant: "body1",
  },
};

export const Body2: Story = {
  args: {
    variant: "body2",
  },
};

export const Caption: Story = {
  args: {
    variant: "caption",
  },
};

export const Button: Story = {
  args: {
    variant: "button",
  },
};

export const Overline: Story = {
  args: {
    variant: "overline",
  },
};
