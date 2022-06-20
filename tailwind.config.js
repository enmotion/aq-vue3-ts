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
      var unit = 5;
      for(var i=0;i<1200;i+=unit){     
        obj[i]=i+'px';
        unit = Math.ceil((i+1)/100) * 5 || 5;
        // console.log(i)
      }
      // console.log(obj)
      return obj
    }(),
    extend: {},
  },
  plugins: [],
}
