import subprocess
from functools import partial
# 设置 subprocess.Popen 的编码为 utf-8
subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import requests
import execjs
import time

cookies = {
    'amap_local': '110000',
    'yb_header_active': '-1',
    'acw_tc': '276aedd917466893510442502e7aeda0ae73d57f219a84952f6e86ab363815',
}

headers = {
    'Referer': 'https://fuwu.nhsa.gov.cn/nationalHallSt/',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
}

def update_page(cookies, headers):
    for i in range(1, 10):
        timestamp = int(time.time())
        # print(timestamp)
        t = {
            "transformRequest": {},
            "transformResponse": {},
            "timeout": 30000,
            "xsrfCookieName": "XSRF-TOKEN",
            "xsrfHeaderName": "X-XSRF-TOKEN",
            "maxContentLength": -1,
            "headers": {
                "common": {
                    "Accept": "application/json, text/plain, */*"
                },
                "delete": {},
                "get": {},
                "head": {},
                "post": {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                "put": {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                "patch": {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                "Accept": "application/json",
                "Content-Type": "application/json",
                "channel": "web",
                "x-tif-signature": "4129519bddbddf2361e3897688974f23f6013f0668d394ae7cbedd676a9a840d",
                "x-tif-timestamp": timestamp,
                "x-tif-nonce": "U1jUop63",
                "contentType": "application/x-www-form-urlencoded"
            },
            "withCredentials": "false",
            "baseURL": "/ebus/fuwu/api",
            "method": "post",
            "url": "/nthl/api/CommQuery/queryFixedHospital",
            "data": {
                "data": {
                    "addr": "",
                    "regnCode": "110000",
                    "medinsName": "",
                    "medinsLvCode": "",
                    "medinsTypeCode": "",
                    "outMedOpenFlag": "",
                    "pageNum": i,
                    "pageSize": 10,
                    "queryDataSource": "es"
                },
                "appCode": "T98HPCGN5ZVVQBS8LZQNOAEXVI9GYHKQ",
                "version": "1.0.0",
                "encType": "SM4",
                "signType": "SM2",
                "timestamp": timestamp
            }
        }


        signData = execjs.compile(open('yb.js', 'r', encoding='utf-8').read()).call('signData', t)
        # print(signData)
        encData = execjs.compile(open('yb.js', 'r', encoding='utf-8').read()).call('encData', t)
        # print(encData)

        json_data = {
            'data': {
                'appCode': 'T98HPCGN5ZVVQBS8LZQNOAEXVI9GYHKQ',
                'data': {
                    'encData': encData
                    },
                'encType': 'SM4',
                'signData': signData,
                'signType': 'SM2',
                'timestamp': timestamp,
                'version': '1.0.0',
            },
        }


        response = requests.post(
            'https://fuwu.nhsa.gov.cn/ebus/fuwu/api/nthl/api/CommQuery/queryFixedHospital',
            cookies=cookies,
            headers=headers,
            json=json_data,
        ).json()
        # print(json_data)
        # print(response)
        time.sleep(5)
        data = execjs.compile(open('yb.js', 'r', encoding='utf-8').read()).call('_encData', response)
        time.sleep(5)
        return data
        
def get_data():
    data = update_page(cookies, headers)
    for item in data['list']:
        print(item)
def main():
    get_data()

if __name__ == '__main__':
    main()