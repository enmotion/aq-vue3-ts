import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    // alias //---------
    // 当使用文件系统路径的别名时，请始终使用绝对路径。相对路径作别名值将按原样使用导致不会解析到文件系统路径中。
    alias: {
      'r@': resolve(__dirname, 'src') // 由于 Vite 本身已经用了 @ 去做模块导入工作，如果用 @ 别名当绝对路径去使用会有问题,通过多加一个 r 来规避 @ 冲突的问题。
    }
  },
  logLevel: 'info',// 'info' | 'warn' | 'error' | 'silent' 调整控制台输出的级别，默认为 'info'
  plugins: [vue()]
})
