import Image from "next/image";
import Link from "next/link";
import Light from "../../_assets/light_mode.svg";
import Dark from "../../_assets/dark_mode.svg";
import Menu from "../../_assets/menu.svg";
import Close from "../../_assets/close.svg";

import { css } from "@emotion/react";

import { useEffect, useState } from "react";
import { mq, shadow, subColor2 } from "@/util/constant";
import { fontSize, notosans, notosans_bold } from "@/util/font";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { mobileMenuState } from "@/util/state";

export default function NavBar() {
  const [mode, setMode] = useState("light");
  const mobileMenu = useRecoilValue(mobileMenuState);
  const setMobileMenu = useSetRecoilState(mobileMenuState);

  const toggleMode = (event: any) => {
    const modeName = event.target.id;
    if (modeName === "light") {
      //code
    } else {
      // code
    }
  };

  const toggleMobileMenu = (event: any) => {
    const name = event.target.id;
    if (name === "menu") {
      setMobileMenu(true);
    } else if (name === "close") {
      setMobileMenu(false);
    }
  };
  return (
    <div css={css(style, { position: "fixed" })}>
      <div className={`${notosans.className} container`}>
        <div className="text-container">
          <div>
            <Link href="/" className={`title ${notosans_bold.className}`}>
              BASIC LOADING
            </Link>
          </div>
          {/* <div className="link-list">
            <Link href="/introduction" className="category">
              Introduction
            </Link>
            <Link href="/docs/installation" className="category">
              Docs
            </Link>
          </div> */}
        </div>
        <div className="link-list">
          <Link href="/introduction" className="category">
            Introduction
          </Link>
          <Link href="/docs/installation" className="category">
            Docs
          </Link>
        </div>
        <div onClick={toggleMobileMenu} className="mobile-menu">
          {mobileMenu ? (
            <Image src={Close} alt="close" id="close" />
          ) : (
            <Image src={Menu} alt="menu" id="menu" />
          )}
        </div>
      </div>
    </div>
  );
}

const style = {
  zIndex: "250",
  width: "100%",
  height: "60px",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: shadow,
  "& .container": {
    width: "1000px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 1.2rem",
    [mq[0]]: {
      padding: "0 2rem",
    },
    [mq[2]]: {
      padding: "0 0",
    },
  },
  "& .link-list": {
    display: "none",
    [mq[1]]: {
      display: "inline-block",
    },
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
  "& .mobile-menu": {
    display: "flex",
    cursor: "pointer",
    // padding: "0 14px",
    [mq[1]]: {
      display: "none",
    },
  },
};
