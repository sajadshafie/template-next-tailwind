import React from "react";
import ReportIcon from "@mui/icons-material/Report";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import { Grid } from "@mui/material";
import Props from "./type";
import { Button, Loading, Typography } from "..";
import { useTranslations } from "@/hooks";

export default function ProcessLoading(props: Props) {
  const {
    state,
    children,
    loadingProp,
    iconReportProp,
    messageLoading = "در حال پردازش اطلاعات",
    messageError = "خطا در پردازش اطلاعات",
    messageNotfound = "اطلاعات یافت نشد",
    labelErrorButton = "تلاش مجدد",
    errorButtonProp,
    onClickError,
  } = props;

  const { t } = useTranslations();

  if (state == "data") return children;

  return (
    <Grid
      style={{
        //   borderBottom: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {state == "loading" && (
        <>
          <Loading sx={{ mb: 1 }} {...loadingProp} />
          <Typography message={t(messageLoading)} />
        </>
      )}

      {state == "error" && (
        <>
          <ReportIcon sx={{ mb: 1 }} color="error" {...iconReportProp} />
          <Typography
            color={"error"}
            message={t(messageError)}
            sx={{ mb: 1 }}
          />
          <Button
            onClick={onClickError}
            label={t(labelErrorButton)}
            color="error"
            variant="outlined"
            {...errorButtonProp}
          />
        </>
      )}

      {state == "notfound" && (
        <>
          <FindInPageIcon color="disabled" sx={{ mb: 1 }} {...iconReportProp} />
          <Typography message={t(messageNotfound)} />
        </>
      )}
    </Grid>
  );
}
