/** webpack.dev.js
 * 2019-05-15
 * YangYutong
*/
const path = require("path");//nodejs中的基本包，处理路径的
const merge = require('webpack-merge');
const common = require('./webpack.config');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
    devtool: 'source-map',
    mode: "development", // defaut package type is development
    devServer:{
        //"dev": "webpack-dev-server --inline --open --port 5008"
        // contentBase:path.join(__dirname,"./release"),
        // port:'5008',
        // inline: true,
        // hot: true,
        // open: 'firefox',//'Chrome',
        // 在编译过程中有错误，给予窗口提示
        overlay:{
            errors:true
        }
    },
    plugins:[
        new cleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['*.map', '*.js', '*.html'],
        }),
        new copyWebpackPlugin([ // 复制配置文件到发布目录
            { from: path.join(__dirname,'./README.md'), to:  path.join(__dirname,'./release/') },
        ]),
    ]
})
