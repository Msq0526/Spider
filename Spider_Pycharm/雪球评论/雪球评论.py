# 接口url：https://xueqiu.com/S/SH600036?md5__1038=n4IxR7DtD%3DQmqBKDsD7mG7Gd4oxjoxAI0N4Qx
# 接口url：https://xueqiu.com/k?q=%E6%8B%9B%E5%95%86%E9%93%B6%E8%A1%8C#/timeline
# 搜索定位接口：https://xueqiu.com/query/v1/
# 加密参数：md5__1038: eqfxyD9Dg7nDBiDlxGrtQD8DujaqDOSziRUeD

import subprocess
from functools import partial
# 设置 subprocess.Popen 的编码为 utf-8
subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import requests
import execjs


def get_jscode(data):
    js_path = "E:\Spider\Spider_Pycharm\雪球评论\雪球评论.js"

    with open(js_path, "r", encoding='utf-8') as f:
        jsdata = f.read()
    jscode = execjs.compile(jsdata).call("main", data)

    return jscode

def get_info(params):
    url = "https://xueqiu.com/query/v1/search/status.json"
    headers = {
        "Referer": "https://xueqiu.com/k?q=%E6%8B%9B%E5%95%86%E9%93%B6%E8%A1%8C",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36"
    }
    cookies = {
        "cookiesu": "611743473671943",
        "smidV2": "202504011014322a2ebcf73ad0803b81f87ebcb64e8d8200d7333535bd44800",
        "device_id": "525269cca394d5ec1ec8c24fde37add1",
        "s": "bm12mnnu6c",
        "xq_a_token": "8227a6f1f070ca10a573ea273e25da157b017b89",
        "xqat": "8227a6f1f070ca10a573ea273e25da157b017b89",
        "xq_r_token": "8c19700a9bde6cebd6eb64490168b410844f0b33",
        "xq_id_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOi0xLCJpc3MiOiJ1YyIsImV4cCI6MTc0NjA2MTE1OSwiY3RtIjoxNzQzOTkwMzMzMzk1LCJjaWQiOiJkOWQwbjRBWnVwIn0.NBzEmMB16fvNzMn_W03D5JAfi0wbSo6fDdlni0n-0xknXmFvUUnzbbnpiwcDkcrNxXwhtw0O3AUfu3slwpl72DQapGvs5E8Z2G-YckdYXZabO1QZWdr98KsrSzfs9yb60ppgO19Cp7Ej84pNNzBEYhvkRpe59W9zfnZarVRBApDZY0b-DcB-0LC1vHJqEUEBe3iVx_mVChH8JOBTkqYkRhxuXTmm9lyuusZL0cWh1Dk5l7P7Lmt3-ygoqD-N-F9ADgy-5wCirY7OdinZ_y1y6ecrWFI5OkXHIekMDvYlhyeFkMzz-CLXJFJ4rYzdRFCBwhqjt8plM2TB3-6Wl1tXTw",
        "u": "611743473671943",
        ".thumbcache_f24b8bbe5a5934237bbc0eda20c1b6e7": "wLxi7fbySfVmBu3R/jrpExUaXqOJipUPgQjVBhpGXcrkpxEJMM/0dBumu6sOTGYOYuFUQJDOANJMoYV3+VOxJQ%3D%3D",
        "acw_tc": "1a312e5f17440166637661415e007490c16d47f3d46f2f24cca72ad80948d0",
        "ssxmod_itna": "eq0x9C0=0Qeiu4e9DmqAKiODuDRQD0e8xBP017D+xQ5DODLxn45GdduqjwqottsMCFBG0+PwCAqDsqYxiNDAxq0iDC8ejhsnOY25dqfjmT43qnrhuvpsYAIESRqbSK=ZnLkLwuYDHxY=DCkhZK7ND4+3Dt4DIDAYDDxDWDYoDxGtQDG=D7g232QuYxi3DbgrDf4DmDGA5TeDg+DDBzRNDKTp5=7hNmlqD0dmiADDhm+DTHcXH20FdH7a0zeDMWxGXj0SzpZSjVAuahKQbT3rDzuCDtdTQleikvrRNcmnrB0hmUse6BGGrj7odADW05d0DYOizODtG4s7xo0z4oxzBqWGYS7s7WdDDfQfP6DhZCtc2tyxXrBN7Y5c0RglNinpNmDi7N10qsDmi/pVrx3C0o8hZ0N3YD",
        "ssxmod_itna2": "eq0x9C0=0Qeiu4e9DmqAKiODuDRQD0e8xBP017D+xQ5DODLxn45GdduqjwqottsMCFBG0+PwCQ4DWw/Q+Euv=kRr5NsDh02RGA1VYD"
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params)
    print(response.json())
    print(response)
    print("********************************************************************************************************************************************************************")

def get_data():
    all_params = []
    for i in range(1,3):
        data = {
            "protocol": "https:",
            "host": "xueqiu.com",
            "hostname": "xueqiu.com",
            "port": "",
            "pathname": "/query/v1/search/status.json",
            "search": f"?sortId=1&q=%E6%8B%9B%E5%95%86%E9%93%B6%E8%A1%8C&count=20&page={i}",
            "hash": "",
            "O": f"https://xueqiu.com/query/v1/search/status.json?sortId=1&q=%E6%8B%9B%E5%95%86%E9%93%B6%E8%A1%8C&count=20&page={i}"
        }
        jscode = get_jscode(data)
        params = {
            "sortId": "1",
            "q": "招商银行",
            "count": "20",
            "page": i,
            "md5__1038": jscode
        }
        all_params.append(params)
    return all_params

if __name__ == '__main__':
    all_params = get_data()
    for param in all_params:
        get_info(param)







