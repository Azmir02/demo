/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Quart: ["Quart"],
        JustSans: ["JUSTSans"],
        JustSansExBold: ["JUSTSansExBold"],
      },
    },
    colors: {
      white: "var(--nastyhog-white-color)",
      primaryColor: "var(--nastyhog-primary-color)",
    },
    container: {
      center: true,
    },
    screens: {
      xs: "320px",

      sm: "576px",

      md: "768px",

      lg: "992px",

      xl: "1200px",

      "2xl": "1400px",

      "3xl": "1620px",

      "4xl": "1700px",
    },
  },
  plugins: [],
};
