import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#FF85A2",
        "light-pink": "#FFD1DC",
        "bg-pink": "#FFF0F5",
        ribbon: "#FF3B6E",
        mint: "#B8E6C8",
        lavender: "#E8D5F5",
        "text-dark": "#4A4A4A",
        "text-gray": "#9E9E9E",
        "border-pink": "#FFD1DC",
      },
      borderRadius: {
        card: "20px",
        btn: "24px",
      },
      boxShadow: {
        pink: "0 4px 16px rgba(255,133,162,0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
