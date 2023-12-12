import { css } from "@emotion/react";
import { Editor } from "@monaco-editor/react";

export default function CodeEditor() {
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
  };

  const code = `// import DotBasic from "basic-loading";

export default function App() {
  const option = {

  }

  // return <DotBasic option={option} />;
}
  `;
  return (
    <div
      css={css({
        padding: "2rem 0.5rem",
        backgroundColor: "#1E1E1E",
        borderRadius: "0.875rem",
      })}
    >
      <Editor
        height="250px"
        defaultLanguage="typescript"
        defaultValue={code}
        theme="vs-dark"
        options={option}
      />
    </div>
  );
}
