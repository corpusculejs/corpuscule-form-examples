const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: resolve(process.cwd(), 'src/index.js'),
  },
  output: {
    path: resolve(process.cwd(), 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js/,
        loader: require.resolve('babel-loader')
      },
      {
        test: /\.css/,
        use: [
          require.resolve('to-string-loader'),
          require.resolve('css-loader'),
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: resolve(process.cwd(), 'public/index.html')
    })
  ],
};
