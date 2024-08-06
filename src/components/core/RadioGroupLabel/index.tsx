import Props from "./types";
import { default as MuiRadio } from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormHelperText from "@mui/material/FormHelperText";
import { Controller } from "react-hook-form";
import { useTranslations } from "@/hooks";

export default function RadioGroupLabel<ListType>(props: Props<ListType>) {
  const {
    label,
    list,
    listLabelKey,
    listValueKey,
    control,
    translateList = false,
    color,
    size,
    ...restProps
  } = props;

  const { t } = useTranslations();

  const radioRender = (
    field?: FormControlRenderField,
    fieldState?: FormControlRenderFieldState,
  ) => {
    const hasError = !!fieldState?.error || restProps?.error;

    return (
      <FormControl
        color={color}
        error={hasError}
        disabled={restProps.disabled}
        size={size}
      >
        <FormLabel id="radio-buttons-group-label">{t(label)}</FormLabel>
        <RadioGroup
          {...restProps}
          {...field}
          aria-labelledby="radio-buttons-group-label"
          defaultValue={field?.value || props.defaultValue}
        >
          {list.map((listItem) => {
            const label = listItem[listLabelKey];
            const value = listItem[listValueKey];

            return (
              <FormControlLabel
                key={value as React.Key}
                value={value}
                control={
                  <MuiRadio size={size} color={hasError ? "error" : color} />
                }
                label={<>{!translateList ? label : t(label as string)}</>}
              />
            );
          })}
        </RadioGroup>
        <FormHelperText>
          {t(fieldState?.error?.message || restProps?.helperText)}
        </FormHelperText>
      </FormControl>
    );
  };

  if (!control) return radioRender();

  return (
    <Controller
      name={restProps.name}
      disabled={restProps.disabled}
      control={control}
      defaultValue={restProps.defaultValue}
      render={({ field, fieldState }) => radioRender(field, fieldState)}
    />
  );
}
