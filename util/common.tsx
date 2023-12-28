import { Interpolation, Theme, css } from "@emotion/react";
import { shadow } from "./constant";
import { BoxProps, StringObject } from "./type";
import { ReactNode } from "react";

export const Box = ({ children, props }: BoxProps) => {
  return <div css={css(style, props)}>{children}</div>;
};

const style = {
  borderRadius: "0.75rem",
  boxShadow: shadow,
};
