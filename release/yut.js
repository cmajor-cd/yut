!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);this.m_strAppName="",this.m_hMainWnd="",this.m_Store=new CStore}return r(e,null,[{key:"attachMainFrm",value:function(t){if("function"==typeof t&&null!=t&&null!=t){var n=new t(this);e.m_hMainWnd=n,n.activeView()}else console.error("theApp.attachMainFrm: invalid class name.")}},{key:"setAppName",value:function(e){null!=e&&null!=e&&(this.m_strAppName=e)}},{key:"setMainWnd",value:function(e){null!=e&&null!=e&&(this.m_hMainWnd=e)}},{key:"setStoreData",value:function(e){null!=e&&null!=e&&this.m_Store.setData(e)}},{key:"getStoreData",value:function(){return this.m_Store.getData()}},{key:"traverseAllViews",value:function(e){!function t(n){if(null==n&&null==n||"function"==typeof e&&e(n),n._childViewObjsTree.childView&&n._childViewObjsTree.childView.length>0)for(var r=0;r<n._childViewObjsTree.childView.length;r++)t(n._childViewObjsTree.childView[r])}(this.m_hMainWnd)}},{key:"whoami",value:function(){alert("THIS is theAPP")}}]),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.gDebugLinkData=0}return r(e,null,[{key:"setGlobalServerLinkData",value:function(e){null!=e&&null!=e?this.gDebugLinkData=e:this.msgBox("invalid input data!")}},{key:"getDebugURL",value:function(){var e=this.gDebugLinkData.type;return this.gDebugLinkData.link[e]}},{key:"msgBox",value:function(e){alert(e)}},{key:"msgDebug",value:function(e){console.debug(e)}},{key:"msgBoxFailed",value:function(e){var t;t="Operation failed!"+e,console.error(e),alert(t)}},{key:"includeJs",value:function(e){document.write('<script type="text/javascript" src="'+e+'"><\/script>')}},{key:"includeCss",value:function(e){var t=document.createElement("style");t.innerHTML=' @import url("'+e+'");',document.getElementsByTagName("head")[0].appendChild(t)}},{key:"htmlSwitchLang",value:function(e){var t=e.htmlMap[e.language];for(var n in t){var r=document.getElementById(n);null==r?console.log(n):r.innerHTML=t[n]}}},{key:"jsSwitchLang",value:function(e,t){return e.jsMap[e.language][t]}},{key:"getzf",value:function(e){return parseInt(e)<10&&(e="0"+e),e}},{key:"getTimestamp",value:function(e){var t=e;return t=(t=t.substring(0,19)).replace(/-/g,"/"),new Date(t).getTime()}},{key:"getDateByYMD",value:function(t){var n=Number(parseInt(t)),r=new Date(n),i=r.getFullYear(),a=r.getMonth()+1,o=r.getDate(),l=r.getHours(),s=r.getMinutes(),c=r.getSeconds();return i+"-"+e.getzf(a)+"-"+e.getzf(o)+" "+e.getzf(l)+":"+e.getzf(s)+":"+e.getzf(c)}},{key:"getDateByHMS",value:function(t){var n=Number(parseInt(t)),r=parseInt(n/36e5),i=parseInt(n%36e5/6e4),a=parseInt(n%6e4/1e3);return e.getzf(r)+":"+e.getzf(i)+":"+e.getzf(a)}},{key:"getBrowser",value:function(){var e=window.navigator.userAgent,t=!!window.ActiveXObject||"ActiveXObject"in window,n=-1!=e.indexOf("Firefox"),r=null!=window.opr,i=e.indexOf("Chrome")&&window.chrome,a=-1!=e.indexOf("Safari")&&-1!=e.indexOf("Version");return t?"IE":n?"Firefox":r?"Opera":i?"Chrome":a?"Safari":"Unkown"}},{key:"chkIpAddress",value:function(e){return null!=e.match(/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/)}},{key:"chkMacAddress",value:function(e){return null!=e.match(/^([A-Fa-f0-9]{2}[-,:]){5}[A-Fa-f0-9]{2}$/)}},{key:"chkImeiAddress",value:function(e){return null!=e.match(/^[A-Za-z]{3}[0-9]{5}$/)}},{key:"ajaxReq",value:function(){var e=null;if(window.XMLHttpRequest&&!window.ActiveXObject)try{e=new XMLHttpRequest;try{netscape.security.PrivilegeManager.enablePrivilege&&(e._open=e.open,e.open=function(e,t,n){try{netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead"),this._open(e,t,n)}catch(r){this._open(e,t,n)}})}catch(e){}}catch(t){e=null}else if(window.ActiveXObject)try{e=new ActiveXObject("Msxml2.XMLHTTP")}catch(t){try{e=new ActiveXObject("Microsoft.XMLHTTP")}catch(e){return alert("Failed to create XmlHttprequest"),null}}return e}},{key:"ajax",value:function(t){try{var n,r,i=t.url,a=t.type.toLowerCase(),o=function(e){var t="";for(var n in e)t+=n+"="+e[n]+"&";return t.substring(0,t.length-1)}(t.data),l="application/x-www-form-urlencoded;charset=utf-8";if(void 0===t.success)throw"No ajaxParam.success()";n=t.success,r=void 0===t.error?function(e){alert(e)}:t.error;var s=e.ajaxReq()}catch(e){return void alert("XMLHttpRequest catch("+e+")")}if(s.onreadystatechange=function(){var e;if(4==s.readyState){try{e=s.status}catch(e){alert(s.status+e)}if(200==e)null!=s.responseText?n(s.responseText):null!=s.responseXML?n(s.responseXML):r("error:Response is NULL");else if(4==s.readyState&&200!=e&&0!=e){r("error: error status: "+e)}}},"get"==a){var c=i+"?"+o;s.open("GET",c,!0),s.send(null)}else"post"==a&&(s.open("post",i,!0),0!=l&&s.setRequestHeader("Content-Type",l),console.log("ajax->aParam:"+o),s.send(o))}},{key:"load",value:function(e,t,n){"function"==typeof n&&void 0!==e&&null!=e&&(e.innerHTML=t,n())}}]),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);this._data={},this._renderData={},this._renderData2CbMap={},this.m_bForceFresh=!1}return r(e,[{key:"regRenderData",value:function(e){if("[object Object]"!=Object.prototype.toString.call(e)&&"[object Array]"!=Object.prototype.toString.call(e))return console.error("the type of aData should be [Object or Array]!"),!1;this._observer(e)}},{key:"_observer",value:function(e){var t=this;"[object Array]"==Object.prototype.toString.call(e)&&this._overrideArrayPrototype(e,path),Object.keys(e).forEach(function(n){var r=e[n];Object.defineProperty(e,n,{get:function(){return r},set:function(e){(this.m_bForceFresh||r!=e)&&("[object Array]"==Object.prototype.toString.call(e)&&this._observer(e),this._renderCb(n,e,r),r=e)}.bind(t)}),"[object Object]"!=Object.prototype.toString.call(e[n])&&"[object Array]"!=Object.prototype.toString.call(e[n])||t._observer(e[n])},this)}},{key:"_overrideArrayPrototype",value:function(e,t){var n,r=Array.prototype,i=Object.create(Array.prototype),a=t;ArrayAction=["push","pop","shift","unshift","short","reverse","splice"],ArrayAction.forEach(function(e){Object.defineProperty(i,e,{value:function(){var t=this.slice();return n=r[e].apply(this,arguments),a._renderCb(this,t),n}})}),e.__proto__=i}},{key:"_renderCb",value:function(e,t,n){var r=this._renderData2CbMap[e];if(null!=r){var i=document.getElementById(r);i&&(i.innerHTML=t)}else console.warn("CStore._renderCb:: invalid variant! ")}},{key:"setRenderData",value:function(e){this._renderData=e}},{key:"getRenderData",value:function(){return this._renderData}},{key:"actRenderData2CbMap",value:function(e,t,n){switch(e){case"clear":this._renderData2CbMap={};break;case"add":this._renderData2CbMap[t]=n;break;case"del":delete this._renderData2CbMap[t];break;default:console.error("CStore:: unknow action in actRenderData2CbMap! ")}}},{key:"setData",value:function(e){null!=e&&null!=e&&(this._data=e)}},{key:"getData",value:function(){return this._data}}]),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.handlers={}}return r(e,[{key:"addEvent",value:function(e,t){void 0===this.handlers[e]&&(this.handlers[e]=[]),this.handlers[e].push(t)}},{key:"triggerEvent",value:function(e){if(e.target||(e.target=this),this.handlers[e.type]instanceof Array)for(var t=this.handlers[e.type],n=0;n<t.length;n++)t[n](e)}},{key:"removeEvHandler",value:function(e,t){if(this.handlers[e]instanceof Array){var n=this.handlers[e],r=0;for(r=0;r<n.length&&n[r]!=t;r++);n.splice(r,1)}}}]),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=c(n(0)),o=c(n(2)),l=c(n(3)),s=c(n(1));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);this._hParent=0,this._strViewID="",this._strHtmlSrc="",this._hRegCtrlCb=0,this._oLanguage={},this._viewStore=new o.default,this._childViewsArray=[],this._childViewObjsTree={mounted:0,evMountedTriggered:0,childView:[]},this._oEvCallback={},this._evView=["evMounted","evActived","evDeactived"],this._evFactory=new l.default;for(var t=0;t<this._evView.length;t++){switch(this._evView[t]){case"evMounted":this._evFactory.addEvent("evMounted",this._defaultevViewMounted);break;case"evActived":this._evFactory.addEvent("evActived",this._defaultevActivedView);break;case"evDeactived":this._evFactory.addEvent("evDeactived",this._defaultevDeactivedView)}}}return i(e,[{key:"init",value:function(e){if(null==e||null==e||null==e.aParent||null==e.aParent||null==e.aNodeID||null==e.aNodeID)return alert("CView: option parameter is Invalid! Pls, check!"),console.error("CView: option parameter is Invalid"),void console.error(e);this._hParent=e.aParent,this._childViewObjsTree.mounted=0,this._strHtmlSrc=e.aHtml,this._hRegCtrlCb=e.aRegCtrlCallBack,this._oLanguage=e.aLanguage,null!=e.aChildViews&&(this._childViewsArray=e.aChildViews),null!=e.aRenderData&&this._viewStore.setRenderData(e.aRenderData),null!=e.aEvCallback&&(this._oEvCallback=e.aEvCallback),this._strViewID=e.aNodeID,this.node=document.getElementById(e.aNodeID),this._loadHtml()}},{key:"_loadHtml",value:function(){var e=this;null==this._strHtmlSrc||null==this._strHtmlSrc?console.error("CView._loadHtml, no html exists."):s.default.load(this.node,this._strHtmlSrc,function(){s.default.htmlSwitchLang(e._oLanguage),e._convertVarInHtml(),e._hRegCtrlCb(),e.forceRefreshRender(),e._createChildViews()})}},{key:"forceRefreshRender",value:function(e){var t=this,n=void 0;null!=e&&null!=e||(n=this._viewStore.getRenderData()),this._viewStore.m_bForceFresh=!0,Object.keys(n).forEach(function(e){var r=n[e];"[object Object]"!=Object.prototype.toString.call(r)&&"[object Array]"!=Object.prototype.toString.call(r)||t.forceRefreshRender(r),t._viewStore._renderData[e]=r}),this._viewStore.m_bForceFresh=!1}},{key:"_convertVarInHtml",value:function(){var e=this,t=this._strViewID;this._viewStore.actRenderData2CbMap("clear");var n=this._viewStore.getRenderData();Object.keys(n).forEach(function(n){for(var r=n,i=e.node.getElementsByTagName("a"),a=0;a<i.length;a++)if(-1!=i[a].text.indexOf("{{"+r+"}}")){var o=t+"-"+r;i[a].id=o,e._viewStore.actRenderData2CbMap("add",r,o)}}),this._viewStore.regRenderData(n)}},{key:"_createChildViews",value:function(){if(this._childViewsArray instanceof Array){var e=this._childViewsArray.length;if(0==e)this._childViewObjsTree.mounted=1,this._evFactory.triggerEvent({type:"evMounted",sender:{viewID:this._strViewID,self:this,parentHandle:this._hParent}});else{for(var t=[],n=0;n<e;n++){if("function"!=typeof this._childViewsArray[n]||null==this._childViewsArray[n]||null==this._childViewsArray[n])return void console.error("CView._createChildViews: invalid class name.");var r=new this._childViewsArray[n](this);t[n]=r}this._childViewObjsTree.childView=t}}else console.error("CView._createChildViews input parameter is invalid!")}},{key:"_defaultevViewMounted",value:function(e){!function e(t){var n=t;if(n!=a.default){var i=n._childViewObjsTree.childView,o=!0;if(null==i||null==i)n._childViewObjsTree.mounted=1;else for(var l=i.length,s=0;s<l;s++)0==i[s]._childViewObjsTree.mounted&&(o=!1);if(o){n._childViewObjsTree.mounted=1;var c=r(n._oEvCallback.evMounted);0==n._childViewObjsTree.evMountedTriggered&&"function"==c&&(n._oEvCallback.evMounted(n),n._childViewObjsTree.evMountedTriggered=1),e(n._hParent)}}else console.warn("THIS is theAPP, stop event loop")}(e.sender.self)}},{key:"_defaultevActivedView",value:function(e){var t=e.sender.self;"function"==r(t._oEvCallback.evActived)&&t._oEvCallback.evActived(t)}},{key:"_defaultevDeactivedView",value:function(e){var t=e.sender.self;"function"==r(t._oEvCallback.evDeactived)&&t._oEvCallback.evDeactived(t)}},{key:"regEvHandler",value:function(e){for(var t=!1,n=0;n<this._evView.length;n++)if(e.evType==this._evView[n]){t=!0,this._oEvCallback[e.evType]=e.evCallback;break}t||console.error("CView.regEvHandler: no evType is found("+e.evType+")")}},{key:"unRegEvHandler",value:function(e){for(var t=!1,n=0;n<this._evView.length;n++)if(e==this._evView[n]){t=!0,delete this._oEvCallback[e];break}t||console.error("CView.unRegEvHandler: no evType is found("+e+")")}},{key:"_showView",value:function(e,t){var n=e;if(null!=n){var r=n.className;null==r&&(r=""),t?r=r.replace(/ ?hidden/,""):-1==r.indexOf("hidden")&&(r.length>0&&(r+=" "),r+=" hidden"),n.className=r}}},{key:"activeView",value:function(){if(0==arguments.length)console.log("CView.activeView input 0 => arg is null,means the view will active itself."),this._showView(this.node,!0),this._evFactory.triggerEvent({type:"evActived",sender:{viewID:this._strViewID,self:this}});else{for(var e in this._childViewObjsTree.childView)this._showView(this._childViewObjsTree.childView[parseInt(e)].node,!1);for(var t=0;t<arguments.length;t++){var n=arguments[t];for(var r in this._childViewObjsTree.childView){var i=this._childViewObjsTree.childView[parseInt(r)];i._strViewID==n&&(this._showView(i.node,!0),i._evFactory.triggerEvent({type:"evActived",sender:{viewID:this._strViewID,self:i}}))}}}}},{key:"deactiveView",value:function(){if(0==arguments.length)console.log("CView.deactiveView input 0 => arg is null,means the view will deactiveView itself."),this._showView(this.node,!1),this._evFactory.triggerEvent({type:"evDeactived",sender:{viewID:this._strViewID,self:this}});else for(var e=0;e<arguments.length;e++){var t=arguments[e];for(var n in this._childViewObjsTree.childView){var r=this._childViewObjsTree.childView[parseInt(n)];r._strViewID==t&&(this._showView(r.node,!1),r._evFactory.triggerEvent({type:"evDeactived",sender:{viewID:this._strViewID,self:r}}))}}}}]),e}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.dat="this is test!"}return r(e,[{key:"getDat",value:function(){return this.dat}}]),e}();t.default=i},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(1),o=n.n(a);var l=class{constructor(){this.name="YUT framework",this.releaseVer="1.0.x"}},s=n(4),c=n.n(s),u=n(3),d=n.n(u),f=n(2),v=n.n(f),h=n(5),y=n.n(h);n.d(t,"yutVersion",function(){return l}),n.d(t,"yutls",function(){return o.a}),n.d(t,"theApp",function(){return i.a}),n.d(t,"CView",function(){return c.a}),n.d(t,"CEvent",function(){return d.a}),n.d(t,"CStore",function(){return v.a}),n.d(t,"CTest",function(){return y.a})}])});
//# sourceMappingURL=yut.js.map