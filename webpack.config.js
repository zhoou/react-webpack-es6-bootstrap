var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var htmlWebpackPlugin=require("html-webpack-plugin");
var path=require('path');

var options = {
    entry: [path.join(__dirname,'/Scripts/entry.js')],
    output: {
        path: path.join(__dirname,'/Build/'),
        filename: 'js/index.bundle.js',
        //publicPath:'../'
    },
    module: {
        loaders: [ 
            { 
                test: /\.css$/, 
                loader: ExtractTextPlugin.extract("style","css")
            },
            { 
                test: /\.(eot|woff|woff2|svg|ttf)$/, 
                loader: "file" ,
                query : {
                        limit : 10000,
                        // Fonts目录
                        name : 'Content/fonts/[name]_[hash].[ext]'
                    }
            },
            {
                test:/\.(jpe?g|png|gif|ico)$/,
                loader:"url",
                query:{
                    limit:5120,
                    name:"./Content/Images/[hash:8].[name].[ext]"
                }
            },
            {
                //html模板加载器，可以处理引用的静态资源，默认配置参数attrs=img:src，处理图片的src引用的资源
                //比如你配置，attrs=img:src img:data-src就可以一并处理data-src引用的资源了，就像下面这样
                test: /\.html$/,
                loader: "html?attrs=img:src img:data-src"
            },
            { 
                test: /bootstrap\/js\//,    
                loader: 'imports?jQuery=jquery'               
            }
        ]
    },
    resolve:{
        //自动补全识别哪些后缀
        extensions:['','.js','.jsx','.css'],
         //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            'react': path.join(__dirname, 'node_modules', 'react'),
            'reactDOM':path.join(__dirname, 'node_modules', 'react-dom'),
            'jquery':path.join(__dirname,'Scripts/Lib/jquery-2.1.4.min'),
            'bootstrap':path.join(__dirname,'Scripts/Lib/bootstrap.min'),
            'Hello': '../Components/Hello.js',//后续直接 require('Hello') 即可
        }
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',   // 将公共模块提取，生成名为`vendor`bundle
            //chunks: ['jquery','bootstrap','react','reactDOM'], //提取哪些模块共有的部分,名字为上面的vendor.
            minChunks: Infinity // 提取至少*个模块共有的部分
        }),
        new webpack.DefinePlugin({
        'environment': {
          'HOST': JSON.stringify('/')
        }
        }),
        // 全局依赖jQuery
        new webpack.ProvidePlugin({
            $ : "jquery",
            jQuery : "jquery",
            "window.jQuery" : "jquery"
        }),
        new ExtractTextPlugin('Content/css/[name].css',{
            allChunks:true
        }),
        new htmlWebpackPlugin({              //根据模板插入css/js等生成最终HTML
            favicon:'./Content/Images/favicon.ico', //favicon路径
            filename:'View/index.html',    //生成的html存放路径，相对于 path
            template:'./index.html',    //html模板路径
            chunks:['vendor','index'],  //需要引入的chunk，不配置就会引入所有页面的资源.名字来源于你的入口文件
            inject:true,    //允许插件修改哪些内容，包括head与body
            hash:true,    //为静态资源生成hash值
            minify:{    //压缩HTML文件
                removeComments:true,    //移除HTML中的注释
                collapseWhitespace:true    //删除空白符与换行符
            }
        })
    ]
};

if(process.env.NODE_ENV==="production"){
    options.devtool=false;
    options.output.publicPath="../";
    options.plugins=options.plugins.concat([
        new webpack.DefinePlugin({
            'process.env':{
              'NODE_ENV': JSON.stringify('production')  //发布时添加
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
              warnings: false
             },
            except: ['$super', '$', 'exports', 'require']    //排除关键字
        })
    ]);
};

module.exports=options;