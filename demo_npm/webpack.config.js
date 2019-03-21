//https://www.cnblogs.com/luojianjian/p/8053113.html
//
const path = require("path");//nodejs中的基本包，处理路径的
// const fs = require("fs");//nodejs中的基本包，处理文件的
var HtmlWebpackPlugin = require('html-webpack-plugin'); //打包html的插件

//遍历所有子目录获得对应文件的列表(*.js / *.html, etc)
// function readDirSync(path){
//     var rc = new Object();
//     rc.html = new Array();
//     rc.js = new Array();
//     rc.css = new Array();
//     //--
//     function getDirInfor(subPath){
//         let pa = fs.readdirSync(subPath);//console.log(pa);
//         pa.forEach(function(ele,index){
//             let info = fs.statSync(subPath+"/"+ele)
//             if(info.isDirectory()&&(ele != 'debug')){
//                 //console.log("dir: "+ele)
//                 getDirInfor(subPath+"/"+ele);
//             }else{
//                 // console.log("file: "+ele);
//                 let elPath = subPath+"/"+ele;
//                 let endJS = '.js', endHtml = '.html', endCss = '.css';
//                 let endJsStr = elPath.substr((elPath.length - endJS.length),endJS.length);
//                 let endHtmlStr = elPath.substr((elPath.length - endHtml.length),endHtml.length);
//                 let endCssStr = elPath.substr((elPath.length - endCss.length),endCss.length);
//                 if(endJsStr == endJS){
//                     rc.js.push(elPath);
//                 }
//                 if(endHtmlStr == endHtml){
//                     rc.html.push(elPath);
//                 }
//                 if(endCssStr == endCss){
//                     rc.css.push(elPath);
//                 }
//             }
//         })
//     }
//     //--
//     getDirInfor(path);
//     console.log(rc);
//     return rc;
// }
//
module.exports = {
    devtool: 'source-map', // debug tools: map error to source code
    mode: "development", // defaut package type is development
    entry: path.join(__dirname,"src/index.js"),//__dirname代表文件所在的目录
    // entry: (readDirSync(path.join(__dirname,"src"))).js,//__dirname代表文件所在的目录
    output: {
        filename: "demo.rel.js",
        path: path.join(__dirname,"release"),
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
                        // presets:["es2016"]
                    }
                },
                exclude:path.resolve(__dirname,"node_modules|release"),
                include:path.resolve(__dirname,"src")
            }
        ]
    },
    // plugins:[
    //     new HtmlWebpackPlugin({
    //         filename:'index.html',//打包好后，新建的html名字为first.html
    //         template:'./src/index.html'//main.html为模板去创建新的html文件
    //     })
    // ]
    
}