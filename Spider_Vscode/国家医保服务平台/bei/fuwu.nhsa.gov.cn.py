import requests, time, execjs, json, hashlib
from loguru import logger


class nhsaCrawler:
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
    }
    url = "https://fuwu.nhsa.gov.cn/ebus/fuwu/api/nthl/api/CommQuery/queryWmTcmpatInfoBFromEs"
    md5 = hashlib.md5()

    def __init__(self) -> None:
        pass

    def get_data(self, page):
        self.page = page
        time_stamp = int(time.time())
        orc = {
            "data": {
                "data": {
                    "keyWords": "",
                    "drugType": "",
                    "pageNo": self.page,
                    "pageSize": 10,
                    "medListCodg": "X",
                },
                "appCode": "T98HPCGN5ZVVQBS8LZQNOAEXVI9GYHKQ",  
                "version": "1.0.0",
                "encType": "SM4",
                "signType": "SM2",
                "timestamp": time_stamp,
            }
        }
        with open("./fuwu.nhsa.gov.cn.js", "r", encoding="utf-8") as f:
            self.js_file = f.read()

        signData = execjs.compile(self.js_file).call("signData", orc)
        encData = execjs.compile(self.js_file).call("encData", orc)
        logger.success(f"time stamp--->{time_stamp}")
        logger.success(f"signData---->{signData}")
        logger.success(f"encData---->{encData}")
        json_data = {
            "data": {
                "data": {
                    "encData": encData,
                },
                "appCode": "T98HPCGN5ZVVQBS8LZQNOAEXVI9GYHKQ",
                "version": "1.0.0",
                "encType": "SM4",
                "signType": "SM2",
                "timestamp": time_stamp,
                "signData": signData,
            },
        }
        self.response = requests.post(self.url, headers=self.headers, json=json_data)
        logger.success(self.response.status_code)

    def decrypt_data(self):
        decData = execjs.compile(self.js_file).call("decData", self.response.json())
        decData = json.loads(decData)
        logger.success(decData)
        return decData

    def _MD5encrypt(self, original_str):
        self.md5.update(original_str.encode("utf-8"))
        return self.md5.hexdigest()


if __name__ == "__main__":
    pages = [x for x in range(1, 6)]
    for i, page in enumerate(pages, start=1):
        logger.info(f"{i}/{len(pages)} ----> Start to download page ({page})")
        job = nhsaCrawler()
        job.get_data(page)
        job.decrypt_data()
