import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser as uglify } from 'rollup-plugin-terser'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import { babel } from '@rollup/plugin-babel'
import banner2 from 'rollup-plugin-banner2'

import pkg from './package.json'

const ResolveBanner = () => {
  return `/**
 * name: ${pkg.name}
 * version: v${pkg.version}
 * author: ${pkg.author}
 * (c) ${new Date().getFullYear()} - Released under the MIT License.
 */`;
}

export default {
  input: 'src/index.ts',
  output: [
    {
      name: pkg.name,
      format: 'umd',
      file: `./dist/${pkg.name}.umd.js`
    },
    {
      name: pkg.name,
      format: 'umd',
      file: `./dist/${pkg.name}.umd.min.js`,
      plugins: [uglify()]
    }
  ],

  plugins: [
    babel({
      babelHelpers: 'bundled'
    }),
    nodeResolve({
      browser: true
    }),
    commonjs(),
    typescript(),
    banner2(ResolveBanner)
  ]
}
