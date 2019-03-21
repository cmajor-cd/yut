// main.js
// include release version
yutls.includeJs('./version.js');
// include views
yutls.includeJs('./views/CDashboardView.js');
yutls.includeJs('./views/CSysMaintView.js');
yutls.includeJs('./views/CSysStatusView/CSysStatusView.js');
yutls.includeJs('./views/CMainFrm.js');

var gDebug = 1;
var gMock = 1;
function getURL(){
    if(gDebug){
        if(gMock)
            return './debug/mock';
        else
            return './debug/action/action.test.php';
    }
    else
        return '/cgi-bin/cgi.cgi';
}
//
// the main entry
function Init()
{
    theApp.setAppName(appName);
    theApp.attachMainFrm(CMainFrm);
}

