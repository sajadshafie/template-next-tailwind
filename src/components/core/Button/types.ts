import { LoadingButtonProps } from "@mui/lab/LoadingButton";

export default interface Props extends Omit<LoadingButtonProps, "ref"> {
  label?: string;
}
