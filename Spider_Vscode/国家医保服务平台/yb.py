import subprocess
import os
class MySubprocessPopen(subprocess.Popen):
    def __init__(self, *args, **kwargs):
        kwargs['encoding'] = 'UTF-8'
        super().__init__(*args, **kwargs)

subprocess.Popen = MySubprocessPopen
os.environ['EXECJS_RUNTIME'] = 'Node'
import requests,execjs,json,time
from loguru import logger



cookies = {
        'amap_local': '110000',
        'yb_header_active': '-1',
        'acw_tc': '276aedd917466893510442502e7aeda0ae73d57f219a84952f6e86ab363815',
    }
headers = {
        'Referer': 'https://fuwu.nhsa.gov.cn/nationalHallSt/',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
    }
url = 'https://fuwu.nhsa.gov.cn/ebus/fuwu/api/nthl/api/CommQuery/queryFixedHospital'
def get_data(page):
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
                        "pageNum": page,
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
    
    js_code = get_js_code()

    signData = execjs.compile(js_code).call('signData', t)
    # print(signData)
    encData = execjs.compile(js_code).call('encData', t)
    # print(encData)
    # logger.success(f"timestamp>>>>>>{timestamp}")
    # logger.success(f"signData>>>>>>{signData}")
    # logger.success(f"encData>>>>>>{encData}")
    
        
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
    time.sleep(5)
    logger.info(f"第{page}页数据请求中...")
    response = requests.post(url=url,cookies=cookies,headers=headers,json=json_data)

    if response.status_code == 200:
        logger.success(f"第{page}页数据请求成功,状态码：{response.status_code}")
        time.sleep(5)
        return response
    else:
        logger.error(f"第{page}页数据请求失败,状态码：{response.status_code}")
        time.sleep(5)
        return None
def decrypt_data(page):
    response = get_data(page)
    if response is None:
        logger.error(f"第{page}页数据请求失败,无法解密数据")
        return {}
    try:
        js_code = get_js_code()
        
        logger.info(f"第{page}页数据解密中...")
        data = execjs.compile(js_code).call('_encData', response.json())
        for item in data['list']:
            logger.info(item)
    except json.JSONDecodeError as e:
        logger.error(f"JSON解析失败,相应内容:{response.text}")
        return None
    except Exception as e:
        logger.error(f"数据解密失败,错误信息:{str(e)}")
        return None
def get_js_code():
    with open('yb.js', 'r', encoding='utf-8') as js_file:
        js_code = js_file.read()
    return js_code
def main():
    pages = [x for x in range(1, 6)]
    for i, page in enumerate(pages, start=1):
        logger.info(f"{i}/{len(pages)} ----> 开始下载第 ({page}) 页")
        get_data(page)
        time.sleep(5)
        decrypt_data(page)
        time.sleep(5)

if __name__ == '__main__':
    main()
