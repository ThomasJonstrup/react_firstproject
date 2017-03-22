/*
    ./webpack.config.js
*/
const path = require('path');

/*const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: '/node_modules'},
      { test: /\.jsx$/, loader: 'babel-loader', exclude: '/node_modules'},
      { test: /\.css$/, loader: "css-loader"},
      { test: /\.sass$/, loader: "sass-loader"}
    ]
  },

  plugins: [HtmlWebpackPluginConfig]
}*/


// webpack.config.js

var ExtractTextPlugin = require("extract-text-webpack-plugin");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve('public'),
        filename: 'index_bundle.js'
    },
    devServer: {
        contentBase: path.resolve('public')
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.jsx$/, loader: 'babel-loader', exclude: '/node_modules'},
            /*{test: /\.scss$/, loader: ExtractTextPlugin.extract('css-loader!sass-loader')},*/
            /*{test: /\.css$/, loader: ExtractTextPlugin.extract('css-loader')},*/
            {
  test: /\.scss$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    //resolve-url-loader may be chained before sass-loader if necessary
    use: ['css-loader', 'sass-loader', 'postcss-loader']
  })
}
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css"),
        new HtmlWebpackPlugin({
          template: './client/index.html',
          filename: 'index.html',
          inject: 'body'
        })
    ]
}
