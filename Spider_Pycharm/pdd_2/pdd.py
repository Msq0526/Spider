import subprocess
from functools import partial
# 设置 subprocess.Popen 的编码为 utf-8
subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import requests
import execjs

session = requests.Session()

cookies = {
    'webp': 'true',
    'api_uid': 'rBUUP2gRsnAJBhFUN0mcAg==',
    '_nano_fp': 'XpmYnpUbX0Pyn5dYXo_oBrYLpj3EGlFl~H3fbfgs',
    'VISITOR_PASS_ID': 'RxLhVeMnWdlUdtYysAG08GVJAMadrU18DLmmzEQETPWK6WSE5msfp_kKXd9TibkSzNbz-Z8ZgZ5pWVXB3X0qzdtj3YBRUEgquX8S75KrBio_1025a14b40d',
    'rckk': '1XHzPgtZz7DrH3B1Fqy99ifoQufBWZJo',
    '_bee': '1XHzPgtZz7DrH3B1Fqy99ifoQufBWZJo',
    'ru1k': '043ff623-7c7a-4f53-a8f2-e8be05109c7a',
    '_f77': '043ff623-7c7a-4f53-a8f2-e8be05109c7a',
    'ru2k': 'e0775a60-7965-421e-9f6b-ecfaf138d868',
    '_a42': 'e0775a60-7965-421e-9f6b-ecfaf138d868',
}
headers = {
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    # 'anti-content': '0arWtxUkB_Ve0xrw14xSCSIwvFBFdmMAy2GcKJ3T34pD7nRuv5pwmIlRwDwFMxUCVBFxlIeCxa4IYxN7tt2cfJ3f39pD8AhQwtv8uvNByUtiUfo2jXq6uYmVkd42QmUfBK5NJyV1d5thC7KtfTqsQDHwgILSxWKuZHoRDQpLJUoP37yFnbKGpFKccXEXNZnpiwHqnxXGuyPfHJF6sxi2ozdoKNuBoVrQ0YF04ycUv8l0ujnYuacdgxlUEvlYvjnXpjlYpxnX48n9xKufIeMXxslHnqOXBphqTClHNHnqvSvlivYvl9f2xIDEjLOb2W5eB5Vk84c92wanrs7I09Yyz_aX4UfpwjTdCXQXlgJldmEnYkdyT084TPjyzPfquxQzE2TdurQjj_aY5UGYyJzlYwBMV544OBtDe-sMz9c0_K_2mM_Ww7Zp_gB9kz315M_gCSxRv3sFdbs7uDhrU-hQEvWxM-tDWSsPvpHE42_32wDBM4vP-pu3RU--Qg7LMWwMRqemMhrFMumbrd7J2I34aaJB2Nanwg9HHB76oQ80Tu6',
    'cache-control': 'no-cache',
    'content-type': 'application/json',
    'origin': 'https://pifa.pinduoduo.com',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://pifa.pinduoduo.com/',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    # 'cookie': 'webp=true; api_uid=rBUUP2gRsnAJBhFUN0mcAg==; _nano_fp=XpmYnpUbX0Pyn5dYXo_oBrYLpj3EGlFl~H3fbfgs; VISITOR_PASS_ID=RxLhVeMnWdlUdtYysAG08GVJAMadrU18DLmmzEQETPWK6WSE5msfp_kKXd9TibkSzNbz-Z8ZgZ5pWVXB3X0qzdtj3YBRUEgquX8S75KrBio_1025a14b40d; rckk=1XHzPgtZz7DrH3B1Fqy99ifoQufBWZJo; _bee=1XHzPgtZz7DrH3B1Fqy99ifoQufBWZJo; ru1k=043ff623-7c7a-4f53-a8f2-e8be05109c7a; _f77=043ff623-7c7a-4f53-a8f2-e8be05109c7a; ru2k=e0775a60-7965-421e-9f6b-ecfaf138d868; _a42=e0775a60-7965-421e-9f6b-ecfaf138d868',
}
json_data = {
    'rn': '4bd7954940e8b76f0e00616ad5272822',
    'page': 2,
    'pageSize': 20,
    'queryApi': '',
}

anti_content = execjs.compile(open('./pdd.js', 'r', encoding='utf-8').read()).call('get_anti_content')
# print(anti_content)
headers['anti_content'] = anti_content
session.headers.update(headers)
# print(session.headers)
response = session.post(
    'https://pifa.pinduoduo.com/pifa/recommend/queryRecommendGoods',
    cookies=cookies,
    headers=headers,
    json=json_data,
)

print(response.json())