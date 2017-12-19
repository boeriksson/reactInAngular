const path = require('path');

module.exports = {
  entry: ['babel-polyfill', path.join(__dirname, './index.js')],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, './lib'),
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2017', 'react']
        }
      }
    ]
  }
};