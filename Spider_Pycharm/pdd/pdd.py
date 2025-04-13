import subprocess
from functools import partial
# 设置 subprocess.Popen 的编码为 utf-8
subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import requests
import execjs


url = 'https://apiv2.pinduoduo.com/api/gindex/tf/query_tf_goods_info'

headers = {
    'Accept': 'application/json, text/javascript',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Connection': 'keep-alive',
    'Origin': 'https://pinduoduo.com',
    'Referer': 'https://pinduoduo.com/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

anti_content = execjs.compile(open('./pdd.js', 'r', encoding='utf-8').read()).call('get_anti_content')
# print(anti_content)
params = {
    'tf_id': 'TFRQ0v00000Y_13394',
    'page': '1',
    'size': '39',
    # 'anti_content': "0aqWfxUeMwVEXaLbipPqXiVJNxEqt0DYcUfqX0dxr5gFms4fklF1t0E_-RAP0Xo1pTC5Q__NJQjXAfYdAzpN5hGXYtG_oTeQgzj1UFy4sYVNf9qcp9aXH_yX0PjnYPYXp7TnpTJXpgxXrkan9ZKmPZVYhhR-v5ezvSPvf6oMjRvMelpIBRIeL4VgTbyQHRNzXgowX6TTXA9zVgKEBe5Hv2ZeIt1bsZTFfXkS1HFSvM5D81OHMuO1I0Zrw65LLlUFfleSkHVS1ImSkR1bfxw26tzKp6Tw22d4g3X_qYtZB11yPVKqPJXXaV1Y4cXtma14XSt4EMo_Xoa00lGcNV1tpsauTYyOLYtHJpOPsH-26dNaelWze_pSfnCF1skHGR_mwoUn48jpHEG092NG7T4e9m9SVA",
    'anti_content': anti_content
}

response = requests.get(url=url, params=params, headers=headers)

print(response.text)