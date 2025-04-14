
// hook JSON.parse 脚本
(function () {
    // 保存原有的 JSON.parse 方法
    var originalParse = JSON.parse;
    
    // 重写 JSON.parse 方法
    JSON.parse = function (params) {
        // 打印日志，方便调试
        console.log('HOOK JSON.parse');
        console.log(params);

        // 触发调试器，便于调试
        debugger;

        // 调用原始的 JSON.parse 方法
        return originalParse.apply(this, arguments);
    }
}
)();