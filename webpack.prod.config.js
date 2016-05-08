const webpack = require('webpack');
const config  = require('./webpack.config.js');

module.exports = {
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' }
    ].concat(config.module.loaders)
  },
  babel:{
    presets: ['react', 'es2015'] // 要使用的编译器
  },
  entry:   config.entry,
  output:  config.output,
  plugins: config.plugins,
  resolve: config.resolve
};