import { fontSize } from "@/util/font";
import { mobileMenuState } from "@/util/state";
import { css } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Open from "../../../_assets/open.svg";

export default function MobileMenu() {
  const mobileMenu = useRecoilValue(mobileMenuState);
  const setMobileMenu = useSetRecoilState(mobileMenuState);

  const style = {
    display: mobileMenu ? "inline-block" : "none",
    zIndex: "200",
    width: "100%",
    height: "100vh",
    backgroundColor: "#f9fafb",
    padding: "90px 0 0 40px",
    "& .title": {
      fontSize: fontSize.md,
      fontWeight: 700,
      paddingBottom: "14px",
    },
    "& .category": {
      padding: "5px 0 5px 0",
      fontSize: fontSize.sm,
      display: "flex",
      alignItems: "center",
    },
  };

  return (
    <div css={css(style, { position: "fixed" })}>
      <div className="title">Menu</div>
      <div onClick={() => setMobileMenu(false)}>
        <div className="category">
          <Link href="/docs/installation"> Docs</Link>
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
    </div>
  );
}
