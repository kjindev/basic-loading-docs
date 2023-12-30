import { Box } from "@/util/common";
import { mainColor, maxWidth, mq, subColor1, subColor2 } from "@/util/constant";
import { fontSize, robotoBold } from "@/util/font";
import { css } from "@emotion/react";
import { BounceDot, Pulse, Spinner, Wave } from "basic-loading";

export default function Main() {
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
        <Box props={box}>
          <Pulse option={pulse} />
        </Box>
      </div>
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
  backgroundColor: "white",
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

const pulse = {
  size: 50,
  color: subColor1,
};

const mainStyle = {
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "12px 0",
  padding: "10px",
  "& .title": {
    fontSize: fontSize.lg,
    padding: "1rem",
    letterSpacing: "-0.025em",
    [mq[0]]: {
      lineHeight: "3rem",
      fontSize: fontSize.xl,
    },
    [mq[2]]: {
      lineHeight: "4rem",
      width: maxWidth,
      fontSize: fontSize.xl2,
    },
  },
  "& .subTitle": {
    fontSize: fontSize.sm,
    padding: "1rem",
    lineHeight: "2rem",
    [mq[0]]: {
      fontSize: fontSize.sm,
    },
    [mq[2]]: {
      fontSize: fontSize.md,
    },
  },
  "& .box-container": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
