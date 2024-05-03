/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#2A8420",
        secondary: "#F9DEDC",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "class",
};
