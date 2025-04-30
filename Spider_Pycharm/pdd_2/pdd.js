


require("./env")
require("./loader")


function get_anti_content(){
    let e, anti_content;
    e = new Date().getTime();
    anti_content = (window.zhiyuan("eDaA"))({
        serverTime: e
    }).messagePack();

    // return anti_content
    console.log(anti_content.length)
    console.log("anti_content", anti_content)
}

get_anti_content()