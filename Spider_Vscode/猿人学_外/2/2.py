import requests


headers = {
    "referer": "https://match.yuanrenxue.cn/match/2",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
}
cookies = {
    "sessionid": "zclxh2wb16n8d1sb8j4coy6pey23nhpi",
    "qpfccr": "true",
    "no-alert3": "true",
    "tk": "-1686911345556946187",
    "m": "f1f0ee5954d3451426ffe42a5481b9f4|1743408183000"
}
url = "https://match.yuanrenxue.cn/api/match/2"
params = {
    "page": "1"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response)