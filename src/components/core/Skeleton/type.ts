import { SkeletonProps } from "@mui/material";

export default interface Props extends SkeletonProps {
  isLoading?: boolean;
  children?: React.ReactNode;
  message?: string;
}
