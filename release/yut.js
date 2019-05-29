(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: yutVersion, yutls, theApp, CView, CEvent, CStore, CTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_yutapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/yutapp */ "./src/yutapp.js");
/* harmony import */ var _src_yutapp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_yutapp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "theApp", function() { return _src_yutapp__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var _src_yutools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/yutools */ "./src/yutools.js");
/* harmony import */ var _src_yutools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_yutools__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "yutls", function() { return _src_yutools__WEBPACK_IMPORTED_MODULE_1___default.a; });
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./version */ "./version.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "yutVersion", function() { return _version__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_CView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/CView */ "./src/CView.js");
/* harmony import */ var _src_CView__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_CView__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "CView", function() { return _src_CView__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony import */ var _src_CEvent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/CEvent */ "./src/CEvent.js");
/* harmony import */ var _src_CEvent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_CEvent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "CEvent", function() { return _src_CEvent__WEBPACK_IMPORTED_MODULE_4___default.a; });
/* harmony import */ var _src_CStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/CStore */ "./src/CStore.js");
/* harmony import */ var _src_CStore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_CStore__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "CStore", function() { return _src_CStore__WEBPACK_IMPORTED_MODULE_5___default.a; });
/* harmony import */ var _src_CTest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/CTest */ "./src/CTest.js");
/* harmony import */ var _src_CTest__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_CTest__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "CTest", function() { return _src_CTest__WEBPACK_IMPORTED_MODULE_6___default.a; });










/***/ }),

/***/ "./src/CEvent.js":
/*!***********************!*\
  !*** ./src/CEvent.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * CEvent class , for customize event.
 * Anthor: YangYutong <70248717@qq.com>
 * Create: 20181102
 * Description: 
 *  1. event don't be removed after it is triggered.
 * Usage:
    function myEvHanderFunc(){
        console.log('my event is handled.');
    }
    function myEvHander2(data){
        let food = data.food;
        console.log('my event is handled:' + food);
    }
    //
    var evFactory = new CEvent();
    evFactory.addEvent('eat', myEvHanderFunc);
    evFactory.addEvent('eat', myEvHander2);
    evFactory.triggerEvent({
            type: "eat"
        });
    evFactory.triggerEvent({
            type: "eat",
            food: "rice"
        });

* */
//Class CEvent
var CEvent = function () {
    function CEvent() {
        _classCallCheck(this, CEvent);

        //event handler function mapping
        // {type1: [func11, func12, ..],
        //   type2: [func21, func22,..],
        //  ...}
        this.handlers = {};
    }
    /* regist new event and handler fucntion
    *  @param: 
    *      type -> event
    *      handler -> call back
    */


    _createClass(CEvent, [{
        key: 'addEvent',
        value: function addEvent(type, handler) {
            //1. check if this event has exist or not
            if (typeof this.handlers[type] == 'undefined') {
                this.handlers[type] = [];
            }
            //2.push new event and reg handler
            this.handlers[type].push(handler);
        }
        /* trigger the event with type and other parameters are allowed to be attached
        *  @param: 
        *      event -> {type: myevent, others: xxx, ...}
        */

    }, {
        key: 'triggerEvent',
        value: function triggerEvent(event) {
            if (!event.target) {
                event.target = this;
            }
            //1. check if this event has exist and it's a array
            if (this.handlers[event.type] instanceof Array) {
                //2. locate the right event in mapping
                var handlers = this.handlers[event.type];
                //3. execute the all callback handlers
                for (var i = 0; i < handlers.length; i++) {
                    handlers[i](event);
                }
            }
        }
        /* remove the event handler mapping
        *  @param: 
        *      type -> event
        *      handler -> call back
        */

    }, {
        key: 'removeEvHandler',
        value: function removeEvHandler(type, aHandler) {
            //1. check if this event has exist and it's a array
            if (this.handlers[type] instanceof Array) {
                //2. locate the right event in mapping
                var handlers = this.handlers[type];
                //3. delete all handlers in mapping
                var i = 0;
                for (i = 0; i < handlers.length; i++) {
                    if (handlers[i] == aHandler) {
                        break;
                    }
                }
                //delete from mapping
                handlers.splice(i, 1);
            }
        }
    }]);

    return CEvent;
}();

exports.default = CEvent;
// export {CEvent};

/***/ }),

/***/ "./src/CStore.js":
/*!***********************!*\
  !*** ./src/CStore.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * CStroe: Two-way binding. e.g. {varName: varValue} => <a>{{varName}}</a>
 * Anthor: YangYutong <70248717@qq.com>
 * Create: 20181102
 * Description: 
 *   refer and thanks for: https://blog.csdn.net/qq_34829112/article/details/76345928?utm_source=blogxgwz1
 *   Provide a way to binld the var data to HTML {{}},
 *     the data that is defined in myClass.aRenderData, that will be render to HTML {{var}}
 * Usage:
 * 1. define data in myClass.aRenderData.: 
   class CMyView {
    constructor() {
        let option = {
            aRenderData: {dsvFWVerVal: '0.0.1'},
        };
        this.init(option);
    }
 * 2. define the SAME name of data in HTML: 
    <a>{{dsvFWVerVal}}</a>
 * 3. HTML will be rendered when dsvFWVerVal is changed.
 */
var CStore = function () {
    function CStore() {
        _classCallCheck(this, CStore);

        // constructor
        var _this = this;
        //1. internal variant / function
        //2. exported variant / function
        _this._data = {}; //暂时无用！考虑与_renderData合并
        /* --
         * the var data that will be render to HTML {{var}}
         * {varName: varValue} => <a>{{varName}}</a>
         */
        _this._renderData = {};
        /* --
         * the var : <a> id : callback mapping
         * {varName: {id: <a> id, cb: func}}
         */
        _this._renderData2CbMap = {};
        _this.m_bForceFresh = false; // force to fresh renderData.
    }
    /** VARIANT OBSERVE
     * listen the this.data, when data is changed, the callback will rend the html
     * regist the veriant to setter observer cabll back.
     * @param aData supput variant type and array thpe. BUT, the array type is not used in the variant/html binding!
     */


    _createClass(CStore, [{
        key: 'regRenderData',
        value: function regRenderData(aData) {
            if (Object.prototype.toString.call(aData) != '[object Object]' && Object.prototype.toString.call(aData) != '[object Array]') {
                console.error('the type of aData should be [Object or Array]!');
                return false;
            }
            // start the observer listen
            this._observer(aData);
        }
    }, {
        key: '_observer',
        value: function _observer(aData) {
            var _this2 = this;

            if (Object.prototype.toString.call(aData) == '[object Array]') {
                this._overrideArrayPrototype(aData, path);
            }
            Object.keys(aData).forEach(function (variantName) {
                var oldVal = aData[variantName];
                Object.defineProperty(aData, variantName, {
                    get: function get() {
                        return oldVal;
                    },
                    set: function (newVal) {
                        //m_bForceFresh=>refresh the variant wether it has been changed or not
                        //this is the init view page case!
                        if (this.m_bForceFresh || oldVal != newVal) {
                            if (Object.prototype.toString.call(newVal) == '[object Array]') {
                                // check sub objects
                                this._observer(newVal);
                            }
                            // work on the variant
                            this._renderCb(variantName, newVal, oldVal);
                            oldVal = newVal;
                        }
                    }.bind(_this2)
                }); // end of Object.defineProperty
                if (Object.prototype.toString.call(aData[variantName]) == '[object Object]' || Object.prototype.toString.call(aData[variantName]) == '[object Array]') {
                    _this2._observer(aData[variantName]);
                }
            }, this); // end of Object.keys
        }
        //--- ARRAY VARIANT OBSERVE

    }, {
        key: '_overrideArrayPrototype',
        value: function _overrideArrayPrototype(aArrayData, owner) {
            //1. save the original one
            var originalPrototype = Array.prototype,

            //2. create new one
            overridePrototype = Object.create(Array.prototype),
                _this = owner,
                result;
            ArrayAction = ['push', 'pop', 'shift', 'unshift', 'short', 'reverse', 'splice'];
            ArrayAction.forEach(function (method) {
                Object.defineProperty(overridePrototype, method, {
                    value: function value() {
                        var oldVal = this.slice();
                        // call original prototype
                        result = originalPrototype[method].apply(this, arguments);
                        //
                        _this._renderCb(this, oldVal);
                        return result;
                    }
                });
            });
            // change the array data ___Proto__ to the override one
            aArrayData.__proto__ = overridePrototype;
        }
        /** ---  VARIANT OBSERVE Render
        * override Array data observe, BUT the Array is not recommended.
        * @param variantName name of the variant
        * @param newVal
        * @param oldVal
        */

    }, {
        key: '_renderCb',
        value: function _renderCb(variantName, newVal, oldVal) {
            var id = this._renderData2CbMap[variantName];
            // console.log(variantName+'<>'+id);
            if (id != undefined) {
                var element = document.getElementById(id);
                if (element) {
                    element.innerHTML = newVal;
                }
            } else {
                console.warn('CStore._renderCb:: invalid variant! ');
            }
        }
    }, {
        key: 'setRenderData',
        value: function setRenderData(aData) {
            this._renderData = aData;
        }
    }, {
        key: 'getRenderData',
        value: function getRenderData() {
            return this._renderData;
        }
        /**
         * manage a mapping table for data<=>html refresh
         * {variantName: ID}
         */

    }, {
        key: 'actRenderData2CbMap',
        value: function actRenderData2CbMap(aAct, aKeyVariName, aID) {
            //1. aOpt=> clear/add/del
            //2. aKeyVariName:aID
            switch (aAct) {
                case 'clear':
                    this._renderData2CbMap = {};
                    break;
                case 'add':
                    this._renderData2CbMap[aKeyVariName] = aID;
                    break;
                case 'del':
                    delete this._renderData2CbMap[aKeyVariName];
                    break;
                default:
                    console.error('CStore:: unknow action in actRenderData2CbMap! ');
            }
            // console.log(this._renderData2CbMap);
        }
    }, {
        key: 'setData',
        value: function setData(aData) {
            if (aData != null && aData != undefined) {
                this._data = aData;
            }
        }
    }, {
        key: 'getData',
        value: function getData() {
            return this._data;
        }
    }]);

    return CStore;
}();
// CStore.prototype = {
//     constructor: CStore,
// }

exports.default = CStore;
// export { CStore };

/***/ }),

/***/ "./src/CTest.js":
/*!**********************!*\
  !*** ./src/CTest.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CTest = function () {
    function CTest() {
        _classCallCheck(this, CTest);

        this.dat = 'this is test!';
    }

    _createClass(CTest, [{
        key: 'getDat',
        value: function getDat() {
            return this.dat;
        }
    }]);

    return CTest;
}();

exports.default = CTest;
// module.exports = CTest;

/***/ }),

/***/ "./src/CView.js":
/*!**********************!*\
  !*** ./src/CView.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
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


var _yutapp = __webpack_require__(/*! ./yutapp */ "./src/yutapp.js");

var _yutapp2 = _interopRequireDefault(_yutapp);

var _CStore = __webpack_require__(/*! ./CStore */ "./src/CStore.js");

var _CStore2 = _interopRequireDefault(_CStore);

var _CEvent = __webpack_require__(/*! ./CEvent */ "./src/CEvent.js");

var _CEvent2 = _interopRequireDefault(_CEvent);

var _yutools = __webpack_require__(/*! ./yutools */ "./src/yutools.js");

var _yutools2 = _interopRequireDefault(_yutools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CView = function () {
    function CView() {
        _classCallCheck(this, CView);

        // constructor
        var _this = this;
        //1.variant + functions
        _this._hParent = 0; // parent handle of THIS view.
        _this._strViewID = '';
        _this._strHtmlSrc = '';
        _this._hRegCtrlCb = 0;
        _this._oLanguage = {};
        //2. init the objects
        _this._viewStore = new _CStore2.default();
        /*
        *  a set of all childviews NAME, these are used to create the childview objects
        *  [COneView, CTwoView,...]
        *  - used to create all child subviews by the class NAMR, one by one.
        */
        _this._childViewsArray = [];
        /*
        *  a set of all childviews OBJECT, these are used to views refresh and show/hidden opeartion.
        *  { mounted: 0, evMountedTriggered: 0, childView: [] }
        * -
        * 1. mounted => THIS view is mounted completely (all subviews are done.)
        * 2. evMountedTriggered => THIS view(node)'s evMounted has been triggered. 
        * 3. childView[] => the child views of THIS view.
        */
        _this._childViewObjsTree = { mounted: 0, evMountedTriggered: 0, childView: [] }; //{ parent: 0, mounted: 0, childView: [] };
        /**
         * event call back functions list
         * when the event is trigger, CView's event process will check and rout to the registed cb function.
         */
        _this._oEvCallback = {};
        // event process
        _this._evView = ['evMounted', 'evActived'];
        _this._evFactory = new _CEvent2.default();
        for (var i = 0; i < _this._evView.length; i++) {
            var type = _this._evView[i];
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


    _createClass(CView, [{
        key: 'init',
        value: function init(option) {
            if (option == null || option == undefined || option.aParent == null || option.aParent == undefined || option.aNodeID == null || option.aNodeID == undefined
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
            if (option.aChildViews != undefined) this._childViewsArray = option.aChildViews;
            if (option.aRenderData != undefined) this._viewStore.setRenderData(option.aRenderData);
            if (option.aEvCallback != undefined) this._oEvCallback = option.aEvCallback;
            //2. init the objects
            this._strViewID = option.aNodeID;
            this.node = document.getElementById(option.aNodeID);
            //this.jqNode = $('#' + option.aNodeID); // jQuery node object
            // 1. load view'html 2.multi language 3.regiest ctrls
            this._loadHtml();
        }
        //----- Load the html src of this view
        //1. load the html source
        //2. multi language
        //3. convert {{var}} by add new id into the <a>
        //4. regiest the dom call back

    }, {
        key: '_loadHtml',
        value: function _loadHtml() {
            var _this2 = this;

            if (this._strHtmlSrc == null || this._strHtmlSrc == undefined) {
                //if this view no html, do nothing.
                console.error('CView._loadHtml, no html exists.');
            } else {
                // 2019-05-15: remove ajax function, replace by ES6 import
                // this.jqNode.load(this._strHtmlSrc, () => {
                _yutools2.default.load(this.node, this._strHtmlSrc, function () {
                    //console.log('CView._loadHtml::'+this._strHtmlSrc);
                    _yutools2.default.htmlSwitchLang(_this2._oLanguage);
                    // add new id for every <a>
                    _this2._convertVarInHtml();
                    // regist the DOM callback functions
                    _this2._hRegCtrlCb();
                    // force refresh my view
                    _this2.forceRefreshRender();
                    // create subviews
                    _this2._createChildViews();
                });
            }
        }
        //--- force to refresh the variant whether it has been changed or not
        // this will disable CStore._observer(){ ... if(oldVal != newVal)...}
        // after refreshing it'll enable CStore._observer(){ ... if(oldVal != newVal)...}

    }, {
        key: 'forceRefreshRender',
        value: function forceRefreshRender(aData) {
            var _this3 = this;

            var data = void 0;
            if (aData == null || aData == undefined) {
                data = this._viewStore.getRenderData();
            }
            this._viewStore.m_bForceFresh = true;
            Object.keys(data).forEach(function (key) {
                var val = data[key];
                if (Object.prototype.toString.call(val) == '[object Object]' || Object.prototype.toString.call(val) == '[object Array]') {
                    _this3.forceRefreshRender(val);
                }
                // !force setter refresh!
                _this3._viewStore._renderData[key] = val;
            });
            this._viewStore.m_bForceFresh = false;
        }
        //----- Search the {{variantname}} in html-<a> node,then add a id for the <a> 
        //1. variants are located in <a> and marked by {{variantname}},
        //2. variants are reg into CStore::_viewStore._renderData => {varName: varValue},
        //3. find {{variantname}} in html-<a> nodes,then make a new id to this <a> //newID = viewName +'-'+ variantName;
        //4. regiest the variants:newID into CStore::_viewStore._renderData2CbMap => {varName: newID},

    }, {
        key: '_convertVarInHtml',
        value: function _convertVarInHtml() {
            var _this4 = this;

            // console.log('CView._convertVarInHtml->viewname:'+this._strViewID);
            var viewName = this._strViewID;
            this._viewStore.actRenderData2CbMap('clear');
            var data = this._viewStore.getRenderData();
            Object.keys(data).forEach(function (key) {
                var variantName = key;
                // let aArray = this.jqNode.find('a');
                var aArray = _this4.node.getElementsByTagName("a");
                for (var i = 0; i < aArray.length; i++) {
                    if (aArray[i].text.indexOf('{{' + variantName + '}}') != -1) {
                        //为每个变量的<a>生成唯一ID，为以后刷新value的回调函数做准备
                        var newID = viewName + '-' + variantName;
                        // console.log(newID);
                        // $(aArray[i]).prop('id', newID);
                        aArray[i].id = newID;
                        _this4._viewStore.actRenderData2CbMap('add', variantName, newID);
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

    }, {
        key: '_createChildViews',
        value: function _createChildViews() {
            var _this = this;
            if (_this._childViewsArray instanceof Array) {
                var numViews = _this._childViewsArray.length;
                //console.log(numViews);
                if (numViews == 0) {
                    // no subviews, means THIS view has been mounted.
                    _this._childViewObjsTree.mounted = 1;
                    _this._evFactory.triggerEvent({
                        type: 'evMounted',
                        sender: { viewID: _this._strViewID, self: _this, parentHandle: _this._hParent }
                    });
                } else {
                    var childObjs = [];
                    for (var i = 0; i < numViews; i++) {
                        if (typeof _this._childViewsArray[i] != 'function' || _this._childViewsArray[i] == null || _this._childViewsArray[i] == undefined) {
                            console.error('CView._createChildViews: invalid class name.');
                            return;
                        }
                        var obj = new _this._childViewsArray[i](_this);
                        // let viewid = obj._strViewID;
                        childObjs[i] = obj; //{ viewID: viewid, object: obj, mounted: 0};
                    }
                    _this._childViewObjsTree.childView = childObjs;
                    // console.log(this._childViewObjsTree);//(this._childViewObjsTree);
                }
            } else {
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

    }, {
        key: '_defaultevViewMounted',
        value: function _defaultevViewMounted(data) {
            /** internal function
             * traverse the view tree to check whether this view has been mounted (all subviews are mounted)
             * @param INPUT: aThisView => the handle of THIS view.
             * @param OUTPUT:
             */
            function traverseViewTree(aThisView) {
                var _this = aThisView;
                if (_this == _yutapp2.default) {
                    // THIS is theAPP, stop event loop
                    console.warn('THIS is theAPP, stop event loop');
                    return;
                }
                //
                var subviews = _this._childViewObjsTree.childView;
                var allSubviewsMounted = true;
                if (subviews == null || subviews == undefined) {
                    //a. this view hasn't subviews
                    _this._childViewObjsTree.mounted = 1;
                } else {
                    //b. this view has some subviews
                    var subViewCnt = subviews.length;
                    for (var i = 0; i < subViewCnt; i++) {
                        if (subviews[i]._childViewObjsTree.mounted == 0) {
                            allSubviewsMounted = false;
                        }
                    }
                }
                // c. check, if all subviews are mounted?
                if (allSubviewsMounted) {
                    // all subviews are mounted
                    _this._childViewObjsTree.mounted = 1;
                    //map to regist function..
                    var ff = _typeof(_this._oEvCallback.evMounted);
                    if (0 == _this._childViewObjsTree.evMountedTriggered && ff == 'function') {
                        _this._oEvCallback.evMounted(_this);
                        _this._childViewObjsTree.evMountedTriggered = 1; // set triggered flag to 1.
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
            var _this = data.sender.self;
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

    }, {
        key: '_defaultevActivedView',
        value: function _defaultevActivedView(data) {
            var _this = data.sender.self;
            var ff = _typeof(_this._oEvCallback.evActived);
            if (ff == 'function') {
                _this._oEvCallback.evActived(_this);
            }
        }
        /**
         * add event handlers into this views, in runningtime.
         * @param: evHandle = {evType: 'evActived',
         *                      evCallback: callBackFunc}
         */

    }, {
        key: 'regEvHandler',
        value: function regEvHandler(evHandler) {
            // check if the event type is ok
            var flag = false;
            for (var i = 0; i < this._evView.length; i++) {
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

    }, {
        key: 'unRegEvHandler',
        value: function unRegEvHandler(evType) {
            // check if the event type is ok
            var flag = false;
            for (var i = 0; i < this._evView.length; i++) {
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

    }, {
        key: '_showView',
        value: function _showView(aViewNode, visible) {
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
            } else {
                if (className.indexOf("hidden") == -1) {
                    if (className.length > 0) className += " ";
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

    }, {
        key: 'activeView',
        value: function activeView() {
            var cnt = arguments.length;
            if (cnt == 0) {
                // no arg
                console.log('CView.activeView input 0 => arg is null,means the view will active itself.');
                //trigger evActived
                this._evFactory.triggerEvent({
                    type: 'evActived',
                    sender: { viewID: this._strViewID, self: this }
                });
                //show the view
                this._showView(this.node, true);
            } else {
                // input many args
                // hidde all views
                for (var element in this._childViewObjsTree.childView) {
                    // let element = this._childViewObjsTree.childView[parseInt(i)];
                    this._showView(this._childViewObjsTree.childView[parseInt(element)].node, false);
                }
                // show the select views
                for (var i = 0; i < arguments.length; i++) {
                    var arg = arguments[i];
                    for (var _element in this._childViewObjsTree.childView) {
                        var thisView = this._childViewObjsTree.childView[parseInt(_element)];
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
    }]);

    return CView;
}();
// CView.prototype = {
//     constructor: CView, // fix constructor
// }

exports.default = CView;

/***/ }),

/***/ "./src/yutapp.js":
/*!***********************!*\
  !*** ./src/yutapp.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
var theApp = function () {
    function theApp() {
        _classCallCheck(this, theApp);

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


    _createClass(theApp, null, [{
        key: 'attachMainFrm',
        value: function attachMainFrm(aClassName) {
            if (typeof aClassName != 'function' || aClassName == null || aClassName == undefined) {
                console.error('theApp.attachMainFrm: invalid class name.');
                return;
            }
            var oMainFrm = new aClassName(this);
            theApp.m_hMainWnd = oMainFrm;
            oMainFrm.activeView(); // avtive itself, this line is used to trigger mainFrm's evActived.
        }
    }, {
        key: 'setAppName',
        value: function setAppName(aAppName) {
            if (aAppName != null && aAppName != undefined) {
                this.m_strAppName = aAppName;
            }
        }
    }, {
        key: 'setMainWnd',
        value: function setMainWnd(aWnd) {
            if (aWnd != null && aWnd != undefined) {
                this.m_hMainWnd = aWnd;
            }
        }
    }, {
        key: 'setStoreData',
        value: function setStoreData(aData) {
            if (aData != null && aData != undefined) {
                this.m_Store.setData(aData);
            }
        }
    }, {
        key: 'getStoreData',
        value: function getStoreData() {
            return this.m_Store.getData();
        }
        /** ---
             * THIS function provide tranverse all views in this APP, caller
             * can do his special operation by input call back fucntion.
             * THIS will input object handle of the views into callbakc func.
             *
             * @param cbFunc the call back function, that inputed by caller.
             */

    }, {
        key: 'traverseAllViews',
        value: function traverseAllViews(cbFunc) {
            /**
             * traverseNode, and exec _loadHtml() to render all views
             */
            function traverseNode(node) {
                if (node != undefined || node != null) {
                    if (typeof cbFunc == 'function') {
                        cbFunc(node);
                    }
                }
                if (node._childViewObjsTree.childView && node._childViewObjsTree.childView.length > 0) {
                    for (var i = 0; i < node._childViewObjsTree.childView.length; i++) {
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

    }, {
        key: 'whoami',
        value: function whoami() {
            alert("THIS is theAPP");
        }
    }]);

    return theApp;
}();
//
// if ( typeof window === "object" && typeof window.document === "object" ) {
//     window.theApp = window.yut = theApp//window.$;
// }
//


exports.default = theApp;
// })(window);

/***/ }),

/***/ "./src/yutools.js":
/*!************************!*\
  !*** ./src/yutools.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Tools set for yutls
 * Anthor: YangYutong
 * Create: 2018-4-12
 * change log:
 * 2018-12-13: change to class type with 'static' keyword, to force usage by class name. e.g. yutls.msgDebug()
 */
// (function(window,undefined){
//
var yutls = function () {
    function yutls() {
        _classCallCheck(this, yutls);

        this.gDebugData = 0;
        this.gDebugFlg = 0;
    }
    //-debug functions
    /**
     * set status of debug, and set the return string of debug url.
     * @param data: object of {debug:url string}.
     * @param flg: the type of debug. 
     *  e.g. 
     *  var data = {'noDebug':'/cgi-bin/cgi.cgi',
     *              'mock':'./debug/mock',
     *              'php':'./debug/action/action.test.php'};
     *   setGlobalDebugFlg(data, 'mock');
     *   ...
     *   getDebugUrl(); => this line return './debug/mock'
     */


    _createClass(yutls, null, [{
        key: "setGlobalDebugFlg",
        value: function setGlobalDebugFlg(data, flg) {
            if (data == null || data == undefined) {
                this.msgBox('invalid input data!');
                return;
            }
            //
            this.gDebugData = data;
            this.gDebugFlg = flg;
        }
    }, {
        key: "getDebugURL",
        value: function getDebugURL() {
            var type = this.gDebugFlg;
            return this.gDebugData[type];
        }
        //---

    }, {
        key: "msgBox",
        value: function msgBox(strMsg) {
            alert(strMsg);
        }
        //

    }, {
        key: "msgDebug",
        value: function msgDebug(strMsg) {
            console.debug(strMsg);
        }
        // Includes a script file by writing a script tag.

    }, {
        key: "includeJs",
        value: function includeJs(src) {
            document.write("<script type=\"text/javascript\" src=\"" + src + "\"></script>");
        }
        // Includes a style sheet by writing a style tag.

    }, {
        key: "includeCss",
        value: function includeCss(src) {
            // document.write("<style type=\"text/css\"> @import url(\"" +  src + "\"); </style>");
            var _style = document.createElement('style');
            _style.innerHTML = ' @import url(\"' + src + '\");';
            document.getElementsByTagName('head')[0].appendChild(_style);
            // console.log(_style.innerHTML);
        }
        /* -- Localizing: multi-language ---
            * aLanguage: { language: 'cn',
            *               htmlMap: {'cn': cnHtmlMap ,'en': enHtmlMap,},
            *               jsMap: {'cn': cnJsMap ,'en': enJsMap,} },
            */

    }, {
        key: "htmlSwitchLang",
        value: function htmlSwitchLang(aOption) {
            var map = aOption.htmlMap[aOption.language];
            for (var name in map) {
                var element = document.getElementById(name);
                if (null == element) {
                    console.log(name);
                } else {
                    element.innerHTML = map[name];
                }
            }
        }
    }, {
        key: "jsSwitchLang",
        value: function jsSwitchLang(aOption, aItem) {
            var map = aOption.jsMap[aOption.language];
            return map[aItem];
        }
        /**
             * convert number to string, and fill '0' before the number.
            */

    }, {
        key: "getzf",
        value: function getzf(num) {
            if (parseInt(num) < 10) {
                num = '0' + num;
            }
            return num;
        }
        /**
             * parse the time to yyyy-mm-dd hh:mm:ss
            */

    }, {
        key: "getDateByYMD",
        value: function getDateByYMD(ms) {
            var timeMs = Number(parseInt(ms));
            var oDate = new Date(timeMs),
                oYear = oDate.getFullYear(),
                oMonth = oDate.getMonth() + 1,
                oDay = oDate.getDate(),
                oHour = oDate.getHours(),
                oMin = oDate.getMinutes(),
                oSen = oDate.getSeconds(),
                oTime = oYear + '-' + yutls.getzf(oMonth) + '-' + yutls.getzf(oDay) + ' ' + yutls.getzf(oHour) + ':' + yutls.getzf(oMin) + ':' + yutls.getzf(oSen); //最后拼接时间
            return oTime;
        }
        /**
             * parse the time to hh:mm:ss
            */

    }, {
        key: "getDateByHMS",
        value: function getDateByHMS(ms) {
            var timeMs = Number(parseInt(ms));
            var oHour = parseInt(timeMs / (1000 * 60 * 60));
            var oMin = parseInt(timeMs % (1000 * 60 * 60) / (1000 * 60));
            var oSen = parseInt(timeMs % (1000 * 60) / 1000);
            var oTime = yutls.getzf(oHour) + ':' + yutls.getzf(oMin) + ':' + yutls.getzf(oSen);
            return oTime;
        }
        /**
         * check browser type
        */

    }, {
        key: "getBrowser",
        value: function getBrowser() {
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
        // Nokia ajax req

    }, {
        key: "ajaxReq",
        value: function ajaxReq() {
            //  xmlHttpRequest object   
            var request = null;

            // branch for native XMLHttpRequest object
            if (window.XMLHttpRequest && !window.ActiveXObject) {
                try {
                    request = new XMLHttpRequest();
                    try {
                        //  attach the Bypass code, if the browser is firefox
                        if (netscape.security.PrivilegeManager.enablePrivilege) {
                            //  duplicate the function
                            request._open = request.open;

                            //  redefine the function definition
                            request.open = function (method, url, flag) {
                                try {
                                    // Enable Universal Browser Read
                                    netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");

                                    //  call the native XmlHttpRequest.open method
                                    this._open(method, url, flag);
                                } catch (e) {
                                    //  call the native XmlHttpRequest.open method
                                    this._open(method, url, flag);
                                }
                            };
                        }
                    } catch (e) {
                        //  eatup all exceptions
                    }
                } catch (e) {
                    request = null;
                }
                // branch for IE/Windows ActiveX version
            } else if (window.ActiveXObject) {
                try {
                    request = new ActiveXObject("Msxml2.XMLHTTP");
                } catch (e) {
                    try {
                        request = new ActiveXObject("Microsoft.XMLHTTP");
                    } catch (e) {
                        alert('Failed to create XmlHttprequest');
                        return null;
                    }
                }
            }

            return request;
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

    }, {
        key: "ajax",
        value: function ajax(ajaxParam) {
            try {
                //
                var myErrFun = function myErrFun(msg) {
                    alert(msg);return;
                };
                //code the aParam


                var codeParamData = function codeParamData(data) {
                    var rc = "";
                    for (var name in data) {
                        rc += name + "=" + data[name] + "&";
                    }
                    return rc.substring(0, rc.length - 1); //encodeURIComponent( rc.substring(0, rc.length-1) );
                };
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
                if (typeof ajaxParam.success == "undefined") throw "No ajaxParam.success()";else aCallbackSucc = ajaxParam.success;
                var aCallbackErr;
                if (typeof ajaxParam.error == "undefined") aCallbackErr = myErrFun;else aCallbackErr = ajaxParam.error;
                // new req
                var xmlHttpReq = yutls.ajaxReq();
            } catch (e) {
                alert("XMLHttpRequest catch(" + e + ")");return;
            }

            xmlHttpReq.onreadystatechange = function () {
                var status;
                if (xmlHttpReq.readyState == 4) {
                    try {
                        status = xmlHttpReq.status; // == 200) {
                    } catch (e) {
                        alert(xmlHttpReq.status + e);
                    }

                    //operation with Server
                    if (status == 200) {
                        if (xmlHttpReq.responseText != null) aCallbackSucc(xmlHttpReq.responseText);else if (xmlHttpReq.responseXML != null) aCallbackSucc(xmlHttpReq.responseXML);else aCallbackErr("error:Response is NULL");
                    } else if (xmlHttpReq.readyState == 4 && status != 200 && status != 0) {
                        var err = "error: error status: " + status;
                        aCallbackErr(err);
                    }
                }
            };

            if ("get" == PostType) {
                // GET operation
                var aUrlGet = aUrl + "?" + aParam;
                //xmlHttpReq.open("GET", aUrl+"?username="+escape(aParam.UserName), true);
                xmlHttpReq.open("GET", aUrlGet, true);
                xmlHttpReq.send(null);
            } else if ("post" == PostType) {
                //POST operation
                xmlHttpReq.open("post", aUrl, true);
                //xmlHttpReq.setRequestHeader("Content-Length",aParam.length);
                if (0 != aHeaderContentType) {
                    /* "application/json" for new application
                    * "application/x-www-form-urlencoded" for normal application
                    */
                    xmlHttpReq.setRequestHeader("Content-Type", aHeaderContentType);
                }
                //aParam = "command=loginByUserPWD&login_user=zhangsan & login_pwd=1234";
                console.log('ajax->aParam:' + aParam);
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

    }, {
        key: "load",
        value: function load(aNode, aFileDat, cbFunc) {
            if (typeof cbFunc != 'function' || typeof aNode == 'undefined' || aNode == null) {
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
    }]);

    return yutls;
}();

//
// if ( typeof window === "object" && typeof window.document === "object" ) {
//     window.yutls = yutls;
// }


exports.default = yutls;
// })(window);

/***/ }),

/***/ "./version.js":
/*!********************!*\
  !*** ./version.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

class yutVersion {
    constructor() {
        this.name = 'YUT framework';
        this.releaseVer = '0.9.x'; 
     }
}

/* harmony default export */ __webpack_exports__["default"] = (yutVersion);
// ---- version ----
//[20181106] 0.9.x: first version, ready for YUT demo.
// TODO list:
// 1. [done]remove jQuery and replace loadfile() by import().
// 2. [doing]create new npm project of 'yur-cli' to create app framework by cli.


/***/ })

/******/ });
});
//# sourceMappingURL=yut.js.map