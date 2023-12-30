import { css } from "@emotion/react";

import DocsLayout from "../../_component/layout/DocsLayout";
import { ReactNode } from "react";
import { codeBlockBg, mq } from "@/util/constant";
import { fontSize, robotoBold } from "@/util/font";

export default function Docs() {
  return (
    <DocsLayout>
      <div css={docsStyle}>
        <div className="doc-container">
          <div className="doc-category">Installation</div>
          <div className={`doc-title ${robotoBold.className}`}>Get Started</div>
          <div className="doc-content">
            <div>To install the latest version, run the following command:</div>
            <Code>npm install basic-loading</Code>
            <div>Or if you are using yarn:</div>
            <Code>yarn add basic-loading</Code>
          </div>
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
  backgroundColor: codeBlockBg,
  // letterSpacing: "0.05rem",
  color: "#f4f4f5",
  padding: "0.05rem",
  paddingLeft: "1rem",
  borderRadius: "16px",
  fontSize: fontSize.sm,
  margin: "1rem 0rem",
};

const docsStyle = {
  padding: "135px 30px",
  fontSize: fontSize.sm,
  [mq[1]]: {
    padding: "0",
    fontSize: fontSize.md,
  },
  "& .doc-container": {
    padding: "0 0 0 0",
    [mq[1]]: {
      padding: "100px 30px 0 280px",
    },
  },
  "& .doc-category": {
    fontSize: fontSize.xs,
    [mq[1]]: {
      fontSize: fontSize.sm,
    },
  },
  "& .doc-title": {
    fontSize: fontSize.xl,
    [mq[1]]: {
      fontSize: fontSize.xl2,
    },
  },
  "& .doc-content": {
    margin: "35px 0",
    fontsize: fontSize.sm,
  },
  // "& .doc-title": {
  //   fontsize: fontSize.xl,
  //   [mq[0]]: {
  //     fontsize: fontSize.lg,
  //   },
  // },
};
