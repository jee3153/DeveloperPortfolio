const _MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
  filename: '[name].bundle.css',
  chunkFilename: '[id].css'
});
const _HtmlWebPackPlugin = require("html-webpack-plugin");
const HtmlWebPackPlugin = new _HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
})

module.exports = {
  MiniCssExtractPlugin: MiniCssExtractPlugin,
  HtmlWebPackPlugin: HtmlWebPackPlugin
};