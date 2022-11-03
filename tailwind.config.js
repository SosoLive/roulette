/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      primary: "#101010",
      mainback: "#1D0070",
      white: "#fff",
      black: "#000",
      letter: "#B2B2B2",
      lightletter: "#989898",
      pink: "#DC345B",
      green: "#60BB44",
      yellow: "#EEEE00",
      lightYellow: "#FFFF00",
      darkBlue: "#222645",
      grey: "#151515",
    },
    screens: {
      sm: { max: "768px", min: "350px" },
      md: "768px",
      lg: "1080px",
      xl: { min: "1440px" },
    },
    extend: {},
  },
  plugins: [],
}
