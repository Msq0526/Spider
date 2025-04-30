_null = function (){console.log("传入的值：", arguments[0])};

delete global;
delete Buffer;

window = {}
window.Date = Date
window.parseInt = parseInt
window.Math = Math
window.outerWidth = 1920
window.outerHeight = 1032.
window.addEventListener = function (){}
window.addEventListener.toString = function (){
    return `function addEventListener() { [native code] }`
}
window.DeviceOrientationEvent = function (){}
window.DeviceOrientationEvent.toString = function (){
     return `function DeviceOrientationEvent() { [native code] }`
}
window.DeviceMotionEvent = function (){}
window.DeviceMotionEvent.toString = function (){
         return `function DeviceMotionEvent() { [native code] }`
}
window.chrome = class chrome {}
window.Element = _null
window.HTMLElement = _null





Element = _null
Location = function Location(){}
Location.prototype={
    "ancestorOrigins": {},
    "href": "https://pifa.pinduoduo.com/",
    "origin": "https://pifa.pinduoduo.com",
    "protocol": "https:",
    "host": "pifa.pinduoduo.com",
    "hostname": "pifa.pinduoduo.com",
    "port": "",
    "pathname": "/",
    "search": "",
    "hash": ""
}
window.location = new Location()
Document = function Document(){}
Document.prototype={
    cookie: 'webp=true; api_uid=rBUUP2gRsnAJBhFUN0mcAg==; _nano_fp=XpmYnpUbX0Pyn5dYXo_oBrYLpj3EGlFl~H3fbfgs',
    referrer: '',
    createElement: function (name){
        console.log("document createElement", arguments)
    },
    getElementById: function (name){
        console.log("document getElementById", arguments)
        if(name === 'video'){
            return null
        }
        if(name === "mousedown"){
            return null
        }
        if(name === "mousemove"){
            return null
        }
        if(name === "click"){
            return null
        }
        if(name === "scroll"){
            return null
        }
    },
    addEventListener: function (name){
        console.log("document getElementById", arguments)
    },
    visibilityState: 'visible',
    documentMode: undefined,
}
HTMLDocument = function (){}
Object.setPrototypeOf(HTMLDocument.prototype, Document.prototype)
window.document = new HTMLDocument()
Screen = function Screen(){}
Screen.prototype={
    availWidth: 1920,
    availHeight: 1032,
    availLeft: 0,
    availTop: 0,
    colorDepth: 24,
    height: 1152,
    isExtended: false,
    onchange: null,
}
window.screen = new Screen()
Navigator = function Navigator(){}
Navigator.prototype={
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
	sendBeacon: _null,
    plugins: {length: 5},
};
window.navigator = new Navigator()
Storage = function Storage(){}
Storage.prototype={
    "PDD_PIFA_USN": "\"e6b5bafe-18d7-40a9-837d-7167e62c964f\"",
    "226_3_36_102_105_110_103_101_114_45_117_117_105_100_49_95_48_46_49_46_53": "226_3_72_57_49_51_99_102_54_98_99_45_102_50_51_55_45_52_98_49_50_45_97_48_56_102_45_55_50_50_98_55_50_52_100_52_55_55_98",
    "mms.pmm.did.2": "73185d83-5229-4929-8c01-c1abe29102d9",
    "__EMBED_AD_CONFIG__": "{\"date\":1745942400000,\"times\":2}",
    "USER_INFO": "{\"mallName\":null,\"d\":\"\",\"mallId\":1109942622550,\"logo\":null,\"id\":1109942622550,\"userName\":null,\"n\":\"\"}",
    "SEARCH_STORAGE_KEY": "[\"空调\"]",
    "_nano_fp": "XpmYnpUbX09yX5TxlT_9aUYYfiKuFTbWmKvm1TA0",
    "226_3_36_102_105_110_103_101_114_45_117_117_105_100_50_95_48_46_49_46_53": "226_3_72_102_55_102_52_49_97_102_101_45_49_52_97_53_45_52_52_102_98_45_56_100_102_97_45_52_100_54_102_53_97_102_53_51_97_57_97",
    "226_3_34_102_105_110_103_101_114_45_70_75_71_74_95_48_46_49_46_53": "226_3_64_117_51_82_66_76_114_116_106_84_107_101_102_121_54_72_107_52_50_100_117_89_65_76_117_114_79_100_81_100_118_115_117",
    "226_3_32_102_105_110_103_101_114_45_107_101_121_95_48_46_49_46_53": "226_3_64_81_120_103_48_89_53_114_114_75_98_118_73_72_101_72_72_105_82_80_98_114_105_101_76_85_120_69_122_88_97_116_116",
    getItem: function (value){
        console.log("localStorage getItem",arguments)
        if(value === "_nano_fp"){
            return 'XpmYnpUbX0Pyn5dYXo_oBrYLpj3EGlFl~H3fbfgs'
        }
    },
    setItem: function (value){
        console.log("localStorage setItem",arguments)
        if(value === "_nano_fp"){
            let _nano_fp_ = {}
            _nano_fp_ = watch(_nano_fp_, '_nano_fp')
            return _nano_fp_
        }
        if(value === "XpmYnpUbn0PqnpXbX9_9AwTHtc5uZw2_8T0xl6TL"){
            let _XpmYnpUbn0PqnpXbX9_9AwTHtc5uZw2_8T0xl6TL = {}
            _XpmYnpUbn0PqnpXbX9_9AwTHtc5uZw2_8T0xl6TL = watch(_XpmYnpUbn0PqnpXbX9_9AwTHtc5uZw2_8T0xl6TL, 'XpmYnpUbn0PqnpXbX9_9AwTHtc5uZw2_8T0xl6TL')
            return _XpmYnpUbn0PqnpXbX9_9AwTHtc5uZw2_8T0xl6TL
        }
    },
}
window.localStorage = new Storage()
History = function History(){}
History.prototype={
	scrollRestoration: "auto",
	state: null,
    back: function (){}
};
History.prototype.back.toString = function (){
    return `function back() { [native code] }`
}
window.history = new History()



function watch(o){
     return new Proxy(o,{
         set(target,key,value)
         {
             console.log('set',target,key,value);
             return Reflect.set(...arguments);
         },
         get(target,key,receiver)
         {
         		// 当key时buffer的时候 debugger
             if(key === 'Buffer'){
              // debugger
              console.log('=====>>>>>>Buffer!!!')
             }
             console.log('get',target,key,target[key]);
             return target[key];
         },
         deleteProperty:function(target,key){
             console.log('delete',target,key);
             return true
         }
     });
 }

window = watch(window,'window')
window.document = watch(window.document,'document')
window.location = watch(window.location,'location')
window.history = watch(window.history,'history')
window.screen = watch(window.screen,'screen')