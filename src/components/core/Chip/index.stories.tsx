import type { Meta, StoryObj } from "@storybook/react";
import Chip from ".";
import FaceIcon from "@mui/icons-material/Face";
import Avatar from "@mui/material/Avatar";

const meta = {
  title: "Components/Core/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    message: {
      type: "string",
      description: "This prop is used to render translated label",
      table: {
        defaultValue: { summary: "Empty" },
      },
    },
    label: {
      type: "string",
      description: "This prop work only if you not specify message prop",
      table: {
        defaultValue: { summary: "Empty" },
      },
    },
    href: {
      type: "string",
      description: "If you specify this prop you have a link chip",
      table: {
        defaultValue: { summary: "Empty" },
      },
    },
    clickable: {
      type: "boolean",
      table: {
        defaultValue: { summary: "true" },
      },
    },
    variant: {
      options: ["filled", "outlined"],
      control: { type: "radio" },
      table: {
        defaultValue: { summary: "outlined" },
      },
    },
    color: {
      options: ["primary", "secondary", "success", "error", "warning", "info"],
      control: { type: "select" },
      table: {
        defaultValue: { summary: "default" },
      },
    },
    size: {
      options: ["small", "medium"],
      control: { type: "radio" },
      table: {
        defaultValue: { summary: "medium" },
      },
    },
  },
  args: {
    message: "storybook.components.core.Chip.message",
    clickable: false,
    variant: "filled",
    color: "primary",
    size: "medium",
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    variant: "filled",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
  },
};

export const Link: Story = {
  args: {
    clickable: true,
    href: "/#chip-link",
  },
};

export const Deletable: Story = {
  args: {
    color: "error",
    onDelete: () => {
      return;
    },
  },
};

export const WithIcon: Story = {
  args: {
    color: "primary",
    variant: "outlined",
    icon: <FaceIcon />,
  },
};

export const WithAvatar: Story = {
  args: {
    color: "primary",
    variant: "outlined",
    avatar: <Avatar>gh</Avatar>,
  },
};

export const Default: Story = {
  args: {
    color: "default",
  },
};

export const Primary: Story = {
  args: {
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
  },
};

export const Error: Story = {
  args: {
    color: "error",
  },
};

export const Success: Story = {
  args: {
    color: "success",
  },
};

export const Warning: Story = {
  args: {
    color: "warning",
  },
};

export const Info: Story = {
  args: {
    color: "info",
  },
};
