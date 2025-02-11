import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-50": "#E9EBF8",
        "primary-100": "#C8E3E5",
        "primary-200": "#E9EBF8",
        "primary-300": "#89C2C7",
        "primary-400": "#72B6BD",
        "primary-500": "#4FA4AC",
        "primary-600": "#48959D",
        "primary-700": "#38747A",
        "primary-800": "#2B5A5F",
        "primary-900": "#214548",

        "dark-100": "#0f1624",
        "cyan-100": "#B2E6ED",
      },
    },
  },
  plugins: [],
} satisfies Config;
