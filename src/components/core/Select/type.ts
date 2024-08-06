import {
  CheckboxProps,
  SxProps,
  SelectProps,
  InputLabelOwnProps,
  ListItemTextProps,
  MenuItemOwnProps,
  PaperProps,
  FormControlProps,
} from "@mui/material";
import { ControllerProps } from "react-hook-form";

export default interface Props
  extends Omit<
      SelectProps<string[]>,
      "label" | "defaultValue" | "name" | "variant"
    >,
    Omit<ControllerProps, "render"> {
  label: string;
  formControlProps?: FormControlProps;
  paperProps?: PaperProps;
  list: LabelValueType[];
  defaultSelected?: string[];
  handleOnChange?: (value: string | string[]) => void;
  checkboxProps?: CheckboxProps;
  inputLabelProps?: InputLabelOwnProps;
  listItemTextProps?: ListItemTextProps;
  menuItemProps?: MenuItemOwnProps;
}
