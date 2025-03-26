const encrypt = require('E:\\nvm\\node_global\\node_modules\\crypto-js');

function b(t) {
    var m = encrypt.enc.Utf8.parse("0123456789ABCDEF")
      , f = encrypt.enc.Utf8.parse("jo8j9wGw%6HbxfFn")
    var e = encrypt.enc.Hex.parse(t)
      , n = encrypt.enc.Base64.stringify(e)
      , a = encrypt.AES.decrypt(n, f, {
        iv: m,
        mode: encrypt.mode.CBC,
        padding: encrypt.pad.Pkcs7
    })
      , r = a.toString(encrypt.enc.Utf8);
    return r.toString()
}


// var m = {
//     "words": [
//         808530483,
//         875902519,
//         943276354,
//         1128547654
//     ],
//     "sigBytes": 16
// };
// var f = {
//     "words": [
//         1148467306,
//         964118391,
//         624314466,
//         2019968622
//     ],
//     "sigBytes": 16
// };
// var t = ''
//b(t)


