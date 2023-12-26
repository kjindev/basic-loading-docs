import { shadow } from "@/util/constant";
import { componentList } from "@/util/docs";
import { notosans } from "@/util/font";
import { css } from "@emotion/react";
import { Editor } from "@monaco-editor/react";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";

export default function CodeBlock({ title }: { title: string }) {
  const optionList = componentList.find((item: any) => item.title === title);

  return (
    <div
      css={css({
        boxShadow: shadow,
        cursor: "default",
        backgroundColor: "#232323",
        letterSpacing: "0.05rem",
        color: "#f4f4f5",
        fontSize: "0.875rem",
        borderRadius: "0.75rem",
        padding: "0.875rem 1.75rem",
        "& .cyan": { color: "#67e8f9" },
        "& .green": { color: "#bef264" },
        "& .purple": { color: "#a78bfa" },
        "& .blue": { color: "#60a5fa" },
        "& .yellow": { color: "#fde047" },
        "& .red": { color: "#f87171" },
        "& .orange": { color: "#fb923c" },
        "& .italic": { fontStyle: "italic" },
        "& input": {
          cursor: "line",
          backgroundColor: "#232323",
          color: "white",
          border: "#232323",
        },
        "& input:focus": {
          outline: "none",
        },
      })}
    >
      <pre>
        <div>
          <code className="italic cyan">{"import "}</code>
          <code>{title}</code>
          <code className="italic cyan">{" from "}</code>
          <code className="cyan">{'"'}</code>
          <code className="green">{"basic-loading"}</code>
          <code className="cyan">{'";'}</code>
        </div>
        <div>
          <code>{"  "}</code>
        </div>
        <div>
          <code className="italic cyan">{"export default "}</code>
          <code className="purple">{"function "}</code>
          <code className="blue">{"App"}</code>
          <code className="yellow">{"() {"}</code>
        </div>
        <div>
          <code className="purple">{"     const "}</code>
          <code className="red">{"option"}</code>
          <code className="purple">{" = {"}</code>
        </div>

        <div>
          {/* <form onSubmit={submitValue}>
            <code>{`         size`}</code>
            <code className="cyan">{": "}</code>
            <input onChange={changeValue} value={value} />
          </form> */}
          {optionList?.option?.map((item: any, index: number) => {
            const key: string = Object.keys(item)[0];
            const value: any = Object.values(item)[0];
            return (
              <div key={index}>
                <code>{`         ${key}`}</code>
                <code className="cyan">{": "}</code>
                {typeof value === "string" ? (
                  <>
                    <code className="cyan">{'"'}</code>
                    <code className="green">{value}</code>
                    <code className="cyan">{'"'}</code>
                  </>
                ) : (
                  <code className="orange">{value}</code>
                )}
                <code className="cyan">{","}</code>
              </div>
            );
          })}
        </div>
        <div>
          <code className="purple">{"     }"}</code>
          <code className="cyan">{";"}</code>
        </div>
        <div>
          <code>{"  "}</code>
        </div>
        <div>
          <code className="italic cyan">{"     return "}</code>
          <code className="cyan">{"<"}</code>
          <code className="yellow">{title}</code>
          <code className="italic purple">{" option="}</code>
          <code className="purple">{"{"}</code>
          <code className="">{"option"}</code>
          <code className="purple">{"}"}</code>
          <code className="cyan">{" />;"}</code>
        </div>
        <div>
          <code className="yellow">{"}"}</code>
        </div>
      </pre>
    </div>
  );
}
