// 请先安装 rollup-plugin-esbuild rollup-plugin-vue rollup-plugin-scss sass rollup-plugin-terser
// 为了保证版本一致，请复制我的 package.json 到你的项目，并把 name 改成你的库名
import esbuild from 'rollup-plugin-esbuild'
import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import dartSass from 'sass';
import { terser } from "rollup-plugin-terser"

import ts from 'rollup-plugin-typescript2'
import path from 'path'
const getPath = _path => path.resolve(__dirname, _path)

const extensions = [
  '.js',
  '.ts',
  '.tsx'
]

// ts
const tsPlugin = ts({
  tsconfig: getPath('./tsconfig.json'), // 导入本地ts配置
  extensions
})

export default {
  input: 'src/lib/index.ts',
  output: {
    globals: {
      vue: 'Vue'
    },
    name: 'qdleader-ui',
    file: 'dist/lib/qdleader-ui.js',
    format: 'umd',
    plugins: [terser()]
  },
  
  plugins: [
    scss({ include: /\.scss$/, sass: dartSass }),
    tsPlugin,
    // esbuild({
    //   include: /\.[jt]s$/,
    //   minify: process.env.NODE_ENV === 'production',
    //   target: 'es2015'
    // }),
    vue({
      include: /\.vue$/,
    })
  ],
}