"use strict";

const PATHS = require('./webpack-paths');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.css = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
  include: PATHS.css,
}

exports.extractCss = {
  test:    /\.css$/,
  loader: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        query: {
          modules: true,
        },
      },
    ],
  }),
};

exports.babel = {
  test: /\.jsx?$/,
  use: ['babel-loader'],
  exclude: /node_modules/,
};

exports.devServer = function(options) {
	return {
		devServer: {
			historyApiFallback: true,
			hot: true,
			inline: true,
			stats: 'errors-only',
			host: options.host,
			port: options.port,
			contentBase: './client/dist',
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin({
				multistep: true
			})
		],
	};
};
