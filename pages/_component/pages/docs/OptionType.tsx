import { componentList, shadow } from "@/util/constant";
import { fontSize } from "@/util/font";
import { css } from "@emotion/react";

interface PropsType {
  title: string;
}

export default function OptionType({ title }: PropsType) {
  const targetList: any = componentList.find(
    (item: any) => item.title === title
  );

  return (
    <div css={css(style, { textAlign: "center" })}>
      {targetList ? (
        targetList.optionType.map((item: any, index: any) => (
          <div key={index} className="option-container">
            <span>{item.name}</span>
            <span>{item.type}</span>
            <span>{item.required}</span>
            {/* <span>
              {item.type === "string" ? `"${item.default}"` : item.default}
            </span> */}
            <span>{item.defaultValue}</span>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
}

const style = {
  fontSize: fontSize.sm,
  boxShadow: shadow,
  padding: "0.25rem 0",
  borderRadius: "0.75rem",
  backgroundColor: "white",
  "& .option-container": {
    display: "flex",
    width: "100%",
    margin: "1rem 0",
  },
  "& span": {
    width: "25%",
    margin: "0.25rem 0",
    padding: "0.25rem 0",
  },
};
