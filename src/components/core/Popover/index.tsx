import { useCallback, useState, MouseEvent } from "react";
import { default as MuiPopover } from "@mui/material/Popover";
import { useTranslations } from "@/hooks";
import Props from "./type";
import Button from "../Button";

export default function Popover(props: Props) {
  const {
    children,
    label,
    horizontalanchorOrigin = "center",
    verticalanchorOrigin = "bottom",
    buttonProps,
    ...restProps
  } = props;

  const { t } = useTranslations();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        {...buttonProps}
        aria-describedby={id}
        onClick={handleClick}
        label={t(label)}
      />
      <MuiPopover
        {...restProps}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: verticalanchorOrigin,
          horizontal: horizontalanchorOrigin,
        }}
      >
        {children}
      </MuiPopover>
    </div>
  );
}
