var webpack=require('webpack');
var config=require('./webpack.config.js');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server'
  ].concat(config.entry),
  module: {
    loaders: [
      { 
      	test: /\.jsx?$/, 
      	exclude: /node_modules/, 
      	loaders: ['react-hot', 'babel'] 
      }
    ].concat(config.module.loaders)
  },
  babel:{
    presets: ['react', 'es2015'] // 要使用的编译器
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
        'environment': {
          'HOST': JSON.stringify('/')
        }
    }),
  ].concat(config.plugins),

  devtool: 'source-map',
  output:  config.output,
  resolve: config.resolve
};

