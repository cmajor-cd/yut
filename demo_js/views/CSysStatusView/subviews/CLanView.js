// demo: inlcude private css
yutls.includeCss('./views/CSysStatusView/subviews/CLanView.css');
//
function CLanView(hParent){
    // constructor
    var _this = this;
    //1. internal variant / function
    //init option=> aNodeID [Peremptory], aHtml, aRegCtrlCallBack, aLanguage
    let option = {
            aParent: hParent,
            aNodeID: 'ssvTabLan',
            aHtml: './views/CSysStatusView/subviews/CLanView.html',
            aRegCtrlCallBack: this.regCtrlCb,
            aLanguage: { language: 'cn', 
                        htmlMap: {'cn': _this.cnHtmlMap ,'en': _this.enHtmlMap,},
                        jsMap: {'cn': _this.cnJsMap,'en': _this.enJsMap,} },
            aRenderData: _this.Data,
            aChildViews: [],
            aEvCallback: {evActived: _this.evActivedCb,},
        };
    // init this class-object
    this.init(option);
    //2. exported variant / function
}
CLanView.prototype = new CView();
CLanView.prototype.regCtrlCb = function(){
    //
    $('#ssvTabLanUpdateBtn').click(()=>{
        alert('ssvTabLanUpdateBtn is pressed, update data from server!');
        this.getDatafromServer();
    });
}
CLanView.prototype.getDatafromServer = function(){
    let str = {
        "command":"ssvTabLanUpdateData"
    }
    let parameters = JSON.stringify(str);
    $.ajax({
        type:"POST",
        url: getURL(), //"/cgi-bin/cgi.cgi",
        data:parameters,
        success: (res)=>{
            // 返回参数格式
            //    { "rc": 0/1, "errCode": "xxx"}
        var data = JSON.parse(res);
        if(0 == data.rc){
                this.Data.ssvTabLan1IP = data.dat.ssvTabLan1IP;
                this.Data.ssvTabLan2IP = data.dat.ssvTabLan2IP;
                this.Data.ssvTabDHCPStatus = data.dat.ssvTabDHCPStatus;
            }
            else{
                yutls.msgBox(res);
            }
        }
    });
}
CLanView.prototype.evActivedCb = function(self){
    alert('CLanView: evActived is trigger, update data from local page!');
    console.log('CLanView: evActived is trigger, update data from local page!');
    self.Data.ssvTabLan1IP = "110.1.1.10";
    self.Data.ssvTabLan2IP = "120.1.2.20";
    self.Data.ssvTabDHCPStatus = "Statics";
}
CLanView.prototype.Data = {
    ssvTabLan1IP:"10.1.1.10", ssvTabLan2IP:"10.1.1.20", ssvTabDHCPStatus:"N/A"

}
CLanView.prototype.enHtmlMap = {ssvtlanInforDemoTitle:'This page demos: evActived + ajx + Html/Js sync + provate css', ssvtlanInforTitle:"LAN Information",ssvTabLanUpdateBtn:"Update from Server", ssvtlanInforDemoLine:'This line demo private css !',
};
CLanView.prototype.cnHtmlMap = {ssvtlanInforDemoTitle:'演示事件触发evActived + ajx交互 + Html/Js数据同步 + 私有css', ssvtlanInforTitle:"LAN 信息",ssvTabLanUpdateBtn:"从服务器更新",ssvtlanInforDemoLine:'本行演示私有css的用法!',
};

