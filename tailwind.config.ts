import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black: "#1b1b1b",
        navyBlue: "#132962",
      },
      screens: {
        "content-xs": { max: "389px" },
        "content-sm": { min: "390px", max: "819px" },
        "content-md": { min: "820px", max: "1023px" },
        "content-lg": { min: "1080px" },
        "content-xl": { min: "1440px" },
      },
    },
  },
  plugins: [],
};
export default config;
