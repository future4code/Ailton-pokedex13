const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: '/src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    chunkFilename: 'bundle.js'
  },
  module: {
    rules: [
      {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    },
  ]
  },
   devServer: {
    watchFiles: ['src/**/*.js', 'public/**/*'],
     client: {
       progress: true,
       logging: 'info',
       overlay: true,
    },
    allowedHosts: 'auto',
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./public/index.html",
    filename: "./index.html"
  })]
}
