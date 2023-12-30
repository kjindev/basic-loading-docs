// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Main from "./_component/pages/main/Main";
import Main2 from "./_component/pages/main/Main2";
import { robotoBold } from "@/util/font";

export default function Home() {
  return (
    <div css={css(pageStyle, { flexDirection: "column" })}>
      <Main />
      <Main2 />
      <footer className={robotoBold.className}>BASIC LOADING | 2023</footer>
    </div>
  );
}

const pageStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& footer": {
    width: "100%",
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000010",
    // fontSize: "1.2rem",
    paddingTop: "20px",
  },
};
