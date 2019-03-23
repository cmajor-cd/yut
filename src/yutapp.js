/**
 * yut main entry.
 * Anthor: YangYutong
 * Create: 20181102
 * Description: 
 * 1. it's the Main Application Class, all other windows classes are attaced to this class.
 * 2. It's a self runnning class, the object[yut] or [theApp] will be created after the script is included by user
 * 3. key Global members:
 *    3.1. theApp/yut: this pointer of the class object.
 *    3.2. m_strAppName: special name of theApp
 *    3.3. m_hMainWnd: main frame handle of the MainFrm Class.
 *    3.4. m_Store: data store of this app.
 * Usage: 
 * 1. add Init() into <body> => <body id="mainFrm" onload="Init()">
 * 2. attache MainFrm class to theAPP => theApp.attachMainFrm(CMainFrm);
 * -----------------
 * change log:
 * 2018-12-13: change to class type with 'static' keyword, to force usage by class name. e.g. theApp.setAppName('myApp')
 */
// include the tools lib
// document.write('<script type="text/javascript" src="./src/yutools.js"></script>');
// yutls.includeJs('./CEvent.js');
// yutls.includeJs('./CStore.js');
// yutls.includeJs('./CView.js');

//code
// (function(window,undefined){
class theApp {
    constructor() {
        // 构造函数
        var _this = this;
        //1.内部变量+内部函数
        //2.外部成员
        // _this._strViewID = 'theAPP';
        _this.m_strAppName = '';
        _this.m_hMainWnd = '';
        _this.m_Store = new CStore();
    }
    /**
     * create a mainfrm for this application
     * @param aClassName the name of class. e.g. CMainFrm.
     */
    static attachMainFrm(aClassName) {
        if ((typeof aClassName != 'function') || (aClassName == null) || (aClassName == undefined)) {
            console.error('theApp.attachMainFrm: invalid class name.');
            return;
        }
        let oMainFrm = new aClassName(this);
        theApp.m_hMainWnd = oMainFrm;
        oMainFrm.activeView(); // avtive itself, this line is used to trigger mainFrm's evActived.
    }
    static setAppName(aAppName) {
        if ((aAppName != null) && (aAppName != undefined)) {
            this.m_strAppName = aAppName;
        }
    }
    static setMainWnd(aWnd) {
        if ((aWnd != null) && (aWnd != undefined)) {
            this.m_hMainWnd = aWnd;
        }
    }
    static setStoreData(aData) {
        if ((aData != null) && (aData != undefined)) {
            this.m_Store.setData(aData);
        }
    }
    static getStoreData() {
        return this.m_Store.getData();
    }
    /** ---
         * THIS function provide tranverse all views in this APP, caller
         * can do his special operation by input call back fucntion.
         * THIS will input object handle of the views into callbakc func.
         *
         * @param cbFunc the call back function, that inputed by caller.
         */
    static traverseAllViews(cbFunc) {
        /**
         * traverseNode, and exec _loadHtml() to render all views
         */
        function traverseNode(node) {
            if ((node != undefined) || (node != null)) {
                if (typeof cbFunc == 'function') {
                    cbFunc(node);
                }
            }
            if (node._childViewObjsTree.childView && node._childViewObjsTree.childView.length > 0) {
                for (let i = 0; i < node._childViewObjsTree.childView.length; i++) {
                    traverseNode(node._childViewObjsTree.childView[i]);
                }
            }
        }
        /** ----------
         * DO traverseNode operation...
         */
        traverseNode(this.m_hMainWnd);
    }
    // theApp.test = function(cb){
    //     let type = typeof cb;
    //     let pa = 12;
    //     cb(pa);
    // }
    //
    static whoami() { alert("THIS is theAPP"); }
}
    //
    // if ( typeof window === "object" && typeof window.document === "object" ) {
    //     window.theApp = window.yut = theApp//window.$;
    // }
//
export default theApp;
// })(window);