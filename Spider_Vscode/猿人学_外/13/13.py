import requests
import re

def get_data():
    session = requests.session()
    headers = {
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "referer": "https://match.yuanrenxue.cn/match/13"
    }
    Cookie = {
        "sessionid": "1tzrizrxz7geivk54twdjdiyy196vqmq"
    }
    '''
    ('y')+('u')+('a')+('n')+('r')+('e')+('n')+('x')+('u')+('e')+('_')+('c')+('o')+('o')+('k')+('i')+('e')+('=')+('1')+('7')+('4')+('1')+('7')+('6')+('9')+('8')+('1')+('3')+('|')+('h')+('q')+('V')+('i')+('p')+('5')+('F')+('Q')+('8')+('c')+('f')+('i')+('X')+('y')+('v')+('k')+('j')+('R')+('w')+('L')+('M')+('u')+('g')+('V')+('m')+('j')+('k')+('x')+('U')+('a')+('w')+('1')+('5')+('P')+('q')+('z')+('w')+('c')+('Q')+('r')+('Q')+('G')+('R')+('y')+('D')+('Z')+('k')+('m')+('o')+('T')+('Z')+('T')+('z')+('7')+('q')+('Y')+('U')+('z')+('c')+('H')+('b')+('P')+('s')+('i')+('x')+';path=/';
    '''
    session.cookies.update(Cookie)
    session.headers = headers
    
    # 获取js代码
    url = 'https://match.yuanrenxue.cn/match/13?'
    res1 = session.get(url).text
    # print(res1)


    # 利用正则表达式匹配出cookie值
    pannet = "\('(.)'\)"
    cookie = ''.join(re.findall(pannet, res1))
    key, value = cookie.split('=')
    session.cookies.update({key: value})
    # print(cookie)


    # 请求数据
    all_num = 0
    for page in range(1,6):
        url_x = f'https://match.yuanrenxue.cn/api/match/13?page={str(page)}'
        res2 = session.get(url_x).json()
        print(res2)
        for num in res2['data']:
            i = num['value']
            all_num += i
    print(all_num)


get_data()