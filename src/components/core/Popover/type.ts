import { PopoverProps, PopoverOrigin, ButtonOwnProps } from "@mui/material";

export default interface Props
  extends Omit<PopoverProps, "label" | "content" | "open"> {
  label: string;
  children: React.ReactNode | string;
  verticalanchorOrigin?: PopoverOrigin["vertical"];
  horizontalanchorOrigin?: PopoverOrigin["horizontal"];
  buttonProps?: ButtonOwnProps;
}
