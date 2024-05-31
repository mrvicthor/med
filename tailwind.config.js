/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-green-gradient":
          "linear-gradient(to bottom, #40A433 0%, #40A433 100%)",
      },
      colors: {
        primary: "#2A8420",
        secondary: "#F9DEDC",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "class",
};
