/**
 * YangYutong: tools for HTMLMainElement.js
 * 2018-4-12
 */ 

(function(window,undefined){
    //code
    tools = function() {}
    
    tools.viewShow = function(node, visible){ // usage: viewShow( "container", false/true );
        var element = node;
        if ( element == null )
        {
            return;
        }
        
        var className = element.className;
        if ( className == null )
            className = "";
            
        if ( visible ) 
        {
            className = className.replace( / ?hidden/, "" );
        }
        else 
        {
            if ( className.indexOf( "hidden") == -1 )
            {
                if ( className.length > 0 )
                    className += " ";
                
                className += " hidden";                                              
            }                   
        }
        
        element.className = className;          
    }

    //
    tools.msgBox = function(strMsg){
        alert(strMsg);
    }
    //
    tools.msgDebug = function(strMsg){
        console.debug(strMsg);
    }

    //
    tools.ActivateViewByNodeInContainer = function( aViewContainer, viewNode ){ // 注意：本函数只能对主View区的div进行Show操作，过要对sidebar进行类似操作需要重新写实现 
        //dective all view, but the one "nodeView"
        for(element in aViewContainer)
        {
            if(aViewContainer[element].node == viewNode)
                tools.viewShow(aViewContainer[element].node, true);
            else
                tools.viewShow(aViewContainer[element].node, false);
        }
    }
    //
    tools.DeactivateAllViewInContainer = function(aViewContainer){
        //dective all view
        for(element in aViewContainer)
        {
            tools.viewShow(aViewContainer[element].node, false);
        }
    }
    //
    // Includes a script file by writing a script tag.
    tools.includeJs = function(src) {
        document.write("<script type=\"text/javascript\" src=\"" + src + "\"></script>");
    }

    // Includes a style sheet by writing a style tag.
    // tools.includeStyleSheet = function(src) {
    //     document.write("<style type=\"text/css\"> @import url(\"" +  src + "\"); </style>");
    // }
    // Includes a style sheet by writing a style tag.
    tools.includeCss = function(src) {
        // document.write("<style type=\"text/css\"> @import url(\"" +  src + "\"); </style>");
        var _style = document.createElement('style');
        _style.innerHTML = ' @import url(\"' +  src + '\");';
        document.getElementsByTagName('head')[0].appendChild(_style);
    }
    // Localizing: multi-language
    tools.language = 'cn';
    tools.htmlSwitchLang = function(enMap, cnMap){
        if(tools.language == "en"){
            for ( var name in enMap ){
                var element = document.getElementById( name );
                if(null == element){
                    console.log(name);
                }
                else{
                    element.innerHTML = enMap[name];
                }
            }
        }
        //
        if(tools.language == "cn"){
            for ( var name in cnMap ){
                var element = document.getElementById( name );
                if(null == element){
                    console.log(name);
                }
                else{
                    element.innerHTML = cnMap[name];
                }
            }
        }
    }

    tools.jsSwitchLang = function(enMap, cnMap, aItem){
        if(tools.language == "en"){
            return enMap[aItem];
        }
        //
        if(tools.language == "cn"){
            return cnMap[aItem];
        }
    }
    /**
     * 对数字转字符串进行补0操作
    */
   tools.getzf = function(num){
    if(parseInt(num) < 10){
        num = '0' + num;
    }
    return num;
    }
    /**
     * parse the time to yyyy-mm-dd hh:mm:ss
    */
   tools.getDateByYMD = function(ms){
        var timeMs = Number(parseInt(ms));
        var oDate = new Date(timeMs),
            oYear = oDate.getFullYear(),
            oMonth = oDate.getMonth()+1,
            oDay = oDate.getDate(),
            oHour = oDate.getHours(),
            oMin = oDate.getMinutes(),
            oSen = oDate.getSeconds(),
            oTime = oYear +'-'+ tools.getzf(oMonth) +'-'+ tools.getzf(oDay) +' '+ tools.getzf(oHour) +':'+ tools.getzf(oMin) +':'+tools.getzf(oSen);//最后拼接时间
        return oTime;
    }
    /**
     * parse the time to hh:mm:ss
    */
   tools.getDateByHMS = function(ms){
        var timeMs = Number(parseInt(ms));
        var oHour = parseInt(timeMs / (1000 * 60 * 60));
        var oMin = parseInt((timeMs % (1000 * 60 * 60)) / (1000 * 60));
        var oSen = parseInt((timeMs % (1000 * 60)) / 1000);
        var oTime = tools.getzf(oHour) +':'+ tools.getzf(oMin) +':'+tools.getzf(oSen);
        return oTime;
    }
    /**
     * check browser type
    */
   tools.getBrowser = function() {
        var ua = window.navigator.userAgent; 
        //var isIE = window.ActiveXObject != undefined && ua.indexOf("MSIE") != -1; 
        var isIE = !!window.ActiveXObject || "ActiveXObject" in window;
        var isFirefox = ua.indexOf("Firefox") != -1;
        var isOpera = window.opr != undefined;
        var isChrome = ua.indexOf("Chrome") && window.chrome;
        var isSafari = ua.indexOf("Safari") != -1 && ua.indexOf("Version") != -1;
        if (isIE) {
            return "IE";
        } else if (isFirefox) {
            return "Firefox";
        } else if (isOpera) {
            return "Opera";
        } else if (isChrome) {
            return "Chrome";
        } else if (isSafari) {
            return "Safari";
        } else {
            return "Unkown";
        }
    }
    //
    if ( typeof window === "object" && typeof window.document === "object" ) {
        window.tools = tools;
    }
})(window);

