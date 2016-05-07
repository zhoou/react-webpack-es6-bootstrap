var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

new WebpackDevServer(webpack(config), {
  publicPath: "http://127.0.0.1:3000/Build/",     //,   //{host:'localhost:3000/Build/'},
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
   if (err) {
   	console.log(err);  
   }
   console.log('Listening at localhost:3000');
});