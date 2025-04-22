# 1. 网站：https://m.weibo.cn
# 2. 接口：https://m.weibo.cn/u/1749127163
# 3. 加密方式：从上个请求的返回值中取加密参数trackingParams，传入下一个请求中进行翻页，获取新内容
import json
import time
import requests

headers = {
    'sec-ch-ua-platform': '"Windows"',
    'X-XSRF-TOKEN': '4fa9f2',
    'Referer': 'https://m.weibo.cn/u/1749127163',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'MWeibo-Pwa': '1',
    'X-Requested-With': 'XMLHttpRequest',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    'Accept': 'application/json, text/plain, */*',
}
params = {
        'type': 'uid',
        'value': '1749127163',
        # 本次结果经过多次测试，containerid的值是在value值前面固定加107603，同时固定生成since_id的值
        'containerid': '1076031749127163',
        # 'since_id': '5150309057302867',
    }

def get_data(since_id=None):
    params_ = params.copy()
    if since_id:
        params_['since_id'] = since_id

    try:
        response = requests.get('https://m.weibo.cn/api/container/getIndex', params=params_, headers=headers, timeout=15)
        info = response.json()
        # print(info)
        return info
    except requests.exceptions.RequestException as e:
        print(f"请求失败！", e)
        return None
    except json.JSONDecodeError as e:
        print(f"JSON解析错误", e)
        return None


def main():
    since_id = None
    max_for = 100
    mix_for = 0
    all_data = []
    while mix_for < max_for:
        info = get_data(since_id)
        # print(info)

        if not info or info.get('ok') != 1:
            print("返回数据无效或请求失败，停止循环！")
            break

        since_id = info['data']['cardlistInfo']['since_id']
        if since_id is None:
            print(f"since_id值为空，停止循环！")
            break

        cards = info.get('data', {}).get('cards', [])
        for card in cards:
            mblog = card.get('mblog', {})
            text = mblog.get('text', '无内容')
            reposts_count = mblog.get('reposts_count', 0)
            comments_count = mblog.get('comments_count', 0)
            attitudes_count = mblog.get('attitudes_count', 0)
            all_data.append({
                'text': text,
                'reposts_count': reposts_count,
                'comments_count': comments_count,
                'attitudes_count': attitudes_count
            })
            print(f"代码运行第{mix_for}次，获取到的值：{all_data}")
        mix_for +=1
        time.sleep(3)

    return all_data



if __name__ == '__main__':
    result = main()
    print(result)