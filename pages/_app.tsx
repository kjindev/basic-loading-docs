import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { notosans } from "./_util/font";
import NavBar from "./_component/pages/NavBar";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={notosans.className}>
      <RecoilRoot>
        <NavBar />
        <Component {...pageProps} />
      </RecoilRoot>
    </main>
  );
}
