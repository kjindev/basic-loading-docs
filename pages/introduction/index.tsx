import { css } from "@emotion/react";

export default function Introduction() {
  return <div css={css(style)}>Intro</div>;
}

const style = {
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
