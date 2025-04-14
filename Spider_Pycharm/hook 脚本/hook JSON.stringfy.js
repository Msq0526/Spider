

// hook JSON.stringify 脚本
(function () {
    // 保存原有的 JSON.stringify 方法
    var originalStringify = JSON.stringify;

    // 重写 JSON.stringify 方法
    JSON.stringify = function (params) {
        // 打印日志，方便调试
        console.log('HOOK JSON.stringify');
        console.log(params);

        // 触发调试器，便于调试
        debugger;

        // 调用原始的 JSON.stringify 方法
        return originalStringify.apply(this, arguments);
    }
}
)();
