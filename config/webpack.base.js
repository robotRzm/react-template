const path = require("path");
// 引入html-webpack-plugin插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 提取css单文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 引入clean-webpack-plugin插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// eslint 检查
const ESLintPlugin = require('eslint-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV;
console.log("--------" + NODE_ENV + "-----------");
module.exports = {
  // 入口
  entry: path.resolve(__dirname, '../src/index.js'),

  // 输出
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist"),  // 注意此处输出目录是父级文件夹
    publicPath: '/' // 指定资源文件引用的目录
  },

  // 解析模块的规则
  resolve: {
    extensions: [".js", ".jsx", ".json"],//以上文件引入可以省略后缀名
    alias: {
      '@': path.join(__dirname, '../src'), //可以指向 src 目录
    }
  },

  // 模块加载器
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(less|css)$/,
        use: [
          // 提取js中的css成单独文件, 取代style-loader
          NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          "css-loader",
          "less-loader"
        ]
      },
      {
        test: /.(png|jpe?g|gif|svg|webg)$/,
        type: 'asset/resourceay',
        generator: {
          // 输出的资源文件名称 (同上文output.assetModuleFilename)
          filename: 'static/media/[name][contenthash:8][ext][query]'
        },
        parser: {
          dataUrlCondition: {
            // 超过10kb导出文件,小于10kb直接使用base64格式添加到行内
            maxSize: 10 * 1024
          }
        }
      }
    ]
  },

  // // 插件
  plugins: [
    // 生产HTML模板
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../index.html"),
      title: 'react-template'
    }),
    // 每次构建前清除dist目录
    new CleanWebpackPlugin(),
    // eslint检查
    new ESLintPlugin({ fix: true })
  ]
};