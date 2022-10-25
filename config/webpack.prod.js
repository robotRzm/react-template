const { merge } = require('webpack-merge');
// 压缩JS
const TerserPlugin = require("terser-webpack-plugin");
// 优化 / 压缩CSS
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const base = require('./webpack.base.js');

module.exports = merge(base, {
  mode: 'production',

  optimization: {
    minimizer: [
      // 压缩项CSS
      new CssMinimizerPlugin(),
      // 压缩JS
      new TerserPlugin(),
    ]
  }
});