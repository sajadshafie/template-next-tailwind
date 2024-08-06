import { DialogProps } from "@mui/material/Dialog";
import { DialogTitleProps } from "@mui/material/DialogTitle";
import { DialogContentProps } from "@mui/material/DialogContent";

export interface Props extends DialogProps {
  handleClose: () => void;
  title?: string;
  titleProps?: DialogTitleProps;
  contentProps?: DialogContentProps;
  children?: React.ReactNode;
}
