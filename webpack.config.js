const webpack = require('webpack');
const merge = require('webpack-merge');

const PATHS = require('./webpack-paths');
const loaders = require('./webpack-loaders');
const plugins = require('./webpack-plugins');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = {
	entry: PATHS.src,
	output: {
		path: PATHS.public,
		filename: 'bundle.js',
	},
	module: {
    rules: [
      loaders.babel,
      loaders.extractCss,
    ],
  },
	resolve: {
    alias: {
      components: PATHS.components,
    },
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'template.html',
    }),
    plugins.extractText,
  ],
};

let config;

switch (process.env.NODE_ENV) {
	case 'production':
		config = merge(
		  common,
      {
        devtool: 'source-map',
        plugins: [
          plugins.loaderOptions,
          plugins.environmentVariables,
          plugins.uglifyJs,
          plugins.manifest,
          plugins.sw,
          plugins.copy,
        ],
      }
	  );
		break;
	case 'development':
		config = merge(
			common,
			{ devtool: 'eval-source-map' },
			loaders.devServer({
				host: process.env.host,
				port: process.env.port,
			})
		);
    break;
}

module.exports = config;
