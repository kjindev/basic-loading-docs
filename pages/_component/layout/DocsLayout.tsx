import { ReactNode } from "react";
import SideMenu from "../pages/docs/SideMenu";
import { css } from "@emotion/react";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div css={css(style)}>
      <div className="container">
        <SideMenu />
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
    width: "1200px",
  },
};
