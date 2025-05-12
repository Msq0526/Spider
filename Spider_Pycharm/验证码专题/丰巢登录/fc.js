
const CryptoJS = require('crypto-js')


function md5_encrypt(data){
    return CryptoJS.MD5(data).toString()
}

function aes_encrypt(a){
    data = a['data']
    public_key = CryptoJS.enc.Utf8.parse(a['aesKey'])
    str_data = JSON.stringify(data)
    data_encode = CryptoJS.enc.Utf8.parse(str_data)
    return CryptoJS.AES.encrypt(data_encode, public_key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    }).toString()
}

join_track = function (track){
    for (var results = '', num = 0; num < track.length; num++) {
        var item = track[num];
        results += item['x'] + '' + item['y'] + item['time'];
    }
    return results;
}

get_data = function (clientIp, checkId, track, key, uuid) {
    let data = clientIp + checkId + uuid + join_track(track)
    md5_data = md5_encrypt(data)
    console.log(clientIp, checkId, track, key, uuid)
    return aes_encrypt({
        'data': {
            'sign': md5_data,
            'track': track
        },
        'aesKey': key
    })
}

// console.log(get_data("114.242.60.52", "74DB7E954123433FB3075853EE7AE0DB", uuid, [
//     {
//         "x": 3,
//         "y": 67,
//         "time": 1747034245240
//     },
//     {
//         "x": 8,
//         "y": 67,
//         "time": 1747034245248
//     },
//     {
//         "x": 18,
//         "y": 67,
//         "time": 1747034245256
//     },
//     {
//         "x": 30,
//         "y": 67,
//         "time": 1747034245265
//     },
//     {
//         "x": 44,
//         "y": 67,
//         "time": 1747034245275
//     },
//     {
//         "x": 59,
//         "y": 67,
//         "time": 1747034245281
//     },
//     {
//         "x": 77,
//         "y": 67,
//         "time": 1747034245290
//     },
//     {
//         "x": 99,
//         "y": 67,
//         "time": 1747034245297
//     },
//     {
//         "x": 118,
//         "y": 67,
//         "time": 1747034245307
//     },
//     {
//         "x": 134,
//         "y": 67,
//         "time": 1747034245313
//     },
//     {
//         "x": 148,
//         "y": 67,
//         "time": 1747034245321
//     },
//     {
//         "x": 160,
//         "y": 67,
//         "time": 1747034245328
//     },
//     {
//         "x": 171,
//         "y": 67,
//         "time": 1747034245336
//     },
//     {
//         "x": 178,
//         "y": 67,
//         "time": 1747034245344
//     },
//     {
//         "x": 183,
//         "y": 67,
//         "time": 1747034245352
//     },
//     {
//         "x": 188,
//         "y": 67,
//         "time": 1747034245360
//     },
//     {
//         "x": 189,
//         "y": 67,
//         "time": 1747034245368
//     },
//     {
//         "x": 190,
//         "y": 67,
//         "time": 1747034245377
//     },
//     {
//         "x": 191,
//         "y": 67,
//         "time": 1747034245480
//     },
//     {
//         "x": 192,
//         "y": 67,
//         "time": 1747034245496
//     },
//     {
//         "x": 194,
//         "y": 67,
//         "time": 1747034245512
//     },
//     {
//         "x": 198,
//         "y": 67,
//         "time": 1747034245521
//     },
//     {
//         "x": 201,
//         "y": 67,
//         "time": 1747034245528
//     },
//     {
//         "x": 203,
//         "y": 67,
//         "time": 1747034245537
//     },
//     {
//         "x": 206,
//         "y": 67,
//         "time": 1747034245544
//     },
//     {
//         "x": 208,
//         "y": 67,
//         "time": 1747034245552
//     },
//     {
//         "x": 209,
//         "y": 67,
//         "time": 1747034245560
//     },
//     {
//         "x": 210,
//         "y": 67,
//         "time": 1747034245568
//     },
//     {
//         "x": 213,
//         "y": 67,
//         "time": 1747034245584
//     },
//     {
//         "x": 217,
//         "y": 67,
//         "time": 1747034245592
//     },
//     {
//         "x": 221,
//         "y": 67,
//         "time": 1747034245599
//     },
//     {
//         "x": 227,
//         "y": 67,
//         "time": 1747034245608
//     },
//     {
//         "x": 232,
//         "y": 67,
//         "time": 1747034245615
//     },
//     {
//         "x": 236,
//         "y": 67,
//         "time": 1747034245624
//     },
//     {
//         "x": 239,
//         "y": 67,
//         "time": 1747034245631
//     },
//     {
//         "x": 241,
//         "y": 67,
//         "time": 1747034245640
//     },
//     {
//         "x": 242,
//         "y": 67,
//         "time": 1747034245688
//     },
//     {
//         "x": 243,
//         "y": 67,
//         "time": 1747034245728
//     },
//     {
//         "x": 244,
//         "y": 67,
//         "time": 1747034245736
//     },
//     {
//         "x": 245,
//         "y": 67,
//         "time": 1747034245867
//     },
//     {
//         "x": 246,
//         "y": 67,
//         "time": 1747034245890
//     },
//     {
//         "x": 247,
//         "y": 67,
//         "time": 1747034245914
//     }
// ], "vErHPeSqhMOkGZ3B"))
