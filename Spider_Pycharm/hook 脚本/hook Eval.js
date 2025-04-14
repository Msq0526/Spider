

// Hook Eval 脚本
(function(){
    // 保存原始的 eval 方法
    window._cr_eval = window.eval;
    // 重写 eval 方法
    var myEval = function(code) {
        // 打印被传递到 eval 的代码
        console.log('执行的 eval 代码:');
        console.log(code);
        console.log('=================== eval end ====================');

        // 触发调试器，便于调试
        debugger;


        // 调用原始的 eval 方法
        return window._cr_eval(code);
    };


    // 绑定上下文并保留原始 toString 方法
    var _myEval = myEval.bind(null);
    _myEval.toString = window._cr_eval.toString;

    // 使用 Object.defineProperty 重写 window.eval 
    Object.defineProperty(window, 'eval', {
        value: _myEval,
        writable: false,    // 禁止重新赋值
        configurable: false // 禁止重新配置
    });
    
    console.log("window.eval 已被挂钩")
})();


