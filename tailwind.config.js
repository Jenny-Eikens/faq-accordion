/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        lightpink: "hsl(275, 100%, 97%)",
        graypurple: "hsl(292, 16%, 49%)",
        darkpurple: "hsl(292, 42%, 14%)",
        svgpink: " #AD28EB",
      },
      backgroundImage: {
        desktop: "url('/src/assets/images/background-pattern-desktop.svg')",
        mobile: "url('/src/assets/images/background-pattern-mobile.svg')",
      },
    },
  },
  plugins: [],
};
