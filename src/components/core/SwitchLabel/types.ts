import { SwitchProps, FormControlLabelProps } from "@mui/material";
import { ControllerProps } from "react-hook-form";

export default interface Props
  extends Omit<SwitchProps, "defaultValue">,
    Omit<ControllerProps, "render"> {
  name: string;
  label?: string;
  labelProps?: FormControlLabelProps;
}
