export const shadow = "0 2px 4px #00000010, 0 1px 2px #00000010";

export const mainColor = "#0D689E";
export const subColor1 = "#84B4D4";
export const subColor2 = "#BAD5E8";
export const gray = "#F1F5F9";
export const gray2 = "#F8FAFc";

export const maxWidth = "1200px";
export const version = "2.0.1";

const breakpoints = [500, 900, 1200];
export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export const componentList: any = [
  {
    title: "BasicDot",
    option: [{ size: 12 }, { color: "#7c3aed" }],
    optionType: [
      {
        name: "size",
        type: "number",
        default: "12",
        unit: "none",
      },
      {
        name: "color",
        type: "string",
        default: "#7c3aed",
        unit: "none",
      },
    ],
  },
  {
    title: "BounceDot",
    option: [{ size: 12 }, { color: "#7c3aed" }],
    optionType: [
      {
        name: "size",
        type: "number",
        default: "12",
        unit: "none",
      },
      {
        name: "color",
        type: "string",
        default: "#7c3aed",
        unit: "none",
      },
    ],
  },
  {
    title: "Fade",
    option: [{ speed: 2 }],
    optionType: [
      {
        name: "speed",
        type: "number",
        default: "1.5",
        unit: "s",
      },
    ],
  },
  {
    title: "ProgressBar",
    option: [
      { width: 300 },
      { bgColor: "#ddd6fe" },
      { barColor: "#7c3aed" },
      { speed: 3 },
    ],
    optionType: [
      {
        name: "width",
        type: "number",
        default: "300",
        unit: "none",
      },
      {
        name: "bgColor",
        type: "string",
        default: "#ddd6fe",
        unit: "none",
      },
      {
        name: "barColor",
        type: "string",
        default: "#7c3aed",
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
    title: "Pulse",
    option: [{ size: 100 }, { bgColor: "#a78bfa" }],
    optionType: [
      {
        name: "size",
        type: "number",
        default: "100",
        unit: "none",
      },
      {
        name: "bgColor",
        type: "string",
        default: "#a78bfa",
        unit: "none",
      },
    ],
  },
  {
    title: "Skeleton",
    option: [
      { width: 100 },
      { height: 100 },
      { speed: 1.2 },
      { bgColor: `["#ddd6fe", "#c4b5fd"]` },
      { borderRadius: "20px" },
    ],
    optionType: [
      {
        name: "size",
        type: "number",
        default: "100",
        unit: "none",
      },
      {
        name: "bgColor",
        type: "string",
        default: "#a78bfa",
        unit: "none",
      },
    ],
  },
  {
    title: "Spinner",
    option: [
      { size: 50 },
      { bgColor: "#7c3aed" },
      { barColor: "#ddd6fe" },
      { thickness: 7 },
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
    title: "Wave",
    option: [{ height: 30 }, { color: "#7c3aed" }],
    optionType: [
      { name: "width", type: "string", default: "100px", unit: "none" },
      { name: "height", type: "string", default: "100px", unit: "none" },
    ],
  },
];
