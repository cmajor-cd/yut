/**
 * main frame 主类定义
 * 1. this mainFrm includes it's html template in "option.aHtml"
 * 2. this mainFrm includes 4 subviews, that are defined in "option.aChildViews"
 * 3. this mainFrm defines 2 event, that are defined in "option.aEvCallback"
 * 4. this mainFrm defines the language in "option.enHtmlMap/cnHtmlMap". You can also use 'CMainFrm.prototype.enHtmlMap' to let the Class code is clear.
 * 5. this mainFrm defines Two-way data binding(双向数据绑定) in "option.aRenderData". 
 */
import htmlTemplate from './CMainFrm.html';

import {yutls, theApp, CView, CTest} from 'yut';
import {appName,releaseVer} from '../version';
import CLoginView from './CLoginView/CLoginView';
import CDashboardView from './CDashboardView/CDashboardView';
import CSysMaintView from './CSysMaintView/CSysMaintView';
import CSysStatusView from './CSysStatusView/CSysStatusView';

class CMainFrm extends CView{ // ! inherit from CView !
    constructor(hParent) {
        /* !! Mandatory !!
         * supper call before user 'this' pointer. */
        super();
        let _this = this;
        /* !! Optional !!
         * internal variant / function
         */
        _this.Data = {
            version: releaseVer,
        };
        /**
         * !! Optional !!
         * international lan supporting.
        */
        _this.enHtmlMap = {};//{dashboardEntry:'Dashboard', sysToolTxt:'SystemTools'};
        _this.cnHtmlMap = {};//{dashboardEntry:' 仪表板', sysToolTxt:'系统工具'};
        /**
         * !! Mandatory !!
         * init option, it's called by yut framework.
         *     => aNodeID [Peremptory], aHtml, aRegCtrlCallBack, aLanguage
         * */
        let option = {
            aParent: hParent,
            aNodeID: 'mainFrm',     // id of the mainFrm <div>
            aHtml: htmlTemplate,    //'./src/views/CMainFrm.html',
            aRegCtrlCallBack: _this.regCtrlCb, // regist all callback func.
            aLanguage: {            // international lan supporting.
                language: 'cn',
                    htmlMap: { 'cn': _this.cnHtmlMap, 'en': _this.enHtmlMap, },
                    jsMap: { 'cn': _this.cnJsMap, 'en': _this.enJsMap, }
            },
            aRenderData: _this.Data, // Two-way data binding
            /**
             * !! Optional !!
             * 1. regist child views tree.
             * 2. regist event_callback
             *  */ 
            aChildViews: [CLoginView, CDashboardView, CSysStatusView, CSysMaintView],//[CLoginView, CDashboardView, CSysStatusView, CSysMaintView],
            aEvCallback: {evActived: _this.evMainFrmActived }, // evMounted: _this.evMainFrmMounted, 
        };
        /* !! Mandatory !!
         * init this class-object
         */
        _this.init(option);
    }
    regCtrlCb() {
        $('#dashboardEntry').click(() => { 
            this.activeView('dashboardView');
            updateItems2Active('nav', 'nav-link', 'dashboardEntry'); 
        });
            // updateBreadcrumItems('breadcrumb', 'bc', 'bcDash');  
        $('#sysStatusEntry').click(() => { 
            this.activeView('sysStatusView'); 
            updateItems2Active('nav', 'nav-link', 'sysStatusEntry'); 
        });
        $('#sysMaintEntry').click(() => { 
            this.activeView('sysMaintView'); 
            updateItems2Active('nav', 'nav-link', 'sysMaintEntry'); 
        });
            
        
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
                //
            }else{
                // 收拢
                sidebar.addClass('fold-side-bar');
                //
                navbarBrand.removeClass('col-md-2');
                navbarBrand.addClass('fold-side-bar');
                //
                mainContenct.removeClass('col-md-10');
                mainContenct.addClass('col-md-11 col-md-offset-2');
                //
            }
          });
        // 设置 sidebar items 选中高亮
        function updateItems2Active(arcClass, toFindClass, activeItem){
            $("."+arcClass).find('.'+toFindClass).removeClass('active');
            $('#'+activeItem).addClass('active');
        }
        // //  更新面包屑Title
        // function updateBreadcrumItems(arcClass, toFindClass, activeItem){
        //     $("."+arcClass).find('.'+toFindClass).removeClass('active');
        //     $("."+arcClass).find('.'+toFindClass).addClass('hidden');
        //     //
        //     $('#'+activeItem).removeClass('hidden');
        //     $('#'+activeItem).addClass('active');
        // }
    }
    /**
     * event functions
     */
    evMainFrmActived(self) {
        console.log('CMainFrm evActived CALLED!');
        // 显示LOGView
        $('#navBar').addClass('hidden');$('#contenctArea').addClass('hidden');//$('#mainContenct').addClass('hidden');
        self.activeView('loginView');
    }
    whoami() {
        console.log('THIS is CMainFrm!');
    }
}

export default CMainFrm;