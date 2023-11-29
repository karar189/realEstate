/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "360px",
      ss: "390px",
      sm: "768px",
      md: "1200px",
      lg: "1500px",
      xl: "1700px",
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
