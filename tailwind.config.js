/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: "'Montserrat', sans-serif",
        pop: "'poppins', Poppins",
      },
      colors: {
        portbg: "#121212",
        gray1: "#1B1B1B",
        gray2: "#272727",
        main: "#F15A24",
      },
    },
  },
  plugins: [],
};
