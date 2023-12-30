import { css } from "@emotion/react";
import { shadow } from "./constant";

import { ReactNode } from "react";
import { StringObject } from "./type";

export const Box = ({
  children,
  props,
}: {
  children?: ReactNode;
  props?: StringObject;
}) => {
  const style = css(props, {
    borderRadius: "0.75rem",
    boxShadow: shadow,
  });

  return <div css={style}>{children}</div>;
};
