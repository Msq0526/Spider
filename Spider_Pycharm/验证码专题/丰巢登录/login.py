import requests, time, random, execjs, ddddocr, uuid
from loguru import logger


class FCclass():
    def __init__(self):
        self.headers = {
            'Accept': '*/*',
            'Accept-Language': 'zh-CN,zh;q=0.9',
            'Connection': 'keep-alive',
            'Origin': 'https://www.fcbox.com',
            'Referer': 'https://www.fcbox.com/',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-site',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
        }
        self.uuid = str(uuid.uuid4())
        self.url_o = f'https://acs.fcbox.com/captcha/querySlideImage/{self.uuid}'
        self.url_t = f'https://acs.fcbox.com/captcha/checkCode/{self.uuid}'

    def get_one(self):
        response = requests.post(url=self.url_o,headers=self.headers).json()
        print(response)
        clientIp = response['data']['clientIp']
        checkId = response['data']['checkId']
        key = response['data']['key']
        print(clientIp, checkId, key)
        shadeImageUrl = response['data']['shadeImageUrl']
        slideImageUrl = response['data']['slideImageUrl']
        logger.info(f'shadeImageUrl: {shadeImageUrl}')
        logger.info(f'slideImageUrl: {slideImageUrl}')
        shadeImageUrl_res = requests.get(url=shadeImageUrl)
        with open('shadeImageUrl.png', 'wb') as f:
            f.write(shadeImageUrl_res.content)
        slideImageUrl_res = requests.get(url=slideImageUrl)
        with open('slideImageUrl.png', 'wb') as f:
            f.write(slideImageUrl_res.content)
        return clientIp, checkId, key

    def dd_ocr(self):
        with open('shadeImageUrl.png', 'rb') as f:
            shadeImageUrl_png = f.read()
        with open('slideImageUrl.png', 'rb') as f:
            slideImageUrl_png = f.read()
        ocr = ddddocr.DdddOcr(det=False, show_ad=False, ocr=False)
        result = ocr.slide_match(shadeImageUrl_png, slideImageUrl_png, simple_target=True)
        x_length = result['target'][0]
        y_length = result['target'][1]
        # print(result)
        logger.info(f'y轴距离::: {y_length}')
        logger.info(f'滑动距离::: {x_length}')
        return x_length, y_length

    def track_list(self, x_length, y_length):
        track = []
        x = 0
        y = y_length
        t = int(time.time() * 1000)

        while x < x_length:
            track_d = {"x": x, "y": y, "time": t}
            track.append(track_d)
            x += random.randint(0, 10)
            t += random.randint(1, 20)
            y = y_length

            if x >= x_length:
                x = x_length
                track_d = {"x": x, "y": y, "time": t}
                track.append(track_d)
                break
        for i in range(random.randint(2, 5)):
            track_d = {"x": x, "y": y, "time": t}
            track.append(track_d)
            x = x_length
            y = y_length
            t += random.randint(1, 20)

        result = ''
        for i in track:
            result += f"{i['x']},{i['y']},{i['time']}"
        logger.info(f'拼接后的内容::: {result}')
        logger.info(f'轨迹内容::: {track}')
        return result, track

    def get_data(self, clientIp, checkId, track, key):
        uid = self.uuid
        with open('fc.js', 'r') as f:
            js = f.read()
        data = execjs.compile(js).call('get_data', clientIp, checkId, track, key, uid)
        return data

    def get_two(self, data):
        data = data
        response = requests.post(url=self.url_t,headers=self.headers, data=data)
        logger.success(response.text)
        return response

if __name__ == '__main__':
    FC = FCclass()
    clientIp, checkId, key = FC.get_one()
    x_length, y_length = FC.dd_ocr()
    result, track = FC.track_list(x_length, y_length)
    data = FC.get_data(clientIp, checkId, track, key)
    FC.get_two(data)




