import Props from "./types";
import { default as MuiChip } from "@mui/material/Chip";
import Link from "../Link";
import { useTranslations } from "@/hooks";

export default function Chip(props: Props) {
  const { message, label, href, ...restProps } = props;
  const { t } = useTranslations();

  const resolvedProps: Props = {
    ...restProps,
    label: message ? <>{t(message)}</> : label,
    ...(href && {
      component: Link,
      href,
    }),
  };

  return <MuiChip {...resolvedProps} />;
}
