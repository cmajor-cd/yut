# App Demo for yut （import 3rd lib）
这个Demo完整的演示了如何在yut框架中引入三方js库。    
本 demo 以引入 bootstrap 为例进行演示。   

## 如何初始化以及针对 bootstrap 进行定制
1. 创建yut骨架   
   * 使用yut-cli脚手架：yut-cli c myapp
   * 直接拷贝 demo/simple 代码
2. 安装库
   * npm install bootstrap
   * npm install popper
   * npm install jquery
3. 定制webpack
    * 增加资源加载器
    ```
    webpack.config.js:
        ...
        module: { // compile rule of modules
        rules: [
            { test: /\.(ttf|eot|svg|woff|woff2)$/, loader: 'url-loader' },
        ]
    ```
    * 引入jquery插件
    ```
    webpack.config.js:
        ...
            plugins:[
            new webpack.ProvidePlugin({
                jQuery: 'jquery',
                $: 'jquery'
            })
            ]

    ```
4. 引入css和js文件    
    在 index.js 文件中将 bootstrap 相关 css 和 js 引入。
    ```
    index.js:
        ...
        import'../node_modules/bootstrap/dist/css/bootstrap.min.css';
        import 'jquery';
        import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
        // 引入三方 icon 库
        import '../node_modules/feather-icons/dist/feather';
        import feather from 'feather-icons';
    ````
5. 定制 app-template.html (index.html) 文件
    * 按照 bootstrap 的要求修改<head>标签：
    ```
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    ```
6. 按照需求拆解和定制前端 view 到 各个模块中
    * html + css + js
7. 定制 CMainFrm.js 文件    
    因为 bootstrap 的布局样式和 yut 提供的 simple demo 不太一样，会导致按照 yut 框架缺省处理 loginView 时有些显示问题，所有必要时对 CMainFrm.js 和 CLoginView.js 中关于view显示的代码要进行一些干预才能正常显示，需要修改的有两个地方：
    * CMainFrm.js 页面 active 时手工隐藏 nav 和 sidebar
    ```
    evMainFrmActived(self) {
        console.log('CMainFrm evActived CALLED!');
        // 显示LOGView
        // self.deactiveView('navBar');
        // self.deactiveView('sideBar');
        $('#navBar').addClass('hidden');$('#sideBar').addClass('hidden');$('#mainContenct').addClass('hidden');
        self.activeView('loginView');
    }
    ```
    * CLoginView.js 页面登陆验证成功后，手工隐藏 LoginView 和显示 nav 和 sidebar
    ```
    if (0 == data.rc) {
        //1.hide loginview;
        //2. active maincontent + active sidebar;
        //3. active dashboardView;
        $('#navBar').removeClass('hidden');$('#sideBar').removeClass('hidden');$('#mainContenct').removeClass('hidden');
        theApp.m_hMainWnd.activeView('dashboardView');
    }
    ```
这样整个定制就完成了，您可以进入愉快的编程过程了。    


# 附录：bootstrap 中UI调整的几个小细节    
## 收缩和扩展 sidebar 区域  
###   1. 定制 sidebar 收缩和扩展时的宽度 css     
    ```
        sidebar .fold-side-bar {
            width: 60px;
        }
        div.expand-side-bar{
            margin-left: 65px;
        }
        sidebar .nowrap {
            white-space: nowrap;
        }
    ```
    * fold-side-bar => sidebar 收缩时的宽度，根据需要设置
    * expand-side-bar => sidebar 展开时 右边栏 maincontent 需要退让的宽度
    * nowrap => 用于 sidebar 菜单项的标签比如<a>，当收起时内容不回行，这样左边栏显示图标而没有内容，显得很干净    
###   2. 编写收缩和扩展 button 点击响应事件代码     
    ```
    CMainFrm.js:
        ...
        // 收缩和扩展 sidebar 区域
        // 1. 使用 css 将sidebar 的宽度调节为合适宽度
        // 2. 调节 右边栏 的布局宽度
        // 3. 设置 sidebar 的菜单内容<a>标签css为不换行 a{ white-space:nowrap; }
        $('#folderBtn').click(()=>{
            let navbarBrand = $('#navbarBrand');
            let sidebar = $('#sidebarMenu');
            let mainContenct = $("#mainContenct");
            if(sidebar.hasClass('fold-side-bar')){
                // 展开
                sidebar.removeClass('fold-side-bar');
                //
                navbarBrand.removeClass('fold-side-bar');
                navbarBrand.addClass('col-md-2 ');
                //
                mainContenct.removeClass('col-md-11 col-md-offset-2');
                mainContenct.addClass('col-md-10');
            }else{
                // 收拢
                sidebar.addClass('fold-side-bar');
                //
                navbarBrand.removeClass('col-md-2');
                navbarBrand.addClass('fold-side-bar');
                //
                mainContenct.removeClass('col-md-10');
                mainContenct.addClass('col-md-11 col-md-offset-2');
            }
          });
    ```     
