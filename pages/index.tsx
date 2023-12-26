// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { fontSize, notosans_bold } from "./_util/font";

export default function Home() {
  return (
    <div
      css={css({
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "& footer": {
          width: "100%",
          height: "100px",
          fontSize: "1.2rem",
          borderTop: "1px solid",
          paddingTop: "20px",
        },
      })}
    >
      <Intro1 />
      <Intro2 />
      <footer className={notosans_bold.className}>BASIC LOADING</footer>
    </div>
  );
}

function Intro1() {
  return (
    <div
      css={css({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        margin: "12px 0",
        "& .title": {
          lineHeight: "4.2rem",
          fontSize: fontSize.large3,
        },
        "& .subTitle": {
          fontSize: fontSize.medium,
          padding: "24px 0",
        },
      })}
    >
      <div className={`title ${notosans_bold.className}`}>
        Basic & Simple
        <br />
        Loading Component
      </div>
      <div className="subTitle">React Loading UI Component Library</div>
    </div>
  );
}

function Intro2() {
  return (
    <div
      css={css({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        "& .title": {
          lineHeight: "4rem",
          fontSize: fontSize.large3,
        },
        "& .subTitle": {
          fontSize: "1.2rem",
          padding: "36px 0",
        },
      })}
    >
      <div className={`title ${notosans_bold.className}`}>
        Custom as you want,
        <br />
        Combine as you need.
      </div>
    </div>
  );
}
