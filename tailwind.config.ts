import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B1B1B",
        secondary: "#dc143c",
        tertiary: "#202020",
        quartary: "#FF00E6",
        quintary: "#4800FF",
        textdark: "#121212",
        textlight: "#FDFFFC",
        blue: "#0471A6",
        instagra: "#FF00E6",
        roxo: "#531C",
        white: "#EAEAEA",
        slate: {
          10: "#f1f3f4",
        },
        gary: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
