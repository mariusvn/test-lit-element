const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve('src'),
          path.resolve('node_modules/lit-html'),
          path.resolve('node_modules/lit-element')
        ],
        loader: 'babel-loader'
      }
    ]
  }
}
