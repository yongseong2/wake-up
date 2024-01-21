import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#FFDB00",
        emerald: "#4B9460",
        cream: "#FFF6CF",
        skyblue: "#A9F1F6",
        "pale-gold": "#FFE9A6",
        "gray-100": "#F6F6F6",
        "gray-200": "#E8E8E8",
        "gray-400": "#BDBDBD",
        "gray-600": "#666666",
      },
    },
  },
  plugins: [],
};
export default config;
