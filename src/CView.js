/**
 * CView - base class of VIEW windows.
 * Anthor: YangYutong <70248717@qq.com>
 * Create: 20181102
 * Description: 
 *  init the view by the html and ctrls
 * How to use: 
 * A. Define child view class
 *      1. create CChildView's constructor
 *      2. fill option = {} in constructor
 *      3. call this.init() in constructor
 *      4. CChildView.prototype = new CView(); 
 * B. Create OBject from class
 *      objectChildView = new CChildView(handleOfParentView);
 * -----------------------------------------
 */
// yutls.includeJs('./CStore.js');
import CStore from './CStore';
import CEvent from './CEvent';
import yutls from './yutools';

class CView {
    constructor() {
        // constructor
        var _this = this;
        //1.variant + functions
        _this._hParent = 0; // parent handle of THIS view.
        _this._strViewID = '';
        _this._strHtmlSrc = '';
        _this._hRegCtrlCb = 0;
        _this._oLanguage = {};
        //2. init the objects
        _this._viewStore = new CStore();
        /*
        *  a set of all childviews NAME, these are used to create the childview objects
        *  [COneView, CTwoView,...]
        *  - used to create all child subviews by the class NAMR, one by one.
        */
        _this._childViewsArray = [];
        /*
        *  a set of all childviews OBJECT, these are used to views refresh and show/hidden opeartion.
        *  { mounted: 0, childView: [] }
        * -
        * 1. mounted => THIS view is mounted completely (all subviews are done.)
        * 2. childView[] => the child views of THIS view.
        */
        _this._childViewObjsTree = { mounted: 0, childView: [] }; //{ parent: 0, mounted: 0, childView: [] };
        /**
         * event call back functions list
         * when the event is trigger, CView's event process will check and rout to the registed cb function.
         */
        _this._oEvCallback = {};
        // event process
        _this._evView = ['evMounted', 'evActived'];
        _this._evFactory = new CEvent();
        for (let i = 0; i < _this._evView.length; i++) {
            let type = _this._evView[i];
            switch (type) {
                case 'evMounted':
                    _this._evFactory.addEvent('evMounted', _this._defaultevViewMounted);
                    break;
                case 'evActived':
                    _this._evFactory.addEvent('evActived', _this._defaultevActivedView);
                    break;
                default:
            }
        }
    }
    /**
     * init after New object.
     * @param option = {
     *          aParent: [Peremptory]  // parent view's this pointer
     *          aNodeID: [Peremptory]  //dom node id
     *          aHtml:   [Optional]    //html source file string
     *          aRegCtrlCallBack: [Optional] //call back function for ctrl
     *          aLanguage:  [Optional] // multi language option
     *              { language: 'cn',
     *                  htmlMap: {'cn': _this.cnHtmlMap{..} ,'en': _this.enHtmlMap{..},..},
     *                  jsMap: {'cn': _this.cnJsMap{..},'en': _this.enJsMap{..},..} }
     *          aChildViews: [Optional] // array of chile views
     *          aRenderData：[Optional] // variant list for HTML render
     *          aEvCallback: [Optional] // call back functions for event
     *              {enType1: cbFunc1, ... }
     *         }
     */
    init(option) {
        if ((option == null) || (option == undefined)
            || (option.aParent == null) || (option.aParent == undefined)
            || (option.aNodeID == null) || (option.aNodeID == undefined)
            // ||(aHtml == null)||(aHtml == undefined)
            // ||(aRegCtrlCallBack == null)||(aRegCtrlCallBack == undefined)
            // ||(aLanguage == null)||(aLanguage == undefined)
        ) {
            alert('CView: option parameter is Invalid! Pls, check!');
            console.error('CView: option parameter is Invalid');
            console.error(option);
            return;
        }
        //1.variant + functions
        this._hParent = option.aParent;
        //this._childViewObjsTree.parent = this._hParent;
        this._childViewObjsTree.mounted = 0;
        this._strHtmlSrc = option.aHtml;
        this._hRegCtrlCb = option.aRegCtrlCallBack;
        this._oLanguage = option.aLanguage;
        if (option.aChildViews != undefined)
            this._childViewsArray = option.aChildViews;
        if (option.aRenderData != undefined)
            this._viewStore.setRenderData(option.aRenderData);
        if (option.aEvCallback != undefined)
            this._oEvCallback = option.aEvCallback;
        //2. init the objects
        this._strViewID = option.aNodeID;
        this.node = document.getElementById(option.aNodeID);
        // this.jqNode = $('#' + option.aNodeID); // jQuery node object
        // 1. load view'html 2.multi language 3.regiest ctrls
        this._loadHtml();
    }
    //----- Load the html src of this view
    //1. load the html source
    //2. multi language
    //3. convert {{var}} by add new id into the <a>
    //4. regiest the dom call back
    _loadHtml() {
        if ((this._strHtmlSrc == null) || (this._strHtmlSrc == undefined)) { //if this view no html, do nothing.
            console.error('CView._loadHtml, no html exists.');
        }
        else {
            // this.jqNode.load(this._strHtmlSrc, () => {
            yutls.load(this.node ,this._strHtmlSrc, () => {
                //console.log('CView._loadHtml::'+this._strHtmlSrc);
                yutls.htmlSwitchLang(this._oLanguage);
                // add new id for every <a>
                this._convertVarInHtml();
                // regist the DOM callback functions
                this._hRegCtrlCb();
                // force refresh my view
                this.forceRefreshRender();
                // create subviews
                this._createChildViews();
            });
        }
    }
    //--- force to refresh the variant whether it has been changed or not
    // this will disable CStore._observer(){ ... if(oldVal != newVal)...}
    // after refreshing it'll enable CStore._observer(){ ... if(oldVal != newVal)...}
    forceRefreshRender(aData) {
        let data;
        if (aData == null || aData == undefined) {
            data = this._viewStore.getRenderData();
        }
        this._viewStore.m_bForceFresh = true;
        Object.keys(data).forEach((key) => {
            let val = data[key];
            if ((Object.prototype.toString.call(val) == '[object Object]')
                || (Object.prototype.toString.call(val) == '[object Array]')) {
                this.forceRefreshRender(val);
            }
            // !force setter refresh!
            this._viewStore._renderData[key] = val;
        });
        this._viewStore.m_bForceFresh = false;
    }
    //----- Search the {{variantname}} in html-<a> node,then add a id for the <a> 
    //1. variants are located in <a> and marked by {{variantname}},
    //2. variants are reg into CStore::_viewStore._renderData => {varName: varValue},
    //3. find {{variantname}} in html-<a> nodes,then make a new id to this <a> //newID = viewName +'-'+ variantName;
    //4. regiest the variants:newID into CStore::_viewStore._renderData2CbMap => {varName: newID},
    _convertVarInHtml() {
        // console.log('CView._convertVarInHtml->viewname:'+this._strViewID);
        let viewName = this._strViewID;
        this._viewStore.actRenderData2CbMap('clear');
        let data = this._viewStore.getRenderData();
        Object.keys(data).forEach((key) => {
            let variantName = key;
            // let aArray = this.jqNode.find('a');
            let aArray = this.node.getElementsByTagName("a");
            for (let i = 0; i < aArray.length; i++) {
                if (aArray[i].text.indexOf('{{' + variantName + '}}') != -1) {
                    //为每个变量的<a>生成唯一ID，为以后刷新value的回调函数做准备
                    let newID = viewName + '-' + variantName;
                    // console.log(newID);
                    // $(aArray[i]).prop('id', newID);
                    aArray[i].id = newID;
                    this._viewStore.actRenderData2CbMap('add', variantName, newID);
                }
            }
        });
        // regist setter call back
        this._viewStore.regRenderData(data);
    }
    /**
     * create the child views by the views array (with class name)
     * @param: aClassName is NOT string, it's the defination name of Class. e.g. CDashboardView.
     * @param: sender: { viewID: this._strViewID, self: this, parentHandle: this._hParent}
     */
    _createChildViews() {
        let _this = this;
        if (_this._childViewsArray instanceof Array) {
            let numViews = _this._childViewsArray.length;
            //console.log(numViews);
            if (numViews == 0) {
                // no subviews, means THIS view has been mounted.
                _this._childViewObjsTree.mounted = 1;
                _this._evFactory.triggerEvent({
                type: 'evMounted',
                    sender: { viewID: _this._strViewID, self: _this, parentHandle: _this._hParent }
                });
            }
            else {
                let childObjs = [];
                for (let i = 0; i < numViews; i++) {
                    if ((typeof _this._childViewsArray[i] != 'function') || (_this._childViewsArray[i] == null) || (_this._childViewsArray[i] == undefined)) {
                        console.error('CView._createChildViews: invalid class name.');
                        return;
                    }
                    let obj = new _this._childViewsArray[i](_this);
                    // let viewid = obj._strViewID;
                    childObjs[i] = obj; //{ viewID: viewid, object: obj, mounted: 0};
                }
                _this._childViewObjsTree.childView = childObjs;
                // console.log(this._childViewObjsTree);//(this._childViewObjsTree);
            }
        }
        else {
            console.error('CView._createChildViews input parameter is invalid!');
        }
    }
    /**
     * event: evMounted => THIS view is mounted!
     * This event is opened to class ojects, can be routed to the registed call back func.
     * @param data = {
                        type: 'evMounted',
                        sender: { viewID: this._strViewID, self: this, parentHandle: this._hParent}
                        }
        ---
        1. when subview's childview is NULL, it trigger event(evMounted) to its parent view.
        2. parent view check it's _childViewObjsTree, if all subviews are compelted.
        3. if all subviews are completed mount, THIS view will trigger callback function if it has been registed.
        4. event(evMounted) will be ended if THIS view handle == theAPP.
    */
    _defaultevViewMounted(data) {
        /** internal function
         * traverse the view tree to check whether this view has been mounted (all subviews are mounted)
         * @param INPUT: aThisView => the handle of THIS view.
         * @param OUTPUT:
         */
        function traverseViewTree(aThisView) {
            let _this = aThisView;
            if (_this == theApp) {
                // THIS is theAPP, stop event loop
                console.warn('THIS is theAPP, stop event loop');
                return;
            }
            //
            let subviews = _this._childViewObjsTree.childView;
            let allSubviewsMounted = true;
            if ((subviews == null) || (subviews == undefined)) {
                //a. this view hasn't subviews
                _this._childViewObjsTree.mounted = 1;
            }
            else {
                //b. this view has some subviews
                let subViewCnt = subviews.length;
                for (let i = 0; i < subViewCnt; i++) {
                    if (subviews[i]._childViewObjsTree.mounted == 0) {
                        allSubviewsMounted = false;
                    }
                }
            }
            // c. check, if all subviews are mounted?
            if (allSubviewsMounted) { // all subviews are mounted
                _this._childViewObjsTree.mounted = 1;
                //map to regist function..
                let ff = typeof _this._oEvCallback.evMounted;
                if (ff == 'function') {
                    _this._oEvCallback.evMounted(_this);
                }
                // console.warn('[ViewMounted]=> ' + _this._strViewID);
                //d. goto THIS's parent view to check if the parent is mounted!
                traverseViewTree(_this._hParent);
            }
        }
        /** -----------------
         * process the view mount event
         * sender: { viewID: this._strViewID, self: this, parentHandle: this._hParent}
         */
        let _this = data.sender.self;
        traverseViewTree(_this);
    }
    /**
     * event: evActived => THIS view is Actived to show!
     * When view is actived to show, this event will be triggered and the registed call back func is called.
     * @param data = {
                        type: 'evActived',
                        sender: { viewID: this._strViewID, self: this}
                        }
    */
    _defaultevActivedView(data) {
        let _this = data.sender.self;
        let ff = typeof _this._oEvCallback.evActived;
        if (ff == 'function') {
            _this._oEvCallback.evActived(_this);
        }
    }
    /**
     * add event handlers into this views, in runningtime.
     * @param: evHandle = {evType: 'evActived',
     *                      evCallback: callBackFunc}
     */
    regEvHandler(evHandler) {
        // check if the event type is ok
        let flag = false;
        for (let i = 0; i < this._evView.length; i++) {
            if (evHandler.evType == this._evView[i]) {
                flag = true;
                this._oEvCallback[evHandler.evType] = evHandler.evCallback;
                break;
            }
        }
        if (!flag) {
            console.error('CView.regEvHandler: no evType is found(' + evHandler.evType + ")");
        }
    }
    /**
     * delete event handlers from this views, in runningtime.
     * @param: evType: 'evActived'
     */
    unRegEvHandler(evType) {
        // check if the event type is ok
        let flag = false;
        for (let i = 0; i < this._evView.length; i++) {
            if (evType == this._evView[i]) {
                flag = true;
                delete this._oEvCallback[evType];
                break;
            }
        }
        if (!flag) {
            console.error('CView.unRegEvHandler: no evType is found(' + evType + ")");
        }
    }
    /**
     * --- show one view by dom-id
     */
    _showView(aViewNode, visible) {
        var element = aViewNode;
        if (element == null) {
            return;
        }
        var className = element.className;
        if (className == null) {
            className = "";
        }
        if (visible) {
            className = className.replace(/ ?hidden/, "");
        }
        else {
            if (className.indexOf("hidden") == -1) {
                if (className.length > 0)
                    className += " ";
                className += " hidden";
            }
        }
        element.className = className;
    }
    /*--- show one or multi subview in a view contains
    * usage1: xxxView.activeView(); => arg is null,means the view will active itself.
    * usage2: xxxParentView.activeView('oneSubView'); => show only one subview
    * usage3: xxxParentView.activeView('oneSubView','twoSubView'); => show two subviews at the same time
    */
    activeView() {
        let cnt = arguments.length;
        if (cnt == 0) { // no arg
            console.log('CView.activeView input 0 => arg is null,means the view will active itself.');
            //trigger evActived
            this._evFactory.triggerEvent({
            type: 'evActived',
                sender: { viewID: this._strViewID, self: this }
            });
            //show the view
            this._showView(this.node, true);
        }
        else { // input many args
            // hidde all views
            for (let element in this._childViewObjsTree.childView) {
                // let element = this._childViewObjsTree.childView[parseInt(i)];
                this._showView(this._childViewObjsTree.childView[parseInt(element)].node, false);
            }
            // show the select views
            for (let i = 0; i < arguments.length; i++) {
                let arg = arguments[i];
                for (let element in this._childViewObjsTree.childView) {
                    let thisView = this._childViewObjsTree.childView[parseInt(element)];
                    if (thisView._strViewID == arg) {
                        //trigger evActived
                        thisView._evFactory.triggerEvent({
                        type: 'evActived',
                            sender: { viewID: this._strViewID, self: thisView }
                        });
                        //show the view
                        this._showView(thisView.node, true);
                    }
                }
            }
        }
    }
}
// CView.prototype = {
//     constructor: CView, // fix constructor
// }

export default CView;