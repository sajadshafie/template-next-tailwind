import Props from "./types";
import { default as MuiLoadingButton } from "@mui/lab/LoadingButton";
import { useTranslations } from "@/hooks";

export default function Button(props: Props) {
  const { children, label, ...restProps } = props;

  const { t } = useTranslations();

  return (
    <MuiLoadingButton {...restProps}>{t(label) || children}</MuiLoadingButton>
  );
}
