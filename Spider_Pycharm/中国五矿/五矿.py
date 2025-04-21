import subprocess
from functools import partial
# 设置 subprocess.Popen 的编码为 utf-8
subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import requests
import json
import execjs


headers = {
    "Origin": "https://ec.minmetals.com.cn",
    "Referer": "https://ec.minmetals.com.cn/open/home/purchase-info",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
}
cookies = {
    "SUNWAY-ESCM-COOKIE": "992022ac-52a7-4f40-8fc3-fc05c82e4b7f",
    "__jsluid_s": "2df48872e30c47291241e4519b620e2f",
    "JSESSIONID": "14578E90BF4C2F9C754DFA57456EFC0D"
}



public_list = []
for page in range(1,3):
    res_public = requests.post('https://ec.minmetals.com.cn/open/homepage/public', cookies=cookies, headers=headers).text
    jsconde = execjs.compile(open("五矿.js","r",encoding="utf-8").read()).call("get_public",page,res_public)
    public_list.append(jsconde)
# print(public_list)

for data in public_list:
    url = "https://ec.minmetals.com.cn/open/homepage/zbs/by-lx-page"

    json_data = {
        # "param": "U78tBOOVxyiN7PBgNWSpBJ6l06Jg34mwMejx3G3qyc3hXByILBpadGeKIhY0sOZE2TjJIPRLTiNo2RxQ7C4nZcAJpGttsc0PE798Ofs3zGwXcEn4Rw4ev3TOgNkBBdPrOu7Nu8qwOyXK0HpPmQ79AgG8Y86AiSTS3IKYLb4hbZ4vOqTsFOmufAAnRD21Kr2TDD1d8XIDaCM4zWg5XsfgiA5d2UPlELE/5NXnTUEiW3pxve5o8V3W3urb54vdA3ZiXgmbxxufSoeU7aCTKMAq/AoYWXngjS3F7Na/bnFVP4pHLWLD9QMLQrwm97v4RJdXeRdHf3pKgALFPLgx9nkIFAG/C10IC5SzMsyceG5jDh0LTCDik9Di4hJ8mp2yTtVo8IQp8Qfv66fEPJGJv+dmHtlJ5YDElWicJ1RE+dkO8rDWo2v8vmW7+FrSJo3U+rw1nrqPaUaOxVfDzt3Z/uVXztNz0D7rPK8Uu56IXFf93Z7boHEYhO48VFfrQqkCwJc8SE4RbMJic5jdezPmyHJ2qb+LujSzK1lxC7Ku8UT+5fzNZ3vjnsVlMdHr+K3GvC6HfJXhZI3hohG0TSAQf157j4hVbTKS7GJkM0Uv4Fw/1ZzT8PUUhUlCjcbOGKd7YEENa7o7CzhBdt+1o+oGxtJjO+94E5oy1J6Gh7PRF8S4BTE="
        "param": data
    }
    response = requests.post(url, headers=headers, cookies=cookies, json=json_data)
    print(response.json())