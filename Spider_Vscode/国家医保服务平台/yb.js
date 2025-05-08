

require("./loader_1")

// 生成固定的值l
var r = window.zhiyuan("68b2")
a = r.sm,
o = r.sm2,
s = r.sm4
l = (window.zhiyuan("94f8"),
{
    appCode: "T98HPCGN5ZVVQBS8LZQNOAEXVI9GYHKQ",
    version: "1.0.0",
    appSecret: "NMVFVILMKT13GEMD3BKPKCTBOQBPZR2P",
    publicKey: "BEKaw3Qtc31LG/hTPHFPlriKuAn/nzTWl8LiRxLw4iQiSUIyuglptFxNkdCiNXcXvkqTH79Rh/A2sEFU6hjeK3k=",
    privateKey: "AJxKNdmspMaPGj+onJNoQ0cgWk2E3CYFWKBJhpcJrAtC",
    publicKeyType: "base64",
    privateKeyType: "base64"
});
u = l.appCode
, c1 = l.appSecret
, h = l.publicKey
, d1 = l.privateKey;
var e = window.zhiyuan("b639").Buffer;

// 获取时间戳，测试使用
// s1 = Math.ceil((new Date).getTime() / 1e3)
// timestamp = s1
// 传入的值未加密，测试使用
// t = {
    // "transformRequest": {},
    // "transformResponse": {},
    // "timeout": 30000,
    // "xsrfCookieName": "XSRF-TOKEN",
    // "xsrfHeaderName": "X-XSRF-TOKEN",
    // "maxContentLength": -1,
    // "headers": {
    //     "common": {
    //         "Accept": "application/json, text/plain, */*"
    //     },
    //     "delete": {},
    //     "get": {},
    //     "head": {},
    //     "post": {
    //         "Content-Type": "application/x-www-form-urlencoded"
    //     },
    //     "put": {
    //         "Content-Type": "application/x-www-form-urlencoded"
    //     },
    //     "patch": {
    //         "Content-Type": "application/x-www-form-urlencoded"
    //     },
    //     "Accept": "application/json",
    //     "Content-Type": "application/json",
    //     "channel": "web",
    //     "x-tif-signature": "4129519bddbddf2361e3897688974f23f6013f0668d394ae7cbedd676a9a840d",
    //     "x-tif-timestamp": timestamp,
    //     "x-tif-nonce": "U1jUop63",
    //     "contentType": "application/x-www-form-urlencoded"
    // },
    // "withCredentials": "false",
    // "baseURL": "/ebus/fuwu/api",
    // "method": "post",
    // "url": "/nthl/api/CommQuery/queryFixedHospital",
    // "data": {
    //     "data": {
    //         "addr": "",
    //         "regnCode": "110000",
    //         "medinsName": "",
    //         "medinsLvCode": "",
    //         "medinsTypeCode": "",
    //         "outMedOpenFlag": "",
    //         "pageNum": 2,
    //         "pageSize": 10,
    //         "queryDataSource": "es"
    //     },
    //     "appCode": "T98HPCGN5ZVVQBS8LZQNOAEXVI9GYHKQ",
    //     "version": "1.0.0",
    //     "encType": "SM4",
    //     "signType": "SM2",
    //     "timestamp": timestamp
    // }
// }


function m(e) {
    var t = {}
        , n = ["signData", "encData", "extra"];
    for (var i in e)
        e.hasOwnProperty(i) && !n.includes(i) && null != e[i] && (t[i] = e[i]);
    return t
}
function p(e) {
    var t = new Array
        , n = 0;
    for (var i in e)
        t[n] = i,
            n++;
    var r = [].concat(t).sort()
        , o = {};
    for (var a in r)
        o[r[a]] = e[r[a]];
    return o
}
function v(e) {
    var t = [];
    for (var n in e)
        if (e.hasOwnProperty(n) && (e[n] || "".concat(e[n])))
            if ("data" === n) {
                var i = Object.assign({}, e[n]);
                for (var r in i) {
                    if ("number" != typeof i[r] && "boolean" != typeof i[r] || (i[r] = "" + i[r]),
                        Array.isArray(i[r]) && !i[r].length && delete i[r],
                        Array.isArray(i[r]) && i[r].length > 0)
                        for (var o = 0; o < i[r].length; o++)
                            i[r][o] = p(i[r][o]);
                    null != i[r] && i[r] || delete i[r]
                }
                var a = p(i);
                t.push("".concat(n, "=").concat(JSON.stringify(a)))
            } else
                t.push("".concat(n, "=").concat(e[n]));
    return t.push("key=".concat(c1)),
        t.join("&")
}
function A(e) {
    var t, n, i = new Array;
    t = e.length;
    for (var r = 0; r < t; r++)
        (n = e.charCodeAt(r)) >= 65536 && n <= 1114111 ? (i.push(n >> 18 & 7 | 240),
        i.push(n >> 12 & 63 | 128),
        i.push(n >> 6 & 63 | 128),
        i.push(63 & n | 128)) : n >= 2048 && n <= 65535 ? (i.push(n >> 12 & 15 | 224),
        i.push(n >> 6 & 63 | 128),
        i.push(63 & n | 128)) : n >= 128 && n <= 2047 ? (i.push(n >> 6 & 31 | 192),
        i.push(63 & n | 128)) : i.push(255 & n);
    return i
}
function y(e, t) {
    return A(b(A(e.substr(0, 16)), A(t)).toUpperCase().substr(0, 16))
}
function b(t, n) {
    var i = 16 - parseInt(n.length % 16);
    n = n.concat(new Array(i).fill(i));
    var r = s.encrypt(n, t);
    return e.from(r).toString("hex")
}
signData = function (t) {
    d = e.from(d1, "base64").toString("hex")
    var n = m(t.data)
        , i = p(n);
    i.data = p(i.data);
    var r = v(i)
        , a = o.doSignature(r, d, {
            hash: !0
        });
    return e.from(a, "hex").toString("base64")
}
encData = function (e) {
    for (var t = e.data.data && JSON.stringify(e.data.data), n = "", i = 0; i < t.length; i++) {
        var r = t.charAt(i)
            , o = t.charCodeAt(i);
        n += o > 127 ? "\\u" + o.toString(16).padStart(4, "0") : r
    }
    var a = A(n);
    e.data.appCode && e.appCode !== u && (u = e.data.appCode);
    var s = y(u, c1)
        , l = b(s, a);
    return l.toUpperCase()

}
// console.log(t)
// console.log("signData:", signData(t))
// console.log("encData:", encData(t))



// 数据解密
_encData = function(t) {
    var n = e.from(t.data.data.encData, "hex")
      , i = function(t, n) {
        var i = s.decrypt(n, t)
          , r = i[i.length - 1];s
        return i = i.slice(0, i.length - r),
        e.from(i).toString("utf-8")
    }(y(u, c1), n);
    return JSON.parse(i)
}
// console.log("解密数据：", _encData(t))