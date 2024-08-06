import { Meta, StoryObj } from "@storybook/react";
import Popover from "./index";
import { Grid } from "@mui/material";
import { useTranslations } from "next-intl";

const tableDisabled = {
  table: {
    disable: true,
  },
};

const meta: Meta = {
  component: Popover,
  tags: ["autodocs"],
  parameters: {
    deepControls: { enabled: true },
    layout: "centered",
  },
  args: {
    label: "storybook.components.core.Popover.label",
  },
  argTypes: {
    label: tableDisabled,
    children: tableDisabled,
    buttonProps: tableDisabled,
    // vertical: 'top' | 'center' | 'bottom' | number;
    // horizontal: 'left' | 'center' | 'right' | number;
    verticalanchorOrigin: {
      control: { type: "radio" },
      options: ["top", "center", "bottom"],
    },
    horizontalanchorOrigin: {
      control: { type: "radio" },
      options: ["left", "center", "right"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Pop: Story = {
  render: (args) => {
    const t = useTranslations();
    return (
      <Popover
        label={args.label}
        verticalanchorOrigin={args.verticalanchorOrigin}
        horizontalanchorOrigin={args.horizontalanchorOrigin}
      >
        <Grid p={1}>{t("storybook.components.core.Popover.label")}</Grid>
      </Popover>
    );
  },
};
