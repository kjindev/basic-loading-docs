import { Interpolation, Theme } from "@emotion/react";
import { ReactNode } from "react";

export type StringObject = {
  [key: string]: string | number;
};

export interface BoxProps {
  children?: ReactNode;
  props?: StringObject;
}

// export interface Children {
//   children?: ReactNode;
// }
