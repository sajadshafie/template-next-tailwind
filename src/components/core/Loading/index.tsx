import { CircularProgress, CircularProgressProps } from "@mui/material";

interface PropsType extends Omit<CircularProgressProps, "size"> {
  size?: number;
}

export default function Loading(props: PropsType) {
  return <CircularProgress {...props} />;
}
