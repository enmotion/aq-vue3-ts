/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
function ganerateAlphaStepColor(key='a',color='#FF0000',step=10){
  var obj={}
  for(let i=1 ; i <= step ; i++){
    obj[key+''+i] = color + (Math.max(Math.round(256/step*i-1),0).toString(16))
  }
  return obj
}
module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors:{
      d:ganerateAlphaStepColor('a','#D92211',10),
      s:ganerateAlphaStepColor('a','#59D986',10),
      w:ganerateAlphaStepColor('a','#F2C849',10),
      i:ganerateAlphaStepColor('a','#FF0000',10),
      p:ganerateAlphaStepColor('a','#2C6CBF',10),
      black:ganerateAlphaStepColor('a','#000000',24),
      white:ganerateAlphaStepColor('a','#FFFFFF',24),
      blue:colors.blue
    },
    spacing:function(baseStep=5,domain=100,step=0,maxstep=100){
      var obj = {}
      for(var i = 0 ; i <= 1200 ; i += step){
        var step = Math.min(baseStep * Math.pow(2,Math.floor(i/domain)),maxstep);
        obj[i.toString()] = i + 'px';
      }
      return obj
    }(),
    extend: {},
  },
  plugins: [],
}
