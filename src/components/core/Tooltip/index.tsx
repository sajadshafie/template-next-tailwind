import Props from "./types";
import { default as MuiTooltip } from "@mui/material/Tooltip";
import { useTranslations } from "@/hooks";
import React, { Fragment } from "react";
import { Grid } from "@mui/material";

export default function Tooltip(props: Props) {
  const {
    children,
    title,
    message,
    titleNode,
    containerChildSx,
    containerTitleSx,
    ...restProps
  } = props;
  const { t } = useTranslations();

  return (
    <MuiTooltip
      data-testid="tooltip"
      {...restProps}
      title={title ? t(title) : <Grid sx={containerTitleSx}>{titleNode}</Grid>}
    >
      <Grid sx={containerChildSx}>{children ? children : t(message)}</Grid>
    </MuiTooltip>
  );
}
