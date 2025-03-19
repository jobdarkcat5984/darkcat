/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        body:['Oswald']
      },
      colors: {
        primary: "18206F",
        secondary: {
        100: "17255A",
        200: "5F00BA",
        }
    },
  },
  plugins: [],
}
}
