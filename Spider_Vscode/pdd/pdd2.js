window = global
var h = window
const pako = require('pako');
const JSencrypt = require('node-jsencrypt');
function  t(e) {
                return typeof e
            }

function nc(e) {
            var t = {
                DSfOA: function(e, t) {
                    return e(t)
                },
                lQiuF: function(e, t) {
                    return e / t
                },
                wABHl: function(e, t, n, r) {
                    return e(t, n, r)
                },
                hKWNF: function(e, t) {
                    return e * t
                },
                TPFZR: function(e, t) {
                    return e < t
                },
                gYcZI: function(e, t) {
                    return e * t
                },
                BApWW: function(e, t) {
                    return e + t
                },
                jiYFc: function(e, t, n) {
                    return e(t, n)
                }
            };
            e || (e = 0);
            var n = Math['abs'](t['DSfOA'](parseInt, e))['toString'](2)
              , o = Math['ceil'](t['lQiuF'](n['length'], 8));
            n = t['wABHl'](r, n, t['hKWNF'](o, 8), "0");
            var a = [];
            for (var s = 0; t['TPFZR'](s, o); s += 1) {
                var f = n['substring'](t['hKWNF'](s, 8), t['gYcZI'](t['BApWW'](s, 1), 8));
                a['push'](t['jiYFc'](parseInt, f, 2))
            }
            return a
}
function s (e, t, n) {
            if ("string" != typeof e)
                throw new Error("The string parameter must be a string.");
            if (e.length < 1)
                throw new Error("The string parameter must be 1 character or longer.");
            if ("number" != typeof t)
                throw new Error("The length parameter must be a number.");
            if ("string" != typeof n && n)
                throw new Error("The character parameter must be a string.");
            var r = -1;
            for (t -= e.length,
            n || 0 === n || (n = " "); ++r < t; )
                e += n;
            return e
        }
function budget(e, t) {
    var r = {};
    r['Rhbzi'] = function(e, t) {
        return e === t
    }
    ,
    r['dmkBs'] = function(e, t) {
        return e >= t
    }
    ,
    r['lMgHF'] = function(e, t) {
        return e + t
    }
    ;
    var i = r;
    return i['Rhbzi'](e, 64) ? 64 : i['Rhbzi'](e, 63) ? t : i['dmkBs'](e, t) ? i['lMgHF'](e, 1) : e
 }
function encode(e, n) {
                    var r = {
                        EAnrQ: function(e, t) {
                            return e < t
                        },
                        sJtws: "9240gsB6PftGXnlQTw_pdvz7EekDmuAWCVZ5UF-MSK1IHOchoaxqYyj8Jb3LrNiR",
                        ieKdo: function(e, t) {
                            return e < t
                        },
                        mmivi: function(e, t) {
                            return e !== t
                        },
                        OaRTp: 'undefined',
                        hjaOS: function(e, t) {
                            return e * t
                        },
                        GCemu: '7|8|10|0|3|1|9|4|6|5|2',
                        GmaVb: function(e, t) {
                            return e >> t
                        },
                        NYCOo: function(e, t) {
                            return e - t
                        },
                        eTrxI: function(e, t) {
                            return e | t
                        },
                        XOstE: function(e, t) {
                            return e << t
                        },
                        mEnIi: function(e, t) {
                            return e & t
                        },
                        gJgsQ: function(e, t) {
                            return e + t
                        },
                        KPCyN: function(e, t) {
                            return e + t
                        },
                        vsnfG: function(e, t) {
                            return e + t
                        },
                        XlToV: function(e, t) {
                            return e + t
                        },
                        VDNXf: function(e, t) {
                            return e | t
                        },
                        fnaNP: function(e, t) {
                            return e << t
                        },
                        WCTJq: function(e, t) {
                            return e & t
                        },
                        lNOfd: function(e, t) {
                            return e - t
                        },
                        SUaqZ: function(e, t) {
                            return e(t)
                        },
                        Eortz: function(e, t) {
                            return e(t)
                        },
                        TsVmD: function(e, t) {
                            return e !== t
                        },
                        vXNda: function(e, t, n) {
                            return e(t, n)
                        },
                        hsJou: function(e, t, n) {
                            return e(t, n)
                        },
                        iLFBA: function(e, t, n) {
                            return e(t, n)
                        },
                        Cikzn: function(e, t) {
                            return e & t
                        }
                    }
                      , o = {
                        "_b\xc7": e = e,
                        _bK: 0,
                        _bf: function() {
                            return e["charCodeAt"](o["_bK"]++)
                        }
                    };
                    var a = {
                        '_ê': [],
                        "_bÌ": -1,
                        '_á': function(e) {
                            a['_bÌ']++,
                            a['_ê'][a['_bÌ']] = e
                        },
                        '_bÝ': function() {
                            function e(e, t) {
                                return s(t - 1628, e)
                            }
                            return _b\u00dd[e("ea1u", 1360)]--,
                            r[e("!&EH", 1430)](_b\u00dd[e("lxO1", 1444)], 0) && (_b\u00dd['_bÌ'] = 0),
                            _b\u00dd['_ê'][_b\u00dd[e("QQD8", 1429)]]
                        }
                    }
                      , c = "";

                    for (var f, d, p, h, v = r['sJtws'], m = 0; r['ieKdo'](m, v['length']); m++)
                        a['_á'](v['charAt'](m));
                    a['_á']("=");

                    // var x =
                    var x  = Math['floor']((Math['random']()* 64))
                    console.log(x)
                    for (m = 0; r['ieKdo'](m, e['length']); m = o['_bK'])
                        for (var g = '7|8|10|0|3|1|9|4|6|5|2'['split']("|"), b = 0; ; ) {
                            switch (g[b++]) {
                            case "0":
                                f = r['GmaVb'](a['_ê'][r['NYCOo'](a['_bÌ'], 2)], 2);
                                continue;
                            case "1":
                                p = r['eTrxI'](r['XOstE'](r['mEnIi'](a['_ê'][r['NYCOo'](a['_bÌ'], 1)], 15), 2), r['GmaVb'](a['_ê'][a['_bÌ']], 6));
                                continue;
                            case "2":
                                c = r['gJgsQ'](r['KPCyN'](r['vsnfG'](r['XlToV'](c, a['_ê'][f]), a['_ê'][d]), a['_ê'][p]), a['_ê'][h]);
                                continue;
                            case "3":
                                d = r['VDNXf'](r['fnaNP'](r['WCTJq'](a['_ê'][r['lNOfd'](a['_bÌ'], 2)], 3), 4), r['GmaVb'](a['_ê'][r['lNOfd'](a['_bÌ'], 1)], 4));
                                continue;
                            case "4":
                                r['SUaqZ'](isNaN, a['_ê'][r['lNOfd'](a['_bÌ'], 1)]) ? p = h = 64 : r['Eortz'](isNaN, a['_ê'][a['_bÌ']]) && (h = 64);
                                continue;
                            case "5":
                                a['_bÌ'] -= 3;
                                continue;
                            case "6":
                                r['TsVmD'](void 0 === n ? "undefined" : t(n), r['OaRTp']) && (f = r['vXNda'](n, f, x),
                                d = r['hsJou'](n, d, x),
                                p = r['iLFBA'](n, p, x),
                                h = r['iLFBA'](n, h, x));
                                continue;
                            case "7":
                                a['_á'](o['_bf']());
                                continue;
                            case "8":
                                a['_á'](o['_bf']());
                                continue;
                            case "9":
                                h = r['Cikzn'](a['_ê'][a['_bÌ']], 63);
                                continue;
                            case "10":
                                a['_á'](o['_bf']());
                                continue
                            }
                            break
                        }
                    return r['XlToV'](c['replace'](/=/g, ""), v[x] || "")
                }
function deflate(e, t) {
                var n = new pako.Deflate(t);
                n.push(new Uint8Array(e), !0)

                return n.result
            }
function r(e, t, n) {
   let aa  = [
    "",
    " ",
    "  ",
    "   ",
    "    ",
    "     ",
    "      ",
    "       ",
    "        ",
    "         "
]
    if ((t -= (e += "").length) <= 0)
        return e;
    if (n || 0 === n || (n = " "),
    " " == (n += "") && t < 10)
        return aa[t] + e;
    for (var o = ""; 1 & t && (o += n),
    t >>= 1; )
        n += n;
    return o + e
}
function va(e) {

        var t = {
            ozDNt: function(e, t) {
                return e(t)
            },
            qogTH: function(e, t, n, r) {
                return e(t, n, r)
            },
            oAlZP: function(e, t) {
                return e * t
            },
            XQyGR: function(e, t) {
                return e / t
            },
            oaCId: function(e, t) {
                return e >= t
            },
            tESBs: function(e, t) {
                return e - t
            },
            LdvIJ: function(e, t) {
                return e === t
            },
            tbHcV: function(e, t) {
                return e & t
            },
            OooNI: function(e, t) {
                return e + t
            },
            BtpBm: function(e, t) {
                return e + t
            },
            RNMxe: function(e, t) {
                return e >>> t
            }
        };
        e || (e = 0);
        var n = Math["abs"](t['ozDNt'](parseInt, e));
        var i = n['toString'](2);
        for (var c = [], s = (i = r( i, t['oAlZP'](Math['ceil'](t['XQyGR'](i['length'], 7)), 7), "0"))['length']; t['oaCId'](s, 0); s -= 7) {
            var f = i['substring'](t['tESBs'](s, 7), s);
            if (t['LdvIJ'](t['tbHcV'](n, -128), 0)) {
                c['push'](t['OooNI']("0", f));
                break
            }
            c['push'](t['BtpBm']("1", f)),
            n = t['RNMxe'](n, 7)
        }
        return c['map']((function(e) {
            return parseInt(e, 2)
        }
        ))
}
function charCode(e) {
            var t = {};
            t['KBXiH'] = function(e, t) {
                return e < t
            }
            ,
            t['nOVaj'] = function(e, t) {
                return e >= t
            }
            ,
            t['bVfXe'] = function(e, t) {
                return e <= t
            }
            ,
            t['lRMLc'] = function(e, t) {
                return e | t
            }
            ,
            t['rYwKq'] = function(e, t) {
                return e & t
            }
            ,
            t['TpYra'] = function(e, t) {
                return e >> t
            }
            ,
            t['IwGOF'] = function(e, t) {
                return e & t
            }
            ,
            t['GInYg'] = function(e, t) {
                return e <= t
            }
            ,
            t['dTMpm'] = function(e, t) {
                return e >= t
            }
            ,
            t['emtBL'] = function(e, t) {
                return e | t
            }
            ,
            t['mgzUA'] = function(e, t) {
                return e < t
            }
            ,
            t['xoEZN'] = function(e, t) {
                return e & t
            }
            ;
            for (var r = t, o = [], i = 0, a = 0; r['KBXiH'](a, e['length']); a += 1) {
                var c = e['charCodeAt'](a);
                r['nOVaj'](c, 0) && r['bVfXe'](c, 127) ? (o['push'](c),
                i += 1) : r['bVfXe'](128, 80) && r['bVfXe'](c, 2047) ? (i += 2,
                o['push'](r['lRMLc'](192, r['rYwKq'](31, r['TpYra'](c, 6)))),
                o['push'](r['lRMLc'](128, r['IwGOF'](63, c)))) : (r['nOVaj'](c, 2048) && r['GInYg'](c, 55295) || r['dTMpm'](c, 57344) && r['GInYg'](c, 65535)) && (i += 3,
                o['push'](r['lRMLc'](224, r['IwGOF'](15, r['TpYra'](c, 12)))),
                o['push'](r['emtBL'](128, r['IwGOF'](63, r['TpYra'](c, 6)))),
                o['push'](r['emtBL'](128, r['IwGOF'](63, c))))
            }
            for (var f = 0; r['mgzUA'](f, o['length']); f += 1)
                o[f] &= 255;
            return r['GInYg'](i, 255) ? [0, i]['concat'](o) : [r['TpYra'](i, 8), r['xoEZN'](i, 255)]['concat'](o)
}
function ek(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                  , o = {
                    doyQe: function(e, t) {
                        return e !== t
                    },
                    ZnBwu: function(e, t) {
                        return e === t
                    },
                    wNWpl: "[object Array]",
                    DCAiW: function(e, t) {
                        return e === t
                    },
                    CgOGQ: 'string',
                    XriUr: 'number',
                    UgrSF: function(e, t) {
                        return e > t
                    },
                    AQnyc: function(e, t) {
                        return e <= t
                    },
                    EmtLr: function(e, t) {
                        return e + t
                    },
                    GynqB: function(e, t, n, r) {
                        return e(t, n, r)
                    },
                    IsuQv: function(e, t) {
                        return e + t
                    },
                    hoSrd: '000',
                    TnsHv: function(e, t, n) {
                        return e(t, n)
                    },
                    zFxvQ: function(e, t) {
                        return e - t
                    },
                    qpclh: function(e, t) {
                        return e > t
                    }
                };
                if (!e)
                    return [];
                var i = []
                  , a = 0;
                o['doyQe'](n, "") && (o['ZnBwu']("[object String]", '[object Array]' && (a = 0)),
                o['DCAiW'](void 0 === n ? "undefined" : t(n), o['CgOGQ']) && (a = (i = sc(n))['length']),
                o['DCAiW'](void 0 === n ? "undefined" : t(n), o['XriUr']) && (a = (i = nc(n))['length']));
                var c = Math['abs'](e)['toString'](2)
                  , u = "";
                u = o['UgrSF'](a, 0) && o['AQnyc'](a, 7) ? o['EmtLr'](c, o['GynqB'](r, a['toString'](2), 3, "0")) : o['IsuQv'](c, o['hoSrd']);
                var f = [o['TnsHv'](parseInt, u['slice'](Math['max'](o['zFxvQ'](u['length'], 8), 0)), 2)];
                if (o['qpclh'](a, 7))
                    return f['concat'](va(a), i);
                return f['concat'](i)
}
function sc(e) {
            var t = {};
            t["onkNK"] = function(e, t) {
                return e > t
            }
            ,
            e || (e = "");
            var n = t['onkNK'](e['length'], 255) ? e['substring'](0, 255) : e;
            return charCode(n)['slice'](2)
        }
function oo(e) {

         var r = function() {
                    for (var e = [], t = void 0, n = 0; n < 256; n++) {
                        t = n;
                        for (var r = 0; r < 8; r++)
                            t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
                        e[n] = t
                    }
                    return e
        }()
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        e = function(e) {
            for (var t = "", n = 0; n < e.length; n++) {
                var r = e.charCodeAt(n);
                r < 128 ? t += String.fromCharCode(r) : r < 2048 ? t += String.fromCharCode(192 | r >> 6) + String.fromCharCode(128 | 63 & r) : r < 55296 || r >= 57344 ? t += String.fromCharCode(224 | r >> 12) + String.fromCharCode(128 | r >> 6 & 63) + String.fromCharCode(128 | 63 & r) : (r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(++n)),
                t += String.fromCharCode(240 | r >> 18) + String.fromCharCode(128 | r >> 12 & 63) + String.fromCharCode(128 | r >> 6 & 63) + String.fromCharCode(128 | 63 & r))
            }
            return t
        }(e),
        t ^= -1;
        for (var n = 0; n < e.length; n++)
            t = t >>> 8 ^ r[255 & (t ^ e.charCodeAt(n))];
        return (-1 ^ t) >>> 0;

}
function pbc() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
              , t = {
                aQnxO: function(e, t) {
                    return e(t)
                },
                NXXiw: function(e, t) {
                    return e < t
                },
                axaxt: function(e, t) {
                    return e < t
                },
                BElkO: function(e, t) {
                    return e - t
                }
            };
            var r = []
              , i = nc(t["aQnxO"](oo, e['replace'](/\s/g, "")));
            if (t['NXXiw'](i['length'], 4))
                for (var c = 0; t['axaxt'](c, t['BElkO'](4, i['length'])); c++)
                    r['push'](0);
            return r['concat'](i)
        }
function packN_R() {
    // 获取三位随机数
    function getRandomThree() {
        var random = Math.floor(Math.random() * 1000);
        var randomStr = random.toString();
        if (randomStr.length < 3) {
            var randomStr = "0" + randomStr;
        }
        return randomStr;
    }
    let scrollTop = 20367+ getRandomThree()
    let s2 = getRandomThree()

        let data = [
    {
        "scrollTop": scrollTop,
        "timestamp": 15490776+ s2
    },
    {
        "scrollTop": scrollTop +2 ,
        "timestamp": 15490781+s2+2
    },
    {
        "scrollTop": scrollTop + 4,
        "timestamp": 15490787+s2+6
    }
]

        // var t = []["concat"](ek(3, data));
        var t = [27]
    console.log(t)
        return data["forEach"]((function(n) {
            t = t['concat'](va(n["scrollTop"]), va(n['timestamp']))
        }
        )),
        t
}
function packN_A() {
            var e = {};
            e["PCnyM"] = function(e, t) {
                return e && t
            },
            e["rBwkH"] = function(e, t) {
                return e > t
            },
            e['QpTgF'] = function(e, t) {
                return e === t
            };
            var n = e
              , r = ek(7)
              , o = {
                    "href": "https://pifa.pinduoduo.com/goods/detail/?gid=265504150105&sn=64658.3319646.32.265504150105&refer_page_id=64658_1746580970812_2f79d2c9e",
                    "port": ""
              }
              , i = o.href
              , c = void 0 === i ? "" : i
              , u = o.port
              , s = void 0 === u ? "" : u;
            if (n['PCnyM'](!c, !s))
                return []['concat'](r, [39, 202, 77, 226]);
            var l = n["rBwkH"](c['length'], 128) ? c['slice'](0, 128) : c;
            var d = sc(l);
            return []['concat'](r, va(d['length']), d, va(s['length']), n['QpTgF'](s['length'], 0) ? [] : [], [39, 202, 77, 226]) //a.sc(this.data.port) == ''
}

console.log(packN_A())
function packN_j() {
         var e = {};
        e['ZYiiw'] = function(e, t) {
            return e + t
        }
        ,
        e['EXRBy'] = function(e, t) {
            return e * t
        }
        ,
        e['fysLP'] = function(e, t) {
            return e + t
        }
         var r = e;
        data = r['ZYiiw'](parseInt(r['EXRBy'](Math['random'](), r['fysLP'](Math["pow"](2, 52), 1)['toString']()), 10), parseInt(r['EXRBy'](Math['random'](), r['fysLP'](Math['pow'](2, 30), 1)['toString']()), 10)) + "-" + new Date().getTime()
        return []["concat"](ek(9, data))
}
function packN_B(){
    href = 'https://pifa.pinduoduo.com/goods/detail/?gid=265504150105&sn=64658.3319646.32.265504150105&refer_page_id=64658_1746580970812_2f79d2c9e'
    data = pbc(href)
    return []['concat'](ek(11), data)
}



console.log(packN_B())
function packN_L() {
    // 获取随机四位数
    data = Date.now() - (Date.now()-Math.floor(1e4 * Math.random()))
    return   []['concat'](ek(14, data))
}
function a (e) {
    e = e || 21;
    for (var t = ""; 0 < e--; )
        t += "_~varfunctio0125634789bdegjhklmpqswxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[64 * Math.random() | 0];
    return t
}
function w() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date['now']()

          , n = {};
        n['qqLSP'] = function(e, t) {
            return e(t)
        }
        ,
        n['FYUum'] = function(e) {
            return e()
        }
        ,
        n['dYKHK'] = function(e, t) {
            return e % t
        }
        ,
        n['IdRTN'] = function(e, t, n, r) {
            return e(t, n, r)
        };
        var r = n
          , o = r['qqLSP'](String, e)["slice"](0, 10)
          , c = r['FYUum'](a)
          , u = r['dYKHK']((o + "_" + c)['split']("")['reduce']((function(e, n) {
            return e + n['charCodeAt'](0)
        }
        ), 0), 1e3)
          , p = r['IdRTN'](s, r['qqLSP'](String, u), 3, "0");
        return encode2("" + o + p)['replace'](/=/g, "") + "_" + c
    }

function packN_H(ck) {
    data = {
        "nano_cookie_fp": ck,
        "nano_storage_fp": ck
    }
    var o = [],i = {};
        i["nano_cookie_fp"] = 16
        i['nano_storage_fp'] = 17
   return  Object["keys"](data).forEach(
       (function(t) {
            var u = []["concat"](data[t] ? ek(i[t], data[t]) : []);
           o['push'](u)
       })
   ),o
}
function packN_$(){
  return ek(18, "https://pifa.pinduoduo.com/")
}



// 详情页使用
function re(id,ck,ua) {
        var e, t = {
            JSeyi: function(e) {
                return e()
            },
            CTxCC: 'packN',
            npRBP: function(e, t, n) {
                return e(t, n)
            },
            iSDtI: function(e, t) {
                return e < t
            },
            hNmVQ: function(e, t) {
                return e === t
            },
            xfDub: function(e, t) {
                return e > t
            },
            HvucD: function(e, t) {
                return e <= t
            },
            kbnzE: function(e, t) {
                return e - t
            },
            YrazO: function(e, t) {
                return e << t
            },
            fBcAN: function(e, t) {
                return e > t
            },
            dhItA: function(e, t) {
                return e + t
            },
            yQQNR: '0ar'
        };

        var r = 'packN',
           o = (e = [])['concat'].apply(e, [[], [], [], packN_R(), packN_A(), [64, 128, 15, 136, 8], packN_j(), [80, 128, 64], packN_B(), [97, 121], [105, 121], packN_L(),  ek(15, ua)].concat(function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++)
                    n[t] = e[t];
                return n
            }
            return Array.from(e)
        }(packN_H(ck)), [packN_$(),[],ek(20, id), ek(21,1), ek(22,new Date().getTime()), [],[ek(26),va(0)], [ek(27),va(1)], [224, 2, 2]]));
        // setTimeout((function() {te()}), 0);
        for (var c = o['length']['toString'](2)['split'](""), u = 0; t['iSDtI'](c['length'], 16); u += 1)
            c['unshift']("0");
        c = c['join']("");
        var s = [];
        t['hNmVQ'](o['length'], 0) ? s['push'](0, 0) : t['xfDub'](o['length'], 0) && t['HvucD'](o['length'], t['kbnzE'](t['YrazO'](1, 8), 1)) ? s['push'](0, o['length']) : t['fBcAN'](o['length'], t['kbnzE'](t['YrazO'](1, 8), 1)) && s['push'](parseInt(c['substring'](0, 8), 2), h['parseInt'](c['substring'](8, 16), 2))
        o = []['concat']([1], [1, 0, 0], s, o);
        var l = deflate(o)
          var  f = []['map']['call'](l, (function(e) {
            return String['fromCharCode'](e)
        }
        ));
    console.log('0ar'+ encode(t['dhItA'](f['join'](""),"ó¶÷"), budget))
    return '0ar'+ encode(t['dhItA'](f['join'](""),"ó¶÷"), budget)
}
function sign(n, c, t) {
        var o = (new Date).getTime();
        return {
            riskSign: encrypt("username=".concat(n || "", "&password=").concat(c || "", "&ts=").concat(o), t),
            timestamp: o,
            password:encrypt(c)
        }
}
function encrypt(e,t){
    var n = new JSencrypt;
    n.setPublicKey('MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC6zHXNom934tsG9SC73vAUv99bIuSRVaLsuTMY+OL6aS6eB7AuNoU+m9gPCrI7aFrT7CSiKTJ47DNwCNZO52AlLzvB6TjdUwuIXWpinE8VCsYAZgOCrx+mK9Sy0OuwnqNj5D2wUdGoN0nxbl1q2akeAa18A/iBpiXx0SZQexbEowIDAQAB')
    return   n.encrypt(e)
}
function Ae() {
        var e, t = d, n = {};
        n[t("0x156", "j6Rk")] = function(e) {
            return e()
        }
        ,
        n[t("0x11", "iqO&")] = t("0x1e", "anZ%"),
        n[t("0x12e", "J)bp")] = function(e) {
            return e()
        }
        ,
        n[t("0x1", "#hpG")] = function(e, t, n) {
            return e(t, n)
        }
        ,
        n[t("0x4", "Cu&R")] = function(e, t) {
            return e < t
        }
        ,
        n[t("0xa", "Dm1H")] = t("0x39", "Dm1H"),
        n[t("0x54", "fGLK")] = function(e, t) {
            return e === t
        }
        ,
        n[t("0x100", "HZS0")] = function(e, t) {
            return e > t
        }
        ,
        n[t("0xd8", "0Xnq")] = function(e, t) {
            return e <= t
        }
        ,
        n[t("0x2c", "0Xnq")] = function(e, t) {
            return e - t
        }
        ,
        n[t("0x92", "z@XA")] = function(e, t) {
            return e << t
        }
        ,
        n[t("0x75", "5QnQ")] = function(e, t) {
            return e > t
        }
        ,
        n[t("0x149", "dmn8")] = function(e, t) {
            return e - t
        }
        ,
        n[t("0xc5", "bpr9")] = function(e, t) {
            return e << t
        }
        ,
        n[t("0x37", "GmkI")] = t("0x164", "wFxG"),
        n[t("0xfb", ")!%7")] = function(e, t) {
            return e + t
        }
        ,
        n[t("0xe5", ")!%7")] = t("0x76", "Vta9"),
        n[t("0x140", "oemU")] = t("0x103", "Iaxw");
        var r = n;
        if (!ee)
            return "";
        var o = r[t("0x141", "5^JL")]
          , i = (e = [])[V].apply(e, [ie ? [][V](r[t("0x10a", "5QnQ")](We), pe[o]()) : l[o](), fe[o](), he[o](), me[o](), ve[o](), ge[o](), ye[o](), be[o](), xe[o](), we[o](), ke[o]()].concat(function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++)
                    n[t] = e[t];
                return n
            }
            return Array.from(e)
        }(Se[o]()), [Ce[o](), _e[o](), Ee[o](), Oe[o](), Te[o](), je[o]()]));
        r[t("0x7c", "Dm1H")](setTimeout, (function() {
            r[t("0x121", "HZS0")](Me)
        }
        ), 0);
        for (var c = i[F][x](2)[v](""), u = 0; r[t("0x60", "%LaC")](c[F], 16); u += 1)
            c[r[t("0x88", "wFxG")]]("0");
        c = c[m]("");
        var f = [];
        r[t("0x111", "#hpG")](i[F], 0) ? f[U](0, 0) : r[t("0x16", "Mju&")](i[F], 0) && r[t("0x11c", "^o[d")](i[F], r[t("0x66", "Hv26")](r[t("0x119", "(odD")](1, 8), 1)) ? f[U](0, i[F]) : r[t("0xc3", "GmkI")](i[F], r[t("0x30", "Iaxw")](r[t("0xed", "DxB8")](1, 8), 1)) && f[U](ee[w](c[E](0, 8), 2), ee[w](c[E](8, 16), 2)),
        i = [][V]([3], [1, 0, 0], f, i);
        var p = a[r[t("0xcf", "(5GC")]](i)
          , h = [][b][t("0x6c", "oemU")](p, (function(e) {
            return String[_](e)
        }
        ));
        return r[t("0xd3", "[xh1")](r[t("0x85", "5^JL")], s[r[t("0x155", "uYFB")]](r[t("0x10c", "GmkI")](h[m](""), X[m]("")), s[t("0x91", "ho[k")]))
    }
function encode2(e, t) {
            var r = {};
            r['vkzML'] = function(e, t) {
                return e < t
            }
            ,
            r['ptSBk'] = '9240gsB6PftGXnlQTw_pdvz7EekDmuAWCVZ5UF-MSK1IHOchoaxqYyj8Jb3LrNiR',
            r['wuMLo'] = function(e, t) {
                return e < t
            }
            ,
            r['tWogC'] ='charAt',
            r['Uajda'] = function(e, t) {
                return e !== t
            }
            ,
            r['eMMJi'] = 'undefined',
            r['aosES'] = 'floor',
            r['SEKCG'] = function(e, t) {
                return e * t
            }
            ,
            r['kpuCU'] = 'random',
            r['YIUXn'] = '9|2|5|3|0|7|1|4|6|10|8',
            r['xJItI'] = function(e, t) {
                return e | t
            }
            ,
            r['ZJaCO'] = function(e, t) {
                return e << t
            }
            ,
            r['rKkut'] = function(e, t) {
                return e & t
            }
            ,
            r['CkZfI'] = function(e, t) {
                return e - t
            }
            ,
            r['dyYMr'] = function(e, t) {
                return e >> t
            }
            ,
            r['nfzjs'] = function(e, t) {
                return e - t
            }
            ,
            r['upZaD'] = function(e, t) {
                return e & t
            }
            ,
            r['UfUlj'] = function(e, t) {
                return e >> t
            }
            ,
            r['wjwwt'] = function(e, t) {
                return e - t
            }
            ,
            r['DzJxg'] = function(e, t) {
                return e(t)
            }
            ,
            r['VLCGA'] = function(e, t, n) {
                return e(t, n)
            }
            ,
            r['RVvWp'] = function(e, t, n) {
                return e(t, n)
            }
            ,
            r['rwreg'] = function(e, t) {
                return e | t
            }
            ,
            r['JODrU'] = function(e, t) {
                return e << t
            }
            ,
            r['wqZTV'] = function(e, t) {
                return e + t
            }
            ,
            r['yTScM'] = function(e, t) {
                return e + t
            }
            ,
            r['OWVvy'] = function(e, t) {
                return e + t
            }
            ;
            for (var i, a, s, l, u = r, d = {
                "_b\xc7": e = e,
                _bK: 0,
                _bf: function() {
                    return e["charCodeAt"](d['_bK']++)
                }
            }, p = {
                "_\xea": [],
                "_b\xcc": -1,
                "_\xe1": function(e) {
                    p['_bÌ']++,
                    p["_\xea"][p['_bÌ']] = e
                },
                "_b\xdd": function() {
                    var e = n;
                    return _b\u00dd['_bÌ']--,
                    u['vkzML'](_b\u00dd['_bÌ'], 0) && (_b\u00dd['_bÌ'] = 0),
                    _b\u00dd["_\xea"][_b\u00dd['_bÌ']]
                }
            }, h = "", m = u['ptSBk'], v = 0; u['wuMLo'](v, m["length"]); v++)
                p["_\xe1"](m[u['tWogC']](v));
            p["_\xe1"]("=");
            var g = u['Uajda'](void 0 === t ? "undefined" : o(t), u['eMMJi']) ? Math['floor']((Math['random']()* 64)) : -1;
    console.log(g)
            for (v = 0; u['wuMLo'](v, e['length']); v = d['_bK'])
                for (var y = u['YIUXn']['split']("|"), w = 0; ; ) {
                    switch (y[w++]) {
                    case "0":
                        a = u['xJItI'](u['ZJaCO'](u['rKkut'](p["_\xea"][u['CkZfI'](p['_bÌ'], 2)], 3), 4), u['dyYMr'](p["_\xea"][u['nfzjs'](p['_bÌ'], 1)], 4));
                        continue;
                    case "1":
                        l = u['upZaD'](p["_\xea"][p['_bÌ']], 63);
                        continue;
                    case "2":
                        p["_\xe1"](d['_bf']());
                        continue;
                    case "3":
                        i = u['UfUlj'](p["_\xea"][u['wjwwt'](p['_bÌ'], 2)], 2);
                        continue;
                    case "4":
                        u['DzJxg'](isNaN, p["_\xea"][u['wjwwt'](p['_bÌ'], 1)]) ? s = l = 64 : u['DzJxg'](isNaN, p["_\xea"][p['_bÌ']]) && (l = 64);
                        continue;
                    case "5":
                        p["_\xe1"](d['_bf']());
                        continue;
                    case "6":
                        u['Uajda'](void 0 === t ? "undefined" : o(t), u['eMMJi']) && (i = u['VLCGA'](t, i, g),
                        a = u['RVvWp'](t, a, g),
                        s = u['RVvWp'](t, s, g),
                        l = u['RVvWp'](t, l, g));
                        continue;
                    case "7":
                        s = u['rwreg'](u['JODrU'](u['upZaD'](p["_\xea"][u['wjwwt'](p['_bÌ'], 1)], 15), 2), u['UfUlj'](p["_\xea"][p['_bÌ']], 6));
                        continue;
                    case "8":
                        h = u['wqZTV'](u['yTScM'](u['yTScM'](u['yTScM'](h, p["_\xea"][i]), p["_\xea"][a]), p["_\xea"][s]), p["_\xea"][l]);
                        continue;
                    case "9":
                        p["_\xe1"](d['_bf']());
                        continue;
                    case "10":
                        p['_bÌ'] -= 3;
                        continue
                    }
                    break
                }
            return u['OWVvy'](h['replace'](/=/g, ""), m[g] || "")
}

// 关键词使用
function re2(id,ck,ua) {
        var e, t = {
            JSeyi: function(e) {
                return e()
            },
            CTxCC: 'packN',
            npRBP: function(e, t, n) {
                return e(t, n)
            },
            iSDtI: function(e, t) {
                return e < t
            },
            hNmVQ: function(e, t) {
                return e === t
            },
            xfDub: function(e, t) {
                return e > t
            },
            HvucD: function(e, t) {
                return e <= t
            },
            kbnzE: function(e, t) {
                return e - t
            },
            YrazO: function(e, t) {
                return e << t
            },
            fBcAN: function(e, t) {
                return e > t
            },
            dhItA: function(e, t) {
                return e + t
            },
            yQQNR: '0ar'
        };

        var r = 'packN',
            ua =  ek(15, ua),
           o = (e = [])['concat'].apply(e, [[], [], [], packN_R(), packN_A(), [64, 128, 15, 136, 8], packN_j(), [80, 128, 64], packN_B(), [97, 121], [105, 121], packN_L(), ua].concat(function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++)
                    n[t] = e[t];
                return n
            }
            return Array.from(e)
        }(packN_H(ck)), [packN_$(),[], packN_U(id), ek(21,1), ek(22,new Date().getTime()), [],[ek(26),va(0)], [ek(27),va(1)], [224, 2, 2]]));
        // setTimeout((function() {te()}), 0);
        for (var c = o['length']['toString'](2)['split'](""), u = 0; t['iSDtI'](c['length'], 16); u += 1)
            c['unshift']("0");
        c = c['join']("");
        var s = [];
        t['hNmVQ'](o['length'], 0) ? s['push'](0, 0) : t['xfDub'](o['length'], 0) && t['HvucD'](o['length'], t['kbnzE'](t['YrazO'](1, 8), 1)) ? s['push'](0, o['length']) : t['fBcAN'](o['length'], t['kbnzE'](t['YrazO'](1, 8), 1)) && s['push'](parseInt(c['substring'](0, 8), 2), h['parseInt'](c['substring'](8, 16), 2))


        o = []['concat']([1], [1, 0, 0], s, o);

        var l = deflate(o)

          var  f = []['map']['call'](l, (function(e) {
            return String['fromCharCode'](e)
        }
        ));
    return '0ar'+ encode(t['dhItA'](f['join'](""),"ó¶÷"), budget)
}

function O(e, t, r) {
                    var o = {};
                    o['jygNC'] = function(e, t) {
                        return e > t
                    }
                    ,
                    o['nHeRx'] = function(e, t) {
                        return e < t
                    }
                    ,
                    o['RnCED'] = function(e, t) {
                        return e - t
                    }
                    ,
                    o['XmaDE'] = function(e, t) {
                        return e - t
                    }
                    ,
                    o['XdTvU'] = function(e, t) {
                        return e !== t
                    }
                    ,
                    o['ZIFFu'] = 'undefined',
                    o['UvQjG'] = function(e, t) {
                        return e > t
                    }
                    ,
                    o['AACoH'] = function(e, t) {
                        return e > t
                    }
                    ;
                    var i = o;
                    var c = t || h[a(194, "Imsz")];
                    if (i['jygNC'](c['timeStamp'], 0)) {
                        if (e['preTimeStamp'] && i['nHeRx'](i['RnCED'](c['timeStamp'], e['preTimeStamp']), 15))
                            return;
                        e['preTimeStamp'] = c['timeStamp']
                    }
                    var s = {};
                    s["elementId"] = c['target'].id || "",
                    s["timestamp"] = Math['now']()- u;
                    var f = c['changedTouches'];
                    f && f['length'] ? (s["clientX"] = f[0]['clientX'],
                    s['clientY'] = f[0]['clientY']) : (s['clientX'] = c['clientX'],
                    s['clientY'] = c['clientY']),
                    i['XdTvU'](void 0 === r ? "undefined" : n(r), i['ZIFFu']) ? (e['data'][r]['push'](s),
                    i['UvQjG'](e['data'][r]['length'], e['maxLength']) && e['data'][r]['shift']()) : (e['data']['push'](s),
                    i['AACoH'](e['data']['length'], e['maxLength']) && e['data']['shift']())
                }
function packN_P() {

                var t = {
                    XHUBd: function(e, t) {
                        return e(t)
                    },
                    GaTmm: function(e, t) {
                        return e - t
                    },
                    pBLVb: function(e, t) {
                        return e >= t
                    },
                    tKBtH: function(e, t) {
                        return e > t
                    },
                    isYjN: function(e, t) {
                        return e >= t
                    },
                    XeHnc: function(e, t) {
                        return e === t
                    },
                    JJTky: function(e, t) {
                        return e(t)
                    }
                }
                  , n = [];
                if (b) {
                    n = this[e("griD", 1594)][u(1155, "WWJ$")]((function(e) {
                        return e && e[u(1734, ")8Bu")] > 0
                    }
                    ));
                    for (var r = 0, o = t[u(1369, "DKL#")](n[u(1152, "EGti")], 1); t[e("54^6", 1223)](o, 0); o--) {
                        r += n[o][e("$nFE", 1600)];
                        var i = t[u(1391, "U02M")](r, this[e("jU*K", 1318)]);
                        if (t[u(1351, "Q2Sc")](i, 0) && (n[o] = n[o][u(1363, ")8Bu")](i)),
                        t[u(1431, "AcT^")](i, 0)) {
                            n = n[e("3(AN", 1397)](o);
                            break
                        }
                    }
                } else
                    n = this[u(1494, "k&f(")];
                if (t[u(1273, "WWJ$")](n[e("jU*K", 1336)], 0))
                    return [];
                var c = [][e("1[03", 1002)](a.ek(b ? 24 : 25, n));
                function u(e, t) {
                    return ae(e - 750, t)
                }
                return b ? n[e("1*rM", 1163)]((function(n) {
                    function r(e, t) {
                        return u(t - -280, e)
                    }
                    c = (c = c[r("N)xu", 900)](a.va(n[e("36]w", 1345)])))[r("griD", 1518)](t[r("l!WU", 1045)](E, n))
                }
                )) : c = c[u(1579, "3(AN")](t[e("@xF@", 1352)](E, this[u(1529, "8RnY")])),
                c
}


re()