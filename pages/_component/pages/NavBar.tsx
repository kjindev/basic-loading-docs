import Image from "next/image";
import Link from "next/link";
import Light from "../../_assets/light_mode.svg";
import Dark from "../../_assets/dark_mode.svg";

import { css } from "@emotion/react";
import { fontSize, notosans, notosans_bold } from "../../_util/font";
import { useState } from "react";
import { mainColor, shadow, subColor2 } from "@/pages/_util/constant";

export default function NavBar() {
  const [mode, setMode] = useState("light");
  const toggleMode = (event: any) => {
    const modeName = event.target.id;
    if (modeName === "light") {
      //code
    } else {
      // code
    }
    // document.documentElement.classList.add("dark");
    // document.documentElement.classList.remove("light");
    // localStorage.setItem("mode", "dark");
    // setMode("dark");
  };

  // const toggleLightMode = () => {
  //   document.documentElement.classList.add("light");
  //   document.documentElement.classList.remove("dark");
  //   localStorage.setItem("mode", "light");
  //   setMode("light");
  // };

  return (
    <div
      css={css({
        zIndex: "100",
        position: "fixed",
        width: "100%",
        height: "60px",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: shadow,
        "& .container": {
          width: "1200px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        },
        "& .title": {
          fontSize: fontSize.medium,
          marginRight: "1.2rem",
        },
        "& .category": {
          fontSize: fontSize.small,
          padding: "0 1.2rem",
        },
        "& .mode-btn": {
          width: "25px",
          height: "25px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        "& .mode-btn:hover": {
          cursor: "pointer",
        },
        "& .icon": {
          backgroundColor: subColor2,
          padding: 14 / 1.5,
          borderRadius: 28,
        },
      })}
    >
      <div className={`${notosans.className} container`}>
        <div style={{ textDecoration: "none" }}>
          <Link href="/" className={`title ${notosans_bold.className}`}>
            BASIC LOADING
          </Link>
          <span>
            <Link href="/introduction" className="category">
              Introduction
            </Link>
            <Link href="/docs" className="category">
              Docs
            </Link>
            {/* <Link href="/templates" className="category">
              Templates
            </Link> */}
          </span>
        </div>
        <div onClick={toggleMode} className="mode-btn">
          {mode === "light" ? (
            <Image src={Light} alt="mode" id="light" className="icon" />
          ) : (
            // <Image src={Light} alt="mode" id="light" />
            <Image src={Dark} alt="mode" id="dark" className="icon" />
          )}
        </div>
      </div>
    </div>
  );
}
