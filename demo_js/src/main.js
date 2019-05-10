// main.js
// include release version
yutls.includeJs('./src/version.js');
// include views
yutls.includeJs('./src/views/CDashboardView.js');
yutls.includeJs('./src/views/CSysMaintView.js');
yutls.includeJs('./src/views/CSysStatusView/CSysStatusView.js');
yutls.includeJs('./src/views/CLogView.js');
yutls.includeJs('./src/views/CMainFrm.js');

var gDebug = 1;
var gMock = 1;
function getURL(){
    if(gDebug){
        if(gMock)
            return './debug/mock'; //TODO replace this link to your real one!!!!
        else
            return './debug/action/action.test.php'; //TODO replace this link to your real one!!!!
    }
    else
        //TODO replace this link to your real one!!!!
        return '/cgi-bin/cgi.cgi';
}
//
// the main entry
function Init()
{
    theApp.setAppName(appName);
    theApp.attachMainFrm(CMainFrm);
}

