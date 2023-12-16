// import { DotBasic, DotBounce, Fade } from "basic-loading";
import DotBasic from "../../sample/DotBasic";
import DotBounce from "../../sample/DotBounce";
import Fade from "../../sample/Fade";
import ProgressBar from "../../sample/ProgressBar";
import Pulse from "../../sample/Pulse";
import { SkeletonSample } from "../../sample/Skeleton";
import SpinnerBasic from "../../sample/SpinnerBasic";
import SpinnerDot from "../../sample/SpinnerDot";
import Wave from "../../sample/Wave";

interface PropsType {
  title: string;
}

export default function Sample({ title }: PropsType) {
  const option = {
    size: 12,
    color: "green",
  };

  if (title === "Skeleton") {
    return <SkeletonSample />;
  } else if (title === "DotBasic") {
    return <DotBasic />;
  } else if (title === "DotBounce") {
    return <DotBounce />;
  } else if (title === "ProgressBar") {
    return <ProgressBar />;
  } else if (title === "Fade") {
    return <Fade />;
  } else if (title === "SpinnerBasic") {
    return <SpinnerBasic />;
  } else if (title === "SpinnerCircle") {
    return <SpinnerDot />;
  } else if (title === "Pulse") {
    return <Pulse />;
  } else if (title === "Wave") {
    return <Wave />;
  } else {
    return <></>;
  }
}
