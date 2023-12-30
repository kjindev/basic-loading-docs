// /** @jsxImportSource @emotion/react */
import { Box } from "@/util/common";
import Customizable from "./_assets/extension.svg";
import { mainColor, maxWidth, mq, subColor1, subColor2 } from "@/util/constant";
import { fontSize, robotoBold } from "@/util/font";
import { css } from "@emotion/react";
import { BounceDot, Pulse, Spinner, Wave } from "basic-loading";

export default function Home() {
  return (
    <div css={css(pageStyle, { flexDirection: "column" })}>
      <Main />
      <Main2 />
      <footer>BASIC LOADING</footer>
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
        <Box props={box}>
          <Pulse option={pulse} />
        </Box>
      </div>
    </div>
  );
}

function Main2() {
  return (
    <div
      css={css(mainStyle2, {
        flexDirection: "column",
        "& .box": {
          flexDirection: "column",
        },
      })}
    >
      <div className={`${robotoBold.className} script`}>
        What are the features of BASIC LOADING ?
      </div>
      <div className="box-list">
        <Box props={scriptBox}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100"
            viewBox="0 -960 960 960"
            width="100"
            fill={mainColor}
          >
            <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
          </svg>
          <div className={`box-title ${robotoBold.className}`}>Simple</div>
          <div className="box-content">
            Provides simple way for making loading pages, and
          </div>
        </Box>
        <Box props={scriptBox}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100"
            viewBox="0 -960 960 960"
            width="100"
            fill={mainColor}
          >
            <path d="M352-120H200q-33 0-56.5-23.5T120-200v-152q48 0 84-30.5t36-77.5q0-47-36-77.5T120-568v-152q0-33 23.5-56.5T200-800h160q0-42 29-71t71-29q42 0 71 29t29 71h160q33 0 56.5 23.5T800-720v160q42 0 71 29t29 71q0 42-29 71t-71 29v160q0 33-23.5 56.5T720-120H568q0-50-31.5-85T460-240q-45 0-76.5 35T352-120Zm-152-80h85q24-66 77-93t98-27q45 0 98 27t77 93h85v-240h80q8 0 14-6t6-14q0-8-6-14t-14-6h-80v-240H480v-80q0-8-6-14t-14-6q-8 0-14 6t-6 14v80H200v88q54 20 87 67t33 105q0 57-33 104t-87 68v88Zm260-260Z" />
          </svg>
          <div className={`box-title ${robotoBold.className}`}>
            Customizable
          </div>
          <div className="box-content">content</div>
        </Box>
        <Box props={scriptBox}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100"
            viewBox="0 -960 960 960"
            width="100"
            fill={mainColor}
          >
            <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z" />
          </svg>
          <div className={`box-title ${robotoBold.className}`}>Effective</div>
          <div className="box-content">content</div>
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

const scriptBox = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  width: "300px",
  height: "270px",
  margin: "0px 25px",
  padding: "20px 15px",
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

const pageStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& footer": {
    width: "100%",
    height: "200px",
    backgroundColor: "#00000010",
    fontSize: "1.2rem",
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
  padding: "10px",
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
  width: "100%",
  height: "100vh",
  display: "flex",

  justifyContent: "center",
  alignItems: "center",
  margin: "12px 0",
  fontSize: fontSize.small,
  "& .script": {
    fontSize: fontSize.large2,
    margin: "45px",
  },
  "& .box-title": {
    fontSize: fontSize.large,
    margin: "12px",
  },
  "& .box-content": {
    padding: "0 10px",
    lineHeight: "1.5rem",
  },
  "& .box": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "300px",
    height: "270px",
    margin: "0px 25px",
    padding: "20px 15px",
  },
  "& .box-list": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
