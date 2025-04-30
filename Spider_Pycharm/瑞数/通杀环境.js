/*
content 参数需传入
location 参数需要修改
"auto_js" 需要传入TS代码
"ts_js"  需要传入外链代码
*/



/// 补环境代理前缀 --- MY
(() => {
	const origin_log = console.log
	console_log = function() {
		return origin_log(...arguments)
	}
})();;;
!(function() {
	watch = function(obj, name) {
		return new Proxy(obj, {
			get(target, p, receiver) {
				if (name) {
					if (p === 'Math' || p === 'btoa' || p === 'Number' || p === 'parseFloat' || p == 'String' || p == 'Object' || p == 'Symbol' || p === 'Proxy' || p === "Promise" || p === "Array" || p === "isNaN" || p === "encodeURI" || p === "Uint8Array") {
						var val = Reflect.get(...arguments)
						return val
					} else {
						var val = Reflect.get(...arguments)
						if (typeof val === 'function') {
							console_log("取值: ", name, ".", p, "=>", 'function')
						} else {
							console_log(`取值: `, name, '.', p, '=>', val)
						}
						return val
					}
				}
			},
			set(target, p, value, receiver) {
				var val = Reflect.set(...arguments)
				if (typeof value === 'function') {
					console_log(`设置值为:${name}.${p}=>function`,);
				} else {
					console_log(`设置值:${name}.${p}=>`, value);
				}
				return val
			}
		})
	}
})()
function makeFunction(name) {
	var func = new Function(`
                return function ${name}(){
                        console_log('参数.${name}',arguments)
                }
                `)();
	safeFunction(func);
	func.prototype = watch(func.prototype, `方法原型${name}.protype`);
	func = watch(func, `方法本身:${name}`);
	return func;
};
(() => {
	Function.prototype.$call = Function.prototype.call;
	const $toString = Function.toString;
	const myFunction_toString_symbol = Symbol('('.concat('', ')_'));
	const myToString = function toString() {
		return typeof this == 'function' && this[myFunction_toString_symbol] ||
			$toString.$call(this);
	};

	function set_native(func, key, value) {
		Object.defineProperty(func, key, {
			"enumerable": false,
			"configurable": true,
			"weitable": true,
			"value": value
		})
	};

	delete Function.prototype['toString'];
	set_native(Function.prototype, "toString", myToString);
	set_native(Function.prototype.toString, myFunction_toString_symbol, "function toString() { [native code] } ");

	safeFunction = (func) => {
		set_native(func, myFunction_toString_symbol, `function ${func.name}(){ [native code] }`)
	}

})();;;

Object.getOwnPropertyDescriptor_ = Object.getOwnPropertyDescriptor;
Object.getOwnPropertyDescriptor = function(target, prop) {
	var val = Object.getOwnPropertyDescriptor_(target, prop);
	val = watch(val, `${prop}描述符`);
	return val;
};
safeFunction(Object.getOwnPropertyDescriptor);

Object.getPrototypeOf_ = Object.getPrototypeOf;
Object.getPrototypeOf = function(target) {
	var val = Object.getPrototypeOf_(target);
	val = watch(val, `getPrototypeOf原型`)
	return val

};
safeFunction(Object.getPrototypeOf);

let content = content;  // 需要每次传入

_null = function (){console.log("传入的值：", arguments[0])};


window = globalThis;
// delete globalThis;
window.top = window;
window.setTimeout = _null;
window.setInterval = _null;
window.addEventListener = makeFunction('addEventListener');
window.DOMParser = makeFunction('DOMParser');
window.ActiveXObject = undefined;
window.msCrypto = undefined;
window.name = '$_YWTU=1UU_Wdac4ZUSAU2P447YVS2rRAlDRKAK1yD7cqwArmW&$_YVTX=WG&vdFm=';
window.localStorage = {
	"$_YWTU": "1UU_Wdac4ZUSAU2P447YVS2rRAlDRKAK1yD7cqwArmW",
	"_$rc": "zeYV.6wR6R9b7ZIMfFxi59L.klMM5GsNqwQUEhJdrp1iKjYaSIDaHEcq7gFbeg8p167THT1uKG9V_XTQ0sDzKKR7JhlYYTupcZrnYYlcGFSsh6x9DqsQxi3K9PI1qGFJv73C8_05zflHKEYvP1GBuluzgakR3sSSGNzR04BGOussunOLq5hLrGJAd0TCfdUKAtMxQgJmqbXvItXFq4RY3uYblVYzTnf5yhhhR3lnDdrMgg_c9iGzZFzvqfynsETN.k4BXNkKiiWjXHX71PDj6xD1zzEq5ootul9HZYkpAXT675slB6zZeun6R9O7YTb09ek02Br2iJUv30u5NOMmf8JQpUXoc9hZqwpYnqisItcO8fGxx7ziwV8Eeu_XNAYb9qb4mVuM6aNs6YbSeWHFawHlcS5jqRouHDRAdl6LFOMhWWrEqKBdb35PLTeCCQHbZYr1ODSaphQzusQukn0E2H5mocHfjx3fn5aeaBH2RLUggHo.KmT7BOFkm9wpuJn5YLHNMlZraCwhq4u4TOune3Fxb5rI6jedZzJT70bXWRTe8U1zICtryiaQXjTy4xZ.DUY0N0px4IWJuYA31ZfV.Kss6zs.oDL3_WpbQT0DSJpFTPoyAU_F_pCNJwJQ2QD8mC8DMTdHK_pYS0qa7il0MPl4xsJBd4v3HAr87ebaNXvuMkGP1m7y7rn1AiJBFi0CzdmnltJUmN07jXevmApO0zhXgLNaaYfCppFpZMxyQDFnMVVZXec6oM0ulNgDB9gyDtZXaXJRh6s5oczA",
	"__#classType": "localStorage",
	"loglevel": "SILENT",
	"$_YVTX": "WG",
	removeItem: function (value){
		console.log("localStorage removeItem", arguments)

	},
	getItem: function (value){console.log("localStorage getItem", arguments)},
	setItem: function (value){console.log("localStorage setItem", arguments)},
};
window.sessionStorage = {
	"$_YWTU": "1UU_Wdac4ZUSAU2P447YVS2rRAlDRKAK1yD7cqwArmW",
	"$_YVTX": "WG"
};
window.indexedDB = watch({
	open: _null
}, 'indexedDB');
window.XMLHttpRequest = makeFunction('XMLHttpRequest');
window.self = window;
window.chrome = function (){console.log("window chrome",arguments)};
window.webkitRequestFileSystem = _null;
window.CanvasRenderingContext2D = _null;
window.HTMLCanvasElement = _null;
window.WebSocket = _null;
window.innerHeight = 911;
window.innerWidth = 150;
window.outerHeight = 1032;
window.outerWidth = 1920;
window.TEMPORARY = 0;

document = {
	createElement: function (name){
		console.log("document createElement", arguments)
		if(name === 'div'){
			let _div = {
				getElementsByTagName: function (name){
					console.log("div getElementsByTagName", arguments)
					let _i = []
					_i = watch(_i, "i")
					return _i
				}
			}
			_div = watch(_div, "document.createElement")
			return _div
		}
		if(name === 'a'){
			let _a = {}
			_a = watch(_a , "a")
			return _a
		}
	},
	getElementById: function (name){
		console.log("document getElementById", arguments)
		if(name === "iNdn2UqokuPw"){
			let _meta = {
				meta_id: "iNdn2UqokuPw",
				content: content,
				r : "m",
				getAttribute: function (name){
					console.log("getElementById getAttribute", arguments)
					if(name === 'r'){
						return "m"
					}
				},
				parentNode: watch({
					removeChild: function (name){console.log("meta parentNode.removeChild", arguments)}
				}, 'parentNode')
			}
			_meta = watch(_meta, 'meta')
			return _meta
		}
	},
	getElementsByTagName: function (name){
		console.log("document getElementsByTagName", arguments)
		if(name === 'base'){
			let _base = []
			_base = watch(_base, 'base')
			return _base
		}
		if(name === 'script'){
			let _script = []
			_script = watch(_script, "script")
			return _script
		}
	},
	documentElement: watch({}, 'documentElement'),
	cookie: '',
	visibilityState: 'visible',
	addEventListener: _null,
	appendChild: _null,
	removeChild: _null,
};
screen = {};
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
    languages: ["zh-CN","zh"],
	getBattery: _null,
	sendBeacon: _null
};
history = {
	scrollRestoration: "auto",
	state: null,
	replaceState: function (){console.log("history replaceState", arguments)},

};
location = {};  //传入网站的

window = watch(window, 'window');
location = watch(location, 'location');
document = watch(document, 'document');
screen = watch(screen, 'screen');
navigator = watch(navigator, 'navigator');
localStorage = watch(localStorage, 'localStorage');
history = watch(history, 'history');


"auto_js"    // 需要传入TS代码
"ts_js"      // 需要传入外链代码
// require('./ts')
// require('./jm')


function get_cookie(){
    console.log((document.cookie).length)
    return document.cookie
};

// get_cookie();

debugger;