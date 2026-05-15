import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        burgundy: "var(--color-burgundy)",
        "burgundy-deep": "var(--color-burgundy-deep)",
        "burgundy-soft": "var(--color-burgundy-soft)",
        ink: "var(--color-ink)",
        graphite: "var(--color-graphite)",
        slate: "var(--color-slate)",
        bone: "var(--color-bone)",
        paper: "var(--color-paper)",
        hairline: "var(--color-hairline)"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"]
      },
      boxShadow: {
        hairline: "0 1px 0 var(--color-hairline)"
      }
    }
  },
  plugins: []
};

export default config;
