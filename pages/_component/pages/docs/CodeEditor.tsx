import { css } from "@emotion/react";
import { Editor } from "@monaco-editor/react";

export default function CodeEditor({ title }: { title: string }) {
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

  const code = `// import ${title} from "basic-loading";

export default function App() {
  const option = {

  }

  // return <${title} option={option} />;
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
