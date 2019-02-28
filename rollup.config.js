import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
// import { terser } from 'rollup-plugin-terser';
// import pkg from './package.json';

const externals = ['@material-ui/core', 'react'];
const plugins = [
	external(),

	postcss({
		modules: true
	}),
	babel({
		exclude: 'node_modules/**'
	}),
	resolve(),
	commonjs()
	// terser(),
];

export default [
	{
		input: 'src/index.js',
		output: [
			{
				file: __dirname + '/dist/index.js',
				format: 'cjs'
			},
			{
				file: __dirname + '/dist/index.es.js',
				format: 'es'
			}
		],
		plugins,
		external: externals
	},
	{
		input: 'src/atoms/index.js',
		output: [
			{
				file: __dirname + '/dist/atoms.js',
				format: 'cjs'
			},
			{
				file: __dirname + '/dist/atoms.es.js',
				format: 'es'
			}
		],
		plugins,
		external: externals
	},
	{
		input: 'src/molecules/index.js',
		output: [
			{
				file: __dirname + '/dist/molecules.js',
				format: 'cjs'
			},
			{
				file: __dirname + '/dist/molecules.es.js',
				format: 'es'
			}
		],
		plugins,
		external: externals
	}
];
