const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: {
		index: ['./src/server/index.js']
	},
	externals: [nodeExternals()],
	node: {
		// Need this when working with express, otherwise the build fails
		__dirname: false, // if you don't put this is, __dirname
		__filename: false // and __filename return blank or /
	},
	output: {
		chunkFilename: '[name].js',
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist/server'),
		publicPath: '/'
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
							plugins: ['@babel/plugin-transform-runtime']
						}
					}
				]
			}
		]
	},
	target: 'node'
};
