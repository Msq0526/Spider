import subprocess
from functools import partial
# 设置 subprocess.Popen 的编码为 utf-8
subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import execjs._exceptions
import requests
import json
import execjs
import time


# js文件path
js_path = "E:\\Spider\\Spider_Vscode\\四库一\\4k1.js"
def get_datatext():
    headers = {
        "Referer": "https://jzsc.mohurd.gov.cn/data/project",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "accessToken": "jkFXxgu9TcpocIyCKmJ+tfpxe/45B9dbWMUXhdY7vLWUm63Pc3U42ok6+EFDhL4thpUUKvcMtoMqfGfwdLCb8g==",
    }
    url = "https://jzsc.mohurd.gov.cn/APi/webApi/dataservice/query/project/list"
    all_data = []
    for i in range(1, 3):
        params = {
        "pg": i,
        "pgsz": "15",
        "total": "450"
        }
        try:
            response = requests.get(url, headers=headers, params=params).text
            time.sleep(5)
            print(f'第{i}页数据获取成功！', response[:10])
            all_data.append(response)
        except Exception as e:
            print(f"第{i}页数据获取失败！{str(e)}")
    return all_data
    

def get_datajson(all_data):
    results = []
    if all_data is None:
        print("all_data is None")
        return results
    # print(response)
    try:
        with open(js_path, "r") as file_js:
            exec_js = file_js.read()
        for data in all_data:
            exec_code = execjs.compile(exec_js).call("b", data)
            try:
                result = json.loads(exec_code)
                results.append(result)
            except json.JSONDecodeError as e:
                print(f"json解析失败!{str(e)}，执行结果: {exec_code}")
    except execjs._exceptions.ProgramError as e:
        print(f"js代码执行失败!{str(e)}")
    except json.JSONDecodeError as e:
        print(f"json解析失败!{str(e)}，执行结果: {exec_code}")
    except Exception as e:
        print(f"发生其他错误!{str(e)}")
    return results

all_data = get_datatext()
result = get_datajson(all_data)
print(result)