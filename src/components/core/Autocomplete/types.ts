import { ControllerProps, UseFormSetValue } from "react-hook-form";
import { AutocompleteProps } from "@mui/material/Autocomplete";
import TextFieldProps from "../TextField/types";
import { ChipTypeMap } from "@mui/material/Chip";
import ChipProps from "../Chip/types";

type OmittedControllerProps = Omit<ControllerProps, "render" | "defaultValue">;

export type ExtractedFromValue<Value> = Value extends object
  ? Extract<keyof Value, string>
  : undefined;

export default interface Props<
  Value,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap["defaultComponent"],
> extends OmittedControllerProps,
    Omit<
      AutocompleteProps<
        Value,
        Multiple,
        DisableClearable,
        FreeSolo,
        ChipComponent
      >,
      "renderInput" | "defaultValue"
    > {
  label?: string;
  setValue?: UseFormSetValue<any>;
  uniqeKey: ExtractedFromValue<Value>;
  labelKey?: ExtractedFromValue<Value>;
  renderTagProps?: (value: Value) => ChipProps;
  virtualization?: boolean;
  variant?: TextFieldProps["variant"];
  color?: TextFieldProps["color"];
  error?: TextFieldProps["error"];
  helperText?: TextFieldProps["helperText"];
}

export interface DefaultPropsProps<
  Value,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap["defaultComponent"],
> {
  multiple?: boolean;
  uniqeKey?: ExtractedFromValue<Value>;
  labelKey?: ExtractedFromValue<Value>;
  getOptionLabel: DefaultPropsReturn<
    Value,
    Multiple,
    DisableClearable,
    FreeSolo,
    ChipComponent
  >["getOptionLabel"];
  renderTagProps?: (value: Value) => ChipProps;
  label?: string;
  virtualization?: boolean;
  variant?: TextFieldProps["variant"];
  color?: TextFieldProps["color"];
  error?: TextFieldProps["error"];
  helperText?: TextFieldProps["helperText"];
  t: (key?: string) => string;
}

export interface DefaultPropsReturn<
  Value,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap["defaultComponent"],
> {
  isOptionEqualToValue: AutocompleteProps<
    Value,
    Multiple,
    DisableClearable,
    FreeSolo,
    ChipComponent
  >["isOptionEqualToValue"];
  getOptionLabel?: AutocompleteProps<
    Value,
    Multiple,
    DisableClearable,
    FreeSolo,
    ChipComponent
  >["getOptionLabel"];
  renderTags?: AutocompleteProps<
    Value,
    Multiple,
    DisableClearable,
    FreeSolo,
    ChipComponent
  >["renderTags"];
  renderInput: AutocompleteProps<
    Value,
    Multiple,
    DisableClearable,
    FreeSolo,
    ChipComponent
  >["renderInput"];
  ListboxComponent?: AutocompleteProps<
    Value,
    Multiple,
    DisableClearable,
    FreeSolo,
    ChipComponent
  >["ListboxComponent"];
  PopperComponent?: AutocompleteProps<
    Value,
    Multiple,
    DisableClearable,
    FreeSolo,
    ChipComponent
  >["PopperComponent"];
}
