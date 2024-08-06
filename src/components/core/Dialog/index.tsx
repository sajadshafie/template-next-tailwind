import { Props } from "./type";
import MuiDialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslations } from "@/hooks";

export default function Dialog(props: Props) {
  const {
    children,
    handleClose,
    title,
    titleProps,
    contentProps,
    ...restProps
  } = props;
  const { t } = useTranslations();

  return (
    <MuiDialog onClose={() => handleClose()} {...restProps}>
      <DialogTitle {...titleProps} sx={{ m: 0, p: 2, ...titleProps?.sx }}>
        {t(title)}
      </DialogTitle>
      <DialogContent {...contentProps}>{children}</DialogContent>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
    </MuiDialog>
  );
}
