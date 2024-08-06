import { ChipProps } from "@mui/material/Chip";

export default interface Props extends ChipProps {
  message?: string;
  href?: string;
}
