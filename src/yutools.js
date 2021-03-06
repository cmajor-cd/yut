/**
 * Tools set for yutls
 * Anthor: YangYutong
 * Create: 2018-4-12
 * change log:
 * 2018-12-13: change to class type with 'static' keyword, to force usage by class name. e.g. yutls.msgDebug()
 */
class yutls {
    constructor() {
        this.gDebugLinkData = 0;
        // this.gDebugFlg = 0;
        // this.gMsgLog = 'yut log: ';
        // this.gMsgWarning = 'yut warning: ';
        // this.gMsgError = 'yut error: ';
    }
   static logHeader(){ return 'yut log: '; }
   static WarningHeader(){ return 'yut warning: '; }
   static errorHeader(){ return 'yut error: '; }
    //-debug functions
    /**
     * set status of debug, and set the return string of debug url.
     * @param data: object of {debug:url string}.
     *  e.g. 
     *  data:{
     *    type: 'mock',   //!!! IMPORTANT, 根据您的需求设置该值. e.g.实际量产时填写 'real'
     *    link: {         //!!! 请将以下链接填写为自己的真实链接 !!!
     *        'real':'/cgi-bin/cgi.cgi',
     *        'mock':'./debug/mock',
     *        'php':'./debug/action/action.test.php'}
     *}
     *   setGlobalDebugFlg(data');
     *   ...
     *   getDebugUrl(); => this line return './debug/mock'
     */
    static setGlobalServerLinkData(data){
        if ((data == null) || (data == undefined)) {
            this.msgBox('invalid input data!');
            return;
        }
        //
            this.gDebugLinkData = data;
    }
    static getDebugURL(){
        let type = this.gDebugLinkData.type;
        return this.gDebugLinkData.link[type];
    }
    //---
    static msgBox(strMsg) {
        alert(strMsg);
    }
    //
    static msgDebug(strMsg) {
        console.debug(strMsg);
    }
    //
    static msgBoxFailed(strMsg){
        var msg = "";
        msg = "Operation failed!" + strMsg;
        console.error(strMsg);
        alert(msg);
    }
    // Includes a script file by writing a script tag.
    static includeJs(src) {
        document.write("<script type=\"text/javascript\" src=\"" + src + "\"></script>");
    }
    // Includes a style sheet by writing a style tag.
    static includeCss(src) {
        // document.write("<style type=\"text/css\"> @import url(\"" +  src + "\"); </style>");
        var _style = document.createElement('style');
        _style.innerHTML = ' @import url(\"' +  src + '\");';
        document.getElementsByTagName('head')[0].appendChild(_style);
        // console.log(_style.innerHTML);
    }
    /* -- Localizing: multi-language ---
        * aLanguage: { language: 'cn',
        *               htmlMap: {'cn': cnHtmlMap ,'en': enHtmlMap,},
        *               jsMap: {'cn': cnJsMap ,'en': enJsMap,} },
        */
    static htmlSwitchLang(aOption) {
        var map = aOption.htmlMap[aOption.language];
        for (var name in map) {
            var element = document.getElementById(name);
            if (null == element) {
                console.log(name);
            }
            else {
                element.innerHTML = map[name];
            }
        }
    }
    static jsSwitchLang(aOption, aItem) {
        var map = aOption.jsMap[aOption.language];
        return map[aItem];
    }
    /**
     * convert number to string, and fill '0' before the number.
    */
    static getzf(num) {
        if (parseInt(num) < 10) {
            num = '0' + num;
        }
        return num;
    }
    /**
     * parse string to timestamp
     */
    static getTimestamp(aSz){
        // var date = '2015-03-05 17:59:00.0';
        var date = aSz;
        date = date.substring(0,19);    
        date = date.replace(/-/g,'/'); 
        var timestamp = new Date(date).getTime();
        return timestamp;
    }
    /**
     * parse the time to yyyy-mm-dd hh:mm:ss
    */
    static getDateByYMDHMS(ms) {
        var timeMs = Number(parseInt(ms));
        var oDate = new Date(timeMs), oYear = oDate.getFullYear(), oMonth = oDate.getMonth() + 1, oDay = oDate.getDate(), oHour = oDate.getHours(), oMin = oDate.getMinutes(), oSen = oDate.getSeconds(), oTime = oYear + '-' + yutls.getzf(oMonth) + '-' + yutls.getzf(oDay) + ' ' + yutls.getzf(oHour) + ':' + yutls.getzf(oMin) + ':' + yutls.getzf(oSen); //最后拼接时间
        return oTime;
    }
    static getDateByYMD(ms) {
        var timeMs = Number(parseInt(ms));
        var oDate = new Date(timeMs), oYear = oDate.getFullYear(), oMonth = oDate.getMonth() + 1, oDay = oDate.getDate();
        var oTime = oYear + '-' + this.getzf(oMonth) + '-' + this.getzf(oDay); //最后拼接时间
        return oTime;
    }
    /**
     * parse the time to hh:mm:ss
    */
    static getDateByHMS(ms) {
        // var timeMs = Number(parseInt(ms));
        // var oHour = parseInt(timeMs / (1000 * 60 * 60));
        // var oMin = parseInt((timeMs % (1000 * 60 * 60)) / (1000 * 60));
        // var oSen = parseInt((timeMs % (1000 * 60)) / 1000);
        // var oTime = yutls.getzf(oHour) + ':' + yutls.getzf(oMin) + ':' + yutls.getzf(oSen);
        // return oTime;
        var timeMs = Number(parseInt(ms));
        var oDate = new Date(timeMs), oHour = oDate.getHours(), oMin = oDate.getMinutes(), oSen = oDate.getSeconds();
        var oTime = this.getzf(oHour) + ':' + this.getzf(oMin) + ':' + this.getzf(oSen); //最后拼接时间
        return oTime;
    }
    /**
     * convert longitude/latitude to 度分秒
     * longitude: 'E 00°00′00"' , latitude: 'N 00°00′00"' 
     * 经度（正：东经　负：西经）
     * 纬度（正：北纬　负：南纬
    */
   static formatDegree(longitude, latitude) {
        var longitudeD = ''; var latitudeD = '';
        if(longitude >= 0){
            longitudeD = 'E ';
        }
        else{
            longitudeD = 'W ';
        }
        //
        if(latitude >= 0){
            latitudeD = 'N ';
        }
        else{
            latitudeD = 'S ';
        }
        //
        var longitudeVal = Math.abs(longitude),
            oV1 = Math.floor(longitudeVal),//度
            oV2 = Math.floor((longitudeVal - oV1) * 60),//分
            oV3 = Math.round((longitudeVal - oV1) * 3600 % 60),//秒
            longitudeStr = longitudeD + oV1 + '°' + oV2 + '\'' + oV3 + '"';

        var latitudeVal = Math.abs(latitude),
            aV1 = Math.floor(latitudeVal),//度
            aV2 = Math.floor((latitudeVal - aV1) * 60),//分
            aV3 = Math.round((latitudeVal - aV1) * 3600 % 60),//秒
            latitudeStr = latitudeD + aV1 + '°' + aV2 + '\'' + aV3 + '"';

        var rc = {
            longitude: longitudeStr,
            latitude: latitudeStr
            };
        return rc;
    };
    /**
     * check browser type
    */
    static getBrowser() {
        var ua = window.navigator.userAgent;
        //var isIE = window.ActiveXObject != undefined && ua.indexOf("MSIE") != -1; 
        var isIE = !!window.ActiveXObject || "ActiveXObject" in window;
        var isFirefox = ua.indexOf("Firefox") != -1;
        var isOpera = window.opr != undefined;
        var isChrome = ua.indexOf("Chrome") && window.chrome;
        var isSafari = ua.indexOf("Safari") != -1 && ua.indexOf("Version") != -1;
        if (isIE) {
            return "IE";
        }
        else if (isFirefox) {
            return "Firefox";
        }
        else if (isOpera) {
            return "Opera";
        }
        else if (isChrome) {
            return "Chrome";
        }
        else if (isSafari) {
            return "Safari";
        }
        else {
            return "Unkown";
        }
    }
    /**
     * IP地址合法性检查
     * return true, if it's validated.
     */
    static chkIpAddress(strIP){
        var exp=/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;  
        var rc = strIP.match(exp);  
        if(rc == null){
            return false;
        }else{
            return true;
        }
    }
    /**
     * MAC地址合法性检查
     * return true, if it's validated.
     */
    static chkMacAddress(strMac){
        var exp=/^([A-Fa-f0-9]{2}[-,:]){5}[A-Fa-f0-9]{2}$/;  
        var rc = strMac.match(exp);  
        if(rc == null){
            return false;
        }else{
            return true;
        }
    }
    /**
     * IMEI地址合法性检查
     * IMEI规则：3位字母+5位数字
     * return true, if it's validated.
     */
    static chkImeiAddress(strImei){
        var exp=/^[A-Za-z]{3}[0-9]{5}$/;  
        var rc = strImei.match(exp);  
        if(rc == null){
            return false;
        }else{
            return true;
        }
    }

    // Nokia ajax req
    static ajaxReq() 
    {
        //  xmlHttpRequest object   
        var request = null;

        // branch for native XMLHttpRequest object
        if(window.XMLHttpRequest && !(window.ActiveXObject)) {
            try 
            {
                request = new XMLHttpRequest();
                try
                {
                    //  attach the Bypass code, if the browser is firefox
                    if(netscape.security.PrivilegeManager.enablePrivilege)
                    {
                        //  duplicate the function
                        request._open = request.open;
                        
                        //  redefine the function definition
                        request.open = function(method, url, flag)
                        {
                            try
                            {
                                // Enable Universal Browser Read
                                netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");

                                //  call the native XmlHttpRequest.open method
                                this._open(method, url, flag);
                            }catch(e)
                            {
                                //  call the native XmlHttpRequest.open method
                                this._open(method, url, flag);
                            }
                        }
                    }
                }
                catch(e)
                {
                    //  eatup all exceptions
                }
            } 
            catch(e) {
                request = null;
            }
        // branch for IE/Windows ActiveX version
        } else if(window.ActiveXObject) {
            try {
                request = new ActiveXObject("Msxml2.XMLHTTP");
            } catch(e) {
                try {
                    request = new ActiveXObject("Microsoft.XMLHTTP");
                } catch(e) {
                    alert('Failed to create XmlHttprequest');
                    return null;
                }
            }
        }
        
        return (request);
    }
    //
    /* retrieves data from server via ajax
        readyState=>XMLHttpRequest process status:
        0:XMLHttpRequest no init
        1:XMLHttpRequest start send out req
        2:XMLHttpRequest req sent out
        3:XMLHttpRequest start to read server's response
        4:XMLHttpRequest complete to read server data.
    // GET格式        
    var aParam = "userName=zhangsan & pwd="1234";
    var aUrl = gUrl + "/mobile/auth.php";
    //POST格式
    var aParam = aDat;
    var aUrl = gUrl + "/mobile/auth.php";
    ===============
    ajaxParam = 
    { url: "",
        type: "POST", //"GET"
        data: {
        dataType: "json", //"form"
        "command": "myCommond",
        "otherData": "" 
        },
        success: function (data) {},
        error: function (errorThrown) { alert("error");}
    }
    */
   static ajax(ajaxParam){
    try{
        //
        function myErrFun(msg){alert(msg);return;}
        //code the aParam
        function codeParamData(data){
            var rc = "";
            for(var name in data){  
                rc += name+"="+ data[name]+"&";  
            }
            return rc.substring(0, rc.length-1);//encodeURIComponent( rc.substring(0, rc.length-1) );
        }
        //
        var aHeaderContentTypeNormal = "application/x-www-form-urlencoded;charset=utf-8";
        var aHeaderContentTypeJson = "application/json;charset=utf-8";
        var aUrl = ajaxParam.url;
        var PostType = ajaxParam.type.toLowerCase();
        var aParam = codeParamData(ajaxParam.data);
        //
        var aHeaderContentType = aHeaderContentTypeNormal;
        // aHeaderContentType = ajaxParam.data.dataType.toLowerCase();;
        // if("json" == aHeaderContentType)
        //     aHeaderContentType = aHeaderContentTypeJson;
        // else
        //     aHeaderContentType = aHeaderContentTypeNormal;
        //
        var aCallbackSucc;
        if(typeof(ajaxParam.success) == "undefined" )
            throw "No ajaxParam.success()";
        else
            aCallbackSucc = ajaxParam.success;
        var aCallbackErr;
        if(typeof(ajaxParam.error) == "undefined" )
            aCallbackErr = myErrFun;
        else
            aCallbackErr = ajaxParam.error;
        // new req
        var xmlHttpReq = yutls.ajaxReq();
    }catch(e) {alert("XMLHttpRequest catch(" + e +")");return;}

        xmlHttpReq.onreadystatechange = function() {
            var status;
            if (xmlHttpReq.readyState == 4)
            {
            try{
                status = xmlHttpReq.status;// == 200) {
                }catch(e) {alert(xmlHttpReq.status + e);}

                //operation with Server
                if(status == 200)
                {
                    if(xmlHttpReq.responseText != null)
                        aCallbackSucc(xmlHttpReq.responseText);
                    else if(xmlHttpReq.responseXML != null)
                        aCallbackSucc(xmlHttpReq.responseXML);
                    else
                        aCallbackErr("error:Response is NULL");
                } 
                else  if (xmlHttpReq.readyState == 4 && status != 200 && status != 0)
                {
                    var err = "error: error status: "+status;
                    aCallbackErr(err);
                }
            }

        }

        if ("get" == PostType){
            // GET operation
            var aUrlGet = aUrl + "?" + aParam;
            //xmlHttpReq.open("GET", aUrl+"?username="+escape(aParam.UserName), true);
            xmlHttpReq.open("GET", aUrlGet, true);
            xmlHttpReq.send(null);
        }
        else if("post" == PostType){
            //POST operation
            xmlHttpReq.open("post", aUrl, true);
            //xmlHttpReq.setRequestHeader("Content-Length",aParam.length);
            if(0 != aHeaderContentType)
            { 
            /* "application/json" for new application
            * "application/x-www-form-urlencoded" for normal application
            */
            xmlHttpReq.setRequestHeader("Content-Type", aHeaderContentType);
            }
            //aParam = "command=loginByUserPWD&login_user=zhangsan & login_pwd=1234";
            console.log('ajax->aParam:'+aParam);
            xmlHttpReq.send(aParam);
        }
    }
    /** loadHtml()
     * load html file into the node
     * @param aNode the node handle of DOM
     * @param aFileDat source html module
     * @param cbFunc callback function with input[node]
     * 2019-05-15: remove ajax function, replace to ES6 import funciton to load the html file by a module.
     */
    static load(aNode, aFileDat, cbFunc){
        if ((typeof cbFunc != 'function')||(typeof aNode == 'undefined')||(aNode == null) ){
            return;
        }
    /* 2019-05-15: remove ajax function
        // internal func to add inne html
        function addHtml(data){
            aNode.innerHTML = data; //TODO,需要考察加载大文件时候是否需要做加载结束事件进行同步操作！
            cbFunc();
        }
        // call ajax to load file
        yutls.ajax({ 
            url: aFileDat,
            type: "POST",
            success: addHtml,
            error: cbFunc
        });
    */
        aNode.innerHTML = aFileDat; //TODO,需要考察加载大文件时候是否需要做加载结束事件进行同步操作！
        cbFunc();
    }
}

export default yutls;
