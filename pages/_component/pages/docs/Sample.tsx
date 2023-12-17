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
    color: "green",
  };

  const progressBar = {
    width: 300,
    bgColor: "black",
    barColor: "blue",
  };

  const skeleton = {
    width: "200px",
    height: "200px",
    speed: 1.2,
    color: ["black", "blue"],
    borderRadius: "20px",
  };

  const spinner = {
    size: 20,
    bgColor: "black",
    barColor: "blue",
    thickness: 5,
  };

  const pulse = {
    size: 20,
    color: "black",
  };

  const wave = {
    height: 30,
    color: "blue",
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
    return <Fade speed={1.2}>Loading</Fade>;
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
