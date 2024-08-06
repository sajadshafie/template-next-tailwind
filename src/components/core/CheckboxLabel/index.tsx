import Props from "./types";
import { default as MuiCheckbox } from "@mui/material/Checkbox";
import { FormControlLabel } from "@mui/material";
import { useTranslations } from "@/hooks";
import { Controller } from "react-hook-form";

export default function CheckboxLabel(props: Props) {
  const { label, labelProps, control, rules, ...restProps } = props;

  const { t } = useTranslations();

  if (!control)
    return (
      <FormControlLabel
        {...labelProps}
        label={t(label)}
        control={<MuiCheckbox {...restProps} />}
      />
    );

  return (
    <Controller
      name={restProps.name}
      defaultValue={restProps.defaultValue}
      disabled={restProps.disabled}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => {
        return (
          <FormControlLabel
            {...labelProps}
            label={t(label)}
            control={
              <MuiCheckbox
                {...field}
                {...restProps}
                color={!!fieldState.error ? "error" : restProps?.color}
              />
            }
          />
        );
      }}
    />
  );
}
