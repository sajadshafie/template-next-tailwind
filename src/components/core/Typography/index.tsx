import Props from "./type";
import { default as MuiTypography } from "@mui/material/Typography";
import { useTranslations } from "@/hooks";

export default function Typography(props: Props) {
  const { children, message, ...restProps } = props;
  const { t } = useTranslations();

  return (
    <MuiTypography data-testid="typography" {...restProps}>
      {t(message) || children}
    </MuiTypography>
  );
}
