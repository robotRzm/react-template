const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const base = require('./webpack.base.js');

module.exports = merge(base, {
  mode: "production",
  plugins: [
    // 打包体积分析
    new BundleAnalyzerPlugin(),

  ]
});