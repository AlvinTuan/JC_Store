/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Rubik", "sans-serif"],
      },
      colors: {
        secondary: "#6dc4b4",
        activeColor: "#090909",
        unActiveColor: "#8a8a8a",
      },
    },
  },
  plugins: [],
};
