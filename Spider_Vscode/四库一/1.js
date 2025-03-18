var CryptoJS = require('crypto-js')
function b(t) {
    var e = CryptoJS.enc.Hex.parse(t)
        , n = CryptoJS.enc.Base64.stringify(e)
        , a = CryptoJS.AES.decrypt(n, f, {
            iv: m,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        })
        , r = a.toString(CryptoJS.enc.Utf8);
    return r.toString()
}
// var f = CryptoJS.enc.Utf8.parse("jo8j9wGw%6HbxfFn")
var f = {
    "words": [1148467306, 964118391, 624314466, 2019968622],
    "sigBytes": 16
}
// var m = CryptoJS.enc.Utf8.parse("0123456789ABCDEF")
var m ={
    "words": [808530483, 875902519, 943276354, 1128547654],
    "sigBytes": 16
}
// var n = "VYip4SbJGijML2gT43kzaUfb3i+uPbdwmW3ptFSVKdJCO2UXY0+OqjPchjKHaE6DcwAdmGA6Kp+NyVWIbXLdXQ=="
var t = "5588a9e126c91a28cc2f6813e379336947dbde2fae3db770996de9b4549529d2423b6517634f8eaa33dc863287684e8373001d98603a2a9f8dc955886d72dd5d"
console.log(b(t))
