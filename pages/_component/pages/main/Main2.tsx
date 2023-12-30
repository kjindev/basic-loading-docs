import { Box } from "@/util/common";
import { mainColor, mq } from "@/util/constant";
import { fontSize, robotoBold } from "@/util/font";
import { css } from "@emotion/react";

export default function Main2() {
  return (
    <div
      css={css(mainStyle2, {
        flexDirection: "column",
        "& .box": {
          flexDirection: "column",
        },
        "& .script": {
          textAlign: "center",
        },
        "& .box-list": {
          flexWrap: "wrap",
        },
      })}
    >
      <div className={`${robotoBold.className} script`}>
        What are the features of BASIC LOADING?
      </div>
      <div className="box-list">
        <Box props={scriptBox}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="70"
            viewBox="0 -960 960 960"
            width="70"
            fill={mainColor}
          >
            <path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-40-343 237-137-237-137-237 137 237 137ZM160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11L160-252Zm320-228Z" />
          </svg>
          <div className={`box-title ${robotoBold.className}`}>Simple</div>
          <div className="box-content">
            Import loading UI in component, without having to write a separate
            css.
          </div>
        </Box>
        <Box props={scriptBox}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="70"
            viewBox="0 -960 960 960"
            width="70"
            fill={mainColor}
          >
            <path d="M352-120H200q-33 0-56.5-23.5T120-200v-152q48 0 84-30.5t36-77.5q0-47-36-77.5T120-568v-152q0-33 23.5-56.5T200-800h160q0-42 29-71t71-29q42 0 71 29t29 71h160q33 0 56.5 23.5T800-720v160q42 0 71 29t29 71q0 42-29 71t-71 29v160q0 33-23.5 56.5T720-120H568q0-50-31.5-85T460-240q-45 0-76.5 35T352-120Zm-152-80h85q24-66 77-93t98-27q45 0 98 27t77 93h85v-240h80q8 0 14-6t6-14q0-8-6-14t-14-6h-80v-240H480v-80q0-8-6-14t-14-6q-8 0-14 6t-6 14v80H200v88q54 20 87 67t33 105q0 57-33 104t-87 68v88Zm260-260Z" />
          </svg>
          <div className={`box-title ${robotoBold.className}`}>
            Customizable
          </div>
          <div className="box-content">
            You can change the options of components as you want, like size,
            color, speed, etc.
          </div>
        </Box>
        <Box props={scriptBox}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="70"
            viewBox="0 -960 960 960"
            width="70"
            fill={mainColor}
          >
            <path d="m620-284 56-56q6-6 6-14t-6-14L540-505q4-11 6-22t2-25q0-57-40.5-97.5T410-690q-17 0-34 4.5T343-673l94 94-56 56-94-94q-8 16-12.5 33t-4.5 34q0 57 40.5 97.5T408-412q13 0 24.5-2t22.5-6l137 136q6 6 14 6t14-6ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
          <div className={`box-title ${robotoBold.className}`}>Effective</div>
          <div className="box-content">
            You do not have to care about the css, so let you focus on the core
            code.
          </div>
        </Box>
      </div>
    </div>
  );
}

const scriptBox = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  width: "300px",
  // height: "200px",
  margin: "25px",
  padding: "25px 15px",
};

const mainStyle2 = {
  width: "100%",
  padding: "150px 0",
  display: "flex",
  // paddingBottom: "50px",
  justifyContent: "center",
  alignItems: "center",
  // margin: "12px 0",
  fontSize: fontSize.sm,
  [mq[0]]: {
    height: "100vh",
    padding: "0",
  },
  "& .script": {
    fontSize: fontSize.xl,
    marginBottom: "45px",
  },
  "& .box-title": {
    fontSize: fontSize.lg,
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
    width: "270px",
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
