import DocsLayout from "@/pages/_component/layout/DocsLayout";
import { css } from "@emotion/react";

const DocsComponent = () => {
  return (
    <DocsLayout>
      <div
        css={css({
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        })}
      >
        name
      </div>
    </DocsLayout>
  );
};

export default DocsComponent;
