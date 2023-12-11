import { css } from "@emotion/react";
import { roboto_bold } from "../_util/font";
import DocsLayout from "../_component/layout/DocsLayout";

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
        {/* <SideMenu /> */}
        <div className="doc-container">
          <div className="doc-category">Installation</div>
          <div className={`doc-title ${roboto_bold.className}`}>
            Get Started
          </div>
        </div>
      </div>
    </DocsLayout>
  );
};

export default Docs;
