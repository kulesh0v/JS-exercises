const path = require('path');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, './vectorES6/scripts'),
  entry: {
    vector: './vector.js',
    index: './index.js',
  },
  watch: true,
  output: {
    path: path.resolve(__dirname, './vectorES6/public/scripts'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'vectorES6/public'),
    compress: true,
    port: 9000,
  }
};
