/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "sm": "375px",
      },
      backgroundImage: {
        "header-desktop": "url('./images/bg-header-desktop.png')",
        "header-mobile": "url('./images/bg-header-mobile.png')"
      }
    },
  },
  plugins: [],
}

