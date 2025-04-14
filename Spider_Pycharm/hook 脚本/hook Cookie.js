
// hook Cookie 脚本
(function(){
    'use strict';
    // 临时存储 cookie 的变量
    var cookieTemp = '';

    // 使用 object.defineProperty 来重写 document.cookie 的 getter 和 setter
    Object.defineProperty(document, 'cookie', {
        set: function(value) {
            // 如果设置的 cookie 包含特定关键字 ‘__av’,触发调试器
            if(value.indexOf('__av') !== -1){
                console.log("拦截到包含 '__av' 的 cookie 设置：", value);

                // 触发调试器
                debugger;
            }

            // 打印捕获到的 cookie 设置
            console.log('捕获到 cookie 设置 ==>', value);

            // 更新临时存储变量
            cookieTemp = value;
            return value;
        },
        get: function(value){
            // 返回临时存储的 cookie 值
            return cookieTemp;
        }
    })
    console.log('document.cookie 的 getter 和 setter 已被挂钩')
})();