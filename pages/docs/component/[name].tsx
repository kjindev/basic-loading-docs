import DocsLayout from "@/pages/_component/layout/DocsLayout";
import CodeBlock from "@/pages/_component/pages/docs/CodeBlock";
import OptionType from "@/pages/_component/pages/docs/OptionType";
import Sample from "@/pages/_component/pages/docs/Sample";
import { Box } from "@/util/common";
import { mq, shadow, subColor2 } from "@/util/constant";
import { fontSize, robotoBold } from "@/util/font";
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
      <div
        css={css(style, {
          "& .option-type": {
            textAlign: "center",
          },
        })}
      >
        <div className="docs-container">
          <div className="docs-category">Component</div>
          <div className={`docs-title ${robotoBold.className}`}>{name}</div>
          <div className="docs-content-container">
            <div className={`${robotoBold.className}`}>Sample</div>
            <Box
              props={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "250px",
                margin: "0.5rem 0",
                backgroundColor: "white",
              }}
            >
              <Sample title={name} />
            </Box>
          </div>
          <div className="docs-content-container">
            <div className={`${robotoBold.className}`}>Code</div>
            <div className="code-block">
              <CodeBlock title={name} />
            </div>
          </div>
          <div className="docs-content-container">
            <div className={`${robotoBold.className}`}>Option Type</div>
            <div className={`option-type ${robotoBold.className}`}>
              <span>name</span>
              <span>type</span>
              <span>default</span>
              <span>unit</span>
            </div>
            <OptionType title={name} />
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}

const style = {
  padding: "135px 20px",
  fontSize: fontSize.md,
  [mq[1]]: {
    padding: "0",
    fontSize: fontSize.lg,
  },
  "& .docs-container": {
    padding: "0 0 0 0",
    [mq[1]]: {
      padding: "100px 30px 0 280px",
    },
  },
  "& .docs-category": {
    fontSize: fontSize.xs,
    [mq[1]]: {
      fontSize: fontSize.sm,
    },
  },
  "& .docs-title": {
    fontSize: fontSize.xl,
    [mq[1]]: {
      fontSize: fontSize.xl2,
    },
  },
  "& .docs-content-container": {
    margin: "2rem 0",
  },
  "& .code-block": {
    margin: "0.75rem 0",
  },
  "& .option-type": {
    display: "flex",
    fontSize: fontSize.sm,
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
