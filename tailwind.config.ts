import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        spotlight: {
          "0%": { opacity: "0", transform: "translate(-10%, -10%) scale(0.8)" },
          "100%": { opacity: "1", transform: "translate(0, 0) scale(1)" },
        },
      },
      animation: {
        spotlight: "spotlight 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
