import { Noto_Sans_KR, Roboto } from "next/font/google";

export const notosans = Noto_Sans_KR({ subsets: ["latin"], weight: "400" });
export const notosans_bold = Noto_Sans_KR({
  subsets: ["latin"],
  weight: "700",
});

export const roboto = Roboto({ subsets: ["latin"], weight: "400" });
export const robotoBold = Roboto({
  subsets: ["latin"],
  weight: "700",
});
export const robotoExtraBold = Roboto({
  subsets: ["latin"],
  weight: "900",
});

export const fontSize = {
  extraSmall: 12,
  small: 14,
  medium: 18,
  large: 24,
  large2: 30,
  large3: 60,
};
