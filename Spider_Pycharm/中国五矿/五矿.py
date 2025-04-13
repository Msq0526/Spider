import requests
import json


headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/json",
    "Origin": "https://ec.minmetals.com.cn",
    "Pragma": "no-cache",
    "Referer": "https://ec.minmetals.com.cn/open/home/purchase-info",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
    "sec-ch-ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
cookies = {
    "SUNWAY-ESCM-COOKIE": "992022ac-52a7-4f40-8fc3-fc05c82e4b7f",
    "__jsluid_s": "2df48872e30c47291241e4519b620e2f",
    "JSESSIONID": "14578E90BF4C2F9C754DFA57456EFC0D"
}
url = "https://ec.minmetals.com.cn/open/homepage/zbs/by-lx-page"
data = {
    "param": "Et91M8b6P/41nGxrsKIu09//4n7FM9lAk8ffl3nC201kBNfx8E+Oj3wNnwibW52sQQEEavECK7gzUP3Rxw9of4j0RPps0x85p679IBvaGMvrqBb6b0ABkdxjq/qlSyuGYlcgNW3yziaHiQ+bfo/KfergNviyTAw5iUDRSyX58GoFjs6GCYd2KYM8kb/v3C0t35xywNcR8z6DF+6GV3P5bqMnC8lEj40rIwH9KZNm1YHVcUUHYEOL8KFpyaSEBChZJs8h+lZ+m4LjSYp6+H0+qBR+l/RymZ4JbOolLjEKLwUDBamrz2jvvktK7i+BZFpH35bKZItF1cHY/O7R5sJXdg5kcE73a6A3p1RKzRx6ETvUdgVZfjVzHhNib/G/KtbfqPquAi9qYX/BpMcZnueSn53Lz8azHXlBHingnUrm6iZ5MdrsjsXAEE9nZ9+hGXJhaILHBv2g2duZlvfJ2W8kUztf/ZWIKTK4hHwVRCqbjnsRPaA5+VvY66L8eacRIKUfZDIuL2+zswBDS7PGOkdqiR6jUYO1MoI2LkaMIsH+5MqzlPrIFsUPr5MX5ozGth6Fb15azZYBGxbPoZCHfjmqtkC8dKiS4Gnc1a/2ilVWsxOyoxmENhczxYhS65FWMlnXI+qmlJMH8FTACztb456vYi/L0/WpQmcx6YJGaKCmoSE="
}
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, cookies=cookies, data=data)

print(response.text)
print(response)