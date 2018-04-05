var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //将所有css文件导成一个
// var extractLESS = new ExtractTextPlugin(path.join(__dirname, '/lastpack/css/[name].less'));
// var extractCSS = new ExtractTextPlugin(path.join(__dirname, '/lastpack/css/[name].css'));
var extractCSS = new ExtractTextPlugin('../css/[name].css');
var extractLESS = new ExtractTextPlugin('../css/[name].css');

var HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(__dirname);
module.exports = {
  entry: {
    main: path.join(__dirname, '/src/module_js/index.js')
  },
  output: {
    path: __dirname + '/lastpack/js',
    filename: '[name].pack.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.less$/,
      use: extractLESS.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'autoprefixer-loader', 'less-loader']
      })
    }, {
      test: /\.css$/,
      use: extractCSS.extract({
        fallback: "style-loader",
        use: ['css-loader', 'autoprefixer-loader']
      })
    }]
  },
  plugins: [
    extractCSS,
    extractLESS,
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: './src/html/index.html',
      chunks: ['main'],
      inject: false
    })
  ]
};