import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          deepest: "#0D1B6E",
          base:    "#1a2e95",
          light:   "#2438B8",
          footer:  "#091040",
        },
        lime: {
          DEFAULT: "#39FF14",
          muted:   "#2ECC10",
        },
      },
      fontFamily: {
        display: ["'Great Vibes'", "cursive"],
        heading: ["'Anton'", "sans-serif"],
        body:    ["'Poppins'", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "8px",
        lg: "12px",
        xl: "16px",
      },
    },
  },
  plugins: [],
};
export default config;
