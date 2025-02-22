/** @type {import('tailwindcss').Config} */
const fontFamily = require("./src/assets/font/fontFamily.json");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: fontFamily,
    extend: {
      colors: {
        primary: "#102C57",
        "natural-3": "#f5f5f5",
        "natural-4": "#f0f0f0",
        "natural-5": "#D9D9D9",
        "natural-6": "#BFBFBF",
        "natural-7": "#8C8C8C",
        "natural-8": "#595959",
        "natural-9": "#434343",
        "natural-10": "#262626",
        "dark-blue": "#002140",
        "deep-blue": "#013769",
        "deep-yellow": "#E8B745",
        "light-gray": "#EDEDED",
      },
    },
  },
  plugins: [],
};
