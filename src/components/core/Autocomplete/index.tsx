import Props from "./types";
import { Controller, ControllerFieldState } from "react-hook-form";
import { ChipTypeMap } from "@mui/material/Chip";
import { default as MuiAutocomplete } from "@mui/material/Autocomplete";
import defaultPropsRender from "./defaultPropsRender";
import { useTranslations } from "@/hooks";

export default function Autocomplete<
  Value,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap["defaultComponent"],
>(props: Props<Value, Multiple, DisableClearable, FreeSolo, ChipComponent>) {
  const {
    name,
    control,
    rules,
    disabled,
    setValue,
    uniqeKey,
    labelKey,
    getOptionLabel,
    renderTagProps,
    virtualization,
    variant,
    color,
    error,
    helperText,
    ...restProps
  } = props;

  const { t } = useTranslations();

  const defaultProps = (fieldState?: ControllerFieldState) =>
    defaultPropsRender<
      Value,
      Multiple,
      DisableClearable,
      FreeSolo,
      ChipComponent
    >({
      label: restProps.label,
      uniqeKey,
      labelKey,
      multiple: restProps.multiple,
      getOptionLabel,
      renderTagProps,
      virtualization,
      variant,
      color,
      error: fieldState ? !!fieldState.error : error,
      helperText: fieldState
        ? t((fieldState.error?.message || helperText) as string)
        : helperText,
      t,
    });

  // To handle if the control not exits
  if (!control) return <MuiAutocomplete {...restProps} {...defaultProps()} />;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      disabled={disabled}
      render={({ field, fieldState }) => {
        console.log("🚀 ~ Autocomplete ~ fieldState:", fieldState);
        return (
          <MuiAutocomplete
            {...restProps}
            {...field}
            {...defaultProps(fieldState)}
            onChange={(e, value) => {
              if (!setValue) return field.onChange(e);
              return setValue(name, value);
            }}
          />
        );
      }}
    />
  );
}
