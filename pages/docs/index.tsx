import { css } from "@emotion/react";
import { fontSize, notosans_bold } from "../../util/font";
import DocsLayout from "../_component/layout/DocsLayout";
import { ReactNode } from "react";
import { mq } from "@/util/constant";

export default function Docs() {
  return (
    <DocsLayout>
      <div css={docsStyle}>
        <div className="doc-container">
          <div className="doc-category">Installation</div>
          <div className={`doc-title ${notosans_bold.className}`}>
            Get Started
          </div>
          <Code>npm install basic-loading</Code>
          <span>Or</span>
          <Code>yarn add basic-loading</Code>
        </div>
      </div>
    </DocsLayout>
  );
}

function Code({ children }: { children: ReactNode }) {
  return (
    <div css={css(codeStyle)}>
      <pre>
        <code>{children}</code>
      </pre>
    </div>
  );
}

const codeStyle = {
  backgroundColor: "#232323",
  letterSpacing: "0.05rem",
  color: "#f4f4f5",
  padding: "0.05rem",
  paddingLeft: "1rem",
  borderRadius: "16px",
  fontSize: fontSize.small,
  margin: "1rem 0rem",
};

const docsStyle = {
  "& .doc-container": {
    padding: "100px 0 0 280px",
  },
  "&.doc-category": {
    fontsize: fontSize.small,
  },
  "& .doc-title": {
    fontsize: fontSize.large2,
    [mq[0]]: {
      fontsize: fontSize.large,
    },
  },
};
