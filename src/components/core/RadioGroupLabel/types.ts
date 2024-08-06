import { RadioGroupProps } from "@mui/material/RadioGroup";
import { RadioProps } from "@mui/material/Radio";
import { FormLabelOwnProps } from "@mui/material/FormLabel";
import { ControllerProps } from "react-hook-form";

export default interface Props<ListType>
  extends Omit<
      RadioGroupProps,
      "defaultValue" | "ref" | "label" | "name" | "color"
    >,
    Omit<ControllerProps, "render"> {
  label: string;
  list: ListType[];
  translateList?: boolean;
  listLabelKey: Extract<keyof ListType, string>;
  listValueKey: Extract<keyof ListType, string>;
  color?: FormLabelOwnProps["color"];
  size?: RadioProps["size"];
  error?: boolean;
  helperText?: string;
}
