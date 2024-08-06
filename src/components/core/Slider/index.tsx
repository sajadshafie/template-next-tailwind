import React from "react";
import { Box } from "@mui/material";
import { default as MuiSlider } from "@mui/material/Slider";
import Props from "./type";
import { Controller } from "react-hook-form";

export default function Slider({
  valueLabelDisplay = "auto",
  ...props
}: Props) {
  const { containerStyle, control, ...restProps } = props;

  return (
    <Box sx={containerStyle}>
      {!control ? (
        <MuiSlider {...restProps} />
      ) : (
        <Controller
          control={control}
          name={restProps.name}
          defaultValue={restProps.defaultValue}
          disabled={restProps.disabled}
          rules={restProps.rules}
          render={({ field }) => {
            return (
              <MuiSlider
                valueLabelDisplay={valueLabelDisplay}
                {...restProps}
                {...field}
              />
            );
          }}
        />
      )}
    </Box>
  );
}
