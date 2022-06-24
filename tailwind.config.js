/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
function generateAlphaColorStep(color='#FF0000',step=10){
  var obj = {};
  for(let i=1 ; i <= step ; i++){ obj[i] = color + (Math.max(Math.round(256/step*i-1),0).toString(16)).toUpperCase() };
  return obj;
}
function generateSpacing(minstep=5,maxstep=100,limit=1200){
  var obj = {}
  var step = 0;
  for(var i = 0 ; i <= limit ; i += step){
    var step = Math.min(minstep * Math.pow(2,Math.floor(i/maxstep)),maxstep);
    obj[i.toString()] = i + 'px';
  }
  return obj
}
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors:{
      m:process.env.VITE_APP_THEME, // 主配色
      black:'#000000',
      white:'#FFFFFF',
      dark:generateAlphaColorStep('#000000',24),
      light:generateAlphaColorStep('#FFFFFF',24),
      d:generateAlphaColorStep('#D92211',10), // 危险色
      s:generateAlphaColorStep('#59D986',10), // 安全色
      w:generateAlphaColorStep('#F2C849',10), // 警告色
      i:generateAlphaColorStep('#FF0000',10), // 信息色
      p:generateAlphaColorStep('#2C6CBF',10), // 辅助色
    },
    spacing:generateSpacing(5,100,1200),
    extend: {
      xpcc:'#F0F0F0'
    },
  },
  plugins:[],
}
