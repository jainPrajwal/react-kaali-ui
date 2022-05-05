import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import {terser} from "rollup-plugin-terser"; 
import commonjs from '@rollup/plugin-commonjs';
import PeerDepsExternalPlugin from "rollup-plugin-peer-deps-external";
export default  [
    {
        input: './src/components/index.js',
        output: [
            {
                file: `dist/index.js`,
                format: `cjs`
            },
            {
                file: `dist/index.es.js`,
                format: `es`,
                exports: `named`
            },
        ],
        plugins: [ 
            postcss({
                plugins: [],
                minimize: true,
                extensions: ['.css']
            }),
            babel({
                exclude: 'node_modules/**',
                presets: [`@babel/preset-react`]
            }),
            external(),
            PeerDepsExternalPlugin(),
            resolve(),
          nodeResolve(),
          commonjs(),
          nodeResolve(),
          terser()
        ]
    }
]