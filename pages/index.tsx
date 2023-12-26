// /** @jsxImportSource @emotion/react */
import { mq } from "@/util/constant";
import { fontSize, notosans_bold } from "@/util/font";
import { css } from "@emotion/react";

export default function Home() {
  return (
    <div css={css(pageStyle, { flexDirection: "column" })}>
      <Intro />
      {/* <footer className={notosans_bold.className}>BASIC LOADING</footer> */}
    </div>
  );
}

function Intro() {
  return (
    <div
      css={css(introStyle, { flexDirection: "column", textAlign: "center" })}
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

const pageStyle = {
  width: "100%",
  display: "flex",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
  "& footer": {
    width: "100%",
    height: "100px",
    fontSize: "1.2rem",
    borderTop: "1px solid",
    paddingTop: "20px",
  },
};

const introStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  margin: "12px 0",
  "& .title": {
    fontSize: fontSize.large,
    [mq[0]]: {
      lineHeight: "3rem",
      fontSize: fontSize.large2,
    },
    [mq[2]]: {
      lineHeight: "4rem",
      fontSize: fontSize.large3,
    },
  },
  "& .subTitle": {
    fontSize: fontSize.extraSmall,
    padding: "0.5rem",
    [mq[0]]: {
      lineHeight: "3rem",
      fontSize: fontSize.small,
    },
    [mq[2]]: {
      lineHeight: "4rem",
      fontSize: fontSize.medium,
    },
  },
};
