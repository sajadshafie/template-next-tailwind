import { ChipTypeMap } from "@mui/material/Chip";
import { DefaultPropsProps, DefaultPropsReturn } from "./types";
import TextField from "../TextField";
import Chip from "../Chip";
import Listbox from "./Listbox";

export default function defaultPropsRender<
  Value,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap["defaultComponent"],
>(
  props: DefaultPropsProps<
    Value,
    Multiple,
    DisableClearable,
    FreeSolo,
    ChipComponent
  >,
): DefaultPropsReturn<
  Value,
  Multiple,
  DisableClearable,
  FreeSolo,
  ChipComponent
> {
  const {
    label,
    uniqeKey,
    labelKey,
    multiple,
    getOptionLabel,
    renderTagProps,
    virtualization,
    variant,
    color,
    error,
    helperText,
    t,
  } = props;

  return {
    renderInput: (params) => {
      return (
        <TextField
          {...params}
          label={label}
          variant={variant}
          color={color}
          error={error}
          helperText={helperText}
        />
      );
    },
    isOptionEqualToValue: (option, value) => {
      if (!uniqeKey) return option === value;
      return option[uniqeKey] === value[uniqeKey];
    },
    getOptionLabel: (option) => {
      if (getOptionLabel) return getOptionLabel(option);
      if (typeof option === "string") return t(option);
      if (!labelKey) return JSON.stringify(option);
      return t(option[labelKey] as string);
    },
    ...(multiple && {
      renderTags: (values, getTagProps) => {
        return values.map((value, index) => {
          const key = (
            typeof value === "string" || !uniqeKey ? value : value[uniqeKey]
          ) as React.Key;

          const message =
            typeof value === "string"
              ? value
              : labelKey
                ? (value[labelKey] as string)
                : JSON.stringify(value);

          return (
            <Chip
              {...getTagProps({ index })}
              key={key}
              message={message}
              {...(renderTagProps && renderTagProps(value))}
            />
          );
        });
      },
    }),
    ...(virtualization && {
      ListboxComponent: Listbox,
    }),
  };
}
