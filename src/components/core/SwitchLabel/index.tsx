import Props from "./types";
import { Controller } from "react-hook-form";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useTranslations } from "@/hooks";

export default function SwitchLabel(props: Props) {
  const { label, control, rules, labelProps, ...restProps } = props;

  const { t } = useTranslations();

  if (control) {
    return (
      <Controller
        name={restProps.name}
        defaultValue={restProps.defaultValue}
        disabled={restProps.disabled}
        rules={rules}
        control={control}
        render={({ field: { value, ...restField } }) => {
          return (
            <FormControlLabel
              {...labelProps}
              label={t(label)}
              control={
                <Switch
                  {...restProps}
                  {...restField}
                  ref={restProps.ref}
                  checked={value}
                />
              }
            />
          );
        }}
      />
    );
  }

  return (
    <FormControlLabel
      {...labelProps}
      label={t(label)}
      control={<Switch {...restProps} ref={restProps.ref} />}
    />
  );
}
