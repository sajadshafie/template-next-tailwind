import { BaseTextFieldProps } from "@mui/material/TextField";
import { ControllerProps } from "react-hook-form";

export default interface Props
  extends Omit<BaseTextFieldProps, "label">,
    Omit<ControllerProps, "render" | "defaultValue" | "name"> {
  label?: string;
}
