import { ReactNode } from "react";
import SideMenu from "../pages/docs/SideMenu";
import { css } from "@emotion/react";
import { mq } from "@/util/constant";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div css={css(style)}>
      <div className="container">
        <div className="side-menu">
          <SideMenu />
        </div>
        {children}
      </div>
    </div>
  );
}

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& .container": {
    width: "1000px",
  },
  "& .side-menu": {
    display: "none",
    [mq[1]]: {
      display: "flex",
    },
  },
};
