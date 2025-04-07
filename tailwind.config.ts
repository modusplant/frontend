import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      desktop: "1280px",
      tablet: "768px",
    },
    extend: {
      fontSize: {
        h1: ["48px", { lineHeight: "58px", letterSpacing: "-2px" }],
        h2: ["36px", { lineHeight: "47px", letterSpacing: "-1.5px" }],
        h3: ["24px", { lineHeight: "34px", letterSpacing: "-1px" }],
        h4: ["20px", { lineHeight: "28px", letterSpacing: "-1px" }],
        paragraph_large: ["18px", { lineHeight: "29px", letterSpacing: "0px" }],
        paragraph_medium: ["16px", { lineHeight: "27px", letterSpacing: "0.5px" }],
        paragraph_small: ["14px", { lineHeight: "22px", letterSpacing: "0.5px" }],
        highlight: ["16px", { lineHeight: "27px", letterSpacing: "0.5px" }],
      },
      fontWeight: {
        h1: "700",
        h2: "700",
        h3: "600",
        h4: "500",
        paragraph: "400",
        highlight: "700",
      },
    },
  },
  plugins: [],
};
export default config;
