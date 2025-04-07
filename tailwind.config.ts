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
      colors: {
        primary: {
          100: "#D0EFE1",
          200: "#A1DFC4",
          300: "#72CEA6",
          400: "#43BE89",
          500: "#2CB67A",
        },
        secondary: {
          100: "#CCA18C",
          200: "#C28E75",
          300: "#B77B5E",
          400: "#AD6847",
          500: "#A35530",
        },
        accent: {
          100: "#1F5C41",
          200: "#1C4A36",
          300: "#19382B",
          400: "#17261F",
          500: "#141414",
        },
        interaction: {
          error: "#dd4258",
          warning: "#efbe17",
          succes: "#72c83b",
        },
        background: "#f6f6f6",
        neutral: {
          100: "#ffffff",
          200: "#fdfdfd",
          300: "#f3f3f3",
          400: "#dedede",
          500: "#cccccc",
          600: "#999999",
          700: "#666666",
          800: "#3f3f3f",
          900: "#222222",
        },
      },
    },
  },
  plugins: [],
};
export default config;
