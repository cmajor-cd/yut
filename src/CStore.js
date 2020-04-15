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
class CStore {
    constructor() {
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
    regRenderData(aData) {
        if ((Object.prototype.toString.call(aData) != '[object Object]')
            && (Object.prototype.toString.call(aData) != '[object Array]')) {
            console.error('yut error: ' + 'the type of aData should be [Object or Array]!');
            return false;
        }
        // start the observer listen
        this._observer(aData);
    }
    _observer(aData) {
        if (Object.prototype.toString.call(aData) == '[object Array]') {
            this._overrideArrayPrototype(aData, path);
        }
        Object.keys(aData).forEach((variantName) => {
            let oldVal = aData[variantName];
            Object.defineProperty(aData, variantName, {
                get: function () {
                    return oldVal;
                },
                set: (function (newVal) {
                    //m_bForceFresh=>refresh the variant wether it has been changed or not
                    //this is the init view page case!
                    if ((this.m_bForceFresh) || (oldVal != newVal)) {
                        if (Object.prototype.toString.call(newVal) == '[object Array]') {
                            // check sub objects
                            this._observer(newVal);
                        }
                        // work on the variant
                        this._renderCb(variantName, newVal, oldVal);
                        oldVal = newVal;
                    }
                }).bind(this),
            }); // end of Object.defineProperty
            if ((Object.prototype.toString.call(aData[variantName]) == '[object Object]')
                || (Object.prototype.toString.call(aData[variantName]) == '[object Array]')) {
                this._observer(aData[variantName]);
            }
        }, this); // end of Object.keys
    }
    //--- ARRAY VARIANT OBSERVE
    _overrideArrayPrototype(aArrayData, owner) {
        //1. save the original one
        var originalPrototype = Array.prototype,
            //2. create new one
            overridePrototype = Object.create(Array.prototype), _this = owner, result;
        ArrayAction = ['push', 'pop', 'shift', 'unshift', 'short', 'reverse', 'splice'];
        ArrayAction.forEach((method) => {
            Object.defineProperty(overridePrototype, method, {
                value: function () {
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
    _renderCb(variantName, newVal, oldVal) {
        let id = this._renderData2CbMap[variantName];
        // console.log(variantName+'<>'+id);
        if (id != undefined) {
            var element = document.getElementById(id);
            if (element) {
                element.innerHTML = newVal;
            }
        }
        else {
            console.warn('yut warning: ' + 'CStore._renderCb:: invalid variant! ');
        }
    }
    setRenderData(aData) {
        this._renderData = aData;
    }
    getRenderData() {
        return this._renderData;
    }
    /**
     * manage a mapping table for data<=>html refresh
     * {variantName: ID}
     */
    actRenderData2CbMap(aAct, aKeyVariName, aID) {
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
                console.error('yut error: ' + 'CStore:: unknow action in actRenderData2CbMap! ');
        }
        // console.log(this._renderData2CbMap);
    }
    setData(aData) {
        if ((aData != null) && (aData != undefined)) {
            this._data = aData;
        }
    }
    getData() {
        return this._data;
    }
}
// CStore.prototype = {
//     constructor: CStore,
// }

export default CStore;
// export { CStore };