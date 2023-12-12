import { roboto } from "@/pages/_util/font";
import { css } from "@emotion/react";
import { Editor } from "@monaco-editor/react";

export default function CodeBlock({ text }: { text: string }) {
  const option = {
    fontSize: 15,
    minimap: { enabled: false },
    overviewRulerLanes: 0,
    scrollbar: {
      vertical: "hidden",
      horizontal: "hidden",
      handleMouseWheel: false,
    },
    quickSuggestions: false,
    lineNumbers: false,
    readOnly: true,
  };

  return (
    <div
      css={css({
        margin: "1rem 0",
        padding: "1rem 1.5rem",
        backgroundColor: "#1E1E1E",
        borderRadius: "0.875rem",
        color: "white",
        fontSize: "0.875rem",
        letterSpacing: "0.05em",
        fontWeight: "100",
      })}
    >
      <div>{text}</div>
    </div>
  );
  //   const targetList = list.find((item: any) => item.title === title);

  // return (
  //   <div
  //     css={css({
  //       backgroundColor: "#232323",
  //       color: "#f4f4f5",
  //       fontSize: "0.875rem",
  //       borderRadius: "0.75rem",
  //       padding: "1.875rem",
  //       "& .cyan": { color: "#67e8f9" },
  //       "& .green": { color: "#bef264" },
  //       "& .purple": { color: "#a78bfa" },
  //       "& .blue": { color: "#60a5fa" },
  //       "& .yellow": { color: "#fde047" },
  //       "& .red": { color: "#f87171" },
  //       "& .orange": { color: "#fb923c" },
  //       "& .italic": { fontStyle: "italic" },
  //     })}
  //   >
  //     <pre>
  //       <div>
  //         <code className="italic cyan">{"import "}</code>
  //         <code>{title}</code>
  //         <code className="italic cyan">{" from "}</code>
  //         <code className="cyan">{'"'}</code>
  //         <code className="green">{"basic-loading"}</code>
  //         <code className="cyan">{'";'}</code>
  //       </div>
  //       <div>
  //         <code>{"  "}</code>
  //       </div>
  //       <div>
  //         <code className="italic cyan">{"export default "}</code>
  //         <code className="purple">{"function "}</code>
  //         <code className="blue">{"App"}</code>
  //         <code className="yellow">{"() {"}</code>
  //       </div>
  //       <div>
  //         <code className="purple">{"     const "}</code>
  //         <code className="red">{"option"}</code>
  //         <code className="purple">{" = {"}</code>
  //       </div>

  //       <div>
  //         {/* {targetList?.option?.map((item: any, index: number) => {
  //           const key: string = Object.keys(item)[0];
  //           const value: any = Object.values(item)[0];
  //           return (
  //             <div key={index}>
  //               <code>{`         ${key}`}</code>
  //               <code className="cyan">{": "}</code>
  //               {typeof value === "string" ? (
  //                 <>
  //                   <code className="cyan">{'"'}</code>
  //                   <code className="green">{value}</code>
  //                   <code className="cyan">{'"'}</code>
  //                 </>
  //               ) : (
  //                 <code className="orange">{value}</code>
  //               )}
  //               <code className="cyan">{","}</code>
  //             </div>
  //           );
  //         })} */}
  //       </div>
  //       <div>
  //         <code className="purple">{"     }"}</code>
  //         <code className="cyan">{";"}</code>
  //       </div>
  //       <div>
  //         <code>{"  "}</code>
  //       </div>
  //       <div>
  //         <code className="italic cyan">{"     return "}</code>
  //         <code className="cyan">{"<"}</code>
  //         <code className="yellow">{title}</code>
  //         <code className="italic purple">{" option="}</code>
  //         <code className="purple">{"{"}</code>
  //         <code className="">{"option"}</code>
  //         <code className="purple">{"}"}</code>
  //         <code className="cyan">{" />;"}</code>
  //       </div>
  //       <div>
  //         <code className="yellow">{"}"}</code>
  //       </div>
  //     </pre>
  //   </div>
  // );
}
