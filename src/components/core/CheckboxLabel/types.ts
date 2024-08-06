import { CheckboxProps } from "@mui/material";
import { FormControlLabelProps } from "@mui/material/FormControlLabel";
import { ControllerProps } from "react-hook-form";

export default interface Props
  extends Omit<CheckboxProps, "defaultValue" | "name">,
    Omit<ControllerProps, "render"> {
  label: string;
  labelProps?: Omit<FormControlLabelProps, "label" | "control">;
}
