import { Meta, StoryObj } from "@storybook/react";
import ToolTip from ".";
import { Delete } from "@mui/icons-material";

const meta: Meta = {
  component: ToolTip,
  args: {
    title: "storybook.components.core.Tooltip.title",
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
  
type Story = StoryObj<typeof meta>;

export const TootipWithIcon: Story = {
  render: (args: any) => {
    return (
      <ToolTip {...args}>
        <Delete />
      </ToolTip>
    );
  },
  argTypes: {
    placement: {
      options: [
        "bottom-end",
        "bottom-start",
        "bottom",
        "left-end",
        "left-start",
        "left",
        "right-end",
        "right-start",
        "right",
        "top-end",
        "top-start",
        "top",
      ],
      control: { type: "select" },
    },
  },
};

export const TooltipWithText: Story = {
  render: (args: any) => {
    return <ToolTip {...args} message={args.title} />;
  },
  argTypes: {
    ...TootipWithIcon.argTypes,
  },
};
