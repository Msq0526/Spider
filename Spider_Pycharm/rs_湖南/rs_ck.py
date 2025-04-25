import subprocess
from functools import partial
subprocess.Popen = partial(subprocess.Popen, encoding='utf-8')
import requests
import execjs

cookies = {
    # 'JXQcDbC7VBRuO': '60JfTXJQhvgQ2gnKnaKx1hS6lvIU0mqdSvEijY07DaiKJVzftBrkbcY0GkzEx7NKKqAMp22lIGCGSx4BVwEQEiBG',
    # 'JXQcDbC7VBRuP': '0LvGyt6Nlq50vMNB5RilWQ5ace4exnsR8wQgNzHxHMfXfs88RdPq9JocAluCzg77mMLc6M9mD1eYVywgkkLt8g8_hO1TE0_VTPu2N.pHLRdZ2dNsuz3B0giVK7cAGWmtYLZ4OGctVEcklToOc3fC4eCtT_KbuTAWrmaifgVfSFvokff0Bgc47S8O8f9ust0Hdzk8epqucBolIqFys5gN8O9ZUd2emOmhxJ1GGKv6YYoyK.poyZI1zvK33Un7DhdezXwd5jXYw2JttIMm8FXeuGEbsmsKUtnXpMSwPKDHRihcoDHxbmJDPpiIGMguutekbE2O1kYDiq8RoQ5C.eux_nrBHeO.C6fWlUzSVbxOT.d8VISEzbY36riJYivrQZF4wc0ZCuqq_XcGWEyvJJebUytI1PE5sbBip0wj_fz5vUWW',
}

headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Referer': 'https://www.haeea.cn/',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    # 'Cookie': 'JXQcDbC7VBRuO=60JfTXJQhvgQ2gnKnaKx1hS6lvIU0mqdSvEijY07DaiKJVzftBrkbcY0GkzEx7NKKqAMp22lIGCGSx4BVwEQEiBG; JXQcDbC7VBRuP=0LvGyt6Nlq50vMNB5RilWQ5ace4exnsR8wQgNzHxHMfXfs88RdPq9JocAluCzg77mMLc6M9mD1eYVywgkkLt8g8_hO1TE0_VTPu2N.pHLRdZ2dNsuz3B0giVK7cAGWmtYLZ4OGctVEcklToOc3fC4eCtT_KbuTAWrmaifgVfSFvokff0Bgc47S8O8f9ust0Hdzk8epqucBolIqFys5gN8O9ZUd2emOmhxJ1GGKv6YYoyK.poyZI1zvK33Un7DhdezXwd5jXYw2JttIMm8FXeuGEbsmsKUtnXpMSwPKDHRihcoDHxbmJDPpiIGMguutekbE2O1kYDiq8RoQ5C.eux_nrBHeO.C6fWlUzSVbxOT.d8VISEzbY36riJYivrQZF4wc0ZCuqq_XcGWEyvJJebUytI1PE5sbBip0wj_fz5vUWW',
}

session = requests.Session()
response = session.get('https://www.haeea.cn/', cookies=cookies, headers=headers)
print("第一次请求：",response.status_code)
print(response.text)

# js_code = open('ck.js', 'r', encoding='utf-8').read()
# ctx = execjs.compile(js_code)
# result = ctx.call('get_cookie', '')
# session.cookies['JXQcDbC7VBRuP'] = result.split(';')[0].split('=')[1]
# print(session.cookies)
#
# res = session.get('https://www.haeea.cn/')
# print(res.status_code)







# print(200)