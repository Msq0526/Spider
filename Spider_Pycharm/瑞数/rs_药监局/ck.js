/*
url： https://www.nmpa.gov.cn/
加密接口：https://www.nmpa.gov.cn/
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
window.ActiveXObject = undefined
window.indexedDB = watch({}, 'indexedDB')
window.addEventListener = _null
window.setInterval = _null
window.setTimeout = _null
window.open = _null
window.name = '$_YWTU=yiqUXPMNATudwnJHcIM1ywhBZhfeUB8nGF6uG58yyaa&$_YVTX=WsQu&vdFm='
window.localStorage = {
    "$_YWTU": "yiqUXPMNATudwnJHcIM1ywhBZhfeUB8nGF6uG58yyaa",
    "_$rc": "UszH0L3iOIt9uWVjbdPEhzIIXyZhuHSf.h4tgmjL2_a7JwNbfXgof5yz212bvuabVVtJ5UTxT77AKnH6JOJr7qz2miEgELCfpbYhkEgbovEzXklNW3TBIcHsH4kusLYjI4roTzw2EPyp6kiLxQAsQ3.Mia7obU4emu8tkVOIPtWJtZ3Ae2H5b8vhiX.uEiDGiUx85WVnQLbrD2tcsy8HZxpr2m6Y0q2C4FuMitkhs8UJa9u36fOxVf2P14qNTdIwxd2J0EjuIiDk3.JLgIvBd20dyZg8nUUZbD.fpdMI9MFESrvhyUaMPgyKXz3FR_yZt97Cgftftqm3kkukCmN8pSikMEJRro4GqOVHilZ0yXbum0BmXBD0PXovjhg134l9ofU7j8ZJUb4uL344HcYWAFCf9MTu.mKAqkJsYgCJLk6f9LUl6Y36RWhjczcC872TwiXaTYW.8MNdZDDa.WoGWHP.bP5OCXbpudjnakRuTErZIW8TOlNxobUsKKHRf_t4P_uKpVOorLEfiinyRwA2JAD4v4J76oyLx6rO7tLjpjhqxFBfp3KMVOcAMv6J9.6SuYJtvQlZau7KJQ6c2smpO_V_Px_1ofj.x2LWGcqjNjxQboAwOE8Mh28J.0p8zlijoqODsGOQDzdclbZniiRwRrJS61UVQdkOmIW5XwzwImv4g9O.ttvGB.Sc7Y1b10UnowJyxWd_auNUcOjYJbtAFLsMtp8ePxtQWDGYl8QQhfup2_1ALj3j6hsUHNQKZja_9YyT7GQG4ATLBkQq",
    "__#classType": "localStorage",
    "loglevel": "SILENT",
    "$_YVTX": "WsQu"
}
window.sessionStorage = {
    "$_YWTU": "yiqUXPMNATudwnJHcIM1ywhBZhfeUB8nGF6uG58yyaa",
    "$_YVTX": "WsQu"
}

var _script0 = watch({
    getAttribute: function (value){
        if(value === "r"){
            return "m"
        }
    },
    parentElement: watch({
        removeChild: function (obj){
            return obj
        }
    }, "parentElement")
}, "_script0")
var _script1 = watch({
    getAttribute: function (value){
        if(value === "r"){
            return "m"
        }
    },
    parentElement: watch({
        removeChild: function (obj){
            return obj
        }
    }, "parentElement")
}, "_script1")
var _meta0  =watch({}, "_meta0")
var _meta1  =watch({
    getAttribute: function (value){
        if (value === 'r'){
            return "m"
        }

    },
    parentNode: watch({
        removeChild: function (obj){
            return obj
        }
    }, 'parentNode'),
    content: content
}, "_meta1")
document = {
    cookie: '',
    appendChild: _null,
    removeChild: _null,
    visibilityState: 'visible',
    createElement: function (name){
        if(name === 'div'){
            let _div = {
                getElementsByTagName: function (value){
                    if(value === 'i'){
                        let _i = []
                        _i = watch(_i, 'getElementsByTagName.i')
                        return _i
                    }

                }
            }
            _div = watch(_div, 'document.createElement取值：')
            return _div
        }
        if(name === 'a'){
            let _a = {}
            _a = watch(_a , "a")
            return  _a
        }

    },
    getElementsByTagName: function (value){
        if(value === 'script'){
            let _script = [_script0, _script1]
            _script = watch(_script, "getElementsByTagName._script")
            return _script
        }
        if(value === "meta"){
            let _meta = [_meta0,_meta1]
            _meta = watch(_meta , "meta")
            return _meta
        }
        if(value === "base"){
            let _base = []
            _base = watch(_base, "base")
            return _base
        }
    },
    getElementById: function (value){
        if(value === "root-hammerhead-shadow-ui"){
            return null
        }
        if(value === "a"){
            return null
        }
    },
    documentElement: function (value){
        let head = {}
        head = watch(head , "head")
        return head
    },
    addEventListener: _null,
}
location = {
    "ancestorOrigins": {},
    "href": "https://www.nmpa.gov.cn/",
    "origin": "https://www.nmpa.gov.cn",
    "protocol": "https:",
    "host": "www.nmpa.gov.cn",
    "hostname": "www.nmpa.gov.cn",
    "port": "",
    "pathname": "/",
    "search": "",
    "hash": ""
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
    },
    languages: ["zh-CN","zh"]
}
history = {}




window = watch(window,'window');
document = watch(document,'document');
location = watch(location,'location');
navigator = watch(navigator,'navigator');
history = watch(history,'history');



"auto_js"
"ts_js"
// require('./ts')
// require('./jm')

function get_cookie(){
    console.log((document.cookie).length)
    return document.cookie
}

// get_cookie()

// 调试使用
// debugger;