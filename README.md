# react-webpack-es6-bootstrap
This project aim to learn React with webpack、es6、bootstrap、sass and so on .

## Guides
#### package.json

The best way to manage locally installed npm packages is to create a `package.json` file.

A `package.json` file affords you a lot of great things:
* It serves as documentation for what packages your project depends on.
* It allows you to specify the versions of a package that your project can use using semantic versioning rules.
* Makes your build reproducable which means that its way easier to share with other developers.

To create a `package.json` run :
```
npm init
```
If you want to get a default `package.json` run :
```
npm init --yes
```
Here is an exmaple in my project:
```
{
  "name": "react-webpack-es6-bootstrap",
  "version": "0.2.0",
  "description": "created by myself to exam my learning state",
  "main": "webpack.config.server.js",
  "dependencies": {
    "webpack": "^1.13.0",
    "react": "^15.0.1",
    "react-dom": "^15.0.1"
  },
  "devDependencies": {
    "babel-core": "^6.7.7",
    "babel-loader": "^6.2.4",
    "babel-preset-es2015": "^6.6.0",
    "babel-preset-react": "^6.5.0",
    "css-loader": "^0.23.1",
    "extract-text-webpack-plugin": "^1.0.1",
    "file-loader": "^0.8.5",
    "html-loader": "^0.4.3",
    "html-webpack-plugin": "^2.16.1",
    "react-hot-loader": "^1.3.0",
    "style-loader": "^0.13.1",
    "url-loader": "^0.5.7",
    "webpack-dev-server": "^1.14.1"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev":"node webpack.config.server.js",
    "build": "set NODE_ENV=production&& webpack -p --progress"
  },
  "author": "zhoou",
  "license": "ISC"
}
```

#### webpack.config.js

`webpakc.config.js` helps to load, extend and merge webpack configs.

`Webpack.config.js` files are usually placed in the root directory of the project, and it is also a standard module of the Commonjs specification.

#### webpack.optimize.CommonsChunkPlugin
#### html-webpack-plugin
#### webpack.ProvidePlugin
#### extract-text-webpack-plugin
#### webpack-dev-server

## Installation and configuration
#### Installation

To initialize the project with all the necessary components :
```
npm install
```
#### run

Start the local dev server :
```
npm run dev
```

## Deployment
#### dev
#### prod
