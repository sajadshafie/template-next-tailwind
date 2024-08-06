import { SliderProps, SxProps } from "@mui/material";
import { ControllerProps } from "react-hook-form";

export default interface Props
  extends Omit<SliderProps, "defaultValue" | "name">,
    Omit<ControllerProps, "render"> {
  containerStyle?: SxProps;
}
