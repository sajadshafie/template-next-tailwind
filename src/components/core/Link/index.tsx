import { forwardRef } from "react";
import Props from "./type";
import { default as NextLink } from "next/link";
import { default as MuiLink } from "@mui/material/Link";
import { useTranslations } from "@/hooks";

export default forwardRef(function Link(props: Props, ref) {
  const { children, label, ...restProps } = props;

  const { t } = useTranslations();

  return (
    <MuiLink ref={ref} component={NextLink} {...restProps}>
      {label ? t(label) : children}
    </MuiLink>
  );
});
