/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ["Josefin Sans", "regular"],
    },
    screens: {
      md: { max: "1140px" },
    },
  },
  plugins: [],
};
