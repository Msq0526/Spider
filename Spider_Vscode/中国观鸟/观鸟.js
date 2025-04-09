const JsEncrypt = require("node-jsencrypt")
const cryptoJs = require("crypto-js");


var paramPublicKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCvxXa98E1uWXnBzXkS2yHUfnBM6n3PCwLdfIox03T91joBvjtoDqiQ5x3tTOfpHs3LtiqMMEafls6b0YWtgB1dse1W5m+FpeusVkCOkQxB4SZDH6tuerIknnmB/Hsq5wgEkIvO5Pff9biig6AyoAkdWpSek/1/B7zYIepYY0lxKQIDAQAB";
var encrypt =new JsEncrypt();
encrypt.setPublicKey(paramPublicKey);

JsEncrypt.prototype.encryptLong = function(str) {
    try {
        var encrypted = this.getKey().encryptLong(str) || "";
        var uncrypted = this.getKey().decryptLong(encrypted) || "";
        var count = 0;
        var reg = /null$/g;
        while (reg.test(uncrypted)) {
            count++;
            encrypted = this.getKey().encryptLong(str) || "";
            uncrypted = this.getKey().decryptLong(encrypted) || "";
            if (count > 10) {
                break
            }
        }
        return encrypted
    } catch (ex) {
        return false
    }
}
function sort_ASCII(obj) {
    var arr = new Array;
    var num = 0;
    for (var i in obj) {
        arr[num] = i;
        num++
    }
    var sortArr = arr.sort();
    var sortObj = {};
    for (var i in sortArr) {
        sortObj[sortArr[i]] = obj[sortArr[i]]
    }
    return sortObj
}
function dataTojson(data) {
    var arr = [];
    var res = {};
    arr = data.split("&");
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].indexOf("=") != -1) {
            var str = arr[i].split("=");
            if (str.length == 2) {
                res[str[0]] = str[1]
            } else {
                res[str[0]] = ""
            }
        } else {
            res[arr[i]] = ""
        }
    }
    return res
}
function getUuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 32; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 16), 1)
    }
    s[14] = "4";
    s[19] = hexDigits.substr(s[19] & 3 | 8, 1);
    s[8] = s[13] = s[18] = s[23];
    var uuid = s.join("");
    return uuid
}
function jscode(options) {
    var timestamp = Date.parse(new Date);
    var requestId = getUuid();
    var data = JSON.stringify(sort_ASCII(dataTojson(options.data || "{}")));
    options.data = encrypt.encryptLong(data);
    var sign = cryptoJs.MD5(data + requestId + timestamp).toString();
    return {
        "requestId": requestId,
        "sign": sign,
        "timestamp": timestamp    
    }
}

function decode(decodeData){
    var key = cryptoJs.enc.Utf8.parse('C8EB5514AF5ADDB94B2207B08C66601C');  //"6756696653534952657053656868665752665050485566485667545454484967"
    var iv = cryptoJs.enc.Utf8.parse('55DD79C6F04E1A67');    //"53536868555767547048526949655455";

    // 使用 AES 算法进行解密操作
    return cryptoJs.AES.decrypt(decodeData, key, {
            // 设置初始化向量
            iv: iv,
            // 使用 CBC 模式
            mode: cryptoJs.mode.CBC,
            // 使用 PKCS7 填充
            padding: cryptoJs.pad.Pkcs7
        }).toString(cryptoJs.enc.Utf8);
}

