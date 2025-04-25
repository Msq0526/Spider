let content="wtzuuIe06d4sFzQAMDZjb9yP21C8wFookb.ACEIKrECxkjS8PTSyT76twNHWGFPc"


_null = function (){
    console.log("传入参数：", arguments[0])
}



window = global;
window.top = window;
window.addEventListener = function (){console.log(arguments)}
window.attachEvent = function (){console.log(arguments)}
window.DOMParser = _null
window.setInterval = _null
window.setTimeout = _null
window.localStorage = {
    "$_YWTU": "WRlpl7Ln83x1kR3US7dRVJRITnt0DCBwvxOroBCFLCl",
    "_$rc": "pzr9aGDU2rMS12IumGdNSBto12VLGVtM71CnzK.lO5onCQAzOowTt8i7y1vlW69FUYJtc0vhXj9A7aQYQDdSwBS4t.uk6Eo0m_LF8900AeYSIeLkagTH.BbJBQP7sKkjqUUZ.5mQZJdcb9l_aifvbxy_str3R024M3d7BcQMSEtuq1MTEEIql0HaNkLDaaNhpA.uqWt9bo9LXXNaDq3uyix8ewVfFIL.DdpevCO.wltvNUhaF4punLDzGFa0L1N0OAsY_PmhXz2svjCFRDerSZ7doUTGtGrPlOMc7AdQBPHkjzBYf2VQdLQbypj2OHtgEe5gQosOEr_zFIQqQIqM8eim0ev7RCNeaDoCF..qQO39GDP.dwIjTsZ.jRHjbzmvR.wCesJIL0YXH1pzq7vOnBD2DgzDxyM9l4v.o3OwcZ6TVLW4MCJJw9fDoESkBcaTa6HgycRIlGu_7rVYS3_YqUoa.Ug49PwF_gbxHggZkh.dtFokdfEjD0A5yiifspNHIgcVKf.Ppl39fjSvj0qxzNKXvD8XR6Z1vaQWoHULdbiwkYpSEC9BN916ULg0TKxzaXfyZIaDa_RHzuh.M81kwnU3.a7kwX.CEgsBw_U7qXRvFqQ0A2O5cC2hXstUOxIs1nUTfBnJJRWcx4ELmKQAbl9sQQ3xv7Ua3XTeuDBKV6_3s1fEh8Y9VHdDknWAuFPPIQ3jfs9LjPXrpVwMA8i1HfSwL4gNkgMaBnvMuwgaxREXU3EeV35wzPKTGDN8s82ZvnhAltO1UH4kPWih",
    "__#classType": "localStorage",
    "loglevel": "SILENT",
    "$_YVTX": "JG"
}
window.sessionStorage = {
    "$_YWTU": "WRlpl7Ln83x1kR3US7dRVJRITnt0DCBwvxOroBCFLCl",
    "$_YVTX": "JG"
}
window.name = ''
window.webkitRequestFileSystem = _null
// window.MutationObserver = _null
window.CanvasRenderingContext2D = _null
window.HTMLCanvasElement = _null


document = {
    charset: 'UTF-8',
    characterSet: 'UTF-8',
}
div = {
    getElementsByTagName: function (){
        console.log('获取元素：', arguments[0])
        switch (arguments[0]){
        case 'i':
            return [];
        default:
            return [];
    }
    }
}
document.createElement = function (){
    console.log('创建对象：', arguments[0])
    switch (arguments[0]){
        case 'div':
            return div;
        default:
            return {};
    }
}
document.appendChild = function (){console.log(arguments)}
document.removeChild = function (){console.log(arguments)}
document.getElementsByTagName  = function (){
    console.log('获取元素',arguments)
    switch (arguments){
        case 'script':
            return [];
        default:
            return [];
    }
}
head = {
    "mate_http-equiv": "Content-Type",
    "mate_id": "qAx7NxyxCzEz",
    "content": content,
    removeChild: function (value){
        console.log("传入参数：", arguments[0])
        return {}
    }
};
meta = {
    meta_id: "qAx7NxyxCzEz",
    content: content,
    getAttribute: function (value){
        console.log("meta getAttribute 传值：", value)
        if(value === "r"){
            return "m"
        }
    },
    parentNode: head
}
document.getElementById = function (value){
    console.log('获取元素',arguments[0])
    if(value === "qAx7NxyxCzEz"){
        console.log("document getElementById 取值：", value)
        return meta
    }
}
document.addEventListener = _null
document.attachEvent  = _null
document.visibilityState = 'visible'

connection = {}



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
    language: "zh-CN",
    platform: "Win32",
    product: "Gecko",
    productSub: "20030107",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
    vendor: "Google Inc.",
    vendorSub: "",
    webdriver: false,
    webkitPersistentStorage: {}
}

history = {
    length: 2,
    scrollRestoration: "auto",
    state: null,
}

delete __dirname
delete __filename

window = new Proxy(window, {
    set(target, property, value, receiver) {
        console.log("设置属性set window", property, typeof value);
        return Reflect.set(...arguments);
    },
    get(target, property, receiver) {
        console.log("获取属性get window", property, typeof target[property]);
        return target[property]
    }
});

function proxy (proxy_array) {
    for (let i=0; i<proxy_array.length; i++){
        eval(proxy_array[i] + `= new Proxy(` + proxy_array[i] + `, {
            get(target, key) {
              if(key == '你需要debugger的属性'){
                debugger;
              }
              console.log('----------------------')
              // console.log( '【` + proxy_array[i]+ `// 】取属性 ' + key + ', 详细位置debugger查看');
              // target[key] 为某些对象时, 拼接字符串会异常，如 window['document']
              console.log( '【` + proxy_array[i]+ `】取属性 ' + key + ' 值: ' + target[key] + ', 详细位置debugger查看');
              console.log('----------------------')
              return target[key];
            }
        });`)
    }
}
// 数组中放入需要代理的对象
var proxy_array = ['document', 'navigator','location', 'history','div','meta','head'];
proxy(proxy_array);