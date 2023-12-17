import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { css } from "@emotion/react";
import { roboto_bold } from "../../../_util/font";

export default function SideMenu() {
  //   const { name } = useParams();
  //   const pathname = usePathname();

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
    <div
      css={css({
        position: "fixed",
        paddingTop: "3.5rem",
        backgroundColor: "white",
        width: "240px",
        height: "100vh",
        boxShadow:
          " 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);",
        "& .sideMenu-container": {
          padding: "1rem 1.5rem",
        },
        "& .sideMenu-title": {
          margin: "0.875rem 0 0.5rem 0",
        },
        "& .sideMenu-content": {
          padding: "0.5rem 0 0.5rem 0.75rem",
          textDecoration: "none",
          fontSize: "0.875rem",
          color: "black",
        },
        "& .sideMenu-content:hover": {
          color: "#7c3aed",
        },
      })}
    >
      <div className="sideMenu-container">
        <div className={`sideMenu-title ${roboto_bold.className}`}>
          Installation
        </div>
        <Link href="/docs">
          <div
            className="sideMenu-content"
            // className={`content ${
            //   pathname === "/docs" ? "text-indigo-500" : "hover:text-indigo-500"
            // }`}
          >
            Get Started
          </div>
        </Link>
        <div
          style={{ textDecoration: "none" }}
          className={`sideMenu-title ${roboto_bold.className}`}
        >
          Component
        </div>
        {list.sort().map((item, i) => (
          <Link key={i} href={`/docs/component/${item}`}>
            <div
              className="sideMenu-content"
              // className={`content ${
              //   item === name ? "text-indigo-500" : "hover:text-indigo-500"
              // }`}
            >
              {item}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
