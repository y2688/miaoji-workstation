import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#FF85A2",
        "light-pink": "#FFB5C5",
        "bg-pink": "#FFF5F7",
        ribbon: "#FF2442",
        mint: "#B8E6C8",
        lavender: "#E8D5F5",
        "text-dark": "#4A4A4A",
        "text-gray": "#9E9E9E",
        "border-pink": "#FFD1DC",
        "kitty-yellow": "#FFD700",
        "kitty-white": "#FFFFFF",
      },
      borderRadius: {
        card: "20px",
        btn: "24px",
      },
      boxShadow: {
        pink: "0 4px 16px rgba(255,133,162,0.2)",
        kitty: "0 4px 20px rgba(255,130,162,0.25)",
        soft: "0 2px 8px rgba(255,130,162,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
