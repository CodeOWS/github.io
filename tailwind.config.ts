import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: "#040B14",
        color2: "#061419",
        color3: "#070A04",
        color4: "#0B1E1B",
        color5: "#0C1D2E",
        color6: "#123346",
        color7: "#140D0A",
        color8: "#173428",
        color9: "#242218",
        color10: "#315945",
        color11: "#37799A",
        color12: "#3890B0",
        color13: "#56914C",
        color14: "#6DA16F",
        color15: "#748081",
        color16: "#7EB7B7",
        color17: "#C8ECD5"
    },    
      backgroundImage: {
        "imag-dark": "url('/oscuro.jpeg')",
        "imag-ligt": "url('/claro.jpeg')",
      },
    },
  },
  plugins: [],
};
export default config;
