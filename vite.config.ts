import { defineConfig , loadEnv} from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';// element-ui 按需引用配置包
import Components from 'unplugin-vue-components/vite';// element-ui 按需引用配置包
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';// element-ui 按需引用配置包
import compressPlugin from 'vite-plugin-compression';
import { viteStaticCopy } from 'vite-plugin-static-copy'; // 打包时复制文件夹内容 
import vueJsx from '@vitejs/plugin-vue-jsx'; // vue 支持 jsx
// import legacy from '@vitejs/plugin-legacy'; // IE11 兼容方案

export default(({ mode } : { mode : any })=>{
  // 获取当前模式下的环境变量
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  return defineConfig({
    base: './',
    resolve: {
      // alias //---------
      // 当使用文件系统路径的别名时，请始终使用绝对路径。相对路径作别名值将按原样使用导致不会解析到文件系统路径中。
      alias: {
        // 由于 Vite 本身已经用了 @ 去做模块导入工作，如果用 @ 别名当绝对路径去使用会有问题,通过多加一个 r 来规避 @ 冲突的问题。
        // 同时注意需要配合修改 tsconfig.json 内的别名配置内容
        '@src': resolve(__dirname, 'src'),
        '@typ': resolve(__dirname, 'types')
      }
    },
    logLevel: 'info',// 'info' | 'warn' | 'error' | 'silent' 调整控制台输出的级别，默认为 'info'
    server: {
      host:'0.0.0.0', // 默认情况下 vite 不允许通过 ip 地址访问，只能通过 localhost。只需要修改 vite.config.ts，将 host 改为 0.0.0.0
      port:3000,
      // open: true, // 在服务器启动时自动在浏览器中打开应用程序。当此值为字符串时，会被用作 URL 的路径
      proxy: {
        '/api': {
          target: process.env.VITE_APP_API_BASE_URL, // 获取环境变量接口代理地址
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
        '/geo': {
          target: process.env.VITE_APP_GEO_BASE_URL, // 获取环境变量接口代理地址
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/geo/, '')
        },
      }
    },
    plugins: [
      vue(),
      vueJsx({}),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      viteStaticCopy({
        targets:[
          {src:'./node_modules/tinymce/icons/**/*',dest:'tinymce.lib/icons'},
          {src:'./node_modules/tinymce/models/**/*',dest:'tinymce.lib/models'},
          {src:'./node_modules/tinymce/skins/**/*',dest:'tinymce.lib/skins'},
          {src:'./node_modules/tinymce/themes/**/*',dest:'tinymce.lib/themes'},
          {src:'./src/parts/aq-componets/aq-tinymce-editor/language/ZH/zh-Hans.js',dest:'tinymce.lib/language/zh_CN.js'}
        ],
        //verbose:true,// 控制台输出copy日志 默认为false
        //copyOnce:true,
        //hook: 'writeBundle' // notice here
      }),
      // legacy({
      //   targets: ['ie >= 11'],
      //   additionalLegacyPolyfills: ['regenerator-runtime/runtime']
      // }),
      compressPlugin({ // gzip 压缩插件配置
        ext: '.gz',// gz br 自定义扩展名，此处默认".gz"
        algorithm: 'gzip', // 采用 brotliCompress gzip 算法
        deleteOriginFile: false,// 是否删除未压缩的原始文件
        threshold: 1025// 触发压缩的文件下限大小,开启得越大,需要被压缩的文件就越多
      })

    ],
    build: {
      sourcemap: false,
      // rollupOptions: {
      //   output: {
      //     // 手动添加 MonacoEditor所需资源 打包
      //     manualChunks: {
      //       jsonWorker: [`${prefix}/language/json/json.worker`],
      //       cssWorker: [`${prefix}/language/css/css.worker`],
      //       htmlWorker: [`${prefix}/language/html/html.worker`],
      //       tsWorker: [`${prefix}/language/typescript/ts.worker`],
      //       editorWorker: [`${prefix}/editor/editor.worker`]
      //     }
      //   }
      // },
      minify:'terser', // 配置代码压缩
      terserOptions:{
        compress:{
          //drop_console:true,  //丢弃 console
          drop_debugger:true, //丢弃 debugger
        }
      }
    }
  })
})
