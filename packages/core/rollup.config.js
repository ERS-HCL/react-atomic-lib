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
				file: __dirname + '/dist/core/atoms.js',
				format: 'cjs'
			},
			{
				file: __dirname + '/dist/core/atoms.es.js',
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
				file: __dirname + '/dist/core/molecules.js',
				format: 'cjs'
			},
			{
				file: __dirname + '/dist/core/molecules.es.js',
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
				file: __dirname + '/dist/core/organisms.js',
				format: 'cjs'
			},
			{
				file: __dirname + '/dist/core/organisms.es.js',
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
				file: __dirname + '/dist/core/templates.js',
				format: 'cjs'
			},
			{
				file: __dirname + '/dist/core/templates.es.js',
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
				file: __dirname + '/dist/core/pages.js',
				format: 'cjs'
			},
			{
				file: __dirname + '/dist/core/pages.es.js',
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
				file: __dirname + '/dist/core/themes.js',
				format: 'cjs'
			},
			{
				file: __dirname + '/dist/core/themes.es.js',
				format: 'es'
			}
		],
		plugins,
		external: externals
	}
];
