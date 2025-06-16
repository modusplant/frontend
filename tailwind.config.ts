import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,css}",
  ],
  theme: {
    screens: {
      desktop: "1025px",
      tablet: "799px",
    },
    extend: {
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
          error: "#D63945",
          warning: "#EFBE17",
          success: "#2CB67A",
        },
        background: "F6F6F6",
        neutral: {
          100: "#FFFFFF",
          200: "#FDFDFD",
          300: "#C2C2C2",
          400: "#A9A9A9",
          500: "#CCCCCC",
          600: "#666666",
          700: "#4B4B4B",
          800: "#3F3F3F",
          900: "#222222",
        },
      },
    },
  },
  plugins: [],
};
export default config;
