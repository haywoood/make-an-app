var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    './src/app'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.ProvidePlugin({
        React: "react",
    })
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};
