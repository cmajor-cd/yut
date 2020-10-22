/**
 * main frame 主类定义
 * 1. this mainFrm includes it's html template in "option.aHtml"
 * 2. this mainFrm includes 4 subviews, that are defined in "option.aChildViews"
 * 3. this mainFrm defines 2 event, that are defined in "option.aEvCallback"
 * 4. this mainFrm defines the language in "option.enHtmlMap/cnHtmlMap". You can also use 'CMainFrm.prototype.enHtmlMap' to let the Class code is clear.
 * 5. this mainFrm defines Two-way binding(双向数据绑定) in "option.aRenderData". 
 */
import htmlTemplate from './CMainFrm.html';

import {yutls, theApp, CView, CTest} from 'yut';
import {appName,releaseVer} from '../version';
import CLoginView from './CLoginView/CLoginView';
import CDashboardView from './CDashboardView/CDashboardView';
import CSysMaintView from './CSysMaintView/CSysMaintView';
import CSysStatusView from './CSysStatusView/CSysStatusView';
//
class CMainFrm extends CView{ // ! inherit from CView !
    constructor(hParent) {
        // supper call before user 'this' pointer.
        super();
        let _this = this;
        // internal variant / function
        _this.evCount = 0; //example of the event trigger counter.
        _this.Data = {
            version: releaseVer,
        };
        _this.enHtmlMap = {dashboardEntry:'Dashboard', sysToolTxt:'SystemTools'};
        _this.cnHtmlMap = {dashboardEntry:' 仪表板', sysToolTxt:'系统工具'};
        //init option=> aNodeID [Peremptory], aHtml, aRegCtrlCallBack, aLanguage
        let option = {
            aParent: hParent,
            aNodeID: 'mainFrm',
            aHtml: htmlTemplate, //'./src/views/CMainFrm.html',
            aRegCtrlCallBack: _this.regCtrlCb,
            aLanguage: {
            language: 'cn',
                htmlMap: { 'cn': _this.cnHtmlMap, 'en': _this.enHtmlMap, },
                jsMap: { 'cn': _this.cnJsMap, 'en': _this.enJsMap, }
            },
            aRenderData: _this.Data,
            aChildViews: [CLoginView, CDashboardView, CSysStatusView, CSysMaintView],
            aEvCallback: {evActived: _this.evMainFrmActived }, // evMounted: _this.evMainFrmMounted, 
        };
        _this.init(option);
    }
    regCtrlCb() {
        $('#dashboardEntry').click(() => { 
            updateItems2Active('x-ul', 'x-item', 'dashboardMItem');  
            updateBreadcrumItems('breadcrumb', 'bc', 'bcDash');  
            this.activeView('dashboardView'); 
        });
        $('#sysStatusViewEntry').click(() => { 
            updateItems2Active('x-ul', 'x-item', 'sysStatusMItem');
            updateBreadcrumItems('breadcrumb', 'bc', 'bcStatus'); 
            this.activeView('sysStatusView'); });
        $('#sysMaintViewEntry').click(() => { 
            updateItems2Active('x-ul', 'x-item', 'sysMaintViewEntry');
            updateBreadcrumItems('breadcrumb', 'bc', 'bcMaint'); 
            this.activeView('sysMaintView'); });
        //更新sidebar选中高亮
        function updateItems2Active(arcClass, toFindClass, activeItem){
            $("."+arcClass).find('.'+toFindClass).removeClass('active');
            $('#'+activeItem).addClass('active');
        }
        //  更新面包屑Title
        function updateBreadcrumItems(arcClass, toFindClass, activeItem){
            $("."+arcClass).find('.'+toFindClass).removeClass('active');
            $("."+arcClass).find('.'+toFindClass).addClass('hidden');
            //
            $('#'+activeItem).removeClass('hidden');
            $('#'+activeItem).addClass('active');
        }
        // 收缩和扩展main content 区域
        // 1. 使用 css 将sidebar 的宽度调节为合适宽度
        // 2. 调节 右边栏 的布局宽度
        // 3. 设置 sidebar 的菜单内容<a>标签css为不换行 a{ white-space:nowrap; }
        $('#homeBtn').click(()=>{
            let sidebar = $('#sideBar');
            let mainContenct = $("#mainContenct");
            if(sidebar.hasClass('fold-side-bar')){
                // 展开
                sidebar.removeClass('fold-side-bar');
                //
                mainContenct.removeClass('expand-side-bar');
                mainContenct.removeClass('col-md-offset-1');
                mainContenct.addClass('col-md-offset-2');
            }else{
                // 收拢
                sidebar.addClass('fold-side-bar');
                //
                mainContenct.removeClass('col-md-offset-2');
                mainContenct.addClass('expand-side-bar');
            }
        });
    }
    /**
     * evMounted
     */
    // evMainFrmMounted(self) {
    //     self.evCount++;
    //     console.log('CMainFrm envMounted CALLED(' + self.evCount+' times)');
    // }
    evMainFrmActived(self) {
        console.log('CMainFrm evActived CALLED!');
        // 显示LOGView
        // self.deactiveView('navBar');
        // self.deactiveView('sideBar');
        $('#navBar').addClass('hidden');$('#sideBar').addClass('hidden');$('#mainContenct').addClass('hidden');
        self.activeView('loginView');
    }
    whoami() {
        console.log('THIS is CMainFrm!');
    }
}

export default CMainFrm;