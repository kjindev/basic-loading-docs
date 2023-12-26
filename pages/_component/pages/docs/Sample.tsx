import { valueSate } from "@/pages/_state/state";
import { mainColor, subColor1, subColor2 } from "@/pages/_util/constant";
import {
  BasicDot,
  BounceDot,
  Fade,
  ProgressBar,
  Pulse,
  Skeleton,
  Spinner,
  Wave,
} from "basic-loading";

interface PropsType {
  title: string;
}

export default function Sample({ title }: PropsType) {
  const dot = {
    size: 12,
    color: mainColor,
  };

  const progressBar = {
    width: 300,
    bgColor: subColor2,
    barColor: mainColor,
  };

  const skeleton = {
    width: "100px",
    height: "100px",
    speed: 1.2,
    color: [subColor2, subColor1],
    borderRadius: "20px",
  };

  const spinner = {
    size: 50,
    bgColor: mainColor,
    barColor: subColor2,
    thickness: 7,
  };

  const pulse = {
    size: 100,
    color: subColor1,
  };

  const wave = {
    height: 30,
    color: mainColor,
  };

  if (title === "Skeleton") {
    return <Skeleton option={skeleton} />;
  } else if (title === "BasicDot") {
    return <BasicDot option={dot} />;
  } else if (title === "BounceDot") {
    return <BounceDot option={dot} />;
  } else if (title === "ProgressBar") {
    return <ProgressBar option={progressBar} />;
  } else if (title === "Fade") {
    return <Fade speed={1.2}>LOADING</Fade>;
  } else if (title === "Spinner") {
    return <Spinner option={spinner} />;
  } else if (title === "Pulse") {
    return <Pulse option={pulse} />;
  } else if (title === "Wave") {
    return <Wave option={wave} />;
  } else {
    return <></>;
  }
}
