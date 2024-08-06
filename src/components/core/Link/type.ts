import { LinkProps as NextLinkProps } from "next/link";
import { LinkProps } from "@mui/material/Link";

export default interface Props extends NextLinkProps, Omit<LinkProps, "href"> {
  children?: React.ReactNode;
  label?: string;
}
