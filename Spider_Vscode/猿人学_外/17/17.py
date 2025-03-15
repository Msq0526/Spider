import httpx
import re

Clinte = httpx.Client(http2=True)
headers = {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "zh-CN,zh;q=0.9",
    "priority": "u=0, i",
    "referer": "https://match.yuanrenxue.cn/match/17",
    "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    "x-requested-with": "XMLHttpRequest",
    "Cookie": "sessionid=1tzrizrxz7geivk54twdjdiyy196vqmq; qpfccr=true; no-alert3=true; tk=119270071578065711"
}
all_num = 0
for page in range(1,6):
    url=f'https://match.yuanrenxue.cn/api/match/17?page={str(page)}'
    response = Clinte.get(url=url, headers=headers).json()
    for item in response['data']:
        num = item['value']
        all_num += num
print(all_num)
