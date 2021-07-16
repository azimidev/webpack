const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry   : {
		app    : [
			'./src/main.js',
			'./src/main.scss',
		],
		vendor : ['jquery'],
	},
	output  : {
		path : path.resolve(__dirname, './dist'),
		filename : '[name].[chunkhash].js',
	},
	module  : {
		rules : [
			{
			  test : /\.scss$/,
			  use  : [
				  MiniCssExtractPlugin.loader,
				  {
					  loader: "css-loader",
					  options: {
						  url: false
					  }
				  },
				  {
					  loader: "sass-loader",
					  options: {
						  implementation: require("sass"),
					  },
				  }
			  ],
			},
			{
			  test : /\.(svg|eot|ttf|woff|woff2)$/,
			  loader : 'file-loader',
			  options : {
			  	  name : '[name].[hash].[ext]',
			  },
			},
			{
			  test : /\.(png|jpe?g|gif|bmp)$/,
			  use : [
				  {
					  loader  : "file-loader",
					  options : {
						  name : '/image/[name].[hash].[ext]',
							outputPath: "./fonts/",
							publicPath: "./fonts",
					  },
				  },
				  'img-loader',
			  ]
			},
			{
			  test : /\.js$/,
			  use : [
				{
				  loader: "babel-loader",
				  options: {
					presets: ["@babel/preset-env"],
				  },
				}
			  ]
			},
		],
	},
	mode: "development",
	plugins : [
		new MiniCssExtractPlugin({
		  filename: "[name].[chunkhash].css"
		}),
		new CleanWebpackPlugin(),
		
		new WebpackManifestPlugin(),

		new htmlWebpackPlugin({
			template: "src/index.html"
		})
	],
	optimization: {
		minimize: true,
	},
};