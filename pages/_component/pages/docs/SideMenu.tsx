import Link from "next/link";
import { css } from "@emotion/react";
import { mainColor, shadow } from "@/util/constant";
import { fontSize, robotoBold } from "@/util/font";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function SideMenu() {
  const query = usePathname();
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    if (query) {
      const pathArray = query.split("/");
      const path = pathArray[pathArray.length - 1];
      setPathname(path);
    }
  }, [query]);

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

  return (
    <div css={css(style, { position: "fixed" })}>
      <div className="sideMenu-container">
        <div className={`sideMenu-title ${robotoBold.className}`}>
          Installation
        </div>
        <Link href="/docs/installation">
          <div
            className={
              pathname === "installation"
                ? "sideMenu-content-colored"
                : "sideMenu-content"
            }
          >
            Get Started
          </div>
        </Link>
        <div
          style={{ textDecoration: "none" }}
          className={`sideMenu-title ${robotoBold.className}`}
        >
          Component
        </div>
        {list.sort().map((item, i) => (
          <Link key={i} href={`/docs/component/${item}`}>
            <div
              className={
                pathname === item
                  ? "sideMenu-content-colored"
                  : "sideMenu-content"
              }
            >
              {item}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

const style = {
  paddingTop: "3.5rem",
  backgroundColor: "white",
  width: "240px",
  height: "100vh",
  boxShadow: shadow,
  "& .sideMenu-container": {
    padding: "1rem 1.5rem",
  },
  "& .sideMenu-title": {
    fontSize: fontSize.sm,
    margin: "0.875rem 0 0.5rem 0",
  },
  "& .sideMenu-content": {
    padding: "0.5rem 0 0.5rem 0.75rem",
    textDecoration: "none",
    fontSize: fontSize.sm,
    color: "black",
  },
  "& .sideMenu-content-colored": {
    padding: "0.5rem 0 0.5rem 0.75rem",
    textDecoration: "none",
    fontSize: fontSize.sm,
    color: mainColor,
  },
  "& .sideMenu-content:hover": {
    color: mainColor,
  },
};
