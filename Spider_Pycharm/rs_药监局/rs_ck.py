import subprocess
import os
class MySubprocessPopen(subprocess.Popen):
    def __init__(self, *args, **kwargs):
        kwargs['encoding'] = 'UTF-8'
        super().__init__(*args, **kwargs)

subprocess.Popen = MySubprocessPopen
os.environ['EXECJS_RUNTIME'] = 'Node'
import requests
import execjs
import chardet
from lxml import etree
from urllib.parse import urljoin
import loguru
logger = loguru.logger
session = requests.Session()

headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "https://www.nmpa.gov.cn/",
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-User": "?1",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
    "sec-ch-ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}

# cookies = {
#     # 'JXQcDbC7VBRuO': '60JfTXJQhvgQ2gnKnaKx1hS6lvIU0mqdSvEijY07DaiKJVzftBrkbcY0GkzEx7NKKqAMp22lIGCGSx4BVwEQEiBG',
#     # 'JXQcDbC7VBRuP': '0LvGyt6Nlq50vMNB5RilWQ5ace4exnsR8wQgNzHxHMfXfs88RdPq9JocAluCzg77mMLc6M9mD1eYVywgkkLt8g8_hO1TE0_VTPu2N.pHLRdZ2dNsuz3B0giVK7cAGWmtYLZ4OGctVEcklToOc3fC4eCtT_KbuTAWrmaifgVfSFvokff0Bgc47S8O8f9ust0Hdzk8epqucBolIqFys5gN8O9ZUd2emOmhxJ1GGKv6YYoyK.poyZI1zvK33Un7DhdezXwd5jXYw2JttIMm8FXeuGEbsmsKUtnXpMSwPKDHRihcoDHxbmJDPpiIGMguutekbE2O1kYDiq8RoQ5C.eux_nrBHeO.C6fWlUzSVbxOT.d8VISEzbY36riJYivrQZF4wc0ZCuqq_XcGWEyvJJebUytI1PE5sbBip0wj_fz5vUWW',
# }



def get_01(url, headers):
    try:
        response = session.get(url, headers=headers)
        response.raise_for_status()  # 检查请求是否成功
        logger.success(f"第一次请求状态码为>>>>>{response.status_code}")
        html = etree.HTML(response.text)
        meta_content = html.xpath('//meta/@content')[1]
        auto_js = html.xpath('//script/text()')[0]
        ts_url = urljoin(url, html.xpath('//script[2]/@src')[0])
        ts_js = session.get(ts_url, headers=headers).text
        return meta_content, auto_js, ts_js
    except requests.RequestException as e:
        logger.error(f"第一次请求出错: {e}")
        return None, None, None


def update_cookie(meta_content, auto_js, ts_js):
    if meta_content is None or auto_js is None or ts_js is None:
        return
    try:
        with open('ck.js', 'rb') as js_file:
            raw_data = js_file.read()
            encoding = chardet.detect(raw_data)['encoding']
            js_code = raw_data.decode(encoding)
        js_code = js_code.replace('metaContent', meta_content).replace("'ts_js'", ts_js).replace("'auto_js'", auto_js)
        js_compile = execjs.compile(js_code).call('get_cookie')
        print(js_compile)
        cookie_t = js_compile.split(';')[0].split('=')
        print(cookie_t)
        session.cookies.update({cookie_t[0]: cookie_t[1]})
        cookie_str = len(str(session.cookies))
        logger.success(f"cookie数量>>>>>>{cookie_str}")
        logger.success(f"cookie内容>>>>>>{session.cookies.get_dict()}")
    except execjs._exceptions.ProgramError as e:
        logger.error(f"JavaScript 代码执行出错: {e}")
    except Exception as e:
        logger.error(f"更新 cookie 时出错: {e}")


def get_02(url, headers):
    try:
        response = session.get(url, headers=headers)
        response.encoding = "utf8"
        response.raise_for_status()  # 检查请求是否成功
        logger.success(f"第二次请求状态码为>>>>>{response.status_code}")
        logger.info(f"请求内容为>>>>>{response.text}")
    except requests.RequestException as e:
        logger.error(f"第二次请求出错: {e}")


def main():
    url = "https://www.nmpa.gov.cn"
    meta_content, auto_js, ts_js = get_01(url, headers)
    update_cookie(meta_content, auto_js, ts_js)
    get_02(url, headers)

if __name__ == '__main__':
    main()