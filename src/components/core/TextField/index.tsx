import Props from "./types";
import { Controller } from "react-hook-form";
import { default as MuiTextField } from "@mui/material/TextField";
import { useTranslations } from "@/hooks";

export default function TextField(props: Props) {
  const { label, control, rules, helperText, ...restProps } = props;

  const { t } = useTranslations();

  // To handle if the control not exits
  if (!control || !restProps.name)
    return (
      <MuiTextField
        label={t(label)}
        helperText={t(helperText as string)}
        {...restProps}
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
          <MuiTextField
            {...restProps}
            {...field}
            ref={restProps.ref}
            label={t(label)}
            error={!!fieldState.error}
            helperText={t((fieldState.error?.message || helperText) as string)}
          />
        );
      }}
    />
  );
}
