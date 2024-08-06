import { Meta, StoryObj } from "@storybook/react";
import Dialog from ".";
import { Grid, Slide } from "@mui/material";
import { Button } from "..";
import { forwardRef, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { TransitionProps } from "@mui/material/transitions";

const tableDisabled = {
  table: {
    disable: true,
  },
};

const meta: Meta = {
  component: Dialog,
  tags: ["autodocs"],
  args: {
    label: "storybook.components.core.Dialog.label",
    opened: "storybook.components.core.Dialog.opened",
  },
  argTypes: {
    handleClose: tableDisabled,
    title: tableDisabled,
    titleProps: tableDisabled,
    contentProps: tableDisabled,
    children: tableDisabled,
    opened: tableDisabled,
    open: { control: { type: "boolean" }, defaultValue: false },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;
const dialogRender = (args: any) => {
  const [isOpen, setIsOpen] = useState(args.open);
  const t = useTranslations();
  useEffect(() => {
    setIsOpen(args.open);
  }, [args.open]);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        variant="contained"
        label={args.label}
        onClick={() => setIsOpen(true)}
      />
      <Dialog {...args} open={isOpen} handleClose={() => setIsOpen(false)}>
        <Grid p={2}>{t(args.opened)}</Grid>
      </Dialog>
    </div>
  );
};
export const DialogDefault: Story = {
  render: (args) => {
    return dialogRender(args);
  },
};
const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export const DownToUp: Story = {
  render: (args) => {
    return dialogRender({ TransitionComponent: Transition, ...args });
  },
};

export const FullScreen: Story = {
  render: (args) => {
    return dialogRender({
      TransitionComponent: Transition,
      fullScreen: true,
      ...args,
    });
  },
};
