import requests
import base64
import re


def get_data():
    url = 'https://match.yuanrenxue.cn/api/match/12?'
    headers = {
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
        "priority": "u=0, i",
        "referer": "https://match.yuanrenxue.cn/match/12",
        "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-requested-with": "XMLHttpRequest"
}
    Cookie = {
        "sessionid": "w17g05iu51a6h83h139no24w1p51ou4w",
        "qpfccr": "true",
        "no-alert3": "true"
}
    all_num = 0

    for i in range(1, 6):
        a = 'yuanrenxue' + str(i)
        b = base64.b64encode(a.encode()).decode()
        params = {
            "page": i,
            "m": b+str(i)
        }
        res = requests.get(url=url, headers=headers,cookies=Cookie, params=params).json()
        pattern = r'\d+'
        result = re.findall(pattern, str(res))
        # print('未进行正则匹配的数:'+ str(result))
        # 查看当前请求的URL
        # print(res.request.url)

        for item in result:
            all_num += int(item)

    num = all_num - 5
    print(num)    
        
    '''
    因题目要求是负数相加,我先使用re把'-'号取数掉后以正数相加,提交答案时需手动加上'-'号。
    '''

get_data()