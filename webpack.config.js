let path = require('path'); // formal the path
let webpack = require('webpack');
let package = require('./package.json'); //import package information
let libraryname = package.name;
//
module.exports = {
    devtool: 'source-map', // debug tools: map error to source code
    mode: "development", // defaut package type is development
    entry: './index.js', // yut entry(the beginning file to package)
    output: {
        path: path.join(__dirname, 'release'), //release directory: all css/js/html will base on it.
        filename: libraryname + ".js",
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: { // compile rule of modules
        rules: [
            // { test: /\.(png|jpg|gif)$/, loader: 'file-loader', options: { name: '[name].[ext]?[hash]' } }, //jpg file loader
            { //ES6 compile
                test:/\.js$/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:["env"]
                    }
                },
                exclude:path.resolve(__dirname,"node_modules|demo"),
                include:path.resolve(__dirname,"src")
            }
        ]
    }
};