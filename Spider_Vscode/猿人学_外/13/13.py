import requests
import re

def get_data():
    session = requests.Session()

    url = 'https://match.yuanrenxue.cn/match/13?'
    headers = {
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
        "priority": "u=0, i",
        "referer": "https://match.yuanrenxue.cn/match/13",
        "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "x-requested-with": "XMLHttpRequest",
        "Cookie": "sessionid=w17g05iu51a6h83h139no24w1p51ou4w; qpfccr=true; no-alert3=true; yuanrenxue_cookie=1741770337|qEQFypsECXNsT6SWp2MTjh70CoMGcY8KqSWmoSzHNoUwdapB9Utg0XlzmaagghW3ix6onjFAv0YT3QoNwJ3DPkK1"
    }
    # Cookie = {
    #     'yuanrenxue_cookie': '1741769813|hqVip5FQ8cfiXyvkjRwLMugVmjkxUaw15PqzwcQrQGRyDZkmoTZTz7qYUzcHbPsix;path=/'
    # }
    '''
    ('y')+('u')+('a')+('n')+('r')+('e')+('n')+('x')+('u')+('e')+('_')+('c')+('o')+('o')+('k')+('i')+('e')+('=')+('1')+('7')+('4')+('1')+('7')+('6')+('9')+('8')+('1')+('3')+('|')+('h')+('q')+('V')+('i')+('p')+('5')+('F')+('Q')+('8')+('c')+('f')+('i')+('X')+('y')+('v')+('k')+('j')+('R')+('w')+('L')+('M')+('u')+('g')+('V')+('m')+('j')+('k')+('x')+('U')+('a')+('w')+('1')+('5')+('P')+('q')+('z')+('w')+('c')+('Q')+('r')+('Q')+('G')+('R')+('y')+('D')+('Z')+('k')+('m')+('o')+('T')+('Z')+('T')+('z')+('7')+('q')+('Y')+('U')+('z')+('c')+('H')+('b')+('P')+('s')+('i')+('x')+';path=/';
    '''
    # session.cookies.update(Cookie)
    session.headers.update(headers)

    res = session.get(url=url)
    # print(res.text)
    p = re.compile(r"document\.cookie = '('.?')'")
    cookies = p.finditer(res.text)
    print(cookies)

    # for i in range(1, 6):
    #     params = {
    #         "page": i
    #     }

    #     res = session.get(url=url, params=params)
    #     print(res.request.url)
    #     print(res.text)


get_data()