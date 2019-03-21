# yut
A light web client app js framework, that based on OOP. You can say it's writed for C++ programmer.
# how to use?
## usage of npm ##
* instal npm lib
```
npm install yut
```
* import class from yut in your source JavaScript files.
```
import { yutls, theApp, CView } from 'yut';
```
* Create CMainFrm and the other windows by the TEMPLATE, and then attached to theAPP; theAPP that is created by 'yut framework' automatically.
```
[in CMainFrm.js / CMainFrm.html]
class CMainFrm extends CView{ // ! inherit from CView !
    ...
  }
[in index.js]
theApp.setAppName(appName);
theApp.attachMainFrm(CMainFrm);

```
## usage of native JS ##
* include yut lib, and named the <body> to 'mainFrm', and then set the init entry to body onload=''
```
[in index.html]
  <script src="../release/yut.js"></script>
  <body id="mainFrm" onload="Init()">
```
* Create CMainFrm and the other windows by the TEMPLATE, and then attached to theAPP; theAPP that is created by 'yut framework' automatically.
```
[in CMainFrm.js / CMainFrm.html; ES2015/ES2016 are OK.]
class CMainFrm extends CView{ // ! inherit from CView !
    ...
  }
[in index.js]
function Init()
{
    theApp.setAppName(appName);
    theApp.attachMainFrm(CMainFrm);
}
```

# export and import
'cause the compatibility of node/ES6, the import failed will be found if export the source files from 'index.js'. The solution is export the lib by 'release/yut.js'. So, the main entry of 'package.json' is set to [ "main": "./release/yut.js", ].
