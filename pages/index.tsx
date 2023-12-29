// /** @jsxImportSource @emotion/react */
import { maxWidth, mq, subColor1, subColor2 } from "@/util/constant";
import { fontSize, robotoBold } from "@/util/font";
import { StringObject } from "@/util/type";
import { css } from "@emotion/react";

export default function Home() {
  return (
    <div css={css(pageStyle, { flexDirection: "column" })}>
      <Intro />
      {/* <footer className={robotoBold.className}>BASIC LOADING</footer> */}
    </div>
  );
}

function Intro() {
  return (
    <div
      css={css(introStyle, { flexDirection: "column", textAlign: "center" })}
    >
      <div className={`title ${robotoBold.className}`}>
        Basic Loading Components for React
      </div>
      <div className="subTitle">
        BASIC LOADING is a library that provide loading UI components for React
        and Next.js. <br /> You can customize the option values to use it the
        way you want. Make effective loading page with BASIC LOADING!
      </div>
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
  width: maxWidth,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "12px 0",
  backgroundImage: "linear-gradient(180deg,#555,#000)",
  color: "transparent",
  backgroundClip: "text",
  "& .title": {
    fontSize: fontSize.large,
    padding: "1rem",
    letterSpacing: "-0.025em",
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
    fontSize: fontSize.small,
    padding: "1rem",
    lineHeight: "2rem",
    color: "#71717a",
    [mq[0]]: {
      fontSize: fontSize.small,
    },
    [mq[2]]: {
      fontSize: fontSize.medium,
    },
  },
};
