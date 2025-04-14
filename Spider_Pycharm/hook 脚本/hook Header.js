
// hook Header 脚本
(function () {
    // 保存原有的 XMLHttpRequest.prototype.SetRequestHeader 方法
    var originalSetRequestHeaders = window.XMLHttpRequest.prototype.setRequestHeader;

    // 重写 setRequestHeader 方法
    window.XMLHttpRequest.prototype.setRequestHeader = function (key, value) {
        // 检查是否拦截到 Authorization 头部
        if (key === 'Authorization') {
            console.log('拦截到 Authorization 请求头：', value);

            // 触发调试器，便于调试
            debugger;
        }

        // 调用原始的 setRequestHeader 方法
        return originalSetRequestHeaders.apply(this, arguments);
    };
    console.log('XMLHttpRequest.setRequestHeader 已被挂钩');
}
)();