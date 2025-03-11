import execjs
import requests


def js_from_file():
    # 读取JS文件
    with open('第一关.js', 'r', encoding='utf-8') as f:
        result = f.read()
        return result


def get_js_info():
    JM = execjs.compile(js_from_file())
    m = JM.call('get_md5')
    # print(m)
    return m


def get_data():
    m = get_js_info()
    print('m=' + m)
    headers = {
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "zh-CN,zh;q=0.9",
        "priority": "u=0, i",
        "referer": "https://match.yuanrenxue.cn/match/1",
        "sec-ch-ua": "\"Not(A:Brand\";v=\"99\", \"Google Chrome\";v=\"133\", \"Chromium\";v=\"133\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
        "x-requested-with": "XMLHttpRequest"
    }
    url = "https://match.yuanrenxue.cn/api/match/1"
    for i in range(1, 6):
        params = {
            "page": i,
            "m": m
        }
        # print(f"构造的URL: {url}?{requests.compat.urlencode(params)}")
        # print(f"实际发送的URL: {res.request.url}")

        res = requests.get(url=url, headers=headers, params=params)

        print(res.json)


get_data()
