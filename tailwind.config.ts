import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkgreen: "#112D35",
        bggreen: "#B4E4F2",
        lightgreen: "#1F94AA",
        lightText: "#A0ABAE",
        lightbg: "#E1F4FA",
        slidebg: "#F7F7FE",
        slidetext: "#3F555D",
        dimText: "#C4C4C4",
        bannerbg: "#C4F2FF",
      },
      borderRadius: {
        "2.5xl": "20px",
        "5xl": "40px",
      },
      fontSize: {
        // base: '0.938rem',
      },
    },
  },
  plugins: [],
};
export default config;
