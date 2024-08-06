import { ReactNode } from "react";
import { SvgIconProps } from "@mui/material";
import { CircularProgressProps } from "@mui/material";
import { LoadingButtonProps } from "@mui/lab/LoadingButton";

type propLoading = Omit<CircularProgressProps, "size">;
export default interface Props {
  state: ProcessLoadingType;
  children: ReactNode;
  loadingProp?: propLoading;
  iconReportProp?: SvgIconProps;
  labelErrorButton?: string;
  errorButtonProp?: Omit<
    LoadingButtonProps,
    "ref" | "color" | "variant" | "onClick"
  >;
  onClickError?: () => void;
  messageLoading?: string;
  messageError?: string;
  messageNotfound?: string;
}
