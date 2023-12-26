import { mobileMenuState } from "@/util/state";
import { css } from "@emotion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

export default function MobileMenu() {
  const mobileMenu = useRecoilValue(mobileMenuState);
  const setMobileMenu = useSetRecoilState(mobileMenuState);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  const style = {
    display: mobileMenu ? "inline-block" : "none",
    zIndex: "100",
    width: "100%",
    height: "100vh",
    backgroundColor: "white",
    padding: "100px 0 0 50px",
    "& .category": { padding: "14px 0 0 14px" },
  };

  return (
    <div css={css(style, { position: "fixed" })}>
      <div className="category">
        <Link href="/introduction">Introduction</Link>
      </div>
      <div className="category">
        <Link href="/docs">Docs</Link>
      </div>
    </div>
  );
}
