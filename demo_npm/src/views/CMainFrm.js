/**
 * main frame 主类定义
*/
import {yutls, theApp, CView, CTest} from 'yut';
import {appName,releaseVer} from '../version';
import CDashboardView from './CDashboardView';
import CSysMaintView from './CSysMaintView';
import CSysStatusView from './CSysStatusView/CSysStatusView';

class CMainFrm extends CView{ // ! inherit from CView !
    constructor(hParent) {
        // supper call before user 'this' pointer.
        super();
        let _this = this;
        //1. internal variant / function
        _this.Data = {
            version: releaseVer,
        };
        _this.enHtmlMap = {footerTitle:"YUT Demo | All right reserved, 2018. ", dashboardEntry:"Dashboard",sysStatusViewEntry: "System", txtSystemToolsItem:"Tools",sysMaintViewEntryTxt:"SysMaint",};
        _this.cnHtmlMap = {footerTitle:"YUT Demo | 版权所有, 2018. ", dashboardEntry:"仪表板",sysStatusViewEntry: "系统状态", txtSystemToolsItem:"系统工具",sysMaintViewEntryTxt:"系统维护",};
        //init option=> aNodeID [Peremptory], aHtml, aRegCtrlCallBack, aLanguage
        let option = {
            aParent: hParent,
            aNodeID: 'mainFrm',
            aHtml: './src/views/CMainFrm.html',
            aRegCtrlCallBack: _this.regCtrlCb,
            aLanguage: {
            language: 'cn',
                htmlMap: { 'cn': _this.cnHtmlMap, 'en': _this.enHtmlMap, },
                jsMap: { 'cn': _this.cnJsMap, 'en': _this.enJsMap, }
            },
            aRenderData: _this.Data,
            aChildViews: [CDashboardView, CSysStatusView, CSysMaintView],
            aEvCallback: { evMounted: _this.evMainFrmMounted, evActived: _this.evMainFrmActived },
        };
        _this.init(option);
    }
    regCtrlCb() {
        //demo: change language Globally.
        $('#langSelector').change(() => {
            function reloadHtmlCb(node) {
                node._oLanguage.language = newLan;
                yutls.htmlSwitchLang(node._oLanguage);
            }
            //
            let newLan = $('#langSelector').children('option:selected').val();
            theApp.traverseAllViews(reloadHtmlCb);
        });
        // $('#titleRefreshBtn').click(function(){
        //     alert('titleRefreshBtn is clicked');
        //     console.log('titleRefreshBtn is clicked');
        // });
        //
        $('#dashboardEntry').click(() => { this.activeView('dashboardView'); });
        $('#sysStatusViewEntry').click(() => { this.activeView('sysStatusView'); });
        $('#sysMaintViewEntry').click(() => { this.activeView('sysMaintView'); });
    }
    evMainFrmActived(self) {
        console.log('CMainFrm evActived CALLED!');
    }
    evMainFrmMounted(self) {
        console.log('CMainFrm envMounted CALLED!');
        self.whoami();
    }
    whoami() {
        console.log('THIS is CMainFrm!');
    }
}
// CMainFrm.prototype = new CView(); // ! inherit from CView !
// CMainFrm.prototype.Data = {
//     version: releaseVer,
// }
// CMainFrm.prototype.enHtmlMap = {footerTitle:"YUT Demo | All right reserved, 2018. ", dashboardEntry:"Dashboard",sysStatusViewEntry: "System", txtSystemToolsItem:"Tools",sysMaintViewEntryTxt:"SysMaint",};
// CMainFrm.prototype.cnHtmlMap = {footerTitle:"YUT Demo | 版权所有, 2018. ", dashboardEntry:"仪表板",sysStatusViewEntry: "系统状态", txtSystemToolsItem:"系统工具",sysMaintViewEntryTxt:"系统维护",};

export default CMainFrm;