/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    extend: {
      screens: {
        "2xl": "1536px"
      },
      backgroundImage: {
        galaxy: "url(./images/galaxy.gif)"
      },
      spacing: {
        giyu: "3.425rem"
      }
    },
  },
  plugins: [],
}

