/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "Strong-Cyan": "hsl(171, 66%, 44%)",
        "Light-Blue": "hsl(233, 100%, 69%)"
      },
      fontFamily: {
        'Bai-Jamjuree': ['"Bai Jamjuree"', 'sans-serif'],
      },
      screens: {
        "sm": "375px",
      },
      spacing: {
        "375": "23.44rem",
        "1440": "90rem",
      },
      backgroundImage: {
        "header-desktop": "url('./images/bg-header-desktop.png')",
        "header-mobile": "url('./images/bg-header-mobile.png')"
      }
    },
  },
  plugins: [],
}

