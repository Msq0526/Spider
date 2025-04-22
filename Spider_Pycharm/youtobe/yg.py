# 1. 网站：https://www.youtube.com
# 2. 接口：https://www.youtube.com/youtubei/v1/browse?prettyPrint=false
# 3. 请求方式：从上个请求的返回值中取加密参数trackingParams，传入下一个请求中进行翻页，获取新内容
import requests
from urllib.parse import unquote
import json
import re

class Spider_yg():
    def __init__(self):
        self.cookies = {
            'YSC': 'zvpP_h33-EY',
            'VISITOR_INFO1_LIVE': 'JWqS6D7ZL70',
            'VISITOR_PRIVACY_METADATA': 'CgJDThIEGgAgZA%3D%3D',
            'PREF': 'tz=Asia.Shanghai',
            '__Secure-ROLLOUT_TOKEN': 'CKnyhbrkpoybXhDzvJqmyOqMAxje3KCsyOqMAw%3D%3D',
            '__Secure-3PAPISID': '-595ZBKqI1188Ry9/AlnmL-aTVRd_x4Aos',
            '__Secure-3PSID': 'g.a000wAicZ4CdbyTjR-frPju3_eEeHnlLopy645WGppbCYZYUoTscsZ0K5d1mBYkPsc3rpWyttwACgYKAd8SARESFQHGX2MiOcT3fctLkOksfT88fcR35RoVAUF8yKrB3VhTPapCaeiv1_0oq-WJ0076',
            'LOGIN_INFO': 'AFmmF2swRAIgbKo_3lB9EEt5kH7ESFe1UsAWQFLOaXUVjNiNm383fE0CIDZwQrjH8cm1QqFCRPWib4mq06FO8mUgfMKFCWrJEu8G:QUQ3MjNmeElkZjhNUC1KRDdNSEZqYjZnZTJfbVdtb3lxeUVXZ25NV0pld09nREl6Tk9WV3oyNkxYc3IxUGZCZFRBOGswUVloTEMzWVhGSEM3enFuNWpsbm4zaE5MT180YmpQWlFvWnhYUTFyMDFiSE1OdTA4bTZxRGgzTFdKNzUwMTNpN2dyblZBbTB1MEhkelB1amdhYzBudmV6TlgxWGJB',
            '__Secure-1PSIDTS': 'sidts-CjEB7pHptXzxDW-TXxCc7FhFgPtlLJcdYdPPZF3QY1iKjdYn_FDruVKvasWwPQZtHRvTEAA',
            '__Secure-3PSIDTS': 'sidts-CjEB7pHptXzxDW-TXxCc7FhFgPtlLJcdYdPPZF3QY1iKjdYn_FDruVKvasWwPQZtHRvTEAA',
            '__Secure-3PSIDCC': 'AKEyXzX605QzijM9eKNOdsS763RC5S5fBbO3yxyuvfn_fjTTOUBN0Cs9z8QHmVkTs7mjDWYjsw',
        }
        self.headers = {
            'accept': '*/*',
            'accept-language': 'zh-CN,zh;q=0.9',
            'authorization': 'SAPISIDHASH 1745214862_7eebb205e4f4c552708ea3c7707909ce200e9ee0_u SAPISID3PHASH 1745214862_7eebb205e4f4c552708ea3c7707909ce200e9ee0_u',
            'content-type': 'application/json',
            'origin': 'https://www.youtube.com',
            'priority': 'u=1, i',
            'referer': 'https://www.youtube.com/@tech-shrimp/videos',
            'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
            'sec-ch-ua-arch': '"x86"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-form-factors': '"Desktop"',
            'sec-ch-ua-full-version': '"135.0.7049.96"',
            'sec-ch-ua-full-version-list': '"Google Chrome";v="135.0.7049.96", "Not-A.Brand";v="8.0.0.0", "Chromium";v="135.0.7049.96"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"15.0.0"',
            'sec-ch-ua-wow64': '?0',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'same-origin',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
            'x-client-data': 'CIm2yQEIpLbJAQipncoBCIDcygEIlqHLAQiSo8sBCIWgzQEIvNXOAQj45c4BCLnnzgEIz+nOAQ==',
            'x-goog-authuser': '0',
            'x-goog-visitor-id': 'CgtZbWhLT1pkUUdIZyjrupfABjIKCgJDThIEGgAgQA%3D%3D',
            'x-origin': 'https://www.youtube.com',
            'x-youtube-bootstrap-logged-in': 'true',
            'x-youtube-client-name': '1',
            'x-youtube-client-version': '2.20250417.01.00',
            # 'cookie': 'YSC=CdP-L-70lJ8; VISITOR_INFO1_LIVE=YmhKOZdQGHg; VISITOR_PRIVACY_METADATA=CgJDThIEGgAgQA%3D%3D; __Secure-ROLLOUT_TOKEN=CNmlz7yZyOmpVRCitv-xneiMAxixu9S-neiMAw%3D%3D; PREF=tz=Asia.Shanghai; __Secure-3PAPISID=LiDHAfR1VJugZGDc/A4-CB-qk8wYAljh59; __Secure-3PSID=g.a000wAicZxeB_U3Ja0lhOOJ5rml4X1fWm9fYDlBE0aBC7rCXMBi5SRnZERPn9XtVsTecfSXytwACgYKATESARESFQHGX2MiVBHXmxH33P4q_5NKoXtfchoVAUF8yKrUpdJ6k4YK4j0ANZqrDBgo0076; LOGIN_INFO=AFmmF2swRAIgTwwqVZhN6qKwwvWMIITHyq4tjdNattBDCNC10-OqN-ICIDQSMaoQ9EAxcOdGVPfv__ZKxQe5Gf1T2bflBjZFjb-2:QUQ3MjNmd0FTWnlEdTUxc0NJc0swTERvQ0liTXVIQmRJX3FiWTBOc0xMb1otWGhEdTNNY1dnMDNMOGU1SllOcm5OUzBrWTNJZHdLQ2RXOFc4LWR1OFdGX0RIUmp1X0YyeUw2SkpTeDY3Q3lkYlR5bWlpTG96eEJ5MWpacTJuLVNOa0toZV81aGhQY0k1UGNPZWxnc3JZdGJjT3l0Y1lIZEpB; __Secure-1PSIDTS=sidts-CjIB7pHptc8xj12ZVjNmDO8t2IKIlkDiSAc-hNUMbGxHOy_DHIDiAB2rNkze3iAobNFfBBAA; __Secure-3PSIDTS=sidts-CjIB7pHptc8xj12ZVjNmDO8t2IKIlkDiSAc-hNUMbGxHOy_DHIDiAB2rNkze3iAobNFfBBAA; __Secure-3PSIDCC=AKEyXzUjkXuUyPbehNAOO3ofmmWOKN0uesYVDyTeiQXNHFeaznIuCwwon4aJ-1z6Ib7uO_nfHw; ST-yve142=session_logininfo=AFmmF2swRAIgTwwqVZhN6qKwwvWMIITHyq4tjdNattBDCNC10-OqN-ICIDQSMaoQ9EAxcOdGVPfv__ZKxQe5Gf1T2bflBjZFjb-2%3AQUQ3MjNmd0FTWnlEdTUxc0NJc0swTERvQ0liTXVIQmRJX3FiWTBOc0xMb1otWGhEdTNNY1dnMDNMOGU1SllOcm5OUzBrWTNJZHdLQ2RXOFc4LWR1OFdGX0RIUmp1X0YyeUw2SkpTeDY3Q3lkYlR5bWlpTG96eEJ5MWpacTJuLVNOa0toZV81aGhQY0k1UGNPZWxnc3JZdGJjT3l0Y1lIZEpB',
        }
        self.params = {
            'prettyPrint': 'false',
        }
        self.json_data = {
            'context': {
                'client': {
                    'hl': 'zh-CN',
                    'gl': 'US',
                    'remoteHost': '172.247.175.42',
                    'deviceMake': '',
                    'deviceModel': '',
                    'visitorData': 'CgtZbWhLT1pkUUdIZyjrupfABjIKCgJDThIEGgAgQA%3D%3D',
                    'userAgent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36,gzip(gfe)',
                    'clientName': 'WEB',
                    'clientVersion': '2.20250417.01.00',
                    'osName': 'Windows',
                    'osVersion': '10.0',
                    'originalUrl': 'https://www.youtube.com/@tech-shrimp/videos',
                    'platform': 'DESKTOP',
                    'clientFormFactor': 'UNKNOWN_FORM_FACTOR',
                    'configInfo': {
                        'appInstallData': 'COu6l8AGEJGM_xIQ29rOHBCuj_8SEN-4zhwQ_vP_EhC_ic8cEParsAUQ89bOHBCJ6K4FEOHssAUQibDOHBDW9c4cELaKzxwQzN-uBRDf3M4cEJmYsQUQ8ZywBRCmmrAFEJmNsQUQgc3OHBCdprAFELfq_hIQlP6wBRDFgc8cEL2ZsAUQhdvOHBC24K4FEPTVzhwQ8OzOHBDJ5rAFEIiHsAUQ_LLOHBDevM4cEIeszhwQvYqwBRC72c4cENfBsQUQzdGxBRCI468FEOvo_hIQ8OLOHBDT4a8FENuvrwUQvbauBRDt3s4cELnZzhwQuOTOHBCk784cEMn3rwUQ5Of_EhD4q7EFEJ3QsAUQnvnOHBCWsv8SELPpzhwQy9GxBRCKgoATEI3MsAUQ4tSuBRDg4P8SEODNsQUQqf_OHBCa9M4cEImnzhwQh5LOHBDk5c4cEM-EgBMqMENBTVNIaFVkb0wyd0ROSGtCcFNDRXVmaTVndVA5QTd2LXdiNTdBUEozQVVkQnc9PQ%3D%3D',
                        'coldConfigData': 'COu6l8AGEPC6rQUQvbauBRDi1K4FEL2KsAUQ8ZywBRCd0LAFEM_SsAUQ4_iwBRCanLEFEKS-sQUQ18GxBRCS1LEFEIeSzhwQ_LLOHBDfuM4cEPTVzhwQ89bOHBCF284cEN_czhwQyeLOHBCZ5M4cEOTlzhwQo-bOHBCz6c4cEK_szhwQ8OzOHBCs7s4cEKTvzhwQw_TOHBDW9c4cEJ75zhwQqf_OHBDLgM8cEMWBzxwQoYLPHBDRhs8cENKIzxwQ9IjPHBC_ic8cEPaJzxwQtorPHBCMi88cEO2LzxwQ0o3PHBoyQU9qRm94MUd3eGJHcjV0aWR1TTBUeFlnS1lmTFZkbDE5SWhDV2w4SWdLQ3o0bU9RRUEiMkFPakZveDNFZjg1RTZrYTRsWHNVcWd5N2tiR1pTc2E1Y0ZYWGRDb1ZLdHhJcDNMc1lnKmxDQU1TVFEwbnVOMjNBdDRVemcyWEg2Z3F0UVM5RmYwRDQ5Q2JFSmd0c1FEWkFZUUM2Z0lWTHBteHR4LUZwQVdhdXdiX1diaUFBZ1NLcXdiakVhZ1Y0Y1FGdUd6ZDNRWUZzU2lkZV9hSUJzMHU%3D',
                        'coldHashData': 'COu6l8AGEhM5MDY0MTgxODY2MTQ2MDU1NjEwGOu6l8AGMjJBT2pGb3gxR3d4YkdyNXRpZHVNMFR4WWdLWWZMVmRsMTlJaENXbDhJZ0tDejRtT1FFQToyQU9qRm94M0VmODVFNmthNGxYc1VxZ3k3a2JHWlNzYTVjRlhYZENvVkt0eElwM0xzWWdCbENBTVNUUTBudU4yM0F0NFV6ZzJYSDZncXRRUzlGZjBENDlDYkVKZ3RzUURaQVlRQzZnSVZMcG14dHgtRnBBV2F1d2JfV2JpQUFnU0txd2JqRWFnVjRjUUZ1R3pkM1FZRnNTaWRlX2FJQnMwdQ%3D%3D',
                        'hotHashData': 'COu6l8AGEhM1NTI2OTUzODQ3NjIxNTMzNjU1GOu6l8AGKJTk_BIopdD9Eiiekf4SKMjK_hIot-r-EijBg_8SKJGM_xIoro__EiiWsv8SKJjy_xIo_vP_Eii79f8SKIj8_xIonoCAEyjHgIATKIqCgBMo5YKAEyi0g4ATKMKDgBMoz4SAEyjvhIATMjJBT2pGb3gxR3d4YkdyNXRpZHVNMFR4WWdLWWZMVmRsMTlJaENXbDhJZ0tDejRtT1FFQToyQU9qRm94M0VmODVFNmthNGxYc1VxZ3k3a2JHWlNzYTVjRlhYZENvVkt0eElwM0xzWWdCNENBTVNJUTBLb3RmNkZhN0JCcE5OOGdxNkJCVVgzY19DRE1hbjdRdll6UW1sd0FYWFZ3PT0%3D',
                    },
                    'userInterfaceTheme': 'USER_INTERFACE_THEME_LIGHT',
                    'timeZone': 'Asia/Shanghai',
                    'browserName': 'Chrome',
                    'browserVersion': '135.0.0.0',
                    'acceptHeader': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                    'deviceExperimentId': 'ChxOelE1TlRZME1EWXdOek14TXpJd09ESTJNdz09EOu6l8AGGOu6l8AG',
                    'rolloutToken': 'CNmlz7yZyOmpVRCitv-xneiMAxixu9S-neiMAw%3D%3D',
                    'screenWidthPoints': 254,
                    'screenHeightPoints': 911,
                    'screenPixelDensity': 1,
                    'screenDensityFloat': 1,
                    'utcOffsetMinutes': 480,
                    'connectionType': 'CONN_CELLULAR_3G',
                    'memoryTotalKbytes': '8000000',
                    'mainAppWebInfo': {
                        'graftUrl': 'https://www.youtube.com/@tech-shrimp/videos',
                        'pwaInstallabilityStatus': 'PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED',
                        'webDisplayMode': 'WEB_DISPLAY_MODE_BROWSER',
                        'isWebNativeShareAvailable': True,
                    },
                },
                'user': {
                    'lockedSafetyMode': False,
                },
                'request': {
                    'useSsl': True,
                    'internalExperimentFlags': [],
                    'consistencyTokenJars': [],
                },
                'clickTracking': {
                    'clickTrackingParams': 'CDAQ8eIEIhMIw6fp7rfojAMVj5hWAR02pQR9',
                },
                'adSignalsInfo': {
                    'params': [
                        {
                            'key': 'dt',
                            'value': '1745214828761',
                        },
                        {
                            'key': 'flash',
                            'value': '0',
                        },
                        {
                            'key': 'frm',
                            'value': '0',
                        },
                        {
                            'key': 'u_tz',
                            'value': '480',
                        },
                        {
                            'key': 'u_his',
                            'value': '8',
                        },
                        {
                            'key': 'u_h',
                            'value': '1080',
                        },
                        {
                            'key': 'u_w',
                            'value': '1920',
                        },
                        {
                            'key': 'u_ah',
                            'value': '1032',
                        },
                        {
                            'key': 'u_aw',
                            'value': '1920',
                        },
                        {
                            'key': 'u_cd',
                            'value': '24',
                        },
                        {
                            'key': 'bc',
                            'value': '31',
                        },
                        {
                            'key': 'bih',
                            'value': '911',
                        },
                        {
                            'key': 'biw',
                            'value': '239',
                        },
                        {
                            'key': 'brdim',
                            'value': '0,0,0,0,1920,0,1920,1032,254,911',
                        },
                        {
                            'key': 'vis',
                            'value': '1',
                        },
                        {
                            'key': 'wgl',
                            'value': 'true',
                        },
                        {
                            'key': 'ca_type',
                            'value': 'image',
                        },
                    ],
                },
            },
            # 'continuation': '4qmFsgKPCRIYVUNhNkQyazVxaHBPSTlJLVdUOGZwZDZnGvIIOGdiUEJock1CbnJKQmdyRUJncWJCa0ZpVkdaMFkweDFWMnRJUWt4QkxXcGljMGRITTNvMkxUSjBXbFZ4VkZGVk5tWkxTM2swYTJwdmFVbE5lRU4yU1d4TE1HVlFWVFZtVkRKeExWWmZNV3BSVkZOak4waHFaRlZWZUdWUFEyNUxjblZ2WDFvM2FFWkxWMEpFYld0VWRHcGpkbEYyVTIxbE0wZFlVRU0yU2pCUFNFdzNTRmx5TmsxTVQyRTNTak5OVldwVU4xTkNhbWt5YzFwcWF5MUtNRU5zTXpaRlNsWm5ObXh1ZVhaVFVHaEZOazAwYm1oNU0wcDZRWEZLUW1KWGVXczVYMlpwWDJSNlRtcDNRbXc0U2xZdGNXdHhiRWRmVWs4M2JrVkpZMTk0Y1hWeU5rdEpjbHA2TWtaTldtVk1UamhUUlhONU5VSnJWbGhaVkc1ck9HWldSbFZQYnpOWVNVWTRkVkZtUVdFNVRETmpNRWt4U0ZoSmRUUkNTVzk2VG1GVUxVZGxUVzlMZGtRNFNIZGpjVk00WlZaSVltaFlWa0V4U1hGU01EVXpWMWw1ZEZBMlIwVlpTbFEwUldweWVUWmtVakZNWDFKV1ZHbDBjVTVqYkZkV1kzRm9kalJuVTI5UmJGUkVWV2xMYjNocGRraHZNMDFUTTFacWF6ZDVWWGRqWjIxdFZVWk9ORVkyYmxCcWVrNTNUbkJFZWkxWU4yTkpTRzVDYkRkQ1UxZFBlRWxMUkhsU1FuUmFUME5KTlZCWllWaHBiVFl3UlRSS1R5MXNaM2h0WlY5WGFYWTBOelV0YjB0T2EySmtZamsxWlhZM1dVWkVOM1pQUzJSMVNGOXlRMVEwUVVKaVRrTkRaM0JrUm1KYWFubEZZMkZmZG1sUlluTjJiekpYT1U5YWFtaFFWalZrV20wd2NVUlpXRU4wWWxKQlVHMVRVSEZKTWxndFYwRm9TRVJDYWxOMlozbGpVekZvTlVaNFZ6VlZkekpDZVdWc2IySXhhRVk0U1VscVUwbFRXVFpDVmtKWU1UbGFORGMwTW1sc2JXTmhWa3B0V1VRNVpHaHhWbTVsYUdwaFZrWnpVamh3VEd0d1RFNWtVMEZzU2sxd2RtdDNhMmsxYWtaaFgzY3RjM1o1YVhoWkxUQmtTbEZrU3pReE4xTmlPWHBqVjBrMVkwNU1iek5DYmxsSmQzcENWVzAyV1RKM1MxQkpkemhGVW05cVpsWjFTVTloV1RWMGJHcGZSbFIzWDFaUmRUWlZURmRUTUV3NE4yWjRObVF3T0VsSVdHTXROamxJU1ZnelZGWmhha2RwU1VOMFRFNVhhVnBLWW5CdGIxQmliMWMzWjNoSkxVSjBjM0kyVWswMk5VZFdZM28zWkU1NmNHNVdjRmxPVDNCblFubEVPRUZzZDBZMk5HSmpSSE5qU1JJa05tWXlaakUyTURFdE1EQXdNQzB5TlRNMkxXRTROalV0TlRneU5ESTVZelE1TkRkaklBUSUzRA%3D%3D',
        }
        self.session = requests.Session()

    # 获取第一页数据，并返回请求供翻页使用
    def info_one(self):
        try:
            response = self.session.get(
                'https://www.youtube.com/@tech-shrimp/videos',
                cookies=self.cookies,
                headers=self.headers
            )
            response.raise_for_status()
            return response.text
        except requests.RequestException as e:
            print(f"请求出错！！: {e}")
            return None

    # 使用正则匹配获取continuation并传入jsondata_
    def get_continuation(self,data, is_initial: bool = True):
        try:
            # 判断是否是第一页
            if is_initial:
                # 使用正则匹配出源代码中的continuation
                pattern = r'("token":".*?")'
                # 将提取到的数据进行url解码,并使用split分割，列表取值
                match = re.search(pattern, data)
                if match:
                    return unquote(match.group(1)).split('"')[3]
            else:
                json_data = json.loads(data)
                continuation_items = json_data.get('onResponseReceivedActions', [])
                for item in continuation_items:
                    continuation_data = item.get('appendContinuationItemsAction', {}).get('continuationItems', [])
                    for info in continuation_data:
                        continuation_info = info.get('continuationItemRenderer', {}).get('continuationEndpoint', {})
                        token = continuation_info.get('continuationCommand', {}).get('token')
                        if token:
                            return token
            print(f"没有continuation参数")
            return None
        except (re.error, json.decoder.JSONDecodeError, KeyError) as e:
            print(f"发生错误：", e)
            return None

    # 翻页函数，将取出的continuation传入获取返回内容
    def fetch_page(self, continuation):
        jsondata_ = self.json_data.copy()
        if continuation:
            jsondata_['continuation'] = continuation

        try:
            response = self.session.post('https://www.youtube.com/youtubei/v1/browse',
                                         params=self.params,
                                         cookies=self.cookies,
                                         headers=self.headers,
                                         json=jsondata_
                                         )
            response.raise_for_status()
            return response.json()
        except requests.RequestException as e:
            print(f"请求错误：", e)
            return None



if __name__ == '__main__':
    spider = Spider_yg()
    data = spider.info_one()
    if not data:
        print("无法获取第一页数据，程序退出")
        exit(1)

    token = spider.get_continuation(data, is_initial=True)
    if not token:
        print("无法获取初始 continuation 参数，程序退出")
        exit(1)

    page_count = 1
    while token:
        print(f"正在获取第{page_count}页数据。。。")

        info = spider.fetch_page(token)
        if not info:
            print("获取数据失败，停止翻页")
            break

        print(f"第{page_count}页数据获取成功")

        token = spider.get_continuation(json.dumps(info), is_initial=False)
        if not token:
            print("循环结束，无 continuation 参数")
            break

        page_count += 1

    print(f"共获取{page_count - 1}页数据！")
