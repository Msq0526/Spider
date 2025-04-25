/*
url： https://www.haeea.cn/
加密接口：https://www.haeea.cn/
rs vmp
*/


require('./env');
require('./ts');
require('./jm');
// require('./test')


function get_cookie(){
    console.log((document.cookie).length)
    return document.cookie
}

get_cookie()

debugger;