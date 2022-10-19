const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// 引入html-webpack-plugin插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 引入clean-webpack-plugin插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // 入口
  entry: path.resolve(__dirname, '../src/index.js'),

  // 输出
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist")  // 注意此处输出目录是父级文件夹
  },

  resolve: {
    extensions: [".js", ".jsx", ".json"],//以上文件引入可以省略后缀名
  },

  // 模块加载器
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: [
          "thread-loader",
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          }]
      },
      {
        test: /\.(less|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader", "less-loader"]
      }
    ]
  },

  optimization: {
    // 压缩项
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },

  // 插件
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
    }),

    // 每次构建前清除dist目录
    new CleanWebpackPlugin(),

    // 自动生成index.html到dist
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../index.html")
    })
  ]
};