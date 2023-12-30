// /** @jsxImportSource @emotion/react */
import { Box } from "@/util/common";
import { mainColor, maxWidth, mq, subColor1, subColor2 } from "@/util/constant";
import { fontSize, robotoBold } from "@/util/font";
import { StringObject } from "@/util/type";
import { css } from "@emotion/react";
import { BounceDot, Spinner, Wave } from "basic-loading";

export default function Home() {
  return (
    <div css={css(pageStyle, { flexDirection: "column" })}>
      <Main />
      <Main2 />
      {/* <footer className={robotoBold.className}>BASIC LOADING</footer> */}
    </div>
  );
}

function Main() {
  return (
    <div css={css(mainStyle, { flexDirection: "column", textAlign: "center" })}>
      <div className={`title ${robotoBold.className}`}>
        Basic Loading Components for React
      </div>
      <div className="subTitle">
        BASIC LOADING is a library that provide loading UI components for React
        and Next.js. <br /> You can customize the option values to use it the
        way you want. Make effective loading page with BASIC LOADING!
      </div>
      <div className="box-container">
        <Box props={box}>
          <BounceDot option={dot} />
        </Box>
        <Box props={box}>
          <Spinner option={spinner} />
        </Box>
        <Box props={box}>
          <Wave option={wave} />
        </Box>
      </div>
    </div>
  );
}

function Main2() {
  return (
    <div css={css(mainStyle2)}>
      <Box props={box}>
        <BounceDot option={dot} />
      </Box>
      <Box props={box}>
        <BounceDot option={dot} />
      </Box>
      <Box props={box}>
        <Wave option={wave} />
      </Box>
    </div>
  );
}

const dot = {
  size: 12,
  color: mainColor,
};

const box = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "150px",
  height: "120px",
  margin: "10px 20px",
};

const spinner = {
  size: 45,
  bgColor: mainColor,
  barColor: subColor2,
  thickness: 7,
};

const wave = {
  height: 30,
  color: mainColor,
};

const pageStyle = {
  width: "100%",
  display: "flex",
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

const mainStyle = {
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "12px 0",
  padding: "20px",
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
      width: maxWidth,
      fontSize: fontSize.large3,
    },
  },
  "& .subTitle": {
    fontSize: fontSize.small,
    padding: "1rem",
    lineHeight: "2rem",
    [mq[0]]: {
      fontSize: fontSize.small,
    },
    [mq[2]]: {
      fontSize: fontSize.medium,
    },
  },
  "& .box-container": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // [mq[0]]: {
    //   fontSize: fontSize.small,
    // },
    // [mq[2]]: {
    //   fontSize: fontSize.medium,
    // },
  },
};

const mainStyle2 = {
  padding: "0 250px",
  width: "100%",
  height: "100vh",
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
      width: maxWidth,
      fontSize: fontSize.large3,
    },
  },
  "& .subTitle": {
    fontSize: fontSize.small,
    padding: "1rem",
    lineHeight: "2rem",
    [mq[0]]: {
      fontSize: fontSize.small,
    },
    [mq[2]]: {
      fontSize: fontSize.medium,
    },
  },
};
