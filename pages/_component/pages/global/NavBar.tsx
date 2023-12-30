import Image from "next/image";
import Link from "next/link";

import Menu from "../../../_assets/menu.svg";
import Close from "../../../_assets/close.svg";
import Open from "../../../_assets/open.svg";

import { css } from "@emotion/react";

import { maxWidth, mq, shadow, subColor2, version } from "@/util/constant";
import { fontSize, roboto, robotoBold } from "@/util/font";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { mobileMenuState } from "@/util/state";

export default function NavBar() {
  const mobileMenu = useRecoilValue(mobileMenuState);
  const setMobileMenu = useSetRecoilState(mobileMenuState);

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
      <div className={`${roboto.className} container`}>
        <div className="title-container">
          <Link href="/" className={`title ${robotoBold.className}`}>
            BASIC LOADING
          </Link>
          <div className="version">v {version}</div>
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
          {/* <div>
            <Link href="/introduction" className="category">
              Introduction
            </Link>
          </div> */}
          <div>
            <Link href="/docs/installation" className="category">
              Docs
            </Link>
          </div>
          <div>
            <a
              href="https://github.com/kjindev/basic-loading"
              className="category"
              target="_blank"
            >
              Github <Image src={Open} alt="open" id="open" />
            </a>
          </div>
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
    width: maxWidth,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    [mq[0]]: {
      paddingLeft: "20px",
    },
    [mq[2]]: {
      padding: "0",
      paddingLeft: "0",
    },
  },
  "& .title-container": {
    display: "flex",
    alignItems: "center",
    "& .version": {
      fontSize: fontSize.xs,
      backgroundColor: "#00000018",
      padding: "4px 8px",
      borderRadius: "18px",
    },
  },
  "& .link-list": {
    display: "none",
    [mq[1]]: {
      // display: "inline-block",
      display: "flex",
      alignItems: "center",
    },
  },
  "& .title": {
    fontSize: fontSize.logo,
    marginRight: "12px",
  },
  "& .category": {
    fontSize: fontSize.sm,
    padding: "0 1.5rem",
    display: "flex",
    alignItems: "center",
  },
  "& #open": {
    margin: "0.3rem",
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
