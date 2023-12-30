import { css } from "@emotion/react";

import DocsLayout from "../../_component/layout/DocsLayout";
import { ReactNode } from "react";
import { mq } from "@/util/constant";
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
  padding: "135px 30px",
  fontSize: fontSize.small,
  [mq[1]]: {
    padding: "0",
    fontSize: fontSize.medium,
  },
  "& .doc-container": {
    padding: "0 0 0 0",
    [mq[1]]: {
      padding: "100px 30px 0 280px",
    },
  },
  "& .doc-category": {
    fontSize: fontSize.extraSmall,
    [mq[1]]: {
      fontSize: fontSize.small,
    },
  },
  "& .doc-title": {
    fontSize: fontSize.large,
    [mq[1]]: {
      fontSize: fontSize.large2,
    },
  },
  "& .doc-content": {
    margin: "35px 0",
    fontsize: fontSize.small,
  },
  // "& .doc-title": {
  //   fontsize: fontSize.large2,
  //   [mq[0]]: {
  //     fontsize: fontSize.large,
  //   },
  // },
};
