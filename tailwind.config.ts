import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0 0px 5px rgba(255, 255, 255, 0.5)",
        "4xl": ["0 35px 35px rgba(0, 0, 0, 0.25)", "0 45px 65px rgba(0, 0, 0, 0.15)"],
      },
      colors: {
        background: "#0E0E0E",
        passiveText: "#5c5c5c",
        bingBG: "#7DFF86",
        fdrBG: "#FF7D7D",
      },
    },
  },
  plugins: [],
} satisfies Config;
