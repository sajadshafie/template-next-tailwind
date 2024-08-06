import React from "react";
import { default as MuiSkeleton } from "@mui/material/Skeleton";
import Props from "./type";
import { useTranslations } from "@/hooks";

export default function Skeleton(props: Props) {
  const { isLoading, children, message, ...restProps } = props;

  const { t } = useTranslations();

  if (isLoading) {
    return <MuiSkeleton {...restProps} />;
  }

  return <>{message ? t(message) : children}</>;
}
