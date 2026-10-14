import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { crust: "#f58227", ink: "#181817", paper: "#f6f4ed" },
      fontFamily: {
        condensed: ["var(--font-oswald)", "Arial Narrow", "sans-serif"],
        body: ["var(--font-inter)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
