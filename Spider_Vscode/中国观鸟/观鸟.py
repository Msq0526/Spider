import requests
import execjs


url = "https://api.birdreport.cn/front/activity/search"
def update_page(url):
    data_list = []
    info_list = []
    for page in range(1, 3):
        options = {
            "data": f"page={page}&limit=20"
        }
        with open(r"E:\Spider\Spider_Vscode\中国观鸟\观鸟.js", "r", encoding="utf-8") as js_file:
            js_data = js_file.read()
        info = execjs.compile(js_data).call("jscode", options)
        info_list.append(info)
    print(info_list)
    for info in info_list:
        requestId = info["requestId"]
        sign = info["sign"]
        timestamp = str(info["timestamp"])
        # print(requestId, sign, timestamp)
        headers = {
            "Referer": "https://www.birdreport.cn/",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
            "requestId": requestId,
            "sign": sign,
            "timestamp": timestamp
        }
        print(headers)
        response = requests.post(url, headers=headers).json()
        print(response)
        # data = response.get("data")
        # print(data)
        # data_list.append(data)
    print(data_list)
    # return data_list    


update_page(url)

def enctrypt_data():
    data_list = update_page(url)
    for data in data_list:
        data = data["data"]
        print(data)
        print()
        # with open(r"E:\Spider\Spider_Vscode\中国观鸟\观鸟.js", "r", encoding="utf-8").read() as js_file:
        #     execjs.compile(js_file).call("decode", data)


    
# enctrypt_data()