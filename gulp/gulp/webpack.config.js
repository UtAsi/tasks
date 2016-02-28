'use strict'
import webpack from 'gulp-webpack'

export let webpackConfig = {
  entry: './src/js/index.js',
  output: {
    filename: './bundle_[name].js'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};