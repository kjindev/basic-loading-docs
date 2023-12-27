import { Noto_Sans_KR } from "next/font/google";

export const notosans = Noto_Sans_KR({ subsets: ["latin"], weight: "400" });
export const notosans_bold = Noto_Sans_KR({
  subsets: ["latin"],
  weight: "700",
});

export const fontSize = {
  extraSmall: 12,
  small: 14,
  medium: 18,
  large: 24,
  large2: 30,
  large3: 60,
};
