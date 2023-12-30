// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Main from "./_component/pages/main/Main";
import Main2 from "./_component/pages/main/Main2";
import { robotoBold } from "@/util/font";
import Image from "next/image";
import Logo from "./_assets/logo.png";
import { maxWidth, mq } from "@/util/constant";
export default function Home() {
  return (
    <div
      css={css(pageStyle, {
        flexDirection: "column",
        "& footer": {
          flexDirection: "column",
        },
      })}
    >
      <Main />
      <Main2 />
      <footer>
        <Image src={Logo} alt="logo" width="30" />
        <div>BASIC LOADING</div>
      </footer>
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
    paddingTop: "20px",
    "& div": {
      padding: "10px 0",
    },
    "& img": {
      opacity: "0.9",
    },
  },
};
