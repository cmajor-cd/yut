!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,null,[{key:"msgBox",value:function(e){alert(e)}},{key:"msgDebug",value:function(e){console.debug(e)}},{key:"includeJs",value:function(e){document.write('<script type="text/javascript" src="'+e+'"><\/script>')}},{key:"includeCss",value:function(e){document.write('<style type="text/css"> @import url("'+e+'"); </style>')}},{key:"htmlSwitchLang",value:function(e){var t=e.htmlMap[e.language];for(var r in t){var n=document.getElementById(r);null==n?console.log(r):n.innerHTML=t[r]}}},{key:"jsSwitchLang",value:function(e,t){return e.jsMap[e.language][t]}},{key:"getzf",value:function(e){return parseInt(e)<10&&(e="0"+e),e}},{key:"getDateByYMD",value:function(t){var r=Number(parseInt(t)),n=new Date(r),i=n.getFullYear(),a=n.getMonth()+1,o=n.getDate(),l=n.getHours(),s=n.getMinutes(),c=n.getSeconds();return i+"-"+e.getzf(a)+"-"+e.getzf(o)+" "+e.getzf(l)+":"+e.getzf(s)+":"+e.getzf(c)}},{key:"getDateByHMS",value:function(t){var r=Number(parseInt(t)),n=parseInt(r/36e5),i=parseInt(r%36e5/6e4),a=parseInt(r%6e4/1e3);return e.getzf(n)+":"+e.getzf(i)+":"+e.getzf(a)}},{key:"getBrowser",value:function(){var e=window.navigator.userAgent,t=!!window.ActiveXObject||"ActiveXObject"in window,r=-1!=e.indexOf("Firefox"),n=void 0!=window.opr,i=e.indexOf("Chrome")&&window.chrome,a=-1!=e.indexOf("Safari")&&-1!=e.indexOf("Version");return t?"IE":r?"Firefox":n?"Opera":i?"Chrome":a?"Safari":"Unkown"}},{key:"ajaxReq",value:function(){var e=null;if(window.XMLHttpRequest&&!window.ActiveXObject)try{e=new XMLHttpRequest;try{netscape.security.PrivilegeManager.enablePrivilege&&(e._open=e.open,e.open=function(e,t,r){try{netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead"),this._open(e,t,r)}catch(n){this._open(e,t,r)}})}catch(e){}}catch(t){e=null}else if(window.ActiveXObject)try{e=new ActiveXObject("Msxml2.XMLHTTP")}catch(t){try{e=new ActiveXObject("Microsoft.XMLHTTP")}catch(e){return alert("Failed to create XmlHttprequest"),null}}return e}},{key:"ajax",value:function(t){try{var r,n,i=t.url,a=t.type.toLowerCase(),o=function(e){var t="";for(var r in e)t+=r+"="+e[r]+"&";return t.substring(0,t.length-1)}(t.data),l="application/x-www-form-urlencoded;charset=utf-8";if(void 0===t.success)throw"No ajaxParam.success()";r=t.success,n=void 0===t.error?function(e){alert(e)}:t.error;var s=e.ajaxReq()}catch(e){return void alert("XMLHttpRequest catch("+e+")")}if(s.onreadystatechange=function(){var e;if(4==s.readyState){try{e=s.status}catch(e){alert(s.status+e)}if(200==e)null!=s.responseText?r(s.responseText):null!=s.responseXML?r(s.responseXML):n("error:Response is NULL");else if(4==s.readyState&&200!=e&&0!=e){n("error: error status: "+e)}}},"get"==a){var c=i+"?"+o;s.open("GET",c,!0),s.send(null)}else"post"==a&&(s.open("post",i,!0),0!=l&&s.setRequestHeader("Content-Type",l),s.send(o))}},{key:"load",value:function(t,r,n){"function"==typeof n&&void 0!==t&&null!=t&&e.ajax({url:r,type:"POST",success:function(e){t.innerHTML=e,n()},error:n})}}]),e}();t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);this.m_strAppName="",this.m_hMainWnd="",this.m_Store=new CStore}return n(e,null,[{key:"attachMainFrm",value:function(t){if("function"==typeof t&&null!=t&&void 0!=t){var r=new t(this);e.m_hMainWnd=r,r.activeView()}else console.error("theApp.attachMainFrm: invalid class name.")}},{key:"setAppName",value:function(e){null!=e&&void 0!=e&&(this.m_strAppName=e)}},{key:"setMainWnd",value:function(e){null!=e&&void 0!=e&&(this.m_hMainWnd=e)}},{key:"setStoreData",value:function(e){null!=e&&void 0!=e&&this.m_Store.setData(e)}},{key:"getStoreData",value:function(){return this.m_Store.getData()}},{key:"traverseAllViews",value:function(e){!function t(r){if(void 0==r&&null==r||"function"==typeof e&&e(r),r._childViewObjsTree.childView&&r._childViewObjsTree.childView.length>0)for(var n=0;n<r._childViewObjsTree.childView.length;n++)t(r._childViewObjsTree.childView[n])}(this.m_hMainWnd)}},{key:"whoami",value:function(){alert("THIS is theAPP")}}]),e}();t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);this._data={},this._renderData={},this._renderData2CbMap={},this.m_bForceFresh=!1}return n(e,[{key:"regRenderData",value:function(e){if("[object Object]"!=Object.prototype.toString.call(e)&&"[object Array]"!=Object.prototype.toString.call(e))return console.error("the type of aData should be [Object or Array]!"),!1;this._observer(e)}},{key:"_observer",value:function(e){var t=this;"[object Array]"==Object.prototype.toString.call(e)&&this._overrideArrayPrototype(e,path),Object.keys(e).forEach(function(r){var n=e[r];Object.defineProperty(e,r,{get:function(){return n},set:function(e){(this.m_bForceFresh||n!=e)&&("[object Array]"==Object.prototype.toString.call(e)&&this._observer(e),this._renderCb(r,e,n),n=e)}.bind(t)}),"[object Object]"!=Object.prototype.toString.call(e[r])&&"[object Array]"!=Object.prototype.toString.call(e[r])||t._observer(e[r])},this)}},{key:"_overrideArrayPrototype",value:function(e,t){var r,n=Array.prototype,i=Object.create(Array.prototype),a=t;ArrayAction=["push","pop","shift","unshift","short","reverse","splice"],ArrayAction.forEach(function(e){Object.defineProperty(i,e,{value:function(){var t=this.slice();return r=n[e].apply(this,arguments),a._renderCb(this,t),r}})}),e.__proto__=i}},{key:"_renderCb",value:function(e,t,r){var n=this._renderData2CbMap[e];if(void 0!=n){var i=document.getElementById(n);i&&(i.innerHTML=t)}else console.error("CStore._renderCb:: invalid variant! ")}},{key:"setRenderData",value:function(e){this._renderData=e}},{key:"getRenderData",value:function(){return this._renderData}},{key:"actRenderData2CbMap",value:function(e,t,r){switch(e){case"clear":this._renderData2CbMap={};break;case"add":this._renderData2CbMap[t]=r;break;case"del":delete this._renderData2CbMap[t];break;default:console.error("CStore:: unknow action in actRenderData2CbMap! ")}}},{key:"setData",value:function(e){null!=e&&void 0!=e&&(this._data=e)}},{key:"getData",value:function(){return this._data}}]),e}();t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.handlers={}}return n(e,[{key:"addEvent",value:function(e,t){void 0===this.handlers[e]&&(this.handlers[e]=[]),this.handlers[e].push(t)}},{key:"triggerEvent",value:function(e){if(e.target||(e.target=this),this.handlers[e.type]instanceof Array)for(var t=this.handlers[e.type],r=0;r<t.length;r++)t[r](e)}},{key:"removeEvHandler",value:function(e,t){if(this.handlers[e]instanceof Array){var r=this.handlers[e],n=0;for(n=0;n<r.length&&r[n]!=t;n++);r.splice(n,1)}}}]),e}();t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=c(r(1)),o=c(r(2)),l=c(r(3)),s=c(r(0));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);this._hParent=0,this._strViewID="",this._strHtmlSrc="",this._hRegCtrlCb=0,this._oLanguage={},this._viewStore=new o.default,this._childViewsArray=[],this._childViewObjsTree={mounted:0,childView:[]},this._oEvCallback={},this._evView=["evMounted","evActived"],this._evFactory=new l.default;for(var t=0;t<this._evView.length;t++){switch(this._evView[t]){case"evMounted":this._evFactory.addEvent("evMounted",this._defaultevViewMounted);break;case"evActived":this._evFactory.addEvent("evActived",this._defaultevActivedView)}}}return i(e,[{key:"init",value:function(e){if(null==e||void 0==e||null==e.aParent||void 0==e.aParent||null==e.aNodeID||void 0==e.aNodeID)return alert("CView: option parameter is Invalid! Pls, check!"),console.error("CView: option parameter is Invalid"),void console.error(e);this._hParent=e.aParent,this._childViewObjsTree.mounted=0,this._strHtmlSrc=e.aHtml,this._hRegCtrlCb=e.aRegCtrlCallBack,this._oLanguage=e.aLanguage,void 0!=e.aChildViews&&(this._childViewsArray=e.aChildViews),void 0!=e.aRenderData&&this._viewStore.setRenderData(e.aRenderData),void 0!=e.aEvCallback&&(this._oEvCallback=e.aEvCallback),this._strViewID=e.aNodeID,this.node=document.getElementById(e.aNodeID),this._loadHtml()}},{key:"_loadHtml",value:function(){var e=this;null==this._strHtmlSrc||void 0==this._strHtmlSrc?console.error("CView._loadHtml, no html exists."):s.default.load(this.node,this._strHtmlSrc,function(){s.default.htmlSwitchLang(e._oLanguage),e._convertVarInHtml(),e._hRegCtrlCb(),e.forceRefreshRender(),e._createChildViews()})}},{key:"forceRefreshRender",value:function(e){var t=this,r=void 0;null!=e&&void 0!=e||(r=this._viewStore.getRenderData()),this._viewStore.m_bForceFresh=!0,Object.keys(r).forEach(function(e){var n=r[e];"[object Object]"!=Object.prototype.toString.call(n)&&"[object Array]"!=Object.prototype.toString.call(n)||t.forceRefreshRender(n),t._viewStore._renderData[e]=n}),this._viewStore.m_bForceFresh=!1}},{key:"_convertVarInHtml",value:function(){var e=this,t=this._strViewID;this._viewStore.actRenderData2CbMap("clear");var r=this._viewStore.getRenderData();Object.keys(r).forEach(function(r){for(var n=r,i=e.node.getElementsByTagName("a"),a=0;a<i.length;a++)if(-1!=i[a].text.indexOf("{{"+n+"}}")){var o=t+"-"+n;i[a].id=o,e._viewStore.actRenderData2CbMap("add",n,o)}}),this._viewStore.regRenderData(r)}},{key:"_createChildViews",value:function(){if(this._childViewsArray instanceof Array){var e=this._childViewsArray.length;if(0==e)this._childViewObjsTree.mounted=1,this._evFactory.triggerEvent({type:"evMounted",sender:{viewID:this._strViewID,self:this,parentHandle:this._hParent}});else{for(var t=[],r=0;r<e;r++){if("function"!=typeof this._childViewsArray[r]||null==this._childViewsArray[r]||void 0==this._childViewsArray[r])return void console.error("CView._createChildViews: invalid class name.");var n=new this._childViewsArray[r](this);t[r]=n}this._childViewObjsTree.childView=t}}else console.error("CView._createChildViews input parameter is invalid!")}},{key:"_defaultevViewMounted",value:function(e){!function e(t){var r=t;if(r!=a.default){var i=r._childViewObjsTree.childView,o=!0;if(null==i||void 0==i)r._childViewObjsTree.mounted=1;else for(var l=i.length,s=0;s<l;s++)0==i[s]._childViewObjsTree.mounted&&(o=!1);o&&(r._childViewObjsTree.mounted=1,"function"==n(r._oEvCallback.evMounted)&&r._oEvCallback.evMounted(r),e(r._hParent))}else console.warn("THIS is theAPP, stop event loop")}(e.sender.self)}},{key:"_defaultevActivedView",value:function(e){var t=e.sender.self;"function"==n(t._oEvCallback.evActived)&&t._oEvCallback.evActived(t)}},{key:"regEvHandler",value:function(e){for(var t=!1,r=0;r<this._evView.length;r++)if(e.evType==this._evView[r]){t=!0,this._oEvCallback[e.evType]=e.evCallback;break}t||console.error("CView.regEvHandler: no evType is found("+e.evType+")")}},{key:"unRegEvHandler",value:function(e){for(var t=!1,r=0;r<this._evView.length;r++)if(e==this._evView[r]){t=!0,delete this._oEvCallback[e];break}t||console.error("CView.unRegEvHandler: no evType is found("+e+")")}},{key:"_showView",value:function(e,t){var r=e;if(null!=r){var n=r.className;null==n&&(n=""),t?n=n.replace(/ ?hidden/,""):-1==n.indexOf("hidden")&&(n.length>0&&(n+=" "),n+=" hidden"),r.className=n}}},{key:"activeView",value:function(){if(0==arguments.length)console.log("CView.activeView input 0 => arg is null,means the view will active itself."),this._evFactory.triggerEvent({type:"evActived",sender:{viewID:this._strViewID,self:this}}),this._showView(this.node,!0);else{for(var e in this._childViewObjsTree.childView)this._showView(this._childViewObjsTree.childView[parseInt(e)].node,!1);for(var t=0;t<arguments.length;t++){var r=arguments[t];for(var n in this._childViewObjsTree.childView){var i=this._childViewObjsTree.childView[parseInt(n)];i._strViewID==r&&(i._evFactory.triggerEvent({type:"evActived",sender:{viewID:this._strViewID,self:i}}),this._showView(i.node,!0))}}}}}]),e}();t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.dat="this is test!"}return n(e,[{key:"getDat",value:function(){return this.dat}}]),e}();t.default=i},function(e,t,r){"use strict";r.r(t);var n=r(0),i=r.n(n);r.d(t,"yutls",function(){return i.a});var a=r(1),o=r.n(a);r.d(t,"theApp",function(){return o.a});var l=r(4),s=r.n(l);r.d(t,"CView",function(){return s.a});var c=r(3),u=r.n(c);r.d(t,"CEvent",function(){return u.a});var f=r(2),d=r.n(f);r.d(t,"CStore",function(){return d.a});var v=r(5),h=r.n(v);r.d(t,"CTest",function(){return h.a})}])});
//# sourceMappingURL=yut.js.map