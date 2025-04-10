import subprocess
from functools import partial
# 设置 subprocess.Popen 的编码为 utf-8
subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import requests
import json
import execjs


cookies = {
    "webapp": "1",
    "siteCode": "sxzfcg",
    "siteGuid": "6883226032309207040",
    "regioncode": "140001000",
    "regionguid": "140001",
    "theme": "default",
    "regionpguid": "232",
    "rootregionguid": "232",
    "isOpenArea": "true",
    "regionname": "%E7%9C%81%E6%9C%AC%E7%BA%A7"
}
data = {
    "regionGuid": "232",
    "regionCode": "140000000",
    "pageSize": 10,
    "pageNum": 2,
    "noticeTypeList": [
        "gpfa_notice",
        "gpfa_notice_modify",
        "gpfa_notice_resume",
        "gpfa_notice_pause"
    ]
}
url = "https://shanxisheng-zfcgdzmcgov.cn/gpfa-bpoc/api/notice/kc/v1/ignore/pagingKcAgreementNotice"
headers = {
    "referer": "https://shanxisheng-zfcgdzmcgov.cn/gpmall-main-web/basic/sxNotice",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",

}

jsoce = execjs.compile(open("./sxCG.js", "r", encoding="utf-8").read()).call("data")

nsssjss = jsoce.get("nsssjss")
timestamp = jsoce.get("timestamp")
headers["nsssjss"] = str(nsssjss)
headers["timestamp"] = str(timestamp)

data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, cookies=cookies, data=data).json()


print(response)

("本次逆向未逆向其他加密参数，如果要得到网站信息，还需提供完整加密参数，"
 "本次只是为了学习webpack扣代码！！！")