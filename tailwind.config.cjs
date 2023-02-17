/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        laptop: {max: "920px"},
        tablet: {max: "860px"},
        phone: {max: "420px"},
      },
      colors: {
        headerBgColor: "#212437",
        primaryBgColor: "#23253A",
        skillSetBgColor: "#2B2E41",
        formsBgColor: "#282A41",

        secondaryColor: "#FF4B57",

        primaryTextColor: "#FFFFFF",
        secondaryTextColor: "#B0B0B0",
      },
      fontFamily: {
        Inconsolata: ["Inconsolata", "monospace"],
      },
    },
  },
  plugins: [],
};
