import {yutls,theApp} from 'yut';
import {appName,releaseVer} from './version';
import CMainFrm from './views/CMainFrm';
// import tools from './js/tools';
// include views
// import './views/CDashboardView';
// import './views/CSysMaintView';
// import './views/CSysStatusView/CSysStatusView';
var data = {'noDebug':'/cgi-bin/cgi.cgi',
            'mock':'./debug/mock',
            'php':'./debug/action/action.test.php'};
yutls.setGlobalDebugFlg(data, 'mock');

//
// the main entry
function Init()
{
    theApp.setAppName(appName);
    theApp.attachMainFrm(CMainFrm);
}
Init();

