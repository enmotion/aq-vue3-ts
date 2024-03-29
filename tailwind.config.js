/** @type {import('tailwindcss').Config} */
// const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors');
const tailWindUtils = require("./tailwind.lib/tailwind.util");

module.exports = {
  important: '#bootstrap-tw',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    flexGrow:tailWindUtils.generateStepUint(12),
    flexShrink:tailWindUtils.generateStepUint(12),
    colors:{
      m:process.env.VITE_APP_THEME, // 主配色
      black:'#000000',
      white:'#FFFFFF',
      dark:tailWindUtils.generateAlphaColorStep('#000000',48),
      light:tailWindUtils.generateAlphaColorStep('#FFFFFF',48),
      gray:colors.gray,
      d:tailWindUtils.generateAlphaColorStep('#ff552f',10), // 危险色
      s:tailWindUtils.generateAlphaColorStep('#95C01A',10), // 安全色
      w:tailWindUtils.generateAlphaColorStep('#F2C849',10), // 警告色
      i:tailWindUtils.generateAlphaColorStep('#FF0000',10), // 信息色
      p:tailWindUtils.generateAlphaColorStep('#3366AE',10), // 主辅色
    },
    spacing:tailWindUtils.generateSpacing(5,100,1200),
    extend: {
      xpcc:'#F0F0F0'
    },
  },
  plugins:[],
}
