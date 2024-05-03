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
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
      spacing: {
        "120-full": "120%",
        in: "inherit",
      },
      boxShadow: {
        innerOn: "inset 0 0 0 2px #5B89FF",
        innerOff: "inset 0 0 0 2px #eaeaea",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black: "#18181A",
        navyBlue: "#132962",
        nangmanBlue: "#234098",
        FluorescentBlue: "#0efcfe",
      },
      screens: {
        "content-xs": { max: "389px" },
        "content-sm": { min: "390px", max: "819px" },
        mobile: { max: "819px" },
        "content-md-xs": { max: "1079px" },
        "content-md": { min: "820px", max: "1079px" },
        "content-lg": { min: "1080px" },
        "content-xl": { min: "1440px" },
      },
    },
  },
  plugins: [],
};
export default config;
