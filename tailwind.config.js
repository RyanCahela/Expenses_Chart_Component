const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "card-white": "#FFFBF6",
      cream: "#F8E9DD",
      "medium-brown": "#92857A",
      "dark-brown": "#382314",
      cyan: "#76B5BC",
      "light-cyan": "#B4E0E5",
      white: colors.white,
      red: "#EC755D",
      "light-red": "#FF9B86",
    },
    fontFamily: {
      "DM-Sans": ['"DM Sans"', "sans-serif"],
    },
  },
  plugins: [],
};
