import type { NextApiRequest, NextApiResponse } from "next";

interface OptionType {
  name: string;
  type: string;
  default: string;
  unit: string;
}
interface Data {
  title: string;
  option: any;
  optionType: OptionType[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const list: any = [
    {
      title: "SpinnerBasic",
      option: [
        { size: "150px" },
        { backgroundColor: "#e0e0e0" },
        { barColor: "#3b3b3b" },
        { speed: 1.5 },
      ],
      optionType: [
        {
          name: "size",
          type: "string",
          default: "150px",
          unit: "none",
        },
        {
          name: "backgroundColor",
          type: "string",
          default: "#e0e0e0",
          unit: "none",
        },
        {
          name: "barColor",
          type: "string",
          default: "#3b3b3b",
          unit: "none",
        },
        {
          name: "speed",
          type: "number",
          default: "3",
          unit: "s",
        },
      ],
    },
    {
      title: "Fade",
      option: [
        { content: "LOADING" },
        { speed: 2 },
        { textSize: "16px" },
        { textColor: "#000000" },
      ],
      optionType: [
        {
          name: "width",
          type: "string",
          default: "300px",
          unit: "none",
        },
        {
          name: "backgroundColor",
          type: "string",
          default: "#e0e0e0",
          unit: "none",
        },
        {
          name: "barColor",
          type: "string",
          default: "#3b3b3b",
          unit: "none",
        },
        {
          name: "speed",
          type: "number",
          default: "3",
          unit: "s",
        },
      ],
    },

    {
      title: "Skeleton",
      option: [
        { width: "100px" },
        { height: "100px" },
        { speed: 1 },
        { color: "#000000" },
        { borderRadius: "20px" },
      ],
      optionType: [
        { name: "width", type: "string", default: "100px", unit: "none" },
        { name: "height", type: "string", default: "100px", unit: "none" },
        { name: "speed", type: "number", default: "1", unit: "s" },
        { name: "color", type: "string", default: "#000000", unit: "none" },
        { name: "borderRadius", type: "string", default: "20px", unit: "none" },
      ],
    },
    {
      title: "ProgressBar",
      option: [
        { width: "300px" },
        { backgroundColor: "#e0e0e0" },
        { barColor: "#3b3b3b" },
        { speed: 3 },
      ],
      optionType: [
        {
          name: "width",
          type: "string",
          default: "300px",
          unit: "none",
        },
        {
          name: "backgroundColor",
          type: "string",
          default: "#e0e0e0",
          unit: "none",
        },
        {
          name: "barColor",
          type: "string",
          default: "#3b3b3b",
          unit: "none",
        },
        {
          name: "speed",
          type: "number",
          default: "3",
          unit: "s",
        },
      ],
    },
  ];
  res.status(200).json(list);
}
