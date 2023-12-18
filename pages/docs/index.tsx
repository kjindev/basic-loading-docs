import { css } from "@emotion/react";
import { roboto_bold } from "../_util/font";
import DocsLayout from "../_component/layout/DocsLayout";
import { ReactNode } from "react";

function Code({ children }: { children: ReactNode }) {
  return (
    <div
      css={css({
        backgroundColor: "#232323",
        letterSpacing: "0.05rem",
        color: "#f4f4f5",
        padding: "0.05rem",
        paddingLeft: "1rem",
        borderRadius: "16px",
        fontSize: "0.875rem",
        margin: "1rem 0rem",
      })}
    >
      <pre>
        <code>{children}</code>
      </pre>
    </div>
  );
}
const Docs = () => {
  return (
    <DocsLayout>
      <div
        css={css({
          "& .doc-container": {
            padding: "100px 0 0 280px",
          },
          "& .doc-category": {
            fontSize: "0.875rem",
          },
          "& .doc-title": {
            fontSize: "2em",
          },
        })}
      >
        <div className="doc-container">
          <div className="doc-category">Installation</div>
          <div className={`doc-title ${roboto_bold.className}`}>
            Get Started
          </div>
          <Code>npm install basic-loading</Code>
          <span>Or</span>
          <Code>yarn add basic-loading</Code>
        </div>
      </div>
    </DocsLayout>
  );
};

export default Docs;
