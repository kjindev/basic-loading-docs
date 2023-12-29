import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "./_component/pages/NavBar";
import { RecoilRoot } from "recoil";
import { roboto } from "@/util/font";
import MobileMenu from "./_component/pages/MobileMenu";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <RecoilRoot>
        <NavBar />
        <MobileMenu />
        <Component {...pageProps} />
      </RecoilRoot>
    </main>
  );
}
