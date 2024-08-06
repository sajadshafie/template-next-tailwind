"use client";
import { default as MuiSelect } from "@mui/material/Select";
import CheckboxLabel from "../CheckboxLabel";
import { Controller } from "react-hook-form";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Props from "./type";
import { handleFindItemInArray } from "@/utils";
import { useTranslations } from "@/hooks";

const names = [
  {
    label: "Oliver Hansen",
    value: 1,
  },
  { label: "Van Henry", value: 2 },
  {
    label: "April Tucker",
    value: 3,
  },
  {
    label: "Ralph Hubbard",
    value: 4,
  },
  { label: "Omar Alexander", value: 5 },
  {
    label: "Carlos Abbott",
    value: 6,
  },
];
export default function Select(props: Props) {
  const {
    label,
    list = names,
    defaultSelected,
    control,
    formControlProps,
    ...restProps
  } = props;

  const { t } = useTranslations();

  const SelectRender = (field?: any, fieldState?: any) => {
    const defaultVal: string[] = field?.value || props.value;

    return (
      <FormControl {...formControlProps}>
        <InputLabel {...restProps.inputLabelProps}>{t(label)}</InputLabel>
        <MuiSelect
          {...field}
          {...props}
          error={!!fieldState?.error?.message || restProps.error}
          helperText={t(fieldState?.error?.message)}
          renderValue={(selected) =>
            restProps.multiple
              ? handleFindItemInArray(list, defaultVal as string[]).map((v) =>
                  t(v.label),
                )
              : t(list.find((val) => val.value == selected)?.label)
          }
          MenuProps={{
            PaperProps: {
              ...restProps.paperProps,
            },
          }}
        >
          {list.map((v: LabelValueType, i: number) => {
            if (restProps.multiple) {
              return (
                <MenuItem {...restProps.menuItemProps} key={i} value={v.value}>
                  <CheckboxLabel
                    {...field}
                    {...restProps.checkboxProps}
                    checked={defaultVal?.some((val) => val == v.value)}
                  />
                  <ListItemText
                    {...restProps.listItemTextProps}
                    primary={t(v.label)}
                  />
                </MenuItem>
              );
            } else {
              return (
                <MenuItem key={i} {...restProps.menuItemProps} value={v.value}>
                  {t(v.label)}
                </MenuItem>
              );
            }
          })}
        </MuiSelect>
      </FormControl>
    );
  };

  if (!control) return <div>{SelectRender()}</div>;

  return (
    <div>
      <Controller
        name={restProps.name}
        defaultValue={restProps.defaultValue}
        disabled={restProps.disabled}
        control={control}
        render={({ field, fieldState }) => {
          return SelectRender(field, fieldState);
        }}
      />
    </div>
  );
}
