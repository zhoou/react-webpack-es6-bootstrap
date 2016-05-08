var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.config.js');

new WebpackDevServer(webpack(config), {
  publicPath:         "http://localhost:3000/Build/",     //,   //{host:'localhost:3000/Build/'},
  hot:                true,
  //noInfo:             true,
  historyApiFallback: true
}).listen(3000, '0.0.0.0', function (err, result) {
   if (err) {
   	console.log(err);  
   }
   console.log('Listening at localhost:3000');
});