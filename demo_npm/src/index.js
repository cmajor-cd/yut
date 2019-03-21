import {yutls,theApp} from 'yut';
import {appName,releaseVer} from './version';
import tools from './js/tools';
import CMainFrm from './views/CMainFrm';
// include views
// import './views/CDashboardView';
// import './views/CSysMaintView';
// import './views/CSysStatusView/CSysStatusView';
// tools.includeStyleSheet('./views/CSysStatusView/subviews/CLanView.css');
tools.setGlobalDebugFlg(1);
tools.setMockDebugFlg(1);

//
// the main entry
function Init()
{
    theApp.setAppName(appName);
    theApp.attachMainFrm(CMainFrm);
}
Init();

// export default Init;

