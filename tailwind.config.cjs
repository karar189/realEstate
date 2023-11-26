/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        white1: "#D4ECDE",
        blue1: "#345A63",
        green1: "#152E35",
        blue2: "#102030",
        blue3: "#2593A1",
        yellow1: "#2593A1",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "360px",
      ss: "390px",
      sm: "768px",
      md: "1300px",
      lg: "1500px",
      xl: "1700px",
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
