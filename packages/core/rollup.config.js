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
				file: __dirname + '/dist/core/index.js',
				format: 'cjs'
			},
			{
				file: __dirname + '/dist/core/index.es.js',
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
				file: __dirname + '/dist/core/atoms/index.js',
				format: 'cjs'
			},
			{
				file: __dirname + '/dist/core/atoms/index.es.js',
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
				file: __dirname + '/dist/core/molecules/index.js',
				format: 'cjs'
			},
			{
				file: __dirname + '/dist/core/molecules/index.es.js',
				format: 'es'
			}
		],
		plugins,
		external: externals
	},
	{
		input: 'src/organisms/index.js',
		output: [
			{
				file: __dirname + '/dist/core/organisms/index.js',
				format: 'cjs'
			},
			{
				file: __dirname + '/dist/core/organisms/index.es.js',
				format: 'es'
			}
		],
		plugins,
		external: externals
	},
	{
		input: 'src/templates/index.js',
		output: [
			{
				file: __dirname + '/dist/core/templates/index.js',
				format: 'cjs'
			},
			{
				file: __dirname + '/dist/core/templates/index.es.js',
				format: 'es'
			}
		],
		plugins,
		external: externals
	},
	{
		input: 'src/pages/index.js',
		output: [
			{
				file: __dirname + '/dist/core/pages/index.js',
				format: 'cjs'
			},
			{
				file: __dirname + '/dist/core/pages/index.es.js',
				format: 'es'
			}
		],
		plugins,
		external: externals
	},
	{
		input: 'src/themes/index.js',
		output: [
			{
				file: __dirname + '/dist/core/themes/index.js',
				format: 'cjs'
			},
			{
				file: __dirname + '/dist/core/themes/index.es.js',
				format: 'es'
			}
		],
		plugins,
		external: externals
	}
];
