import { css } from "@emotion/react";
import { shadow } from "./constant";

import { ReactNode } from "react";
import { StringObject } from "./type";

export const Box = ({
  children,
  props,
  className,
}: {
  children?: ReactNode;
  props?: StringObject;
  className?: string;
}) => {
  const style = css(props, {
    borderRadius: "0.75rem",
    boxShadow: shadow,
  });

  return (
    <div className={className} css={style}>
      {children}
    </div>
  );
};
