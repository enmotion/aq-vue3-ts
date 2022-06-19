/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors:{
      danger:"#F0F",
      bad:"#444",
      blue:colors.blue
    },
    spacing:function(){
      var obj = {}
      for(var i =1;i<1000;i++){
        obj[i]=5*i+'px'
      }
      return obj
    }(),
    extend: {},
  },
  plugins: [],
}
