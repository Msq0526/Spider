/*
url： https://www.haeea.cn/
加密接口：https://www.haeea.cn/
rs vmp
*/

!(function () {
    var console_log = console.log
    watch = function (obj, name) {
        if (typeof obj !== 'object' || obj === null) {
            throw new Error(`Cannot create proxy with non-object target for ${name}`);
        }
        return new Proxy(obj, {
            get(target, p, receiver) {
                // 过滤没用的信息，不进行打印

                if (name!=='contentWindow'&&p === "Math" ||p === "JSON" ||p === "RegExp" ||p === "atob" ||p === "parseInt" ||p === "String" || p === "Symbol" || p === "Proxy" || p === "Promise" || p === "Array" || p === "isNaN" || p === "encodeURI" || p === "Uint8Array" || p.toString().indexOf("Symbol(Symbol.") != -1|| p.toString().indexOf("Symbol(nodejs") != -1) {
                    var val = Reflect.get(...arguments);
                    return val
                }
                // if(p==='readyState'){
                //     debugger
                // }
                else {
                    var val = Reflect.get(...arguments);
                    if (typeof val === 'function') {
                        console_log(`取值:`, name, '.', p, ` =>function`);
                    }
                    else {
                        console_log(`取值:`, name, '.', p, ` =>`, val);
                    }
                    return val
                }
            },
            set(target, p, value, receiver) {
                var val = Reflect.set(...arguments)
                if (typeof value === 'function') {
                    console_log(`设置值:${name}.${p}=>function `,);
                }
                else {
                    console_log(`设置值:${name}.${p}=> `, value);
                }
                return val
            },
            has(target, key) {
                // 在检查属性存在性时输出一条消息
                console_log(`检查属性存在性: ${name}.${key.toString()}`);
                return key in target;
            },
            ownKeys(target){
                // debugger
                console_log(`获取自有属性:${name}`)
                if(name==='contentWindow_navigator'){
                    // debugger
                    return watch([],'contentWindow_navigator自有属性')
                }
                // if(name==='contentWindow'){
                //     debugger
                //     return watch([],'contentWindow_navigator自有属性')
                // }
                return Reflect.ownKeys(target)
            }
        })
    }
})();
(() => {
    const $toString = Function.toString;
    const myFunction_toString_symbol = Symbol('('.concat('', ')_'));
    const myToString = function toString() {
        return typeof this == 'function' && this[myFunction_toString_symbol] || $toString.call(this);
    };

    function set_native(func, key, value) {
        Object.defineProperty(func, key, {
            "enumerable": false,
            "configurable": true,
            "writable": true,
            "value": value
        })
    }

    delete Function.prototype['toString'];

    set_native(Function.prototype, "toString", myToString);

    set_native(Function.prototype.toString, myFunction_toString_symbol, "function toString() { [native code] }");

    safeFunction = (func) => {
        set_native(func, myFunction_toString_symbol, `function ${func.name}() { [native code] }`);
    };
}).call();
function makeFunction(name) {
    // 动态创建一个函数
    var func = new Function(`
        return function ${name}(arg) {
        // debugger
        console.log('makeFunction函数传参.${name}',...arguments)
        }
    `)();
    safeFunction(func)
    func.prototype = watch(func.prototype, `makeFunction方法原型:${name}.prototype`)
    func = watch(func, `makeFunction方法本身:${name}`)
    return func;
};

var content="metaContent"
_null = function (){console.log('传入的参数：', arguments[0])}

delete __dirname
delete __filename

window = globalThis;
window.top = window;
window.self = window;
window.DOMParser = _null
window.clearInterval = _null
window.setInterval = _null
window.setTimeout = _null
window.addEventListener = _null
window.XMLHttpRequest = _null
window.indexedDB = watch({
    open: function (value){
        if(value === "EkcP"){
            return {}
        }
    }
}, 'indexedDB')
window.name = '$_YWTU=WRlpl7Ln83x1kR3US7dRVJRITnt0DCBwvxOroBCFLCl&$_YVTX=ikQ&vdFm='
window.ActiveXObject = undefined;
window.localStorage = {
    "$_YVTX": "ikG",
    "$_YWTU": "WRlpl7Ln83x1kR3US7dRVJRITnt0DCBwvxOroBCFLCl",
    "loglevel": "SILENT",
    "_$rc": "mbuyXv8NYArAqlLqSDtcoXVGmKX40eCw_0Hv0fCSv7dK7kGOOMxNt9I6G5GKuKFrimBi0tAp6qyISNiBNbs.YFkBDul3FVinnTKfz1r3mz7TmU70Ul3lRvfcesjM.Brpjm1By.eIxDN0XEyF3m2yibtGlEjHUpD2oDgjfNIQWamh7U_uekODIStCx04Qr3crVpFr0HiHwrp9aJ3UIo7oDuYwt.9PaPvdGzSv6lppoIuDTYfvWpydHR0DolyVePmdhJ742eFZOTcabZm0oKeo41wtieGYN9Zm3uB_xPRRpeDQbIK.3tYl6UoDA.qt68mVhnPwENd9MrmV8tiDEBEGBfjcKgaCSzDOr12PYu4prtdidZwxzrXW7l.xIr3WnwA8loKrk4Yfnum5GabfDSHHAMJQRScoUuDHzdB6iaO0KFg9jzmCC12NkrGMzlemv9YFe.E2zn3k5mWC4Zrm4fB4RTk8WUrronWUjckXbuiC.hdBU5.t.ordoWpoelWxHwMLiOKJcuTrSHcYAuCDCODcZcfZ_8QeiT1W5y1Qhsbt8xH20plg23tuzoZxnwb1L.HTTtzQgUYSvYIFzzKH7nOe0yjb4trL3opH9K_4Kz44_LtlXQ4A81z5CnKeXHgSyRhjX0Q5Jm8RUoxzjO_dKQHielotV1Tu_8Ntkj7JByMKrHJSzT37k.H66jtTSIEeqFgE_TcghMpRGIPJlXCbbowazfmCWwkFVbQnNINsrDsXZ7FaaDcOG1Jk6LGQkbEDIiCoLiQBg_27xQQRiwk8",
    "__#classType":"localStorage",
    "___TS___":"___TS___",
    removeItem: function (key){
        return this[key]
    },
    getItem: function (key){
        return this[key]
    },
    setItem: function (key){
        return this[key]
    },
}
window.sessionStorage = {
    "$_YWTU": "WRlpl7Ln83x1kR3US7dRVJRITnt0DCBwvxOroBCFLCl",
    "$_YVTX": "ikQ",
    getItem: function (key) {
        return this[key]
    },
    removeItem: function (key) {
        return this[key]
    },
    setItem: function (key) {
        return this[key]
    },
}


document = {}
document.cookie = ''
document.visibilityState = 'visible'
var _script0 = watch({
    getAttribute: function (value){
        if (value === 'r')
            return 'm'
        debugger
    },
    parentElement: watch({
        removeChild: function (obj){
            return obj
        }
    }, '_script0.parentElement')
}, '_script0')
var _script1 = watch({
    getAttribute: function (value){
        console.log("传入的参数：",arguments[0])
        if(value === 'r')
            return 'm'
        debugger
    },
    parentElement: watch({
        removeChild: function (obj){
            return obj
        }
    }, '_script1.parentElement')
}, '_script1')
document.appendChild = _null
document.removeChild = _null
document.documentElement = _null
document.addEventListener = _null
document.createElement = function (value){
    console.log("document createElement取值：", arguments[0])
    if(value === 'div'){
        let _div = {
            getElementsByTagName: function (value){
                if(value === 'i'){
                    console.log("_div getElementsByTagName取值：", value)
                    let _i = []
                    _i = watch(_i, 'getElementsByTagName.i')
                    return _i
                }
            }
        }
        _div = watch(_div, 'div')
        return _div
    }
    debugger
}
document.getElementsByTagName = function (value){
    console.log("document getElementsByTagName取值：", arguments[0])
    if(value === 'script'){
        let _script = [_script0,_script1]
        _script = watch(_script, 'getElementsByTagName.script')
        return _script
    }
    if(value === 'base'){
        let _base = []
        _base = watch(_base, "document getElementsByTagName传参base取值：")
        return _base
    }
    debugger
}
document.getElementById = function (value){
    if (value === "qAx7NxyxCzEz")
        var _meta = {
            "meta_id": "qAx7NxyxCzEz",
            content: content,
            "r": "m",
            getAttribute: function (value){
                if(value === 'r'){
                    return "m"
                }
                debugger
            },
            parentNode: watch({
                removeChild: function (obj){
                    return obj
                }
            },'parentNode')
        }
        _meta = watch(_meta, 'meta')
        return _meta
}


location = {
    hash: "",
    host: "www.haeea.cn",
    hostname: "www.haeea.cn",
    href: "https://www.haeea.cn/",
    origin: "https://www.haeea.cn",
    pathname: "/",
    port: "",
    protocol: "https:",
    search: "",
}
navigator = {
    appCodeName: "Mozilla",
    appName: "Netscape",
    appVersion: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
    cookieEnabled: true,
    deprecatedRunAdAuctionEnforcesKAnonymity: false,
    maxTouchPoints: 0,
    deviceMemory: 8,
    language: "zh-CN",
    platform: "Win32",
    product: "Gecko",
    productSub: "20030107",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
    vendor: "Google Inc.",
    vendorSub: "",
    webdriver: false,
    webkitPersistentStorage: {},
    connection  : {
        downlink: 1.75,
        effectiveType: "4g",
        onchange: null,
        rtt: 50,
        saveData: false
    }
}
history = {
    length: 2,
    scrollRestoration: "auto",
    state: null,
    replaceState: _null
}




window = watch(window,'window');
document = watch(document,'document');
location = watch(location,'location');
navigator = watch(navigator,'navigator');
history = watch(history,'history');
sessionStorage = watch(sessionStorage,'sessionStorage');
localStorage = watch(localStorage,'localStorage');


'auto_js'
'ts_js'





function get_cookie(){
    // console.log((document.cookie).length)
    return document.cookie
}

// get_cookie()

// 调试使用
// debugger;