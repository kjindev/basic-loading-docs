import DocsLayout from "@/pages/_component/layout/DocsLayout";
import CodeBlock from "@/pages/_component/pages/docs/CodeBlock";
import OptionType from "@/pages/_component/pages/docs/OptionType";
import Sample from "@/pages/_component/pages/docs/Sample";
import { shadow, subColor2 } from "@/util/constant";
import { fontSize, notosans_bold } from "@/util/font";
import { css } from "@emotion/react";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function DocsComponent() {
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
        css={css(style, {
          "& .option-type": {
            textAlign: "center",
          },
        })}
      >
        <div className="docs-container">
          <div className="docs-category">Component</div>
          <div className={`docs-title ${notosans_bold.className}`}>{name}</div>
          <div className="docs-content-container">
            <div className={`${notosans_bold.className}`}>• Sample</div>
            <div className="sample">
              <Sample title={name} />
            </div>
          </div>
          <div className="docs-content-container">
            <div className={`${notosans_bold.className}`}>• Code</div>
            <div className="code-block">
              <CodeBlock title={name} />
            </div>
          </div>
          <div className="docs-content-container">
            <div className={`${notosans_bold.className}`}>• Option Type</div>
            <div className={`option-type ${notosans_bold.className}`}>
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
}

const style = {
  "& .docs-container": {
    padding: "80px 0 0 280px",
  },
  "& .docs-category": {
    fontSize: fontSize.small,
  },
  "& .docs-title": {
    fontSize: fontSize.large2,
  },
  "& .docs-content-container": {
    margin: "2rem 0",
  },
  "& .code-block": {
    margin: "0.75rem 0",
  },
  "& .option-type": {
    display: "flex",
    fontSize: fontSize.small,
    backgroundColor: subColor2,
    margin: "0.75rem 0",
    padding: "0.75rem 0",
    borderRadius: "0.75rem",
    boxShadow: shadow,
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
};
