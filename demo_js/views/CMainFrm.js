/**
 * main frame 主类定义
*/
// yutools.includeJs('./views/CDashboardView.js');
// yutools.includeJs('./views/CSysMaintView.js');
function CMainFrm(hParent){
    let _this = this;
    let option = {
        aParent: hParent,
        aNodeID: 'mainFrm',
        aHtml: './views/CMainFrm.html',
        aRegCtrlCallBack: _this.regCtrlCb,
        aLanguage: { language: 'cn',//'en'
                    htmlMap: {'cn': _this.cnHtmlMap ,'en': _this.enHtmlMap,},
                    jsMap: {'cn': _this.cnJsMap,'en': _this.enJsMap,} },
        aRenderData: _this.Data,
        aChildViews: [CDashboardView,CSysStatusView, CSysMaintView], //! childviews, will be created by this line !!
        aEvCallback: {evMounted: _this.evMainFrmMounted, evActived: _this.evMainFrmActived},
    };
    _this.init(option);
}
CMainFrm.prototype = new CView(); // ! inherit from CView !
CMainFrm.prototype.regCtrlCb = function(){
    //demo: change language Globally.
    $('#langSelector').change(()=>{
        function reloadHtmlCb(node){
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
    $('#dashboardEntry').click(()=>{ this.activeView('dashboardView'); });
    $('#sysStatusViewEntry').click(()=>{ this.activeView('sysStatusView'); });
    $('#sysMaintViewEntry').click(()=>{ this.activeView('sysMaintView'); });
}
CMainFrm.prototype.evMainFrmActived = function(self){ // or use: (self)=>{}
    console.log('CMainFrm evActived CALLED!');
}
CMainFrm.prototype.evMainFrmMounted = function(self){
    console.log('CMainFrm envMounted CALLED!');
    self.whoami();
}
CMainFrm.prototype.whoami = function(){
    console.log('THIS is CMainFrm!');
}
CMainFrm.prototype.Data = {
    version: releaseVer,
}
CMainFrm.prototype.enHtmlMap = {footerTitle:"YUT Demo | All right reserved, 2018. ", dashboardEntry:"Dashboard",sysStatusViewEntry: "System", txtSystemToolsItem:"Tools",sysMaintViewEntryTxt:"SysMaint",};
CMainFrm.prototype.cnHtmlMap = {footerTitle:"YUT Demo | 版权所有, 2018. ", dashboardEntry:"仪表板",sysStatusViewEntry: "系统状态", txtSystemToolsItem:"系统工具",sysMaintViewEntryTxt:"系统维护",};


