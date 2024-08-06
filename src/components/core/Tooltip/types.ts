import { SxProps } from "@mui/material";
import { TooltipProps } from "@mui/material/Tooltip";
import { ReactNode } from "react";

export default interface Props
  extends Omit<TooltipProps, "title" | "children"> {
  children?: ReactNode;
  titleNode?: ReactNode;
  title?: string;
  message?: string;
  containerTitleSx?: SxProps;
  containerChildSx?: SxProps;
}
