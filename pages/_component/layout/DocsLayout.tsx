import { ReactNode, useEffect, useState } from "react";
import SideMenu from "../pages/docs/SideMenu";
import { css } from "@emotion/react";
import { gray, gray2, mq } from "@/util/constant";
import { fontSize, notosans_bold } from "@/util/font";
import { useParams, usePathname } from "next/navigation";
import Image from "next/image";
import Expand from "../../_assets/expand_more.svg";
import Close from "../../_assets/expand_less.svg";
import Link from "next/link";

export default function DocsLayout({ children }: { children: ReactNode }) {
  const query = usePathname();
  const [pathname, setPathname] = useState("");
  const [isListVisible, setIsListVisible] = useState(false);

  const list = [
    "Spinner",
    "BounceDot",
    "BasicDot",
    "Skeleton",
    "ProgressBar",
    "Wave",
    "Pulse",
    "Fade",
  ];

  useEffect(() => {
    console.log(query);
    if (query) {
      const pathArray = query.split("/");
      const path = pathArray[pathArray.length - 1];
      setIsListVisible(false);
      if (path === "installation") {
        setPathname("Get Started");
      } else {
        setPathname(path);
      }
    }
  }, [query]);

  return (
    <div
      css={css(style, {
        "& .mobileMenu": {
          position: "fixed",
        },
        "& .mobileMenuList": {
          position: "fixed",
        },
      })}
    >
      <div className="container">
        <div
          className="mobileMenu"
          onClick={() => setIsListVisible(!isListVisible)}
        >
          <div className="text">▸ {pathname}</div>
          {!isListVisible ? (
            <Image src={Expand} alt="expand" id="expand" className="text" />
          ) : (
            <Image src={Close} alt="close" id="close" className="text" />
          )}
        </div>
        {isListVisible && (
          <div className="mobileMenuList">
            <div className={`menu-title ${notosans_bold.className}`}>
              Installation
            </div>
            <Link href="/docs/installation">
              <div className="menu-content">Get Started</div>
            </Link>
            <div
              style={{ textDecoration: "none" }}
              className={`menu-title ${notosans_bold.className}`}
            >
              Component
            </div>
            {list.sort().map((item, i) => (
              <Link key={i} href={`/docs/component/${item}`}>
                <div className="menu-content">{item}</div>
              </Link>
            ))}
          </div>
        )}
        <div className="side-menu">
          <SideMenu />
        </div>
        {children}
      </div>
    </div>
  );
}

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& .mobileMenu": {
    zIndex: "120",
    padding: "16px 0px",
    width: "100%",
    marginTop: "60px",
    backgroundColor: gray,
    fontSize: fontSize.small,
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [mq[1]]: {
      display: "none",
    },
  },
  "& .mobileMenuList": {
    zIndex: "100",
    padding: "130px 40px",
    fontSize: fontSize.small,
    backgroundColor: gray2,
    width: "100%",
    height: "100vh",
  },
  "& .menu-title": {
    fontSize: fontSize.small,
    margin: "0.75rem 0 0.3rem 0",
  },
  "& .text": {
    padding: "0 30px",
  },
  "& .menu-content": {
    padding: "0.3rem 0 0.3rem 0.75rem",
    textDecoration: "none",
    fontSize: fontSize.small,
    color: "black",
  },
  "& .container": {
    width: "1000px",
  },
  "& .side-menu": {
    display: "none",
    [mq[1]]: {
      display: "flex",
    },
  },
};
