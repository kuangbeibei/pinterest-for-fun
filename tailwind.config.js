/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '@media screen (min-width: 10px) and (max-width: 345px)'
      },
      colors: {
        'pinterest': '#30797a',
        'pinterest-light': '#3da7a8',
        'pinterest-aside': '#fff',
        'pinterest-placeholder': '#a7c1c2',
      }
    },
  },
  plugins: [],
}
