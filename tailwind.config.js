/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors:{
      danger:"#F0F",
      blue:colors.blue
    },
    extend: {},
  },
  plugins: [],
}
