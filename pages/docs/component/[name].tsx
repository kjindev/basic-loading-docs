import DocsLayout from "@/pages/_component/layout/DocsLayout";
import CodeBlock from "@/pages/_component/pages/docs/CodeBlock";
import CodeEditor from "@/pages/_component/pages/docs/CodeEditor";
import OptionType from "@/pages/_component/pages/docs/OptionType";
import Sample from "@/pages/_component/pages/docs/Sample";
import { shadow } from "@/pages/_util/constant";
import { roboto_bold } from "@/pages/_util/font";
import { css } from "@emotion/react";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const DocsComponent = () => {
  const [name, setName] = useState("");
  const params = useParams();

  useEffect(() => {
    if (params) {
      const name = params.name as string;
      setName(name);
    }
  }, [params]);

  return (
    <DocsLayout>
      return (
      <div
        css={css({
          "& .docs-container": {
            padding: "80px 0 0 280px",
          },
          "& .docs-category": {
            fontSize: "0.875rem",
          },
          "& .docs-title": {
            fontSize: "2em",
          },
          "& .docs-content-container": {
            margin: "2rem 0",
          },
          "& .code-block": {
            margin: "0.75rem 0",
          },
          "& .option-type": {
            display: "flex",
            textAlign: "center",
            fontSize: "0.875rem",
            backgroundColor: "#00000010",
            margin: "0.75rem 0",
            padding: "0.75rem 0",
            borderRadius: "0.75rem",
            "& span": {
              width: "25%",
            },
          },
          "& .sample": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "250px",
            borderRadius: "0.75rem",
            boxShadow: shadow,
            margin: "0.75rem 0",
          },
        })}
      >
        <div className="docs-container">
          <div className="docs-category">Component</div>
          <div className={`docs-title ${roboto_bold.className}`}>{name}</div>
          <div className="docs-content-container">
            <div className={`${roboto_bold.className}`}>• Sample</div>
            <div className="sample">
              <Sample title={name} />
            </div>
          </div>
          <div className="docs-content-container">
            <div className={`${roboto_bold.className}`}>• Code</div>
            <div className="code-block">
              <CodeBlock title={name} />
              {/* <CodeEditor title={name} /> */}
            </div>
          </div>
          <div className="docs-content-container">
            <div className={`${roboto_bold.className}`}>• Option Type</div>
            <div className={`option-type ${roboto_bold.className}`}>
              <span>name</span>
              <span>type</span>
              <span>default</span>
              <span>unit</span>
            </div>
            <OptionType title={name} />
          </div>
        </div>
      </div>
      );
    </DocsLayout>
  );
};

export default DocsComponent;
