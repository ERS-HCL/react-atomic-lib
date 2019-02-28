const path = require('path');

/**
 * @function
 * @param {object} baseConfig
 * @returns {object}
 */
module.exports = (baseConfig) => {
	baseConfig.module.rules.push({
		enforce: 'pre',
		include: [path.resolve(__dirname, '../src')],
		loaders: [
			{
				loader: require.resolve('@storybook/addon-storysource/loader'),
			},
		],
		test: [/\.stories\.(js|jsx)$/],
	});

	baseConfig.module.rules.push({
		test: /\.(gif|jpe?g|png|svg)$/i,
		use: [
			'file-loader',
			{
				loader: 'image-webpack-loader',
				options: {
					bypassOnDebug: true, // webpack@1.x
					disable: true, // webpack@2.x and newer
				},
			},
		],
	});

	baseConfig.module.rules.push({
		test: /\.css$/,
		use: ['style-loader', 'css-loader'],
	});

	baseConfig.module.rules.push({
		test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?$/,
		use: [
			{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'fonts/',
				},
			},
		],
	});

	return baseConfig;
};
