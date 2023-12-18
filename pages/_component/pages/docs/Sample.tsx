import { valueSate } from "@/pages/_state/state";
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
import { useRecoilValue } from "recoil";

interface PropsType {
  title: string;
}

export default function Sample({ title }: PropsType) {
  const dot = {
    size: 12,
    color: "#7c3aed",
  };

  const progressBar = {
    width: 300,
    bgColor: "#ddd6fe",
    barColor: "#7c3aed",
  };

  const skeleton = {
    width: "100px",
    height: "100px",
    speed: 1.2,
    color: ["#ddd6fe", "#c4b5fd"],
    borderRadius: "20px",
  };

  const spinner = {
    size: 50,
    bgColor: "#7c3aed",
    barColor: "#ddd6fe",
    thickness: 7,
  };

  const pulse = {
    size: 100,
    color: "#a78bfa",
  };

  const wave = {
    height: 30,
    color: "#7c3aed",
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
