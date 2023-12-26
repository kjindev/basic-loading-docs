import React, { ReactNode } from "react";
import SideMenu from "../pages/docs/SideMenu";
import { css } from "@emotion/react";
import { AppProps } from "next/app";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    // <div
    //   css={css({
    //     display: "flex",
    //     // justifyContent: "center",
    //     alignItems: "center",
    //     "& .container": {
    //       width: "1200px",
    //     },
    //   })}
    //   className="box"
    // >
    //   <div className="container">
    //     <SideMenu />
    //     <div>{children}</div>
    //     {/* <footer className="pl-[270px]">
    //           <div
    //             className={`w-full h-[100px] text-lg m-8 px-10 py-8 flex items-center border-t dark:border-t-slate-500`}
    //           >
    //             BASIC LOADING
    //           </div>
    //         </footer> */}
    //   </div>
    // </div>
    <div
      css={css({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& .container": {
          width: "1200px",
        },
      })}
    >
      <div className="container">
        <SideMenu />
        {children}
      </div>
    </div>
  );
}
